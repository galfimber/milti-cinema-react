import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

export default function KinoboxPlayer({ kpId }) {
  const {
    link,
    setLink,
    film,
    players,
    setPlayers,
    activePlayer,
    setActivePlayer,
  } = useAppContext();

  useEffect(() => {
    getPlayer();
  }, [film]);
  const getPlayer = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const fetchResponse = await fetch(
      "https://api.kinobox.tv/api/players?&ts=3705" +
        new URLSearchParams({
          token: "eedefb541aeba871dcfc756e6b31c02e",
          kinopoisk: kpId,
        }),
      options
    );
    const response = await fetchResponse.json();
    if (response) {
      setPlayers(response.data);
      setActivePlayer(response.data[5]);
      setLink(response.data[5].iframeUrl);
    }
  };

  const togglePlayer = (player) => {
    setActivePlayer(player);
    setLink(player.iframeUrl);
  };

  const date = new Date(film.premiere.world);

  return (
    <div className="player movie__player">
      <div className="player__types">
        {players.map((player) => (
          <button
            className={`player__type ${
              player.type === activePlayer.type ? "player__type--active" : ""
            }`}
            key={player.type}
            onClick={() => togglePlayer(player)}
          >
            {player.type}
          </button>
        ))}
      </div>
      {link ? (
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Map"
          width="100%"
          height="600px"
          frameborder="1"
          allowfullscreen="true"
          src={link}
        ></iframe>
      ) : (
        <div className="premier">
          Дата выхода: {date.getDate()}.{date.getMonth() + 1}.
          {date.getFullYear()}{" "}
        </div>
      )}
    </div>
  );
}

// "https://api1573848848.apicollaps.cc/franchise/details?" +
//         new URLSearchParams({
//           token: "eedefb541aeba871dcfc756e6b31c02e",
//           kinopoisk_id: kpId,
//         }),
