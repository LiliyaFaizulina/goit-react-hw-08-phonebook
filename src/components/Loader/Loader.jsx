import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="20"
      visible={isLoading}
    />
  );
};
