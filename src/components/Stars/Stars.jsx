import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Stars.scss";
const Stars = ({ rating }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={
            index < rating
              ? "stars__icon stars__icon--filled"
              : "stars__icon stars__icon--empty"
          }
        />
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
