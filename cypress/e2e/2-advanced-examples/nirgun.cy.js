describe('User Signup and Login', () => {
    it('should successfully signup and login', () => {
      // Visit Signup page
      cy.visit('https://dev-fe.buttonshift.com/signup');
  
      // Fill out signup form
      cy.get('input[name="username"]').type('your_username');
      cy.get('input[name="email"]').type('your_email@example.com');
      cy.get('input[name="password"]').type('your_password');
      cy.get('input[name="confirmPassword"]').type('your_password');
      cy.get('button[type="submit"]').click();
  
      // Verify successful signup
      // Example assertion: expect logout button to exist
      cy.get('.logout-button').should('exist');
  
      // Visit Login page
      cy.visit('https://dev-fe.buttonshift.com/login');
  
      // Fill out login form
      cy.get('input[name="username"]').type('your_username');
      cy.get('input[name="password"]').type('your_password');
      cy.get('button[type="submit"]').click();
  
      // Verify successful login
      // Example assertion: expect logout button to exist
      cy.get('.logout-button').should('exist');
    });
  });
  describe('Form Validations', () => {
    it('should validate form fields', () => {
      // Visit Signup page
      cy.visit('https://dev-fe.buttonshift.com/signup');
  
      // Submit form without filling required fields
      cy.get('button[type="submit"]').click();
  
      // Validate error messages for required fields
      cy.contains('This field is required').should('exist');
  
      // Fill out invalid email format
      cy.get('input[name="email"]').type('invalid_email');
      cy.get('button[type="submit"]').click();
  
      // Validate error message for email format
      cy.contains('Invalid email format').should('exist');
  
      // Fill out password that does not meet requirements
      cy.get('input[name="password"]').type('short');
      cy.get('button[type="submit"]').click();
  
      // Validate error message for password requirements
      cy.contains('Password must be at least 8 characters long').should('exist');
    });
  });
    