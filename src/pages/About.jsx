
function About() {
  return (
    <div className="about-content">
      <h1>About Mini Cricket Hub</h1>

      <p>
        Mini Cricket Hub is a simple website created for cricket fans
        to explore international teams and upcoming matches.
      </p>

      <h2>What You Can Explore</h2>

      <div className="about-features">
        <div className="about-card">
          <h3>Matches</h3>
          <p>Explore details, venues, dates, and status of every match</p>
        </div>

        <div className="about-card">
          <h3>Teams</h3>
          <p>Discover international cricket teams and their logos.</p>
        </div>
      </div>

      <p className="about-message">
        Built with React for practicing some basic react concepts by Muhammad Sharjeel.
      </p>
    </div>
  );
}

export default About;
