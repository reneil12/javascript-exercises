const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  const findTheOldest = function(arr) {
    const oldest = arr.map((person) => {
        if(!person.yearOfDeath){
            person.yearOfDeath = 2023;
            console.log("none");
        }
        return person.yearOfDeath - person.yearOfBirth;
    })
    let oldestPerson = 0;
    for (let i = 0; i < oldest.length - 1; i++){
        if (oldest[i] > oldestPerson){
            oldestIndex = i;
            oldestPerson = oldest[i];
        }
    console.log(oldestIndex);
    }
    console.log(oldestIndex);
    return people[oldestIndex];
};

findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
