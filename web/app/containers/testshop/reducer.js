import {handleActions} from 'redux-actions'
import Immutable from 'immutable'
import {mergePayload} from '../../utils/reducer-utils'
import * as testshopActions from './actions'

const initialState = Immutable.Map()

export default handleActions({
    [testshopActions.receiveData]: mergePayload,
    [testshopActions.changeTitle]: mergePayload
}, initialState)
