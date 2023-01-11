//   You're given an integer k representing a number of workers and an
//   array of positive integers representing durations of tasks that must be
//   completed by the workers. Specifically, each worker must complete two unique
//   tasks and can only work on one task at a time. The number of tasks will always
//   be equal to 2k such that each worker always has exactly two tasks
//   to complete. All tasks are independent of one another and can be completed in
//   any order. Workers will complete their assigned tasks in parallel, and the
//   time taken to complete all tasks will be equal to the time taken to complete
//   the longest pair of tasks (see the sample output for an explanation).

//   Write a function that returns the optimal assignment of tasks to each worker
//   such that the tasks are completed as fast as possible. Your function should
//   return a list of pairs, where each pair stores the indices of the tasks that
//   should be completed by one worker. The pairs should be in the following
//   format:[task1, task2], where the order of task1 and
//   task2 doesn't matter. Your function can return the pairs in any
//   order. If multiple optimal assignments exist, any correct answer will be
//   accepted.

//   Note: you'll always be given at least one worker (i.e., k will
//   always be greater than 0).

let k = 3;
let tasks = [1, 3, 5, 3, 1, 4];
// [1, 1, 3, 3, 4, 5];
// [1,2,3,4,5,6]

//Output = [[0,2],[4,5],[1,3]]

function taskAssignment(tasks) {
  const formattedTasks = tasks.map((value, index) => ({ value, index }));
  console.log(Object.entries(formattedTasks));
  formattedTasks.sort((a, b) => a.value - b.value);
  console.log("formatting...");
  console.log(Object.entries(formattedTasks));

  const res = [];
  let start = 0;
  let end = formattedTasks.length - 1;
  while (start < end) {
    console.log(`start: ${start}, end: ${end}`);
    res.push([formattedTasks[start].index, formattedTasks[end].index]);
    console.log(`res is : ${res}`);
    start++;
    console.log("start ++ => " + start);
    end--;
    console.log("end -- => " + end);
  }
  console.log("result is : ");
  console.log(res);
  return res;
}

taskAssignment(tasks);

// ❯ node TaskAssignments.js
// [
//   [ '0', { value: 1, index: 0 } ],
//   [ '1', { value: 3, index: 1 } ],
//   [ '2', { value: 5, index: 2 } ],
//   [ '3', { value: 3, index: 3 } ],
//   [ '4', { value: 1, index: 4 } ],
//   [ '5', { value: 4, index: 5 } ]
// ]
// formatting...
// [
//   [ '0', { value: 1, index: 0 } ],
//   [ '1', { value: 1, index: 4 } ],
//   [ '2', { value: 3, index: 1 } ],
//   [ '3', { value: 3, index: 3 } ],
//   [ '4', { value: 4, index: 5 } ],
//   [ '5', { value: 5, index: 2 } ]
// ]
// start: 0, end: 5
// res is : 0,2
// start ++ => 1
// end -- => 4
// start: 1, end: 4
// res is : 0,2,4,5
// start ++ => 2
// end -- => 3
// start: 2, end: 3
// res is : 0,2,4,5,1,3
// start ++ => 3
// end -- => 2
// result is :
// [ [ 0, 2 ], [ 4, 5 ], [ 1, 3 ] ]
