import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import FooterBotom from "../footer/FooterBotom";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import React from "react";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
import styles from "../../styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.twoCol}>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(50%)" }}
            whileInView={{ opacity: 1, transform: "translateX(0%)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
            <div className={styles.visit}>
              <div>
                <strong>روزهای هفته: </strong>
                <span>08:00am - 08:00pm</span>
              </div>
              <div>
                <strong>آخر هفته: </strong>
                <span>10:00am - 06:00pm</span>
              </div>
            </div>
            <div className={styles.socials}>
              <p>شبکه های اجتماعی</p>
              <ul>
                <li>
                  <Link to="/">
                    <FaFacebookF className={styles.icon} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaTwitter className={styles.icon} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram className={styles.icon} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaGooglePlusG className={styles.icon} />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(50%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={styles.contact}
          >
            <h1>تماس با ما</h1>
            <div>
              <MdLocationPin className={styles.icon} />
              <p>
                ارومیه, بلوار والفجر - آخر خیابان میثم - کوی یازده - بن بست اول
                , پلاک سه
              </p>
            </div>
            <div>
              <BsFillTelephoneFill className={styles.icon} />
              <p>+98-914-968-9984</p>
            </div>
            <div>
              <HiOutlineMail className={styles.icon} />
              <p>Yusef_khedri@yahoo.com</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-50%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.newsletter}
        >
          <section>
            <h1>خبرنامه</h1>
            <p>
              برای دریافت اخبار هفتگی، به روز رسانی ها، پیشنهادات ویژه و تخفیف
              های منحصر به فرد، در خبرنامه ما مشترک شوید.
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("آدرس ایمیل نامعتبر است")
                  .required("ایمیل ضروری است"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className={styles.footerForm}>
                <Field name="email" type="email" placeholder="ایمیل خود را وارد کنید"/>
                <br />
                <ErrorMessage className={styles.ErrorMessage} name="email" render={msg => <div className={styles.error}>{msg}</div>}/>
                <br />
                <button type="submit"><IoIosSend /></button>
              </Form>
            </Formik>
          </section>
        </motion.div>
      </div>
      <FooterBotom />
    </footer>
  );
};

export default Footer;
