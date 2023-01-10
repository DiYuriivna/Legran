import React, { useEffect } from "react";
import TimeList from "./TimeList";

function DropDownTime({ isDelivery, setFormData, formData }) {
  /*-----------------------------TIME------------------------------*/

  const [isDropdownList, setIsdropdownList] = React.useState(false);
  const [time, setTime] = React.useState("12:00");

  const array = [
    "9 : 00",
    "9 : 30",
    "10 : 00",
    "10 : 30",
    "11 : 00",
    "11 : 30",
    "12 : 00",
    "12 : 30",
    "13 : 00",
    "13 : 30",
    "14 : 00",
    "15 : 00",
    "15 : 30",
    "16 : 00",
    "16 : 30",
    "17 : 00",
    "17 : 30",
    "18 : 00",
    "18 : 30",
    "19 : 00",
    "19 : 30",
    "20 : 00",
    "20 : 30",
    "21 : 00",
    "21 : 30",
    "22 : 00",
  ];
  const dropDown = () => {
    setIsdropdownList(!isDropdownList);
    setIsdropdownListData(false);
  };
  const changeTime = (e) => {
    setTime(e.target.id);

    setIsdropdownList(!isDropdownList);
  };

  /*-----------------------------DATE------------------------------*/
  const [isDropdownListData, setIsdropdownListData] = React.useState(false);
  const [date, setDate] = React.useState("Today");

  const arrayData = [
    "Today",
    "10 Sept",
    "11 Sept",
    "12 Sept",
    "13 Sept",
    "14 Sept",
    "15 Sept",
    "16 Sept",
    "17 Sept",
    "18 Sept",
    "19 Sept",
    "20 Sept",
  ];

  const changeData = (e) => {
    setDate(e.target.id);
    setIsdropdownListData(!isDropdownListData);
  };

  const dropDownData = () => {
    setIsdropdownListData(!isDropdownListData);
    setIsdropdownList(false);
  };

  /*------------------------- GET DATA-TIME VALUE ---------------------------------------*/

  useEffect(() => {
    setFormData({ ...formData, ...{ date } });
  }, [date]); /*-----get changed data -----*/

  useEffect(() => {
    console.log(time);
    setFormData({ ...formData, ...{ time } });
  }, [time]); /*-----get changed time -----*/

  /*************************************************************************************************** */

  return (
    <>
      <h2>{isDelivery ? "Delivery time" : "Pick up time"}</h2>
      <div className="cart__date-time-wrap">
        {/* ---------------------------------DATE----------------------------- */}
        <div className="relative flex align-items-center ">
          <input
            type="text"
            className="cart__date-time-input text-align-right "
            onClick={dropDownData}
            value={date}
            placeholder="Today"
            name="Date"
            onChange={(e) => console.log(e.target.value)}
          />
          <div className="absolute-right-0">
            {isDropdownListData && (
              <TimeList
                array={arrayData}
                changeTime={changeData}
                dropDown={dropDownData}
              />
            )}
          </div>
        </div>
        <span className="cart__date-time-divider">\</span>

        {/* -------------------------------TIME--------------------------------- */}

        <div className="relative flex align-items-center">
          <input
            type="text"
            className="cart__date-time-input text-align-left"
            onClick={dropDown}
            value={time}
            placeholder="12:00"
          />
          <div className="absolute-left-0">
            {isDropdownList && (
              <TimeList
                array={array}
                changeTime={changeTime}
                dropDown={dropDown}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDownTime;

// import React from "react";
// import TimeList from "./TimeList";

// function DropDownTime({ isDelivery, register }) {
//   const [isDropdownList, setIsdropdownList] = React.useState(false);
//   const [time, setTime] = React.useState("12:00");

//   const array = [
//     "9 : 00",
//     "9 : 30",
//     "10 : 00",
//     "10 : 30",
//     "11 : 00",
//     "11 : 30",
//     "12 : 00",
//     "12 : 30",
//     "13 : 00",
//     "13 : 30",
//     "14 : 00",
//     "15 : 00",
//     "15 : 30",
//     "16 : 00",
//     "16 : 30",
//     "17 : 00",
//     "17 : 30",
//     "18 : 00",
//     "18 : 30",
//     "19 : 00",
//     "19 : 30",
//     "20 : 00",
//     "20 : 30",
//     "21 : 00",
//     "21 : 30",
//     "22 : 00",
//   ];
//   const dropDown = () => {
//     setIsdropdownList(!isDropdownList);
//     setIsdropdownListData(false);
//   };
//   const changeTime = (e) => {
//     setTime(e.target.id);

//     setIsdropdownList(!isDropdownList);
//   };

//   /*-----------------------------DATE------------------------------*/
//   const [isDropdownListData, setIsdropdownListData] = React.useState(false);
//   const [date, setDate] = React.useState("");

//   const arrayData = [
//     "Today",
//     "10 Sept",
//     "11 Sept",
//     "12 Sept",
//     "13 Sept",
//     "14 Sept",
//     "15 Sept",
//     "16 Sept",
//     "17 Sept",
//     "18 Sept",
//     "19 Sept",
//     "20 Sept",
//   ];

//   const changeData = (e) => {
//     setDate(e.target.id);
//     setIsdropdownListData(!isDropdownListData);
//   };

//   const dropDownData = () => {
//     setIsdropdownListData(!isDropdownListData);
//     setIsdropdownList(false);
//   };

//   return (
//     <div className="cart__date-time-wrap">
//       {/* -----------------------DATA---------------------------- */}
//       <div className="relative flex align-items-center  ">
//         <select
//           className="cart__date-time-input text-align-right cart__drop-down-wrap  "
//           placeholder="Today"
//           defaultValue="Today"
//           {...register("Date")}
//         >
//           {arrayData.map((i) => (
//             <option value={i}>{i}</option>
//           ))}
//         </select>
//       </div>
//       {/* ----------------------- divider ---------------------------- */}
//       <span className="cart__date-time-divider">\</span>

//       {/* -----------------------TIME---------------------------- */}
//       <div className="relative flex align-items-center">
//         <select
//           type="text"
//           className="cart__date-time-input text-align-left"
//           placeholder="12:00"
//           defaultValue="12:00"
//           {...register("Time")}
//         >
//           {array.map((i) => (
//             <option value={i}>{i}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default DropDownTime;
