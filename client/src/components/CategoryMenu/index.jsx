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

  <div className='flex flex-col items-center justify-center mt-2'>
    <h2 className='my-6 text- text-4xl font-sedgwick'>Products</h2>
    <div className='flex items-center space-x-4'>
    <button
      className='font-philosopher mt-2 text-xl font-semibold px-4 border-black hover:border-b hover:border-gray-600'
      onClick={() => { handleClick('') }}
    >
      Apparel
    </button>
    <button
      className='font- mt-2 text-xl font-semibold px-4 border-black hover:border-b hover:border-gray-600'
      onClick={() => { handleClick('') }}
    >
      Supplements
    </button>
    </div>

    <div className="flex flex-wrap justify-center">
      {categories.map((item) => (
        <button
          className='px-4 font-serif mb-2 mt-2 mx-2 border-4 border-black bg-[#a22727] text-white rounded-md'
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
   
  </div>
);

  
}

export default CategoryMenu;
