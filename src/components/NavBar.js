import React from 'react';

function NavBar(props) {
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  };

  return (
    <nav className={`navbar bg-inverse ${colors[props.color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">{props.title}</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
