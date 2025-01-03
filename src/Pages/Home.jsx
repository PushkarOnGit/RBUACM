import React from "react";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className="bg-slate-300 text-black p-4 rounded-2xl text-lg font-bold">Hello World</div>
      <h1 className={styles.title}>Welcome to ACM Website</h1>
      <p className={styles.subtitle}>
        Explore our events, team, and testimonials with a modern Metallic Gray theme.
      </p>
      <button>Learn More</button>
    </div>
  );
};

export default Home;
