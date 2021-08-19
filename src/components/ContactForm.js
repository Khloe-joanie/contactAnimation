/** @format */

import React, { Component } from "react";
import $ from "jquery";
import swal from "sweetalert";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  contactSubmit = (e) => {
    e.preventDefault(); //this prevents the default page loading
    $(".new_loader").fadeIn("slow");

    let returnedValidationText; //In this case this needs to be declared before the function so it can work when you call it

    let name = document.getElementById("name").value; // these input ids needs to be declared first or else they won't work
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    function validateInputs(name, email, message) {
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (name.length < 2) {
        returnedValidationText =
          "Your name should be at least 2 characters long";
        return false;
      } else if (!re.test(email)) {
        returnedValidationText = "Please enter a valid email address";
        return false;
      } else if (message.length < 2) {
        returnedValidationText =
          "Your message should be at least 2 characters long";
        return false;
      } else {
        return true;
      }
    }

    if (validateInputs(name, email, message)) {
      setTimeout(() => {
        swal("Message Sent!", "", "success");
        $(".new_loader").fadeOut("slow");
      }, 2000);
      name = $("#name").val(""); //these empty out the input fields under the condition that the message is sent successfully
      email = $("#email").val("");
      message = $("#message").val("");
    } else {
      swal(returnedValidationText, "", "error");

      $(".new_loader").fadeOut("slow");
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <h1 className="staff mytitles"> Just Say "Hi!"</h1>
          <div className="col-md-10 offset-md-1">
            <form onSubmit={this.contactSubmit} action="#">
              <input
                type="text"
                id="name"
                name="firstname"
                placeholder="Your name.."
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address.."
              />
              <textarea
                id="message"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>
              <input type="submit" value="SUBMIT"></input>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactForm;
