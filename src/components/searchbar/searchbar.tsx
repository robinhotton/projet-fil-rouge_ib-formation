import React, { useState } from "react";

type SearchBarProps = {
  results: string;
  onChangeValue: Function;
};

//props
/*const SearchBar: React.FC<SearchBarProps> = ({ results, onChangeValue }) => {
  const [showPreview, setShowPreview] = useState(null);

  const updateText = (text: string) => {
    if (text) {
      let list = results.filter((issue: string) => {
        return issue.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
      });
      onChangeValue(text, list);
      setShowPreview(list);
    } else {
      setShowPreview(null);
    }
  };

  const cancelSearch = () => {
    setShowPreview(null);
  };
  const showList = () => {
    if (showPreview) {
      return showPreview.map((item) => {
        return <li className="list-group-item">{item.name}</li>;
      });
    }
    return <div />;
  };

  return (
    <div className="auto">
      <button className="cancel-btn" onClick={() => cancelSearch()}>
        x
      </button>
      <input
        className="search-bar"
        placeholder="Search"
        onChange={(e) => updateText(e.target.value)}
      />
      <div className="list-group ">{showPreview && showList()}</div>
    </div>
  );
  */

const SearchBar = () => {
  return 0;
};

export default SearchBar;
