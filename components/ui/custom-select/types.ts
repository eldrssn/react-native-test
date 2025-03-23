import { Option } from "@/models";

export interface CustomSelectProps {
  options: Option[];
  onSelect: (item: Option) => void;
  placeholder?: string;
}
