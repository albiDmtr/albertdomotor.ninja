<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Image from "../lib/work/Image.svelte";
    import reportsAuth from '../../assets/works/AIC/reports-auth.jpg'
    import reportsImg from '../../assets/works/AIC/report.jpg'
    import mainPage from '../../assets/works/AIC/main-page.jpg'
    import Button from '../lib/work/Button.svelte'
</script>
<MainPage workIndex=0>
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["June - October 2023"]},
            {title: "Techniques", elems: ["Node.js","TypeScript","React","MongoDB","Express.js","Google Cloud APIs"]},
        ]}>
        As part of my traineeship at AIContentfy, I implemented various frontend features and backend
        changes to make the platform's user experience more polished. I worked on many smaller features,
        here you can find some of it that I'm particularly proud of.
        <Button text="Go To Website" url="https://app.aicontentfy.com/sign-in" />
    </TextSection>
    <Image src="{mainPage}" alt="The Main Screen Of The App" />
    <TextSection title="My Role">
        As a trainee at AIContentfy, I implemented frontend changes in the app and modified some backend functionalities.
    </TextSection>
    <Image src="{reportsImg}" alt="The Reports Dashboard" />
    <TextSection title="Google Cloud APIs">
        I implemented a feature to track the performance of the service which used the Google Analytics API and OAuth2.
    </TextSection>
    <Image src="{reportsAuth}" alt="The authorization screen of the Reports feature" />
    <TextSection title="Google Cloud APIs">
        I implemented a feature to track the performance of the service which used the Google Analytics API and OAuth2.
    </TextSection>
</MainPage>