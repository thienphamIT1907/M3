export interface Customer {
    customerId: number;
    customerCode: string;
    customerTypeId: number;
    customerName: string;
    birthday: string;
    idCard: string;
    phoneNumber: string;
    email: string;
    address: string;
    gender: string;
}

export const customerArr = [
    {
        customerId: 1,
        customerCode: 'KH002',
        customerTypeId: 1,
        customerName: 'Thien',
        birthday: '10-09-1990',
        idCard: '091884882',
        phoneNumber: '0019884882',
        email: 'thien@gmail.com',
        address: 'Da Nang',
        gender: 'male'
    },
    {
        customerId: 1,
        customerCode: 'KH003',
        customerTypeId: 1,
        customerName: 'Hoang',
        birthday: '22-12-1995',
        idCard: '091884882',
        phoneNumber: '0019884882',
        email: 'hoang@gmail.com',
        address: 'Hue',
        gender: 'male'
    },
    {
        customerId: 1,
        customerCode: 'KH004',
        customerTypeId: 1,
        customerName: 'Huy',
        birthday: '10-09-1990',
        idCard: '091884882',
        phoneNumber: '0019884882',
        email: 'huy@gmail.com',
        address: 'Quang Tri',
        gender: 'male'
    },
];
