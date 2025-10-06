import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';


describe('GenreSelect Component', () => {

    const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

    test("Test that component renders all genres passed in props", () => {
        render(<GenreSelect genreList={genres} />);
        genres.forEach((genre) => {
            expect(screen.getByText(genre)).toBeInTheDocument();
        });
    });

    test("Test that component highlights a selected genre passed in props", () => {
        render(<GenreSelect genreList={genres} selectedGenre="HORROR" />);
        const activeGenre = screen.getByText("HORROR");
        expect(activeGenre).toHaveClass("active");
    });

    test('Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
        const mockOnSelect = jest.fn();
        render(
            <GenreSelect genreList={genres} onSelect={mockOnSelect} />
        );

        const genreToClick = screen.getByText("DOCUMENTARY");
        fireEvent.click(genreToClick);

        expect(mockOnSelect).toHaveBeenCalledTimes(1);
        expect(mockOnSelect).toHaveBeenCalledWith("DOCUMENTARY");
    });

});