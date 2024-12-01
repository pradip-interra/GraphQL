const { default: axios } = require("axios");

exports.Query = {

    // The nested corelations
    // Todo contains User
    // User contains Album
    Todo: {
        user: async (todo) => {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            );
            return data;
        }
    },

    User: {
        album: async (user) => {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`
            );
            return data[0];
        }
    },



    // The Query section for each type (Todo, User, Album) like REST API endpoints for GET requests.
    Query: {
        getTodos: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            return data;
        },

        getAllUsers: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            return data;
        },

        getUser: async (parent, { id }) => {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            return data;
        },

        getAllAlbums: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/albums"
            );
            return data;
        },

        getAlbum: async (parent, { id }) => {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/albums/${id}`
            );
            return data;
        }
    }
}
