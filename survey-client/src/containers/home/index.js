import React, { useCallback, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";

import {
  getQuestionsListBySurvey,
  postNewQuestion,
  startQuestionEdit,
  cancelQuestionEdit,
  putQuestionEdit
} from "./../../store/actions/questionnaireActions";
import Card from "./../../components/card/card";
import Question from "./../../components/question/question";
import Questionnaire from "./../../components/questionnaire/questionnaire";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "relative",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    top: "25%",
    left: "25%"
  },
  modalInstance: {
    position: "relative"
  },
  pullCenter: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

const Home = props => {
  const classes = useStyles();
  const { questionnaires } = props;
  const [eventType, setEventType] = useState("");
  const [open, setOpen] = useState(false);
  const [initValues, setInitValues] = useState({});
  const [modalTitle, setModalTitle] = useState("");
  const settingsActionHandler = useCallback(() => {}, []);

  useEffect(() => {
    props.getQuestionsListBySurvey();
  }, []);

  const addNewQuestionHandler = () => {
    setInitValues({});
    setModalTitle("Add Question");
    setOpen(true);
    setEventType("add");
  };

  const cancelQuestionModal = status => {
    setOpen(status);
    if (eventType === "edit") {
      props.cancelQuestionEdit(initValues.id);
    }
  };

  const eventHandler = (actionName, payload) => {
    console.log("--== EventHandler --== ", actionName, payload);
    setEventType(actionName);
    if (actionName === "edit") {
      setInitValues(payload);
      setOpen(true);
      setModalTitle("Edit Question");
      props.startQuestionEdit(payload.id);
    }
  };

  const onSaveClickHandler = (eventName, payload) => {
    console.log("--== onSaveClickHandler --== ", eventName, payload);
    setOpen(false);
    if (eventName === "add") {
      props.postNewQuestion(payload);
    } else if (eventName === "edit") {
      props.putQuestionEdit(payload);
    }
  };
  console.log("--== HomeContainer --== ", props);
  return (
    <div>
      <Card
        title={"Custom Questions"}
        subTitle="you must add atleast one question to launch a survey"
        settingsActionHandler={settingsActionHandler}
        addNewQuestionHandler={addNewQuestionHandler}
        {...props}
      >
        {questionnaires && questionnaires.length === 0 ? (
          <div className={classes.pullCenter}>No Data Found</div>
        ) : (
          <></>
        )}
        {(questionnaires ? questionnaires : []).map((item, index) => {
          console.log("--- HomeContainer Index.js --== ", item, index);
          return (
            <div key={`Questionnaire_${index}`}>
              <Questionnaire {...item} eventHandler={eventHandler} />
            </div>
          );
        })}
        <div className={classes.modalInstance}>
          <Modal open={open} onClose={() => setOpen(false)} keepMounted={true}>
            <div className={classes.paper}>
              {open ? (
                <Question
                  eventType={eventType}
                  title={modalTitle}
                  initValues={initValues}
                  onSaveClickHandler={onSaveClickHandler}
                  closeModal={cancelQuestionModal}
                />
              ) : (
                <></>
              )}
            </div>
          </Modal>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ questionnaires, question }) => {
  return {
    questionnaires,
    question
  };
};
export default connect(
  mapStateToProps,
  {
    getQuestionsListBySurvey,
    postNewQuestion,
    startQuestionEdit,
    cancelQuestionEdit,
    putQuestionEdit
  }
)(Home);
