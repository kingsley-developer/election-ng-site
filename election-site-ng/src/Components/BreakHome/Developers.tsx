import kingsley_profile from "../../assets/dev-imgs/1695464818225.jpg"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

type welComeStyle = {
    styles: CSSModuleClasses
}

export default function Developers({styles}:welComeStyle){
    return(
        <div className={styles.dev_main}>
            <h2>Developers</h2>
            <div className={styles.kingsley_pro_main}>
            <ScrollAnimation animateIn="fadeIn" delay={1000}>
            <div className={styles.kingsley_pro_main_img}>
            <img src={kingsley_profile} alt="1695464818225.jpg"/>
            </div>
            </ScrollAnimation>
            <div className={styles.kingsley_pro_p}>
            <p>NAME: ANYICHIE KINGSLEY CHINEMELU<br/>
                JOB: FULL STACK WEB DEVELOPER</p>    
            </div>
            </div>
        </div>
    )
}