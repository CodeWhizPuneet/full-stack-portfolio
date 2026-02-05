import { useState } from "react";

function LibraryPage() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title.trim() || !author.trim()) {
      alert("Please enter both Title and Author");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Experiment 3.2 - Library Management</h1>

      <p><strong>Total Books:</strong> {books.length}</p>

      <input
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addBook} style={buttonStyle}>Add Book</button>
      </div>

      {filteredBooks.map((book) => (
        <div key={book.id} style={cardStyle}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button onClick={() => removeBook(book.id)} style={removeButton}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

const inputStyle = {
  padding: "8px",
  marginRight: "10px",
  marginTop: "10px",
};

const buttonStyle = {
  padding: "8px 12px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

const removeButton = {
  padding: "6px 10px",
  background: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

const cardStyle = {
  background: "white",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

export default LibraryPage;