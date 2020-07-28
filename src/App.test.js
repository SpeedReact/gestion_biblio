import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  }
}
describe("test app", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div")  
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})