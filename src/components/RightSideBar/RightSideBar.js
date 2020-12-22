import React, { Component } from "react";
import classes from "./RightSideBar.module.css";

let b = ["Все бульоны/отвары", "жирная рыба", "икра и мясо", "грибы", "крупы (пшено, перловая, пшеничная)"];
let c = 100;
let d = 300;
let f = 400;
let g = 500;
const data=new Date()
class ContactList extends Component {
  render() {
 
    return (

      <div className={classes.container}>
        <div className={classes.summary}>
        <h2 className={classes.title}>Сводка за {`${data.getDate()}.${data.getMonth()}.${data.getFullYear()}`}</h2>
        <div className={classes.statistics}>
          <ul className={classes.list}>
            <li className={classes.text}>Осталось</li>
            <li className={classes.text}>Употреблено</li>
            <li className={classes.text}>Дневная норма</li>
            <li className={classes.text}>n% от нормы</li>
          </ul>
          <ul className={classes.list}>
            <li className={classes.text}>{0 !==0 ?`${c} ккал` :` 000 ккал`}</li>
            <li className={classes.text}>{0 !==0 ?`${d} ккал` : `000 ккал`}</li>
            <li className={classes.text}>{0==0 ? `${f} ккал` : `000 ккал`}</li>
            <li className={classes.text}>{0==0 ? `${g} ккал` : `000 ккал`}</li>
          </ul>
        </div>
        </div>
        <div className={classes.meny}>
        <h2 className={classes.title}>Нерекомендуемые продукты</h2>
        {0 !== 0 ? (
          <p className={classes.defaultText}>Здесь будет отображаться Ваш рацион</p>
        ) : (
          <p className={classes.menutext}>{b.map((e) => (b.length !== b.indexOf(e) + 1 ? ` ${e},` : ` ${e}.`))}</p>
        )}
        </div>
      </div>
    );
  }
}

export default ContactList;
