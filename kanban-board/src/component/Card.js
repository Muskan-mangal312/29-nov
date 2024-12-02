import React from "react";

const Card = ({ task }) => {
  return (
    <div className="card">
      <h3>{task.id}</h3>
      <p>{task.title}</p>
      <small>{task.type}</small>
    </div>
  );
};

export default Card;
