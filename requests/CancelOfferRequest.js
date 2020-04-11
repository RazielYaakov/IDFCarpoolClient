import axios from 'axios';

import { SERVER_URL, CANCEL_OFFER_API } from '../constants/constants';

const CancelOffer = async ({ offerID }) => {
    var rides = await axios.post(`${SERVER_URL}/${CANCEL_OFFER_API}?` +
        `offerID=${offerID}`, null, { timeout: 10000 });

    console.log(rides);
    return rides.data;
};

export default CancelOffer;