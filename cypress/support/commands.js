// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (loginName, password) => {
    if (!loginName) {
        loginName = Cypress.env('CP_LOGIN')
    }

    if (!password) {
        password = Cypress.env('CP_PASSWORD')
    }

    cy.request('POST', Cypress.env('SITE_URL') + 'index.php?p=admin/actions/users/login', {
        loginName,
        password
    })
})

Cypress.Commands.add("runAudit", () => {
    // cy.lighthouse()
    cy.pa11y({
        runners: ['htmlcs'],
        threshold: 20,
        standard: 'WCAG2AA',
    });
})