import cn from "classnames";
import chroma from "chroma-js";
import styles from "./AutocompleteSelectInput.module.css";
import { ColourOption, colourOptions } from "./__mocks__/data";
import Select, { PropsValue, StylesConfig } from "react-select";

import CreatableSelect from "react-select/creatable";

export type Option = {
  value: string;
  label: string;
};

export interface AutocompleteSelectInputProps {
  className?: string;
  value?: PropsValue<Option>;
  defaultValue?: PropsValue<Option>;
  onCreateOption?: ((inputValue: string) => void) | undefined;
}

// https://react-select.com/home#getting-started
const colourStyles: StylesConfig<Option, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma.random();
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
};

export function AutocompleteSelectInput(props: AutocompleteSelectInputProps) {
  const {
    className,
    value = [colourOptions[0], colourOptions[1]],
    defaultValue = [colourOptions[0], colourOptions[1]],
    onCreateOption,
  } = props;
  return (
    <CreatableSelect
      className={cn(styles.wrap, className)}
      components={{
        ClearIndicator: () => null,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Menu: () => null,
      }}
      closeMenuOnSelect={false}
      value={value}
      defaultValue={defaultValue}
      isMulti
      onCreateOption={onCreateOption}
      theme={(theme) => ({
        ...theme,
        borderRadius: 10,
        colors: {
          ...theme.colors,
        },
      })}
    />
  );
}

export default AutocompleteSelectInput;
