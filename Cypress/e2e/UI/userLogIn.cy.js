describe('User Login', () => {
  it('should successfully login with valid credentials', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

    cy.get('#email').type('wajih@gmail.com');
    cy.get('#password').type('nov022001');

    cy.get('#submit').click();
  });
});
