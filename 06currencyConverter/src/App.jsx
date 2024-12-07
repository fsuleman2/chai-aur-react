import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [yesDate, setYesDate] = useState(0);

  const currencyInfo = useCurrencyInfo(from); //will return what is there inside "inr":{..}
  //we have to provide options in dropdowns to we want keys
  const options = Object.keys(currencyInfo);

  function formatYesterdayDate() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = yesterday
      .toLocaleDateString("en-GB", options)
      .replace(/\d+/, (day) => {
        switch (day) {
          case "1":
          case "21":
          case "31":
            return day + "st";
          case "2":
          case "22":
            return day + "nd";
          case "3":
          case "23":
            return day + "rd";
          default:
            return day + "th";
        }
      });
    setYesDate(formattedDate);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  //when user clicks on convert button in ui
  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const BackgroundImage =
    "https://img.freepik.com/free-vector/global-virtual-currency-sign-techno-concept-background-design_1017-52482.jpg?t=st=1733557544~exp=1733561144~hmac=a1d51e724b3fdc57102ee49fbb9d0e65ff12185ac95520009e47fe2494272ff2&w=996";
  useEffect(() => {
    formatYesterdayDate();
  }, []);
  return (
    <>
      <marquee behavior="scroll" direction="left">
        {"This currency rates are being reflected for the date : "}{yesDate}
      </marquee>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault(); //we're not submitting to backend that's why
                convertCurrency();
              }}
            >
              {/* <------------------------------- STARTS: 'FROM' INPUT BOX  -------------------------> */}

              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(curr) => setFrom(curr)}
                  selectCurrency={from}
                />
              </div>
              {/* <------------------------------- ENDS: 'FROM' INPUT BOX  -------------------------> */}
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              {/* <------------------------------- STARTS: 'TO' INPUT BOX  -------------------------> */}
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currentCurrency) => {
                    setTo(currentCurrency);
                    console.log("currentcurre", currentCurrency);
                  }}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              {/* <------------------------------- ENDSS: 'TO' INPUT BOX  ---------------------------> */}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convertCurrency}
              >
                Convert {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
