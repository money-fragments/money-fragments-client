import { Content, H6 } from 'components/common';
import React, { useEffect } from 'react';
import styled from 'styled-components';

interface IPlaceItemProps {
  list: IMarkers[];
  clickedItem: IMarkers | undefined;
  setClickedItem: React.Dispatch<React.SetStateAction<IMarkers | undefined>>;
}

const PlaceItem = ({ list, clickedItem, setClickedItem }: IPlaceItemProps) => {
  useEffect(() => {
    if (clickedItem) {
    }
  }, [clickedItem]);

  const handleItemCliked = (item: any) => {
    setClickedItem(item);
  };

  return (
    <>
      {list.map((item) => (
        <ListItem
          key={`item-${item.content}-${item.position.lat},${item.position.lng}`}
          onClick={() => handleItemCliked(item)}
          onMouseEnter={() => handleItemCliked(item)}
        >
          <ul style={{ paddingLeft: '8px' }}>
            <li style={{ margin: '4px 0px' }}>
              <ItemContent>{item.content}</ItemContent>
            </li>
            <li style={{ margin: '4px 0px' }}>
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
  width: 80%;
  margin: 8px 0;
  border-top: 2px solid ${(props) => props.theme.colors.white0};
`;
const ItemContent = styled(H6)`
  color: ${(props) => props.theme.colors.white100};
`;
const ItemAddress = styled(Content)`
  color: ${(props) => props.theme.colors.white60};
`;
export default PlaceItem;
