import logo from "./logo.svg";
import "./App.css";
import FirstChild from "./firstChild";
import { Formik, Field, Form, FieldArray } from "formik";
import { useReducer, useState } from "react";
import ProjectDetails from "./Components/projectDetails";
import Function from './Components/JS-Class';

function App() {
  const [myarray, setmyarray] = useState([]);

  let arra1 = [
    { name: "", age: "" },
    { name: "", age: "" },
  ];

  const func = (a, b) => {
    setmyarray([...arra1]);
  };
  const checkAnagrams = (a, b) => {
    a = "Listen";
    b = "silent";
    let status;
    let Aana = a.toUpperCase().split("") || []; //  ['L','i','s','t','e','n'];
    let bAnna = b.toUpperCase().split("") || []; // ['s','i','l','e','n','t'];
    console.log(Aana, bAnna);

    if (a.length != b.length) {
      return false;
    }

    a.length == b.length &&
      Aana.forEach((element) => {
        bAnna.includes(element) ? status = true : status = false;
      });
    console.log(status);
  };
  checkAnagrams();

  //25, 50, 75;
  //50, 100;

  const calculateLCM = (value1, value2) => {
    let value1Multiples =[25,];
    let value2Multiples =[];
    

  };

  return (
    <div className="App">
      {/* <Formik>
        <FieldArray>
          <Field
            onChange={(e) => {
              console.log(e);
            }}
            name="text"
          />
        </FieldArray>
      </Formik>
      <FirstChild>
        <p>Welcome Prashanth</p>
          </FirstChild> */}
      {/* <ProjectDetails /> */}
      <Function />
    </div>
  );
}

export default App;
