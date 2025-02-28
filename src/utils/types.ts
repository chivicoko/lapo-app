
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
  
export type feeProps = {
  id: number,
  name?: string | null,
  value?: string | null,
  frequency?: string | null,
  currency?: string | null,
  time?: string | null,
  accountPad?: string | null,
  account?: string | null,
}
