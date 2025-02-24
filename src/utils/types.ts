
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
  initiator?: string,
  cardType?: string,
  cardCharges?: string,
  quantity?: string,
  batch?: string,
  status?: string,
  cardName?: string,
  currency?: string,
  expiration?: string,
  binPrefix?: string,
  dateCreated?: string,
  dateRequested?: string,
}
  
// export type cardRequestsProps = {
//   id: number,
//   branch?: string,
//   cardType?: string,
//   quantity?: string,
//   status?: string,
//   cardName?: string,
//   currency?: string,
//   expiration?: string,
//   binPrefix?: string,
//   dateCreated?: string,
// }

// {id: 1, branch: "Corporate", initiator: 'RootUser', cardType: 'Classic Debit', cardCharges: '₦1,500', quantity: '10', batch: '5650611234', dateRequested: '11/10/2024 23:21:03', status: 'Ready' },