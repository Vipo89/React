import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import getWallet from './services/walletFetch';

function App() {
  const [wallet, setWallet] = useState();

  useEffect(() => {
    const aux = getWallet();
    setWallet(aux);
  }, []);

  return (
    <>
      {!wallet ? (
        <div>Cargando datos del mockup de wallet</div>
      ) : (
        <>
          <h2>Wallet: {wallet.id}</h2>
          <div>
            <span>Bitcoin</span>
            <span>{wallet.bitcoin}</span>
          </div>
          <div>
            <span>Ethereum</span>
            <span>{wallet.ethereum}</span>
          </div>
        </>
      )}
    </>
  );
}

export default App;
