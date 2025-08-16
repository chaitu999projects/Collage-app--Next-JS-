const TopperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            � College Topper
          </h1>
          <div className="inline-block bg-amber-200 text-amber-900 text-2xl font-semibold px-6 py-3 rounded-full shadow-md">
            Congratulations Chaitu! 🎉
          </div>
        </div>

        {/* Topper Profile */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Profile Image Placeholder */}
            <div className="md:w-1/3 bg-amber-200 flex items-center justify-center p-8">
              <div className="w-40 h-40 rounded-full bg-amber-300 flex items-center justify-center text-amber-800 text-6xl font-bold">
                C
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-amber-800 mb-2">Chaitu</h2>
              <p className="text-amber-600 text-lg mb-4">BPC College Topper 2023</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-600">Percentage</p>
                  <p className="text-2xl font-bold text-amber-800">98.7%</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-600">Rank</p>
                  <p className="text-2xl font-bold text-amber-800">#1</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-800">Achievements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gold Medal in Academic Excellence</li>
                  <li>Best Student Award 2023</li>
                  <li>University Rank Holder</li>
                  <li>Perfect Attendance Record</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">Success Story</h2>
          <div className="prose prose-amber max-w-none">
            <p className="text-gray-700 mb-4">
              Chaitu's journey to becoming the college topper wasn't easy. Coming from a humble background, 
              he faced numerous challenges but never let them deter his focus on academics.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-amber-700 my-4">
              "Success is no accident. It is hard work, perseverance, learning, sacrifice and most of all, 
              love of what you are doing." - Chaitu
            </blockquote>
            <p className="text-gray-700">
              His daily routine included 8 hours of focused study, regular revisions, and active participation 
              in class discussions. Chaitu believes in the power of consistency over cramming.
            </p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            Chaitu's Study Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Make concise notes after every lecture",
              "Practice previous year papers regularly",
              "Teach concepts to friends to reinforce learning",
              "Maintain a consistent sleep schedule",
              "Take short breaks during study sessions",
              "Stay curious and ask questions in class"
            ].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-amber-500 text-2xl mb-3">0{index + 1}</div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopperPage