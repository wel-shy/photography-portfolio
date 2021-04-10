import { ThemedTag } from "./styles";
interface TagProps {
  name: string;
  onSelect: () => void;
  isSelected: boolean;
}

export const Tag = ({ name, onSelect, isSelected }: TagProps) => {
  return (
    <ThemedTag onClick={onSelect} isActive={isSelected}>
      {name}
    </ThemedTag>
  );
};
