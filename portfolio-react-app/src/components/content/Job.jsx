import AvatarImage from "../commons/AvatarImage"

export default function Job({ img, alt, name, period }) {
    return (
        <>
            <AvatarImage img={img} alt={alt} />
            <div>
                <p className="job-name">{name}</p>
                <p className="job-period">{period}</p>
            </div>
        </>
    )
}