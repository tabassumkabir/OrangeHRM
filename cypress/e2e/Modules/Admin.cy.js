import 'cypress-file-upload';

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
        cy.contains("Odis Adalwin").click()
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
        cy.contains("Odis Adalwin").click()
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
        cy.xpath("(//i[@class='oxd-icon bi-trash'])[1]").click({force:true})
        //click on yes, delete
        cy.get('.oxd-button--label-danger').click()
    })

    it('Jobs:pay grade',()=>{

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

    it('Jobs:edit pay grade',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //click on admin 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        //click on Jobs
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.wait(3000)
        //select pay grade
        cy.contains("Pay Grades").click()
        //click on edit on grade 3
        cy.get("div[class='orangehrm-container'] div:nth-child(3) div:nth-child(1) div:nth-child(4) div:nth-child(1) button:nth-child(2) i:nth-child(1)").click()
        //clear the input box
        cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").clear()
        //type in the input box
        cy.get(':nth-child(2) > .oxd-input').type("Grade three")
        //save it 
        cy.get("button[type='submit']").click()


    })

    it('Jobs:delete pay grade',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //click on admin 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        //click on Jobs
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.wait(3000)
        //select pay grade
        cy.contains("Pay Grades").click()
        //delete a pay grade
        cy.get("div:nth-child(5) div:nth-child(1) div:nth-child(4) div:nth-child(1) button:nth-child(1) i:nth-child(1)").click()
        //click on diaglouge box
        cy.get('.oxd-button--label-danger').click()

})

     it('Corporate branding',()=>{

     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.wait(3000)

     //click on admin 
     cy.get(':nth-child(1) > .oxd-main-menu-item').click()
     //click on more
     cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()
     //click on corporate branding
     cy.contains("Corporate Branding").click()
     //click on reset to deafult
     cy.get('.orangehrm-actions-group > :nth-child(1)').click()
     //primary font color 
     cy.get(':nth-child(3) > .oxd-input-group > .orangehrm-color-input-wrapper > .oxd-color-input > .oxd-color-input-preview').click()
     //choose a color
     cy.get('.oxd-color-picker-palette').click()
     //put the hex code 
     cy.get('.oxd-color-picker > .oxd-input').clear().type("#800000").type('{enter}')
     //upload a pic
     cy.xpath("(//input[@type='file'])[1]").selectFile('cypress/fixtures/Random.png',{force: true})
     cy.wait(5000)
     //click on publish 
    cy.get("button[type='submit']").click()
    
     


     })

     it('Email Configuration',()=>{

     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.wait(3000)

     //click on admin 
     cy.get(':nth-child(1) > .oxd-main-menu-item').click()
     //click on more
     cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()
     //click on configuration
     cy.xpath("(//a[@class='oxd-topbar-body-nav-tab-link --more'])[3]").click()
     //click on  email configuration
     cy.contains("Email Configuration").click()
     cy.wait(3000)
     //send as 
     cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").clear().type("123abc@gmail.com")
     //sendmail
     cy.get(':nth-child(3) > :nth-child(2) > .oxd-radio-wrapper > label').click()
     //checkbox
     cy.get('.oxd-switch-input').click()
     //test email
     cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").type("123abc@gmail.com")
     //click on save
     cy.get("button[type='submit']").click()



     })





})
