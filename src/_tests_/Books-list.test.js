import React from "react"
import { render } from "@testing-library/react"
import BooksList from "./../components/booksList/BooksList"
import mockList from "../mock/MockList"
import user from "@testing-library/user-event"

describe("test tasks list", () => {
  test("should render an array of tasks list", () => {
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

})