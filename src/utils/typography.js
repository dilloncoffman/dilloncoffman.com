import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = () => ({
  p: {
    color: "#001626",
  },
  a: {
    color: "#0D96FF",
    textShadow: "none",
    backgroundImage: "none",
  },
  "a:hover": {
    textDecoration: "none !important",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #B3DEFF 1px, #B3DEFF 2px, rgba(0, 0, 0, 0) 20px)",
  },
  blockquote: {
    borderLeft: "0.27187rem solid #B3DEFF !important",
  },
  button: {
    border: "none",
  },
  "button:hover": {
    cursor: "pointer",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0, #B3DEFF 0, #B3DEFF 1px, rgba(0, 0, 0, 0) 40px)",
  },
})

// linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px)

const typography = new Typography(fairyGatesTheme)
export default typography
