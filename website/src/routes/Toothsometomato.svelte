<script>
    import MainPage from "../lib/work/MainPage.svelte"
    import TextSection from "../lib/work/TextSection.svelte"
    import Image from "../lib/work/Image.svelte"
    import reportsAuth from '../../assets/works/AIC/reports-auth.jpg'
    import reportsImg from '../../assets/works/AIC/report.jpg'
    import mainPage from '../../assets/works/AIC/main-page.jpg'
    import Repo from "../lib/work/Repo.svelte"
</script>
<MainPage workIndex=4>
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["September 2021"]},
            {title: "Techniques", elems: ["Node.js","HTML/CSS","Electron"]},
        ]}>
        I made Toothsome Tomato as a small UI design experiment. It is a simple pomodoro timer app, nothing more, nothing less.
    </TextSection>
    <Repo
    url="https://raw.githubusercontent.com/albiDmtr/toothsome-tomato/main/README.md"
    ghUrl="https://github.com/albiDmtr/toothsome-tomato#readme"
    ghName="albiDmtr/toothsome-tomato" />
</MainPage>