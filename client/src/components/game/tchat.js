import React from 'react';

function Tchat() {
  return (
    <div
      className="Tchat"
      style={{
        border: "1px solid #000",
    }}>
      Tchat:
      <ul id="messages"/>
      <form action="">
        <input id="input" autoComplete="off"/>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Tchat;
