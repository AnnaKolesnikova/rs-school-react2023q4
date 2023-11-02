import { Component } from 'react';
import './SearchResults.scss';
import LoadData from '../../api/LoadData';
import { IAppProps, IPerson } from '../../types/types';
import NotFound from '../NotFound/NotFound';
import PersonCard from '../PersonCard/PersonCard';

type Props = Pick<IAppProps, 'searchTerm'>;

interface State {
  personData: IPerson[] | null;
  load: boolean;
}

class SearchResults extends Component<Props, State> {
  load = new LoadData();
  state: State = {
    personData: null,
    load: true,
  };

  componentDidMount() {
    this.loadData(this.props.searchTerm);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.setState({ load: true });
      this.loadData(this.props.searchTerm);
    }
  }

  async loadData(searchTerm: string) {
    try {
      const data = await this.load.getData(searchTerm);
      setTimeout(() => {
        this.setState({ personData: data, load: false });
      }, 200);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { personData, load } = this.state;

    return (
      <>
        {load ? <div className="loading">Loading....</div> : null}
        <div className="persons-list">
          {personData !== null ? (
            personData.length ? (
              personData.map((person: IPerson) => (
                <PersonCard key={person.name} {...person}></PersonCard>
              ))
            ) : (
              <NotFound></NotFound>
            )
          ) : null}
        </div>
      </>
    );
  }
}

export default SearchResults;
