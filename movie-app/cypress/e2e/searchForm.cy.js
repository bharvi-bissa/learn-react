describe('SearchForm Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('renders input with initial value passed via props', () => {
        cy.get('[data-cy="search-input"]')
            .should('have.value', 'The Dark Knight');
    });

    it('calls onSearch with correct value after clicking the search button', () => {
        const testQuery = 'Spider Man';

        cy.window().then((win) => {
            //Replaces console.log with a spy (wrapper), Stores that spy under an alias @consoleLog
            cy.spy(win.console, 'log').as('consoleLog');
        });

        cy.get('[data-cy="search-input"]')
            .clear()
            .type(testQuery);

        cy.contains('button', 'search').click();

        cy.get('@consoleLog')
            .should('have.been.calledWith', 'Searching for:', testQuery);
    });

    it('calls onSearch with correct value after pressing Enter key', () => {
        const testQuery = 'Spider Man';

        cy.window().then((win) => {
            cy.spy(win.console, 'log').as('consoleLog');
        });

        cy.get('[data-cy="search-input"]')
            .clear()
            .type(`${testQuery}{enter}`);

        cy.get('@consoleLog')
            .should('have.been.calledWith', 'Searching for:', testQuery);
    });

});