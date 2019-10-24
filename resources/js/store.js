import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use( Vuex )

import { cafes } from './modules/cafes';

export default new Vuex.Store({
    modules: {
        cafes
    }
});