
import React, { Component } from 'react'
import axios from 'axios';

export default class InsertData extends Component {


    constructor() {
        super()
        this.state = {
            task: '',
            status: '',
            

        }

    }

    handelChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;
        this.setState({ [key]: val });

    }
    SaveData = (e) => {
        e.preventDefault();
        const data = {
            task: this.state.task,
            status: this.state.status,
        }
        axios.post('http://localhost/laravelapi/SaveData', data)
            .then(res => {
                console.log(res.data);
                this.props.sentData();
                this.refs.task.value = "";
                this.refs.status.value = "";
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div>
                <h3 className="text-center"> Insert Data </h3> <br/>
                <form method="post" onSubmit={this.SaveData} >
                    <div className="form-group row">
                        <div className="col-md-3">
                            <h5>Your Task </h5>

                        </div>

                        <div className="col">
                            <input type="text" onChange={this.handelChange} name="task" ref="task" className="form-control" placeholder="" aria-describedby="helpId" />

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Task Status</h5>

                        </div>

                        <div className="col">
                            <input type="text" name="status" onChange={this.handelChange} ref="status" className="form-control" placeholder="" aria-describedby="helpId" />

                        </div>
                    </div> <br />
                    <div className="btn-group  offset-md-4" role="group" aria-label="">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>

            </div>
        )
    }
}
