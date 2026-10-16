
import { useState, useEffect } from "react";

function Matches() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // API data state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const matches = [
    {
      id: 1,
      team1: "Pakistan",
      team2: "Sri Lanka",
      team1Logo:
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Pakistan_cricket_team_logo.png/250px-Pakistan_cricket_team_logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      team2Logo:
        "https://thumb.wikimedia.org/wikipedia/en/thumb/e/eb/Sri_Lanka_Cricket_Cap_Insignia.svg/250px-Sri_Lanka_Cricket_Cap_Insignia.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      date: "18 October 2026",
      venue: "Rawalpindi",
      status: "Upcoming",
    },
    {
      id: 2,
      team1: "South Africa",
      team2: "Australia",
      team1Logo:
        "https://thumb.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/250px-Southafrica_cricket_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      team2Logo:
        "https://thumb.wikimedia.org/wikipedia/en/thumb/3/35/Australia_cricket_logo.svg/250px-Australia_cricket_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      date: "18 October 2026",
      venue: "St George's Park, Gqeberha",
      status: "Upcoming",
    },
    {
      id: 3,
      team1: "Pakistan",
      team2: "England",
      team1Logo:
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Pakistan_cricket_team_logo.png/250px-Pakistan_cricket_team_logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      team2Logo:
        "https://thumb.wikimedia.org/wikipedia/en/thumb/c/ce/England_cricket_team_logo.svg/250px-England_cricket_team_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      date: "20 October 2026",
      venue: "Rawalpindi",
      status: "Upcoming",
    },
    {
      id: 4,
      team1: "England",
      team2: "Sri Lanka",
      team1Logo:
        "https://thumb.wikimedia.org/wikipedia/en/thumb/c/ce/England_cricket_team_logo.svg/250px-England_cricket_team_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      team2Logo:
        "https://thumb.wikimedia.org/wikipedia/en/thumb/e/eb/Sri_Lanka_Cricket_Cap_Insignia.svg/250px-Sri_Lanka_Cricket_Cap_Insignia.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      date: "22 October 2026",
      venue: "Rawalpindi",
      status: "Upcoming",
    },
  ];

  // Filter hardcoded matches by search and status
  const filteredMatches = matches.filter((match) => {
    const matchesSearch =
      match.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.team2.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || match.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Filter API matches by selected status
  const filteredApiMatches = posts.filter((match) => {
    return (
      selectedStatus === "All" ||
      (selectedStatus === "Upcoming" &&
        match.status?.toLowerCase() === "upcoming")
    );
  });

  // Fetch cricket matches when the page mounts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://sportscore.com/api/widget/matches/?sport=cricket&limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cricket matches.");
        }

        const data = await response.json();
        setPosts(data.matches ?? []);
      } catch (error) {
        setError("Failed to load cricket matches. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="matches-content">
      <h1>Upcoming Matches</h1>
      <p>Stay updated with the latest cricket fixtures.</p>

      <div className="matches-filters">
        <input
          type="text"
          placeholder="Search by team name..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
        >
          <option value="All">All Matches</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>

      {/* Hardcoded matches */}
      {filteredMatches.length > 0 ? (
        <div className="matches-grid">
          {filteredMatches.map((match) => (
            <div className="match-card" key={match.id}>
              <div className="match-teams">
                <div className="team">
                  <img
                    src={match.team1Logo}
                    alt={`${match.team1} logo`}
                    className="team-logo"
                  />
                  <span>{match.team1}</span>
                </div>

                <span className="vs">vs</span>

                <div className="team">
                  <img
                    src={match.team2Logo}
                    alt={`${match.team2} logo`}
                    className="team-logo"
                  />
                  <span>{match.team2}</span>
                </div>
              </div>

              <hr className="match-divider" />

              <p>Date: {match.date}</p>
              <p>Venue: {match.venue}</p>
              <p>
                Status:{" "}
                <span className="match-status">{match.status}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-matches">
          No matches found. Try another team name.
        </p>
      )}

      {/* Cricket API matches */}
      <section className="api-practice">
        <h2>Cricket Matches from SportScore</h2>

        {loading && <p>Loading cricket matches...</p>}

        {!loading && error && <p>{error}</p>}

        {!loading && !error && filteredApiMatches.length === 0 && (
          <p>No matches are available for this filter right now.</p>
        )}

        {!loading && !error && filteredApiMatches.length > 0 && (
          <div className="api-matches-grid">
            {filteredApiMatches.map((match) => (
              <article className="api-match-card" key={match.url}>
                <p>{match.competition}</p>

                <div className="api-match-team">
                  {match.home_logo && (
                    <img src={match.home_logo} alt="" />
                  )}
                  <span>{match.home}</span>
                  <strong>{match.home_score ?? "—"}</strong>
                </div>

                <div className="api-match-team">
                  {match.away_logo && (
                    <img src={match.away_logo} alt="" />
                  )}
                  <span>{match.away}</span>
                  <strong>{match.away_score ?? "—"}</strong>
                </div>

                <p>
                  Status:{" "}
                  {match.status === "upcoming"
                  ? "Upcoming"
                  : match.status === "finished"
                  ? "Finished"
                  : match.status === "live"
                  ? "Live"
                  : match.status_text}
                </p>

                <p>
                  Match time:{" "}
                  {new Date(match.time).toLocaleString("en-PK", {
                    timeZone: "Asia/Karachi",
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}{" "}
                  (PKT)
                </p>
              </article>
            ))}
          </div>
        )}

        <p>
          <a href="https://sportscore.com/" target="_blank">
            Powered by SportScore
          </a>
        </p>
      </section>
    </div>
  );
}

export default Matches;
