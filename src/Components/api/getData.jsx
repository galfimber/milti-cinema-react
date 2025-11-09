const KEY = [
  "0ZYHMMB-0PK4KA6-Q98FNTP-8XYEN0B",
  "HCF37A2-V3HMP2C-Q5JFH12-HP164ZR",
  "G8REABY-1JJM9JE-NFH2A9H-Q2A36EY",
  "R2B4B27-4G8M3HT-GT1TMFA-JM0QG10",
  "4P9RGZ9-0QBM11G-GY2A4JG-44FF306",
  "RJKDTJT-1HDM3FX-NGWJ4T8-KHQMWQF",
  "41AQJTS-HXNM9CK-KJ8REHP-284Q8GZ",
  "8MBXH6M-W3M43YM-HV7T7HN-XJQJE83",
  "T2SGZKA-DYJ4K85-Q070520-D3YA3XG",
  "YX89AQD-1JVMCJ4-M8RG3KK-VBPYRJC",
  "VR6TBA5-NT0MCJJ-GK49GZ4-TAYGGW0",
  "FCE2VJ9-C2K4Z3C-MVJGV8V-XEGG0AW",
  "2TMGQFT-AJZ4R8W-JTR4RQA-XYBEM50",
  "56PJR4X-SG5M5K8-QX04GKP-SPFN41S",
  "W2RBCG6-XPWM7S9-GY34VT4-1MSVB9K",
  "QA9F6D2-CPF4P5P-PSCK2VH-QXNXX7H",
  "T89S8JR-Y5343QN-HCRHHVV-KATN0A8",
  "H57DR0Y-AF04JM8-JNX8B57-TTA4XS6",
  "ENY9588-TYQ4MR0-HSG1Z8G-PHWMK98",
  "V51QHR8-FA8MCCE-MDMH6GA-28H6A0Y",
  "D4526KJ-D0WM93V-KFK9H7T-VPKK17K",
  "5MHJKGM-MQ7MNRM-JCTY8A5-BXKXJ2P",
  "X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB",
  "2RGCGGC-0AWMZ0M-J32EMAV-6JW3YZ3",
  "68W27N1-8NF4JP3-P6B51RS-FT0N5AC",
  "7KA28B8-JP44HG0-Q43HR6N-VRN6AJ1",
  "67N84PZ-HPAMZ6R-MJH9SFD-VTMYSAC",
  "78HNYJZ-HQPM56Z-JWN92NH-FG7ZRDQ",
  "3SVTEEX-Y8HMTYJ-J3ENEFG-WC1N623",
  "5QVH807-GAP49T6-QY0P863-EQW1F83",
  "220FRRR-ZF0M9VE-JTNC41C-FSB7ATX",
  "F6QX0P1-FQTMPFY-PWNT126-KXFHWZK",
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
        "https://api.poiskkino.dev/v1.3/movie?" +
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
        `https://api.poiskkino.dev/v1.4/movie/${filmId}`,
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
          "https://api.poiskkino.dev/v1.4/movie?" +
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
          "https://api.poiskkino.dev/v1.4/movie?" +
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
