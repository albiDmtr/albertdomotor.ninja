<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Button from '../lib/work/Button.svelte'
</script>
<MainPage workId="ddt-lab">
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["December 2024 -","January 2025"]},
            {title: "Techniques", elems: ["Node.js","TypeScript","Svelte","Svelte Flow"]},
        ]}>
        DDT Lab is a platform built as part of my job at the Aalto University DigiTwin lab for the definition of requirements for FMI models used in the collaborative design of powertrains.
        <Button text="Go To Application" url="https://ddtlab.aalto.fi/" />
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
