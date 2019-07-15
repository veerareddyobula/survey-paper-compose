import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import theme from "../../styles/customMuiTheme";
import Questionnaire from "./questionnaire";

export const questionnaires = [
  {
    question: "This is my first question",
    options: [
      { isValid: false, answer: "My First Answer" },
      { isValid: true, answer: "My Second Answer" },
      { isValid: true, answer: "My Third Answer" }
    ]
  },
  {
    question: "This is my second question",
    options: [
      { isValid: false, answer: "My First Answer" },
      { isValid: false, answer: "My Second Answer" },
      { isValid: true, answer: "My Third Answer" }
    ]
  },
  {
    question: "This is my third question",
    options: [
      { isValid: true, answer: "My First Answer" },
      { isValid: true, answer: "My Second Answer" },
      { isValid: true, answer: "My Third Answer" }
    ]
  }
];
export const eventHandler = action("eventHandler");

storiesOf("Questionnaire", module).add("default", () => {
  return (
    <MuiThemeProvider theme={theme}>
      {questionnaires.map((item, index) => (
        <Questionnaire
          {...item}
          eventHandler={eventHandler}
          key={`Questionnaire_${index}`}
        />
      ))}
    </MuiThemeProvider>
  );
});
