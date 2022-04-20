import axios from "axios";
import react, { useEffect, useState } from "react";


function DropDownMenu() {


    useEffect(() => {
        getDataFromServer();
    });   //,[] if we use this in useEffect to stop then it will work only once 




    //data from db
    const [details, setDetails] = useState([]);


    //Function to call server
    const getDataFromServer = () => {
        axios.get(`http://localhost:8080/getdatabycity?city=${listState}`).then(

            (response) => {
                //console.log(response.json());
                console.log(response.data);
                setDetails(response.data);

            },
            (error) => {
                console.log(error);
            }
        );

    };








    //function for drop dowmn menus

    const [listState, setlistState] = useState("");

    return (
        <div>
            <h3>Select City:</h3>
            <select className="custom-select"
                onChange={(e) => {
                    const selectList = e.target.value;
                    setlistState(selectList);
                }}
            >
                <option>Select City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Jalgaon">Jalgaon</option>

            </select>
            {/* {listState} */}



            <div style={{ margin: 80, marginTop: -10 }}>
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
                                details.map(item => (
                                    <tr key={item.id}>
                                        
                                            <td> {item.firstName} </td>
                                            <td> {item.lastName} </td>
                                            <td> {item.email} </td>
                                            <td> {item.city} </td>

                                        </tr>
                                        ))
                             }


                         </tbody>
                    </table>

                </div>
            </div>




        </div>
    );
}

export default DropDownMenu;