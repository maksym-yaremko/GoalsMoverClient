import React from 'react';
import HorizontalList from './HorizontalList';
import { Container, Row, Col } from 'reactstrap';
import la from '../Photos/mainPagePhoto.jpg'
import '../ComponentsStyles/MainPage.css';

const divstyle = {
    color : 'black',
    textAlign : 'center',
    marginTop : '65px',
    fontSize: '55px',
    fontWeight : '600',
    paddingBottom:'40px'
}
const imagestyle ={
    width:'auto',
    height: '430px',
    overflow: 'hidden'
}

function MainPage(){
    return (
        <div>
            <HorizontalList></HorizontalList>
        <div style={divstyle}>The #1 app for setting your goals</div>
        <Container >
            <Row>
                <Col className="col1" md={{size:5,offset:1}}>
                    <div style = {imagestyle}>
                        <img src={la} alt="" />
                    </div>
                </Col>
                <Col className="col2"  md={5}>
                    <div>
                        <a className="signup-button-facebook" href="/">Sign up with Facebook</a>
                        <a className="signup-button-gmail" href="/">Sign up with Google</a>
                    </div> 
                    <div className="hr">
                        OR
                    </div>
                    <div>
                        <a className="signup-button-email" href="/signup">Sign up with Email</a>
                    </div>
                    <div className = "already-a-member">
                        <p>Already a member?<a href="/login"> Log In</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        
    );
}

export default MainPage;