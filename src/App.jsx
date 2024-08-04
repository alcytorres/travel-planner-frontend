import { Signup } from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Login />
      <LogoutLink />
      <Content />
      <Footer />
    </div>
  )
}

export default App;