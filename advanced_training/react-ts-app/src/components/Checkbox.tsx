interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

function Checkbox({ label, isChecked, onChange }: CheckBoxProps) {
  return (
    <label>
      <input type="checkbox" onChange={onChange} checked={isChecked} />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
