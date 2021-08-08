import { Form, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../redux/actions/auth";
import { loginSchema } from "../validations/yup.schemas";
import Error from "../components/Error";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AlertDialog from "../components/Alert";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const alerts = useSelector((state) => state.alertReducer) || [];

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data, history));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <div className="login_container">
      <center>
        <LocalHospitalIcon />
      </center>
      <h1>Medical Store Management</h1>
      <Container className="form_container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialog alerts={alerts} />
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              {...register("username")}
            />
            <Error error={errors.username?.message} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <Error error={errors.password?.message} />
          </Form.Group>
          <center>
            <Button type="submit">Login</Button>
          </center>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
