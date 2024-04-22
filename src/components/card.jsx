const Card = ({title, description, url, link}) => {
    return (
        <a href={link} target="_blank" className="w-[25rem] p-3 flex h-[15rem] flex-col bg-purple-200 hover:scale-110 transition drop-shadow-lg rounded-lg bg-cover bg-center justify-end" style={{'backgroundImage': 'url(' + url + ')'}}>
            <h3 className="font-semibold drop-shadow-lg pl-2 border-l-4 border-purple-950">{title}</h3>
            <p>{description}</p>
        </a>
    )
}

export default Card;