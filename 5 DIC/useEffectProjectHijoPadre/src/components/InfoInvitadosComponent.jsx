import React from 'react';

const InfoInvitadosComponent = (props) => {
  const { invitado, delInvitado } = props;

  return (
    <div>
      <span>Nombre: {invitado.nombreInvitado}</span>
      <button
        onClick={() => {
          delInvitado(invitado.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default InfoInvitadosComponent;
