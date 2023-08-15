import { Link } from "react-router-dom/cjs/react-router-dom"
const RenderPosts = ({postsData, heading}) => {
    // const postsData = props.postsData
    return (
        // homepage blogs container
        <div className="blog-posts">
            {/* title and search bar area */}
            <div className="title-area">
                <h2 className="title">{heading}<i className="fa-solid fa-fire" style={{marginLeft: "10px"}}></i></h2>
                {/* search bar */}
                <div className="profile">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
            {
                // render all homepage posts
                postsData.map((data, index) => {
                   return   <Link to = {`./lyrics/${data.id}`} className = "post-link" key={data.id}>
                                <div className="post" >
                                    <div className="label">
                                        <p>{data.label}</p>
                                    </div>

                                    <div className="post-image">
                                        <img src={`images/${index}.jpg`} alt="" />
                                    </div>
                                    
                                    <div className="post-preview">
                                        <div className="post-title">
                                            <h4>{data.title}</h4>
                                        </div>

                                        <div className="post-content">
                                            {/* only render the first 100 characters in the homepage */}
                                            <p>{data.lyrics.slice(0,100)}...</p>
                                        </div>
                                    </div>
                                    {/* read more button */}
                                 </div>
                            </Link>
                })
               }
        </div>
    );
}
 
export default RenderPosts;