import axios from 'axios';
const backend_url = 'https://cphsprojectgrad.com'

function serializeToStringArray(obj) {
    var str = [];
    for (var p in obj)
      if (Object.prototype.hasOwnProperty.call(obj, p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str;
  }

export function doCheckout(checkoutPayload) {

    return axios.post(`${backend_url}/api/process_payment`, checkoutPayload)
        .then(response => response.data);
}


export function queryDb(collectionName, credentials, query) {

    let urlQueryArray = serializeToStringArray(credentials)
    urlQueryArray = urlQueryArray.concat(serializeToStringArray(query))
    let urlQuery = urlQueryArray.join('&')
    const url = `${backend_url}/api/querydb/${collectionName}?${urlQuery}`

    return axios.get(url).then(response => response.data);
    
}
