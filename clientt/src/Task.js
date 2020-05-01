import React from 'react'
import axios from 'axios'

class TaskList extends React.Component{
    state = {
        tasks : []
    }
    componentDidMount(){
axios.get('/tasks')
.then((response)=>{
    console.log('tasklist', response.data)
})
.catch((err)=>{
    console.log(err)
})
    }
    render(){
        return(
            <div>
                <h1>Listing Tasks</h1>
                <ul>
                    {
                        this.state.tasks.map(task=>{
                            return <li key={task._id}>{task.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TaskList