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
        cy.get("input[placeholder='Type for hints...']").type("a")
        cy.wait(5000)
        //select employee
        cy.contains("Hayat A").click()
        //status 
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
        //select status 
        cy.contains('Enabled').click()
        //click on add button 
        cy.contains('Add').click({force: true})

        cy.wait(3000)

        //user role click 
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()
        //select role
        cy.contains("ESS").click()
        cy.get("input[placeholder='Type for hints...']").type("a")
        cy.wait(5000)
        //select employee
        cy.contains("Hayat A").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()
        //select status
        cy.contains("Enabled").click()
        //username
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type("new admin123")
        //pass
        cy.xpath("(//input[@type='password'])[1]").type("admin123")
        //confirm pass
        cy.xpath("(//input[@type='password'])[2]").type("admin123")
        //click on save
        cy.get("button[type='submit']").click()


    })

    it('Delete an employee',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //click on admin 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        //select the delete button 
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
        //click on yes, delete
        cy.get('.oxd-button--label-danger').click()
    })

    it.only('Jobs',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //click on admin 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        //click on Jobs
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.wait(3000)
        //select pay grade
        cy.contains("Pay Grades").click()
        cy.wait(3000)
        //select grade 3
        cy.get(':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label').click()

    })
})
