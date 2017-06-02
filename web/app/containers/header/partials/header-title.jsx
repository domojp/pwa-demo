import React, {PropTypes} from 'react'
import classNames from 'classnames'
import {createPropsSelector} from 'reselect-immutable-helpers'
import * as selectors from '../selectors'
import {connect} from 'react-redux'

import Link from 'progressive-web-sdk/dist/components/link'
import {HeaderBarTitle} from 'progressive-web-sdk/dist/components/header-bar'

const HeaderTitle = ({title, menu}) => {

    return (
        title ?
            <div className="u-flex">
                <HeaderBarTitle>
                    <h1>{title}</h1>
                    menu.map((item) =>
                        <Link href={"/"+menu.itemhref}>
                            <h1>{manu.item}</h1>
                        </Link>
                    )
                </HeaderBarTitle>
            </div>
        :
            <div />
    )
}

HeaderTitle.propTypes = {
    header: PropTypes.object
}

const mapStateToProps = createPropsSelector({
    header: selectors.getHeader
})

export default connect(mapStateToProps)(HeaderTitle)

