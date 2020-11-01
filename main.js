const problems = require('./problems');

const input = process.argv[2];

switch (input) {
    case "1":
        console.log(problems.multiplesOf3And5(1000));
        break;
    case "2":
        console.log(problems.prob2(0, 1, 4000000));
        break;
    case "3":
        console.log(problems.prob3(600851475143));
        break;
    case "4":
        console.log(problems.prob4());
        break;
    case "6":
        console.log(problems.sumSquareDifference(100));
        break;
    default:
        console.log("enter a valid value;    ", input);
        break;
}