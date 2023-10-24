<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Image from "../lib/work/Image.svelte";

    import reportsAuth from '../../assets/works/AIC/reports-auth.jpg'
</script>
<MainPage workIndex=0>
    <TextSection title="Project Info">
        As part of my traineeship at AIContentfy, I implemented various frontend features and backend
        changes to make the platform's user experience more polished. I worked on many smaller features,
        here you can find some of it that I'm particularly proud of.
    </TextSection>
    <Image src="{reportsAuth}" />
    <TextSection title="Google Cloud APIs">
        I implemented a feature to track the performance of the service which used the Google Analytics API and OAuth2.
    </TextSection>
</MainPage>