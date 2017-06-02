import React from 'react'
import {isRunningInAstro} from '../../utils/astro-integration'

import HeaderTitle from './partials/header-title'

const Header = () => {
    if (isRunningInAstro) {
        return null
    }

    return (
        <header className="t-header">
            <HeaderTitle />
        </header>
    )
}

export default Header
