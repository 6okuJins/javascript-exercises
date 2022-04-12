const findTheOldest = function(people) {
    const year = (new Date()).getFullYear();
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = ("yearOfDeath" in oldestPerson) ?
                        oldestPerson.yearOfDeath - oldestPerson.yearOfBirth :
                        year - oldestPerson.yearOfBirth;
        const currentAge = ("yearOfDeath" in currentPerson) ?
                        currentPerson.yearOfDeath - currentPerson.yearOfBirth:
                        year - currentPerson.yearOfBirth;
        return ((oldestAge > currentAge) ? oldestPerson : currentPerson);
    });
    return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
