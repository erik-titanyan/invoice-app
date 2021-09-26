import { Stack, TextField, Text, DefaultButton } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../config/api/config";
import {
  loginErrorMessageStyles,
  loginFormStack,
  loginInputStyles,
  loginMainStack,
  loginSubmitBtnStyles,
  loginTitleStyles,
} from "./login.styles";

interface ILoginForm {
  email: string;
  password: string;
}

interface IUser {
  Name: string;
  Password: string;
  UserId: string;
}

const Login = () => {
  const [form, setForm] = useState<ILoginForm>({ email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    (async function () {
      const res = await getUsers();
      setUsers(res.value);
    })();
  }, []);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const findedUser: IUser | undefined = users.find(
      (i: IUser) =>
        i.Name.toLowerCase() === form.email.toLowerCase() &&
        i.Password === form.password
    );
    if (findedUser) {
      localStorage.setItem("autorizedUser", findedUser["UserId"]);
      history.push("/");
    } else {
      setShowErrorMessage(true);
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <Stack styles={loginMainStack}>
      <Stack styles={loginFormStack}>
        <Text variant="large" styles={loginTitleStyles}>
          Sign in
        </Text>
        {showErrorMessage && (
          <Text styles={loginErrorMessageStyles}>Wrong Email or Password.</Text>
        )}
        <form onSubmit={submitHandler}>
          <TextField
            styles={loginInputStyles}
            label="Enter your email"
            placeholder="example@mail.com"
            name="email"
            value={form?.email}
            onChange={(e) =>
              changeHandler(e as React.ChangeEvent<HTMLInputElement>)
            }
            borderless
          />

          <TextField
            styles={loginInputStyles}
            label="Enter your password"
            type="password"
            placeholder="password"
            name="password"
            revealPasswordAriaLabel="Show password"
            value={form?.password}
            onChange={(e) =>
              changeHandler(e as React.ChangeEvent<HTMLInputElement>)
            }
            canRevealPassword
          />

          <DefaultButton
            text="submit"
            styles={loginSubmitBtnStyles}
            type="submit"
          />
        </form>
      </Stack>
    </Stack>
  );
};

export default Login;
