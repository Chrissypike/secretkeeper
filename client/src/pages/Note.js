import { useState } from 'react';


const Note = () => {
  const [formState, setFormState] = useState({
    note: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Journal</h3>
      <label></label>
      <input 
        type="Note"
        onChange={(e) => setFormState(e.target.value)}
        value={formState.note}
      />
      <button type="submit">Keep your Secret</button>
    </form>
  )
  }
  
  export default Note;