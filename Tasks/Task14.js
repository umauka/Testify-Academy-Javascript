const books = {
    title: "Old Guard",
    Genre: "Fiction",
    pages: 223,
    reading: true,
    ToggleReadingStatus: function(){
        if(this.reading === true){
            this.reading = false
        }else{
            this.reading = true
        }
    }
}

books.ToggleReadingStatus()

console.log(books.reading)