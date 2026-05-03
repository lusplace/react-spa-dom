import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import "./NavBar.css";

export default function NavBar () {
    const navigate = useNavigate(); // RRDv6
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        navigate(`/search?query=${searchQuery}`);
    }

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={"/"}>REACT SPA Movie App</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {/*<Link className="nav-link"
                              to={{
                                  pathname: `/movie/${getRandomMovie()}`
                                  //hash: "#hash",
                              }}
                        >Random MovieCard</Link>*/}
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" action={handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        <Link className="nav-link"
                            to={{
                                pathname: `/search`,
                                search: `?query=${searchQuery}`,
                                //hash: "#hash",
                            }}
                    >Search</Link></button>
                </form>
            </div>
        </nav>
    );
}