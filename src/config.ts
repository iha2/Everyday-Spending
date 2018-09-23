export const TDHeaders = {
  headers: {
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMzJmMTJjOTYtNTYyMi0zNGM0LWExNGItN2RhOTU2MmU1ZTVlIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiJjMzk5MDc2OC1lN2I2LTRkNGItYmNhMy0zOTQzNGQ5MDc4YjcifQ.MmH1UrRDAi5KzOHyKXwrpaiHLuemu9QVDc877sMJ7SI'
  }
};

export const TDUrl = 'https://api.td-davinci.com/api';
export const customersUrl = `${TDUrl}/customers`;

export const merchantCategories = ['Food and Dining', 'Shopping'];

export const merchantData = {
  'a3c83ad2-6ac5-47ad-9adc-b8f93bfaf8ae': {
    name: 'Starbucks',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81Nz6ZX8HhL._SL1500_.jpg'
  },
  '1ecc6c9f-ffe7-47d3-9697-78d299b17996': {
    name: 'Swiss Chalet',
    image:
      'https://www.mallmaverick.com/system/stores/store_fronts/000/022/663/original/Swiss-Chalet_edited.jpg?1452747452'
  },
  'e1db0402-57e1-47be-9b31-f56b6271e6e0': {
    name: 'Tim Hortons',
    image: 'https://www.timhortons.com/ca/images/large-red-logo.png'
  },
  'e84dcb0a-1a9b-4df6-9f39-9e1f55a92575': {
    name: 'Winners',
    image:
      'https://www.conestogamall.com/media/stores/logos/Winners-department-store-clothing-home-beauty-jewelry-shoes-logo_JsUCPZn.svg'
  }
};

// export const merchantChart = {
//   categoryCode: {
//     'coffee': { display: 'Coffee and Drinks' },
//     'shopping': { display: 'Shopping'}
//   },
//   mapping: {
//     'coffee': ['e1db0402-57e1-47be-9b31-f56b6271e6e0'],
//     'shopping': ['e84dcb0a-1a9b-4df6-9f39-9e1f55a92575']
//   }
// }
