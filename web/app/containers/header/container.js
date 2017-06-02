import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'
import throttle from 'lodash.throttle'
import classnames from 'classnames'

import * as headerActions from './actions'
import * as miniCartActions from '../mini-cart/actions'
import {openModal} from '../../store/modals/actions'
import {NAVIGATION_MODAL} from '../navigation/constants'
import * as selectors from './selectors'
import {getCartSummaryCount} from '../../store/cart/selectors'

import {HeaderBar} from 'progressive-web-sdk/dist/components/header-bar'

import HeaderTitle from './partials/header-title'

const Header = () => {
    return (
        <header className="t-header">
            <HeaderBar>
                <HeaderTitle />
            </HeaderBar>
        </header>
    )
}

export default Header
