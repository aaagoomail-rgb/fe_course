import AvatarImage from "../components/commons/AvatarImage.jsx";
import Menu from "../components/commons/Menu.jsx";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
    const { data } = useOutletContext();    // -> contenct 객체 전체 받음
    const { img, alt, title, name, description, href, menuName } = data?.home || {};
    const likeCount = useSelector((state) => state.like.count);
    const projectList = useSelector((state) => state.like.list);

    return (
        <section id="home">
            <AvatarImage img={img}
                            alt={alt}
                            style="home-avatar" />
            <h2 className="home-title">
                Hello<br/>
                I'm <strong className="home-title-strong">{title}</strong>,
                {name}
            </h2>
            <p className="home-description">{description}</p>
            <Menu   href={href}
                    style="home-contact"
                    name={menuName} />
            <h1 style={{color:'red'}}>♥️Like[{likeCount}]</h1>
            <p>{projectList}</p>
        </section>
    )
}