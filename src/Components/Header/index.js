import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => (
    <div className="header">
        <div className="logo">
            <Link to="/">
                News
            </Link>
        </div>
        <div className="search">
            <button className="icon-search">
                <img src="/img/search.svg" />
            </button>
        </div>
    </div>
);

export default Header;
