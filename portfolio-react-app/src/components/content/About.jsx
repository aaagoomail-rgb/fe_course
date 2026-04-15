import { Title, Description } from "../commons/Titles"
import Majors from "./Majors";
import Jobs from "./Jobs";

export default function About() {
    const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere sequi maiores quisquam dolore nisi possimus in, atque at voluptatibus ab velit expedita aperiam doloribus et nam, perferendis provident quia corporis!`;

    return(
        <section id="about" className="section container">
            <Title title = "About me" />
            <Description description={lorem} />
            <Majors />
            <Jobs />
        </section>
    )
}