import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, FieldArray } from "formik";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Blue from "@material-ui/core/colors/blue";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import { setQuestionValidations } from "./questionValidations";

const useStyles = makeStyles(theme => ({
  titleFormat: {
    padding: theme.spacing(2)
  },
  formLayout: {
    padding: theme.spacing(1, 2)
  },
  mt1: {
    marginTop: "1rem"
  },
  pullCenter: {
    display: "flex",
    justifyContent: "space-around"
  },
  errorMessage: {
    color: "#DF3868"
  },
  optionsErrorMessage: {
    color: "#DF3868",
    display: "flex",
    justifyContent: "space-around"
  }
}));

const Question = props => {
  const classes = useStyles();
  const {
    title,
    initValues,
    closeModal,
    eventType,
    onSaveClickHandler
  } = props;

  return (
    <div>
      <div className={classes.titleFormat}>{title}</div>
      <Divider />
      <div className={classes.formLayout}>
        <Formik
          initialValues={initValues}
          validationSchema={setQuestionValidations}
          onSubmit={(values, { setSubmitting }) => {
            console.log("--== values ", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    id="question"
                    label="Question"
                    name="question"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.question}
                    component={TextField}
                    style={{ width: "100%" }}
                    required
                  />
                  {isValid && errors.question ? (
                    <></>
                  ) : (
                    <div className={classes.errorMessage}>
                      {errors.question && touched.question
                        ? errors.question
                        : null}
                    </div>
                  )}
                </div>
                <FieldArray
                  name="options"
                  render={arrayHelpers => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Typography
                            style={{ color: Blue[500], marginTop: "1rem" }}
                            variant="overline"
                            display="block"
                            gutterBottom
                          >
                            Answers
                          </Typography>
                          <div>
                            <Button
                              className={classes.mt1}
                              size="small"
                              variant="contained"
                              onClick={() =>
                                arrayHelpers.push({
                                  isValid: false,
                                  answer: ""
                                })
                              }
                              disabled={!values.question}
                            >
                              Add new answer
                            </Button>
                          </div>
                        </div>
                        <Divider />
                        {(values.options ? values.options : []).length > 0 ? (
                          values.options.map((item, index) => {
                            return (
                              <div key={`answersList_${index}`}>
                                <div style={{ display: "flex" }}>
                                  <Field
                                    name={`options[${index}].isValid`}
                                    component={Checkbox}
                                    onChange={handleChange(
                                      `options[${index}].isValid`
                                    )}
                                    checked={item.isValid}
                                  />
                                  <Field
                                    name={`options[${index}].answer`}
                                    component={TextField}
                                    onChange={handleChange(
                                      `options[${index}].answer`
                                    )}
                                    value={item.answer}
                                    style={{ width: "100%" }}
                                  />
                                  <IconButton
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    <Close />
                                  </IconButton>
                                </div>
                                <div className={classes.optionsErrorMessage}>
                                  {errors &&
                                  errors.options &&
                                  errors.options[index]
                                    ? errors.options[index].answer
                                    : null}
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className={classes.pullCenter}>
                            No Data Found
                          </div>
                        )}
                        <div className={classes.optionsErrorMessage}>
                          {errors.options && !Array.isArray(errors.options) ? (
                            <div>{errors.options}</div>
                          ) : (
                            ""
                          )}
                        </div>
                      </>
                    );
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem"
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => closeModal(false)}
                  >
                    Close
                  </Button>
                  <Button
                    size="small"
                    disabled={!isValid}
                    onClick={() => onSaveClickHandler(eventType, values)}
                  >
                    Save
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

Question.propTypes = {
  eventType: PropTypes.string,
  title: PropTypes.string,
  initValues: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({ isValid: PropTypes.bool, answer: PropTypes.string })
    )
  }),
  onSaveClickHandler: PropTypes.func,
  closeModal: PropTypes.func
};

export default Question;
