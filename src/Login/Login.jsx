import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import login from './login.scss'

const Login = () => {
  return (
    <Container>
<Row>
        <Col>
        <Card style={{ width: '18rem' }} className='card'>
      <div className='Login-txt'>
        <h1>Login Form</h1>
      </div>

      <div className='top-form'>
        <div className='name-form'>
      <Form.Label >Username</Form.Label>
        <Form.Control type="email" placeholder="Enter your username" style={{height:"30px"}}/>
        </div>
        <div className='email-form'> 
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Enter your password" style={{height:"30px"}}/>
        </div>
      </div>

      <div>
      <Button variant="primary" className='btn'>Login</Button>
      </div>

      <div className='lower-text'>
        <h5>Dont have an account? <span style={{color:"#1E8BFF"}}> register here</span></h5>
      </div>
    </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
