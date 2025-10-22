import { render, screen, fireEvent } from '@testing-library/react';
import SortControl from './SortControl';

describe('SortControl Component', () => {
    const sortByOptions = ['Release Date', 'Rating', 'Title'];
    const currentSelection = 'Rating';

    test('renders the sort label and all sort options', () => {
        const mockFunction = jest.fn();
        render(
            <SortControl
                sortByOptions={sortByOptions}
                currentSelection={currentSelection}
                handleSortControlChange={mockFunction}
            />
        );

        // /Sort by:/i - a regex with case-insensitive flag
        // screen.getByText("Sort by:") -  breaks if there is slight change in string (assuming this text is not important like some legal text or imp. UX element)
        expect(screen.getByText(/Sort by:/i)).toBeInTheDocument();

        // Check the select dropdown
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue(currentSelection);

        // Check that all options are rendered
        sortByOptions.forEach(option => {
            expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
        });
    });

    test('calls handleSortControlChange when selection changes', () => {
        const mockFunction = jest.fn();

        render(
            <SortControl
                sortByOptions={sortByOptions}
                currentSelection="Rating"
                handleSortControlChange={mockFunction}
            />
        );

        const select = screen.getByRole('combobox');

        fireEvent.change(select, { target: { value: 'Title' } });

        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('Title');
    });

    test('does not crash when no handleSortControlChange is provided', () => {
        render(
            <SortControl
                sortByOptions={sortByOptions}
                currentSelection="Rating"
            />
        );
        
        const select = screen.getByRole('combobox');

        // Should not throw if no handler is provided
        expect(() => {
            fireEvent.change(select, { target: { value: 'Release Date' } });
        }).not.toThrow();
    });

});


/**
When to Use Which
| Use Case	                    Best Method |
----------------------------------------------------
Headings or labels	            getByRole('heading')
Buttons	                        getByRole('button', { name })
Inputs, selects	                getByRole('textbox'), getByRole('combobox')
Static error message	        getByText("Invalid password")
Temporary helper text	        getByText(/This field is required/i)
Accessibility enforcement	    getByRole (preferred by RTL team)

Prefer getByRole for any element a user can interact with or navigate to.
Use getByText for pure text content.
 */