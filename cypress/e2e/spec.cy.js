//Navigation test

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://google.com')
//   })
// })


// Pass test
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

//Fails test
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })


//Navigate to an URL and writes the email in a email input
// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })


// Test to select a checkbox
//los elementos before y after estn pr que en teoria en un suit de pruebas 
//pueden ejecutarse acciones antes o desues de la prueba
// describe('Grupo de Pruebas', function () {
//   before(function () {
//     cy.log('Cargamos datos Antes del suite de casos')
//   })
//   after(function () {
//     cy.log('Ejecutamos las acciones a realizar al terminar el ')
//   })
//   beforeEach(function () {
//     cy.visit('http://logofree.esy.es/');
//   })
//   afterEach(function () {
//     cy.log('Enviamos el After Each de Prueba');
//   })

//   it('Prueba 1', function () {
//     cy.contains('Checkbox').click();
//     cy.get(':nth-child(2) > input').check();
//   })
// })

//Test to select an option from a deployable menu
// describe('Grupo de Pruebas', function () {
//   before(function () {
//     cy.log('Cargamos datos Antes del suite de casos')
//   })
//   after(function () {
//     cy.log('Ejecutamos las acciones a realizar al terminar el ')
//   })
//   beforeEach(function () {
//     cy.visit('http://logofree.esy.es/');
//   })
//   afterEach(function () {
//     cy.log('Enviamos el After Each de Prueba');
//   })
//   it('Prueba 1', function () {
//     cy.contains('Selects').click();
//     cy.get('#cars').select('Mercedes')
//   })
// })


//Test to select one element from a group of elements with the same selector
// it('Prueba 1', function () {

//   cy.visit('http://logofree.esy.es/');

//   cy.get('.button').eq(3).click();

// })

//Assertion test
// describe('Grupo de Pruebas', function () {
//   it('Prueba 1', function () {
//     cy.visit('http://logofree.esy.es/');
//     cy.get('.beta > a').should('be.visible').and('contain', 'Automation Testing');
//   })
// })


//Fixtures test
// describe('Grupo de Pruebas', function () {
//   beforeEach(() => {
//     cy.fixture('PruebaFixtures.json').as('userData')
//   })
//   it('Prueba 1', function () {
//     cy.get('@userData').then((userData) => {
//       cy.visit(userData.url);
//       cy.get('#woocommerce-product-search-field-0').type(userData.producto);
//       cy.get('#woocommerce-product-search-field-0').type('{enter}')
//     }
//     )
//   })
// })

//Test with personalised command
describe('Grupo de Pruebas', function () {
  beforeEach(() => {
    cy.fixture('PruebaFixtures.json').as('userData')
  })
  it('Prueba 1', function () {
    cy.get('@userData').then((userData) => {
      cy.user(userData.username)
      cy.login(userData.correo)
      //cy.screenshot();
    }
    )
  })
})





