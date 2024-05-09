interface InputFieldsProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
}

export const InputField = ({
  handleChange,
  value,
  title,
  name,
}: InputFieldsProps) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} value={value} onChange={handleChange} />
      <span className="checkmark"></span> {title}
    </label>
  );
};
