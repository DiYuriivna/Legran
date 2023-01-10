import { useNavigate } from "react-router-dom";

function ConfirmationPage({ orderId }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="confirm__wrap">
      <div className="grid">
        <button onClick={goBack} className="close-page-btn">
          X
        </button>
        <div className="confirm__text">
          Thank you for your order #{orderId}! <br /> Enjoy! :)
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
