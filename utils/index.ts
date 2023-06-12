export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b717715c1bmsh014547376372c82p1ce1f4jsn8fe91e01ed56',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const response = await fetch(url, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}












