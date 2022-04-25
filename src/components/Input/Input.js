import { useContext, useRef, useState } from 'react';
import Classes from '../../CSS/main/Input.module.css';
import DataContext from '../../store/Context';
import Modal from '../Modal/Modal';
// import AddTask from "../Icons/AddTaskIcon"

const Input = (props) => {
    const textInputref = useRef('');
    const [showModal, setModal] = useState(false);
    const ctx = useContext(DataContext);

    let inputRef;

    const submitHandler = (event) => {
        event.preventDefault();
        inputRef = textInputref.current.value;

        if (inputRef.trim().length === 0) {
            return;
        }
        const TaskData = {
            title: inputRef,
        };
        ctx.addTasks({ ...TaskData });
        textInputref.current.value = '';

        setTimeout(() => {
            setModal(true);
        }, 100);

        setTimeout(() => {
            setModal(false);
        }, 1500);
    };

    return (
        <div className={Classes.form}>
            <form onSubmit={submitHandler}>
                <div className={Classes['input-control']}>
                    <label htmlFor="inputText" className={Classes.lable}>
                        Add Tasks
                    </label>
                    <input
                        ref={textInputref}
                        id="inputText"
                        type="text"
                        value={inputRef}
                        spellCheck="false"
                    />
                </div>
                <button type="submit">Submit</button>
                {showModal && <Modal>Great Job!</Modal>}
            </form>
        </div>
    );
};
export default Input;
