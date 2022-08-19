import { useForm, ValidationError } from "@formspree/react";
import styles from "./EmailForm.module.css";
import Button from "../../UI/Button/Button";
import React from "react";
import Captcha from "./Captcha";

export default function EmailForm() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [captchaPassed, setCaptchaPassed] = React.useState(false);
  const [state, handleSubmit] = useForm("mbjwgrvg");

  function submitHandler(e: any) {
    e.preventDefault();
    setSubmitted(true);
    if (!captchaPassed) {
      return;
    }
    handleSubmit(e);
  }

  function checkCaptcha(value: boolean) {
    setCaptchaPassed(value);
  }

  React.useEffect(() => {
    if (!state.succeeded) {
      return;
    }
    setShowConfirmation(true);
    const timer = setTimeout(() => {
      setShowConfirmation(false);
      window.location.reload();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [state.succeeded]);

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {showConfirmation ? (
        <div className={styles["form-success__container"]}>
          <h3>Your Email Was Sent!</h3>
          <p>Thank you for contacting me, I will be in touch shortly!</p>
        </div>
      ) : (
        <>
          <div className={styles["input--section"]}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" maxLength={40} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={styles["input--section"]}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" maxLength={70} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles["input--section"]}>
            <label htmlFor="message">Message:</label>
            <textarea
              rows={4}
              className={styles.textarea}
              id="message"
              name="message"
              maxLength={1000}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Captcha checkCaptcha={checkCaptcha} submitted={submitted} />
          </div>
          <Button className={styles.button} disabled={state.submitting}>
            Submit
          </Button>
        </>
      )}
    </form>
  );
}
