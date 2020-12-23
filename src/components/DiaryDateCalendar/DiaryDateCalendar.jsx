import React from "react";
import { Component } from "react";
import img from "../../images/calendar.png";
import Calendar from "./Calendar";
import style from "./DiaryDateCalendar.module.css";

class DiaryDateCalendar extends Component {
  state = {
    date: "",
  };
  handleTap = (someDate, setSomeDate) => {
    setSomeDate(someDate);

    const result = someDate ? `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}` : 0;
    console.log(result);
    this.setState({ date: result });
  };
  render() {
    return (
      <div className={style.CalendarContainer}>
        <Calendar onTap={this.handleTap} />
        <img className={style.img} src={img} alt="" />
      </div>
    );
  }
}

export default DiaryDateCalendar;
