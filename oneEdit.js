stringOne = "hello";
stringTwo = "hollo";

function oneEdit(stringOne, stringTwo) {
  if (stringOne.length === stringTwo.length) {
    return oneEditReplace(stringOne, stringTwo);
  } else if (stringOne.length + 1 === stringTwo.length) {
    return oneEditInsert(stringOne, stringTwo);
  } else if (stringOne.length - 1 === stringTwo.length) {
    return oneEditInsert(stringTwo, stringOne);
  }
}

function oneEditReplace(stringOne, stringTwo) {
  let foundDifference = false;
  let edit = 0;
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i] && edit <= 1) {
      if (!foundDifference) {
        foundDifference = true;
        edit++;
      }
      return false;
    }
  }
  return true;
}

function oneEditInsert(stringOne, stringTwo) {
  let indexOne = 0;
  let indexTwo = 0;
  let edit = 0;
  while (
    indexTwo < stringTwo.length &&
    indexOne < stringOne.length &&
    edit <= 1
  ) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (indexOne !== indexTwo) {
        return false;
      }
      indexTwo++;
      edit++;
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
}

// "hellel"
// "hello"
