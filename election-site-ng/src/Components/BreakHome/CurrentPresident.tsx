import current_Pre_Img from "../../assets/currentpresident-img/1200px-Bola_Tinubu_portrait.jpg";
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

type welComeStyle = {
    styles: CSSModuleClasses
}

function CurrentPresident({styles}:welComeStyle) {
    
  return (
    <div className={styles.current_pre_main}>
      <h1>Current President</h1>
      <ScrollAnimation animateIn="fadeIn" delay={1000}>
      <div className={styles.current_pre_main_img}>
      <img src={current_Pre_Img} alt="1200px-Bola_Tinubu_portrait.jpg"/>
      </div>
      </ScrollAnimation>
      <h2>PRESIDENT BOLA AHMED TINUBU</h2>
    </div>
  )
}

export default CurrentPresident
