import React from "react";
import { storiesOf } from "@storybook/react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import theme from "../../styles/customMuiTheme";
import HeaderAppBar from "./headerAppBar";

export const appTitle = "Survey Papers";

storiesOf("HeaderAppBar", module).add("default", () => (
    <MuiThemeProvider theme={theme}>
        <HeaderAppBar appTitle={appTitle} />
    </MuiThemeProvider>
));
