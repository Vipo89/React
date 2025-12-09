import React, { useEffect, useState } from 'react';
import InfoInvitadosComponent from '../components/InfoInvitadosComponent';
import { deleteInvitadFetch, getInvitados } from '../services/invitadosFetch';

const ListaInvitadosPage = () => {
  const [listaInvitados, setListaInvitados] = useState([]);

  const loadInvitados = () => {
    const aux = getInvitados();
    setListaInvitados(aux);
  };

  const deleteInvitado = (idInvitado) => {
    deleteInvitadFetch(idInvitado);
    loadInvitados();
  };

  useEffect(() => {
    loadInvitados();
  }, []);

  return (
    <div>
      {listaInvitados.length === 0 ? (
        <div>Cargando invitados...</div>
      ) : (
        <>
          <h2>Lista de invitados</h2>
          <div>
            {listaInvitados.map((invit, idx) => (
              <InfoInvitadosComponent
                key={idx}
                invitado={invit}
                delInvitado={deleteInvitado}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListaInvitadosPage;
