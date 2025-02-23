'use client';

type InputProps = {
  key?: number;
  placeholderText?: string;
  classes?: string;
  classes2?: string;
  value?: string | number | boolean;
  type?: 'text' | 'email' | 'password' | 'number' | 'file' | 'checkbox' | 'radio';
  name?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputOne: React.FC<InputProps> = ({
  key = null,
  placeholderText = '',
  classes = '',
  classes2 = '',
  // value = '',
  type = 'text',
  name="",
  label="",
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  onChange = () => {},
}) => {

  return (
    <>
    {type === 'radio' ?
    <div className={`flex items-center gap-2 ${classes2}`}>
      <div className=''>
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
          className={`${classes} `}
        />
      </div>
      <label htmlFor={name} className="text-sm text-neutral-700">{label}</label>
    </div>
    :
    <>
    <label htmlFor={name} className="text-sm text-neutral-700">{label}</label>
    <div className="w-full bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
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
        className={`${classes} bg-transparent w-full py-[10px] px-3 rounded-radius-8 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]`}
      />
    </div>
    </>
    }
    </>
  );
};

export default InputOne;
