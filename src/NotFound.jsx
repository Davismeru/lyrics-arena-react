import {Link} from 'react-router-dom'
const Notfound = () => {
    return ( 
        <div>
            <h1>Not Found</h1>
            <p>Please return to homepage</p>
            <Link to ='/'>Homepage</Link>
        </div>
    );
}
 
export default Notfound;