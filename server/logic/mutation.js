const { default: axios } = require("axios");

// The Mutation section for each type (Todo, User, Album) like REST API endpoints for POST, PUT, DELETE requests.
exports.Mutation = {
    Mutation: {
        createTodo: async (parent, { input }) => {
            const { data } = await axios.post(
                "https://jsonplaceholder.typicode.com/todos",
                input
            );
            return data;
        },

        updateTodo: async (parent, { id, input }) => {
            const { data } = await axios.put(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                input
            );
            return data;
        },

        deleteTodo: async (parent, { id }) => {
            const { data } = await axios.delete(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            );
            return data;
        }
    }
}
