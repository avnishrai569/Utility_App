import "./NoteList.css";
import {useSelector,useDispatch} from "react-redux";
import { deletNote } from "../../redux/actions/noteActions";
function NoteList() {
    const notes=useSelector((state)=>state.notesReducer.notes);
    const disptach=useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=> disptach(deletNote(index))}>
              Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
