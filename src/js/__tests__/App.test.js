import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";
import "jest"

afterEach(cleanup)
beforeEach(cleanup)

describe('checking increment button', () => {
  
  test('have increment button', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId(/increment/i).textContent).toBe('Click me')
  })

  test('should increment count on screen when clicked', () => {
    const { getByTestId } = render(<App />)
    fireEvent.click(getByTestId(/increment/i))
    expect(getByTestId(/output/i).textContent).toBe('1')
  })
  
})

describe('checkin reset button ', () => {
  
  test('have reset button', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId(/decrement/i).textContent).toBe('Reset')
  })

  test('should reset the count on screen when clicked', () => {
    const { getByTestId } = render(<App />)
    fireEvent.click(getByTestId(/decrement/i))
    expect(getByTestId(/output/i).textContent).toBe('0')
  })

})
