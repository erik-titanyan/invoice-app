import { Stack } from "@fluentui/react";
import Navbar from "../navbar/Navbar";
import { layoutConentStack, layoutMainStack } from "./layout.styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Stack styles={layoutMainStack}>
      <Navbar />
      <Stack styles={layoutConentStack}>{children}</Stack>
    </Stack>
  );
};

export default Layout;
