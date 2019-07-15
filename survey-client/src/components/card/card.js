import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import DraftsOutlined from "@material-ui/icons/DraftsOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  dGridCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const CardComponent = props => {
  const classes = useStyles();
  const {
    title,
    subTitle,
    children,
    settingsActionHandler,
    addNewQuestionHandler
  } = props;
  return (
    <div>
      <Card>
        <CardHeader
          title={title}
          subheader={subTitle}
          action={
            <IconButton onClick={settingsActionHandler}>
              <SettingsIcon />
            </IconButton>
          }
        />
        <CardContent>
          {children ? (
            <div>{children}</div>
          ) : (
            <div className={classes.dGridCenter}>
              <DraftsOutlined />
              <Typography component="h6">No Data Found</Typography>
            </div>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={addNewQuestionHandler}>
            Add a question
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  settingsActionHandler: PropTypes.func,
  addNewQuestionHandler: PropTypes.func
};

export default CardComponent;
