import React, {useState} from 'react';


function CreateTaskForm(props) {
    const [status, setStatus] = useState('');

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

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Statuses:</label>
                    </div>
                    <select onChange={(e) => setStatus(e.target.value)} defaultValue="done" className="custom-select" id="inputGroupSelect01">

                        {
                            props.statuses.sort((a, b) => b - a)
                                .map(el =>
                                    <option key={el} value={el}>{el}</option>
                                )
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
