import "./stars.scss";

const Stars = ({ rating }) => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {items.map((item) => {
        rating > item ? (
          <i className="fas fa-star">Rouge</i>
        ) : (
          <i className="far fa-star">Gris</i>
        );
      })}
    </div>
  );
};

export default Stars;
