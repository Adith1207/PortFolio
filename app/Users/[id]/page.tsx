import React from 'react'

const UserDetails = async({params}:{params:Promise<{id : string}>}) => {
    const {id} = await params;
    return (
        <main>
            <h1>User Details : {id}</h1>
        </main>
    )
}
export default UserDetails
