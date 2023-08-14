require ('cypress-xpath')
describe('Leave',()=>{

    beforeEach('Login',()=>{
        cy.login('Admin','admin123')
    })

    it('My leave',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //click on  leave
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        //click on my leave 
        cy.xpath("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
        //click on from date
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click({force: true})
        cy.contains("Today").click()
        //clear leave with status 
        cy.xpath("//span[normalize-space()='Rejected']//i").click({force: true} )
        cy.xpath("//span[normalize-space()='Cancelled']//i").click({force: true} )
        cy.xpath("//span[normalize-space()='Pending Approval']//i").click({force: true} )
        cy.xpath("//span[normalize-space()='Scheduled']//i").click({force: true} )
        cy.xpath("//span[normalize-space()='Taken']//i").click({force: true} )

        
        //show leave with status
        cy.get('.oxd-multiselect-wrapper > .oxd-select-text').click()
        cy.contains('Rejected').click()
        //leave type
        cy.get("div[class='oxd-select-wrapper'] i[class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").click({force: true})
        cy.wait(3000)
        cy.contains("CAN - FMLA").click()
        //click on search 
        cy.get('.oxd-button--secondary').click()
        
    })

    
})