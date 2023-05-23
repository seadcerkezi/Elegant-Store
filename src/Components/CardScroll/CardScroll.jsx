// import React from "react";
// import { NavLink } from "react-router-dom";
// import { products } from "../../data";
// import Card from "../Cards/Card";
// import "./cardScroll.css";

// const CardScroll = ({ title }) => {
//   return (
//     <div className="cardScroll-container">
//       <h3 className="title">{title}</h3>
//       <div className="cards">
//         {products.map(
//           (product) =>
//             product.id < 5 && (
//               <NavLink to={`/singleProduct/${product.id}`}>
//                 <Card product={product} />
//               </NavLink>
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardScroll;
import React from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../data";
import Card from "../Cards/Card";
import "./cardScroll.css";

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const CardScroll = ({ title }) => {
  const shuffledProducts = shuffle(products);

  return (
    <div className="cardScroll-container">
      <h3 className="title">{title}</h3>
      <div className="cards">
        {shuffledProducts.slice(0, 5).map((product) => (
          <NavLink to={`/singleProduct/${product.id}`}>
            <Card product={product} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CardScroll;
