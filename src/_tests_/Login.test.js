import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import Login from "../components/login/Login"
import user from '@testing-library/user-event'
window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  }
}
describe("test login", () => { 
  
  test("should works without crashing", () => {
    const { debug } = render(<Login />)
    debug()
  })
  test("should contains username, password and a button", () => {
    const { debug, getByLabelText, getByTestId, getByText } = render(
      <Login/>
    )
    const username = getByLabelText(/_username/i)
    expect(username).toBeTruthy()
    expect(username).toHaveAttribute("type", "text")

    const password = getByLabelText(/_password/i)
    expect(password).toBeTruthy()
    expect(password).toHaveAttribute("type", "password")
    
    expect(getByTestId("submit")).toBeTruthy()
    expect(getByText(/connect/i)).toBeTruthy()

   })
  test("should fire events", async () => {
    const promise=Promise.resolve()
    //const mockAddTask = jest.fn(()=>promise)
    const { debug, getByLabelText, getByTestId } = render(
      <Login />
    )
    const username = getByLabelText(/_username/i)

    const fake_username="user"    

    user.type(username, fake_username)
    expect(username).toHaveValue(fake_username)
    
    const password = getByLabelText(/_password/i)
    const fake_password = "1234"

    user.type(password, fake_password)
    expect(password).toHaveValue(fake_password)
    
    
    const submitButton = getByTestId("submit")
    user.click(submitButton)
    await act(() => promise)
    /*
    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1) */
    
      

  })
   
})