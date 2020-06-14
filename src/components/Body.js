import React from 'react';
import Column from "./Column";
import TaskCard from "./TaskCard";



function Body(props) {
  return (

      <div className="container">
          <div className="container">
              <div className="row">

                  <div className="col-sm">
                      <div className="card m-2" align="center" > To Do </div>
                      <Column tasks={props.tasks}
                              status='todo'
                              changeStatus={props.changeStatus}
                              onTaskSave={props.onTaskSave}
                              changePriority={props.changePriority}
                              priorities={props.priorities}
                              deleteTask={props.deleteTask}/>
                  </div>

                  <div className="col-sm">
                      <div className="card m-2" align="center" > In progress </div>
                      <Column tasks={props.tasks}
                              status='in progress'
                              changeStatus={props.changeStatus}
                              onTaskSave={props.onTaskSave}
                              changePriority={props.changePriority}
                              priorities={props.priorities}
                              deleteTask={props.deleteTask}/>
                  </div>

                  <div className="col-sm">
                      <div className="card m-2" align="center" > Review </div>
                      <Column tasks={props.tasks}
                              status='review'
                              changeStatus={props.changeStatus}
                              onTaskSave={props.onTaskSave}
                              changePriority={props.changePriority}
                              priorities={props.priorities}
                              deleteTask={props.deleteTask}/>
                  </div>

                  <div className="col-sm">
                     <div className="card m-2" align="center" > Done </div>
                      <Column tasks={props.tasks}
                              status='done'
                              changeStatus={props.changeStatus}
                              onTaskSave={props.onTaskSave}
                              changePriority={props.changePriority}
                              priorities={props.priorities}
                              deleteTask={props.deleteTask}/>
                  </div>


              </div>
          </div>
      </div >
  );
}

export default Body;
