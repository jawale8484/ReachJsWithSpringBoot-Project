import React, { Component } from 'react';
import DataServices from './DataServices';




class DatafromDb extends Component {
    constructor() {
        super();
        this.state = {
            employee: []
        }
    }

    componentDidMount() {
        DataServices.getEmployee().then((res) => {
            this.setState({ employee: res.data });
        }
        );
    }

    render() {
        return (
            <div>
                <div style={{ margin:80, marginTop:-10}}>
                <h2 className="text-center"> Employee List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                
                                <th> Firts_Name</th>
                                <th> Last_Name</th>
                                <th> Email</th>
                                <th> City</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName} </td>
                                            <td> {employee.email} </td>
                                            <td> {employee.city} </td>
                                           
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
                </div>
            </div>
        );
    }
}

export default DatafromDb;
