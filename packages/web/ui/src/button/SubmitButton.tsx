export interface SubmitButtonProps {
  name: string;
  onSubmit?: (e: React.MouseEvent) => void;
}

export function SubmitButton(props: SubmitButtonProps) {
  const { name, onSubmit } = props;
  return <button onClick={onSubmit}>{name}</button>;
}

export default SubmitButton;
