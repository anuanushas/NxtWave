import "./header.css";
import logo from "./img/NxtWave.png";
import profile from "./img/profile_pic.png";
function Header() {
  return (
    <>
      <div className="nav">
        <img className="logo" src={logo} alt="hello" />
        <div className="profile-section">
          <a className="add_item" href="http:">
            ADD ITEM
          </a>
          <img className="profile" src={profile} alt="hello" />
        </div>
      </div>
    </>
  );
}

export default Header;
