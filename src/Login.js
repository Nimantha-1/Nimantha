import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
const Login = () => {
    return(
      <div>
        <Form>
            <h2 className='title'>Login Here!</h2>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted>
            <div className="d-grid gap-2">
              <Button variant="link" type="submit" size="sm">
                Forgot Password?
              </Button>
            </div>    
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className='button'>
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
}
export default Login;