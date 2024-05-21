import { useFormik } from "formik";
import { basicSchema } from "../validations";
import { useEffect } from "react";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      age: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values,actions) => {
      console.log(values);
      actions.resetForm()
    },
  });
  useEffect(() => {
    fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // email: formik.values.email,
        // age: formik.values.age,
        // password: formik.values.password,
        // password: formik.values.confirmPassword,

        
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log( data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  console.log(formik.errors);


  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
        className={
          formik.errors.email && formik.touched.email ? "input-error" : ""
        }
        autoComplete="username"
      />

      {formik.errors.email && formik.touched.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      {formik.errors.password && formik.touched.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Enter your confirm password"
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
        <div className="error">{formik.errors.confirmPassword}</div>
      ) : null}

      <label htmlFor="age">Age</label>
      <input
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
      />
      {formik.errors.age && formik.touched.age ? (
        <div className="error">{formik.errors.age}</div>
      ) : null}
      <button disabled={formik.isSubmitting} type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
