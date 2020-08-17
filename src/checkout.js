import axios from 'axios';


function doCheckout(checkoutPayload) {

    return axios.post('https://cphsprojectgrad.com/api/process_payment', checkoutPayload)
        .then(response => response.data);
}


export default doCheckout;
