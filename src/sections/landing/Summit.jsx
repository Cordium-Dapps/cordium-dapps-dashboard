import Button from '../../components/Button'

function Summit() {
  return(
    <div className="bg-gray-500 px-4 py-16">
      <div className="max-w-[1080px] w-full mx-auto">
        <div className="flex flex-col gap-8 text-white text-center">
            <p className="text-3xl">Are you a developer?</p>
            <p className="w-[60%] mx-auto text-2xl">Submit your Dapp to the Cordium dapps plartfom and benefit from a growing community of dapps</p>
            <Button contents="Submit Dapp"/>
        </div>
      </div>
    </div>
  )
};

export default Summit;
