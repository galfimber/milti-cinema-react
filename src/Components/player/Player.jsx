import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

export default function KinoboxPlayer({ kpId }) {
  const { link, setLink, film } = useAppContext();

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
      const url = response.data[5].iframeUrl;
      setLink(url);
    }
  };

  console.log(film.premiere.world);
  const date = new Date(film.premiere.world);
  console.log(date);

  return (
    <div className="kinobox_player movie__player">
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
