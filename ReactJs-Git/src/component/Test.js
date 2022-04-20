
import React, { Component } from "react";

class Test extends Component {
    constructor() {
        super();
        this.state = {
            empData: []
        }
    }


 componentDidMount() {
        fetch(`http://localhost:8080/getdata`)
            .then(response => response.json())
            .then(empData => this.setState({ empData: empData }))
    }



    render() {
        return (
            

            <div className="drop-down">
                <p>Select City</p>
                <select>{
                    this.state.empData.map(empData =>
                        <option value="empData.value">
                            {empData.city}
                        </option>)
                } </select>

            </div>
        )
    }
}
export default Test;



//This is sample code for to pass the data to server for select using while query

// componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }






// constructor(props) {
//     super(props);

//     this.getToken = this.getToken.bind(this);
//   }


// componentDidMount() {
//   const bearerToken = this.getToken();

//   fetch('http://buildingsAPI:111/api/buildings/?myparam1={abc_energyprogramid}', {
//    method: 'GET',
//    headers: {
//               'Content-type': 'application/json',
//               'Authorization': `Bearer ${bearerToken}`
//             },
//       })
//       .then(results => results.json())
//       .then(buildings => this.setState({ buildings: buildings }))
//     }

//   getToken() {
//       return localStorage.getItem('id_token');
//   }

//   render() {
//       console.log(this.state.buildings);
//       return(
//           <div>
//           <select className="custom-select" id="siteName">
//                   { this.state.buildings.map(item =>(
//                   <option key={item.siteName}>{item.siteName}</option>
//                   ))
//                   }
//               </select>
//           </div>
//       );
//   }