import { useForm, ValidationError } from "@formspree/react";
import styles from "./EmailForm.module.css";
import Button from "../../UI/Button/Button";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("mbjwgrvg");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles["input--section"]}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" maxLength={40} />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className={styles["input--section"]}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" maxLength={70} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles["input--section"]}>
        <label htmlFor="message">Message:</label>
        <textarea
          rows={4}
          className={styles.textarea}
          id="message"
          name="message"
          maxLength={500}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button className={styles.button} disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}
