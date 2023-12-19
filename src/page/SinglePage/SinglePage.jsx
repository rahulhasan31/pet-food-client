/* eslint-disable react/prop-types */


const SinglePage = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 lg:mt-20">
      <div className="relative">
        <img className="w-full" src="https://i.ibb.co/xhSYf9Z/Capture-cleanup.png" alt="" />
        <h1 className="text-white -top-10 lg:-top-48 relative font-semibold text-3xl text-center">
          {data?.name}
        </h1>
      </div>
    </div>
  );
};

export default SinglePage;
