import { Content, H6 } from 'components/common';
import React from 'react';
import styled from 'styled-components';
import { IMarkers } from './Maps';

interface IPlaceItemProps {
  list: IMarkers[];
  // isMouseOver: boolean;
  // setIsMouseOver: React.Dispatch<React.SetStateAction<(string | boolean)[]>>;
}

const PlaceItem = ({ list }: IPlaceItemProps) => {
  // const [isMouseOver, setIsMouseOver] = useState(false);

  // const handleMouseOverItem = () => {

  // };
  return (
    <>
      {list.map((item) => (
        <ListItem
          key={`item-${item.content}-${item.position.lat},${item.position.lng}`}
        >
          <ul>
            <li>
              <ItemContent>{item.content}</ItemContent>
            </li>
            <li>
              <ItemAddress>{item.address}</ItemAddress>
            </li>
          </ul>
        </ListItem>
      ))}
    </>
  );
};

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  background-color: ${(props) => props.theme.colors.white100};
  border-radius: 15px;
  margin: 10px 0;
`;
const ItemContent = styled(H6)`
  color: ${(props) => props.theme.colors.black60};
`;
const ItemAddress = styled(Content)`
  color: ${(props) => props.theme.colors.black30};
`;
export default PlaceItem;
