import React from "react";

function Holiday({ imgLink, title, text,anchorLink,anchorText }) {
  return (
    <div style={{ width: "350px", border: "2px solid #000" }}>
      <img src={imgLink} alt={title}></img>
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={anchorLink} target="blank">{anchorText}</a>
    </div>
  );
}

export default Holiday;
