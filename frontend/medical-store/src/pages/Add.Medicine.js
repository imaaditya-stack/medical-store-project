import { useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { AXIOS_CLIENT } from "../Api/axios.config";
import { useDispatch, useSelector } from "react-redux";
import { addMed, updateMed } from "../Redux/actions/medicine";
import { useHistory } from "react-router-dom";
import { addMedicineSchema } from "../Validations/yup.schemas";
import withDrawer from "../Layout/Drawer/withDrawer";
import FormFooter from "../Components/FormFooter";
import Error from "../Components/Error";
import AlertDialog from "../Components/Alert";
import {
  LOAD_STORES,
  MED_TYPES,
  LOAD_COMPANIES,
} from "../Redux/actions/action.types";
import Loader from "../Components/Loader";
import { loadCompanies } from "../Redux/actions/company";

const AddMedicine = (props) => {
  const { record: data, update } = props.location.state || {};

  // console.log("UPDATE DATA", data);

  const alerts = useSelector((state) => state.alertReducer) || [];
  const { medTypes } = useSelector((state) => state.medReducer) || {};
  const { stores } = useSelector((state) => state.storeReducer) || {};
  const { companies } = useSelector((state) => state.companyReducer) || {};

  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addMedicineSchema),
  });

  const onSubmit = (formData) => {
    let newFormData = {
      ...formData,
      medicine_expiry_date: moment(formData.medicine_expiry_date).format(
        "YYYY-MM-DD"
      ),
    };
    !update
      ? dispatch(addMed(newFormData, history, setLoading))
      : dispatch(
          updateMed({ ...newFormData, id: data?.id }, history, setLoading)
        );
  };

  useEffect(() => {
    // Fetch medicine types and all stores from server
    const fetchData = () => {
      axios
        .all([AXIOS_CLIENT.get("medicine/types/"), AXIOS_CLIENT.get("store/")])
        .then(
          axios.spread((typesResponse, storeResponse, companyResponse) => {
            // Set data for dynamic select options
            dispatch({ type: MED_TYPES, payload: typesResponse.data });
            dispatch({ type: LOAD_STORES, payload: storeResponse.data });
            reset({
              medicine_type_id: data?.medicine_type_id,
              store_id: data?.store_id,
              // company_id: data?.company_id,
            });
          })
        )
        .catch((error) => console.log(error));
    };

    medTypes.length === 0 || stores.length === 0
      ? fetchData()
      : console.log("USING CACHED DATA FROM REDUX");

    companies.length === 0
      ? dispatch(loadCompanies())
      : console.log("USING CACHED COMPANIES FROM REDUX");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                Medicine Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.medicine_name}
                {...register("medicine_name")}
              />
              <Error error={errors.medicine_name?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Medicine Price <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                step=".01"
                defaultValue={data?.medicine_price}
                {...register("medicine_price")}
              />
              <Error error={errors.medicine_price?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Medicine Details</Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.medicine_details}
                {...register("medicine_details")}
              />
              <Error error={errors.medicine_details?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Medicine Quantity</Form.Label>
              <Form.Control
                type="number"
                defaultValue={data?.medicine_quantity}
                {...register("medicine_quantity")}
              />
              <Error error={errors.medicine_quantity?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Medicine Type <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="medicine_type_id"
                defaultValue={data?.medicine_type_id}
                {...register("medicine_type_id")}
              >
                <option value="">Select Medicine Type...</option>
                {medTypes?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.medicine_type_name}
                  </option>
                ))}
              </Form.Select>
              <Error error={errors.medicine_type_id?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Store <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                defaultValue={data?.store_id}
                {...register("store_id")}
              >
                <option value="">Select Store...</option>
                {stores?.map((store) => (
                  <option key={store.id} value={store.id}>
                    {store.store_name}
                  </option>
                ))}
              </Form.Select>
              <Error error={errors.store_id?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Medicine Expiry Date <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                defaultValue={data?.medicine_expiry_date}
                {...register("medicine_expiry_date")}
              />
              <Error error={errors.medicine_expiry_date?.message} />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Company <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                defaultValue={data?.company_id}
                {...register("company_id")}
              >
                <option value="">Select Company...</option>
                {companies?.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.company_name}
                  </option>
                ))}
              </Form.Select>
              <Error error={errors.company_id?.message} />
            </Form.Group>
          </Col>
        </Row>
        <FormFooter href="/medicines" />
      </Form>
    </Container>
  );
};

export default withDrawer({ title: "Add Medicine" })(AddMedicine);
