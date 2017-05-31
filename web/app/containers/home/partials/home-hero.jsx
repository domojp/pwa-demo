import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import Image from 'progressive-web-sdk/dist/components/image'
import * as selectors from '../selectors'

import SkeletonBlock from 'progressive-web-sdk/dist/components/skeleton-block'
// The ratio of the banner image width:height is 1:.75. Since the banner will be
// width=100%, we can use 75vw to predict the banner height.
const imageHeight = '75vw'
const placeholder = <SkeletonBlock height={imageHeight} />

const HomeHero = ({hero}) => {
    return (
        <div className="t-home__hero">
            {Object.keys(hero).length > 0 ?
                <a href={hero.href}>
                    <Image
                        src={"/" + hero.img.src}
                        alt={hero.img.alt}
                        className="u-block"
                        hidePlaceholder={true}
                        loadingIndicator={placeholder}
                    />
                </a>
            :
                <div style={{paddingBottom: '30px'}}>
                    {placeholder}
                </div>
            }
        </div>
    )
}

HomeHero.propTypes = {
    hero: PropTypes.object
}

const mapStateToProps = createPropsSelector({
    hero: selectors.getHomeHero
})

export default connect(mapStateToProps)(HomeHero)
