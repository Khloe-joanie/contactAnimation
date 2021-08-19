/** @format */

import React, { Component } from "react";
import BannerC from "../components/BannerContact";
import ContactForm from "../components/ContactForm";
import ParticlesBg from "particles-bg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "cross",
      // emitter: "follow",
      random: 15,
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        },
      });
    }
    return (
      <>
        <BannerC
          text="Let's Connect"
          imgUrl="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
        />
        <ContactForm />
        <ParticlesBg
          color="#F9A826"
          num={100}
          type="cobweb"
          config={config}
          bg={true}
        />
      </>
    );
  }
}

export default Contact;
