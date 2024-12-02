import { useState } from "react";

const Bookshelf = (props) => {
  const [books, setBooks] = useState([
    {title: 'The Hidden Messages in Water', author: 'Masaru Emoto'},
    {title: 'How To Be Black', author: 'Baratunde Thurston'},
    {title: 'The 48 Laws of Power', author: 'Robert Greene'},
  ])

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  })

  const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({ title: '', author:'' })
  }

  return (
    <div className="bookshelfDiv">

      <div className="formDiv">
        <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>

      <label htmlFor="title">Title:</label>
             <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange}></input>
    
      <label htmlFor="author">Author:</label>
         <input
          id="author"
          name="author" 
          value={newBook.author}
          onChange={handleInputChange}></input>
         <button type="submit">Add book</button>
      </form>
      </div>

      <div className="bookCardsDiv">
          {books?.map((book, index)=> {
              return(
                  <div className="bookCard" key={index}>
                   <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                  </div>
                    )
                })}      
            </div>
        </div>
)
}


export default Bookshelf;