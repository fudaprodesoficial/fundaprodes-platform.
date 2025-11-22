import { useState, useCallback } from 'react';

interface WalletState {
  address: string | null;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [state, setState] = useState<WalletState>({
    address: null,
    isConnected: false,
    isLoading: false,
    error: null,
  });

  const connectWallet = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulación de conexión de wallet
      // En producción, aquí se integraría con MetaMask, WalletConnect, etc.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const mockAddress = '0x71' + '...' + '3A9';
      setState({
        address: mockAddress,
        isConnected: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error al conectar wallet',
      }));
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setState({
      address: null,
      isConnected: false,
      isLoading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    connectWallet,
    disconnectWallet,
  };
};

