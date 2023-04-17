const { Schema, model } = require('mongoose');


const noteSchema = new Schema({
  noteText: {
    type: String,
    required: 'You need to leave a note!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  noteCreator: {
    type: String,
    required: true,
    trim: true,
  },
    
});

const Note = model('Note', noteSchema);

module.exports = Note;