import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

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
  

  const handleMainCategoryClick = (category) => {
    setActiveCategory(category._id);
    setActiveSubCategory(null); // Clear subcategory selection
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: category._id,
    });
  };

  const handleSubCategoryClick = (subcategoryId) => {
    setActiveSubCategory(subcategoryId);
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: subcategoryId,
    });
  };

  return (
    <div className='flex flex-col items-center justify-center mt-2'>
      <h2 className='my-6 text-4xl font-sedgwick'>Products</h2>
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category._id} className="mb-4">
            <button
              className='px-4 font-serif mb-2 mx-2 border-black focus:border-b focus:border-gray-600'
              onClick={() => handleMainCategoryClick(category)}
            >
              {category.name}
            </button>
            {activeCategory === category._id && category.subcategories && category.subcategories.length > 0 && (
              <div className="flex flex-col items-center mt-2">
                {category.subcategories.map((subcat) => (
                  <button
                    className='px-4 font-serif mb-2 mx-2 border-black focus:border-b focus:border-gray-600'
                    key={subcat._id}
                    onClick={() => handleSubCategoryClick(subcat._id)}
                  >
                    {subcat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;

