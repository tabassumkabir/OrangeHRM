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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress-xpath"/>

///<reference types="cypress"/>

Cypress.Commands.add('login', (username,password)=>{

    cy.session([username,password],()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //username 
        cy.get("input[placeholder='Username']").type(username)

        //password
        cy.get("input[placeholder='Password']").type(password)

        //click on login 
        cy.get("button[type='submit']").click()

        //verify dashboard appearing
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")
    })
})