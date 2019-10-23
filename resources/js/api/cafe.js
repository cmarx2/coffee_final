import { ROASE_CONFIG } from '../.config.js';

export default {

    // GET   /api/cafes

    getCafes: function(){
        return axios.get( ROAST_CONFIG.API_URL + '/cafes' );
    },

    // GET   /api/cafes/{cafeID}

    getCafe: function( cafeID ){
        return axios.get( ROAST_CONFIG.API_URL + '/cafes/' + cafeID);
    },

    // POST  /api/cafes

    postAddNewCafe: function( name, address, city, state, zip){
        return axios.post( ROAST_CONFIG.API.URL + '/cafes', 
        { name: name, 
          address: address,
          city: city, 
          state: state,
          zip: zip
        }
    );
  }
}