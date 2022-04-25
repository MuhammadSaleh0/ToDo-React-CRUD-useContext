import Classes from '../../CSS/main/Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Overley = (props) => {
    return (
        <div
            className={Classes.Overley}
            style={{ height: '100%' }}
            onClick={props.onClose}
        />
    );
};

const Message = (props) => {
    return (
        <div className={Classes.Message}>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overley');

const Modal = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Overley onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <Message>{props.children}</Message>,
                portalElement
            )}
        </div>
    );
};

export default Modal;
