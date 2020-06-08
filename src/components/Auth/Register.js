import React, { Component } from 'react'
import { Grid, Header, Message, Icon, Form, Segment, Button,  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import firebase from '../firebase'

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '' 
    }

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {

        const {username, email, password, passwordConfirmation} = this.state

        return(
            <Grid className='app'textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450}}>
                    <Header as='h2' icon color='teal' textAlign='center'>
                        <Icon name='user secret' color='teal'/>
                        ChatBox Sign Up
                    </Header>         
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                            <Form.Input fluid name='username' icon='user' iconPosition='left' 
                            placeholder='Username' onChange={this.handleOnChange} type='text' value={username}/>
                            
                            <Form.Input fluid name='email' icon='mail' iconPosition='left' 
                            placeholder='Email Address' onChange={this.handleOnChange} type='email' value={email}/>

                            <Form.Input fluid name='password' icon='lock' iconPosition='left' 
                            placeholder='Password' onChange={this.handleOnChange} type='password'value={password}/>

                            <Form.Input fluid name='passwordConfirmation' icon='repeat' iconPosition='left' 
                            placeholder='Password Confirmation' onChange={this.handleOnChange} type='password' value={passwordConfirmation}/>

                            <Button color='teal' fluid size='large'>Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Are you already a user? <Link to='/login'>Login</Link></Message>          
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register