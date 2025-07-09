import { Heading } from "./components/Heading";

import "./assets/styles/theme.css"
import "./assets/styles/global.css"



export function App( ) { 
    console.log("ola corninhos");

    return (<>
        <Heading attr={1234} attr2="String">ola mundo</Heading>
        <p>parafrago teste</p>
    </>);
}
