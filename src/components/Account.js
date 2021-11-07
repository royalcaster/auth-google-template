import react from "react";

const Account = ( { user } ) => {
    return (
        <div>
            <p>Name: {user.displayName}</p>
        </div>
    );
}

export default Account