import { FaSearchLocation } from 'react-icons/fa';
import styled from 'styled-components';

interface IHeaderProps {
  setIsOpenListUp: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenListUp: boolean;
}

const SearchIcon = ({ setIsOpenListUp, isOpenListUp }: IHeaderProps) => {
  return <LocationIcon onClick={() => setIsOpenListUp(!isOpenListUp)} />;
};
const LocationIcon = styled(FaSearchLocation)`
  z-index: 5;
  position: absolute;
  top: 15px;
  left: 270px;
  width: 30px;
  height: 30px;
`;

export default SearchIcon;
