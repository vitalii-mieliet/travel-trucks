import { createTheme } from "@mui/material/styles";
import themeVars from "@/styles/themeVars";
import AppIcon from "@/components/common/AppIcon/AppIcon.jsx";
import { mediaFrom } from "./media";
import { BREAKPOINTS } from "./breakpoints";

const theme = createTheme({
  breakpoints: {
    values: BREAKPOINTS,
  },
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
    aditional: {
      inputs: themeVars.inputs,
      badges: themeVars.badges,
    },
  },
  typography: {
    fontFamily: themeVars.fontFamily,
    h1: {
      fontWeight: 600,
      color: themeVars.white,
      fontSize: "40px", // от мобилы до десктопа
      lineHeight: 1.2,
      [mediaFrom("sm")]: {
        fontSize: "44px",
        lineHeight: 1,
      },
      [mediaFrom("lg")]: {
        fontSize: "48px",
        lineHeight: 0.67, // только на десктопе
      },
    },
    h2: {
      fontWeight: 600,
      color: themeVars.main,
      fontSize: "clamp(20px, 3vw, 32px)",
      lineHeight: 1.33,
    },
    h3: {
      fontWeight: 600,
      color: themeVars.main,
      fontSize: "24px",
      lineHeight: 1.33,
    },
    h5: {
      fontWeight: 500,
      color: themeVars.text,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      color: themeVars.white,
      fontSize: "24px",
      lineHeight: 1.33,
    },
    body1: {
      fontWeight: 400,
      color: themeVars.main,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      color: themeVars.text,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: themeVars.fontFamily,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.5,
      textTransform: "none",
      letterSpacing: "-0.01em",
    },
    subtitle1: {
      fontWeight: 600,
      color: themeVars.white,
      fontSize: "24px",
      lineHeight: 1.33,
    },

    caption: {
      fontSize: "12px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  mixins: {
    toolbar: {
      minHeight: 72,
    },
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
          color: "var(--main)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          width: "100%",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginLeft: "auto",
          marginRight: "auto",

          [mediaFrom("sm")]: {
            maxWidth: "768px",
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          [mediaFrom("lg")]: {
            maxWidth: "1440px",
            paddingLeft: "64px",
            paddingRight: "64px",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100%",
          boxSizing: "border-box",
          paddingTop: 48,
          paddingBottom: 80,
          paddingLeft: 16,
          paddingRight: 16,
          [mediaFrom("sm")]: {
            maxWidth: "768px",
            paddingLeft: 32,
            paddingRight: 32,
          },
          [mediaFrom("lg")]: {
            maxWidth: "1440px",
            paddingLeft: 64,
            paddingRight: 64,
          },
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
        contained: {
          width: "100%",
          maxWidth: "320px",
          padding: "16px 60px",
          borderRadius: "200px",
          color: themeVars.white,
          backgroundColor: themeVars.button,
          boxShadow: "none",
          transition: "background-color 0.3s ease",

          [mediaFrom("lg")]: {
            width: "auto",
          },

          "&:hover": {
            backgroundColor: themeVars.buttonHover,
            boxShadow: "none",
          },
        },

        outlined: {
          padding: "12px 32px",
          borderRadius: "200px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: themeVars.grayLight,
          color: themeVars.main,
          transition: "background-color 0.3s ease",

          [mediaFrom("lg")]: {
            width: "auto",
          },

          "&:hover": {
            borderColor: themeVars.buttonHover,
            backgroundColor: "transparent",
          },
        },

        text: {
          padding: 0,
          minWidth: "auto",
          color: themeVars.main,
          textDecoration: "none",

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
          backgroundColor: themeVars.badges,
          mixBlendMode: "multiply",
          border: "none",

          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "150%",
          textAlign: "center",
          color: themeVars.primary,
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
        disableRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${themeVars.border}`,
        },
        indicator: {
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          height: "6px",
          marginTop: "24px",
          "&::before": {
            content: '""',
            display: "block",
            width: "85px",
            height: "6px",
            backgroundColor: themeVars.button,
            borderRadius: "3px",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: themeVars.fontFamily,
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "120%",
          textTransform: "none",
          color: themeVars.text,
          padding: 0,
          minHeight: "auto",
          minWidth: "auto",
          marginRight: "40px",

          "&:last-of-type": {
            marginRight: 0,
          },

          "&.Mui-selected": {
            color: themeVars.text,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: themeVars.fontFamily,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "150%",
          color: themeVars.main,
        },
        head: {
          textAlign: "center",
        },
        body: {
          textAlign: "left",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: themeVars.inputs,
          borderRadius: 12,

          display: "flex",
          alignItems: "center",

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
        input: {
          height: "60px",
          boxSizing: "border-box",
          padding: "8px 14px",
          color: themeVars.main,

          "&::placeholder": {
            color: themeVars.gray,
            opacity: 1,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          minHeight: "14px",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: themeVars.button,
          backgroundColor: themeVars.inputs,
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "133%",
          width: "60px",
          height: "60px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "120%",
          color: themeVars.main,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          padding: 0,
          margin: 0,
          listStyle: "none",
        },
        ol: {
          padding: 0,
          margin: 0,
          listStyle: "none",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: themeVars.white,
        },
      },
    },
  },
});

export default theme;
