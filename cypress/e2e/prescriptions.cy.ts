describe('Testing basic rendering', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have a hero', () => {
    cy.get('[data-testid="hero"]').should('exist');
  })
  it('should have a header', () => {
    cy.get('[data-testid="header"]').should('exist');
  })
  it('should have a prescription list', () => {
    cy.get('[data-testid="prescription-list"]').should('exist');
  })
  it('should have a filter and search box', () => {
    cy.get('[data-testid="filter-prescriptions-box"]').should('exist');
  })
})

describe('Testing filtering and search logic', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should show all items before searching', () => {
    cy.get('[data-testid="prescription-list-item"]').contains('Semper').should('exist');
    cy.get('[data-testid="prescription-list-item"]').contains('Xolair').should('exist');
  })
  it('should show correct items when searching', () => {
    cy.get('[data-testid="search"]').type('semper');
    cy.get('[data-testid="prescription-list-item"]').contains('Semper').should('exist');
    cy.get('[data-testid="prescription-list-item"]').contains('Xolair').should('not.exist');
  })
  it('should show all items before filtering', () => {
    cy.get('[data-testid="prescription-list-item"]').get('.in-stock').should('exist');
    cy.get('[data-testid="prescription-list-item"]').get('.out-of-stock').should('exist');
  })
  it('should show correct items when filtering on stock', () => {
    cy.get('[data-testid="filter"]').check();
    cy.get('[data-testid="prescription-list-item"]').get('.in-stock').should('exist');
    cy.get('[data-testid="prescription-list-item"]').get('.out-of-stock').should('not.exist');
  })
})

describe('Testing going to details page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-testid="search"]').type('levemir');
    cy.get('[data-testid="prescription-list-item"]').eq(0).click();
  })
  it('should switch to correct medicine view', () => {
    cy.get('[data-testid="header"]').contains('Levemir').should('exist');
  })
  it('detailed view should contain prescriber info and details about the medicine', () => {
    cy.get('[data-testid="prescriber-info"]').should('exist');
    cy.get('[data-testid="prescription-details"]').should('exist');
  })
  it('should have a back button, and when clicked should return to prescription-view', () => {
    cy.get('[data-testid="go-back-button"]').should('exist');
    cy.get('[data-testid="go-back-button"]').click();
    cy.get('[data-testid="prescription-list"]').should('exist');
  })
})