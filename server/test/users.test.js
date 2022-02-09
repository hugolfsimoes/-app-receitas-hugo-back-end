const axios = require('axios');

test('Should get all users', async () => {
  const { data } = await axios({
    url: 'http://localhost:3001',
    method: 'get'
  });
  expect(data).toHaveLength(1);
  expect(data[0].id).toBe(1);
  expect(data[0].name).toBe('Hugo Leonardo Franco Simões');

});