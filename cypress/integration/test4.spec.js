//const { expect } = require("chai")



    

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
    //Option 1 (Option 2 at below)
    cy.get('#opentab').invoke('removeAttr','target').click()
    //Navigating browser controls
    cy.go('back')
    cy.url().should('include','rahul')

    //Option 2
    cy.get('#opentab').then(function($elem){
        
        const url=$elem.prop('href')
        cy.visit(url)
        cy.go('back')
    })

      //Handling web tables
      cy.get('tr td:nth-child(2)').each(($elem,index)=>{
        const txt=$elem.text()
        if(txt.includes('Python'))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const price_is=price.text()
                expect(price_is).to.equal('25')
            })
        }
    })

    //Handling Mouse Hover

    // cy.get('.mouse-hover-content').invoke('show')
    // cy.contains('Top').click()
    // cy.url().should('include','top')

    //Forcefully clicking on invisible element
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')

    })


  
        
        
})
