console.log('welcome pranav ');
class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });

    }
    issueBook(bookname,user){
        if (this.issuedBooks[bookname] == undefined){
        this.issuedBooks[bookname] = user;
        }
        else{
            console.log(" This Book is Already issued .");
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];

    }
}