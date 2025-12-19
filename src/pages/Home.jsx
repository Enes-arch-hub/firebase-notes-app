import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the Notes App
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Your companion for effective learning.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/notes">
        Get Started
      </Button>
    </Container>
  );
}

export default Home;