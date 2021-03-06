import React from 'react'

import ProductDetailsHeading from './partials/product-details-heading'
import ProductDetailsCarousel from './partials/product-details-carousel'
import ProductDetailsDescription from './partials/product-details-description'
import ProductDetailsAddToCart from './partials/product-details-add-to-cart'
import ProductDetailsItemAddedModal from './partials/product-details-item-added-modal'
import ProductNearestStores from './partials/product-nearest-stores'

const ProductDetails = ({route: {routeName}}) => {
    return (
        <div className="t-product-details">
            <ProductDetailsHeading isInCheckout={routeName === 'cartEditPage'} />
            <ProductDetailsCarousel />
            <ProductDetailsDescription />
            <ProductDetailsAddToCart />
            <ProductDetailsItemAddedModal />
            <div className="u-padding-md u-bg-color-neutral-10">
                <ProductNearestStores title="The Product is sold in the store" viewAllStoresText="Check all stores" class="u-margin-all" />
            </div>
        </div>
    )
}

ProductDetails.propTypes = {
    /**
    * The route object passed down by the router
    */
    route: React.PropTypes.object,
}

export default ProductDetails
