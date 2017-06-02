import * as parser from './parsers/parser'
import * as utils from '../../utils/utils'

export const receiveData = utils.createAction('Receive footer data')
export const process = ({payload: {$, $response}}) => receiveData(parser.parseFooter($, $response))
