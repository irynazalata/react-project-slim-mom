import React from "react"
import DiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar.jsx"
import DiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm.js"
import DiaryAddProductList from "../../components/DiaryProductsList/DiaryProductList.js"

import styles from  "./Diary.module.css"
import "../../index.css"

const DiaryPage = () => {
  return (
    <div className='container containerWithSideBar' >
      <div className={styles.containerInformation}>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryAddProductList />
        <button className={styles.button}></button>
      </div>
      <div className={styles.SideBarBox}>
      </div>
    </div>
  )
}
export default DiaryPage
