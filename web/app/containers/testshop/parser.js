import {getTextFrom, parseTextLink, parseImage} from '../../utils/parser-utils'
import {urlToPathKey} from '../../utils/utils'

export const testshopParser = ($, $html) => {
    // const $products = $html.find('.item.product-item')
    // const products = $products.map((_, product) => {
    //     const $product = $(product)
    //     const link = parseTextLink($product.find('.product-item-link'))
    //     const image = parseImage($product.find('.product-image-photo'))
    //     return {
    //         title: link.text.trim(),
    //         price: getTextFrom($product, '.price'),
    //         link,
    //         image,
    //         carouselItems: [
    //             {
    //                 img: image.src,
    //                 position: '1'
    //             }
    //         ]
    //     }
    // })
    return {
        // title: getTextFrom($html, '.page-title'),
        // description: getTextFrom($html, '#text'),
        // products: products.toArray()
        title: "テストタイトル",
        description: "テストデスクリプション",
        products: ["りんご","みかん"]
    }
}
