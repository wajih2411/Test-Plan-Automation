describe('Authentication and Authorization Testing', () => {
    it('should evaluate the effectiveness of authentication and authorization controls', () => {
      cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/login', {
        statusCode: 200,
        body: {
          token: 'your-authentication-token' // Mock authentication token
        }
      }).as('loginRequest');
  
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
      cy.get('#email').type('wajih@gmail.com');
      cy.get('#password').type('nov022001');
      cy.get('#submit').click();
  
      cy.intercept('GET', 'https://thinking-tester-contact-list.herokuapp.com/protected-page', {
        statusCode: 200,
        body: 'This is a protected page' // Mock protected page content
      }).as('protectedPageRequest');
  
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/protected-page',
        followRedirect: true,
        headers: {
          Cookie: 'your-authentication-cookie' // Set authentication cookie here
        }
      }).then((response) => {
        expect(response.status).to.equal(200); // Verify successful response
        expect(response.body).to.include('Page Not Found'); // Verify page content
      });
    });
  });
  