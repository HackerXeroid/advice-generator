"use strict";

const $ = (query) => document.querySelector(query);

// Reusable HTML elements 😎

const adviceText = $(".advice__text");
const adviceNumber = $(".advice__id");
const generate = $(".advice__generate");

const fetchURL = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const myJson = await response.json();

  // Received data 😏
  const advice = myJson.slip?.advice;
  const id = myJson.slip?.id;

  // Changing the data
  adviceNumber.textContent = id;
  adviceText.textContent = `"${advice}"`;
};

fetchURL();

generate.addEventListener("click", fetchURL);
