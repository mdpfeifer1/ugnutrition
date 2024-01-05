import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

return (
  <div className='flex flex-col items-center justify-center'>
    <h2 className='my-6 text-center text-4xl font-serif'>Choose a Category:</h2>
    <div className="flex flex-wrap justify-center">
      {categories.map((item) => (
        <button
          className='px-4 font-serif mb-2 mx-2 bg-[--Navy] text-white rounded-md'
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
    <button
      className=' font-serif mt-2 text-xl font-semibold px-4 bg-[--Navy] text-white  rounded-md'
      onClick={() => { handleClick('') }}
    >
      All
    </button>
  </div>
);

  
}

export default CategoryMenu;
