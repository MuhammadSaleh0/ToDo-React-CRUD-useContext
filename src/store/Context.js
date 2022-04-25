import React from 'react';

const DataContext = React.createContext({
    tasksItems: [],
    addTasks: (item) => { },
    deleteTask: (id) => { },
    editTasks: (id) => { },
    editedTaskInput: (text) => { },
    searchInput: (value) => { },
});

export default DataContext;
