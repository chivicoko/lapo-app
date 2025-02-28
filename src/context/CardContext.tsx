"use client";

import { fees, INITIAL_DATA } from '@/utils/data';
import { currentDataProps, feeProps } from '@/utils/types';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CardContextType {
  currentData: currentDataProps;
  setcurrentData: (data: currentDataProps) => void;
  fee: feeProps | null;
  setFee: (data: feeProps) => void;
  addFee: (data: feeProps) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setcurrentData] = useState<currentDataProps>(INITIAL_DATA);
  const [feesInfo, setFeesInfo] = useState<feeProps[]>(fees);
  const [fee, setFee] = useState<feeProps | null>(null);

  const addFee = (data: feeProps) => {
    if (data) {
      setFeesInfo([
        ...feesInfo,
        {
          id: Math.random(),
          name: data.name,
          value: data.value,
          frequency: data.frequency,
          currency: data.currency,
          time: data.time,
          accountPad: data.accountPad,
          account: data.account
        }
      ]);
    }

  };

  
  useEffect(() => {
    const storedData = localStorage.getItem('currentData');
    if (storedData) {
      setcurrentData(JSON.parse(storedData));
    }
  }, []);

  return (
    <CardContext.Provider
      value={{
        currentData,
        setcurrentData,
        fee,
        setFee,
        addFee,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useNavTab = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useNavTab must be used within a CardProvider');
  }
  return context;
};
