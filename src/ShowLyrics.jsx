import useFetch from "./useFetch"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const ShowLyrics = () => {
    const {id} = useParams()
    const { error, preloader, lyricsData } = useFetch(`http://localhost:8080/lyricsData/${id}`)
    const history = useHistory()
    const handleDelete = () => {
        fetch(`http://localhost:8080/lyricsData/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/')
        })
    }
    return (
       <main>
            {preloader && <p style={{color: 'white'}}>Please wait...</p>}
            {error && <h1>{error}</h1>}
            {lyricsData && 
                <div className="lyrics-area">
                    <h1>{lyricsData.title}</h1>
                    <h4>{lyricsData.label}</h4>
                    <p>{lyricsData.lyrics}</p>
                    <button onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                </div>
            }
       </main>
    );
}
 
export default ShowLyrics;