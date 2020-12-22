import React from "react"
import DiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar.js"
import DiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm.js"
import DiaryAddProductList from "../../components/DiaryProductsList/DiaryProductList.js"

import "./Diary.module.css"

const DiaryPage = () => {
  return (
    <div className="container">
      <div className="containerInformation">
        <div className="DiaryDateCalendarBox">
          <DiaryDateCalendar />
        </div>
        <div className="DiaryAddProductFormBox">
          <DiaryAddProductForm />
        </div>
        <div className="DiaryAddProductListBox">
          <DiaryAddProductList />
        </div>
        <button className='button'></button>
      </div>
      <div className="SideBarBox">
      </div>
    </div>
  )
}
export default DiaryPage
