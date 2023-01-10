import { useForm } from "react-hook-form";

export const Form = () => {
  const { handleSubmit } = useForm();
  const submitFunc = (data) => console.log(data);
  handleSubmit(submitFunc);
  return (
    <form className="cart__details" onSubmit={handleSubmit(submitFunc)}>
      {/* ----------------------------------------SWITCH BUTTON------------------------------------------------------- */}
      <div className="cart__details-wrap">
        <h2>Order type</h2>
        <div className="cart__switch">
          <div className="cart__delivery">Delivery</div>
          <div className="cart__take-away">Take away</div>
        </div>
        {/*-------------------------------- delivery adress ----------------------------------- */}

        <label htmlFor="adress">
          <h2>Delivery address</h2>
        </label>
        <textarea
          className="cart__adress"
          minLength={5}
          minRows={2}
          name="delivery adress"
          id="adress"
          placeholder="13 S College Avenue, Remington 43933 United States"
        />

        <textarea
          placeholder="Add your comment here ..."
          name="comment"
          className="cart__comment"
          rows="3"
        ></textarea>
      </div>
      <div className="cart__wrap-btn">
        <button type="submit" className="btn">
          Confirm
        </button>
      </div>
      <input type="submit" />
    </form>
  );
};
