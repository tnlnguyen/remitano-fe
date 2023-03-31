import React from 'react';
import Button from '@mui/material/Button';

const DemiButton = ({ variant, style, text, ...props }) => {
  return (
    <Button variant={variant} {...style} {...props}>
      {text}
    </Button>
  );
};

export default DemiButton;
