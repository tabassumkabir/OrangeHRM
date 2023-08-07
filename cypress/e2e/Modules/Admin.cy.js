require('cypress-xpath')

describe('Admin',()=>{

    beforeEach('login',()=>{

        cy.login('Admin','admin123')
    })


    it('Add new user',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //click on admin 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        //username
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type("new")
        //user role
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        //select ess
        cy.contains('ESS').click()
        //type employee name
        cy.get("input[placeholder='Type for hints...']").type("Admin")
        //status 
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
        //select status 
        cy.contains('Enabled').click()
        //click on add button 
        cy.get('.orangehrm-header-container > .oxd-button').click()

        cy.wait(3000)

        //user role click 
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()
        //select role
        cy.contains("ESS").click()
        //employee name
        cy.get("input[placeholder='Type for hints...']").type("Admin")
        //status 
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()
        //select status
        cy.contains("Enabled")
        //username
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type("new")
        //pass
        cy.xpath("(//input[@type='password'])[1]").type("admin123")
        //confirm pass
        cy.get("//input[@type='password'])[2]").type("admin123")
        //click on save
        cy.get("button[type='submit']").click()


    })
})
