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
        AIContentfy is a platform designed for automating content generation to enhance SEO. In my role as a fullstack
        software engineer, I contributed to the implementation of various features.
        <Button text="Go To Website" url="https://app.aicontentfy.com/sign-in" />
    </TextSection>
    <Image src="{mainPage}" alt="The Main Screen Of The App" />
    <TextSection title="My Role">
        Implementing frontend features and backend changes to make the platform's user experience more polished.
        I primarily worked on the React frontend, but I also made backend modifications to improve efficiency or support new
        features.
    </TextSection>
    <Image src="{reportsImg}" alt="The Reports Dashboard" />
    <TextSection title="The Dashboard">
        I created a feature that tracks blog performance using Google Analytics data. At the dashboard, users can view various
        metrics and get suggestions on how to improve reach.
    </TextSection>
    <Image src="{reportsAuth}" alt="The authorization screen of the Reports feature" />
    <TextSection title="Google Cloud APIs">
        The Google OAuth and Analytics API was used to retrieve a wide range of data, such as traffic sources, user behavior,
        and conversion metrics. This data was then processed and presented in a user-friendly format within the Reports feature.
    </TextSection>
</MainPage>
