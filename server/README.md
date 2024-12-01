## How to run:
1. yarn install
2. yarn start

It will start the program in http://localhost:8000/graphql


## Sample Query

```
query GetTodos($getUserId: ID!, $getAlbumId: ID!) {
  getTodos {
    id
    userId
    title
    completed
    user {
      id
      name
      email

      album {
        id
        userId
        title
      }
    }
  }

  getAllUsers {
    id
    name
    username
    email
    album {
      id
      title
    }
  }

  

  getUser(id: $getUserId) {
    id
    name
  }

  getAllAlbums {
    userId
    id
    title
  }

  getAlbum(id: $getAlbumId) {
    id
    userId
    title
  }
}
```

Pass this to the `Variables` section:
```
{
  "getUserId": "1",
  "getAlbumId": "2"
}
```


## Sample Mutation

```
mutation CreateTodo($input: TodoInput) {
  createTodo(input: $input) {
    id
    userId
    title
    completed
  }
}
```

Pass this to the `Variables` section:
```
{
  "input": {
    "id": "202",
    "userId": "202",
    "title": "Foo Bar"
  }
}
```
`Note`: As the server is faked, so no data is stored actually! You will see an output like:

```
{
  "data": {
    "createTodo": {
      "id": "201",
      "userId": "202",
      "title": "Foo Bar",
      "completed": null
    }
  }
}
```

