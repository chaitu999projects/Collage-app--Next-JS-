const FailuresPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Failures</h1>
          <p className="text-lg text-amber-700">
            Every failure is a stepping stone to success. Learn from those who stumbled before they soared.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6 border-b pb-2">
            Stories of Resilience
          </h2>
          
          {/* Example Failure Story - you can map through real data here */}
          <div className="mb-8 last:mb-0">
            <h3 className="text-xl font-medium text-amber-700 mb-2">Michael Jordan</h3>
            <p className="text-gray-700 mb-3">
              "I've missed more than 9000 shots in my career. I've lost almost 300 games.
              26 times I've been trusted to take the game-winning shot and missed."
            </p>
            <div className="bg-amber-100 p-3 rounded-lg">
              <p className="font-medium text-amber-800">Lesson:</p>
              <p className="text-amber-700">
                Failure is part of the journey to success. What matters is perseverance.
              </p>
            </div>
          </div>

          {/* Another Example */}
          <div className="mb-8 last:mb-0">
            <h3 className="text-xl font-medium text-amber-700 mb-2">Thomas Edison</h3>
            <p className="text-gray-700 mb-3">
              "I have not failed. I've just found 10,000 ways that won't work."
            </p>
            <div className="bg-amber-100 p-3 rounded-lg">
              <p className="font-medium text-amber-800">Lesson:</p>
              <p className="text-amber-700">
                Each failure brings you closer to the right solution.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FailuresPage