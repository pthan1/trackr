describe('Search and Adding Repos flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('User should be able to see a welcome message displayed', () => {
    cy.get('.landing-page').contains('Welcome to trackr!')
  })

  it('User should be able to select the public repo search input and fill it out with a keyword', () => {
    cy.get('input[type="text"]')
    .type('tetris')
    .should('have.value', 'tetris')
  })

  it('Should be able to submit a search and see search results', () => {
    cy.get('input[type="text"]')
    .type('tetris');

    cy.intercept('GET', 'https://api.github.com/search/repositories?q=tetris', { fixture: 'searchResults'} )
    .as('repo-search-tetris')
    .get('.repo-search-form').submit();

    cy.get('.repo-card')
    .first()
    .contains('chvin');
  })

    it('Should be able to track repo', () => {
      cy.get('input[type="text"]')
      .type('tetris');

      cy.intercept('GET', 'https://api.github.com/search/repositories?q=tetris', { fixture: 'searchResults'} )
      .as('repo-search-tetris')
      .get('.repo-search-form').submit();
  
      cy.intercept('POST', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
      .get('.add-repo-btn')
      .first()
      .click();
  })

  it('Should see a message after a repo has been tracked', () => {
      cy.get('input[type="text"]')
      .type('tetris');

      cy.intercept('GET', 'https://api.github.com/search/repositories?q=tetris', { fixture: 'searchResults'} )
      .as('repo-search-tetris')
      .get('.repo-search-form').submit();
  
      cy
      .intercept('POST', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
      .get('.add-repo-btn')
      .first()
      .click();

      cy.get('.repo-card')
      .contains('Tracking this repo!')

  })

})