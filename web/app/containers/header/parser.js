export const parseHeader = ($, $content) => {
    const $header = $content.find('header#header')
    const title = $header.find('div#hgroup').text(); console.log('adfadfadwfadfa',title)
    const $menu = $header.find('nav > ul > li > a')
    const menu = Array.prototype.map.call($menu, (item) => {
        return {
            item: $(item).text(),
            itemhref: $(item).attr('href')
        }
    })
    return {title, menu}
}
