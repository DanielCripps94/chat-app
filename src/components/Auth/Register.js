import React, { Component } from 'react'
import { Grid, Header, Message, Icon, Form, Segment, Button,  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    state = {

    }

    handleChange = () => {

    }
    render() {
        return(
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450}}>
                    <Header as='h2' icon color='Black' textAlign='center'>
                        <Icon name='puzzle piece' color='Black'/>
                        Register for ChatBox
                    </Header>         
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid name='username' icon='user' iconPosition='left' 
                            placeholder='Username' onChange={this.handleOnChange} type='text'/>
                            
                            <Form.Input fluid name='email' icon='mail' iconPosition='left' 
                            placeholder='Email Address' onChange={this.handleOnChange} type='email'/>

                            <Form.Input fluid name='password' icon='lock' iconPosition='left' 
                            placeholder='Password' onChange={this.handleOnChange} type='password'/>

                            <Form.Input fluid name='passwordConfirmation' icon='repeat' iconPosition='left' 
                            placeholder='Password Confirmation' onChange={this.handleOnChange} type='password'/>

                            <Button color='black' fluid size='large'>Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Are you already a user? <Link to='/login'>Login</Link></Message>          
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register