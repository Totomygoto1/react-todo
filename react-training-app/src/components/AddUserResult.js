import './../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddUserResult = (props) => {
  let [users, setUsers] = useState([]);

  let [firstname, setFirstName] = useState('');
  let [lastname, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [showLink, setshowLink] = useState(true);

  const handleFirstNameChange = (e) => {
    firstname = setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    lastname = setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    email = setEmail(e.target.value);
  };

  const handleSaveUser = (e) => {
    e.preventDefault();

    if (firstname && lastname && email) {
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      let newUser = {
        id: uniqueId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        result: props.total,
      };
      setUsers([newUser, ...users]);
      setshowLink(false);
      document.getElementById('error').innerHTML = '';
    } else {
      document.getElementById('error').innerHTML =
        '  You must fill in your firstname, your family name and your email address ... ';
    }
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      setUsers(users);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <>
      <div className="data-card-container">
        <div className="data-card">
          <form onSubmit={handleSaveUser}>
            <input
              placeholder="First name"
              value={firstname}
              onChange={handleFirstNameChange}
            />

            <br />

            <input
              placeholder="Last name"
              value={lastname}
              onChange={handleLastNameChange}
            />

            <br />

            <input
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

            <br />

            <button type="submit">Add your details</button>
            <br />

            <span id="error"></span>

            {showLink ? (
              ''
            ) : (
              <>
                <p>
                  Thank you , your Test result and your personal details have
                  been saved.
                </p>
                <Link to={`/results/`}>
                  To view your stored Test result - click here
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUserResult;
