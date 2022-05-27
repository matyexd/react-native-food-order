import React, {useState, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

const useUploadData = (userAuth, products) => {
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    if (userAuth.isAuth) {
      let count = 0;
      if (!products.loading) {
        count++;
      }
      if (count === 1) {
        setIsLoadingData(true);
      }
    }
  }, [userAuth, products]);

  return isLoadingData;
};

export default useUploadData;
