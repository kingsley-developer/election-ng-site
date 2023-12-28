
type welComeStyle = {
    styles: CSSModuleClasses
}

export default function Footer_Home({styles}:welComeStyle){
    return(
        <div className={styles.footer_home_main}>
            <h2>Follow us on</h2>
        </div>
    )
}