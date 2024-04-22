<script>
    import MainPage from "../lib/work/MainPage.svelte";
    import TextSection from "../lib/work/TextSection.svelte";
    import Repo from "../lib/work/Repo.svelte";
    import Button from '../lib/work/Button.svelte'
</script>
<MainPage workIndex=4>
    <TextSection
        title="Project Info"
        subsections={[
            {title: "Time", elems: ["October -","December 2019"]},
            {title: "Techniques", elems: ["HTML/CSS","JavaScript"]},
        ]}>
        Vision Translate is a browser extension that helps learning a new language by associating words with images 
         as well as making word quizes for you. It is used by over a thousand people.
        <Button text="Chrome Webstore" url="https://chrome.google.com/webstore/detail/vision-translate-smart-hi/aemapjnikiphnefgmocicmlmbdhodkea" />
    </TextSection>
    <Repo
        url="https://raw.githubusercontent.com/albiDmtr/vision-translate/master/README.md"
        ghUrl="https://github.com/albiDmtr/vision-translate#readme"
        ghName="albiDmtr/vision-translate" />
</MainPage>