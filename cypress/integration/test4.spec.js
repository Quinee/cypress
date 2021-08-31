


    

describe('4th test suite',()=>{
    it('4th test case',()=>{
        cy .visit("https://rahulshettyacademy.com/AutomationPractice/#/")

       

        //Window alert confirmbtn
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
            //cy.log("QB")
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            //cy.log("QB")
        })

    //Handling child tabs
    cy.get('#opentab').invoke('removeAttr','target').click()
    //Navigating browser controls
    cy.go('back')
    cy.url().should('include','rahul')

    })
        
        
})
