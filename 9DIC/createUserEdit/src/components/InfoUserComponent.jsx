import React from 'react'

const InfoUserComponent = (props) => {

    const {user} = props;
  return (
    <div>
        <p>
            ID: {user.id}
        </p>
        <p>
            Nombre: {user.username}
        </p>
        <p>
            Password: {user.password}
        </p>
        <p>
            Email: {user.email}
        </p>
        <hr />
    </div>
  )
}

export default InfoUserComponent