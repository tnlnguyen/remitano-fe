import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormDialog = ({ open, handleShare, handleClose }) => {
  const [url, setUrl] = useState();

  const handleChangeUrl = (value) => {
    setUrl(value?.target?.value);
  };
	
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your youtube URL that you want to share</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Youtube URL"
            type="text"
            fullWidth
            variant="standard"
            onChange={(value) => handleChangeUrl(value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleShare(url)}>Share</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
