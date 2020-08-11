const { getBooks, getByID } = require('./bookSelectors');

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

  it('selects the a book by ID from state', () => {
    const state = {
      loading: false,
      bookByID: { _id: '5f31bff754b23d212452704b',
        title: 'Agricultural Inspector Hoki',
        author: 'Mrs. Beulah Fitzgerald',
        pages: 13,
        description: 'dow' },
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
    const books = getByID(state);

    expect(books).toEqual({ _id: '5f31bff754b23d212452704b',
      title: 'Agricultural Inspector Hoki',
      author: 'Mrs. Beulah Fitzgerald',
      pages: 13,
      description: 'dow' });
  });


});
