const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};
function memo(func){
    var cache = {};
      return function(){
        var key = JSON.stringify(arguments);
        if (cache[key]){
          return cache[key];
        }
        else{
          val = func.apply(null, arguments);
          cache[key] = val;
          return val; 
        }
    }
  }
function getTemperatureForCity(cityName) {
    return temperatureData[cityName]

}

const memoization = memo(getTemperatureForCity)

const temperature1 = memoization('New York');
console.log(temperature1);


const temperature2 = memoization('New York'); 
console.log(temperature2); 

const temperature3 = memoization('London'); 
console.log(temperature3); 

const temperature4 = memoization('London'); 
console.log(temperature4); 