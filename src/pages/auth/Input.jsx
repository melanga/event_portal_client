import { TextField } from '@mui/material';

const Input = ({
    name,
    handleChange,
    label,
    autoFocus,
    type,
    error,
    helperText,
    required,
}) => {
    return (
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required={required}
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            margin={'dense'}
            error={error}
            helperText={helperText}
            multiline={name === 'description'}
        />
    );
};

export default Input;
