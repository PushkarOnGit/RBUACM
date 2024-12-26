import React from "react";
import styles from "../styles/events.module.css"; // Importing CSS module

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for Event 1. A detailed overview of the event.",
    image: "https://via.placeholder.com/300x150",
    date: "January 1, 2024",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2. A detailed overview of the event.",
    image: "https://via.placeholder.com/300x150",
    date: "February 15, 2024",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Description for Event 3. A detailed overview of the event.",
    image: "https://via.placeholder.com/300x150",
    date: "March 20, 2024",
  },
];

function Events() {
  return (
    <div className={styles.timelineContainer}>
      <h1 className={styles.title}>Events Timeline</h1>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={event.id} className={styles.timelineItem}>
            <div
              className={`${styles.timelineCard} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className={styles.timelineImage}
              />
              <div className={styles.timelineText}>
                <h3>{event.title}</h3>
                <p className={styles.date}>{event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
            {/* Grey line between the cards */}
            {index !== events.length - 1 && (
              <div className={styles.timelineLine}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
