import logo from './logo.svg';
import './App.css';
import DatafromDb from './component/DatafromDb';
import Header from './component/Header';
import Home from './component/Home';
import { Container, Row, Col, DropdownMenu } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Menus from './component/Menus';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddDataToDb from './component/AddDataToDb';
import DropDownMenu from './component/DropDownMenu';
import Test from './component/Test';



function App() {
  return (
    <div>
     
      <Router>
        <Container>

          <Header />
          <Row>
            <Col md={4}>

              <Menus />
            </Col>

            <Col md={8}>

              <Routes>

                <Route path='/' element={<Home />} exact />
                <Route exact path='/view-data' element={<DatafromDb />} />
                <Route exact path='/add-data' element={<AddDataToDb />} />
                <Route exact path='/filter-data' element={<DropDownMenu />} />
              </Routes>


            </Col>

          </Row>

        </Container>
      </Router>


    </div>
  );
}

export default App;
