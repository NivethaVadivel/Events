import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import styles from '../css/nearbyhotel.module.css'

export const Nearbyhotel = () => {
    const [list, setlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/add/gethotel")
        .then((response)=>{
          const data=response.data.data
          setlist(data)
          // console.log(response.data.data[0].hotel_name)
          console.log("data received");
        })
        .catch((err)=>console.log(err))
    }, [])
    console.log("4");
    console.log(list);
    const li = list.map((x,index) => {

      return  (<div key={index} className={styles.event}>
               <h3>{x.hotel_name}</h3><br></br>
              {/* <img src="" alt='img1'/> */}
              <p>Location:{x.location}</p>
              </div>)
      }
  );
  return (
    <div>

    <div className={styles.Types_of_Events}>
        {li}
    </div>
    </div>
    // <div>
    //   <h1>Hotels near Vasavi Mahal</h1>
    //   {
    //     list.map((list,index)=>(

    // <div className='gap'> 
    // <div className='Types_of_Events'>
    //     <div className='event'>
    //         <h3>{list.hotel_name}</h3>
    //         <img src="" alt='img1'/>
    //         <p>"A happy marriage is the union of two good forgivers." - Ruth Bell Graham</p>
    //     </div>
    // </div>
    // </div>
    //     ))
    //   }  
    // </div>
  )
}
