describe('GET /api/productsList', () => {
    context('buscar lista de todos os produtos', () => {
        it('deve trazer a lista dos produtos', () => {
            cy.request({
                method: 'GET',
                url: '/productsList',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                cy.log(res.body)
                expect(res.status).to.eql(200)
            })
        })
    })
})