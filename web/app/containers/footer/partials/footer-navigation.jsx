import React, {PropTypes} from 'react'
import {createPropsSelector} from 'reselect-immutable-helpers'
import * as selectors from '../selectors'
import {connect} from 'react-redux'

import Divider from 'progressive-web-sdk/dist/components/divider'
import ListTile from 'progressive-web-sdk/dist/components/list-tile'
import SkeletonText from 'progressive-web-sdk/dist/components/skeleton-text'

const FooterNavigation = ({footer}) => {
    return (
        footer ?
            <div className="t-footer__copyright u-padding-top u-padding-bottom">
                <p>{footer.copyright}</p>
                <p className="u-margin-top">{footer.owner}</p>
            </div>
        :
        <SkeletonText width="135px" style={{lineHeight: '20px'}} />
    )
}

FooterNavigation.propTypes = {
    fotter: PropTypes.array
}

const mapStateToProps = createPropsSelector({
    footer: selectors.getFooter
})

export default connect(mapStateToProps)(FooterNavigation)
