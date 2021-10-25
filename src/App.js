import "./styles.css";
import Counter from "./Counter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/user";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  console.log(user);

  return (
    <div className="App">
      {user && <h2> Hello {user.username}</h2>}

      <h1>Counter</h1>
      <Counter />
    </div>
  );
}
