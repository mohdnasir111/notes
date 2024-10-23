const saveButton = document.getElementById('save-button');
const noteTextarea = document.getElementById('note-textarea');

saveButton.addEventListener('click', () => {
  const noteContent = noteTextarea.value;
  if (noteContent.trim() !== '') {
    localStorage.setItem('note', noteContent);
    alert('Note saved successfully.');
  } else {
    alert('Please enter some text before saving.');
  }
});

const savedNote = localStorage.getItem('note');
if (savedNote !== null) {
  noteTextarea.value = savedNote;
}