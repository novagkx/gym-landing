export default function TrainingItem ({children, src, alt}){
    return (
        <li className="sport-section__item">
          <a href="#" >
            <h3 className="sport-section__h3">{children}</h3>
            <img style={{width: "420px", height:"235px"}} src={src} alt={alt} />
            </a>
          </li>
    )
}