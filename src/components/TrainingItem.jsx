export default function TrainingItem({children, src, alt}) {
    return (
        <li className="sport-section__item">
            <a href="#">
                <h3 className="sport-section__h3">{children}</h3>
                <img src={src} alt={alt}/>

            </a>
        </li>
    )
}