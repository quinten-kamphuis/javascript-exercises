const getTheTitles = (arr) => {
    const array = [];
    arr.forEach(elem => {
        array.push(elem.title);
    })
    return array;
};

getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ])

// Do not edit below this line
module.exports = getTheTitles;
