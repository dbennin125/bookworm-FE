import { setBooks } from './booksAction'; 
import { reducer } from '../reducers/bookReducer';

describe('books actions', () => {
  it('creates a SET_BOOKS action', () => {
    const state = [];
    const action = setBooks([
      {
        title: 'Consumer Relations Manager Toucan',
        author: 'Mr. Todd Gregory',
      },
      {
        title: 'Financial Planner Cotton Rat',
        author: 'Dr. Devin Allison',
      }
    ]);
    
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
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
    });
  });
});

