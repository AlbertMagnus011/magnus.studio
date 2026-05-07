import { Footer } from "../layout/Footer"
import { ContactSection } from "../sections/ContactSection"
import { HeroSection } from "../sections/HeroSection"
import { ProjectsSection } from "../sections/ProjectsSection"
import { SkillsSection } from "../sections/SkillsSection"

export const HomeTemplate = () => {
    return (
        <>
            <HeroSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
            <Footer></Footer>
        </>
    )
}