import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Rating() {
    const navigate = useNavigate();
    const [SelectedStarCount, SetSelectedStarCount] = useState(0);
    const [HoveredStarCount, SetHoveredStarCount] = useState(0);
    const [review, setReview] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [emoji, setEmoji] = useState('😐');
    const [thanksMessage, setThanksMessage] = useState('Thanks for your valuable time');
    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = () => {
        // Set emoji based on the star count
        switch (SelectedStarCount) {
            case 1:
                setEmoji('😢');
                setThanksMessage('Thanks, we will improve our service')
                break;
            case 2:
                setEmoji('😞');
                setThanksMessage('Thanks, we will improve our service')

                break;
            case 3:
                setEmoji('😐');
                setThanksMessage('Thanks, happy to hear')

                break;
            case 4:
                setEmoji('😊');
                setThanksMessage('Thanks, we are delighted')

                break;
            case 5:
                setEmoji('😄');
                setThanksMessage('Thanks, we are delighted')
                break;
            default:
                setEmoji('⚠️');
                setThanksMessage('please provide star rating..')
        }
        // Show the popup
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        // Reset the form and close the popup
        if(SelectedStarCount==0){
            setShowPopup(false);
            return
        }
        SetSelectedStarCount(0);
        setReview('');
        setShowPopup(false);
        navigate('/');
    };
 const starInfo=[
    '1-Not the best today',
    '2-Could be better',
    '3-it was okay!',
    '4-Pretty great!',
    '5-Spicy perfection!'
 ]
    return (
        <div className='App'>
            <div className='container'>
                <div className='text'><span>Drop Your Star, Taste The Change!</span></div>
                <div className='stars'>
                    {[...Array(5)].map((_, index) => {
                        return (
                            <span
                                key={index}
                                className={`${index + 1 <= SelectedStarCount ? 'selectedStar' : ''} ${index + 1 <= HoveredStarCount ? 'selectedStar' : ''}`}
                                onMouseOver={() => SetHoveredStarCount(index + 1)}
                                onMouseOut={() => SetHoveredStarCount(0)}
                                onClick={() => SetSelectedStarCount(index + 1)}
                            >
                                &#9733;
                            </span>
                        );
                    })}
                </div>
                <div className='starInfoDiv'>
                {[...Array(5)].map((_, index) => {
                        return (
                            <span
                                key={index}
                                onMouseOver={() => SetHoveredStarCount(index + 1)}
                                onMouseOut={() => SetHoveredStarCount(0)}
                                onClick={() => SetSelectedStarCount(index + 1)}
                                className='starinfo'
                            >
                                {starInfo[index]}
                            </span>
                        );
                    })}
                </div>
                <div>
                    <textarea
                        value={review}
                        onChange={handleReviewChange}
                        placeholder="Write your review here..."
                        className='textArea'
                    />
                    <div className='btnDiv'>
                        <button onClick={handleSubmit} className='btn'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay and Emoji Popup */}
            {showPopup && (
                <>
                    <div className="overlay"></div> {/* Overlay to block background */}
                    <div className="popup">
                        <div className="emoji">{emoji}</div>
                        <div className="reviewText">Your Review: {thanksMessage}</div>
                        <button className="closeBtn" onClick={handleClosePopup}>X</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Rating;
