function FavoriteTeam(props) {
  return (
    <div className="favorite-team">
      <h2>My Favourite Team :</h2>
      <p>{props.teamName}</p>

      <button onClick={props.onChangeTeam}>Change Team</button>
    </div>
  );
}

export default FavoriteTeam;