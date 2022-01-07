import { useState } from 'react';
import "./Todo.scss";
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
    // first value is snapshot
    const [modalIsOpen, setModalIsOpen ] = useState(false);
  const deleteHandler = () => {
      setModalIsOpen(true);
  };

  const modalCloseHandler = () => {
      setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2> {props.title} </h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete{" "}
        </button>
      </div>
      { modalIsOpen  && <Modal onCancel={modalCloseHandler}/> }
      { modalIsOpen  && <Backdrop onClick={modalCloseHandler} /> }

    </div>
  );
};

export default Todo;
