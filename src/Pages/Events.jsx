import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar } from "react-icons/fa";
import styles from "../styles/events.module.css";

import event1Image from "../assets/images/event1.jpg";
import event2Image from "../assets/images/event2.jpg";

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for Event 1",
    image: event1Image,
    date: "1 Jan 2025",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2",
    image: event2Image,
    date: "2 Jan 2025",
  },
];

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Events</h1>
      <VerticalTimeline lineColor="grey">
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className={styles.timelineElement}
            contentStyle={{
              background: "transparent", /* Dark gradient */
              color: "#fff",
              boxShadow: "none", /* Remove shadow directly here */
            }}
            contentArrowStyle={{
              borderRight: "10px solid cyan",
            }}
            dateClassName={styles.date}
            iconStyle={{
              background: "linear-gradient(135deg, cyan, teal)", /* Neon gradient */
              color: "#000",
            }}
            icon={<FaStar />}
            data-aos="fade-up"
          >
            <div className={styles.card}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <img
                src={event.image}
                alt={`Image for ${event.title}`}
                className={styles.eventImage}
              />
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Events;
