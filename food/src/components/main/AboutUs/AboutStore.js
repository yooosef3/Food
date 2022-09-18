import React, {useState} from "react";

import AboutSlider from "./AboutSlider";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../../styles/main/AboutUs/AboutStore.module.css";

const AboutStore = () => {

  const [about, setAbout] = useState({
    aboutUs: true,
    mission: false,
    goals: false
  })
  
  return (
    <div className={styles.container}>
      <div className={styles.aboutInfo}>
        <section>
          <FaQuoteLeft className={styles.icon} />
          <h1>چند کلمه در مورد فروشگاه ما</h1>
        </section>
        <div className={styles.aboutList}>
          <ul>
            <li onClick={() => setAbout({aboutUs: true})} className={`${about.aboutUs ? styles.selectedTab : undefined} ${styles.tab} `}>درباره</li>
            <li onClick={() => setAbout({mission: true})} className={`${about.mission ? styles.selectedTab : undefined} ${styles.tab} `}>ماموریت ما</li>
            <li onClick={() => setAbout({goals: true})} className={`${about.goals ? styles.selectedTab : undefined} ${styles.tab} `}>اهداف ما</li>
          </ul>
          <div>
            <p  className={`${ !about.aboutUs ? styles.hide : undefined} ${styles.infoContent} `}>
              اسم را که می گویی، همه اوزان عشق پارسا، راکانا روستایی است. گوهر
              فوق العاده کجاست؟
              <br />
              <br />
               با صفحه داربست، همه پروازها انحراف کارشناسی
              کجاست؟ نادرست، آپولونیاتس متخصص آدلفیس. او را به میخکوب کرده اند،
              سزار. با زیبایی برای خوردن، همه پرورش دهندگان باس را گرفتند
            </p>
            
            <p   className={`${ !about.mission ? styles.hide : undefined} ${styles.infoContent} `}>
              افسوس. دکستر حیوانی است که در هر زمانی باید از آن دوری کنید. من
              هرگز رئیس را رد نمی کنم. به عنوان بخشی از داستان، تمام سنین کشتی
              مناسب تاریخ است. 
              <br />
              <br />
              لوبا، مرد، و کیفرخواست. حماسه های بازنشسته به
              حیوانات می رسند. هنگامی که خورشید را تشبیه می کنند، همه بیسوها
              رحمت می کنند که از آنها اجتناب شود، و دومی نیکسوس است.
            </p>
            
            <p   className={`${ !about.goals ? styles.hide : undefined} ${styles.infoContent} `}>
              از باطل، تاریخ خروس اول است. این یک ضرر کم است، سزار. یک فرانسوی
              از انگورهای فوق العاده، محل ذهن! دلیل اول چرا سرعت دادن به نخبگان؟
              <br />
              <br />
              افسوس. بنگر، باری مغرور! تخریب مرد دوم است. وقتی پیراهن را جمع
              می‌کنم، همه مختصات را برای به دست آوردن گالاتای زرد درست می‌کنم.
            </p>
          </div>
          <div className={styles.aboutBtn}>
            <button>مطالعه بیشتر</button>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <AboutSlider />
      </div>
    </div>
  );
};

export default AboutStore;
