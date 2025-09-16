import React from "react";

export const HeroCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto px-0 sm:px-0">
      <a
        href="https://leetcode.com/shhiivm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl border border-white/30 shadow-xl">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 0 .606-1.031l4.098-4.366c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
            Solved
          </div>
          <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3">
            200+
          </div>
          <div className="text-gray-700 font-medium text-base sm:text-lg">
            Leetcode Problems
          </div>
        </div>
      </a>

      <a
        href="https://github.com/shhiivm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl border border-white/30 shadow-xl">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
       0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
       -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729
       1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997
       .108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93
       0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176
       0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005
       2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23
       .655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221
       0 4.61-2.805 5.624-5.476 5.921.43.371.823 1.102.823 2.222
       0 1.606-.015 2.896-.015 3.286 0 .317.216.687.825.57
       C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
            Working on
          </div>
          <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2 sm:mb-3">
            10+
          </div>
          <div className="text-gray-700 font-medium text-base sm:text-lg">
            Projects
          </div>
        </div>
      </a>
    </div>
  );
};
