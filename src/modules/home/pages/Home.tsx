import React, { useEffect, useState } from 'react';
import { Banner } from '../components/Banner';
import { Job } from '../../../interfaces/interfaces';
import { Card } from '../components/Card';
import { JobList } from '../components/JobList';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio filtering
  const hancleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // button based filtering
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // main function
  const filteredData = (
    jobs: Job[],
    selected: string | null,
    query: string
  ) => {
    let filteredJobs = jobs;

    // filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, salaryType, employmentType }) => {
          jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) === parseInt(selected) ||
            salaryType.toLowerCase() === selected.toLowerCase() ||
            employmentType.toLowerCase() === selected.toLowerCase();
        }
      );
    }

    return filteredJobs.map((data) => <Card data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <section className="w-full">
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main component */}
      <div className="bg-tertiary">
        <div className="md:max-w-screen-2xl container mx-auto md:grid grid-cols-4 gap-8 py-12 px-4">
          <aside className="bg-white p-4 rounded">Left</aside>
          <article className="bg-white col-span-2 p-4 rounded-sm">
            <JobList result={result} />
          </article>
          <aside className="bg-white p-4 rounded">Right</aside>
        </div>
      </div>
    </section>
  );
};

export default Home;
