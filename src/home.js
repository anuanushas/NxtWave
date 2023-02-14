import Card from "./Card";
import search from "./img/search.png";
// import { useState } from "react";
import "./home.css";
const Home = ({ data }) => {
  // const [resources, setResources] = useState("");
  // const [requests, setRequests] = useState("");
  // const [users, setUsers] = useState("");
  // const Resources = () => {
  //   setResources("Resources");
  //   setRequests("");
  //   setUsers("");
  // };
  // const Requests = () => {
  //   setResources("");
  //   setRequests("Requests");
  //   setUsers("");
  // };
  // const Users = () => {
  //   setResources("");
  //   setRequests("");
  //   setUsers("user");
  // };
  // console.log(users);

  return (
    <div className="home">
      <div className="resources_requests_users">
        <ul>
          <li>
            <button> Resources</button>
          </li>
          <li>
            <button> Requests</button>
          </li>
          <li>
            <button> Users</button>
          </li>
        </ul>
      </div>
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="card">
        {data.map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </div>
  );
};
export default Home;
