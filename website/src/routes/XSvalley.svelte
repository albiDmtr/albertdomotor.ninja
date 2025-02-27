<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Image from "../lib/work/Image.svelte";
    import SplitAnimation from "../lib/work/SplitAnimation.svelte";
    import applyPage from '../../assets/works/XSV/apply-page.jpg'
    import screenshot from '../../assets/works/XSV/screenshot.jpg'
    import desktopAnim from '../../assets/works/XSV/scrollthrough-desktop.mp4'
    import mobileAnim from '../../assets/works/XSV/scrollthrough-mobile.mp4'
    import Button from '../lib/work/Button.svelte'
</script>
<MainPage workId="xsvalley">
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["March 2024"]},
            {title: "Techniques", elems: ["THREE.js","JavaScript", "WordPress", "HTML/CSS"]},
        ]}>
        XSValley is a project by <a href="https://aaltoes.com" target="_blank">Aaltoes</a> that aims to connect talent from 
        Finnish universities to startups in the San Francisco Bay Area. I'm responsible for the website and visual identity of the project.
        <Button text="Go To Website" url="https://xsvalley.com/" />
    </TextSection>
    <Image src="{screenshot}" alt="The Main Screen Of The App" />
    <TextSection title="3D Scroll Animation">
        This was my first try with 3D on the web and I wanted to make it special. I used THREE.js to create 
        a scene that reacts to the user's scroll. Making it work on both desktop and mobile is usually a challenge with
        3D sites, but I managed to create a smooth experience on both platforms.
    </TextSection>
    <SplitAnimation src1="{desktopAnim}" src2={mobileAnim} size1={0.7} size2={0.3} alt="Desktop And Mobile Views Of The Website" />
    <TextSection title="Using WordPress">
        The website is running on WordPress using a custom theme I built. WordPress provides an easy way for
        the team to update content on the site without touching the code.
    </TextSection>
    <Image src="{applyPage}" alt="The Apply Page" />
</MainPage>
