import { useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { addStore, updateStore } from "../Redux/actions/store";
import { useHistory } from "react-router-dom";
import { STORE_TYPES, STORE_TYPES_ERROR } from "../Redux/actions/action.types";
import { AXIOS_CLIENT } from "../Api/axios.config";
import { addStoreSchema } from "../Validations/yup.schemas";
import withDrawer from "../Layout/Drawer/withDrawer";
import FormFooter from "../Components/FormFooter";
import Error from "../Components/Error";
import AlertDialog from "../Components/Alert";

const AddStore = (props) => {
  const { record: data, update } = props.location.state || {};

  const { storeTypes } = useSelector((state) => state.storeReducer) || {};
  const alerts = useSelector((state) => state.alertReducer) || [];

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addStoreSchema(update)),
  });

  const onSubmit = (formData) => {
    !update
      ? dispatch(addStore(formData, history))
      : dispatch(updateStore({ ...formData, id: data?.id }, history));
  };

  useEffect(() => {
    // Fetch All Store Types
    const fetchStoreTypes = async () => {
      try {
        const res = await AXIOS_CLIENT.get("store/types/");
        dispatch({ type: STORE_TYPES, payload: res.data });
        reset({ store_type_id: data?.store_type_id });
      } catch (error) {
        dispatch({ type: STORE_TYPES_ERROR });
      }
    };

    storeTypes.length === 0
      ? fetchStoreTypes()
      : console.log("USING CACHED STORE TYPES FROM REDUX");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <AlertDialog alerts={alerts} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Store Name <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.store_name}
                {...register("store_name")}
              />
              <Error error={errors.store_name?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Username <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.username}
                {...register("username")}
              />
              <Error error={errors.username?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                {!update ? "Password" : "New Password"}{" "}
                <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control type="password" {...register("password")} />
              <Error error={errors.password?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.store_email_id}
                {...register("store_email_id")}
              />
              <Error error={errors.store_email_id?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.mobile_number}
                {...register("mobile_number")}
              />
              <Error error={errors.mobile_number?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Registration No</Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.store_registration_no}
                {...register("store_registration_no")}
              />
              <Error error={errors.store_registration_no?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group>
              <Form.Label>
                Store License <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Group>
                <Form.Check
                  inline
                  label="Retail Drug License"
                  type="radio"
                  value={0}
                  defaultChecked={data?.store_license === 0}
                  {...register("store_license")}
                />
                <Form.Check
                  inline
                  label="Wholesale Drug License"
                  type="radio"
                  value={1}
                  defaultChecked={data?.store_license === 1}
                  {...register("store_license")}
                />
              </Form.Group>
              <Error error={errors.store_license?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Store Type <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                defaultValue={data?.store_type_id}
                {...register("store_type_id")}
              >
                <option value="">Select Store Type...</option>
                {storeTypes?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.type_name}
                  </option>
                ))}
              </Form.Select>
              <Error error={errors.store_type_id?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Address 1 <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={data?.address_1}
                {...register("address_1")}
              />
              <Error error={errors.address_1?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={data?.address_2}
                {...register("address_2")}
              />
            </Form.Group>
          </Col>
        </Row>
        <FormFooter href="/stores" />
      </Form>
    </Container>
  );
};

export default withDrawer({ title: "Add Store" })(AddStore);
