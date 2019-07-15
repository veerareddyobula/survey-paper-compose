import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditOutlined from "@material-ui/icons/EditOutlined";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles(theme => ({
  dFlex: {
    display: "flex"
  },
  dFlexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between"
  },
  mt1: {
    marginTop: "1rem"
  },
  dFlexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 3rem",
    width: "50%"
  }
}));

const Questionnaire = ({ id, question, options, eventHandler }) => {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <Divider />
      <div className={classes.dFlexSpaceBetween}>
        <div className={classes.dFlex}>
          <IconButton onClick={() => setExpand(!expand)}>
            {expand ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </IconButton>
          <div className={classes.mt1}>
            <Typography component="h3">{question}</Typography>
          </div>
        </div>
        <div className={classes.dFlex}>
          <IconButton
            onClick={() => eventHandler("edit", { id, question, options })}
          >
            <EditOutlined />
          </IconButton>
        </div>
      </div>
      {expand ? (
        <div className={classes.dFlexColumn}>
          <div>Options</div>
          <ol>
            {(options ? options : []).map((item, index) => {
              return (
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>{item.answer}</div>
                  <div>{item.isValid ? <Check /> : <Close />}</div>
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

Questionnaire.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ isValid: PropTypes.bool, answer: PropTypes.string })
  ),
  eventHandler: PropTypes.func
};
export default Questionnaire;
