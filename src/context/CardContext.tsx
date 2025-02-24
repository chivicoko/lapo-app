"use client";

import { INITIAL_DATA } from '@/utils/data';
import { currentDataProps } from '@/utils/types';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CardContextType {
  currentData: currentDataProps;
  setcurrentData: (data: currentDataProps) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setcurrentData] = useState<currentDataProps>(INITIAL_DATA);

  
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
