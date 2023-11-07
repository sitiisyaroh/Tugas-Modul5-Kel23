import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Import both filled and outline star icons
import "./CardSmall.css";

export default function CardSmall({ title, genre, img, size, color, rate, onClick }) {
    // Create an array of stars, filling based on the rate
    const stars = Array.from({ length: 5 }, (_, index) => (
        index < rate ? (
            <AiFillStar key={index} color={color} size={size} />
        ) : (
            <AiOutlineStar key={index} color={color} size={size} />
        )
    ));

    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div>
                    {stars}
                </div>
            </div>
        </div>
    );
}
