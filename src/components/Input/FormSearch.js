import { useContext, useRef } from 'react';
import Classes from '../../CSS/main/FormSearch.module.css';
import SearchIcon from '../Icons/SearchIcon';
import DataContext from '../../store/Context';

const FormSearch = () => {
    const inputSearchRef = useRef();
    const ctx = useContext(DataContext);
    const { searchInput } = ctx;

    const onChangeHandler = () => {
        const inputRefValue = inputSearchRef.current.value;
        searchInput(inputRefValue);
    };

    return (
        <div className={Classes['form-search']}>
            <label>
                <SearchIcon />
            </label>
            <input
                type="text"
                ref={inputSearchRef}
                onChange={onChangeHandler}
                spellCheck="false"
            />
        </div>
    );
};

export default FormSearch;
