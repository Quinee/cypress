


    

describe('Third test suite',()=>{
    it('Third test case',()=>{
        cy .visit("https://rahulshettyacademy.com/AutomationPractice/#/")

        //Checkboxes
        cy.get('#checkBoxOption1').check().should("be.checked").and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get("input[type='checkbox']").check(['option1','option3'])

        //static Dropdowns
        cy.get('select').select('option1').should('have.value','option1')

        //Dynamic dropdowns

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($elem)=>{
            let val=$elem.text()
            cy.log("HI "+val)
            cy.log(typeof val)
              if(val==='India')
                  $elem.trigger('click')
        })

        //Handling visible and invisible elems using Chai Assertions

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio buttons

        cy.get("input[value='radio1']").check().should('be.checked')
        
        
})
})