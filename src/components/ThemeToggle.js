import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Button from '@mui/material/Button';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <Button onClick={toggleTheme}>Toggle Theme</Button>
    );
};

export default ThemeToggle;
