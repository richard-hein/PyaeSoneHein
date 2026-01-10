import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"
import MyJourney from "./sections/MyJourney"
import MySkills from "./sections/MySkills"
import MyProjects from "./sections/MyProjects"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import MyCertificates from "./sections/MyCertificates"


function App() {
  
  
  return (
    <div className="max-w-screen ">
     
    <Header/>
     <Hero/>{/* <div className="divider divider-primary"></div> */}
     <AboutMe />
     <MyJourney/>
     {/* <MyCertificates/> */}
     <MySkills/>
     <MyProjects/>
     {/* <Certificates/> */}
     <Footer/>
     
      {/* <button class="btn btn-primary">One</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button> */}
    </div>
  )
}

export default App
