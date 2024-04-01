import { Avatar } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img src="./HL-logo.jpg" alt="logo" className="App-logo" />
      <div className="Account">
        <div>
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "lighter",
            }}
          >
            Handicrafted by
          </p>
          <p>Jim HLS</p>
        </div>
        <Avatar
          alt="Jim HLS"
          src="./ava.png"
          style={{ marginLeft: "8px", height: "60px", width: "60px" }}
        />
      </div>
    </div>
  );
}

export default Header;
