import React from 'react';
import './about.css'
import img from './pro.jpg'
import img3 from './myEcommerce.PNG'
import img1 from './smartBrain.PNG'
import img2 from './myWeather.PNG'
import { FaReact } from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { TbProgress } from "react-icons/tb";
const About = () =>{
	return(
		<div>
		<div className = "about">
		
		 <div className = "about-main">
		 	
			<div className = "about-container">
			   <img src={img} className="about-img" width = "500" height = "500"/>
			   <div>
			    <h3 className = "title-div">ABOUT ME</h3>
			   	<p> I am a front-end developer with a comprehensive understanding of end-to-end web development. My journey began with a solid educational background in computer science, completed by additional certifications from Udemy in web development. <br /><br /> Throughout my web development journey, I had the opportunity to work as a front-end developer and contribute to professional projects. I also pursued personal projects alongside my learning process and after completing the course, further enriching my experience. <br /><br />I am passionate for innovation, thrive on challenges and am eager to contribute to impactful projects. 
                With a firm belief in continuous learning and growth, I am confident that I can be a valuable asset to your company.
           </p>
			   </div>
			   
			</div>
		 </div>
			
			
		</div>
		<div className = "project">
		    <h1 className = "title-bar" > Portfolio</h1> 
		    <h2 className = "text-bar">Each project is a unique place of development</h2>
			<div className = "project-container">
           	 <div className="project-file">
           	  <img src={img3} alt ="" />
           	  <div>
           	    <h1>Online Shopping</h1>
           	  	<p>E-commerce web application designed to facilitate online trading for users. While still a work in progress, this project showcases my skills in front-end development and my commitment to creating user-friendly experiences in the digital realm.</p>
           	    <div className = "loading"><TbProgress /><p className = "loading-font">Loading</p></div>
           	    <div className = "icons">
           	  	<FaReact /> <BsFiletypeScss /><GrHeroku />
           	  </div>
           	  </div>
           	 	
           	 </div>
           	 <div className="project-file">
           	  <img src={img1} alt ="" />
           	  <div>
           	    <h1>Face Detector Web Application</h1>
           	  	<p>A Face detector web application that offers users the ability to upload pictures and utilizes facial recognition technology to locate and identify faces within the images. Additionally, the application features user registration functionality, allowing users to create accounts securely within its own database. End-to-end development, covering both the frontend and backend aspects of the application to ensure seamless functionality and a user-friendly experience.</p>
           	    <div>
           	    	<a href="https://find-me-a-face-57c3927469d0.herokuapp.com/" target="blank">
           	    		<button className= "my-butt proj-but">Live Demo</button>
           	    	</a>
           	    </div> 
           	    <div className = "icons">
           	  	<FaReact /> <BsFiletypeScss /><FaNodeJs /><GrHeroku />
           	  </div>
           	  </div>
           	  
           	 	
           	 </div>
           	 <div className="project-file">
           	  <img src={img2} alt ="" />
           	  <div>
           	    <h1>Weather Application</h1>
           	  	<p>A Weather API web application designed to provide users with up-to-date weather information. Using JavaScript and an external API, this project offers a straightforward and efficient way for users to access current weather conditions and forecasts for locations worldwide.</p>
           	    <div>
           	    	<a href="https://wamisha654.github.io/Weather/" target="_blank">
           	    		<button className= "my-butt proj-but">Live Demo</button>
           	    	</a>
           	    </div>
           	    <div className = "icons">
           	  	 <FaHtml5 /><IoLogoCss3 /><SiJavascript />
           	  </div>
           	  </div>

           	 	
           	 </div>
           </div>
		</div>
		</div>
		
		
		);
}
export default About;