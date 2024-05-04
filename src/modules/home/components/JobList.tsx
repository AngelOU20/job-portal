interface JobListProps {
  result: JSX.Element[];
}

export const JobList = ({ result }: JobListProps) => {
  return <div>{result}</div>;
};
