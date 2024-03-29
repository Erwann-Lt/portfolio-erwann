const About =()=>{
    return(
        <section id="about">
            <div class="relative flex items-center 
        justify-center h-screen overflow-hidden">
        <div class="z-50 flex flex-col items-center 
        justify-center h-screen text-2xl text-black gap-12">
        <h1> La joie de vivre</h1>
        <h2>La joie du code</h2>
        </div>
        <video src=
        "https://assets.mixkit.co/videos/preview/mixkit-happy-man-running-at-low-tide-21706-large.mp4"
            autoplay="{true}" loop muted
            className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>
        </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Salut, moi c'est Erwann.
            <br className="hidden lg:inline-block" />
            J'aime apprendre et créer de nouvelles apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Passionné par le développement, je passe beaucoup de temps à rechercher les nouveautés.
            Je travaille majoritairement avec React JS ce qui fait de moi un développeur Front-End. 
            Je tends également vers du développement Full-Stack.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Travaillons ensemble
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mes projets
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
    )
}

export default About
