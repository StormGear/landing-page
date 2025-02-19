

import { motion } from 'framer-motion'
import hargrovy from '../assets/hargrovy.jpg'
import kyra from '../assets/kyra.jpg'
import jd from '../assets/jd.jpeg'
import React from 'react'

const AboutTeam = () => {
return (
    <div>
        <h2 className="text-2xl font-bold text-[#ff3130]-800 m-6 text-center">
            About Our Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  
                >
                  <div className="border-8 border-white">
                      <img
                        src={hargrovy}
                        alt="Placeholder"
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-[#ff3130]"
                      />
                  </div>
                </motion.div>
                <p className="mx-6 my-5">
                    <i><b>Kyra Rénel (Hardwick), MBA Master Business Strategist | Founder & CEO of The Kyra Company, LLC Founder of Smart CEO & BWA Media | Author & Speaker</b></i>
                </p>
                <p className="mx-6 my-5">
                <span className="pl-4">Kyra Rénel</span> is an impact-seeking business strategist and transformative leader with a track record of driving
                organizational growth, efficiency, and profitability. As the founder of The Kyra Company, LLC,
                she empowers businesses to optimize their operations and maximize impact. Known for her strategic brilliance and operational expertise, Kyra has built high-performing teams and streamlined processes for top companies across industries. 
                An author, speaker, and thought leader, Kyra has a unique ability to inspire and ignite action through dynamic keynotes and impactful panel moderation. Her talent for leading with transparency, building alliances, and fostering collaboration makes her a sought-after voice in
                business development and leadership. Beyond business, Kyra is deeply committed to the community. She founded Imagine Excellence, Inc., a nonprofit impacting young leaders and emerging adults through leadership and STEAM programs. As co-founder of BWA Media,
                she amplifies the voices of women entrepreneurs and corporate leaders, driving economic empowerment through storytelling and collaboration. Kyra’s authority and influence extend across business, education, and media, cementing her as a leader who shapes industries
                and communities. A Mom of Three Amazing Young Adults, she finds her moments of reset journaling, traveling around the globe, and hosting her cosmic inner circle right at home. When it comes to “Excellence” Kyra lives by this thought…“You either have time to
                do it right, or do it over.”
                </p>
            </div>

            <div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               
                >
                  <div className="border-8 border-white">
                      <img
                        src={kyra} // Replace with your image URL
                        alt="Placeholder"
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-[#ff3130]"
                      />
                  </div>
                </motion.div>
                <p className='mx-6 my-5'>
                    <i><b>Arquella Hargrove, MBA,</b></i> is a sought-after facilitator, leadership consultant, speaker, and coach dedicated to the transformative and sustainable results of people through development. She is an author of Coaching Perspectives, Leadership Coaching Strategies Chapter. A moderator and frequent panel speaker on diversity, women in leadership, and social capital, as well as a contributor to publications such as Business Insider, CityBook, Workforce Magazine, to name a few. She is the Chief Culture Officer of Alchemy Consulting Group, helping business leaders build stronger, more effective teams and companies. Valued for helping teams think strategically and engage in meaningful conversations that allow for reflection and inquiry that lead to change. Arquella designs and delivers interactive, experiential workshops, such as Facilitation Skills, Cross-cultural Communication, Implicit Bias, and Developing Leadership Skills. Arquella also designs and facilitates meetings and retreats to achieve desired outcomes. She has been “dubbed” a change management agent based on her facilitating visioning, strategic planning, board development, customer service improvement, and performance management sessions. These sessions helped organizations align with their values, clarify goals, and identify obstacles to change. In her role as mediator and coach, she helps people identify the interests behind their positions and identify common ground—coaching senior managers on performance management and effective communication. Arquella is a frequently invited speaker and workshop presenter in the areas of effective communication, diversity in the workplace, women’s empowerment, leadership skills, and managing people resources. She has spoken at numerous women’s and leadership conferences, Human Resources conferences, employee resource groups, and statewide business and training events. Arquella was the Interise Instructor for the StreetWise MBA Program for business owners, also known as the City of Houston Build Up Houston Program, for approximately four years. Arquella holds a bachelor’s degree in Human Resources Management from Ottawa University and an Executive MBA from Texas Woman’s University. Arquella received her certifications in Human Resources (PHR/SHRM-CP), Certified Master Coach, Clifton StrengthsFinders 2.0, Designing Advance Learning Programs, Facilitating with Excellence (ASTD), Center for Creative Leadership (360-Degree Assessment, Better Conversations Every Day, Lead4Success), Conflict Resolution in the Workplace, DISC, Birkman, Everything DiSC (Wiley), Five Behaviors (Wiley), Insights Discovery Assessment, Personalysis, and Myers-Briggs Type Indicator (MBTI)— Behavioral Personality Assessments, DDI Facilitator, Franklin Covey Facilitator, Inside Out Development in Coaching, and a Mediator. Arquella is currently pursuing her doctoral degree at Abilene Christian University.
                </p>
            </div>

            <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               
                >
                  <div className="border-8 border-white">
                      <img
                        src={jd} // Replace with your image URL
                        alt="Placeholder"
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-[#ff3130]"
                      />
                  </div>
                </motion.div>
                <p className='mx-6 my-5'>
                    <i><b>Ambassador Angelique Bartholomew, JD,</b></i> is a dynamic trainer, speaker, and business strategist with over 25 years of experience spanning both public and private sectors. As a global thought leader and advocate for economic empowerment, she specializes in guiding businesses, NGOs, and government agencies toward sustainable growth and impactful decision-making and protocol. Her expertise lies in bridging international partnerships, fostering cross-cultural collaboration, and equipping organizations with innovative strategies that drive long-term success. She empowers clients by providing actionable insights and tailored strategies that align with their core vision. Through her deep understanding of market dynamics, she helps organizations streamline decision-making, ensuring seamless execution and impactful outcomes. As a senior leader at Intuitive Global Consulting, Ambassador Bartholomew brings a results-driven approach centered on three core pillars: Intuitive, innovative,and interactive.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutTeam
