import { useState } from "react";
import toast from "react-hot-toast";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleEqualChange = () => {
    try {
      setValue(String(eval(value)));
    } catch (error) {
      toast.error("Invalid value", { duration: 1500 });
    }
  };

  const handleClearAll = () => {
    setValue("");
  };

  const handleBackspaceLast = () => {
    const tmp = value.split("");
    let operator = null;

    if (tmp.includes("+")) {
      operator = tmp.indexOf("+");
    } else if (tmp.includes("-")) {
      operator = tmp.indexOf("-");
    } else if (tmp.includes("*")) {
      operator = tmp.indexOf("*");
    } else if (tmp.includes("/")) {
      operator = tmp.indexOf("/");
    }

    if (operator === null) {
      setValue("");
    } else {
      tmp.splice(operator + 1, tmp.length - 1);
      setValue(tmp.join(""));
    }
  };

  const handleBackspace = () => {
    if (value.length === 0) return;
    const tmp = value.split("");
    tmp.pop();
    console.log(tmp);
    setValue(tmp.join(""));
  };

  const handleValueChange = (e) => {
    let tmp = null;
    tmp = [...value, e.target.innerText];
    setValue(tmp.join(""));
  };

  return (
    <div className="px-10 max-w-screen-sm mx-auto">
      <div className="bg-gray-700 text-white w-full flex justify-start items-center h-20 p-5 font-normal text-3xl ">
        <p>{value}</p>
      </div>
      <div className="bg-orange-600 text-white w-full h-80">
        <ul className="grid grid-cols-4 justify-items-center items-center h-full">
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded "></li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={handleBackspaceLast} type="button">
              CE
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={handleClearAll} type="button">
              C
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={handleBackspace} type="button">
              Back
            </button>
          </li>

          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button type="button">1/x</button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button type="button">
              x<sup>2</sup>
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button type="button">&#8730;x</button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              /
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              7
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              8
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              9
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              *
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              4
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              5
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              6
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              -
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              1
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              2
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              3
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              +
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button type="button">+/-</button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              0
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button onClick={(e) => handleValueChange(e)} type="button">
              .
            </button>
          </li>
          <li className="flex bg-orange-700 justify-center items-center w-5/6 h-5/6 rounded hover:bg-orange-900 transition-all duration-300">
            <button
              disabled={value === 0}
              onClick={handleEqualChange}
              type="button"
            >
              =
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
