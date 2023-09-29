import React, {useState} from "react";
import PackageContext  from "./Context";

const Provider = props => {
    const [mission, setMission] = useState({
        mname: "Attack P*******",
        agent: '009',
        accept: "Not Accepted"

    })
    console.log('props---', props);
    return (
        <PackageContext.Provider value={{
            data: mission,
            changeAcceptStatus: ()=>{
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}>
    
            {props.children}
        </PackageContext.Provider>
    )
}


export default Provider;