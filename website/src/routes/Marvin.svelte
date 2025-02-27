<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Image from "../lib/work/Image.svelte";
    import reportsAuth from '../../assets/works/AIC/reports-auth.jpg'
    import reportsImg from '../../assets/works/AIC/report.jpg'
    import mainPage from '../../assets/works/AIC/main-page.jpg'
    import Button from '../lib/work/Button.svelte'
    import Repo from "../lib/work/Repo.svelte";
</script>
<MainPage workId="marvin">
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["February 2020 -","April 2021"]},
            {title: "Techniques", elems: ["Python","Docker","Google Cloud","WebSocket"]},
        ]}>
         Marvin is an open source, extendable trading bot to daytrade cryptocurrencies.
    </TextSection>
    <Repo
        url="https://raw.githubusercontent.com/albiDmtr/marvin/main/README.md"
        ghUrl="https://github.com/albiDmtr/marvin#readme"
        ghName="albiDmtr/marvin" />
</MainPage>