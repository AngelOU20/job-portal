import { FiMapPin, FiSearch } from 'react-icons/fi';

interface BannerProps {
  query: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Banner = ({ query, handleInputChange }: BannerProps) => {
  return (
    <div className="md:max-w-screen-2xl container mx-auto px-4 md:px-2 py-14 md:py-20">
      <h1 className="text-6xl text-primary font-bold mb-3">
        Find your <span className="text-secondary">new job</span> today
      </h1>
      <p className="text-lg text-gray-400 font-medium mb-8">
        Thousands of jobs in the computer, engineering and technology sectors
        are waiting for you.
      </p>

      <form action="">
        <div className="flex justify-start flex-col md:flex-row md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring focus-within:ring-inset focus-within:ring-secondary md:w-2/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for ?"
              className="block flex-1 border-0 bg-transparent py-2.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-0 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-3 ml-2 text-gray-400" />
          </div>

          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring focus-within:ring-inset focus-within:ring-secondary md:w-1/2 w-full">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-2.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-0 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-3.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-secondary py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
