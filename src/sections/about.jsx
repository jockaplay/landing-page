const About = () => {
    return (
        <section>
            <div className="bg-purple-950 text-white px-10 md:px-20 space-y-20 pt-10">
                <h2 className="text-center text-3xl font-semibold border-b-2 pb-10">Sobre</h2>
                <div className="flex space-x-10 justify-between">
                    <p className="md:w-6/12 text-justify">Olá, <span className="font-bold">meu nome é Jocka</span>. Atualmente estudando na Universidade Federal de Alagoas, cursando ciência da computação, procuro oportunidades de adquirir experiência na área de programação e tecnologia.<br/><br/>
                    Sempre fui apaixonado por tecnologia e por volta de 2019 entrei no mundo da programação e achei incrível, desde então tenho me aperfeiçoado e me proficionalizado cada vez mais, já fiz alguns projetos comerciais na empresa que trabalhava e alguns projetos pessoais, mas ainda não entrei em um grande projeto, e espero conseguir por meio deste site, mais visibilidade para talvez encontrar estas oportunidades.</p>
                    <a href="https://jockaplay.itch.io/" target="_blank" className="hidden md:flex flex-col text-center justify-center space-y-5 border-2 rounded-lg border-dashed object-cover w-5/12 px-20">
                        <img className="object-scale-down w-50 h-50" src="src/assets/store.png" alt="" srcset="" />
                        <p>Game store</p>
                    </a>
                </div>
                    <div className="flex justify-center">
                    <ul className="flex">
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-python"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-html5"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-css3"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-javascript"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-react"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-docker"></ion-icon>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="src\assets\wave.svg" alt="" srcset="" />
        </section>
    )
}

export default About;