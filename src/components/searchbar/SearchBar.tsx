import "./SearchBar.scss";

type SearchBarProps = {
  prestationsValue: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  prestationsValue,
  onChangeHandler,
}) => {
  return (
    <input
      value={prestationsValue}
      onChange={onChangeHandler}
      className="SearchBar"
      type="text"
      placeholder="rechercher une prestation..."
    />
  );
};

export default SearchBar;
