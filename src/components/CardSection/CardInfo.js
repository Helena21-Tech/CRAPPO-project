import React, { useState } from "react";
import classes from "./CardInfo.module.css"
import bitcon from "../../images/bitcon.png";
import ethereum from "../../images/ethereum.png";
import litecoin from "../../images/litecoin.png";
import { FaCaretRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Card from "./Card";
import Button from "../Button/Button";

const styles = {
  color: "#3671e9",
  fontSize: "5rem",
  padding: "1rem"
};
const styleActive = {
  color: "#ffffff",
  fontSize: "2rem",
  position: "absolute",
  right: "1rem",
  top: "1.5rem"
};
const cardContent = [
  {
    id: 1,
    logo: `${bitcon}`,
    title: "Bitcoin",
    sub: "BTC",
    content:
      "Digital currency in which a record of transactions is maintained.",
    btn: <FaCaretRight style={styles} />,
  },
  {
    id: 2,
    logo: `${ethereum}`,
    title: "Ethereum",
    sub: "ETH",
    content:
      "Blockchain technology to create and run decentralized digital application.",
    btn: <FaCaretRight style={styles} />,
  },
  {
    id: 3,
    logo: `${litecoin}`,
    title: "Litecoin",
    sub: "LTC",
    content:
      "Cryptocurrency that enables instant payment to anyone in the world.",
    btn: <FaCaretRight style={styles} />,
  },
];
const CardInfo = ()=>{
 const[selectedCard, setSelectedCard] = useState(0);
return (
  <section className={classes.container}>
    <h2 className={classes.heading}>Trade securely and market the high growth cryptocurrencies</h2>
    <div className={classes.layout}>
        {cardContent.map((card)=>{
         return (
           <Card
             key={card.id}
             activeCard={card.id === selectedCard}
             onClick={(cardId) => {
               setSelectedCard(card.id);
             }}
           >
             <img src={card.logo} alt="card logo" />
             <h2>
               {card.title} <span className={classes.sub}>{card.sub}</span>
             </h2>
             <p> {card.content} </p>
             {card.id === selectedCard && <Button action={<p> Start mining</p>} ><FaAngleRight style={styleActive} /></Button>}
             {card.id !== selectedCard && <button className={classes.btnInactive}> {card.btn} </button>}
           </Card>
         ); 
        })}
    </div>
  </section>
)
}

export default CardInfo;