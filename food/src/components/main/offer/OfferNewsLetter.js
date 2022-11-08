import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";
import styles from "../../../styles/main/offer/OfferNewsLetter.module.css";

const OfferNewsLetter = () => {
  return (
    <div className={styles.OfferNewsLetter}>
      <div className={styles.newsletterInfo}>
        <div>
          <h1>با ما</h1>
          <h2>در تماس باشید</h2>
        </div>
        <p>در خبرنامه ما عضو شوید</p>
      </div>
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
        <Form className={styles.newsletterSub}>
          <div className={styles.inputError}>
            <Field
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
            />
            <ErrorMessage
              className={styles.ErrorMessage}
              name="email"
              render={(msg) => <div className={styles.error}>{msg}</div>}
            />
          </div>
          <button type="submit">عضویت</button>
        </Form>
      </Formik>
    </div>
  );
};

export default OfferNewsLetter;
