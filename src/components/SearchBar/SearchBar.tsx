import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const handleFormSubmit = event => {
    const notify = () =>
      toast.error('The search field is empty. Please enter a search value', {
        duration: 2000,
        position: 'top-center',
        style: {
          backgroundColor: 'white',
          color: 'darkgreen',
        },
      });
    event.preventDefault();
    const form = event.target;
    const inputValue = form.search.value.trim();
    if (inputValue === '') {
      notify();
    } else {
      onSubmit(inputValue);
    }
    form.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleFormSubmit}>
        <input
          className={css.searchInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
