import React from "react"
import { render } from "@testing-library/react"
import BooksList from "../components/booksList/BooksList"
import mockList from "../mock/MockList"
import user from "@testing-library/user-event"

describe("test books list", () => {
  test("should render an array of books list", () => {
    const mockDeleteBook = jest.fn()
    const mockEditBook = jest.fn()
    const mockArchivateBook = jest.fn()
    const BooksComponent = render(
      <BooksList 
      deleteBook={mockDeleteBook} 
      updateBook={mockEditBook}
      archiverBook={mockArchivateBook}
      books={mockList} 
      />
    )
    expect(BooksComponent).toMatchSnapshot()
  })


  test("test the integration of BooksList and Book", () => {
    const mockDeleteBook = jest.fn()
    const mockUpdateBook = jest.fn()
    const mockArchivateBook = jest.fn()
    const mockBooksWithOneBook = [
      {id:1,
      libéllé:"lib 22",
      auteur:"auteur",
      edition:"edition",
      nb_exemplaire:2,
      nb_page: 500,
      date_parution: "2020-03-06",
      archiver:"non",
      nb_livre_emprunter:0},
    ]
    const { getByTestId } = render(
      <BooksList 
      books={mockBooksWithOneBook} 
      deleteBook={mockDeleteBook} 
      updateBook={mockUpdateBook} 
      archiverBook={mockArchivateBook} />
    )
    const DeleteBookButton = getByTestId("deleteBook")
    user.click(DeleteBookButton)
    expect(mockDeleteBook).toHaveBeenCalled()
    expect(mockDeleteBook).toHaveBeenCalledTimes(1)
    
  })

})