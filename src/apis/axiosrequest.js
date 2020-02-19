import axios from 'axios';

async function getData(endpoint, params) {
    const getRequestOptions = {
        method: 'GET',
        url: endpoint,
        params: params
      };
    return axios(getRequestOptions)
    .then(response => {
        return response.data
    })
}

export { getData };