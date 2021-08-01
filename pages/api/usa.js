// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let [res1, res2, res3, res4] = await Promise.all([
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=10001&appid=${process.env.API_KEY}&units=metric`
    ).then((response) => response.json()),
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=90001&appid=${process.env.API_KEY}&units=metric`
    ).then((response) => response.json()),
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${process.env.API_KEY}&units=metric`
    ).then((response) => response.json()),
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=houston&appid=${process.env.API_KEY}&units=metric`
    ).then((response) => response.json()),
  ]);

  res.status(200).json([res1, res2, res3, res4]);
}
