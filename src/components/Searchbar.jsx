import { Component } from 'react';
import css from './service/styles.module.css';

class Searchbar extends Component {
  state = {
    searchRequiring: '',
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchRequiring);
  };
  onChange = e => {
    this.setState({ searchRequiring: e.target.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            name="searchQuery"
            value={this.state.searchRequiring}
            onChange={this.onChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export { Searchbar };
