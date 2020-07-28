import React from "react"
import { render } from "@testing-library/react"
import BooksList from "./../components/booksList/BooksList"
import mockTodos from "../mock/mockTodos"
import user from "@testing-library/user-event"


describe("test books list", () => {
  test("should render an array of books list", () => {
    const mockDeleteBook = jest.fn()
    const mockUpdateBook = jest.fn()
    const mockArchiverBook = jest.fn()
    const BooksComponent = render(
      <BooksList deleteBook={mockDeleteBook} books={mockTodos}  />
    )
    expect(BooksComponent).toMatchSnapshot()
    // debug()
  })

  test("test the integration of BooksList and Book", () => {
    const mockDeleteBook = jest.fn()
    const mockUpdateBook = jest.fn()
    const mockArchiverBook = jest.fn()
    const mockBooksWithOneBook = [
      {
        id: "1",
        libéllé: "liib",
        auteur: "auteur",
        edition :"ed"
      },
    ]
    const { getByTestId } = render(
      <BooksList deleteBook={mockDeleteBook} books={mockBooksWithOneBook} updateBook={mockUpdateBook} archiverBook={mockArchiverBook} />
    )
    const DeleteBookButton = getByTestId("deleteBook")
    user.click(DeleteBookButton)
    expect(mockDeleteBook).toHaveBeenCalled()
    expect(mockDeleteBook).toHaveBeenCalledTimes(1)
    
  })
})