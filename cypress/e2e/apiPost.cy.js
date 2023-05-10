it('Petición HTTP Post con validación de property en el Body',()=>{
    cy.request('POST', 'https://reqres.in/api/users', {
        name:'Matias',
        job:'QA'
    })
})