import RenderPosts from "./RenderPosts";
import useFetch from "./useFetch";

const Homepage = () => { 
    const {error, preloader, lyricsData: postsData} = useFetch('http://localhost:8080/lyricsData')
    return ( 
        <main>
            {error && <h1>{error}</h1>}
            {preloader && <p style={{color: 'white'}}>Please wait...</p>}
            {/* load the renderPosts using specified props  */}
            {postsData && <RenderPosts postsData = {postsData} heading = 'Hot Lyrics'/>}
        </main>
     );
}

export default Homepage;