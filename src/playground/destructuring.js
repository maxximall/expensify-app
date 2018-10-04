const book = {
    title: "The Lean Startup",
    author: "Eric Ries",
    publisher: {
        name: 'Crown Publishing Group'
    }
}
const {title , author} = book;
const {name: publisherName = 'Self Published'} = book.publisher;
console.log(`${title} by ${author}, published by ${publisherName}`)


const address = ['Shoreditch', 'London', 'UK' , 'Europe'];
const [area, city, , continent = 'Planet Earth'] = address;
console.log(`I live in ${area}, ${city}, ${continent}`)