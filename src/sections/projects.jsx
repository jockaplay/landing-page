import Card from "../components/card"

const Projects = () => {
    return (
        <section id="projetos" className="px-10">
            <h2 className="text-center text-3xl font-semibold border-b-2 pb-10 border-black">Projetos</h2>
            <div className="flex flex-col space-y-5 md:space-y-20 mt-10 pb-10">
                <ul className="flex flex-col space-y-5 md:flex-row justify-center md:justify-between">
                    <li>
                        <Card link={'https://eraumavez.vercel.app/'} title={'Era uma vez'} description={'Langing page real comercial'} url={'https://i.postimg.cc/nr3k4SzN/project2.png'}/>
                    </li>
                    <li>
                        <Card link={'https://jockaplay-todolist.netlify.app/'} title={'ToDo App'} description={'Aplicativo de anotação de tarefas'} url={'https://i.postimg.cc/tCDfkDwq/project1.png'}/>
                    </li>
                    <li>
                        <Card link={'https://responsive-login-screen.vercel.app/'} title={'Tela de login'} description={'Tela de login responsiva'} url={'https://i.postimg.cc/Px9ZdGCX/project3.png'}/>
                    </li>
                </ul>
                <div className="md:flex justify-center"><a target="_blank" href="https://github.com/jockaplay?tab=repositories" className="flex justify-center md:w-2/12 bg-purple-950 rounded-2xl text-white p-5 md:p-2">Ver Mais</a></div>
            </div>
        </section>
    )
}

export default Projects;