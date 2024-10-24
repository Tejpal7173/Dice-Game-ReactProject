// import styled from "styled-components";

// const DiceContainer = styled.div`
// margin-top: 48px;
// display: flex;
// flex-direction: column;
// align-items: center;

// .dice{
//     cursor: pointer;
// }

// p{
// font-size: 48px ;
// }

// `;


// export default function RoleDice({
//     setCurrentDice, currentDice
// }) {



//     return (
//         <DiceContainer>
//             <div className="dice" onClick={roleDice}>
//                 <img src={`/image/dices/${currentDice}.png`} alt={currentDice} />
//             </div>
//             <p>Click on Dice to Role</p>
//         </DiceContainer>
//     );
// }

import styled from "styled-components";
const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/image/dices/${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};
export default RoleDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
