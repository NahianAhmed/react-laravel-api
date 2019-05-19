
import React, { Component } from 'react'
import axios from 'axios';

export class EditData extends Component {
    constructor() {
        super()
        this.state = {
            id:'',
            task: '',
            status: '',
           

        }

    }

    componentDidMount(){
        axios.get('http://localhost/laravelapi/GetData/'+this.props.id)
            .then(res => {
              //  console.log(res.data);
                this.setState({
                    id:res.data.id,
                    task:res.data.task,
                    status:res.data.status
                })
                
            })
            .catch(err => {
                console.log(err);
            });
    }

    handelChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;
        this.setState({ [key]: val });

    }
    UpdateData = (e) => {
        e.preventDefault();
        const data = {
            id:this.state.id,
            task: this.state.task,
            status: this.state.status,
        }
        axios.post('http://localhost/laravelapi/UpdateData', data)
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
                <h3 className="text-center"> Edit Data </h3> <br/>
                <form method="post" onSubmit={this.UpdateData} >
                    <div className="form-group row">
                        <div className="col-md-3">
                            <h5>Your Task </h5>

                        </div>

                        <div className="col">
                            <input type="text" value={this.state.task} onChange={this.handelChange} name="task" ref="task" className="form-control" placeholder="" aria-describedby="helpId" />

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Task Status</h5>

                        </div>

                        <div className="col">
                            <input type="text" value={this.state.status} name="status" onChange={this.handelChange} ref="status" className="form-control" placeholder="" aria-describedby="helpId" />

                        </div>
                    </div> <br />
                    <div className="btn-group  offset-md-4" role="group" aria-label="">
                        <button type="submit" className="btn btn-primary">Update Data</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default EditData
