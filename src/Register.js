import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register =  () => {
  return (
      <Form>
        <h2 className='title'>Register Here!</h2>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="user" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Form.Text id="passwordHelpBlock" muted>
          <div className="d-grid gap-2">
            <Button variant="link" type="submit" size="sm">
              Privacy and Policies
            </Button>
          </div>    
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className='button'>
            Register
          </Button>
        </div> 
      </Form> 
  );
}

export default Register;
