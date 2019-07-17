
export const resolvers = {
    Query: {
        getClients: (root) => {
            return [
                {
                    id: 1,
                    name: 'a',
                    lastName: 'gg',
                    company: 'tttt',
                    email: 'email1',
                    age: 45,
                    type: 'PREMIUN'
                },
                {
                    id: 2,
                    name: 'b',
                    lastName: 'hh',
                    company: 'qqqq',
                    email: 'email2',
                    age: 45,
                    type: 'BUSSINES'
                }
            ]
        }
    },
    Mutation: {
        addClient: (root, {id}) => {
            return `Cliente agregado ${id}`;
        }
    }
}