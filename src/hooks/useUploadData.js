import React, {useState, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

const useUploadData = (userAuth, products, categories) => {
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    if (userAuth.isAuth) {
      let count = 0;
      if (!products.loading) {
        count++;
      }
      if (!categories.loading) {
        count++;
      }
      if (count === 2) {
        // console.log(products);
        setIsLoadingData(true);
      }
    }
  }, [userAuth, products, categories]);

  return isLoadingData;
};

export default useUploadData;
