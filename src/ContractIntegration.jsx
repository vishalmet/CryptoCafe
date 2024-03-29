import React from "react";
import Abi from "../src/abi/cafe.json";
import { ethers } from "ethers";
import Web3 from "web3";

const CONT_ADD = "0x49b4d9C9E9Bb195599Fb4e8D5eABe22ba34dDBd5";
const isBrowser = () => typeof window !== "undefined";
const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

export const GETMEMO = async () => {
  try {
    // const provider = new ethers.providers.JsonRpcProvider(
    //     "https://sepolia.infura.io/v3/290819ba5ca344eea8990cb5ccaa8e6a"
    // );
    const provider = 
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();

    const signer = provider.getSigner();
    const Role = new ethers.Contract(CONT_ADD, Abi, signer);
    const answer = await Role.getmemo();
    return answer;
  } catch (error) {
    console.error("Error fetching memo:", error);
  }
};

export const BUYCOFFEE = async ({ name, message, _cost }) => {
  try {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();

    const signer = provider.getSigner();
    const Role = new ethers.Contract(CONT_ADD, Abi, signer);
    const tokenId = await Role.buyCoffee(name, message, { value: _cost });
    alert("Coffee bought successfully!");
    return tokenId;
  } catch (error) {
    console.error("Error buying memo:", error);
  }
};
