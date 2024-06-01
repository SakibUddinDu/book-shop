
import { FaGithub } from 'react-icons/fa';
function GithubLoginBtn() {
    return (
        <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 bg-indigo-600 mt-3 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 flex items-center justify-center"
              
            >
              <FaGithub className="h-5" />
              Login
            </button>
          </div>
    )
}

export default GithubLoginBtn