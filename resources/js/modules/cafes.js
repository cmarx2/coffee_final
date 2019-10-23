//configure the state
import CafeAPI from '../api/cafe.js';

export const cafes = {
    state: {
        cafes: [],
        cafesLoadStatus: 0,

        cafe: {},
        cafeLoadStatus: 0
    },

    actions: {
        loadCafes( { commit } ){
            commit( 'setCafesLoadStatus', 1);

            CafeAPI.getCafes()
              .then( function(response ){
                  commit( 'setCafes', response.data);
                  commit( 'setCafesLoadStatus', 2);
              })
              .catch( function(){
                  commit( 'setCafes', []);
                  commit( 'setCafeLoadStatus', 3);
              });
        },

        loadCafe( { commit }, data ){
            commit( 'setCafeLoadStatus', 1);

            CafeAPI.getCafe(data.id)
                .then( function(response){
                    commit( 'setCafe', response.data);
                    commit( 'setCafeLoadStatus', 2);
                })
                .catch(function(){
                    commit( 'setCafe', {});
                    commit( 'setCafeLoadStatus', 3);
                });
            }
    },

    mutations: {
        setCafesLoadStatus( state, status ){

        },

        setCafes( state, cafes ){

        },

        setCafeLoadStatus( state, status ){

        },

        setCafe( state, cafe ) {

        }
    },
}