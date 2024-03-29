import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: "flex-end"}}>
                <p onClick={() => onRouteChange('SignOut')} className='f3 link dim blak underline pa3 pointer'>Sign Out</p>
                </nav>
            );
        } else {
            return(
                <div>
                    <nav style={{display: 'flex', justifyContent: "flex-end"}}>
                        <p onClick={() => onRouteChange('SignIn')} className='f3 link dim blak underline pa3 pointer'>Sign In</p>
                        <p onClick={() => onRouteChange('Register')} className='f3 link dim blak underline pa3 pointer'>Register</p>
                    </nav>
                </div>
            );
        }

}
export default Navigation;