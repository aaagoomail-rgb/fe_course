import AvatarImage from "../commons/AvatarImage"
import Menu from "../commons/Menu"

export default function Home() {
    return(
        <section id="home">
            <AvatarImage img = "images/favicon.ico" alt = "photo" style="hoem-avatar" />
            <h2 className="home-title">
                Hello<br/>
                I'm <strong className="home-title-strong">Junior Developer</strong>,
                Judy
            </h2>
            <p className="home-description">A software engineer currently residing in Seoul, South Korea</p>
            {/* <a className="home-contact" href="#">contact me</a> */}
            <Menu href="#" style="home-contact" name="contact me" />
        </section>
    )
}