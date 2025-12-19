import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About This App
      </Typography>
      <Typography variant="body1">
        This application is designed to help students manage their notes and track their study progress effectively. 
        It is built with React and Material-UI, providing a clean and modern user interface.
      </Typography>
    </Container>
  );
}

export default About;