// import { Link } from "react-router-dom";
import { LogoutLink } from './LogoutLink'

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="/signup">Signup</a> | <a href="/login">Login</a> | <LogoutLink /> | <a href="/my_trips">My Trips</a> 
      </nav>
    </header>
  )
}


