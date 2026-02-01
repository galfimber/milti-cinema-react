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

  let isPlayer = false;

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
      options,
    );
    const response = await fetchResponse.json();
    console.log(response.data.find((item) => item.type == "Collaps"));
    if (response) {
      setPlayers(response.data);
      if (
        response.data.find((item) => item.type == "Collaps") &&
        response.data.find((item) => item.type == "Collaps").iframeUrl
      ) {
        setActivePlayer(response.data.find((item) => item.type == "Collaps"));
        setLink(response.data.find((item) => item.type == "Collaps").iframeUrl);
        isPlayer = true;
      } else {
        for (let playerNum = 0; playerNum <= 6; playerNum++) {
          if (response.data[playerNum].iframeUrl) {
            setActivePlayer(response.data[playerNum]);
            setLink(response.data[playerNum].iframeUrl);
            isPlayer = true;
            break;
          }
        }
      }
    }
  };

  const togglePlayer = (player) => {
    setActivePlayer(player);
    setLink(player.iframeUrl);
  };

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
          {isPlayer
            ? "Попробуйте другой плеер"
            : "К сожалению фильм пока недоступен"}
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
