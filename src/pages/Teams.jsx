function Teams() {
  const teams = [
    {
      id: 1,
      name: "Pakistan",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Pakistan_cricket_team_logo.png/250px-Pakistan_cricket_team_logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 2,
      name: "India",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg/250px-Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 3,
      name: "Australia",
      logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/3/35/Australia_cricket_logo.svg/250px-Australia_cricket_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 4,
      name: "England",
      logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/c/ce/England_cricket_team_logo.svg/250px-England_cricket_team_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 5,
      name: "South Africa",
      logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/250px-Southafrica_cricket_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 6,
      name: "Sri Lanka",
      logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/eb/Sri_Lanka_Cricket_Cap_Insignia.svg/250px-Sri_Lanka_Cricket_Cap_Insignia.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 7,
      name: "New Zealand",
      logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/1/19/Logo_of_cricket_New_zealand_Team.png/250px-Logo_of_cricket_New_zealand_Team.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 8,
      name: "West Indies",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Cricket_West_Indies_Logo_2017.svg/250px-Cricket_West_Indies_Logo_2017.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
  ];

  return (
    <div className="teams-content">
      <h1>International Cricket Teams</h1>
      <p>Explore the teams of international cricket.</p>

      <div className="teams-list">
        {teams.map((team) => (
          <div className="team-card" key={team.id}>
            <img
              src={team.logo}
              alt={`${team.name} logo`}
              className= "team-page-logo"
            />
            <h2>{team.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;