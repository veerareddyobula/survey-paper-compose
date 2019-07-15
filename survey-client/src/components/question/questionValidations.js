import * as Yup from "yup";

export const setQuestionValidations = values => {
  return Yup.object().shape({
    question: Yup.string().required("Please add a survey question"),
    options: Yup.array()
      .of(
        Yup.object()
          .nullable()
          .shape({
            answer: Yup.string().required(
              "Empty options are not allowed, please add a valied option"
            )
          })
      )
      .test(
        "SelectAnswer",
        "Please select atleast one correct answer from added options ",
        options => {
          if (options) {
            let numberOfAnswers = 0;
            options.forEach(item => {
              if (item.isValid) {
                numberOfAnswers = numberOfAnswers + 1;
              }
            });
            return numberOfAnswers > 0;
          }
          return true;
        }
      )
      .test(
        "NumberOfOptions",
        "Please add atleast two options per question ",
        options => {
          if (options) {
            return options.length >= 2;
          }
          return true;
        }
      )
  });
};
