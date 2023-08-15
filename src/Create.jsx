import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [label, setLabel] = useState('reggae')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const newLyrics = {title, lyrics, label}
        console.log(newLyrics);
        fetch('http://localhost:8080/lyricsData', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newLyrics)
        })

        .then(()=> setIsPending(false))
        history.push('./')
    }
    return (
        <div className="form">
            <h1>Add New Lyrics</h1>
            <form onSubmit={handleSubmit}>
                <label>Song Title</label>
                <input 
                    type="text" 
                    required
                    placeholder="Enter song title"
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Category</label>
                <select onChange={(e)=> setLabel(e.target.value)}>
                    <option value="Reggae">Reggae</option>
                    <option value="Pop">Pop</option>
                    <option value="rnb">rnb</option>
                    <option value="Gospel">Gospel</option>
                    <option value="Kenyan">Kenyan</option>
                    <option value="Rock">Rock</option>
                    <option value="Hip Hop">Hip Hop</option>
                </select>

                <label>Lyrics</label>
                <textarea 
                    required
                    placeholder="Enter song lyrics"
                    value={lyrics}
                    onChange={(e)=> setLyrics(e.target.value)}
                />
                {!isPending &&<button className="add-lyrics-btn">Add Lyrics</button>}
                {isPending && <button className="add-lyrics-btn" disabled>Uploading Lyrics...</button>}
            </form>
        </div>
    );
}
 
export default Create;