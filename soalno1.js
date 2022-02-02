const myusers = [
    {name: 'jerapah', totalSpecies: 200},
    {name: 'kucing', totalSpecies: 450},
    {name: 'kelinci', totalSpecies: 570},
    {name: 'buaya', totalSpecies: 780},
];

const  useByTotalSpecies = myusers.map(item => {
    const container = {};

    container [item.name] = item.totalSpecies;
    container.age = item.name.length * 10;

    return container;
})

console.log(useByTotalSpecies);