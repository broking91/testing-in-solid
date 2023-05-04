import Counter from "../components/Counter";
import { cleanup, fireEvent, render, screen, afterEach } from "@solidjs/testing-library";
import { describe, expect, it } from 'vitest';
import "@testing-library/jest-dom";


describe('counter', function () {
    
    it("shows up on screen",()=>{
        render(() => <Counter />);
        const span=screen.getByText('0');
        expect(span).toBeInTheDocument();
        // expect(span).toHaveTextContent("0");

    });
    // it("increses with click",async()=>{
    //     render(() => <Counter />);
    //     const button=screen.getByRole('button');

    //     fireEvent.click(button);
    //     await Promise.resolve();
    //     expect(button).toHaveTextContent("Count: 1");

    //     fireEvent.click(button);
    //     await Promise.resolve();
    //     expect(button).toHaveTextContent("Count: 2");
    // });
});
