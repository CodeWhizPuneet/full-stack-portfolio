import "../index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to my Full Stack Portfolio</h1>
        <p><strong>Developed by:</strong> Puneet Shankar</p>
        <p><strong>UID:</strong> 24BAI70570</p>
        <p><strong>Section:</strong> 24AML3 (B)</p>
        <p><strong>Course:</strong> B.E. CSE (AI & ML)</p>
        <p><strong>University:</strong> Chandigarh University</p>
      </div>

      {/* ===================== */}
      {/* EXPERIMENT 1 */}
      {/* ===================== */}
      <h2 className="section-title">
        Experiment 1 – HTML & CSS Fundamentals
      </h2>

      <div className="experiment-grid">

        <a href="/experiments/1.1.html" target="_blank" rel="noreferrer" className="card-link">
          <div className="card">
            <h3>1.1 – Student Registration Form</h3>
            <p>Form validation using HTML attributes and patterns.</p>
          </div>
        </a>

        <a href="/experiments/1.2.html" target="_blank" rel="noreferrer" className="card-link">
          <div className="card">
            <h3>1.2 – Banking UI</h3>
            <p>Responsive Flexbox layout with JavaScript logic.</p>
          </div>
        </a>

        <a href="/experiments/1.3.html" target="_blank" rel="noreferrer" className="card-link">
          <div className="card">
            <h3>1.3 – Admin Dashboard</h3>
            <p>Grid layout with theme toggle and responsive design.</p>
          </div>
        </a>

      </div>

      {/* ===================== */}
      {/* EXPERIMENT 2 */}
      {/* ===================== */}
      <h2 className="section-title">
        Experiment 2 – JavaScript & React Basics
      </h2>

      <div className="experiment-grid">

        <a href="/experiments/2.1.html" target="_blank" rel="noreferrer" className="card-link">
          <div className="card">
            <h3>2.1 – Live Character Counter</h3>
            <p>React state management using hooks.</p>
          </div>
        </a>

        <a href="/experiments/2.2.html" target="_blank" rel="noreferrer" className="card-link">
          <div className="card">
            <h3>2.2 – Product Filter</h3>
            <p>Dynamic filtering using React state.</p>
          </div>
        </a>

        <a href="/experiments/2.3.html" target="_blank" rel="noreferrer" className="card-link">
          <div className="card">
            <h3>2.3 – SVG Drawing Tool</h3>
            <p>Interactive drawing tool using React.</p>
          </div>
        </a>

      </div>

      {/* ===================== */}
      {/* EXPERIMENT 3 */}
      {/* ===================== */}
      <h2 className="section-title">
        Experiment 3 – React Advanced
      </h2>

      <div className="experiment-grid">

        <Link to="/product" className="card-link">
          <div className="card">
            <h3>3.1 – Product Cards</h3>
            <p>Reusable components and props handling.</p>
          </div>
        </Link>

        <Link to="/library" className="card-link">
          <div className="card">
            <h3>3.2 – Library Management</h3>
            <p>CRUD operations with React state.</p>
          </div>
        </Link>

        <Link to="/person" className="card-link">
          <div className="card">
            <h3>3.3 – Class Hierarchy</h3>
            <p>ES6 class inheritance and polymorphism.</p>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default Home;