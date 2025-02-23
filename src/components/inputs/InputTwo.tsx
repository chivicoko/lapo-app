'use client';

import Image from "next/image";

type InputProps = {
  key?: number;
  placeholderText?: string;
  classes?: string;
  value?: string | number;
  type?: 'text' | 'email' | 'password' | 'number' | 'file' | 'checkbox' | 'radio';
  name?: string;
  label?: string;
  icon?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTwo: React.FC<InputProps> = ({
  key = null,
  placeholderText = '',
  classes = '',
  // value = '',
  type = 'text',
  name="",
  label="",
  icon="",
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  onChange = () => {},
}) => {

  return (
    <>
      <label htmlFor={name} className="text-sm text-neutral-700">{label}</label>
      <div className="w-full px-2 bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
        <input
          key={key}
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholderText}
          autoFocus={autoFocus}
          checked={checked}
          // value={value}
          disabled={disabled}
          onChange={onChange}
          className={`${classes} ${type === "radio" ? '' : 'bg-transparent w-full py-[10px] px-1 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]'}`}
        />
        <span className="relative size-[16px] ml-1">
          <Image
            src={`/icons/${icon}`}
            alt={`${placeholderText} icon`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </span>
      </div>
    </>
  );
};

export default InputTwo;
