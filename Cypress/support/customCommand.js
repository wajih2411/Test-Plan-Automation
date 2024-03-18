Cypress.Commands.add('visitAndInteract', (url, action, options = {}) => {
    cy.visit(url);

    switch(action) {
        case 'login':
            cy.get(options.usernameSelector).type(options.username);
            cy.get(options.passwordSelector).type(options.password);
            cy.get(options.submitButtonSelector).click();
            break;
    }
});