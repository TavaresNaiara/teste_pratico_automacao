  // Teste prático feito no dia 18.02.2026 Por: Naiara Tavares
  //Nome: "maria" Telefone: "71 98247-8127" E-mail: "maria@sunrise.com.br"


 //Cenario de teste 1, sem o preenchimento de todos os campos e clicar no avançar
describe('Teste de inscrever-se', () => {
  it('Incrito com sucesso', () => {
  cy.visit('https://qualidade.apprbs.com.br/certificacao')

    // Garante que a página terminou de carregar
    cy.document()
      .its('readyState')
      .should('eq', 'complete')

    //  Garante que o objeto global do formulário existe
    cy.window()
      .its('ActionsForm')
      .should('exist')

    cy.get('[name="pessoa.nome"]')
      .should('be.visible')
      .and('not.be.disabled')
      .type('maria')
    cy.get('[name="pessoa.telefonePrincipal"]').type('71 98247-8127')
    cy.get('[name="pessoa.emailPrincipal"]').type('maria@sunrise.com.br')
    cy.get('[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]').click()


  })
  //Cenario de teste 2, sem o preenchimento do campo obrigatório "e-mail" o botão "avançar" fica Bloqueado
  it('Botão De "entar bloqueado" ', () => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
     cy.document()
      .its('readyState')
      .should('eq', 'complete')
      cy.window()
      .its('ActionsForm')
      .should('exist')


    cy.get('[name="pessoa.nome"]').type('maria')
    cy.get('[name="pessoa.telefonePrincipal"]').type('71 98247-8127')
    // sem o e-mail
     cy.get('#rbBtnNext')
    .should('be.disabled')

     })
     //Cenario de teste 3, sem o preenchimento do campo obrigatório "e-mail" verifica a mensagem de erro 
     // Mensagem:"Preencha este campo"
     it('Deve exibir erro ao não preencher email', () => {

    cy.visit('https://qualidade.apprbs.com.br/certificacao')

    cy.document().its('readyState').should('eq', 'complete')
    cy.window().its('ActionsForm').should('exist')

    cy.get('[name="pessoa.nome"]').type('maria')
    cy.get('[name="pessoa.telefonePrincipal"]').type('71 98247-8127')

   cy.get('[name="pessoa.emailPrincipal"]')
    .click()
    .blur()
   cy.get('#rbFormContent > :nth-child(3) > :nth-child(3) > [name="validationMessage"]')
  .should('be.visible')
  .and('contain', 'Preencha este campo')

})
//Cenario de teste 4, com o preenchimento do e-mail o botão deve ficar desbloqueado e possivél de clicar "
it('Deve permitir avançar preenchendo apenas o email', () => {

  cy.visit('https://qualidade.apprbs.com.br/certificacao')

  cy.document().its('readyState').should('eq', 'complete')
  cy.window().its('ActionsForm').should('exist')

  // Preenche apenas o email
  cy.get('[name="pessoa.emailPrincipal"]')
    .type('maria@sunrise.com.br')
    .blur()


  cy.get('#rbBtnNext')
    .should('not.be.disabled')
    .click()

})
})