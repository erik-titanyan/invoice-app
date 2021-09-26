import {
  IButtonStyles,
  IStackStyles,
  IStyleFunctionOrObject,
  ITextFieldStyleProps,
  ITextFieldStyles,
  ITextStyles,
} from "@fluentui/react";
import loginBG from "./assets/loginBG.png";

export const loginMainStack: IStackStyles = {
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${loginBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  },
};

export const loginFormStack: IStackStyles = {
  root: {
    width: 350,
    height: 400,
    margin: "auto",
    borderRadius: 10,
    background: "rgba(0,0,0,0.7)",
    boxShadow: "0 0 10px #000",
    zIndex: 1,
    paddingTop: 48,
    paddingLeft: 24,
    paddingRight: 24,
  },
};

export const loginTitleStyles: ITextStyles = {
  root: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 54,
  },
};

export const loginInputStyles: IStyleFunctionOrObject<
  ITextFieldStyleProps,
  ITextFieldStyles
> = {
  root: {
    marginBottom: 15,
    label: {
      color: "#fff",
      fontWeight: "normal",
    },
  },
  fieldGroup: {
    backgroundColor: "rgb(223 223 223)",
  },
};

export const loginSubmitBtnStyles: IButtonStyles = {
  root: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "#431d93",
    borderRadius: 50,
    border: "none",
    color: "#fff",
  },
};

export const loginErrorMessageStyles: ITextStyles = {
  root: {
    color: "#c65a5a",
    marginTop: "54px !important",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
};
