// import styled from "styled-components";
// import {Button} from "./button.js";

// const Container = styled.div`
//     max-width: 1180px;
//     display: flex;
//     margin: 0 auto;
//     height: 100vh;
//     align-items: center;

// .content h1{
//     font-size: 96px;
//     white-space: nowrap;
// }    
// `;


// export default function StartGame({toggle}) {
//     return (
//         <Container>
//             <div>
//                 <img src="/image/dices 1.png" alt="dice" />
//             </div>
//             <div className="content">
//                 <h1>DICE GAME</h1>
//                 <Button onClick={toggle}>Play Game</Button>
//             </div>
//         </Container>
//     );
// }

import styled from "styled-components";
import { Button } from "./button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/image/dices 1.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;