const AboutMe = () => {
  return(
    <section className="grid justify-items-center px-5 h-screen sm:flex sm:justify-evenly sm:px-0 sm:items-center">
      <img className="w-[150px]  m-auto sm:m-0 sm:w-[310px]" src="Lucas-foto-redonda.png" alt="" />
      
      <div className="text-center mt-0 sm:text-left sm:w-2/4">
        <h1 className="font-bold text-2xl sm:text-5xl">
          Olá, eu sou Lucas, engenheiro de software.
        </h1>
        <p className="mt-4 sm:mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptate ex nihil vel non sequi, obcaecati aliquid quidem debitis? Nemo laborum vitae maiores facere distinctio at nihil quod quisquam. Officia.
        </p>
        <a className="m-auto text-[20px] gap-2 text-white p-2 bg-slate-400 flex justify-between items-center border rounded-xl h-8 mt-5 w-[100%] max-w-[40%] sm:m-0 sm:mt-3" 
          href="https://www.linkedin.com/in/lucas-glaydson-syc/" target="_blank" rel="noopener noreferrer">
          <img className="h-5" src="linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp" alt="Linkedin" />
          <span className="text-[15px] flex-1 text-center md:text-[20px]">Linkedin</span>
        </a>
      </div>
    </section>
  )
}

export default AboutMe