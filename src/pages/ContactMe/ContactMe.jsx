import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_frihkor",
        "template_h1ssj3i",
        form.current,
        "APzRIQqbnW08XjAd5"
      )
      .then(
        (result) => {
          if (result.text === "OK") toast.success("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-100 mx-auto my-5" id="contact">
      <h2 className="text-center">Contact Me</h2>
      <div className="d-flex flex-column flex-lg-row justify-content-lg-around w-100 py-5">
        <div className="w-sm-100 w-lg-50 text-center d-flex justify-content-center align-items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100077538678725"
            className="fs-1 ms-5"
            target="blank"
          >
            <i class="bi bi-facebook"></i>
          </a>

          <a href="mailto:ruhulamin.milon7@gmail.com" className="fs-1 ms-5">
            <i class="bi bi-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/m-r-amin/"
            className="fs-1 ms-5"
            target="blank"
          >
            {""}
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="w-sm-100 w-lg-75">
          {" "}
          <form ref={form} onSubmit={sendEmail} className="">
            <label for="user_name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="user_name"
              placeholder="Name"
            />
            <label for="user_email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="user_email"
            />
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              name="message"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
