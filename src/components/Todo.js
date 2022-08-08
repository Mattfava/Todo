import React, { useState } from 'react';
    import './Todo.css';

    function Todo(){
        let[tasks, setTasks] = useState([
        {
            title: "Get Groceries",
            completed: true
        },
        {
            title: "Go for a run",
            completed: true
        },{
            title: "Go to Trivia",
            completed: false
        }
        ]);

        function CreateTask({ addTask }) {
            const [value, setValue] = useState("");
        
            const handleSubmit = e => {
                e.preventDefault();
                if (!value) return;
                
                addTask(value);
                setValue("");
            }
            
            return (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        value={value}
                        placeholder="Add a new task"
                        onChange={e => setValue(e.target.value)}
                    />
                </form>
            );
        }

        function Task({ task, index, completeTask }) {
            return (
                <div
                    className="task"
                    style={{ textDecoration: task.completed ? "line-through" : "" }}
                >
                    {task.title}
                    <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
                    <button onClick={() => finishTask(index)}>Complete</button>
                </div>
            );
        }
        const addTask = title =>{
            const newTasks = [...tasks, {title, complete: false}];
            tasks = newTasks;
            setTasks(tasks);
        }

        const finishTask = index =>{
            const newTasks = [...tasks];
            newTasks[index].completed=true;
            tasks = newTasks;
            setTasks(tasks);
        };
        const removeTask = index => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        };

        return (
            <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        );
    }
   

export default Todo;