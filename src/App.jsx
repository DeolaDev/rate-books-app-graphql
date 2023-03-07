import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { Button, Flex, Heading, TextField, View } from "@aws-amplify/ui-react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { listBooks, listS3Books } from "./graphql/queries";
import {
  createBook as createBookMutation,
  deleteBook as deleteBookMutation,
} from "./graphql/mutations";
import Footer from "./components/footer";

function App() {
  const [books, setBooks] = useState([]);
  const [s3books, setS3Books] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    fetchS3Books();
  }, []);

  /* Call this function to get the items in the Books database */
  async function fetchBooks() {
    const apiData = await API.graphql({ query: listBooks });
    const booksFromAPI = apiData.data.listBooks.items;
    setBooks(booksFromAPI);
  }
  /* Call this function to get the items in the S3Books database */
  const fetchS3Books = async () => {
    try {
      const s3BookData = await API.graphql(graphqlOperation(listS3Books));
      const s3BookList = s3BookData.data.listS3Books.items;
      setS3Books(s3BookList);
    } catch (error) {
      console.log("error", error);
    }
  };
  /* Create a new entry from user form entry */
  async function createBook(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      title: form.get("title"),
      author: form.get("author"),
      rating: form.get("rating"),
    };
    await API.graphql({
      query: createBookMutation,
      variables: { input: data },
    });
    fetchBooks();
    event.target.reset();
  }
  /* Delete a record when the user clicks on the delete button */
  async function deleteBook({ id }) {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    await API.graphql({
      query: deleteBookMutation,
      variables: { input: { id } },
    });
  }

  /* display 2 tables with records from the 2 databases */
  return (
    <View className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <View as="form" margin="5rem 0" onSubmit={createBook}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="title"
              placeholder="Book Title"
              label="Book Title"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="author"
              placeholder="Book Author"
              label="Book Author"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="rating"
              placeholder="Your Rating"
              label="Your Rating"
              labelHidden
              variation="quiet"
              required
            />
            <Button type="submit" variation="primary">
              Submit
            </Button>
          </Flex>
        </View>

        <View>
          <Heading level={2} margin="3rem 0" width="100%">
            User Submitted Ratings
          </Heading>
          <Table class="center" width="70%">
            <TableHead>
              <TableRow>
                <TableCell as="th">Book Title</TableCell>
                <TableCell as="th">Author</TableCell>
                <TableCell as="th">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id || book.title}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.rating}</TableCell>
                  <Button variation="link" onClick={() => deleteBook(book)}>
                    Delete Book rating
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Heading level={2} margin="3rem 0">
            Ratings directly from DynamoDB table <br></br>populated dynamically
            with data from CSV files uploaded to an Amazon S3 bucket
          </Heading>
          <Table class="center">
            <TableHead>
              <TableRow>
                <TableCell as="th">Book Title</TableCell>
                <TableCell as="th">Author</TableCell>
                <TableCell as="th">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {s3books.map((s3book) => (
                <TableRow key={s3book.id || s3book.title} margin="6rem 0">
                  <TableCell>{s3book.title}</TableCell>
                  <TableCell>{s3book.author}</TableCell>
                  <TableCell>{s3book.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </View>
      </body>
      <View>
        <Footer />
      </View>
    </View>
  );
}

export default App;
