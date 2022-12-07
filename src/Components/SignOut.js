import React, { useState } from "react";
import { GoogleLogout } from 'react-google-login';


const client_id = "260793162332-qs0b099qv6t4o9rl0qnosoql662j3ak6.apps.googleusercontent.com"

function SignOut() {
    
    const onSuccess = (res) => {
        console.log("Log out successfull!");
    }


    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={client_id}
                buttonText="Sign out with Google"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default SignOut;