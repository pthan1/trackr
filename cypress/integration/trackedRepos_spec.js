describe('Tracked Repos flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="text"]')
      .type('tetris');

      cy.intercept('GET', 'https://api.github.com/search/repositories?q=tetris', { fixture: 'searchResults' } )
      .as('repo-search-tetris')
      .get('.repo-search-form').submit();
  
      cy
      .intercept('POST', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
      .get('.add-repo-btn')
      .first()
      .click();
  })

  it('Should be able to navigate to the Tracked Repos screen after tracking a repo', () => {
  
    cy
    .intercept('GET', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
    .get('#tracked-repos')
    .click()
    .get('.tracked-repos')
    .contains('Tracked Repos')
  })

    it('Should be able to see tracked repos', () => {
    cy
    .intercept('GET', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
    .get('#tracked-repos')
    .click()
    .get('.repo-card')
    .first()
    .contains('javascript-tetris')
  })

    it('Should be able to untrack a repo', () => {
      cy
      .intercept('GET', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
      .get('#tracked-repos')
    .click()
      .get('.untrack-repo-btn')
      .should('exist')
  })

    it('Should not see a repo once it has been un-tracked', () => {
    cy
    .intercept('GET', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepos' })
    .get('#tracked-repos')
    .click();

      cy.intercept('DELETE', 'http://localhost:5000/api/v1/repos/2548674', { fixture: 'trackedReposAfterDelete' })
      .get('.untrack-repo-btn')
      .first()
      .click()
     .get('.repo-card')
    .first()
    .contains('blockrain.js')
  })

  it('Should see a message if there are no tracked repos', () => {
    cy
    .intercept('GET', 'http://localhost:5000/api/v1/repos', { fixture: 'trackedRepo' })
    .get('#tracked-repos')
    .click();

      cy.intercept('DELETE', 'http://localhost:5000/api/v1/repos/2548674', [])
      .get('.untrack-repo-btn')
      .first()
      .click()
     .get('.tracked-repos')
    .contains('There are no tracked repos')
  })


})