import React from 'react'

function Navbar() {
  return (
    <div className='p-0'>
        <header>
        <div className="container header-container mb-4 p-0">
          <div className="container p-0 m-0 row align-items-center pt-4">
            <div className="navbar-logo col-sm-2 p-0">
              <a className="navbar-brand me-3 fw-bolder" href="#">SORHANS</a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 col-sm-10">
              <div className="container p-0">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-item-me">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        <i className="fas fa-exclamation-triangle" aria-hidden="true" /> HAKKIMDA</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fab fa-wordpress" />
                        WORDPRESS
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#"><i className="fab fa-wordpress" />Action</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fab fa-wordpress-simple" />
                        TEMALARIM
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item p-2" href="#">Action</a></li>
                        <li><a className="dropdown-item p-2" href="#">Another action</a></li>
                        <li>
                          <a className="dropdown-item p-2" href="#">Another action</a>
                        </li>
                        <li><a className="dropdown-item p-2" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-shopping-cart" />MAĞAZA</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-code" />KOD BANKASI</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-envelope" /> İLETİŞİM</a>
                    </li>
                  </ul>
                  <form className="d-flex align-items-center">
                    <div className="dark-mode-content">
                      <a href="#" className='color-dark'><i className="fa fa-moon" /></a>
                    </div>
                    <div className="search-content d-flex">
                      <div className="search-input">
                        <input className="form-control me-2" type="search" placeholder="Ara..." aria-label="Search" />
                      </div>
                      <div className="search-button">
                        <button className="btn btn-outline-success" type="submit"><i className="fa fa-search" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar