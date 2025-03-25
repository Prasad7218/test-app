import React, {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// import Loader from '../components/Loader';
import axios from "axios";
import "./Home.css";
import MyContext from "../components/context/MyContext";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const message = useContext(MyContext);
  const squaredNumber = useMemo(() => {
    console.log("Calculating squaredNumber...");
    return number * number;
  }, [number]);

  const LazyComponent = lazy(() => import("../components/lazy/Lazy"));

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
      <h1>{message}</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>Squared Number: {squaredNumber}</p>
      </div>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((individualUser) => {
              return (
                <>
                  <tr key={individualUser.id}>
                    <td>{individualUser.id}</td>
                    <td>{individualUser.name}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
