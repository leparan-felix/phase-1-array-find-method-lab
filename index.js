// code your solution here

function superbowlWin(record) {
    // Use find() to locate the first object with result "W"
    const win = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
}

// Example usage
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "2012", result: "L" },
    { year: "2011", result: "W" }
];

console.log(superbowlWin(record)); // Output: "2015"


console.log(superbowlWin(record)); // Output: "2015"

const record2 = [
    { year: "2016", result: "L" },
    { year: "2017", result: "L" },
    { year: "2018", result: "N/A" }
];

console.log(superbowlWin(record2)); // Output: undefined

const record3 = [
    { year: "2010", result: "W" },
    { year: "2011", result: "L" },
    { year: "2012", result: "W" }
];

console.log(superbowlWin(record3)); // Output: "2010"