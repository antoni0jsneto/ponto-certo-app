import React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

// Styles
import {
  SelectContainer,
  Input,
  Dropdown,
  OptGroupLabel,
  OptionItem,
  OptionIcon,
  ClearSelectionButton,
  ArrowIcon,
} from './custom-select.styles';

interface Option {
  value: string;
  label: string;
  icon?: string;
}

interface OptGroup {
  label: string;
  options: Option[];
}

interface CustomSelectProps {
  options: (Option | OptGroup)[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

const CustomSelect: FunctionComponent<CustomSelectProps> = ({
  options,
  placeholder = 'Selecione...',
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [filteredOptions, setFilteredOptions] =
    useState<(Option | OptGroup)[]>(options);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setInputValue(value);
    setSelectedOption(value);
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  const handleClearSelection = () => {
    setInputValue('');
    setSelectedOption(null);
    setFilteredOptions(options);
    if (onChange) onChange('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setInputValue(query);
    setFilteredOptions(
      options.filter((option) => {
        if ('options' in option) {
          return option.options.some((opt) =>
            opt.label.toLowerCase().includes(query)
          );
        } else {
          return option.label.toLowerCase().includes(query);
        }
      })
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SelectContainer ref={containerRef}>
      <div style={{ position: 'relative' }}>
        <Input
          type="text"
          value={inputValue}
          onClick={() => setIsOpen(!isOpen)}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {selectedOption && (
          <ClearSelectionButton onClick={handleClearSelection}>
            &times;
          </ClearSelectionButton>
        )}
        {/* Ícone da seta */}
        <ArrowIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <Dropdown style={{ display: isOpen ? 'block' : 'none' }}>
        {filteredOptions.map((option, index) => {
          if ('options' in option) {
            return (
              <React.Fragment key={index}>
                <OptGroupLabel>{option.label}</OptGroupLabel>
                {option.options
                  .filter((opt) =>
                    opt.label.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((opt) => (
                    <OptionItem
                      key={opt.value}
                      onClick={() => handleSelect(opt.label)}
                    >
                      {opt.icon && <OptionIcon src={opt.icon} alt="icon" />}
                      {opt.label}
                    </OptionItem>
                  ))}
              </React.Fragment>
            );
          } else {
            return (
              <OptionItem
                key={option.value}
                onClick={() => handleSelect(option.label)}
              >
                {option.icon && <OptionIcon src={option.icon} alt="icon" />}
                {option.label}
              </OptionItem>
            );
          }
        })}
      </Dropdown>
    </SelectContainer>
  );
};

export default CustomSelect;
