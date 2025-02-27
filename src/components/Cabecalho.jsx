import React from "react";

function Cabecalho({titulo}) {
  return (
    <header className="header">
      <div>
        <h1>{titulo}</h1>
        <p>
          <a href="www.linkedin.com/in/evertoncoelho91" 
             target="_blank" >
            LinkedIn
          </a>
        </p>
        <address>
          <p>(32) 99999-9999 | <a href="mailto:everton.coelho@live.com">everton.coelho@live.com</a></p>
        </address>
      </div>
    </header>
  );
}

export default Cabecalho;