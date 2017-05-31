import {parseImage} from '../../../utils/parser-utils'

const BANNER_SELECTOR = 'strong.logo, .home-t-shirts, .home-erin'

const homeParser = ($, $html) => {
    const $hero = $html.find('#slider > a');
    const hero = {
        href: $hero.attr('href'),
        img: parseImage($hero.find('img'))
    };
    const services = Array.prototype.map.call($html.find('#services > article'), (service) => {
        const $service = $(service);
        return {
            icon: parseImage($service.find('figure > img')),
            title: $service.find('strong').text(),
            lead: $service.find('p:first-of-type').text(),
            morehref: $service.find('p.more > a').attr('href')
        };
    });
    const latest = Array.prototype.map.call($html.find('#latest ul > li > img'), (elem) => {
        const $elem = $(elem);
        return {
            imgalt: $elem.attr('alt'),
            imgsrc: $elem.attr('x-src') ? $elem.attr('x-src') : $elem.attr('src')
        };
    });
    const posts = Array.prototype.map.call($html.find('#posts figure'), (elem) => {
        const $elem = $(elem);
        return {
            thumbnail: parseImage($elem.find('img')),
            title: $elem.find('h2').text(),
            leadhtml: $elem.find('p').html(),
            morehref: $elem.find('footer.more > a').attr('href')
        };
    });
    const categories = Array.prototype.map.call($html.find('#right_column ul > li > a'), (category) => {
        const $category = $(category);
        return {
            title: $category.text(),
            href: $category.attr('href')
        };
    });
    return {hero, services, latest, posts, categories};
}

export default homeParser
