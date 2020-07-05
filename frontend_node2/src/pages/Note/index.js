import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';

function Note() {

    const [note, setNote] = useState(loadNotes);

    async function loadNotes() {
        try {
            let response = await api.get('notes');
            setNote(response.data);
        } catch (e) {
            alert("Erro ao carregar");
        }
    }

    async function saveChanges() {
        try {
            let response = await api.post('notes', { note: note });
            setNote(response.data);
        } catch (e) {
            alert("Erro ao carregar");
        }
    }

    return (
        <div className="note-div">
            
            <textarea id="text" value={note} onChange={e => setNote(e.target.value)}>

            </textarea>
            <button className="btn btn-default" onClick={saveChanges}>
                Save
            </button>
            <button className="btn btn-light" onClick={loadNotes}>
                Refresh
            </button>
        </div>
    );
}

export default Note;
