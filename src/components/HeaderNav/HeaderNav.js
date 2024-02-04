import "./HeaderNav.css";
import headerNavItems from "../../config/headerNavItems";

const items = headerNavItems.map((item) => (
  <li key={item.id}>
    <a href={item.link}>{item.text}</a>
  </li>
));

function HeaderNav() {
  return (
    <nav className="header-nav">
      <ul>{items}</ul>
    </nav>
  );
}

export default HeaderNav;
