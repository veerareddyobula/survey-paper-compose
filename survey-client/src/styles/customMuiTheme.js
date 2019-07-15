import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  body: {
    margin: "0px"
  },
  typography: {
    fontFamily: '"Roboto", "Lato"'
  },
  colorPrimary: {
    color: "#F4F6F9",
    backgroundColor: "#DF3868"
  },
  overrides: {
    MuiButton: {
      root: {
        color: "#F4F6F9",
        backgroundColor: "#00C3D9",
        "&:hover": {
          backgroundColor: "#AAB9CE"
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#F4F6F9",
        backgroundColor: "#DF3868"
      }
    }
  }
});
