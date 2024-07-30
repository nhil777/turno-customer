import { SubmitHandler } from 'react-hook-form';
import { RegisterForm } from '../../components/RegisterForm';
import { Register as RegisterType } from '../../components/RegisterForm/types';
import { register } from '../../services/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from '../../components/Spinner';
import { Col, Container, Row } from 'react-bootstrap';

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    setIsLoading(true);

    const { name, email, password } = data;

    register({ name, email, password })
      .then(() => navigate('/'))
      .catch(error => toast.error(error.response.data.message))
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
                Already have an account? <Link to="/login">Go to Login</Link>
              </Col>
            </Row>
          </div>
          <RegisterForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};
