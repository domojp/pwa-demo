import React from 'react'
import {isRunningInAstro} from '../../utils/astro-integration'

import FooterNavigation from './partials/footer-navigation'

const Footer = () => {
    if (isRunningInAstro) {
        return null
    }

    return (
        <footer className="t-footer">
            <FooterNavigation />
        </footer>
    )
}

export default Footer
