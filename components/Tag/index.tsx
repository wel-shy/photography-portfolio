import { ThemedTag, ActiveTag } from "./styles";
interface TagProps {
  name: string;
  onSelect: () => void;
  isSelected: boolean;
}

export const Tag = ({ name, onSelect, isSelected }: TagProps) =>
  isSelected ? (
    <ActiveTag onClick={onSelect}>{name}</ActiveTag>
  ) : (
    <ThemedTag onClick={onSelect}>{name}</ThemedTag>
  );
