export const apiGetCustomers = url => () => fetch(url).then(result => result.json());
