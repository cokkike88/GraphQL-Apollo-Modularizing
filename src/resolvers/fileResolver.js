

export const resolvers = {

    Query: {
        files: (root) => {
            return ["file1","file2"]
        }
    },
    Mutation: {
        uploadFile : async (root, {file}) => {
            const { createReadStream, filename, mimetype } = await file      
            console.log('FILE', file);  

            return true;
        }
    }
}