export const parseFooter = ($, $content) => {
    const $footer = $content.find('footer#footer')
    const copyright = $footer.find('p.fl_left').text()
    const owner = $footer.find('p.fl_right').text()
    return {
        copyright,
        owner
    }
}
