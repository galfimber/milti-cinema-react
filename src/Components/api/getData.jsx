// import { useAppContext } from "../../Context/AppContext";

export const searchByName = async (
  filmName,
  setData,
  pages,
  setIsLoading,
  page = 1
) => {
  // const { setIsLoading } = useAppContext();

  function handleFirstNameChange(response) {
    pages.actual = response.page;
    pages.all = response.pages;
  }

  //Мой 84S4SNX-Y084WMK-K7FV73W-8G8P6MH
  //Чужой 5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER",
    },
  };
  const response = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?" +
      new URLSearchParams({
        page: page.toString(),
        limit: "25",
        sortField: "votes.imdb",
        sortType: "-1",
        name: filmName,
      }),
    options
  ).then((response) => response.json());

  // setPages({
  //   actual: response.page,
  //   all: response.pages,
  // });
  handleFirstNameChange(response);
  setData(response.docs);
  setIsLoading(true);
};

export const searchById = async (filmId, setFilm, setIsLoading) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "84S4SNX-Y084WMK-K7FV73W-8G8P6MH",
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/${filmId}`,
    options
  ).then((response) => response.json());

  setFilm(response);
  setIsLoading(false);
};

export const searchCollections = async (setData, setIsLoading) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "84S4SNX-Y084WMK-K7FV73W-8G8P6MH",
    },
  };
  const [response1, response2] = await Promise.all([
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
          year: `${new Date().getFullYear() - 5}-${new Date().getFullYear()}`,
        }),
      options
    ),
  ]);
  const data1 = await response1.json();
  const data2 = await response2.json();

  setData([data1.docs, data2.docs]);
  setIsLoading(false);
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
