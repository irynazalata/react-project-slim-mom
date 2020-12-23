import React from "react";
import { Component } from "react";
import { connect, useDispatch } from 'react-redux';
import moment from 'moment';
import img from "../../images/calendar.png";
import Calendar from "./Calendar";
import setDate from '../../redux/calendar/calendarAction';

import style from "./DiaryDateCalendar.module.css";

class DiaryDateCalendar extends Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.props.setDate(moment(Date.now()).format("YYYY-MM-DD"))
  }

  handleTap = (someDate, setSomeDate) => {
    setSomeDate(someDate);
    
    const result = someDate ? moment(someDate).format("YYYY-MM-DD") : 0;
    console.log(result);
    this.setState({ date: result });
    this.props.setDate(result)
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



const mapDispatchToProps = {setDate}

export default connect(null, mapDispatchToProps) (DiaryDateCalendar);
