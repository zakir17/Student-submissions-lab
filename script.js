const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 98, date: "2020-04-22", passed: true },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: score >= 60,
  };
  array.push(newObject);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

const deleteSubmissionByName = (array, name) => {
  let findName = array.findIndex((element) => {
    return element.name === name;
  });
  array.splice(findName, 1);
};

const editSubmission = (array, index, score) => {
  array[index].score = score;
  if (array[index].score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
  return array;
};

console.log(editSubmission(submissions, 1, 80));

const findSubmissionByName = (array, name) => {
  return array.find((students) => {
    return students.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Jill"));

let num = [];
const findLowestScore = (array) => {
  for (let i = 0; i < array.length; i++) {
    num.push(array[i].score);
  }
  let lowest = Math.min(...num);
  return lowest;
};

findLowestScore(submissions);

console.log(findLowestScore(submissions));

let sum = 0;
let average = null;
const findAverageScore = (array) => {
  for (element of array) {
    sum += element.score;
    average = sum / array.length;
  }
  return average;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((element) => {
    return element.passed === true;
  });
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((element) => {
    return element.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));
