import Job from "./Job"

export default function Majors() {
    const jobs = [
        {"img" : "images/jobs/google.png", "alt" : "google", "name" : "Google as Junior Software engineer", "period" : "2019 Oct - Until now"},
        {"img" : "images/jobs/samsung.png", "alt" : "samsung", "name" : "Samsung as Junior Software engineer", "period" : "2010 Oct - 2019 Oct"}
    ]
    return(
        <ul className="jobs">
            { jobs.map((item, idx) => {
                <li className="job" key={idx}>
                    <Job img={item.img} alt={item.alt} name={item.name} period={item.period} />
                </li>
            }) }
        </ul>
    )
}