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
    aditional: {
      inputs: themeVars.inputs,
      badges: themeVars.badges,
    },
  },
  typography: {
    fontFamily: themeVars.fontFamily,
    h2: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "133%",
      color: themeVars.main,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "133%",
      color: themeVars.main,
    },
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
          maxWidth: "1440px",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          paddingTop: 48,
          paddingBottom: 80,
          paddingLeft: 64,
          paddingRight: 64,
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
        disableRipple: true, // ⬅️ глобально отключает ripple у всех основанных на ButtonBase компонентов
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
          marginTop: "24px", // ⬅️ расстояние от таба до индикатора
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
          padding: 0, // ⬅️ обнуление паддингов
          minHeight: "auto", // ⬅️ убрать лишнюю высоту
          minWidth: "auto",
          marginRight: "40px",

          "&:last-of-type": {
            marginRight: 0, // ⬅️ убираем отступ у последнего таба
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
          textAlign: "left", // или "right", если нужно
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
          minHeight: "14px", // или больше, если нужен запас
        },
      },
    },
  },
});

export default theme;
