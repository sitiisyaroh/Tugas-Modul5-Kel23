import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Import both filled and outline star icons
import "./CardBig.css";

export default function CardBig(props) {
    const { img, title, genre, rate, color, size } = props;

    // Create an array of stars, filling based on the rate
    const stars = Array.from({ length: 5 }, (_, index) => (
        index < rate ? (
            <AiFillStar key={index} color={color} size={size} />
        ) : (
            <AiOutlineStar key={index} color={color} size={size} />
        )
    ));

    return (
        <div className="containerBig">
            <img src={img} alt="" className="posterBig" />
            <div className="descriptionBig">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div className="stars">
                    {stars}
                </div>
            </div>
        </div>
    );
}
