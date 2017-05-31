import Immutable from 'immutable'
import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'
import {getUi} from '../../store/selectors'

export const getTestshop = createSelector(
    getUi,
    ({testshop}) => testshop
)

export const getTitle = createGetSelector(getTestshop, 'title')
export const getText = createGetSelector(getTestshop, 'text', Immutable.List())

export const getDescription = createGetSelector(getTestshop, 'description')
export const getTestshopProducts = createGetSelector(getTestshop, 'products', Immutable.List())
