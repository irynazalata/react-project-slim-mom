import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import img from "../../images/calendar.png"
import Calendar from './Calendar';
import calendarAction from '../../redux/calendar/calendarAction';

import style from './DiaryDateCalendar.module.css'

class DiaryDateCalendar extends Component {
  state = {
    date: ''
  }

  
  handleTap = (someDate, setSomeDate) => {
    setSomeDate(someDate)
   
    const result =`${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}`;
    console.log(result);
    this.setState({ date: result })
    this.props.toSetDate(result)
  }
  render() {
    return <div className={style.CalendarContainer}>
      <Calendar onTap ={this.handleTap} />
      <img className={style.img} src={img} alt="" />
    </div>
  }
}

const mapDispathToProps = {
  toSetDate: calendarAction
}

export default connect (null, mapDispathToProps) (DiaryDateCalendar)