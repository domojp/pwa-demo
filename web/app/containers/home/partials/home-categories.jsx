import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'
import {getAssetUrl} from 'progressive-web-sdk/dist/asset-utils'

import List from 'progressive-web-sdk/dist/components/List'
import ListTile from 'progressive-web-sdk/dist/components/list-tile'
import Image from 'progressive-web-sdk/dist/components/image'
import SkeletonBlock from 'progressive-web-sdk/dist/components/skeleton-block'
import * as selectors from '../selectors'

// The ratio of the banner image width:height is 1:.75. Since the banner will be
// width=100%, we can use 75vw to predict the banner height.
const imageHeight = '75vw'
const placeholder = <SkeletonBlock height={imageHeight} />

const HomeCategories = ({categories}) => {
    return (
        <div className="t-home__categories">
            {categories.length > 0 ?
                <List>
                    {categories.map((item, index) => { // TODO: fix this when we put mobile assets on desktop
                        return Object.keys(item).length > 0 ?
                            <ListTile key={index} href={item.href}>{item.title}</ListTile>
                            :
                            null
                            ;
                    })}
                </List>
            :
                <div style={{paddingBottom: '30px'}}>
                    {placeholder}
                </div>
            }
        </div>
    )
}

HomeCategories.propTypes = {
    categories: PropTypes.array
}

const mapStateToProps = createPropsSelector({
    categories: selectors.getHomeCategories
})

export default connect(mapStateToProps)(HomeCategories)
