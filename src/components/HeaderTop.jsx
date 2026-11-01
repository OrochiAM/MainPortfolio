import Logo from '../assets/images/logo.png';

export default function HeaderTop() {
  return (
    <div className="header-top">
      <p>MILIC PORTFOLIO</p>
      <img src={Logo} alt="" draggable="false" />
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
