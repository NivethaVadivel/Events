// import { Container } from "@mui/system";
import React from "react";
import styles from "../css/explore.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from "./footer";
export const Explore=()=> {
  AOS.init();
  return (
    <div>

    <div className="container">
      {/* <Container> */}
        <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6">
              <h1>
                Organising<br></br> <span>Concerts</span>
              </h1>
              <p>
              Organizing a local concert can be a great way to showcase local talent, bring the community together, and support the arts
              </p>
              <p>
                Our events company has been organising a lot of concerts efficiently based on the budget, location, the accomodation size etc.!
              </p>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center">
                <img src={require('../images/local_concert.jpg')} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container className={styles.container2}> */}
        <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center" >
                <img src={require('../images/competitions.jpg')} alt="hj" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>
                Conducting<br></br><span>Competitions</span>
              </h1>
              <p>
              Conducting competitions can be a great way to promote the art , encourage talent, and build a sense of community among performers and spectators.
              </p>
              <p>
              By conducting these competions, we believe that we encourage talent, build confidence, create a sense of community, promote healthy competition, showcase creativity and provide networking opportunities!
              </p>
            </div>
          </div>
        </div>
      {/* </Container> */}
      
      {/* <Container> */}
      <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6">
              <h1>
                Destination <span>Weddings</span>
              </h1>
              <p>
              A destination wedding is a wedding that takes place away from the couple's hometown or city and often involves traveling to a different country or location. Destination weddings have become increasingly popular over the years because they offer couples the opportunity to have a unique and unforgettable wedding experience in a beautiful and exotic location.
              </p>
              <p>
              Cost, Planning, Making Ready the guest list and Legal requirements are to be taken care of when having destination weddings. 
              </p>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center">
                <img src={require('../images/dest_wed.jpg')} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container className={styles.container2}> */}
      <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center" >
                <img src={require('../images/gatherings1.jpg')} alt="hj" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>
                Having <span>Gatherings</span>
              </h1>
              <p>
              Gatherings can be a great way to bring people together and celebrate special occasions or just enjoy each other's company
             </p>
              <p>
               Having gatherings can be a great way for the following:
               Strengthening relationships, Strengthening relationships, Reducing stress and Building community.
              </p>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container> */}
      <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6">
              <h1>
                Social <span>Dinners</span>
              </h1>
              <p>
              Social dinners can be a great way to connect with friends and enjoy good food and company.
              By planning ahead and considering the needs of your guests, you can create a memorable and enjoyable experience for everyone involved.
              We promise to offer the best services by planning ahead, choosing a theme, considering dietary restrictions, Setting up the table, Providing family style food and then cleaning up.
              </p>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center">
                <img src={require('../images/gatherings2.jpg')} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container className={styles.container2}> */}
      <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-mirror="true" data-aos-anchor-placement="top-center" >
                <img src={require('../images/orchestra.jpg')} alt="hj" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>
                Orchestras
              </h1>
              <p>
              An orchestra is a large ensemble of musicians who play various instruments, typically including strings, woodwinds, brass, and percussion. Orchestras are often associated with classical music and are known for their rich and complex sound.
              </p>
              <p>
              Orchestras can provide a valuable source of cultural enrichment for audiences, helping to preserve and promote classical music.
              We believe that we do our earnest jobs in planning and organising these of orchestras of great cultural importance.
              </p>
            </div>
          </div>
        </div>
      {/* </Container> */}
      {/* <Container> */}
      
    </div>
      <Footer/>
    </div>
  );
}
