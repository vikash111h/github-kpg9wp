import React, { useState, useEffect } from 'react';
const Planet = () => {
  const [searchedValue, setSearchedValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, [searchedValue]);
  const getData = () => {
    const api = `https://swapi.dev/api/planets?search=${searchedValue}`;
    fetch(api)
      .then((response) => response.json())
      .then((response) => setResults(response.results));
  };

  const EmojiComponent = (props) => {
    const emoji = '\u{1F468}';
    const numTimes = props.num !== 'unknown' ? props.num.split('').length : 0;

    const renderEmoji = () => {
      const emojis = [];
      for (let i = 0; i < numTimes; i++) {
        if (numTimes !== 0) {
          emojis.push(<span key={i}>{emoji}</span>);
        }
      }
      return emojis.length > 0 ? emojis : ' ';
    };

    return <div>{renderEmoji()}</div>;
  };

  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          placeholder="a"
          value={searchedValue}
          onChange={(event) => setSearchedValue(event.target.value)}
        />
      </div>
      {/*
       * Replace the section below with the results of the search
       */}
      <section>
        <header>
          <div className="col">Name</div>
          <div className="col">Population</div>
        </header>
        <div>
          {results.map((item, index) => {
            return (
              <div>
                <div className="col">{item.name}</div>
                <div title={item.population} className="col">
                  {<EmojiComponent num={item.population} />}
                </div>
              </div>
            );
          })}
          {results.length == 0 && (
            <div className="error">No planet matching search term</div>
          )}
        </div>
      </section>
      <br />
    </div>
  );
};

export default Planet;
