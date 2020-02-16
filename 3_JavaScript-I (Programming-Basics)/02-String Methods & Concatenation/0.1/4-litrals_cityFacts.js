function cityFacts(city){
    return `${city.name} has a population of ${city.population} 
    and is situated in ${city.continent}`
 }
//////////////////////////////////////////
 let city1 = {
    name: "Paris",
    population: "2,140,526",
    continent: "Europa"
 }
 console.log(cityFacts(city1))

 let city2 = {};
 city2.name= prompt("Please Enter The City Name:");
 city2.population= prompt("Please Enter The City Population:");
 city2.continent= prompt("Please Enter The City Continent:");

 document.write(cityFacts(city2));
 ////////////////////////////////////////