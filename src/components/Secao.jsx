import React from "react";

function Secao({ title, children }) {
  return (
    <section className="section">
      <h2 className="border-bottom">{title}</h2>
      {children}
    </section>
  );
}
export default Secao;