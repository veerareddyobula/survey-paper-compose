import {
  GET_QUESTIONS_LIST_SUCCESS,
  CREATE_QUESTION_SUCCESS,
  START_QUESTION_EDIT,
  CANCEL_QUESTION_EDIT,
  PUT_QUESTION_EDIT,
  SUCCESS_QUESTION_EDIT,
} from "./../actionTypes";

export default (state = [], action) => {
  console.log("--== Questionnaire Reducer ", state, action);
  switch (action.type) {
    case GET_QUESTIONS_LIST_SUCCESS:
      return [...action.payload.data];
    case CREATE_QUESTION_SUCCESS:
      return [...state, Object.assign({}, action.payload.data)];
    case START_QUESTION_EDIT:
      return state.map(s => updateQuestion(s, action));
    case CANCEL_QUESTION_EDIT:
      return state.map(s => updateQuestion(s, action));
    case PUT_QUESTION_EDIT:
      return state.map(s => updateQuestion(s, action));
    case SUCCESS_QUESTION_EDIT:
      return state.map(s => updateQuestion(s, action));
    default:
      return state;
  }
};

const updateQuestion = (state, action) => {
  const payloadActionId =
    action.payload && action.payload.data ? action.payload.data.id : action.id;
  if (state.id !== (action.id || payloadActionId)) {
    return state;
  }
  switch (action.type) {
    case START_QUESTION_EDIT:
      return {
        ...state,
        editing: true
      };
    case CANCEL_QUESTION_EDIT:
      return {
        ...state,
        editing: false
      };
    case PUT_QUESTION_EDIT:
      return {
        ...state,
        editing: false,
        updating: true
      };
    case SUCCESS_QUESTION_EDIT:
      console.log("--- Success Question Edit ", action.payload.data);
      return {
        ...action.payload.data
      };
    default:
      return { ...state };
  }
};
