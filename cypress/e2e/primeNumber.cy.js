describe('Prime Number Finder', () => {
  it('Can find the primes between 1 and 10', () => {
    cy.visit('primeNumbers.html')
	cy.get('input')
      .type('1-10')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'The list of prime numbers between those numbers are: 2, 3, 5, 7')
  })
  
  it('Can find the primes between 1 and 10 inversed', () => {
    cy.visit('primeNumbers.html')
	cy.get('input')
      .type('10-1')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'The list of prime numbers between those numbers are: 2, 3, 5, 7')
  })
  
  it('Can find the primes between 7900 and 7920', () => {
    cy.visit('primeNumbers.html')
	cy.get('input')
      .type('7900-7920')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'The list of prime numbers between those numbers are: 7901, 7907, 7919')
  })
  
  it('Can handle negative numbers even though none are prime', () => {
    cy.visit('primeNumbers.html')
	cy.get('input')
      .type('-30--40')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'There are no prime numbers within the range specified.')
  })
  
  it('Can handle negative and positive numbers', () => {
    cy.visit('primeNumbers.html')
	cy.get('input')
      .type('30--40')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'The list of prime numbers between those numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29')
	cy.get('input')
	  .clear()
	cy.get('input')
      .type('-30-40')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'The list of prime numbers between those numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37')
  })
  
  it('Makes sure the input is entered correctly', () => {
    cy.visit('primeNumbers.html')
	cy.get('input')
      .type('1 and 10')
      .type('{enter}')
	cy.get('p')
	  .should('have.text', 'The input you entered did not have the format: number-number. Please try again.')
  })
})