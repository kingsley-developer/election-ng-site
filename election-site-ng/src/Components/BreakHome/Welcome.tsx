import Typewriter from 'typewriter-effect';

type welComeStyle = {
    styles: CSSModuleClasses
}

export default function Home({styles}:welComeStyle){
    const welcome = `<h1 class=${styles.home_main_Welcome_h1}>Welcome To Election.ng</h1>`;
    return(
        <Typewriter
         options={{
         strings: [welcome],
         autoStart: true,
         loop: true,
         }}
/>
    )
}