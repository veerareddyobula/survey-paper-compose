import {
  GET_QUESTIONS_LIST_SUCCESS,
  CREATE_QUESTION_SUCCESS,
  START_QUESTION_EDIT,
  CANCEL_QUESTION_EDIT,
  PUT_QUESTION_EDIT,
  SUCCESS_QUESTION_EDIT,
} from "./../actionTypes";

export const getQuestionsListBySurvey = () => async dispatch => {
  fetch("/api/question/all")
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_QUESTIONS_LIST_SUCCESS,
        payload: { data }
      });
    });
};

export const postNewQuestion = question => async dispatch => {
  fetch("/api/question/add", {
    headers: { "content-type": "application/json", charset: "utf-8" },
    method: "post",
    body: JSON.stringify({ question })
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: CREATE_QUESTION_SUCCESS,
        payload: { data }
      });
    });
};

export const startQuestionEdit = id => async dispatch => {
  dispatch({
    type: START_QUESTION_EDIT,
    id
  });
};
export const cancelQuestionEdit = id => async dispatch => {
  dispatch({
    type: CANCEL_QUESTION_EDIT,
    id
  });
};
export const putQuestionEdit = question => async dispatch => {
  dispatch({
    type: PUT_QUESTION_EDIT,
    id: question.id
  });
  fetch("/api/question/update", {
    headers: { "content-type": "application/json", charset: "utf-8" },
    method: "PUT",
    body: JSON.stringify({ question })
  })
    .then(response => response.json())
    .then(data => {
      console.log('--== /api/question/update --== data --== ', data)
      dispatch({
        type: SUCCESS_QUESTION_EDIT,
        payload: { data }
      });
    });
};
export const successQuestionEdit = id => async dispatch => {
  dispatch({
    type: SUCCESS_QUESTION_EDIT,
    id
  });
};

