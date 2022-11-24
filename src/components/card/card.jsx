import React from "react";
import styles from "./card.module.scss";

const Card = ({ products }) => {
  return (
    <>
      {products.map((p) => (
        <div key={p.id} className={styles.card}>
          <div className={styles.favourite}>
            <img src="/img/heart-passive.svg" alt="unliked" />
          </div>
          <img src={p.imageUrl} width={133} height={112} />
          <h5>{p.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{`${p.price} руб.`}</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
