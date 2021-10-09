import CMS from 'netlify-cms';

type Props = {
    images: []
};
function Carousel({images}: Props) {
    const { length } = images;
    return (<div className="carousel">{{length}}</div>);
}
CMS.registerWidget('Carousel', Carousel);
export default Carousel;
