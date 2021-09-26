import {
  Callout,
  CommandBarButton,
  DefaultButton,
  Persona,
  PersonaSize,
  Stack,
  Text,
} from "@fluentui/react";
import {
  navbarCalloutBodySignOutBtnStyles,
  navbarCalloutBodySignOutStackItem,
  navbarCalloutBodyStack,
  navbarMainStack,
  navbarProfileButtonStyles,
  navbarProfileIconsStackItem,
  navbarTextStyles,
} from "./navbar.styles";
import avatar from "./assets/avatar-example.png";
import unAuthAvatar from "./assets/avatar-unauthorized.png";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showCallout, setShowCallout] = useState<boolean>(false);
  const location = useLocation();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("autorizedUser");
    setShowCallout(false);
    history.push("/login");
  };

  return (
    <Stack styles={navbarMainStack}>
      <Stack.Item>
        <Text variant="large" styles={navbarTextStyles}>
          Invoice app
        </Text>
      </Stack.Item>
      <Stack.Item styles={navbarProfileIconsStackItem}>
        <CommandBarButton
          styles={navbarProfileButtonStyles}
          disabled={location.pathname === "/login"}
          onClick={() => setShowCallout((prev) => !prev)}
          onRenderIcon={() => {
            return (
              <Persona
                imageUrl={
                  location.pathname !== "/login" ? avatar : unAuthAvatar
                }
                size={PersonaSize.small}
                imageAlt="User image"
                hidePersonaDetails
              />
            );
          }}
          id="profile-avatar"
        />
        {showCallout && (
          <Callout
            target={`#profile-avatar`}
            isBeakVisible={false}
            setInitialFocus
            onDismiss={() => setShowCallout((prev) => !prev)}
          >
            <Stack styles={navbarCalloutBodyStack} tokens={{ childrenGap: 12 }}>
              <Stack.Item styles={navbarCalloutBodySignOutStackItem}>
                <Text>Bever CRM</Text>
                <DefaultButton
                  text="Sign Out"
                  styles={navbarCalloutBodySignOutBtnStyles}
                  onClick={logoutHandler}
                />
              </Stack.Item>
              <Stack.Item>
                <Persona
                  imageUrl={avatar}
                  imageAlt="Profile image"
                  size={PersonaSize.size100}
                  text="User"
                />
              </Stack.Item>
            </Stack>
          </Callout>
        )}
      </Stack.Item>
    </Stack>
  );
};

export default Navbar;
