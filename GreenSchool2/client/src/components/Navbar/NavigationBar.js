import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar , Nav } from 'react-bootstrap';
import './NavigationBar.css';
import { Container, Icon, Loader } from 'semantic-ui-react';
import {AuthContext} from '../../context/auth';
import { gql, useQuery,useSubscription } from '@apollo/react-hooks';
import { FETCH_USER } from '../../util/GraphQL';
import {Image} from 'cloudinary-react';
import image from '../../images/upload.png';




const NavigationBar = () => {
        const context = useContext(AuthContext);
        const {loading,data} = useQuery(FETCH_USER,{
            variables:{
                username: context.user? context.user.username : null
            }
        });

        return (     
            <Container style={{width:'100%' , padding:'0'}}>
                  
                    <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md navbar-dark  border-bottom shadow-sm">
                            <Container>
                                
                            
                        <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand  id="Green" href="/">GreenIT</Navbar.Brand>
                      
                        {context.user &&<>
                            {loading?  <Loader active inline='centered' /> : ( data && <> 
                                <Nav.Link id="miniuser">   <Image  style={{borderRadius:'50%' , height: '50px' , width:'50px' ,  verticalAlign: 'middle' }}  src={image} /></Nav.Link>
                                <Nav.Link id="miniuser" style={{ fontFamily:'Calibri', marginLeft:'-22px' }} href={`/${data.getUser.username}/Profile`}>{data.getUser.name}</Nav.Link>
                                
                            </>)}
                        <Nav.Link style={{ fontFamily:'Calibri' }} onClick={context.logout} id="Home" href="/login"><Icon size='small' name="sign-out"></Icon>התנתק </Nav.Link>
                     

                        <Nav className="ml-auto">
                            
                           


                            <div id='v2' className="vl"></div>
                            <Nav.Link style={{fontSize:'larger' , fontFamily:'Calibri' }}   id="Home" href={`/${context.user.username}/Profile`}>פרופיל שלי</Nav.Link>
                            <div id='v2' className="vl"></div>
                            <Nav.Link style={{fontSize:'larger' , fontFamily:'Calibri' }}   id="Home" href="/">דף הבית</Nav.Link>
                            <div id='v2' className="vl"></div>

       
                        </Nav></>}
                       
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </Container>
        );
   
}

 
export default NavigationBar;