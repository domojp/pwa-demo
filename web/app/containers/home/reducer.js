import {handleActions} from 'redux-actions'
import {fromJS} from 'immutable'
import {mergePayload} from '../../utils/reducer-utils'

import {receiveData} from './actions'

const SERVICE_PLACEHOLDER_COUNT  =  4
const POST_PLACEHOLDER_COUNT     =  2
const CATEGORY_PLACEHOLDER_COUNT = 10

const initialState = fromJS({
    hero: {},
    services:   new Array(SERVICE_PLACEHOLDER_COUNT).fill({}),
    latest:     [],
    posts:      new Array(POST_PLACEHOLDER_COUNT).fill({}),
    categories: new Array(CATEGORY_PLACEHOLDER_COUNT).fill({})
})

export default handleActions({
    [receiveData]: mergePayload
}, initialState)
