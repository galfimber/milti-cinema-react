import React, { useEffect, useRef } from "react";
import { useAppContext } from "./../Context/AppContext";

export default function KinoboxPlayer({ kpId }) {
  const containerRef = useRef(null);
  const { link, setLink } = useAppContext();

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://p.ddbb.lol/kinobox.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     if (containerRef.current) {
  //       window.kbox(containerRef.current, {
  //         search: {
  //           kinopoisk: kpId,
  //           sources: "turbo,collaps,alloha,kodik,vibix",
  //         },
  //         menu: {
  //           enabled: false,
  //         },
  //       });
  //     }
  //   };

  //   return () => {
  //     try {
  //       document.body.removeChild(script);
  //     } catch (e) {}
  //   };
  // }, [kpId]);
  useEffect(() => {
    getPlayer();
  }, []);
  const getPlayer = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // mode: 'no-cors'
      },
    };
    const fetchResponse = await fetch(
      "https://proxy.corsfix.com/?https://p.ddbb.lol/api/players?" +
        new URLSearchParams({
          kinopoisk: kpId,
        }),
      options
    );
    let response = await fetchResponse.json();
    if (response) {
      console.log(fetchResponse, response)
      setLink(response[1].iframeUrl);
    }
  };

  return (
    <div className="kinobox_player movie__player">
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Map"
        width="100%"
        height="600px"
        frameborder="1"
        allowfullscreen="true"
        src={link}
      ></iframe>
    </div>
  );
}
