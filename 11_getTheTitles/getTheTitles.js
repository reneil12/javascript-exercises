const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

const getTheTitles = function(arr) {
    const getTitles = arr.map((book)=> {
        return book.title;
    })
    return getTitles;
};
getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
