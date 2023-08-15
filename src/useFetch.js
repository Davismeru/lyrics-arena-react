// rendering data custom hook
import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [lyricsData, setLyricsData] = useState(null)
    const [preloader, setPreloader] = useState(true) //loading message
    const [error, setError] = useState(null)

    useEffect(()=> {
        // setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Ooops!!!');
                    }
                    return res.json()
                })
    
                .then (data => {
                    setPreloader(false)
                    setLyricsData(data)
                    setError()
                })
    
                .catch(err => {
                    console.log(err.message);
                    setError(err.message)
                    setPreloader(false)
                })
        // }, 1000);
    }, [url])

    return {error, preloader, lyricsData}
    
}

export default useFetch