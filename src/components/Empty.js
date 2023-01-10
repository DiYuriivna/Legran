import { Link } from "react-router-dom";

import "../style/empty.css";

export const Empty = (props) => {
  return (
    <div className="empty__wrap">
      <div className="grid">
        <div className="empty">
          <p className="empty__text">{props.text} </p>
          <Linkto="pizza">
            <div className="empty__link">
              {props.linkIcon} <p> {props.linkText}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
