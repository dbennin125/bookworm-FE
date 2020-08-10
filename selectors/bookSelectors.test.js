const { getBooks } = require('./bookSelectors');

describe('books selectors', () => {
  it('selects the list of books from state', () => {
    const state = {
      loading: false,
      bookByID: {},
      books: [
        {
          title: 'Consumer Relations Manager Toucan',
          author: 'Mr. Todd Gregory',
        },
        {
          title: 'Financial Planner Cotton Rat',
          author: 'Dr. Devin Allison',
        }
      ]
    }; 
    const books = getBooks(state);

    expect(books).toEqual([
      {
        title: 'Consumer Relations Manager Toucan',
        author: 'Mr. Todd Gregory',
      },
      {
        title: 'Financial Planner Cotton Rat',
        author: 'Dr. Devin Allison',
      }
    ]);
  });
});
