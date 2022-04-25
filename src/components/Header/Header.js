import React from 'react';
import Logo from '../Icons/LogoIcon';
import TodoText from './TodoText';
import Classes from '../../CSS/main/Header.module.css';

const Header = (props) => {
    return (
        <div className={Classes.Header}>
            <Logo />
            <TodoText />
            <button
                className={Classes.button}
                onClick={props.onChangeColor}
            ></button>
        </div>
    );
};

export default Header;
