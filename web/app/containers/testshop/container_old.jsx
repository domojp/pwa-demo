import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import {getTitle, getText,
        getDescription, getTestshopProducts} from './selectors'
// import * as testshopActions from './actions'

const containerClass = 't-testshop'
const titleClass = `${containerClass}__title`

const Testshop = ({title, text}) => (
    <div className={containerClass}>
        <h1 className={titleClass}>{title}</h1>
        {text.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
    </div>
)

Testshop.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = createPropsSelector({
    text: getText,
    title: getTitle,
    description: getDescription,
    products: getTestshopProducts
})

const mapDispatchToProps = {
    // setTitle: testshopActions.setTitle
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testshop)
