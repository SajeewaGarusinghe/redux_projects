import { Link } from 'react-router-dom';

import user from '../../images/user.png';
import './Header.scss';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>

      <SearchBar />

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
