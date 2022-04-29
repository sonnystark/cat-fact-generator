import "dotenv/config";
import express from "express";
import fetch from "node-fetch";
const port = 3000;
const app = express();

// Middleware
app.use(express.static("public"));

// Fact Route
app.get("/catFact", async (req, res) => {
  const fetchCatApi = await fetch(
    "https://brianiswu-cat-facts-v1.p.rapidapi.com/facts",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "brianiswu-cat-facts-v1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.API_KEY,
      },
    }
  );
  const catFactsResponse = await fetchCatApi.json();
  console.log(catFactsResponse);
  res.json(catFactsResponse);
});

// Image Route
app.get("/catImg", async (req, res) => {
  const fetchCatImg = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=cat&count=20",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.API_KEY,
      },
    }
  );
  const catImgResponse = await fetchCatImg.json();
  console.log(catImgResponse);
  res.json(catImgResponse);
});

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
