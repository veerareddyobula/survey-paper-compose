import React from "react";
import { storiesOf } from "@storybook/react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { action } from "@storybook/addon-actions";

import theme from "../../styles/customMuiTheme";
import Card from "./card";

const title = "Custom Questions";
const subTitle = "you must add atleast one question to launch a survey";
const settingsActionHandler = action("settingsActionHandler");

storiesOf("Card", module)
  .add("Empty Questions", () => (
    <MuiThemeProvider theme={theme}>
      <Card
        title={title}
        subTitle={subTitle}
        settingsActionHandler={settingsActionHandler}
      />
    </MuiThemeProvider>
  ))
  .add("Single Questions", () => (
    <MuiThemeProvider theme={theme}>
      <Card
        title={title}
        subTitle={subTitle}
        settingsActionHandler={settingsActionHandler}
      >
        <ul>
          <li>First Question</li>
        </ul>
      </Card>
    </MuiThemeProvider>
  ));
