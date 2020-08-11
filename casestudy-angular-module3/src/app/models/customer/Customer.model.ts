import { CustomerType } from './CustomerType.model';
export interface Customer {
    customerId: number;
    customerCode: string;
    // customerTypeId: number; // ban đầu e để như thế này
    // customerTypeId: CustomerType;  // a Lĩnh support cách này
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
        customerCode: 'KH-0001',
        customerTypeId:     {
            customerTypeId: 1,
            customerTypeName: 'Diamond'
        },
        customerName: 'Thien',
        birthday: '10-09-1990',
        idCard: '091884882',
        phoneNumber: '0019884882',
        email: 'thien@gmail.com',
        address: 'Da Nang',
        gender: 'male'
    },
    // {
    //     customerId: 2,
    //     customerCode: 'KH-0002',
    //     customerTypeId: 3,
    //     customerName: 'Hoang',
    //     birthday: '22-12-1995',
    //     idCard: '08285092995',
    //     phoneNumber: '0019884882',
    //     email: 'hoang@gmail.com',
    //     address: 'Hue',
    //     gender: 'male'
    // },
    // {
    //     customerId: 3,
    //     customerCode: 'KH-0003',
    //     customerTypeId: 2,
    //     customerName: 'Huy',
    //     birthday: '10-09-1990',
    //     idCard: '091884882',
    //     phoneNumber: '0019884882',
    //     email: 'huy@gmail.com',
    //     address: 'Quang Tri',
    //     gender: 'male'
    // },
    // {
    //     customerId: 4,
    //     customerCode: 'KH-0004',
    //     customerTypeId: 3,
    //     customerName: 'Huy',
    //     birthday: '10-09-1990',
    //     idCard: '091884882',
    //     phoneNumber: '0019884882',
    //     email: 'huy@gmail.com',
    //     address: 'Quang Tri',
    //     gender: 'male'
    // },
    // {
    //     customerId: 5,
    //     customerCode: 'KH-0005',
    //     customerTypeId: 4,
    //     customerName: 'Huy',
    //     birthday: '10-09-1990',
    //     idCard: '091884882',
    //     phoneNumber: '0019884882',
    //     email: 'huy@gmail.com',
    //     address: 'Quang Tri',
    //     gender: 'male'
    // },
    // {
    //     customerId: 6,
    //     customerCode: 'KH-0006',
    //     customerTypeId: 2,
    //     customerName: 'Tuan',
    //     birthday: '18-03-1988',
    //     idCard: '989234971987',
    //     phoneNumber: '0539819837',
    //     email: 'tuan@gmail.com',
    //     address: 'Ba Ria',
    //     gender: 'male'
    // },
    // {
    //     customerId: 7,
    //     customerCode: 'KH-0007',
    //     customerTypeId: 1,
    //     customerName: 'Huynh',
    //     birthday: '10-09-1990',
    //     idCard: '986058502340',
    //     phoneNumber: '0019884882',
    //     email: 'huynh@gmail.com',
    //     address: 'Da Lat',
    //     gender: 'female'
    // },
    // {
    //     customerId: 8,
    //     customerCode: 'KH-0008',
    //     customerTypeId: 3,
    //     customerName: 'Nhi',
    //     birthday: '25-12-1989',
    //     idCard: '10938959823',
    //     phoneNumber: '024358987314',
    //     email: 'yennhhi@gmail.com',
    //     address: 'Quang Nam',
    //     gender: 'female'
    // },
];
