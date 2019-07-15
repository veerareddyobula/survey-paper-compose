import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import theme from "../../styles/customMuiTheme";
import Question from "./question";

export const modalTitle = "Add Question";
export const initValues = {}
export const setOpen = action("setOpen");

storiesOf("Question", module).add("default", () => (
    <MuiThemeProvider theme={theme}>
        <Question
            title={modalTitle}
            initValues={initValues}
            closeModal={setOpen}
        />
    </MuiThemeProvider>
));
