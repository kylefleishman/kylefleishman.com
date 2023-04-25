// Import React & Gatsby.js's Link component

import * as React from 'react'
import { Hero } from '../components/Hero'
import Layout from '../components/Layout'
import rose from '../assets/flower.jpg'
import sights from '../assets/sites.jpg'

// Define your component
const About = () => {
  return (
    <Layout> 
    

      <div className="container">
        <div className="hero-wrapper">
          <Hero  index> <h1> About Me</h1>
            <p className="subtitle">
            Hey, I'm Kyle! I’m a Network Engineer and computer geek working in the Chicago area. This is where I share my projects, tutorials, websites, and anything else I feel like putting out into the world. On the projects page, you'll find a showcase of my past work and projects. I'm passionately contributing to the tech community, pushing technology to its limits, and making tools and resources more accessible to all, one bit and byte at a time.           <br></br><br></br>
          You can contact me by email at <b>hello</b> at <b>kylefleishman.com</b> to say hi or shoot over a question! I always appreciate meeting new people.
            </p>
          </Hero>
          <div className='about-image'><img src={rose} alt="Photo of a pink rose" /></div>
        </div>
      </div>

      
      <div className="container">
        <div className="about-wrapper">
       
          <div className='about'>
          <div className='facts-image'><img src={sights} alt="Photo a cow pasture with a forest in the distance" /></div>
          
            </div>
            <div className='fun-facts'>
            <h1> Some Fun Facts. </h1>
            <p className="subtitle">
            <p>I'm a level 5 alchemist in my current D&D campaign, I have two cats named Riku and Takkun, I love to go hiking, I can assemble any skateboard or bike, I love to photograph nature, and I'm currently making my own simulated computer from scratch in CRUMB. </p>
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="nutshell-wrapper">
          <div className='contact'> <h1> In a nutshell I'm...</h1>
            <p className="nutshell">
              A lifelong learner, level 5 D&D alchemist, coffee enthusiast, cat person, software developer, musician, gamer, and network engineer.
              
            </p>
          </div>

        </div>
      </div>


      <div className="container">
        <div className="about-wrapper">
       
          <div className='about'><h1> The Story<br/>So Far.</h1>
          
            </div>
            <div className='about'>
            <p className="subtitle">
            Even as young as 13, I knew that my career lay in the technology industry. While growing up, me and my friends were obsessed with video games, although rather than just playing them, we wanted to understand how they were made and create our own. What started with a couple of websites and engines that let you create your own games, eventually led us to write our first programs in Java and brainstorm and create an RPG text-based adventure.  This was the spark that led me to where I am today, as since then, I've continued my interest in technology, constantly pushing my knowledge to greater heights. Although even at the start of my journey, I recognize that greater minds than I have paved the way for me. After all, it was my friend's idea to start coding, and my friends taught my system administration with all the ins and outs of how to host and administer video game servers.            
            <br/> <br/>
            One quote that has always resonated with me is Isaac Newton's "If I have seen further, it is only because I have stood on the shoulders of giants." This quote speaks to the beginning of my career journey, starting as a high schooler in the help desk department. It was there that I was fortunate enough to have a mentor who taught me about networking and software development. I spent two and a half years at the help desk, and the relationships I formed during that time ultimately led to a recommendation from my mentor that helped me secure my first “entry” level technical position at ClearSKY Systems, Inc. 
            <br/> <br/>
            After signing onto ClearSKY, I also signed on to pursue night school to continue my education and achieve my Bachelor’s in Information Technology at Lewis University while working full time. While I knew it would be a challenge, I also knew that it would be something I would never regret. While working at ClearSKY, it taught me what it took to be a good Engineer. It's essential to understand that the internet never sleeps, and neither can you. This means being willing to tackle any challenge that comes your way, no matter how difficult or time-consuming it may be. Whether it be performing disaster recovery in the twilight hours of the morning, digging deep into the bits and bytes of packets captured, or creating automated processes to replace manual ones. Ultimately, as a Network Engineer, you do whatever it takes to keep the network operational and running smoothly. It's just what we do. 
            <br/> <br/>
            Throughout my career so far, I've performed roles as a network engineer and software developer in technology industry that have provided me with valuable lessons and experience. However, a burning question that always persists within me is: how does it all work?   
            <br/> <br/>
            But that's the story so far, and I'm excited to see where the future takes me in this ever-evolving industry. 
            </p>
            </div>
        </div>

       
      </div>
      </Layout>
  )
}

// Export your component
export default About
