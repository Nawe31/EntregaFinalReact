import { createContext } from "react";

export const userContext = createContext ({user:"anonymus"});

function UserProvider (props){
const user="nahuel";
const logeding=true;
function test(){

}

    return(

        <userContext.Provider value ={{user, logeding, test}}>{props.children}</userContext.Provider>
    )
}

export {UserProvider}
