const { it } = require("mocha");

describe('transação de entrada e saída', () => {


//Função para otimizar UTL repetido    
beforeEach (() => {
    cy.visit("https://dev-finance.netlify.app/#")
})


it('criar uma nova transação de entrada',() => {

criarTransacao()

})

it('Remover uma transação de entrada',()=>{

criarTransacao()

cy.contains('cafe')
.parent()
.find('img[onclick]')
.click()

cy.get ('table tbody tr').should('have.length', 0)
});

    });

//Função para otimizar linhas repetidas
const criarTransacao = () => {

cy.contains("Nova Transação").click()
cy.get('#description').type('cafe')
cy.get('#amount').type(6)
cy.get('#date').type('2024-07-31')
cy.contains("Salvar").click()

}
  