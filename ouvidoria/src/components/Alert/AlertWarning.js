import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertWarning(props) {

  const ClickOpen = () => {
    props.setOpen(true)
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Collapse in={props.open}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClose();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Há algo de errado. Por favor, preencha os campos corretamente.
        </Alert>
      </Collapse>
    </Box>
  );
}

