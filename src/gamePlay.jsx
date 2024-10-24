// import NumberSelector from "./numberSelector";
// import TotalScore from "./totalScore";
// import styled from "styled-components";
// import RoleDice from "./roleDice";
// import{useState} from "react";
// import { Button, OutlineButton } from "./button";


// const MainContainer = styled.main`
// padding-top: 70px;
// .top-section{
//     display: flex;
//     align-items: end; // Center items horizontally
//     justify-content:space-around; // Align items to the top: ;
// }
// .btns{
// margin-top: 40px;
// gap: 10px;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;

// }
// `;



// export default function GamePlay() {
//     const[score, setScore]=useState(0);
//     const [currentDice, setCurrentDice] = useState(1);
//     const [selectedNumber, setSelectedNumber] = useState();
// const[error, setError]=useState("");

//     const generatedRandomNumber = (min, max) => {
//         return Math.floor(Math.random() * (max - min)) + min;
//     };
//     const roleDice = () => {
//         if(!selectedNumber){
// setError("You have not selected any number");return;

//         }
    
//         const randomNumber = generatedRandomNumber(1, 7);
//         setCurrentDice((prev) => randomNumber);
    
//     if (selectedNumber===randomNumber){
//         setScore((prev)=>prev+randomNumber);
//     }else{
//         setScore((prev)=>prev-2);
//     }
//     setSelectedNumber(undefined);
//     };
// const resetScore=()=>{
//     setScore(0);
// };


//     return (
//         <MainContainer>
//             <div className="top-section">
//                 <TotalScore score={TotalScore}/>
//                 <NumberSelector error={error} selectedNumber={selectedNumber}
//                 setSelectedNumber={setSelectedNumber } setError={setError} />
//             </div>
//             <RoleDice currentDice={currentDice} roleDice={roleDice}/>
//             <div className="btns">
//                 <OutlineButton onClick={resetScore}>Reset</OutlineButton>
//                 <button>Show Rule</button>
//             </div>
//         </MainContainer>
//     );
// }

import styled from "styled-components";
import NumberSelector from "./numberSelector";
import TotalScore from "./totalScore";
import RoleDice from "./roleDice";
import { useState } from "react";
import { Button, OutlineButton } from "./button";
import Rules from "./rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};
export default GamePlay;
const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
