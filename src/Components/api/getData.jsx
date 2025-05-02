const KEY = [
  "84S4SNX-Y084WMK-K7FV73W-8G8P6MH",
  "5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER",
];

export const searchByName = async (filmName, setData, setPages,setIsLoading, page = 1) => {
  function handlePaginationUpdate(response) {
    setPages((prev) => ({
      ...prev,
      actual: response.page,
      all: response.pages,
    }));
  }

  let response;
  for (let keyIndex = 0; keyIndex < KEY.length; keyIndex++) {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": KEY[keyIndex],
        },
      };

      const fetchResponse = await fetch(
        "https://api.kinopoisk.dev/v1.3/movie?" +
          new URLSearchParams({
            page: page.toString(),
            limit: "25",
            sortField: "votes.imdb",
            sortType: "-1",
            name: filmName,
          }),
        options
      );

      if (!fetchResponse.ok) {
        if (fetchResponse.status === 401 || fetchResponse.status === 403) {
          console.log(`API key ${keyIndex} failed, trying next key...`);
          continue;
        }
        throw new Error(
          `API request failed with status ${fetchResponse.status}`
        );
      }

      response = await fetchResponse.json();
      break;
    } catch (error) {
      console.error(`Error with API key ${keyIndex}:`, error);

      if (keyIndex === KEY.length - 1) {
        throw new Error("All API keys failed");
      }
    }
  }

  if (response) {
    handlePaginationUpdate(response);
    setData(response.docs);
  }
  setIsLoading(false);
};

export const searchById = async (filmId, setFilm, setIsLoading) => {
  for (let keyIndex = 0; keyIndex < KEY.length; keyIndex++) {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": KEY[keyIndex],
        },
      };

      const fetchResponse = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie/${filmId}`,
        options
      );

      if (!fetchResponse.ok) {
        if (fetchResponse.status === 401 || fetchResponse.status === 403) {
          console.log(`API key ${keyIndex} failed, trying next key...`);
          continue;
        }
        throw new Error(
          `API request failed with status ${fetchResponse.status}`
        );
      }

      const response = await fetchResponse.json();
      setFilm(response);
      setIsLoading(false);
      return;
    } catch (error) {
      console.error(`Error with API key ${keyIndex}:`, error);

      if (keyIndex === KEY.length - 1) {
        setIsLoading(false);
        throw new Error("All API keys failed");
      }
    }
  }
};

export const searchCollections = async (setData, setIsLoading) => {
  for (let keyIndex = 0; keyIndex < KEY.length; keyIndex++) {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": KEY[keyIndex],
        },
      };

      const [fetchResponse1, fetchResponse2] = await Promise.all([
        fetch(
          "https://api.kinopoisk.dev/v1.4/movie?" +
            new URLSearchParams({
              page: "1",
              limit: "25",
              sortField: "votes.await",
              sortType: "-1",
              "votes.await": "1000-6666666",
              year: new Date().getFullYear(),
              status: "completed",
            }),
          options
        ),
        fetch(
          "https://api.kinopoisk.dev/v1.4/movie?" +
            new URLSearchParams({
              page: "1",
              limit: "25",
              sortField: "votes.imdb",
              sortType: "-1",
              isSeries: "true",
              year: `${
                new Date().getFullYear() - 5
              }-${new Date().getFullYear()}`,
            }),
          options
        ),
      ]);

      if (!fetchResponse1.ok || !fetchResponse2.ok) {
        if (
          fetchResponse1.status === 401 ||
          fetchResponse1.status === 403 ||
          fetchResponse2.status === 401 ||
          fetchResponse2.status === 403
        ) {
          console.log(`API key ${keyIndex} failed, trying next key...`);
          continue;
        }
        throw new Error(
          `API request failed with status ${fetchResponse1.status}/${fetchResponse2.status}`
        );
      }

      const data1 = await fetchResponse1.json();
      const data2 = await fetchResponse2.json();

      setData([data1.docs, data2.docs]);
      setIsLoading(false);
      return;
    } catch (error) {
      console.error(`Error with API key ${keyIndex}:`, error);

      if (keyIndex === KEY.length - 1) {
        setIsLoading(false);
        throw new Error("All API keys failed");
      }
    }
  }
};

// export const getImg = (id) => {
//   const request = new XMLHttpRequest();
//   const api_key = "6395ebcee72e527ec489f9ad60d9e373";

//   request.open(
//     "GET",
//     `http://webservice.fanart.tv/v3/movies/${id}?api_key=${api_key}`
//   );

//   request.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       console.log("Status:", this.status);
//       console.log("Headers:", this.getAllResponseHeaders());
//       console.log("Body:", this.responseText);
//     }
//   };

//   request.send();
// };
