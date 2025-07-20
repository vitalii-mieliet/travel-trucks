import { createTheme } from "@mui/material/styles";
import themeVars from "@/styles/themeVars";

const theme = createTheme({
  palette: {
    primary: { main: themeVars.main },
    secondary: { main: themeVars.text },
    error: { main: themeVars.button },
    background: {
      default: themeVars.white,
      paper: themeVars.badges,
    },
    text: {
      primary: themeVars.text,
      secondary: themeVars.gray,
    },
    gray: {
      light: themeVars.grayLight,
      main: themeVars.gray,
    },
    button: {
      main: themeVars.button,
      hover: themeVars.buttonHover,
    },
    ratingStar: {
      default: themeVars.grayLight,
      active: themeVars.rating,
    },
    favoriteButton: {
      default: themeVars.main,
      active: themeVars.button,
    },
  },
  typography: {
    fontFamily: themeVars.fontFamily,
    h3: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "133%",
      color: themeVars.main,
    },
    h6: { fontSize: "18px", fontWeight: 600 },
    body1: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "150%",
      color: themeVars.main,
    },
    body2: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "150%",
      color: themeVars.text,
    },
    button: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "150%",
    },
    caption: { fontSize: "12px" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: themeVars.inputs,
          color: "var(--main)", // цвет текста/иконок
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          maxWidth: "1440px",
          paddingLeft: "64px",
          paddingRight: "64px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          minHeight: "80px",
          "@media (min-width:600px)": {
            minHeight: "80px",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1440px !important",
          paddingLeft: "64px",
          paddingRight: "64px",
          marginLeft: "auto",
          marginRight: "auto",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid var(--gray-light)",
          borderRadius: "20px",
          padding: "24px",
          backgroundColor: "var(--white)",
          boxShadow: "none",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: themeVars.fontFamily,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "-0.01em",
        },

        contained: {
          padding: "16px 60px",
          borderRadius: "200px",
          color: themeVars.white,
          backgroundColor: themeVars.button,
          boxShadow: "none",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: themeVars.buttonHover,
            boxShadow: "none",
          },
        },
        outlined: {
          padding: "16px 60px",
          borderRadius: "200px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: themeVars.grayLight,
          color: themeVars.main,

          transition: "background-color 0.3s ease",
          "&:hover": {
            borderColor: themeVars.buttonHover,
            backgroundColor: "transparent",
          },
        },

        text: {
          textDecoration: "none",
          padding: 0,
          minWidth: "auto",
          color: themeVars.main,
          "&:hover": {
            color: themeVars.buttonHover,
            backgroundColor: "transparent",
            textDecoration: "none",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          padding: "12px 18px",
          fontWeight: 500,
          fontSize: 16,
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // ⬅️ глобально отключает ripple у всех основанных на ButtonBase компонентов
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
