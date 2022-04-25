import Classes from '../CSS/main/TaskItem.module.css';
import { useContext } from 'react';
import DataContext from '../store/Context';
import DeleteIcon from './Icons/DeleteIcon';
import EditIcon from './Icons/EditIcon';
import FormSearch from './Input/FormSearch';

const TaskItem = (props) => {
    let data = <p className={Classes['empty-list']}>"Let's Add Some Tasks!"</p>;

    const ctx = useContext(DataContext);
    const { tasksItems } = ctx;

    if (tasksItems.length > 0) {
        const onEdit = (id) => {
            ctx.editTask(id);
            props.showForm();
        };

        const onDelete = (id) => {
            ctx.deleteTask(id);
        };

        data = tasksItems.map((task) => (
            <li key={task.id} id="liItem">
                {task.title}
                <div>
                    <span onClick={onEdit.bind(null, task.id)}>
                        <EditIcon />
                    </span>
                    <span onClick={onDelete.bind(null, task.id)}>
                        <DeleteIcon />
                    </span>
                </div>
            </li>
        ));
    }

    return (
        <ul className={Classes['task-item']} id="ulItem">
            <FormSearch />
            {data}
        </ul>
    );
};

export default TaskItem;
