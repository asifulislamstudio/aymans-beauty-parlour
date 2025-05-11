
import { FaRegStar, FaStar } from "react-icons/fa";

const StarRatings = ({rating}) => {
    
    const totalStars = 5;
    return (
        <div className='text-orange-400 text-xl flex'>
            {
                [...Array(totalStars)].map((_, i) => (
                    <span key={i}>{i < rating ? <FaStar></FaStar> : <FaRegStar></FaRegStar> }</span>
                ))
            }
        </div>
    );
};

export default StarRatings;