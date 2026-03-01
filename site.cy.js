  // Teste prático feito no dia 18.02.2026 Por: Naiara Tavares
  //Nome: "maria" Telefone: "71 98247-8127" E-mail: "maria@sunrise.com.br"

  //Cenario de teste 1, sem o preenchimento de todos os campos e clicar no botão "concluir"

describe('Teste "não fique de fora"', () => {
  it('Teste sucesso', () => {
    cy.visit('https://qualidade.apprbs.com.br/site')
    // Garante que a página terminou de carregar
    cy.document()
      .its('readyState')
      .should('eq', 'complete')

    cy.window()
      .its('ActionsForm')
      .should('exist')
    cy.get('[name="pessoa.nome"]').should('be.visible')
      .and('not.be.disabled').type('maria')
      cy.get('[name="pessoa.emailPrincipal"]').type('maria@sunrise.com.br')
      cy.get('[name="pessoa.telefonePrincipal"]').type('71 98247-8127')
      cy.get('[name="rbActionsFormContainer"]').click()

  })

   //Cenario de teste 2, sem o preenchimento do campo obrigatório "e-mail" o botão "Concluir" fica Bloqueado
  it('Botão De "entar bloqueado" sem o e-mail', () => {
    cy.visit('https://qualidade.apprbs.com.br/site')
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
     //Cenario de teste 3, sem o preenchimento do campo obrigatório "nome" o botão "Concluir" fica Bloqueado
     it('Botão De "entar bloqueado" sem o nome ', () => {
    cy.visit('https://qualidade.apprbs.com.br/site')
     cy.document()
      .its('readyState')
      .should('eq', 'complete')
      cy.window()
      .its('ActionsForm')
      .should('exist')
      // sem nome
      cy.get('[name="pessoa.emailPrincipal"]').type('maria@sunrise.com.br')
      cy.get('[name="pessoa.telefonePrincipal"]').type('71 98247-8127')
    
     cy.get('#rbBtnNext')
    .should('be.disabled')

     })
     // Cenário de teste 4 , sem o e-mail obrigatório verifica a mensagem de erro "preencha este campo"
it('Deve exibir erro ao não preencher email', () => {

  cy.visit('https://qualidade.apprbs.com.br/site')

  cy.document().its('readyState').should('eq', 'complete')
  cy.window().its('ActionsForm').should('exist')

  cy.get('[name="pessoa.nome"]')
    .type('Maria')

  cy.get('[name="pessoa.telefonePrincipal"]')
    .type('71 98247-8127')

  cy.get('[name="pessoa.emailPrincipal"]')
    .focus()
    .blur()
  cy.get('[name="pessoa.emailPrincipal"]')
    .parent()
    .contains('Preencha este campo')
    .should('be.visible')
  cy.contains('button', 'Concluir')
    .should('be.disabled')

})
// Cenário de teste 5 , sem o nome obrigatório verifica a mensagem de erro "Preencha este campo"
it('Deve exibir erro ao não preencher nome', () => {

  cy.visit('https://qualidade.apprbs.com.br/site')

  cy.document().its('readyState').should('eq', 'complete')
  cy.window().its('ActionsForm').should('exist')

  cy.get('[name="pessoa.emailPrincipal"]')
    .type('maria@sunrise.com.br')

  cy.get('[name="pessoa.telefonePrincipal"]')
    .type('71 98247-8127')

  // Dispara validação
  cy.get('[name="pessoa.nome"]')
    .focus()
    .blur()

  cy.get('[name="pessoa.nome"]')
    .parent()
    .find('.validationMessage')
    .should('be.visible')
    .and('contain', 'Preencha este campo')

  cy.contains('button', 'Concluir')
    .should('be.disabled')

})//Cenario de teste 6, com o preenchimento de nome e e-mail o botão deve ficar desbloqueado 
// e possivél de clicar
it('Deve permitir avançar preenchendo nome e email', () => {

  cy.visit('https://qualidade.apprbs.com.br/site')

  cy.document().its('readyState').should('eq', 'complete')
  cy.window().its('ActionsForm').should('exist')

  cy.get('[name="pessoa.nome"]')
    .type('Maria')

  cy.get('[name="pessoa.emailPrincipal"]')
    .type('maria@sunrise.com.br')
    .blur()

  cy.get('#rbBtnNext')
    .should('not.be.disabled')
    .click()

})
//Cenario de teste 7, com o preenchimento apenas do telefone os campos nome e email devem exibir
//  mensagem de erro
it('Deve exibir erro em nome e email ao preencher apenas telefone', () => {

  cy.visit('https://qualidade.apprbs.com.br/site')

  cy.document().its('readyState').should('eq', 'complete')
  cy.window().its('ActionsForm').should('exist')

  cy.get('[name="pessoa.telefonePrincipal"]')
    .type('71 98247-8127')

  cy.get('[name="pessoa.nome"]')
    .focus()
    .blur()

  cy.get('[name="pessoa.nome"]')
    .parent()
    .find('.validationMessage')
    .should('be.visible')
    .and('contain', 'Preencha este campo')

  cy.get('[name="pessoa.emailPrincipal"]')
    .focus()
    .blur()

  cy.get('[name="pessoa.emailPrincipal"]')
    .parent()
    .find('.validationMessage')
    .should('be.visible')
    .and('contain', 'Preencha este campo')

  cy.get('#rbBtnNext')
    .should('be.disabled')


})

})