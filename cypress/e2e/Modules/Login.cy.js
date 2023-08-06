describe('Login',()=>{

    it('Verify using valid inputs',()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //username 
        cy.get("input[placeholder='Username']").type("Admin")

        //password
        cy.get("input[placeholder='Password']").type("admin123")

        //click on login 
        cy.get("button[type='submit']").click()

        //verify dashboard appearing
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")
    })

    it('Verify using invalid inputs',()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //username 
        cy.get("input[placeholder='Username']").type("gme")

        //password
        cy.get("input[placeholder='Password']").type("gme234")

        //click on login 
        cy.get("button[type='submit']").click()

        //verify getting error message
        cy.get('.oxd-alert').should('have.text',"Invalid credentials")
    })

    it('Verify using no inputs',()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        
        //click on login 
        cy.get("button[type='submit']").click()

        //verify getting message 'required' for username
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text',"Required")

        //verify getting message 'required' for password
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text',"Required")
    })

    it('Verify using invalid username and valid pass',()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //username 
        cy.get("input[placeholder='Username']").type("gme")

        //password
        cy.get("input[placeholder='Password']").type("admin123")

        
        //click on login 
        cy.get("button[type='submit']").click()

        //verify getting error message
        cy.get('.oxd-alert').should('have.text',"Invalid credentials")
    })

    it('Verify using valid username and invalid pass',()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //username 
        cy.get("input[placeholder='Username']").type("Admin")

        //password
        cy.get("input[placeholder='Password']").type("gme234")

        
        //click on login 
        cy.get("button[type='submit']").click()

        //verify getting error message
        cy.get('.oxd-alert').should('have.text',"Invalid credentials")
    })

    it('Verify using numbers',()=>{

        //visit url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //username 
        cy.get("input[placeholder='Username']").type("1234")

        //password
        cy.get("input[placeholder='Password']").type("1234")

        
        //click on login 
        cy.get("button[type='submit']").click()

        //verify getting error message
        cy.get('.oxd-alert').should('have.text',"Invalid credentials")
    })


})