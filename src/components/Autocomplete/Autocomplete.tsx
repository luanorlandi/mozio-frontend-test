import { useState } from "react";
import "./Autocomplete.css";

type Props = {
  label: string,
  placeholder?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
  isError: boolean,
  isLoading: boolean,
  items?: Array<Object>,
  onClickItem: (item: any) => any,
  renderItem: (item: any) => any
}

const Autocomplete = ({
  label,
  placeholder,
  value,
  onChange,
  isError,
  isLoading,
  items,
  onClickItem,
  renderItem,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = !isError && isMenuOpen && (isLoading || (items && items.length >= 0))

  return (
    <div  className="autocomplete">
      <label className="autocomplete__label">{label}</label>
      <input
        className="autocomplete__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsMenuOpen(true)}
      />
      {isError && <div className="autocomplete__error">Something went wrong</div>}
      {showMenu && (
        <div className="autocomplete__menu">
          {isLoading && <div className="autocomplete__menu-loading">Loading...</div>}
          {!isLoading && items && items.length > 0 &&
            items.map((item, index) => (
              <button
                key={index}
                className="autocomplete__menu-item"
                onClick={() => {
                  onClickItem(item);
                  setIsMenuOpen(false);
                }}
              >
                {renderItem(item)}
              </button>
            ))}
          {!isLoading && items && items.length === 0 &&
            <span>No results</span>
          }
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
