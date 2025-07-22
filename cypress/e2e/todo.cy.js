describe('Crear Tarea', () => {
  it('1. Debería permitir crear una tarea correctamente ', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
     cy.get('[data-testid="text-input"]').type("compra{enter}")
     cy.get('[data-testid="todo-item-label"]').contains("compra")
     cy.get('[data-testid="todo-item-label"]').should('contain', 'compra')
  })

      it('2. Marcar tarea como completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-label"]').contains("compra")
    })
    
        it('3.Desmarcar tarea completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-label"]').contains("compra")
    })
})