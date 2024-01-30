import React from "react";
import {
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  withStyles,
} from "@mui/material";
import MuiDialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

const styles = (theme) => ({
  dialogContainer: {
    borderRadius: theme.spacing(2),
  },
});

const useStyles = makeStyles(styles);

export default function WrongNetwork(props) {

  const classes = useStyles();
  const {open} = props;
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      classes={{ paper: classes.dialogContainer }}
    >
      <MuiDialogTitle>Unsupported Network</MuiDialogTitle>
    </Dialog>
  );
}
