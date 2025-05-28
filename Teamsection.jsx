import React from 'react'
import Profilecard from './Profilecard.jsx'

const people = [
    {
        name: "Adinath Patil",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        jobTitle: "React Developer",
        quote:
            "As a developer, I don't just write code — I craft experiences that solve real problems and delight users. React helps me do that with elegance and efficiency."
    },
    {
        name: "Saanvi Mehta",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        jobTitle: "UI/UX Designer",
        quote:
            "Design is not simply how it looks — it’s how it makes people feel. A great design silently guides the user and brings joy through simplicity."
    },
    {
        name: "Rohan Sharma",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        jobTitle: "Full Stack Engineer",
        quote:
            "A powerful product is built not just with good code, but with clear thinking, deep user understanding, and relentless problem-solving."
    },
    {
        name: "Isha Verma",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        jobTitle: "Digital Marketer",
        quote:
            "Effective marketing isn’t about shouting louder — it’s about understanding your audience so well that your message feels like a solution, not a sales pitch."
    }
];

const Teamsection = () => {
    return (
        <div className='m-10'>
            <div className='flex justify-center flex-col items-center
            gap-3 mb-10'>
                <h1 className='text-3xl font-medium'>
                    Experienced & Professional Team
                </h1>
                <p className='text-gray-500 font-light text-center'>You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
                {people.map((item) => {
                    return (
                        <Profilecard key={item.name} image={item.image} jobTitle={item.jobTitle} quote={item.quote} name={item.name} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Teamsection