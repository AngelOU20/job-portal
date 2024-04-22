export interface Job {
  id: number;
  companyName: string;
  jobTitle: string;
  companyLogo: string;
  minPrice: string;
  maxPrice: string;
  salaryType: "Hourly" | "Daily" | "Weekly" | "Monthly" | "Yearly";
  jobLocation: string;
  postingDate: string;
  experienceLevel: string;
  employmentType: string;
  description: string;
}