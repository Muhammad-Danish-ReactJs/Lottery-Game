import "./ticket.css"
import TicketNum from "./ticketNum";
export default function Ticket ({ticket}){
    return (
        <div className="Ticket">
            <p>Ticket</p>
           {ticket.map((Number,ind)=>(
            <TicketNum num={Number} key={ind}/>

           ))}
        </div>
    )

}