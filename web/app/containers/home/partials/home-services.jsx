import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import Tile from 'progressive-web-sdk/dist/components/tile'
import * as selectors from '../selectors'

import SkeletonBlock from 'progressive-web-sdk/dist/components/skeleton-block'
// The ratio of the banner image width:height is 1:.75. Since the banner will be
// width=100%, we can use 75vw to predict the banner height.
const imageHeight = '75vw'
const placeholder = <SkeletonBlock height={imageHeight} />

const HomeServices = ({services}) => {
    return (
        <div className="t-home__services">
            {services.length > 0 ?
                services.map((service, index) => {
                    return Object.keys(service).length > 0 ?
                        (<Tile
                            key={index}
                            href={"/" + service.morehref}
                            imageProps={{
                                src: "/" + service.icon.src,
                                width: "88px",
                                height: "88px",
                                alt: service.icon.alt
                            }}
                            options={
                                [
                                    {
                                        label: "Lead: ",
                                        value: service.lead
                                    }
                                ]
                            }
                            title={service.title}
                        />)
                    :
                        null
                    ;
                })
            :
                <div style={{paddingBottom: '30px'}}>
                    {placeholder}
                </div>
            }
        </div>
    )
}

HomeServices.propTypes = {
    services: PropTypes.array
}

const mapStateToProps = createPropsSelector({
    services: selectors.getHomeServices
})

export default connect(mapStateToProps)(HomeServices)
