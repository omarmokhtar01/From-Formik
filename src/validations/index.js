import * as yup from 'yup';
// create regular expresution for passwrd char with lower and upper case and number and spicific char like - _ @
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


export const basicSchema = yup.object({
    age: yup.number().required("Age is required").positive().integer(),
    email: yup.string().email("Please enter your email").required("Email is required"),
   password:yup.string().min(6).required("Password is required").matches(passwordRegex,{message:"please create a stronger password like: aBc,3@"}),
   confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password is required"),
  });