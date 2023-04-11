import React from 'react'
import styles from "../css/locate.module.css"
export const Locate = () => {
  return (
    <div>
       <h2 className={styles.location_header}> Our Location </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8261112930477!2d77.60484941379997!3d11.274189552893622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1681193751714!5m2!1sen!2sin"
             width="600" 
             height="450" 
             style={{ border: "0" }}
             allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
    </div>
  )
}
