import Button from '../../components/Button'

function Join() {
  return(
    <div className="bg-[#060D13] px-4 py-16">
      <div className="max-w-[1080px] w-full mx-auto">
        <div className="flex flex-col gap-8 text-white text-center items-center">
            <p className="text-3xl">Join our community</p>
            <form class="w-full md:w-1/2">
                <label for="UserEmail" class="sr-only"> Email </label>
                <div
                class="border  p-2 focus-within:ring border-gray-800 sm:flex sm:items-center sm:gap-4"
                >
                <input
                    type="email"
                    id="UserEmail"
                    placeholder="Email Address"
                    class="w-full border-none focus:border-transparent focus:ring-transparent bg-gray-900 text-white sm:text-xl"
                />

                <button
                    className="mt-1 w-full bg-blue-400 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0"
                >
                    Join Now
                </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
};

export default Join;
