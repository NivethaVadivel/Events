import React,{useState,useEffect} from 'react';
import axios from "axios"
//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//jquery, popper.js libraries for bootstrap modal
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
 
//Here are the modules for fullcalendar and dayclick event
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

function Calendar() {

  const[event,setEvent]=useState("")
    const [start, setStart] = useState("")
    const[list,setList]=useState([])
    useEffect(() => {
    axios.get("http://localhost:8000/api/book/getbooking").then((response)=>{
    const data=response.data.data
    setList(data)
    console.log(response)
    
    })
    .catch((err)=>console.log(err))
    }, [])
    const li = list.map((x,index) => {
        return  (
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
              $("#myModal").modal("show"); 
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={[
                { title: x.eventType, date:x.startDate}
              ]}
          />)
          
        }
    )

  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>See Bookings</h3>
      </div>
      
      <div className="container">
          {/* <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
              $("#myModal").modal("show");
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', date: '2023-04-01' },
              { title: 'event 2', date: '2020-07-02' }
            ]}
          /> */}
          {li}
        </div>
    </div>
  );
}

export default Calendar;