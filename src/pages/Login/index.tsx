import { SubmitHandler } from 'react-hook-form';
import { LoginForm } from '../../components/LoginForm';
import { Login as LoginType } from '../../components/LoginForm/types';
import { login } from '../../services/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from '../../components/Spinner';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../contexts/Auth/useAuth';

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuth();
  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    setIsLoading(true);

    const { email, password } = data;

    login({ email, password })
      .then(() => {
        setIsAuthenticated(true);
        navigate('/');
      })
      .catch(error => {
        toast.error(error.response.statusText);
      })
      .finally(() => setIsLoading(false));
  };

  return isLoading ? <Spinner /> : (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <div className="text-center mb-4">
            <h1>Turno Customer</h1>
            <Row>
              <Col>
                Don't have an account? <Link to="/register">Go to Register</Link>
              </Col>
            </Row>
          </div>
          <LoginForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};
