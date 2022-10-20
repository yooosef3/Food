import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import PagesHeader from "./PagesHeader";
import React from "react";
import styles from "../../styles/main/OurTeam.module.css";
import team1 from "../../assets/images/team-1-367x334.jpg";
import team2 from "../../assets/images/team-3-370x334.jpg";
import team3 from "../../assets/images/team-2-367x334.jpg";

const OurTeam = () => {
  return (
    <div className={styles.OurTeam}>
      <PagesHeader page={'صفحات'} headline={'تیم ما'} path={'ourteam'}/>
      <div className={styles.team}>
        <section>
          <div className={styles.teamImg}>
            <img alt="team" src={team1} />
            <div className={styles.imgArrow}></div>
          </div>
          <h3>RICHARD FERRAND</h3>
          <p>
            یکی از بهترین اعضای تیم ما که در بخش فرانت اند سایت خصوصا ری اکت
            فعالیت دارد
          </p>
          <div className={styles.icons}>
            <FaFacebookF />
            <BsTwitter />
            <BsInstagram />
            <IoLogoGoogleplus />
          </div>
        </section>
        <section>
          <div className={styles.teamImg}>
            <img alt="team" src={team2} />
            <div className={styles.imgArrow}></div>
          </div>
          <h3>PETER JOHNSON</h3>
          <p>
            یکی از بهترین اعضای تیم ما که در بخش بک اند سایت خصوصا node js
            فعالیت دارد
          </p>
          <div className={styles.icons}>
            <FaFacebookF />
            <BsTwitter />
            <BsInstagram />
            <IoLogoGoogleplus />
          </div>
        </section>
        <section>
          <div className={styles.teamImg}>
            <img alt="team" src={team3} />
            <div className={styles.imgArrow}></div>
          </div>
          <h3>CAROLINE LOPEZ</h3>
          <p>
            یکی از بهترین اعضای تیم ما که در بخش طراحی سایت خصوصا UI
            فعالیت دارد
          </p>
          <div className={styles.icons}>
            <FaFacebookF />
            <BsTwitter />
            <BsInstagram />
            <IoLogoGoogleplus />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurTeam;
