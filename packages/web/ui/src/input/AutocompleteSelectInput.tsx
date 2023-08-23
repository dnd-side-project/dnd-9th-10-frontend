import cn from "classnames";
import chroma from "chroma-js";
import styles from "./AutocompleteSelectInput.module.css";
import { ColourOption, colourOptions } from "./__mocks__/data";
import Select, { StylesConfig } from "react-select";

export interface AutocompleteSelectInputProps {
  className?: string;
}

// https://react-select.com/home#getting-started

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

export function AutocompleteSelectInput(props: AutocompleteSelectInputProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
      />
    </div>
  );
}

export default AutocompleteSelectInput;
