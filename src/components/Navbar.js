import React from "react";

const Navbar = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="ui secondary pointing menu">
      <div className="item" to="/#">
        Logo
      </div>
      <div className="item" to="/">
        Home
      </div>
      <div className="right menu">
        {isLoggedIn ? (
          <div className="item" to="/logout">
            Logout
          </div>
        ) : (
          <>
            <div className="item" to="/login">
              Login
            </div>
            <div className="item" to="/register">
              Register
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
