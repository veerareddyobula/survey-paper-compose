import React from "react";
import { makeStyles } from '@material-ui/styles';

import NavLinks from "./navLinks";
import Router from "./router";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const AppRouter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router navLinks={NavLinks} />
    </div>
  );
};

export default AppRouter;
