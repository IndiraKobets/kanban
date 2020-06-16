import React, {useState} from 'react';
import CreateTaskForm from './components/CreateTaskForm';
import Body from './components/Body';
import { v4 as uuidv4 } from 'uuid';



const initialTasks = [
    {id: uuidv4(), name: 'Do homework', status: 'todo', priority: 1},
    {id: uuidv4(), name: 'Do laundry', status: 'in progress', priority: 3},
    {id: uuidv4(), name: 'Make an appointment', status: 'review', priority: 1},
    {id: uuidv4(), name: 'Call Mom', status: 'done', priority: 2},
    {id: uuidv4(), name: 'Cleaning', status: 'todo', priority: 3},
    {id: uuidv4(), name: 'Learn React', status: 'in progress', priority: 1},
    {id: uuidv4(), name: 'Go shopping', status: 'review', priority: 2},
    {id: uuidv4(), name: 'Watch lecture', status: 'done', priority: 1},
];

const statuses = ['todo', 'in progress', 'review', 'done'];

const priorities =[
    {id:1, priority: 'High'},
    {id:2, priority: 'Medium'},
    {id:3, priority: 'Low'},
];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [priority, setPriority] = useState(priorities[priorities.length - 1].id);


    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    };

    const onTaskChange = (e) => {
        setIsActiveButtonTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);
    };

    const taskSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setTasks([...tasks, {id: uuidv4(), name: taskInput, status: 'todo', priority: priority}]);
        setTaskInput('');
        setIsOpenCreateTaskForm(false);
        setIsActiveButtonTaskCreate(false);

    };


    const taskCancel = () => {
        setTaskInput('');
        setIsOpenCreateTaskForm(false);
        setIsActiveButtonTaskCreate(false);
    };

    // const changeStatus = ({ id, direction }) => {
    //     console.log(id, direction);
    //     const taskIndex = tasks.findIndex(el => el.id === id)
    //     console.log(taskIndex)
    //     const clonedTasks = [...tasks];
    //     clonedTasks[taskIndex].status = statuses[statuses.indexOf(clonedTasks[taskIndex].status) + (direction === 'left' ? -1 : 1)];
    //     setTasks(clonedTasks);
    //
    // };// this alternative method write changeStatus

    const changeStatus = ({id, direction}) => {
        console.log(id, direction)
        const updatedTasks = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'left') {
                    el.status = statuses[statuses.indexOf(el.status) - 1];
                }
                if (direction === 'right') {
                    el.status = statuses[statuses.indexOf(el.status) + 1];
                }
                return el;
            } else return el;

        });
        setTasks(updatedTasks);
    };

    const onTaskSave = (task) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === task.id) return { ...el, name: task.name }
            else return el;
        })
        setTasks(updatedTasks);
    };

    const changePriority = ({id, direction}) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                if (direction === 'up') {
                    return {...task, priority: ++task.priority}
                }
                if (direction === 'down') {
                    return {...task, priority: --task.priority}
                }
            }
            return task
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (task) => {
        const updatedTasks = tasks.filter(obj => obj.id !== task.id);
        setTasks(updatedTasks);
    };

    return (
    <div>
     <CreateTaskForm isOpenCreateTaskForm={isOpenCreateTaskForm}
                     openCreateTaskForm={openCreateTaskForm}
                     onTaskChange={onTaskChange}
                     isActiveButtonTaskCreate={isActiveButtonTaskCreate}
                     taskInput={taskInput}
                     taskSubmit={taskSubmit}
                     taskCancel={taskCancel}
                     statuses={statuses}
                     priorities={priorities}
                     priority={priority}
                     setPriority={setPriority}


     />

     <Body tasks={tasks}
           statuses={statuses}
           changeStatus={changeStatus}
           onTaskSave={onTaskSave}
           changePriority={changePriority}
           priorities={priorities}
           deleteTask={deleteTask}/>



    </div>
  );
}

export default App;
