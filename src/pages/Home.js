import React, {useState} from 'react';
import SighIn from '../components/SighIn';
import SighUp from '../components/SighUp';

const Home = () => {
    const [state, setState] = useState(true);

    const buttonHandler = () => {
        setState(state => !state);
    }
    const textButton = state ? "SighUp" : "SighIn";

    return (
        <div>
            <header><button onClick={buttonHandler}>{textButton}</button></header>
            {state ? <SighIn/> : <SighUp/>}
        </div>
    )
}

export default Home;