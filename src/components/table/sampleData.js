export const rowData = [
  {
    id: '1',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
  },
  {
    id: '2',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
  },
  {
    id: '3',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
  },
  {
    id: '4',
    name: 'Load Balancer 6',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
  },
  {
    id: '5',
    name: 'Load Balancer 4',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
  },
  {
    id: '6',
    name: 'Load Balancer 5',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
  },
];

export const headerData = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'rule',
    header: 'Purpose',
  },
];
