// import * as constants from './constants'
import * as parser from './parser'
import * as utils from '../../utils/utils'

export const receiveData = utils.createAction('Receive header data')

export const process = ({payload: {$, $response}}) => receiveData(parser.parseHeader($, $response))
