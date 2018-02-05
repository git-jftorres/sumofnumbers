let list = [1, 2, 3, 4];

function sumFor (data) {

  let sum = 0;

  for (let i = 0; i < data.length; i++) {

    sum += data[i];

  }

  return sum;

}

//console.log(sumFor(list));

function sumWhile (data) {

  let sum = 0;
  let i = 0;

  while (i < data.length) {

    sum += data[i];

    i++;

  }

  return sum;

}

//console.log(sumWhile(list));

function sumRecursion (data) {

  if (data.length === 0) {

    return 0;

  }
  else {

    //console.log(data.length);
    return data[0] + sumRecursion(data.splice(1, data.length));

  }

}

//console.log(sumRecursion(list));

function sumTheSimpleWay (data) {

  return _.reduce(data, function (memo, num) { return memo + num; }, 0);

}

console.log(sumTheSimpleWay(list));