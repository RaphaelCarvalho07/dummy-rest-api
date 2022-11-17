describe('GET /api/productsList', () => {
    context('o usuário tenta buscar a lista de todos os produtos', () => {
        it('deve trazer a lista dos produtos', () => {
            cy.request({
                method: 'GET',
                url: 'https://automationexercise.com/api/productsList',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                expect(res).to.have.property('body')
                expect(res.status).to.eql(200)
                expect(res.body).not.to.be.empty
            })
        })
    })
})