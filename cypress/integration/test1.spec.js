    

describe('First test suite',()=>{
    it('First test case',()=>{
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

        // const val=cy.get('.brand')
        // cy.log(val.text())
        //pro,ises does nt wrk because we r manipu;ating the origin; behavr pf cypress
        //so we manually handle the promise

        cy.get('.brand').then(function(val){
            cy.log(val.text())
        })
        //assert of text is as per expected
        cy.get('.brand').should('have.text','GREENKART')
    })
})