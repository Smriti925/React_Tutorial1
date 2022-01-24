import {useState}from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props)
{   const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler()
    {   
        setModalIsOpen(true);
    }
    function closeModalHandler()
    {
        setModalIsOpen(false);
    }
    return (
        <div className="card">
      <h3>Title</h3>
      <h3>{props.text}</h3>
      <div className="actions">
      <span>xyz</span>
      <button className="btn" onClick={deleteHandler}>Delete</button>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>
    </div>
    );
}
export default Todo;

   {/* onClick={deleteHandler()}  ___wrong way*/}
    {/* {modalIsOpen?<Modal />: null} */}