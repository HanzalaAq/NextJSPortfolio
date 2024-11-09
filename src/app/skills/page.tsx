import Image from 'next/image'

export default function Skills() {
  const skills = [
    "JavaScript (ES6+)", "React", "Next.js", "Node.js",
    "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
    "Git", "RESTful APIs", "Python", "CSS"
  ]

  const qualifications = [
    "Bachelor's Degree in Data Science",
    "Aptech Certified Web Developer - Associate",
    "Microsoft Certified: Office Fundamentals",
    "Google Analytics Individual Qualification"
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skills & Qualifications</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Checkmark"
                width={24}
                height={24}
                className="text-green-500 mr-2"
              />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
        <ul className="list-disc list-inside">
          {qualifications.map((qualification, index) => (
            <li key={index} className="mb-2">{qualification}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}