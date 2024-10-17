import "./PaymentEvolution.scss";
import { paymentEvolutions, responsive } from "../../Data";
import "react-multi-carousel/lib/styles.css";
import Type from "./Type";
import SlickC from "./SlickC";
import { useState } from "react";

const PaymentEvolution = () => {
  // State for the currently selected item
  const [selectedItem, setSelectedItem] = useState(paymentEvolutions[0]);

  // Function to update the selected item
  const handleTypeClick = (item) => {
    setSelectedItem(item);
  };

  const types = paymentEvolutions.map((item) => (
    <Type
      key={item.id}
      id={item.id}
      img={item.img}
      hoverImg={item.hoverImg}
      years={item.years}
      type={item.type}
      isSelected={selectedItem.id === item.id}
      onClick={() => handleTypeClick(item)} // Pass the click handler
    />
  ));

  return (
    <div className="payment_evolution wrapper">
      <h2>Эволюция платежей</h2>
      <SlickC types={types} responsive={responsive} />
      <div className="payment_evolution_info">
        <div className="info-block">
          <h3>{selectedItem.type}</h3>
          <p>{selectedItem.description}</p>
          <h4>{selectedItem.id === 1 ? "Преимущества" : "Недостатки"}</h4>
          <div className="pluses">
            <ul>
              {selectedItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentEvolution;
