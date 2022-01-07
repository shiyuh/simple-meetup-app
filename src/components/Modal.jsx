import './Modal.scss';
import './Todo.scss'

const Modal = (props) => {
    const cancelHandler = () => {
        props.onCancel();
    }

    return (
        <div className="modal">
            <p> Are you sure </p>
            <button className="btn button--alt" onClick={cancelHandler}> Cancel </button>
        </div>
    )
}

export default Modal;