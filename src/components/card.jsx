// eslint-disable-next-line react/prop-types
const Card = ({title, description, url, link}) => {
    return (
        <a href={link} target="_blank" className="group overflow-hidden md:w-[25rem] flex h-[15rem] flex-col bg-purple-200 hover:scale-110 transition duration-500 ease-out drop-shadow-lg rounded-lg justify-end">
            <h3 className="absolute  z-10 pb-[1.75rem] font-semibold drop-shadow-lg pl-2 group-hover:border-l-4 border-purple-950 text-transparent group-hover:text-white">{title}</h3>
            <p className="absolute z-10 pl-3 pb-1 text-transparent group-hover:text-white">{description}</p>
            <img className="absolute h-full w-full object-cover" src={url} alt="" />
            <div className="absolute inset-0 group-hover:animate-fade-up group-hover:animate-duration-300 transition group-hover:bg-gradient-to-b from-transparent to-neutral-950"></div>
        </a>
    )
}

export default Card;
