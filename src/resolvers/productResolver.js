
export const resolvers = {
    Query: {
        getProducts: (root) => {
            return [
                {
                    id: 1,
                    name: 'PRODUCT1',
                    price: 10.5,
                    stock: 100                    
                },
                {
                    id: 2,
                    name: 'PRODUCT2',
                    price: 8.5,
                    stock: 50                    
                }
            ]
        }
    },
    Mutation: {
        addProduct: (root, {id}) => {
            return `Producto agregado ${id}`;
        }
    }
}