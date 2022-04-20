import react from "react";
import { Button, Container, Jumbotron } from "reactstrap";


function Home() {

    return (
        <div>
            <Container style={{ background: "gainsboro", width: 735 }}>
                <div style={{ height: 400 }}>
                    <h1 className="display-5 , text-center" >Maxima Group</h1>
                    <p className="my-4 ">Maxima Consulting is a company with over 27 years of experience in IT and enterprise
                        software solutions. Our specialists located across three
                        continents help organizations in developing, scaling, and maintaining their IT environments.</p>

                            <Container className="text-center">
                             <Button  color="success"  href="https://maximaconsulting.com/">Get in Touch</Button>{' '}
                             </Container>
                </div>

            </Container>


        </div>
    );
}

export default Home;