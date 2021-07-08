import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useMainContext } from "../../context/context";
import "../../css/user.css";
import { toastMessages } from "../../utils/toastMessages";
import { logOut } from "./util/logout";
export const UserDetails = () => {
  const { dispatch } = useMainContext();
  const [showInput, setShowInput] = useState({
    email: false,
    password: false,
  });
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const {
    userData: { firstname, lastname, email },
    setToken,
    setUserData,
  } = useAuth();

  const updateEmail = async (e, email) => {
    e.preventDefault();
    try {
      const {
        status,
        data: { userdata },
      } = await axios.post(
        `https://rabonaserver.joyan11.repl.co/auth/updateemail`,
        {
          email: email,
        }
      );
      console.log(userdata);
      if (status === 200) {
        setUserData(userdata);
        localStorage.setItem("user", JSON.stringify(userdata));
        setShowInput("false");
      }
    } catch (error) {
      console.log(error.response);
      if (error?.response?.status === 409) {
        toastMessages("email already taken");
      }
    }
  };

  return (
    <div className="user--container">
      <h2>User Details</h2>
      <p className="user user-fname text text-capitalize">
        First Name: <span>{firstname}</span>
      </p>
      <p className="user user-lname text-capitalize">
        Last Name: <span>{lastname}</span>{" "}
      </p>
      <div className="user user-email">
        Email:{" "}
        {!showInput.email ? (
          <>
            <span>{email}</span>
            <p
              className="change-text"
              onClick={() => setShowInput({ ...showInput, email: true })}>
              change email
            </p>
          </>
        ) : (
          <div className=" change-text-box">
            <form onSubmit={(e) => updateEmail(e, text.email)}>
              <input
                placeholder="Enter new email"
                className="input input-style"
                type="email"
                name="email"
                required
                onChange={(e) => setText({ ...text, email: e.target.value })}
                autoFocus={true}
              />
              <button className="btn btn--round btn-primary">Save</button>
              <button
                className="btn btn--round btn-primary"
                onClick={() => setShowInput({ ...showInput, email: false })}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>

      <button
        className="btn btn--round btn-primary logout"
        onClick={() => logOut(setToken, setUserData, dispatch)}>
        Logout
      </button>
    </div>
  );
};
