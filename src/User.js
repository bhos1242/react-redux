import React from "react";

const User = (props) => {
  return (
    <div>
      <h2>User component</h2>
      <h3>Name:{props.data.name}</h3>
      <h4>Age:{props.data.age}</h4>
    </div>
  );
};

export default User;
