import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

const Captcha: React.FC<{
  checkCaptcha: (value: boolean) => void;
  submitted: boolean;
}> = (props) => {
  const [captchaError, setCaptchaError] = React.useState(false);
  const captchaRef = useRef<ReCAPTCHA>(null);

  function sendData() {
    if (captchaRef.current?.getValue()) {
      props.checkCaptcha(true);
      setCaptchaError(false);
    } else {
      props.checkCaptcha(false);
      setCaptchaError(true);
    }
  }

  React.useEffect(() => {
    if (!props.submitted) {
      setCaptchaError(false);
      return;
    }
    if (!captchaRef.current?.getValue()) {
      setCaptchaError(true);
    }
  }, [props.submitted]);

  return (
    <>
      <ReCAPTCHA
        sitekey="6LflWIshAAAAAGP95zUMhiaXIHDWn7bEtt4qVNaa"
        ref={captchaRef}
        onChange={sendData}
      />
      {captchaError && <p>Captcha must be completed.</p>}
    </>
  );
};
export default Captcha;
