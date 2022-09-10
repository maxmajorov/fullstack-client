import React from "react";
import { useFormik } from "formik";
import classes from "./CreateUserForm.module.scss";

type FormikValuesTypes = {
  first_name: string;
  last_name: string;
  age: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  street: string;
};

type CreateUserFormModalType = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export const CreateUserFormModal: React.FC<CreateUserFormModalType> = ({
  active,
  setActive,
}) => {
  type FormikErrorType = {
    first_name?: string;
    email?: string;
    country?: string;
    city?: boolean;
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      age: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      street: "",
    },

    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.first_name) {
        errors.first_name = "Required";
      } else if (values.first_name.length <= 2) {
        errors.first_name = "Invalid values => less then 3 symbols";
      }

      return errors;
    },

    onSubmit: (values: FormikValuesTypes) => {
      console.log(JSON.stringify(values));

      formik.resetForm();
    },
  });

  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setActive(!active)}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Create new user</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="first_name">First name: </label>
          <input
            id="first_name"
            name="first_name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            // {...formik.getFieldProps("first_name")}
          />
          <label>Last name: </label>
          <input {...formik.getFieldProps("last_name")} />
          <label>Age: </label>
          <input {...formik.getFieldProps("age")} />
          <label>Country: </label>
          <input {...formik.getFieldProps("country")} />
          <label>City: </label>
          <input {...formik.getFieldProps("city")} />
          <label>Street: </label>
          <input {...formik.getFieldProps("street")} />
          <label>Phone: </label>
          <input {...formik.getFieldProps("phone")} />
          <label>Email: </label>
          <input {...formik.getFieldProps("email")} />
          <button type={"submit"}>add user</button>
          <button type="button" onClick={() => setActive(!active)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
//           <FormGroup>
//             <TextField
//               label="Email"
//               margin="normal"
//               // name="email"
//               // onChange={formik.handleChange}
//               // onBlur={formik.handleBlur}
//               // value={formik.values.email}
//               // Взамен одна строчка
//               {...formik.getFieldProps("email")}
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div style={{ color: "red" }}>{formik.errors.email}</div>
//             ) : null}
//             <TextField
//               type="password"
//               label="Password"
//               margin="normal"
//               {...formik.getFieldProps("password")}
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div style={{ color: "red" }}>{formik.errors.password}</div>
//             ) : null}
//             <FormControlLabel
//               label={"Remember me"}
//               control={<Checkbox {...formik.getFieldProps("rememberMe")} />}
//             />
//             <Button type={"submit"} variant={"contained"} color={"primary"}>
//               Login
//             </Button>
//           </FormGroup>
//         </FormControl>
//       </form>
//     </Grid>
//   </Grid>
// );
