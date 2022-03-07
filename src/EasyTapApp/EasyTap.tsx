import { useState } from "react";
import { Container } from "react-bootstrap";
import LoginApp from "./Login/LoginApp";

const MainApp = () => {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  // console.log(`isLoggedIn: ${isLoggedIn.toString()}`)
  return (
    <Container fluid>
        <LoginApp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Container>
  );
};

export default MainApp;
