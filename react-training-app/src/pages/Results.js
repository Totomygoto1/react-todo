import './../App.css';
import top from './../images/books.jpg';
import React from 'react';
import { useState, useEffect } from 'react';
import ListTestUser from './../components/ListTestUser.js';

const Results = () => {
  let Today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  let day = new Date().toLocaleDateString('en-us', { day: 'numeric' });
  let month = new Date().toLocaleDateString('en-us', { month: 'short' });

  return (
    <>
      <div
        className="app-form-container"
        style={{
          backgroundImage: `url(${top})`,
          backgroundRepeat: 'repeat',
          opacity: 0.9,
        }}
      >
        <p>
          {`${Today},`} <span>{`${day} ${month}`}</span>
        </p>
        <h1>Test Results</h1>
      </div>
      <AddTestUser />
    </>
  );
};

const AddTestUser = (props) => {
  let [users, setUsers] = useState([]);
  let [firstname, setFirstName] = useState('');
  let [lastname, setLastName] = useState('');
  let [email, setEmail] = useState('');

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
        result: 0,
      };
      setUsers([newUser, ...users]);
      document.getElementById('error').innerHTML = '';
    } else {
      document.getElementById('error').innerHTML =
        '  You must fill in your firstname, your family name and your email address ... ';
    }
  };

  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers([...newUsers]);
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
          </form>
        </div>
      </div>

      <ListTestUser users={users} deleteUser={deleteUser} />
    </>
  );
};

export default Results;
