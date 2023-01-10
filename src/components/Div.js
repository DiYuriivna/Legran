import Card from "./Card";

export const Div = ({ items, divCapture }) => {
  return (
    <div className="div">
      <div className="grid">
        <h2 className="div__capture">{divCapture}</h2>
        <div
          className={`div__items  ${items.length === 5 ? `div__items-5 ` : ""}`}
        >
          {items.map((object) => (
            <Card
              ingredients={object.ingredients}
              description={object.description}
              size={object.size}
              quantity={object.quantity}
              key={object.caption}
              src={object.src}
              caption={object.caption}
              price={object.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
