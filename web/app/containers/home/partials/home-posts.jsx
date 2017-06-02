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

import DangerousHTML from 'progressive-web-sdk/dist/components/dangerous-html'

const HomePosts = ({posts}) => {
    return (
        <div className="t-home__posts">
            {posts.length > 0 ?
                posts.map((post, index) => {
                    return Object.keys(post).length > 0 ?
                        (<Tile isColumn={false}
                            key={index}
                            href={"/" + post.morehref}
                            imageProps={{
                                src: "/" + post.thumbnail.src,
                                width: "90px",
                                height: "75px",
                                alt: post.thumbnail.alt
                            }}
                            options={[{
                                //label: "Lead: ",
                                value: <DangerousHTML html={
                                    post.leadhtml
                                    }>{(htmlObj) => <div dangerouslySetInnerHTML={htmlObj} />}</DangerousHTML>
                            }]}
                            title={post.title}
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

HomePosts.propTypes = {
    posts: PropTypes.array
}

const mapStateToProps = createPropsSelector({
    posts: selectors.getHomePosts

})

export default connect(mapStateToProps)(HomePosts)
