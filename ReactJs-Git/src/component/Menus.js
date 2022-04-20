import react from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menus() {

    const FetchDatanotify = () => {
        toast.success("Data Fetched");
    }
    const AddDataNotify = () => {
        toast.success("Data Added");
    }


    return (
        <div>
            <ToastContainer />
            <ListGroup>
                <Link className="list-group-item list-group-item-action" to="/" >Home</Link>
                <Link className="list-group-item list-group-item-action" to="/view-data" action onClick={FetchDatanotify}>View Data</Link>
                <Link className="list-group-item list-group-item-action" to="/add-data" action>Add Data</Link>
                <Link className="list-group-item list-group-item-action" to="/filter-data" action>View Data Using Filter</Link>
                <Link className="list-group-item list-group-item-action" to="#" action>Contact Us</Link>
                <Link className="list-group-item list-group-item-action" to="#" action>About Us</Link>
            </ListGroup>
        </div>
    );
}
export default Menus;