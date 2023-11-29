import React from "react";

const Paragrafo = ({ color, text }) => {
return <p style={{ color: color }}>{text.toUpperCase()}</p>};


export default Paragrafo;
