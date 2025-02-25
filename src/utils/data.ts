
export const menuItems = [
    {id: 1, title: "Dashboard", url: '/', icon: 'home-03.svg', ref: 'Dashboard' },
    {id: 2, title: "Branches", url: '/branches', icon: 'building-06.svg', ref: 'Branches' },
    {id: 3, title: "Roles", url: '/roles', icon: 'user-shield-01.svg', ref: 'Roles' },
    {id: 4, title: "Users", url: '/users', icon: 'user-group.svg', ref: 'Users' },
    {id: 5, title: "Card Scheme", url: '/card-scheme', icon: 'setting-05.svg', ref: 'Card Scheme' },
    {id: 6, title: "Card Profile", url: '/card-profile', icon: 'credit-card-pos.svg', ref: 'Card Profile' },
    {id: 7, title: "Card Request", url: '/card-request', icon: 'credit-card-accept.svg', ref: 'Card Request' },
    {id: 8, title: "Stock", url: '/stock', icon: 'chart-bar-line.svg', ref: 'Stock' },
    {id: 9, title: "Cards", url: '/cards', icon: 'credit-card.svg', ref: 'Cards' },
    {id: 10, title: "Authorization List", url: '/authorization-list', icon: 'list.svg', ref: 'Authorization List' },
    {id: 11, title: "Authorization Queue", url: '/authorization-queue', icon: 'layers-three-01.svg', ref: 'Authorization Queue' },
    {id: 12, title: "Trail", url: '/trail', icon: 'map-01.svg', ref: 'Trail' },
    {id: 13, title: "Account", url: '/account', icon: 'user.svg', ref: 'Account' },
    {id: 14, title: "Logout", url: '/logout', icon: 'logout-02.svg', ref: 'Logout' },
];

export const dashboardQuickAccess = [
    {id: 1, text: "Manage a Card", url: '/card-profile', icon: 'credit-card-shield.svg' },
    {id: 2, text: "Issue Instant Card", url: '/card-profile', icon: 'credit-card-02.svg' },
    {id: 3, text: "Issue Personalized Card", url: '/card-request', icon: 'credit-card-edit-2.svg' },
    {id: 4, text: "Review Card Requests", url: '/card-request', icon: 'credit-card-plus.svg' },
];

export const dashboardMetrics = [
    {id: 1, metricText: "Total Active Cards", icon: 'credit-card-check.svg', metricNumber: '26,478', percentage: '+9', timeInfo: 'this month' },
    {id: 2, metricText: "Total Personalized Cards", icon: 'credit-card-edit.svg', metricNumber: '15,703', percentage: '8.5', timeInfo: 'this month' },
    {id: 3, metricText: "Today's Revenue", icon: 'bank-note-01.svg', metricNumber: '₦9.3M', percentage: '+6', timeInfo: 'vs yesterday' },
    {id: 4, metricText: "Pending Requests", icon: 'hourglass-03.svg', metricNumber: '38', percentage: '', timeInfo: 'Requires attention' },
];

export const recentCardRequestTableHead = [
    {id: 1, title: "Branch"},
    {id: 2, title: "Card Type"},
    {id: 3, title: "Quantity"},
    {id: 4, title: "Status"},
    {id: 5, title: "Action"},
];

export const MonthlyIssuance = [
    { Personalized: 90, Instant: 60, month: 'May' },
    { Personalized: 65, Instant: 45, month: 'Jun' },
    { Personalized: 55, Instant: 35, month: 'Jul' },
    { Personalized: 70, Instant: 60, month: 'Aug' },
    { Personalized: 89, Instant: 69, month: 'Sept' },
    { Personalized: 48, Instant: 28, month: 'Oct' },
    { Personalized: 92, Instant: 82, month: 'Nov' },
  ];

export const WeeksIncome = [
    { Income: 60, Day: 'Mon' },
    { Income: 45, Day: 'Tue' },
    { Income: 35, Day: 'Wed' },
    { Income: 60, Day: 'Thur' },
    { Income: 69, Day: 'Fri' },
    { Income: 28, Day: 'Sat' },
    { Income: 82, Day: 'Sun' },
  ];

export const CardStatusDistribution = [
    { cards: 950, name: 'Active' },
    { cards: 300, name: 'Expired' },
    { cards: 70, name: 'Inactive' },
    { cards: 90, name: 'Blocked' },
    { cards: 120, name: 'Lost' },
  ];

export const PIE_COLORS = ['#01A4AF', '#FFBA24', '#FF4457', '#8020E7', '#014DAF'];

export const cardProfileTableHead = [
    {id: 1, title: "Card Name"},
    {id: 2, title: "Currency"},
    {id: 3, title: "Expiration"},
    {id: 4, title: "Bin Prefix"},
    {id: 5, title: "Date Created"},
    {id: 6, title: "Action"},
];

export const cardProfiles = [
    {id: 1, cardName: "Verve-1", currency: 'NGN', expiration: '40 months', binPrefix: '50611234', dateCreated: '11/10/2024 23:21:03' },
    {id: 2, cardName: "Swrve-1", currency: 'NGN', expiration: '40 months', binPrefix: '50611234', dateCreated: '11/10/2024 23:21:03' },
    {id: 3, cardName: "Debit-1", currency: 'NGN', expiration: '40 months', binPrefix: '50611234', dateCreated: '11/10/2024 23:21:03' },
    {id: 4, cardName: "Master Card", currency: 'NGN', expiration: '40 months', binPrefix: '50611234', dateCreated: '11/10/2024 23:21:03' },
];

export const feesTableHead = [
    {id: 1, title: "Name"},
    {id: 2, title: "Value"},
    {id: 3, title: "Frequency"},
    {id: 4, title: "Currency"},
    {id: 5, title: "Time"},
    {id: 6, title: "Account Pad"},
    {id: 7, title: "Account"},
];

export const fees = [
    {id: 1, name: "", value: '', frequency: '', currency: '', time: '', accountPad: '', account: '' },
];

export const cardRequestTableHead = [
    {id: 1, title: "Branch"},
    {id: 2, title: "Initiator"},
    {id: 3, title: "Quantity"},
    {id: 4, title: "Batch"},
    {id: 5, title: "Date Requested"},
    {id: 6, title: "Status"},
    {id: 7, title: "Action"},
];

export const cardRequests = [
    {id: 1, branch: "Corporate", initiator: 'RootUser', cardType: 'Classic Debit', cardCharges: '₦1,500', quantity: '10', batch: '5650611234', dateRequested: '11/10/2024 23:21:03', status: 'Ready' },
    {id: 2, branch: "Non-Corporate", initiator: 'RootUser', cardType: 'Classic Debit', cardCharges: '₦1,500', quantity: '10', batch: '5650611234', dateRequested: '11/10/2024 23:21:03', status: 'In Progress' },
    {id: 3, branch: "Beth Corporate", initiator: 'RootUser', cardType: 'Classic Debit', cardCharges: '₦1,500', quantity: '10', batch: '5650611234', dateRequested: '11/10/2024 23:21:03', status: 'Pending' },
    {id: 4, branch: "Big Corporate", initiator: 'RootUser', cardType: 'Classic Debit', cardCharges: '₦1,500', quantity: '10', batch: '5650611234', dateRequested: '11/10/2024 23:21:03', status: 'Ready' },
    {id: 5, branch: "Normal Corporate", initiator: 'RootUser', cardType: 'Classic Debit', cardCharges: '₦1,500', quantity: '10', batch: '5650611234', dateRequested: '11/10/2024 23:21:03', status: 'Acknowledged' },
];

export const cardRequestActionBtns = [
    {id: 1, text: "Download for production", icon: 'file-download-02.svg', bg: 'gray' },
    {id: 2, text: "Mark as In Progress", icon: 'loading-02.svg', bg: 'orange' },
    {id: 3, text: "Mark as Ready", icon: 'package-check.svg', bg: 'green' },
    {id: 4, text: "Send to Dispatch", icon: 'package-sent.svg', bg: 'purple' },
    {id: 5, text: "Mark as Acknowledged", icon: 'check-circle-broken.svg', bg: 'blue' },
];

export const INITIAL_DATA = {
    currentTab: 'Dashboard',
    currentTabImg: 'home-03.svg',
    isCardProfileForm: false,
    isCardRequestForm: false,
}

