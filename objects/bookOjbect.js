let bookObject  = {
    'title': "The Great Gatsby",
    'sub-title': "A Novel by F. Scott Fitzgerald",
    'author': "F. Scott Fitzgerald",
    'year-published': 1925,
    'publisher': "Charles Scribner's Sons",
    'ISBN': "9780743273565",
    'ratings': {
        'amazon': 4.4,
        'goodreads': 3.9,
        'flipkart': 4.2
    },

    get btitle() {
        return this.title;
    },
    set btitle(newTitle) {
        this.title = newTitle;
    }
    
}

console.log(bookObject.btitle); // Accessing title using getter
bookObject.btitle = 'The Great Gatsby - Updated Edition'; // Updating title using setter

console.log(bookObject.btitle);