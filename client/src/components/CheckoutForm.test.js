import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />)

    const header = screen.queryByText(/React Plants 🌿/i)

    expect(header).toBeTruthy
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)
    
    const fNameInput = screen.getByLabelText(/First Name:/i)
    const lNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)
    const button = screen.getByRole('button')
    
    userEvent.type(fNameInput, 'Firstname')
    userEvent.type(lNameInput, 'Lastname')
    userEvent.type(addressInput, '123 Address Way')
    userEvent.type(cityInput, 'Cityville')
    userEvent.type(stateInput, 'Stateland')
    userEvent.type(zipInput, '12345-6789')
    userEvent.click(button)
    
    const name = 'Firstname Lastname' 
    const addy = '123 Address Way'
    const addy2= 'Cityville, Stateland 12345-6789'
    
    expect(name).toBeInTheDocument
    expect(addy).toBeInTheDocument
    expect(addy2).toBeInTheDocument 
});
