var axios = require('axios');

var config = {
    method: 'get',
    url: 'http://54.147.16.15:3000/',
    headers: { }
  };
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

setInterval(() => {
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
}, 2000)
