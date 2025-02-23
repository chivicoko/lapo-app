"use client";

import { INITIAL_DATA } from '@/utils/data';
import { currentDataProps } from '@/utils/types';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface NavigationContextType {
  currentData: currentDataProps;
  setcurrentData: (data: currentDataProps) => void;
  handleCardProfileFormToggle: (data: currentDataProps) => void;
  handleCardRequestFormToggle: (data: currentDataProps) => void;
  handleCurrentTab: (data: currentDataProps, tab: string, tabImg: string) => void;
  navigateToRequestDetails: (data: currentDataProps) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setcurrentData] = useState<currentDataProps>(INITIAL_DATA);

  
  useEffect(() => {
    const storedData = localStorage.getItem('currentData');
    if (storedData) {
      setcurrentData(JSON.parse(storedData));
    }
  }, []);

  const handleCardProfileFormToggle = (data: currentDataProps) => {
    if (data.isCardProfileForm === 'no') {
      setcurrentData({...data, isCardProfileForm: 'yes'});
      localStorage.setItem('currentData', JSON.stringify({...data, isCardProfileForm: 'yes'}));
    } else {
      setcurrentData({...data, isCardProfileForm: 'no'});
      localStorage.setItem('currentData', JSON.stringify({...data, isCardProfileForm: 'no'}));
    }
  };
  
  const handleCardRequestFormToggle = (data: currentDataProps) => {
    if (data.isCardRequestForm === 'no') {
      setcurrentData({...data, isCardRequestForm: 'yes'});
      localStorage.setItem('currentData', JSON.stringify({...data, isCardRequestForm: 'yes'}));      
    } else {
      setcurrentData({...data, isCardRequestForm: 'no'});
      localStorage.setItem('currentData', JSON.stringify({...data, isCardRequestForm: 'no'}));
    }
  };
  
  const handleCurrentTab = (data: currentDataProps, tab: string, tabImg: string) => {
    setcurrentData({...currentData, currentTab: tab, currentTabImg: tabImg});
    localStorage.setItem('currentData', JSON.stringify({...data, currentTab: tab, currentTabImg: tabImg}));
  };

  const navigateToRequestDetails = (data: currentDataProps) => {
    handleCardRequestFormToggle(data);
    setcurrentData({...data, isCardRequestForm: 'no', currentTab: 'Card Request', currentTabImg: 'credit-card-accept.svg'});
    localStorage.setItem('currentData', JSON.stringify({...data, isCardRequestForm: 'no', currentTab: 'Card Request', currentTabImg: 'credit-card-accept.svg'}));
  };
  
  return (
    <NavigationContext.Provider
      value={{
        handleCardProfileFormToggle,
        handleCardRequestFormToggle,
        handleCurrentTab,
        navigateToRequestDetails,
        currentData,
        setcurrentData,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavTab = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavTab must be used within a NavigationProvider');
  }
  return context;
};
