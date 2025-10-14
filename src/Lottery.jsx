import { useState } from "react";
import "./Lottery.css";
import {GetTicket,sum} from "./helper"
import Ticket from "./ticket";

export default function Lottery({n,WinningSum}) {
  let [ticket, setTicket] = useState(GetTicket(n));
    let buyTicket = () => {
        setTicket(GetTicket(n));
    }
let isWinning = sum(ticket) === WinningSum


  return (
    <div className="Lottery">
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <br />
        <button onClick={buyTicket}>Regenerate Ticket</button>
        <h3>{isWinning && "Congratulation , You Won"}</h3>

    </div>
  );
}
