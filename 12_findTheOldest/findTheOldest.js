const findTheOldest = function(people) {
    let currentDate = new Date().getFullYear()

    people.sort((personA, personB) => {        
        if (!personA.yearOfDeath) personA["yearOfDeath"] = currentDate
        else if (!personB.yearOfDeath) personB["yearOfDeath"] = currentDate
       
        ageA = personA.yearOfDeath - personA.yearOfBirth
        ageB = personB.yearOfDeath - personB.yearOfBirth

        return ageB - ageA
    })

    return people[0]
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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
console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
