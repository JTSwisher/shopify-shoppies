import './Nominations.css'
import MovieNomination from './MovieNomination';
import { FaTimes } from 'react-icons/fa';

function Nominations(props) {
    const { setIsDisplayedCallback, removeNomination, nominations, isDisplayed } = props;
 
    const handleNominationsDisplay = () => {
        setIsDisplayedCallback()
    };

    const removeUserNominationCallback = (id) => {
        removeNomination(id)
    };

    let noNominationsMessage = Object.keys(nominations).length === 0 ? <p id="no-nominations-message">You have no nominations.</p> : null;
    let maxNominationsMessage = Object.keys(nominations).length === 5 ? <p id="max-nominations-message">You have reached 5 nominations!</p> : null;
 
    return (
        <div style={{display: (isDisplayed ? '' : 'none')}}>
            <div className="overlay" style={{display: (isDisplayed ? '' : 'none')}} ></div>
            <div className="nomination-container">
                <FaTimes id="nominations-exit-icon" onClick={() => handleNominationsDisplay()} />
                { noNominationsMessage }
                { maxNominationsMessage }
                {Object.keys(nominations).map(key => <MovieNomination key={ key } data={ nominations[key] } removeNomination={ removeUserNominationCallback } />)}
            </div>
        </div>
    )
}

export default Nominations;


