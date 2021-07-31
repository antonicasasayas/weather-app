// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

   let [res1, res2, res3, res4] = await Promise.all([
     fetch(
       `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.API_KEY}&units=metric`
     ).then((response) => response.json()),
     fetch(
       `http://api.openweathermap.org/data/2.5/weather?q=madrid&appid=${process.env.API_KEY}&units=metric`
     ).then((response) => response.json()),
     fetch(
       `http://api.openweathermap.org/data/2.5/weather?q=paris&appid=${process.env.API_KEY}&units=metric`
     ).then((response) => response.json()),
     fetch(
       `http://api.openweathermap.org/data/2.5/weather?q=rome&appid=${process.env.API_KEY}&units=metric`
     ).then((response) => response.json()),
   ]);
      
        
      
      
    res.status(200).json([res1, res2, res3, res4])
   
  
 

  
}
