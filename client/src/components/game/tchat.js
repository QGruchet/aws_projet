import React from 'react';

const Tchat = () => {
  return (
    <div className="Tchat">
      Tchat:
      <ul id="messages"/>
      <form id="form" action="">
        <input id="input" autoComplete="off"/>
        <button>Send</button>
      </form>

    </div>
  );
};

export default Tchat;
