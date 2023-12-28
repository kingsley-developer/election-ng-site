import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
} from "./Activities_Path"
import SimpleImageSlider from "react-simple-image-slider"

type welComeStyle = {
    styles: CSSModuleClasses
}

const images = [
    {url: img1},
    {url: img2},
    {url: img3},
    {url: img4},
    {url: img5},
    {url: img6},
    {url: img7},
    {url: img8},
    {url: img9},
    {url: img10},
    {url: img11},
    {url: img12},
    {url: img13},
]

export default function Activities({styles}:welComeStyle){
    return(
        <div className={styles.act_slides}>
            <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            />
        </div>
    )
}