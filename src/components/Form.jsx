import React, { useState } from "react";
import { BUYCOFFEE } from "../ContractIntegration";
import { ethers } from "ethers";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [cost, setCost] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleBuyClick = async () => {
    alert("button clicked");
    const _cost = ethers.utils.parseEther(cost).toString(); // Ensure cost is in wei
    console.log("Cost:", _cost);
    const tokenId = await BUYCOFFEE({ name, message, _cost }); // Pass parameters as an object
    console.log("name", name);
    console.log("msg", message);
    console.log("tokenID:", tokenId);
  };

  return (
    <div className="flex justify-center font-mono mt-10 pt-5">
      <div className=" flex-col justify-center items-center">
        <label className="font-semibold text-lg">Name:</label>
        <input
          className="border-2 border-black px-2 mb-7 ml-10"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={handleNameChange}
        />
        <br />
        <label className="font-semibold text-lg">Message:</label>
        <input
          className="border-2 border-black px-2 ml-2 mb-10"
          type="text"
          value={message}
          placeholder="Enter Message"
          onChange={handleMessageChange}
        />
        <br />
        <label className="font-semibold text-lg">Amount:</label>
        <input
          className="border-2 border-black px-2  ml-5 mb-10"
          type="text"
          value={cost}
          placeholder="Enter amount"
          onChange={handleCostChange}
        />
        <br />
        <div className="flex justify-center font-mono">
          <button
            className="px-6 py-1 bg-white hover:bg-black hover:text-white border-black hover:border-white border-2 shadow-2xl rounded-xl font-bold "
            onClick={handleBuyClick}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
