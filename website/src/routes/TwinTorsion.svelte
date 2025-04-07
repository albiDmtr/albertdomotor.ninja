<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Button from '../lib/work/Button.svelte'
</script>
<MainPage workId="twintorsion">
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["July - December 2024"]},
            {title: "Techniques", elems: ["Node.js","Python","TypeScript","Google Cloud","Svelte","Svelte Flow"]},
        ]}>
        At the Aalto University DigiTwin Lab, I was responsible for the TwinTorsion Editor, a web application aiding the design and optimization of powertrains using digital twins.
        <Button text="Go To Application" url="https://twintorsion.aalto.fi/" />
    </TextSection>
    <p class="soon">More information about the project coming soon..</p>
</MainPage>
<style>
    .soon {
        opacity: 0.8;
        font-size: 18px;
        text-transform: uppercase;
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
        text-align: center;
        margin-top: 26px;
    }
</style>
