import React from 'react'

function CategoryBar() {
  //console.log("CategoryBar rendered");
    return (
        <div className="catContainer" id="categoryBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="./"> <i className="bi bi-chevron-left px-1"></i> Volver</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default React.memo(CategoryBar)
