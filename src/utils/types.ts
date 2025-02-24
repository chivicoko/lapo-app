
// chart
export interface ChartData {
    Day: string;
    Income: number;
  }
  
  export type currentDataProps = {
    currentTab: string,
    currentTabImg: string,
    isCardProfileForm: boolean,
    isCardRequestForm: boolean,
}
  
  export type recentCardInfoProps = {
    id: number,
    branch?: string,
    cardType?: string,
    quantity?: string,
    status?: string,
    cardName?: string,
    currency?: string,
    expiration?: string,
    binPrefix?: string,
    dateCreated?: string,
}

// {id: 1, branch: "Corporate", cardType: 'Instant', quantity: '10', status: 'Ready' }