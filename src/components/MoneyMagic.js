import React from "react";
import { useState, useEffect } from "react";
import "./MoneyMagic.css";

const BASE_URL = "https://api.api-ninjas.com";
const MoneyMagic = () => {
  const [amount, setAmount] = useState(0);
  const [have, setHave] = useState("EUR");
  const [want, setWant] = useState("");
  const [result, setResult] = useState({});
  // useEffect(() => {
  //   fetch(`${BASE_URL}/v1/convertcurrency?want=EUR&have=USD&amount=5000`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Api-Key": process.env.YOUR_API_KEY,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  function convert(want) {
    fetch(
      `${BASE_URL}/v1/convertcurrency?want=${want}&have=${have}&amount=${amount}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.YOUR_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setResult(data));
  }
  return (
    <div>
      <div class="form__group field">
        <input
          class="form__field"
          placeholder="Input Your Amount"
          name="Input Your Amount"
          id="name"
          required
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <label for="name" class="form__label">
          Amount
        </label>
      </div>

      <select onChange={(e) => setHave(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
        <option value="BAM">BAM</option>
        <option value="CNY">CNY</option>
      </select>

      <select onChange={(e) => convert(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
        <option value="BAM">BAM</option>
        <option value="CNY">CNY</option>
      </select>
      <p>Rezultat: {result.new_amount}</p>
    </div>
  );
};

export default MoneyMagic;
