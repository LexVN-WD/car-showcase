export async function fetchCars() {

  const headers = {
      "X-RapidAPI-Key": "7337061d36msh34b082da0f8da24p14bc7ajsn3bce08391378",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    
    headers: headers,
   
  });

  const result = await response.json();

  return result;
}