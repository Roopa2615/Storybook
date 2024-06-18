import React from 'react';
import { TextField } from '@mui/material';

export interface TextInputProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, type = 'text', value, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
    />
  );
};

export default TextInput;
