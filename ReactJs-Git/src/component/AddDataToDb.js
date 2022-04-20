import react, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Button, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

function AddDataToDb() {


    //code for add data to database
    const [data, setData] = useState({});

    //   handle form function
    const handleform = (e) => {
        console.log(data);
        postData(data);
        e.preventDefault();
    };

    // function handleform(e) {
    //     return
    //     console.log(data)
    //     e.preventDefault();

    // };




    //function to insert data into DB
    const postData=(data)=>{
        axios.post(`http://localhost:8080/adddata`,data).then(
            (response)=>{
                console.log(response);
                console.log("Success")
                toast.success("Data Added Successfully")
                
            },
            (error)=>{
                console.log(error);
                console.log("Error");
                toast.error("Error")
            }
        );
    };



    return (
        <div className="block-example border border-dark ">
            <Fragment >
                <form className="m-4" onSubmit={handleform} >
                    <FormGroup>
                        <Label for="firstName">FirstName: </Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" required
                            onChange={(e) => {
                                setData({ ...data, firstName: e.target.value });
                            }} />

                    </FormGroup>

                    <FormGroup>
                        <Label for="lastName">LastName: </Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" required
                            onChange={(e) => {
                                setData({ ...data, lastName: e.target.value });
                            }} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email: </Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email Id" required
                            onChange={(e) => {
                                setData({ ...data, email: e.target.value });
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City: </Label>
                        <Input type="text" name="city" id="city" placeholder="Enter City Name" required
                            onChange={(e) => {
                                setData({ ...data, city: e.target.value });
                            }} />
                    </FormGroup>

                    <Button type="submit" color="success">Submit</Button>
                    <Button type="reset" color="warning" className="m-2">Clear</Button>
                </form>
            </Fragment>
        </div>
    );
}
export default AddDataToDb;