import {
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
} from "@fluentui/react";

export const navbarMainStack: IStackStyles = {
  root: {
    width: "100%",
    flex: "0 0 8%",
    background: "linear-gradient(45deg, black, #471f9b)",
    padding: "0 16px",
    flexDirection: "row",
    justifyContent: " space-between",
    alignItems: "center",
  },
};

export const navbarTextStyles: ITextStyles = {
  root: {
    color: "#fff",
  },
};

export const navbarProfileIconsStackItem: IStackItemStyles = {
  root: {
    height: "100%",
    display: "flex",

    button: {
      backgroundColor: "inherit",
      color: "#fff",
      i: {
        color: "#d4ab14",
      },
    },
  },
};

export const navbarProfileButtonStyles: IButtonStyles = {
  rootHovered: {
    backgroundColor: "yarn",
  },
  rootPressed: {
    backgroundColor: "#484644",
  },
};

export const navbarCalloutBodyStack: IStackStyles = {
  root: {
    width: "320px",
    minHeight: "180px",
    boxShadow: "0 24px 54px rgb(0 0 0 / 15%), 0 4.5px 13.5px rgb(0 0 0 / 8%)",
    backgroundColor: "#fff",
    padding: "20px",
    paddingRight: 0,
    paddingTop: 0,
  },
};

export const navbarCalloutBodySignOutStackItem: IStackItemStyles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const navbarCalloutBodySignOutBtnStyles: IButtonStyles = {
  root: {
    border: 0,
    padding: "24px 0",
  },
  label: {
    fontWeight: "normal",
  },
};
