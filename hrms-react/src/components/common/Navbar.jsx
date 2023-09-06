import React, { useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "../SignedOut";
import SignedIn from "../SignedIn";
import { useDispatch, useSelector } from "react-redux";
import { isEmployer, logoutFromPage } from "../../store/actions/authActions";

function Navbar({ getCompanyName }) {
  const [input, setInput] = useState("");
  const {isLogin} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(logoutFromPage())
    dispatch(isEmployer(false))
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      getCompanyName(input);
    }
  };

  const handleClick = () => {
    getCompanyName("");
    setInput("");
  };

  return (
    <div className="navbar">
      <Menu inverted size="huge">
        <Container>
          <Menu.Item name="Anasayfa" />
          <Menu.Item name="İlanlar" />

          <Menu.Item position="right">
            <div>
              <input
                placeholder="Firma iş ilanı ara..."
                className="navbarSeachbar"
                value={input}
                onChange={handleChange}
                onKeyDown={handleEnter}
              />
            </div>
            <Button
              icon="redo"
              circular
              onClick={handleClick}
              style={{ backgroundColor: "white", marginLeft: "10px" }}
            />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              {isLogin ? <SignedIn signOut={signOut} /> : <SignedOut />}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navbar;
