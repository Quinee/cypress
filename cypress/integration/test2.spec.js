    

describe('Second test suite',()=>{
    it('Second test case',()=>{
        cy .visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4  )
        //Psrent child chaining
        cy.get('.products').find('.product').should('have.length',4)

       // cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
       cy.get('.products').as('pf')
        cy.get('@pf').find('.product').each(($elem)=>{
            var vegname=$elem.find('h4.product-name').text()
            if(vegname.includes('Carrot'))
            {
                $elem.find('button').trigger('click')
            }

        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()
       
    })
})