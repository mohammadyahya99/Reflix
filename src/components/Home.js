import React from "react";
import User from "./User";
import { Link } from "react-router-dom";
import "../style/home.css";

class Home extends React.Component {
  updateCurUser = (userID) => {
    this.props.updateCurUser(userID);
  };

  render() {
    return (
      <div>
        <h1 className="whos">Who's Watching?</h1>
        <div className="usersContainer">
          {this.props.users.map((user) => {
            return (
              <Link to="/catalog">
                <User
                  name={user.name}
                  id={user.id}
                  img={user.img}
                  updateCurUser={this.updateCurUser}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
