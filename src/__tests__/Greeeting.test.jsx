import Greeting from "../components/Greeting";
import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from 'vitest';
import "@testing-library/jest-dom";

describe('Greeting',()=>{ // name of the test
    it('should render the greeting', ()=>{ // purpose of this test | 'it' is alias of 'test'
    render(()=><Greeting/>); // renders element on to screen | different from react's render method , it takes function
    const h1= screen.getByRole('heading'); // name of the element to be tested
    expect(h1).toBeInTheDocument(); // should be present in the document
    expect(h1).toHaveTextContent('Hello World!'); // should display greeting 
    });
    
});