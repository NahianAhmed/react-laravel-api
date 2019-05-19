
import React, { Component } from 'react'
import axios from 'axios';
import InsertData from './InsertData'
import EditData from './EditData'
export default class ReadData extends Component {

    constructor() {
        super();
        this.state = {
            task: [
                {
                    'id': 0,
                    'task': 'Learn React',
                    'status': 'active',
                }

            ],
            editField:false,
            editID:"",


        }

    }

    componentDidMount() {
        const arr = this.state.task;
        axios.get('http://localhost/laravelapi/ReadData')
            .then((res) => {
                const obj = res.data;
                obj.unshift(arr[0]);
                // console.log(obj)
                this.setState({
                    task: obj
                })
            })
            .catch(err => {
                console.log(err);
            })

    }


    updateData = () => {
        const arr = this.state.task;
        axios.get('http://localhost/laravelapi/ReadData')
            .then((res) => {
                const obj = res.data;
                obj.unshift(arr[0]);
                // console.log(obj)
                this.setState({
                    task: obj,
                    editField:false,
                })
            })
            .catch(err => {
                console.log(err);
            })
        // console.log(data);
    }

    delete = (id) => {
        console.log(id);
        axios.get('http://localhost/laravelapi/DeleteData/' + id)
            .then((res) => {
                console.log(res.data);
                this.updateData();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    editdata=(id)=>{
        //console.log(id);
        this.setState({
            editField:!this.state.editField,
            editID:id,
        })
    }


    render() {
        const tasks = this.state.task.map((task) =>
            <div key={task.id} > <li className="list-group-item" > Task name : {task.task}. Status : {task.status}. <a className="float-right" href="#delete" title="Delete" onClick={() => this.delete(task.id)}> <i className="fa fa-trash"> </i> </a> <a className="float-right" href="#edit" title="Edit" onClick={()=>this.editdata(task.id)} > <i className="fa fa-cog" ></i> </a> </li>
            </div>
        );
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <div>
                            <ul className="list-group">
                                <li className="list-group-item active text-center"> Task list </li>
                                {tasks}
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <InsertData sentData={this.updateData} />
                   <br/>
                {this.state.editField ? <EditData sentData={this.updateData} id={this.state.editID} />:"" }

                      </div>
                </div>
            </div>
        )
    }
}
