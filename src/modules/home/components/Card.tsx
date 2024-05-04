import { Link } from 'react-router-dom';
import { Job } from '../../../interfaces/interfaces';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';

interface CardProps {
  data: Job;
}

export const Card = ({ data }: CardProps) => {
  const {
    jobTitle,
    companyName,
    companyLogo,
    jobLocation,
    employmentType,
    maxPrice,
    minPrice,
    postingDate,
    description,
  } = data;

  return (
    <section className="card">
      <Link to={'/'} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt={`${companyName} company logo`} />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="flex flex-wrap gap-4 text-primary/70 text-base mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign />
              {minPrice} - {maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar /> {postingDate}
            </span>
          </div>

          <p className="text-primary/70 text-base">{description}</p>
        </div>
      </Link>
    </section>
  );
};
