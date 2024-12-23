# ACM Website Project

Welcome to the ACM website project! This document will guide you through the project requirements, structure, and how to contribute effectively.



## What Are We Building?

We are developing a **simple ACM website** with a modern design and seamless user experience.



## Features to Implement

1. **Navbar**: Built with Material-UI.
2. **Home**: The landing page.
3. **Events**: Showcase events and their details.
4. **Testimonials**: Section for user feedback/testimonials.
5. **Team**: Display team members.
6. **About Us**: Information about ACM.



## Theme

The website will have the following design theme:

1. **Color Palette**:
   - Primary: **Metallic Grey**

2. **Styling Considerations**:
   - Use **module CSS** to avoid global style conflicts.
   - Ensure the website is fully **responsive**.



## Technology Stack

We will use the following technologies to build the website:

### Frontend
1. **React.js (v19.0)**: JavaScript library for building user interfaces.
2. **Material-UI**: For pre-styled components.
3. **Data-aos**: For smooth animations on scroll.
4. **Tailwind CSS**: For utility-first styling.
5. **React Router DOM**: For managing routes.
6. **Vanilla CSS**: For additional custom styles.



## Routes

The website will have the following routes:

| Route          | Description                   |
|--|-|
| `/home`        | Landing page                  |
| `/events`      | Displays event details        |
| `/testimonials`| Section for testimonials      |
| `/team`        | Displays team members         |
| `/about-us`    | Information about ACM         |



## Project Requirements

1. **No Global CSS Conflicts**:
   - Use **module CSS** for component-specific styling.
   
2. **Responsiveness**:
   - The website must be mobile-friendly and responsive on all devices.



## File Structure

Below is the project’s file structure:

```
frontend/
├── index.html           # Entry point for the application
├── package.json         # Manages project dependencies
├── README.md            # Project documentation (this file)
├── vite.config.js       # Vite configuration file
├── eslint.config.js     # ESLint configuration for code linting
└── src/
    ├── main.jsx         # Main application file
    ├── App.jsx          # Root component of the application
    ├── styles/
    │   ├── index.css    # Global CSS styles
    │   ├── App.css      # App-specific styles
    │   ├── home.module.css       # CSS module for Home component
    │   ├── events.module.css     # CSS module for Events component
    │   ├── testimonials.module.css  # CSS module for Testimonials component
    │   ├── team.module.css       # CSS module for Team component
    │   └── navbar.module.css     # CSS module for Navbar component
    └── Components/
        ├── Home.jsx              # Home page component
        ├── Events.jsx            # Events page component
        ├── Testimonials.jsx      # Testimonials page component
        ├── Team.jsx              # Team page component
        └── Navbar.jsx            # Navigation bar component
```



## Module CSS Example

### File: `src/Components/Navbar.jsx`

```jsx
import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Events</li>
        <li className={styles.navItem}>Testimonials</li>
        <li className={styles.navItem}>Team</li>
        <li className={styles.navItem}>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

### File: `src/styles/navbar.module.css`

```css
.navbar {
  background-color: #282c34;
  padding: 1rem;
}

.navList {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navItem {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.navItem:hover {
  color: #61dafb;
}
```



## Getting Started

### Prerequisites

Ensure you have the following tools installed:

- **Node.js** (LTS version recommended)
- **npm** or **yarn** for managing dependencies

### Installation

1. Clone the repository.
2. Navigate to the `frontend/` directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173/` in your browser to view the website.



## Contribution Guidelines

- Follow the file structure strictly.
- Use module CSS for component-specific styles.
- Write clean and readable code.
- Commit changes with meaningful commit messages.
- Test your code for responsiveness before pushing.



If you have any questions or need clarification, feel free to reach out to the team lead. Happy coding!