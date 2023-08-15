import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
    return ( 
        <nav>
            <h1 className="logo"><i className="fa-solid fa-guitar"></i><span>lyricsArena</span><i className="fa-solid fa-guitar"></i></h1>
            <div className="links">
                <Link to = "/create">
                    <input type="button" value="Add New Lyrics" className="newBlogBtn" />
                </Link>
                <div className="home-fav-links">
                    <Link to="/"><i className="fa-solid fa-home"></i></Link>
                    <Link to="/"><i className="fa-solid fa-heart"></i></Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;