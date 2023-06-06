import React, { useContext, useState } from "react";
import { useLoginRegisterPageStyles } from "./LoginRegisterModule";
import { useHistory } from "react-router-dom";
import { postRegister } from "../../api/stateAPI";
import AuthContext from "../../store/authContext";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

type Props = {
  // onFormSwitch: (formType: string) => void;
};

function LoginRegister({}: Props) {
  const { classes } = useLoginRegisterPageStyles();
  const history = useHistory();

  const [displaySignInForm, setdisplaySignInForm] = useState(false);
  const [displayLogin, setdisplayLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const ctx = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // create a request body with the form data
    if (displayLogin) {
      ctx.onLogin(email, pass);
      history.push("/");
    } else if (displaySignInForm) {
      postRegister({
        userName: name,
        email: email,
        password: pass,
        mobileNumber: phone,
        gender: gender,
      })
        .then((data: any) => {
          if (data.data.status === 201) {
            // Set the token in local storage
            localStorage.setItem("access_token", data.data.access_token);
            localStorage.setItem("refresh_token", data.data.refresh_token);
            history.push("/");
          }
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
    }

    const empty = [];
    if (displaySignInForm) {
      if (name === "") {
        empty.push("name");
      }
      if (phone === "") {
        empty.push("phone");
      }
    }

    if (email === "") {
      empty.push("email");
    }
    if (pass === "") {
      empty.push("password");
    }
    setEmptyFields(empty);
    if (empty.length > 0) {
      alert("Please fill in the following fields: " + empty.join(", "));
    } else {
      console.log(emptyFields);
    }
    setEmail("");
    setPass("");
  };

  const getFieldClassName = (fieldName: string) => {
    return emptyFields.includes(fieldName) ? "empty-field" : "";
  };

  return (
    <div className={classes.main}>
      {displayLogin ? (
        <div className={classes.authFormContainer}>
          <h2>Login</h2>
          <form className={classes.authFormContainer} onSubmit={handleSubmit}>
            <label className={classes.label} htmlFor="email">
              email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="password">
              paassword
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              className={classes.input}
            />
            <button className={classes.linkBtn} type="submit">
              Log In
            </button>
          </form>
          <button
            className={classes.linkBtn}
            onClick={() => {
              setdisplayLogin(!displayLogin);
              setdisplaySignInForm(!displaySignInForm);
            }}
          >
            Don't have an account? Register here
          </button>
        </div>
      ) : (
        <div className={classes.authFormContainer}>
          <h2>Register</h2>
          <form className={classes.authFormContainer} onSubmit={handleSubmit}>
            <label className={classes.label} htmlFor="name">
              Full name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              name="name"
              id="name"
              placeholder="full Name"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="name">
              Gender
            </label>
            <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              type="gender"
              name="gender"
              id="gender"
              placeholder="Gender"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="password">
              Password
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="******"
              id="password"
              name="password"
              className={classes.input}
            />
            <button className={classes.linkBtn} type="submit">
              Sign Up
            </button>
          </form>
          <button
            className={classes.linkBtn}
            onClick={() => {
              setdisplayLogin(!displayLogin);
              setdisplaySignInForm(!displaySignInForm);
            }}
          >
            Already have an account? Login here
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginRegister;
