import React from "react";
import "../style/user.css";

class User extends React.Component {
  updateCurUser = () => {
    this.props.updateCurUser(this.props.id);
  };

  render() {
    return (
      <div className="userContainer">
        <div>
          <img
            className="profilePic"
            src={this.props.img}
            onClick={this.updateCurUser}
          ></img>
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default User;
