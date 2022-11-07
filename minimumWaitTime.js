//   You're given a non-empty array of positive integers representing the amounts
//   of time that specific queries take to execute. Only one query can be executed
//   at a time, but the queries can be executed in any order.

//   A query's waiting time is defined as the amount of time that it must
//   wait before its execution starts. In other words, if a query is executed
//   second, then its waiting time is the duration of the first query; if a query
//   is executed third, then its waiting time is the sum of the durations of the
//   first two queries.

// Write a function that returns the minimum amount of total waiting time for all
// of the queries. For example, if you're given the queries of durations [1,4,5]
// , then the total waiting time if the queries were executed in the order of [5,1,4]
// would be (0) + (5) + (5+1) =11. The first query of duration 5  would be executed
// immediately, so its waiting time would be 0, the second query of duration 1 would
// have to wait 5 seconds (the duration of the first query) to be executed, and
// the last query would have to wait the duration of the first two queries before
// being executed.

//Hint 1:
// Even though you don't need to return the actual order in which the queries will be executed to
//minimize the total waiting time, it's important to determine what this order should be. Start by doing so.

//Hint 2:
// Can you solve this problem with constant space? What advantage does being able to mutate the input array provide?

//Hint 3:
// Sort the input array in place, and execute the shortest queries in their sorted order.
//This should allow you to calculate the minimum waiting time.

//Hint 4: Create a variable to store the total waiting time, and iterate through
//the sorted input array. At each iteration, multiply the number of queries left by the
//duration of the current query, and add that to the total waiting time.

// [5,1,4]
// (0) + (5) + (5+1) =11
//  queries[0] = 0 + 0
//  queries[1] = 0 + 5
//  queries[2] = 5 + 1

let queries = [3, 2, 1, 2, 6];
//[1,2,2,3,6]
// 0 + 1 + 3 + 5 + 8 =17
// (0) + (3) + () + (3) + (3)
//  queries[0] = 0 + 0
//  queries[1] = 0 + 3
//  queries[2] = 3 + 2
//  queries[3] = 3 + 3 + 2
//  queries[4] = 3 + 2 + 8
//output = 17

//Output = 6
//No waiting time for index 0 and last index
//[(1, 1, 1, 2)]
// 0 + 1 + 2 + 3

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let totalWaitTime = 0;
  multiplier = queries.length - 1;
  for (let i = 0; i < queries.length; i++) {
    totalWaitTime += queries[i] * multiplier;
    multiplier--;
  }
  return totalWaitTime;
}

// function minimumWaitingTime(queries) {
//   queries.sort((a, b) => a - b);
//   let minWaitTime = 0;
//   let multiplier = 0;
//   for (let i = 0; i < queries.length; i++) {
//     let j = i - 1;
//     if (j < 0) minWaitTime = 0;
//     if (j >= 0) minWaitTime += queries[i - 1];
//   }
//   return minWaitTime;
// }

//let queries = [3, 2, 1, 2, 6];
//[1,2,2,3,6]
// 0 + 1 + 3 + 5 + 8 =17

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalWaitTime = 0;
  let lastNum = 0;

  for (const num of queries) {
    totalWaitTime += lastNum;
    console.log(`totalWaitTime: ${totalWaitTime}`);
    lastNum += num;
    console.log(`lastNum: ${lastNum}`);
  }
  return totalWaitTime;
}

console.log(minimumWaitingTime(queries));
