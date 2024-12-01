import logo from "./logo.svg";
import { gql, useQuery } from "@apollo/client";

const query = gql`
query GetTodos {
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
}
`;


function MainApp() {
  const { data: reactStore, loading } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>User</th>
            <th>Ablum</th>
          </tr>
          {reactStore.getTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
              <td>{todo?.user?.album?.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainApp;
