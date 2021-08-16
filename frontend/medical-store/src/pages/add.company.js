import { useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { AXIOS_CLIENT } from "../Api/axios.config";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCompanySchema } from "../Validations/yup.schemas";
import withDrawer from "../Layout/Drawer/withDrawer";
import FormFooter from "../Components/FormFooter";
import Error from "../Components/Error";
import AlertDialog from "../Components/Alert";
import Loader from "../Components/Loader";
import { addCompany, updateCompany } from "../Redux/actions/company";

const AddCompany = (props) => {
  const { record: data, update } = props.location.state || {};

  const alerts = useSelector((state) => state.alertReducer) || [];

  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCompanySchema),
  });

  const onSubmit = (formData) => {
    !update
      ? dispatch(addCompany(formData, history, setLoading))
      : dispatch(
          updateCompany({ ...formData, id: data?.id }, history, setLoading)
        );
  };

  return (
    <Container>
      <AlertDialog alerts={alerts} />
      {loading && (
        <div>
          <Loader />
          <br />
        </div>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Company Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.company_name}
                {...register("company_name")}
              />
              <Error error={errors.company_name?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Company Website <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.company_website}
                {...register("company_website")}
              />
              <Error error={errors.company_website?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Company Code <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.company_code}
                {...register("company_code")}
              />
              <Error error={errors.company_code?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.location}
                {...register("location")}
              />
              <Error error={errors.location?.message} />
            </Form.Group>
          </Col>
        </Row>
        <FormFooter href="/companies" />
      </Form>
    </Container>
  );
};

export default withDrawer({ title: "Add Company" })(AddCompany);
