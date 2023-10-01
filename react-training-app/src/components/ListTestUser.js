import './../App.css';
import React from 'react';

const ListTestUser = (props) => {
  return (
    <>
      {props.users.map((useritem) => {
        let { id, firstname, lastname, email, result } = useritem;
        return (
          <div key={id} className="data-card-container">
            <div className="data-card">
              <div>
                <p>
                  Name: {firstname} {lastname} <br />
                  Email: {email} <br />
                  Result: {result} <br />
                </p>
                <button onClick={() => props.deleteUser(id)}>
                  Delete your Result
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListTestUser;
