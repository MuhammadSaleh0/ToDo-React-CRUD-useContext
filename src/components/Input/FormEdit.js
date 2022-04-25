import Classes from '../../CSS/main/FormEdit.module.css';
import { useRef, useContext, useState } from 'react';
import DataContext from '../../store/Context';
import Modal from '../Modal/Modal';

const FormEdit = (props) => {
    const inputEditRef = useRef('');
    const [showModal, setModal] = useState(false);

    const ctx = useContext(DataContext);

    const submitHandler = (event) => {
        let inputRef;
        event.preventDefault();
        inputRef = inputEditRef.current.value;

        if (inputRef.length === 0) {
            return;
        }
        ctx.editedTaskInput(inputRef);
        inputEditRef.current.value = '';

        setTimeout(() => {
            props.closeForm();
        }, 1500);

        setTimeout(() => {
            setModal(true);
        }, 100);

        setTimeout(() => {
            setModal(false);
        }, 1500);
    };

    return (
        <form className={Classes.form} onSubmit={submitHandler}>
            <input type="text" ref={inputEditRef} autoFocus spellCheck="false" />
            <button type="submit">#</button>
            {showModal && <Modal>Successfully Edited!</Modal>}
        </form>
    );
};

export default FormEdit;
