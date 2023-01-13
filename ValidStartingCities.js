//   Imagine you have a set of cities that are laid out in a circle, connected by a
//   circular road that runs clockwise. Each city has a gas station that provides
//   gallons of fuel, and each city is some distance away from the next city.

//   You have a car that can drive some number of miles per gallon of fuel, and
//   your goal is to pick a starting city such that you can fill up your car with
//   that city's fuel, drive to the next city, refill up your car with that city's
//   fuel, drive to the next city, and so on and so forth until you return back to
//   the starting city with 0 or more gallons of fuel left.

//   This city is called a valid starting city, and it's guaranteed that there will
//   always be exactly one valid starting city.

//   For the actual problem, you'll be given an array of distances such that city
//   i is distances[i] away from city i + 1.
//   Since the cities are connected via a circular road, the last city is connected
//   to the first city. In other words, the last distance in the
//   distances array is equal to the distance from the last city to
//   the first city. You'll also be given an array of fuel available at each city,
//   where fuel[i] is equal to the fuel available at city
//   i. The total amount of fuel available (from all cities combined)
//   is exactly enough to travel to all cities. Your fuel tank always starts out
//   empty, and you're given a positive integer value for the number of miles that
//   your car can travel per gallon of fuel (miles per gallon, or MPG). You can
//   assume that you will always be given at least two cities.
//          city 1 , 2,  3,  4,  5
let distances = [5, 25, 15, 10, 15];
let fuel = [1, 2, 1, 0, 3];
let mpg = 10;
//Milage [10,20,10,0,30]

// //Output = 4

// function validStartingCity(distances, fuel, mpg) {
//   for (let i = 0; i < distances.length; i++) {
//     let sum1 = fuel[i] * mpg - distances[i];

//     if (sum1 < 0) return;
//     tempSum = tempSum + sum1;
//     // console.log(sum1);
//     // let sum2 = fuel[i + 1] * mpg - distances[i + 1];
//     // console.log(sum2);
//     // if (sum1 + sum2 >= 0) return;

//     // tempSum = tempSum + sum;
//     // console.log(tempSum);
//     // if (tempSum > 0) {
//     //   i++;
//     // }
//     // if (sum[i] + sum[i + 1] >= 0) {
//     // }
//   }

//   return i >= 0 ? i : -1;
// }

// function validStartingCity(distances, fuel, mpg) {
//   let i = 0; //1
//   let totalSum = 0;
//   console.log(i);
//   while (i < distances.length - 1) {
//     let indexFuel = i; // 0 => 1
//     let sum1 = fuel[indexFuel] * mpg - distances[indexFuel];
//     console.log(sum1); // 5
//     let sum2 = fuel[indexFuel + 1] * mpg - distances[indexFuel + 1];
//     console.log(sum2); //-5
//     if (totalSum + sum1 < 0) {
//       i++;
//       console.log(`i : ${i}`);
//     } else if (sum1 + sum2 >= 0) {
//       indexFuel++;
//       console.log(i);
//     }
//   }
// }

// validStartingCity(distances, fuel, mpg);
//If(fuel.mul(fuel) > distances[i])

//Solution

function validStartingCity(distances, fuel, mpg) {
  let milesRemaining = 0;
  let candidateStartingCity = 0;

  for (let i = 1; i < distances.length; i++) {
    milesRemaining += fuel[i - 1] * mpg - distances[i - 1];
    console.log(`miles Remaining ${milesRemaining}`);
    if (milesRemaining < 0) {
      candidateStartingCity = i;
      console.log(`candiate is: ${candidateStartingCity}`);
      milesRemaining = 0;
    }
  }
  return candidateStartingCity;
}
console.log(validStartingCity(distances, fuel, mpg));
