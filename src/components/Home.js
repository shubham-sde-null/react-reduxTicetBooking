import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
function Home(props) {
  const [name, setName] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const [amount, setAmount] = useState();
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const [canceName, setCancelName] = useState("");
  const cancelHandler = (event) => {
    setCancelName(event.target.value);
  };
  const totalTicket = props.trainData.reservationHistory.length;
  //   console.log(props);
  useEffect(() => {
    console.log(props);
    //   console.log("all data in props", props.trainData);
  }, [props]);

  return (
    <div className="homeContainer">
      <div className="ticketInfo">
        <p>
          Total Number Of Tickets: <span>{totalTicket}</span>
        </p>

        <input
          type="text"
          placeholder="enter name"
          onChange={nameHandler}
          value={name}
        />
        <input
          type="number"
          placeholder="enter amount"
          onChange={amountHandler}
          value={amount}
        />
        <button
          onClick={() => {
            if (amount === 100) {
              props.addPessenger(name, amount);
              window.alert("ticket booked successfully");
              setName("");
              setAmount("");
            } else {
              window.alert("you have entered incorrect fair");
            }
          }}
        >
          Submit
        </button>
      </div>

      <div className="cancelInfo">
        <input
          type="text"
          placeholder="enter your name"
          onChange={cancelHandler}
          value={canceName}
        />

        <button
          onClick={() => {
            props.cancelTicket(canceName);
            window.alert("ticket cancelled successfully");
            setCancelName("");
          }}
        >
          Cancel Ticket
        </button>
      </div>
      <div>
        Total Amount:
        <span
          style={{
            backgroundColor: "#37F713",
            padding: "5px",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        >
          {props.trainData.accounting}
        </span>
      </div>
    </div>
  );
}

export default Home;
