import React from 'react';
import './UserItems.css';

export default function UserItems(props) {
    return (
      <>
        <div className="navbar">
          <h2>
            <i className="fab fa-github"></i> List Of All Github Users
          </h2>
        </div>
        <div className="container-fluid mt-5">
          <div className="row text-center">
            {props.users.map((curElement) => {
              return (
                <div className="col-10 col-md-4 mt-5" key={curElement.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        <img
                          className="ig"
                          alt="Profile"
                          src={curElement.avatar_url}
                          width="135"
                        />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 rgb mt-0 textLeft">
                          {curElement.login}
                        </h4>
                        <span className="textLeft"></span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <a href={curElement.html_url}>Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}
