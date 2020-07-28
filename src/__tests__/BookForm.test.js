import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import BookForm from "../components/bookForm/BookForm"
import user from '@testing-library/user-event'

describe("test add book", () => { 
  

  test("should works without crashing", () => {
    const mockAddBook = jest.fn()
    const { debug } = render(<BookForm addBook={mockAddBook} />)
    // debug()
  })


  test("should contains book libélle, auteur ,edition , nb exemplaire ,date-parution ,nb page and a button", () => {
    const mockAddBook = jest.fn()
    const { debug, getByLabelText, getByTestId, getByText } = render(
      <BookForm addBook={mockAddBook} />
    )
    const input = getByLabelText(/libéllé/i)
    // debug(input)
     expect(input).toBeTruthy()
     expect(input).toHaveAttribute("type", "text")

    const inputAuteur = getByLabelText(/auteur/i)
    expect(inputAuteur).toBeTruthy()
    // // debug(inputAuteur)
    expect(inputAuteur).toHaveAttribute("type", "text")

    const inputEdition= getByLabelText(/edition/i)
    expect(inputEdition).toBeTruthy()
    // // debug(inputedition)
    expect(inputEdition).toHaveAttribute("type", "text")

    const inputnb_exemplaire= getByLabelText(/nb_exemplaire/i)
    expect(inputnb_exemplaire).toBeTruthy()
    // // debug(inputnbExemplaire)
    expect(inputnb_exemplaire).toHaveAttribute("type", "number")


    const inputnb_page= getByLabelText(/nb_page/i)
    expect(inputnb_page).toBeTruthy()
    // // debug(inputnbpage)
    expect(inputnb_page).toHaveAttribute("type", "number")

    const inputdate_parution= getByLabelText(/date_parution/i)
    expect(inputdate_parution).toBeTruthy()
    // // debug(inputdate_parution)
    expect(inputdate_parution).toHaveAttribute("type", "date")

    
    expect(getByTestId("submit")).toBeTruthy()
      expect(getByText(/add a book/i)).toBeTruthy()

   })

  test("should fire events", async () => {
    const promise=Promise.resolve()
    const mockAddBook = jest.fn(()=>promise)
    const { debug, getByLabelText, getByTestId } = render(
      <BookForm addBook={mockAddBook} />
    )
    const input = getByLabelText(/libéllé/i)

    const bookValue="libéllé 1"    

    user.type(input, bookValue)
  
    expect(input).toHaveValue(bookValue)
    
    const inputEdition = getByLabelText(/edition/i)
    const editionValue = "edition 1"
    user.type(inputEdition, inputEdition)
    expect(inputEdition).toHaveValue(editionValue)


    const inputnb_exemplaire = getByLabelText(/edition/i)
    const nb_exemplaireValue = 0
    user.type(inputnb_exemplaire, inputnb_exemplaire)
    expect(inputnb_exemplaire).toHaveValue(nb_exemplaireValue)
    
    
    const submitButton = getByTestId("submit")
    // fireEvent.click(submitButton)
    user.click(submitButton)
    await act(() => promise)
    
    expect(mockAddBook).toHaveBeenCalled()
    expect(mockAddBook).toHaveBeenCalledTimes(1) 
    
      

  })

   test("should display an error", () => {
     const mockAddBook = jest.fn()
     const {  getByLabelText, getByTestId, queryByTestId, container } = render(
       <BookForm addBook={mockAddBook} />
     )
    
     const inputnbExemplaire = getByLabelText(/nb_exemplaire/i)
     const nbExemplaireValue = "5"

     user.type(inputnbExemplaire, nbExemplaireValue)


     expect(getByTestId("error-nbexemplaire")).toBeTruthy()
    //  debug(container)
    //  expect(getByTestId("error-duration")).toHaveTextContent(
    //    /The duration must be less than/i)
   })

    test("should not display an error", () => {
      const mockAddBook = jest.fn()
      const {
        debug,
        getByLabelText,
        getByTestId,
        queryByTestId,
        rerender,
      } = render(<BookForm addTask={mockAddBook} />)

      const inputnbExemplaire = getByLabelText(/nb_exemplaire/i)
      let  nbExemplaireValue = "0"

    
      fireEvent.change(inputnbExemplaire, { target: { value:  nbExemplaireValue } })
      expect(queryByTestId("error-nb_exemplaire")).toBeNull()



     
    })
})
