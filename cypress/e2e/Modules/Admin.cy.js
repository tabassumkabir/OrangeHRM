describe('Admin',()=>{

    beforeEach('login',()=>{

        cy.login('Admin','admin123')
    })


    it('Add new user',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //click on admin 
        cy.get('.oxd-main-menu-item.active').click()
    })
})