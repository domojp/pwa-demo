import Immutable from 'immutable'
import {handleActions} from 'redux-actions'
import * as footerActions from './actions'
import * as constants from './constants'
import {mergePayload} from '../../utils/reducer-utils'
import {TextLink} from '../../utils/parser-utils'

export const initialState = Immutable.fromJS({
    copyright: "",
    owner: ""
})

const footer = handleActions({
    [footerActions.receiveData]: mergePayload,
}, initialState)


export default footer
