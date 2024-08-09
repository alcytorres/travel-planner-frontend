// import { Link } from "react-router-dom";
import { LogoutLink } from './LogoutLink'

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Travel App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">All Trips</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/trips/new">Add a Trip</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user_trips">My Trips</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Authentication
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="signup">Signup</a></li>
                <li><a className="dropdown-item" href="login">Login</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
  }




    {/* <header>
      <nav>
        <a href="/">Home</a> | <a href="/signup">Signup</a> | <a href="/login">Login</a> | <LogoutLink /> | <a href="/user_trips">My Trips</a> | <a href="/trips/new">Add a trip</a> 
      </nav>
    </header> */}