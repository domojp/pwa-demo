import Immutable from 'immutable'
import {handleActions} from 'redux-actions'
import * as headerActions from './actions'
import {mergePayload} from '../../utils/reducer-utils'

export const initialState = Immutable.fromJS({
    title: '',
    menu: []
})

const header = handleActions({
    [headerActions.receiveData]: mergePayload
}, initialState)


export default header
