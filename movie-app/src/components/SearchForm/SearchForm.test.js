import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
    test('Test that component renders an input with the value equal to initial value passed in props', () => {
        render(<SearchForm initialQuery="The Dark Knight" />);
        const input = screen.getByPlaceholderText('What do you want to watch?');
        expect(input.value).toBe("The Dark Knight");
    });

    test('callsTest that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
        const mockFunction = jest.fn();
        render(<SearchForm onSearch={mockFunction} />);
        const input = screen.getByPlaceholderText("What do you want to watch?");

        fireEvent.change(input, { target: { value: "Interstellar" } });

        const button = screen.getByRole("button", { name: "search" });
        fireEvent.click(button);

        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith("Interstellar");
    });

    test('Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
        const mockFunction = jest.fn();
        render(<SearchForm onSearch={mockFunction} />);
        const input = screen.getByPlaceholderText("What do you want to watch?");

        fireEvent.change(input, { target: { value: "Spider Man" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith("Spider Man");
    });

});
