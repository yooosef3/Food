import CountUp from "react-countup";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../../../styles/main/AboutUs/AboutStat.module.css";

const AboutStat = () => {
  return (
    <div className={styles.container}>
      <div className="content" />
      <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
        {({ isVisible }) => (
          <div className={styles.statics}>
            <div>
              {isVisible ? <CountUp  end={2000} /> : null}
              <p>انواع غذاها و نوشیدنی ها</p>
            </div>
            <div>
              {isVisible ? <CountUp  end={382} /> : null}
              <p>پیشنهادهای ویژه</p>
            </div>
            <div>
              {isVisible ? <CountUp  end={1267} /> : null}
              <p>مشتریان راضی</p>
            </div>
            <div>
              {isVisible ? <CountUp  end={474} /> : null}
              <p>شرکا در ایالات متحده آمریکا</p>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default AboutStat;
