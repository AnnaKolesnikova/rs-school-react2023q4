import { Component } from 'react';
import './App.scss';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import ErrorContainer from './components/ErrorContainer/ErrorContainer';
import { IProps } from './types/types';

const SEARCH_TERM_NAME = 'SearchTermName';
const savedTerm = localStorage.getItem(SEARCH_TERM_NAME);

interface State {
  searchTerm: string;
}

class App extends Component<IProps, State> {
  state: State = {
    searchTerm: savedTerm ? savedTerm : '',
  };

  updateSearchTerm = (value: string) => {
    const newValue = value.trim();

    if (this.state.searchTerm !== newValue) {
      this.setState({ searchTerm: newValue });
      localStorage.setItem(SEARCH_TERM_NAME, newValue);
    }
  };

  render() {
    return (
      <>
        <ErrorContainer>
          <Search
            searchTerm={this.state.searchTerm}
            updateSearchTerm={this.updateSearchTerm}
          />
          <SearchResults searchTerm={this.state.searchTerm} />
        </ErrorContainer>
      </>
    );
  }
}

export default App;
