import { LinkedInRecommendation } from "../types";
import avatarManifest from "./recommendation-avatar-manifest.json";

/** Paths filled by `npm run avatars:download` / GitHub Action after URLs are updated. */
function localAvatar(id: string): string | undefined {
  return (avatarManifest as Record<string, string | undefined>)[id];
}

/** LinkedIn `media.licdn.com` URLs expire (403). Use optional `profilePhotoLocal` for stable files under `/public`. */
export const linkedInRecommendations: LinkedInRecommendation[] = [
  {
    id: "1",
    name: "Scott Allison",
    role: "Product Designer • Strategic Systems-Thinker • Web & Mobile",
    company: "",
    content:
      "I worked with Vimukthi for several years building and deploying higher education products. As a product designer, it is essential to have an effective, efficient, and communicative engineering partners. Vimukthi is all of those things. The products I built with him were true collaborations between design and engineering. He is truly a joy to work with. I would highly recommend him to any engineering team seeking a seasoned leader.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQG14YdquOnTsw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685717898424?e=1776297600&v=beta&t=0cUMqafVOmQeJJ7MBh4dVGolW-cBray1akb0T4DShcU",
    profilePhotoLocal: localAvatar("1"),
    linkedInUrl: "https://www.linkedin.com/in/scottgallison/",
    date: "August 9, 2024",
    relationship: "Scott worked with Viraj Vimukthi but on different teams",
    connectionDegree: "1st",
  },
  {
    id: "2",
    name: "Neelaka Rupun",
    role: "JS | React, Node + TS | NestJS | AWS | Serverless",
    company: "",
    content: `I have worked closely with Vimukthi and have consistently been impressed by his dedication, expertise, and leadership qualities. One of Vimukthi's standout qualities is his ability to rapidly learn and adapt to new technologies. In our time working together, he has mastered the serverless framework and GraphQL with remarkable speed, always seeking out the latest advancements to ensure our projects are on the cutting edge.

He takes complete ownership of work, demonstrating a level of commitment and responsibility that sets a high standard for the entire team. His proficiency in frontend development is unparalleled, and he consistently provides invaluable guidance to team members, helping to elevate the overall quality of our output.

In addition to his technical skills, he excels in planning and executing solutions and has a collaborative approach, actively engaging with team members to incorporate their ideas and perspectives. This inclusive style not only fosters a positive team environment but also leads to innovative and effective solutions.

Vimukthi is an exceptional lead whose combination of rapid learning, ownership, technical expertise, and collaborative spirit makes him an invaluable asset to any team. I highly recommend Vimukthi for any role that requires a strong, knowledgeable, and inspiring leader.`,
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQGplIPE8mtZ4Q/profile-displayphoto-shrink_200_200/B56ZZidz.SHsAY-/0/1745408704947?e=1776297600&v=beta&t=czkdR3H3WMfOHG26SifE3eURVHLxUO2YQ_gHRdGv5dA",
    profilePhotoLocal: localAvatar("2"),
    linkedInUrl: "https://www.linkedin.com/in/neelaka-rupun",
    date: "July 31, 2024",
    relationship: "Neelaka worked with Viraj Vimukthi on the same team",
    connectionDegree: "1st",
  },
  {
    id: "3",
    name: "Yasoma Jayasinghe",
    role: "Senior IT Leader | Business Development Expert | Driving Strategic Formulation, Market Growth, and Cross-Functional Alignment to Deliver Sustainable Competitive Advantage",
    company: "",
    content: `I worked with Vimukthi on several projects, and he is one of the best people to have as a team member. I highly recommend him for his dedication and commitment, as he is a very methodical and practical person.
His ability to adjust to evolving organizational needs helped us during hard times, and we were able to come up with innovative solutions to address the changing needs of the time.
His ability to analyze and understand the subordinates helped to build a successful team during the team-forming stage and get the best out of them.
Any team would be lucky to have Vimukthi in their organization.
I wish him all the very best!!`,
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQEWBboDDvnAcA/profile-displayphoto-scale_200_200/B56ZfV0itZH8Ac-/0/1751639011000?e=1776297600&v=beta&t=Gcfsm3_F25Bew9PQTKz5_e0U-SE4DfUitw49ofIxVJk",
    profilePhotoLocal: localAvatar("3"),
    linkedInUrl: "https://www.linkedin.com/in/yasoma/",
    date: "February 2, 2024",
    relationship: "Yasoma managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "4",
    name: "Jitesh Vaswani",
    role: "Principal Engineer Specializing in AI Integration",
    company: "",
    content: `Vimukhti is one of those that can plug and play in any project, with any technology, at any point in time! Wherever you have need, you can plug in Vimukhti and he WILL give you the deliverables! Sharp! Dedicated! Team Player! To top that, he has excellent communications skills! He lead 2 different apps for us at different times as well as worked in several projects! He has no hangups! Vimukhti is someone everybody listen to! He is that special engineer who doesn't need a title to show his abilities! Everybody knows! You would be lucky to find him a place in your company!`,
    profilePhoto: "https://media.licdn.com/dms/image/v2/C4E03AQFq9XCguga-KQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1604947593197?e=1776297600&v=beta&t=-Hvgi3oRKCW1v6t3UMDhKokF3GvNyDD95mdbN7iqwcA",
    profilePhotoLocal: localAvatar("4"),
    linkedInUrl: "https://www.linkedin.com/in/vaswanijitesh/",
    date: "December 23, 2023",
    relationship: "Jitesh managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "5",
    name: "Uthpala Heenatigala",
    role: "Senior Frontend Developer",
    company: "",
    content:
      "Viraj is a self learner. Impressed by how quickly and by how much he improved his skills. Javascript master.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D4E03AQGrfLLfGKMjpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706778786430?e=1776297600&v=beta&t=PrLBttN7zymcdeuPXHNWV2dKz37_Vuk7FKWJ8pXlMFU",
    profilePhotoLocal: localAvatar("5"),
    linkedInUrl: "https://www.linkedin.com/in/uthpala-heenatigala/",
    date: "November 4, 2023",
    relationship: "Uthpala was Viraj Vimukthi's mentor",
    connectionDegree: "1st",
  },
  {
    id: "6",
    name: "Lasitha Konara",
    role: "Software Architect | Azure Cloud Developer | MSc Eng (Moratuwa) | BSc Eng (Hons) (Moratuwa)- First Class | CIMA (UK) Passed Finalist",
    company: "",
    content:
      "Viraj is a very hard working individual who always tries to give his 200% towards his company. He always tries to think outside the box and come up with novel things when he develops code. He uses latest technologies/languages and try to keep up with the latest technologies which gives him and edge over the other developers. Not only he develops on his own, but also he helps other developers to gain knowledge on new areas/shares knowhow and to resolve complex problems. Viraj is a very reliable developer, who always delivers on time in good quality. I highly recommend him for any company who seeks a talented and dedicated employee.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQEas87ZhOpdCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727246008290?e=1776297600&v=beta&t=athyO2XkgdKeND38WWo2G_5fJyrYRJtsaobe8WVXVqA",
    profilePhotoLocal: localAvatar("6"),
    linkedInUrl: "https://www.linkedin.com/in/lasithakonara/",
    date: "December 6, 2021",
    relationship: "Lasitha managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "7",
    name: "Charith Dissanayaka",
    role: "Senior Software Engineer @ DianaHR | BSc in Computing and Information Systems",
    company: "",
    content:
      "Viraj Vimukthi is one of the best among all people I have ever met and is a loyal colleague, understands complex matters. Vimukthi is a strong and goal-oriented team player; with every problem, there was a solution. Highly recommended.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/C4E03AQH6srcJHJmrXg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517546067941?e=1776297600&v=beta&t=7nufNlM7Bgbcz5zayABDM3IP3Na81hJyd4uL3_IxyKg",
    profilePhotoLocal: localAvatar("7"),
    linkedInUrl: "https://www.linkedin.com/in/cdissanayaka/",
    date: "November 22, 2021",
    relationship: "Charith managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "8",
    name: "Nishad de Silva",
    role: "Project Manager | PGD in IT | MBCS",
    company: "",
    content:
      "Vimukthi was a colleague of mine at Villvay Systems. He and I have worked on a product for a German client. In this project we worked together Vimukthi showed exemplary product development skills and technical skills which helped in the success of the MVP release of the product.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5635AQHmUABzl9HvIg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1716376549430?e=1775415600&v=beta&t=FPFJ98vK8sQKPYDJI1ijfSbrqp5luciK9lDTnGxo5K4",
    profilePhotoLocal: localAvatar("8"),
    linkedInUrl: "https://www.linkedin.com/in/nishaddesilva/",
    date: "November 21, 2021",
    relationship: "Nishad worked with Viraj Vimukthi on the same team",
    connectionDegree: "1st",
  },
  {
    id: "9",
    name: "Rasun Pinnawala",
    role: "Senior QA Lead and Test Automation Engineer | Driving Successful Initiatives with Precision & Collaboration | Experienced Project Manager",
    company: "",
    content:
      "Vimukthi was a fantastic person to work with and is not only a multi-skilled and insightful colleague but also an inspiring strategist. I was working with him for nearly about 1 year and he is a very good person and a great employee with very strong problem-solving skills. He is an asset to any company. Highly Recommended.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/C4E03AQFn5VI_g5mhFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1563180534884?e=1776297600&v=beta&t=zxofn2WmBfITeFq_LfoW5ttddUY5nNaXIGpPIRatfbc",
    profilePhotoLocal: localAvatar("9"),
    linkedInUrl: "https://www.linkedin.com/in/rasunpinnawala/",
    date: "November 8, 2021",
    relationship: "Rasun managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "10",
    name: "Ryan Perera",
    role: "Founder & Solution Architect | IT Manager at Racing and Sports | Expertise in Cloud Solutions (Azure & AWS) | Experienced Technical Consultant",
    company: "",
    content:
      "Viraj is a solid engineer with very sharp analytical skills. also he's a very fast learner and has ability to adapt very quickly. he's really productive and come up with good solution for any deadlock we faced. his knowledge, positive attitude makes him a complete dependable resource.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQHKhAA310d9_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724864495573?e=1776297600&v=beta&t=1P-3H3QBHR1kx3Cpm4N9KItmxVsjags05zO0Yacu9po",
    profilePhotoLocal: localAvatar("10"),
    linkedInUrl: "https://www.linkedin.com/in/ryanmperera/",
    date: "August 25, 2018",
    relationship: "Ryan managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
];
