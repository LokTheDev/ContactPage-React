import React from "react";
import axios from "axios";
import { Content } from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
import { styledDiv } from './ContactPageStyles';

function ContactPage() {

    const [isLoading,setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
      getData();
    }, []);

    const getData = () => {
      const EndPoint = "https://jsonplaceholder.typicode.com/users";
      axios(EndPoint)
        .then((response) => {
          setIsLoading(false);
          //console.log("RES", response.data);
            setUsers(response.data)
        })
        .catch((error) => {
          setIsLoading(false);
          console.log("Error: ", error);
        });
    };

    const content = isLoading ? {isLoading: true} : users

    return (
      <styledDiv>
        <Hero />
        {users.map((user,key) => {
        return (
            <Content data={user} key={key}/>
        );
      })}
      </styledDiv>
    );
}

export default ContactPage;
