import { useFormik } from "formik";
import React from "react";
import { UserType } from "../InsertUsers";
import classes from "./CreateUserForm.module.scss";

type CreateUserFormModalType = {
  active: boolean;
  setActive: (value: boolean) => void;
  // setUserData: (user: UserType) => void;
  addUserRequest: (newUser: UserType) => void;
};

export const CreateUserFormModal: React.FC<CreateUserFormModalType> = ({
  active,
  setActive,
  // setUserData,
  addUserRequest,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
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

      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length <= 2) {
        errors.firstName = "Invalid values => less then 3 symbols";
      }

      return errors;
    },

    // ?????????????????????????????????????
    onSubmit: (values: FormikValuesTypes) => {
      console.log(JSON.stringify(values));

      formik.resetForm();
    },
  });

  const sendUserDataHandler = () => {
    // setUserData(formik.values);
    addUserRequest(formik.values);
    setActive(!active);
  };

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
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <div>
            <label htmlFor="firstName">First name: </label>
            <input
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              // {...formik.getFieldProps("first_name")}
            />
          </div>
          <div>
            <label>Last name: </label>
            <input {...formik.getFieldProps("lastName")} />
          </div>
          <div>
            <label>Age: </label>
            <input {...formik.getFieldProps("age")} />
          </div>
          <div>
            <label>Country: </label>
            <input {...formik.getFieldProps("country")} />
          </div>
          <div>
            <label>City: </label>
            <input {...formik.getFieldProps("city")} />
          </div>
          <div>
            <label>Street: </label>
            <input {...formik.getFieldProps("street")} />
          </div>

          <div>
            <label>Phone: </label>
            <input {...formik.getFieldProps("phone")} />
          </div>
          <div>
            <label>Email: </label>
            <input {...formik.getFieldProps("email")} />
          </div>
          <div className={classes.controls}>
            <button type="submit" onClick={sendUserDataHandler}>
              Add
            </button>
            <button
              type="button"
              onClick={() => setActive(!active)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ==== TYPES ====

type FormikValuesTypes = {
  firstName: string;
  lastName: string;
  age: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  street: string;
};

type FormikErrorType = {
  firstName?: string;
  lastName?: string;
  age?: string;
  phone?: string;
  email?: string;
  country?: string;
  city?: boolean;
};
