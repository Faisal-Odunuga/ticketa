/* eslint-disable react/prop-types */
const Card = ({ children, className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
