import React from 'react';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';

function Button({ ...props }) {
  return <MuiButton {...props} />;
}

function IconButton({ ...props }) {
  return <MuiIconButton {...props} />;
}

export { Button, IconButton };
