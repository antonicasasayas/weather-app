// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
 console.log(city)
  const city = req.query

  
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3d651c47003ab45403aed1bf195bef0`
    );
    const info = await response.json(
    )
    
  res.status(200).json(info)
  
  
}
