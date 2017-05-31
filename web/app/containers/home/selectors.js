import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'
import {getUi} from '../../store/selectors'

export const getHome = createSelector(getUi, ({home}) => home)

//export const getHomeBanners = createGetSelector(getHome, 'banners')
export const getHomeHero = createGetSelector(getHome, 'hero')
export const getHomeServices = createGetSelector(getHome, 'services')
export const getHomeLatest = createGetSelector(getHome, 'latest')
export const getHomePosts = createGetSelector(getHome, 'posts')
export const getHomeCategories = createGetSelector(getHome, 'categories')
