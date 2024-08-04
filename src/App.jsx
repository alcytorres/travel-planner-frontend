import { Signup } from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Signup />
        <Login />
        <LogoutLink />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;