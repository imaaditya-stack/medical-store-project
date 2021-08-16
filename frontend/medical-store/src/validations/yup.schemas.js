import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const phoneRegExp = /^\d{10}$/;

//Store Form Schema
const addStoreSchema = (update) => {
  const password = !update
    ? {
        password: yup
          .string()
          .required("Password is a required field")
          .matches(/^(|.{6,10})$/, "Password must be between 6-10 characters"),
      }
    : {
        password: yup
          .string()
          .matches(/^(|.{6,10})$/, "Password must be between 6-10 characters"),
      };
  const schema = yup.object().shape({
    store_name: yup
      .string()
      .required("Store name is a required field")
      .matches(/^(|.{3,60})$/, "Store name must be between 3-60 characters"),
    username: yup
      .string()
      .required("Username is a required field")
      .matches(/^(|.{3,45})$/, "Username must be between 3-45 characters"),
    ...password,
    store_email_id: yup.string().email("Invalid Email").notRequired(),
    mobile_number: yup.string().matches(phoneRegExp, {
      message: "Phone number is not valid",
      excludeEmptyString: true,
    }),
    store_registration_no: yup
      .string()
      .matches(
        /^(|.{5,60})$/,
        "Registration Number must be between 5-60 characters"
      ),
    store_license: yup
      .string()
      .required("Store license is a required field")
      .nullable(),
    store_type_id: yup.string().required("Store type is a required field"),
    address_1: yup.string().required("Address 1 is a required field"),
    address_2: yup.string().notRequired(),
  });

  return schema;
};

//Expiry date validation
var date = new Date();
date.setFullYear(date.getFullYear() + 2);

// Medicine Form Schema
const addMedicineSchema = yup.object().shape({
  medicine_name: yup
    .string()
    .required("Medicine name is a required field")
    .matches(/^(|.{5,60})$/, "Medicine name must be between 5-60 characters"),
  medicine_price: yup
    .number()
    .required("Medicine price is a required field")
    .min(1, "Medicine price must be greater than or equal to 1")
    .max(999.99, "Medicine price must be less than or equal to 999.99")
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : value)),
  medicine_details: yup
    .string()
    .matches(/^(|.{10,})$/, "Medicine details must have atleast 10 characters")
    .nullable(),
  medicine_quantity: yup
    .number()
    .integer("Medicine quantity must be an integer")
    .min(1, "Medicine quantity must be less than or equal to 99")
    .max(99, "Medicine quantity must be less than or equal to 99")
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : value)),
  medicine_type_id: yup.string().required("Medicine type is a required field"),
  store_id: yup.string().required("Store is a required field"),
  company_id: yup.string().required("Company is a required field"),
  medicine_expiry_date: yup
    .date()
    .required()
    .min(date, "Expiry date should be atleast 2 years from today")
    .nullable()
    .typeError("Invalid expiry date"),
});

// Company Form Schema
var expression =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const addCompanySchema = yup.object().shape({
  company_name: yup
    .string()
    .required("Company name is a required field")
    .matches(/^(|.{3,60})$/, "Company name must be between 5-60 characters"),
  company_code: yup
    .string()
    .required("Company Code is a required field")
    .matches(/^(|.{3,45})$/, "Company code must be between 5-60 characters"),
  company_website: yup
    .string()
    .required("Company Website is a required field")
    .matches(expression, "Invalid Website Url"),
  location: yup
    .string()
    .matches(/^(|.{2,45})$/, "Location must be between 5-45 characters"),
});

export { loginSchema, addStoreSchema, addMedicineSchema, addCompanySchema };
