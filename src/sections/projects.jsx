const Projects = () => {
    return (
        <section id="projetos" className="px-10">
            <h2 className="text-center text-3xl font-semibold border-b-2 pb-10 border-black">Projetos</h2>
            <div className="mt-10">
                <ul className="flex flex-col space-y-4 md:flex-row">
                    <li className="flex md:w-4/12 justify-center md:justify-start"><a href="#" className="p-3 flex w-full md:w-10/12 h-[15rem] flex-col bg-purple-200 hover:scale-110 transition drop-shadow-lg rounded-lg bg-cover bg-center bg-[url('https://i.postimg.cc/nr3k4SzN/project2.png')] justify-end"><h3 className="font-semibold drop-shadow-lg pl-2 border-l-4 border-purple-950">Era uma vez</h3><p>Projeto real</p></a></li>
                    <li className="flex md:w-4/12 justify-center"><a href="#" className="p-3 flex w-full md:w-10/12 h-[15rem] flex-col bg-purple-200 hover:scale-110 transition drop-shadow-lg rounded-lg bg-cover bg-center bg-[url('https://i.postimg.cc/Px9ZdGCX/project3.png')] justify-end"><h3 className="font-semibold drop-shadow-md pl-2 border-l-4 border-purple-950">Lista de tarefas</h3><p>Aplicativo para gerir tarefas</p></a></li>
                    <li className="flex md:w-4/12 justify-center md:justify-end"><a href="#" className="p-3 flex w-full md:w-10/12 h-[15rem] flex-col bg-purple-200 hover:scale-110 transition drop-shadow-lg bg-cover bg-center rounded-lg bg-[url('https://i.postimg.cc/tCDfkDwq/project1.png')] justify-end"><h3 className="font-semibold drop-shadow-lg pl-2 border-l-4 border-purple-950">Tela de login</h3><p>Simulação de tela de login</p></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Projects 