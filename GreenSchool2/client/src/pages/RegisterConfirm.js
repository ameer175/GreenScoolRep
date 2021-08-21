import { useState } from 'react';
import {Container, Form, Grid, Header, Segment } from 'semantic-ui-react';
import Register from './Register';


const RegisterConfirm = () => {

    const DUMMY_SECRET = 'PASSWORD';
    const [show,setShow] = useState(false);
    const handleChange = e => {
        if(e.target.value === DUMMY_SECRET)
            setShow(true);
        else
            setShow(false);
    }

    return ( 
        <Container>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            {!show && <> <Header as='h2' color='green' textAlign='center'>
                Enter Employee Secret Code
            </Header>
            <Form size='large'>
                <Segment stacked>
               <Form.Input
                    onChange={handleChange}    
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Secret Employee Password'
                    type='password'
                />
                </Segment>
            </Form> </>}
            {show && <Register />}
            </Grid.Column>
            </Grid>
        </Container>

     );
}
 
export default RegisterConfirm;