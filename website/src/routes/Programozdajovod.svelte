<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Image from "../lib/work/Image.svelte";
    import reportsAuth from '../../assets/works/AIC/reports-auth.jpg'
    import reportsImg from '../../assets/works/AIC/report.jpg'
    import mainPage from '../../assets/works/AIC/main-page.jpg'
    import Button from '../lib/work/Button.svelte'
    import Video from "../lib/work/Video.svelte";
</script>
<MainPage workIndex=1>
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["September 2021 -","August 2022"]},
            {title: "Techniques", elems: ["Adobe Creative Cloud","Video editing","Graphic design"]},
        ]}>
        Programozd a jövőd! is an EU project run by the Ministry of Innovation and Technology of Hungary,
        with the goal of making teenagers more interested in programming.
        <Button text="Go To Website" url="https://programozdajovod.hu" />
    </TextSection>
    <Video url="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F311GINOP%2Fvideos%2F186877426815462%2F&show_text=false&width=560&t=0" alt="Video About One of Our Events" />
    <TextSection title="My Role">
        As an ambassador of the program, I created educational content about emerging technologies 
        such as AI and NFTs, participated in panel discussions about IT, and engaged with fellow teenagers
        at our events.
    </TextSection>
    <Video url="https://www.youtube.com/embed/IbiLzes_cSQ" alt="Video About NFTs" />
    <TextSection title="Educational Videos">
        I regularly made videos about all the interesting fields of IT, breaking down complex concepts into
        digestible and entertaining segments, making it accessible for viewers with varying levels of expertise.
    </TextSection>
    <Video url="https://www.youtube.com/embed/E0sbYyfXweU" alt="Video About Quantum Computers" />
    <TextSection title="More of my content">
        You can find all of my Youtube videos 
        <a href="https://www.youtube.com/watch?v=E0sbYyfXweU&list=PL81QBF6Zpc2wpM3Tha00biOWdJ876KQzi" target="_blank">here</a>.
    </TextSection>
</MainPage>