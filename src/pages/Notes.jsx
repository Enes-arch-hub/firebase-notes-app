import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Notes
      </Typography>
      <TextField
        label="New Note"
        variant="outlined"
        fullWidth
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addNote}>
        Add Note
      </Button>
      <List>
        {notes.map((note, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteNote(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Notes;