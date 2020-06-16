import React, {useState} from 'react';


function CreateTaskForm(props) {
    // const [status, setStatus] = useState('');


  return (
    <div>
        <div className="container">
            <h3> Kanban Board </h3>


            {!props.isOpenCreateTaskForm &&
            <button type="button"
                    className="btn btn-info"
                    onClick={props.openCreateTaskForm}>
                Create Task
            </button>
            }
            {props.isOpenCreateTaskForm &&
            <form>
                <div className="form-group">
                    <label>Enter task name:</label>
                    <input type="text"
                           className="form-control"
                           value={props.taskInput}
                           onChange={props.onTaskChange}/>

                </div>

                <div className="input-group input-group-sm mb-2 mt-2">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Priority:</label>
                    </div>
                    <select className="custom-select"
                            id="inputGroupSelect01"
                            defaultValue={props.priority}
                            onChange={(e) => props.setPriority(Number(e.target.value))}>
                        {
                            props.priorities.map(el => {
                                return <option key={el.id} value={el.id}>{el.priority}</option>
                            })
                        }
                    </select>
                </div>


                <button type="submit" className="btn btn-info"
                        onClick={props.taskSubmit}
                        disabled={!props.isActiveButtonTaskCreate}>
                    Submit
                </button>

                <button className="btn btn-secondary"
                        onClick={props.taskCancel}>
                    Cancel
                </button>


            </form>
            }



      </div>

    </div>
  );
}

export default CreateTaskForm;
