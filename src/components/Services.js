import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer,FaCoffee,FaSwimmer,FaWifi } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCoffee />,
        title: "Free Breakfast",
        info:
          "We Serve free braekfast to all our saying customrs. "
      },
      {
        icon: <FaSwimmer />,
        title: "Swimming Pool",
        info:
          "we provide swimming pool facility to our customers. "
      },
      {
        icon: <FaWifi />,
        title: "Free Wifi",
        info:
          "We provide free wifi to all our customers. "
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "We serve the strongest beer in the town. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Hotel BloomVale Services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
