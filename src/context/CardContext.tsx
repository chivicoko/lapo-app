"use client";

import { INITIAL_DATA } from '@/utils/data';
import { currentDataProps, feeProps } from '@/utils/types';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CardContextType {
  currentData: currentDataProps;
  setcurrentData: (data: currentDataProps) => void;
  fee: feeProps | null;
  feesInfo: feeProps[];
  setFee: (data: feeProps) => void;
  addFee: (data: feeProps) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setcurrentData] = useState<currentDataProps>(INITIAL_DATA);
  const [feesInfo, setFeesInfo] = useState<feeProps[]>([]);
  const [fee, setFee] = useState<feeProps | null>(null);

  const addFee = (data: feeProps) => {
    if (data) {
      setFeesInfo([...feesInfo, data]);
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
        feesInfo,
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
