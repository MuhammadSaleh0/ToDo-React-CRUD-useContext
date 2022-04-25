import React, { useState, useEffect } from 'react';
import DataContext from './Context';

const DataContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [dataFilterd, setFilteredData] = useState([]);
    const [id, sendId] = useState(false);
    const [FilterdData, isFilterdData] = useState(false);

    const editTasksHandler = (id) => {
        sendId(id);
    };

    const inputEditHandler = (inputRef) => {
        let UpdatedItems;

        const indexx = data.findIndex((item) => item.id === id);
        const itemEdited = data.find((item) => item.id === id);

        let UpdatedItem = { ...itemEdited, title: inputRef };

        UpdatedItems = [...data];
        UpdatedItems[indexx] = UpdatedItem;

        window.localStorage.setItem(
            'dataArrayTasks',
            JSON.stringify(UpdatedItems)
        );
        setData(UpdatedItems);
        setFilteredData(UpdatedItems);
    };

    const addTasksHandler = (item) => {
        let taskItem = { ...item, id: Math.random() };
        setData((prevState) => [...prevState, taskItem]);
        setFilteredData((prevState) => [...prevState, taskItem]);
    };

    const deleteTaskHandler = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        setFilteredData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const searchInputHandler = (value) => {
        setFilteredData(data);
        setFilteredData((prevData) =>
            prevData.filter((item) => item.title.includes(value))
        );

        if (value.length === 0) {
            isFilterdData(false);
        }
        isFilterdData(true);
    };

    useEffect(() => {
        const datalocal = window.localStorage.getItem('dataArrayTasks');
        if (datalocal) {
            setData(JSON.parse(datalocal));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('dataArrayTasks', JSON.stringify(data));
    });

    const dataContext = {
        tasksItems: FilterdData ? dataFilterd : data,
        addTasks: addTasksHandler,
        editTask: editTasksHandler,
        deleteTask: deleteTaskHandler,
        editedTaskInput: inputEditHandler,
        searchInput: searchInputHandler,
    };
    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
