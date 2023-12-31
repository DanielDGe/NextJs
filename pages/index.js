import Container from "../components/Container";
import fetch from "isomorphic-fetch";

import Head from "next/head";

import Users from "../components/Users";

const index = (props) => (
    
    <Container>
        <Head>
            <title>Next - Home Page</title>
        </Head>
        <div>
            <h1>Next</h1>
            {/* {props.users[0].id} */}
            <Users users={props.users} />
        </div>
    </Container>
);

index.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users");
    const resJSON = await res.json();
    return {
        users: resJSON.data,
    };
};

export default index;