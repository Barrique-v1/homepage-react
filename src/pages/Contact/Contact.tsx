import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div style={{ padding: '2rem 0' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Contact Me
            </Typography>
            <form noValidate autoComplete="off">
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                    Send
                </Button>
            </form>
        </div>
    );
};

export default Contact;
