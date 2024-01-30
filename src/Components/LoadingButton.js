import React from "react";
import { Button, CircularProgress, makeStyles } from "@mui/material";
import green from "@mui/material/colors/green";
import red from "@mui/material/colors/red";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 0,
    position: "relative",
  },
  progress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function LoadingButton(props) {
  const classes = useStyles();
  const { children, loading, valid, success, fail, onClick, ...other } = props;
  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading || !valid}
        type="submit"
        onClick={onClick}
        {...other}
      >
        {children}
      </Button>
      {loading && <CircularProgress size={24} className={classes.progress} />}
    </div>
  );
}
