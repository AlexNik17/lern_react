import "./Header.css";
import Logo from "../../assets/Logo.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Header() {
  const handleSearch = (searchTerm) => {
    console.log("Search:", searchTerm);
  };

  return (
    <header className="header">
      <div className="container">
        <img src={Logo} className="logo" alt="logo" />
        <HeaderNav />
        <Search onSearch={handleSearch} />
        <Button />
      </div>
    </header>
  );
}

export default Header;
