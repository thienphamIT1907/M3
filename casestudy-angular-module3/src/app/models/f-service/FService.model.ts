export interface FService {
  fServiceId: number;
  fServiceCode: string;
  fServiceName: string;
  area: number;
  poolArea: number;
  floors: number;
  maxPeople: number;
  cost: number;
  rentTypeId: number;
  fServiceTypeId: number;
  status: string;
  description: string;
}

export const fServicesArr = [
  {
    fServiceId: 1,
    fServiceCode: 'DV-0001',
    fServiceName: 'Vip Villa',
    area: 500,
    poolArea: 800,
    floors: 2,
    maxPeople: 4,
    cost: 8000,
    rentTypeId: 1,
    fServiceTypeId: 1,
    status: 'active',
    description: 'beautiful!'
  },
  {
    fServiceId: 2,
    fServiceCode: 'DV-0002',
    fServiceName: 'Normal Villa',
    area: 500,
    poolArea: 200,
    floors: 2,
    maxPeople: 4,
    cost: 8000,
    rentTypeId: 1,
    fServiceTypeId: 1,
    status: 'active',
    description: 'beautiful!'
  },
  {
    fServiceId: 3,
    fServiceCode: 'DV-0003',
    fServiceName: 'Vip House',
    area: 500,
    poolArea: 150,
    floors: 2,
    maxPeople: 4,
    cost: 8000,
    rentTypeId: 1,
    fServiceTypeId: 1,
    status: 'active',
    description: 'beautiful!'
  },
  {
    fServiceId: 4,
    fServiceCode: 'DV-0004',
    fServiceName: 'Normal House',
    area: 500,
    poolArea: 300,
    floors: 2,
    maxPeople: 4,
    cost: 8000,
    rentTypeId: 1,
    fServiceTypeId: 1,
    status: 'active',
    description: 'beautiful!'
  },
  {
    fServiceId: 5,
    fServiceCode: 'DV-0005',
    fServiceName: 'Vip Room',
    area: 500,
    floors: 2,
    maxPeople: 4,
    cost: 8000,
    rentTypeId: 1,
    fServiceTypeId: 1,
    status: 'active',
    description: 'beautiful!'
  },
  {
    fServiceId: 6,
    fServiceCode: 'DV-0006',
    fServiceName: 'Normal Room',
    area: 500,
    floors: 2,
    maxPeople: 4,
    cost: 8000,
    rentTypeId: 1,
    fServiceTypeId: 1,
    status: 'active',
    description: 'beautiful!'
  },
];
