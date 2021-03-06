import {getCheckoutConfigObject} from '../../utils/magento-utils'
import {isRunningInAstro, jsRpcMethod} from '../../utils/astro-integration'

const appParser = ($html) => {
    let isLoggedIn = !!$html.find('.customer-welcome').length
    if (!isLoggedIn) {
        // We may be on a checkout page so check the checkout config object
        const config = getCheckoutConfigObject($html)
        isLoggedIn = (config && config.customerData) ? config.customerData.constructor !== Array : isLoggedIn
    }

    if (isRunningInAstro) {
        if (isLoggedIn) {
            jsRpcMethod('user:loggedIn', [])()
        } else {
            jsRpcMethod('user:guest', [])()
        }
    }

    const result = {isLoggedIn}

    const formKeyInput = $html.find('input[name="form_key"]')
    // It looks like the form key is always the same for a given
    // session. So we just grab the first one.
    if (formKeyInput.length) {
        result.formKey = formKeyInput.val()
    }

    return result
}

export default appParser
