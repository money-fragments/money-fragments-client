import { Content, H6 } from 'components/common';
import React from 'react';
import styled from 'styled-components';
import { IMarkers } from './Maps';

interface IPlaceItemProps {
  list: IMarkers[];
}

const PlaceItem = ({ list }: IPlaceItemProps) => {
  return (
    <>
      {list.map((item) => (
        <ListItem
          key={`item-${item.content}-${item.position.lat},${item.position.lng}`}
        >
          <ul>
            <li>
              <H6 className="place-name">{item.content}</H6>
            </li>
            <li>
              <Content className="address-name">{item.address}</Content>
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
  .place-name {
    color: ${(props) => props.theme.colors.black60};
    margin-bottom: 5px;
  }
  .address-name {
    color: ${(props) => props.theme.colors.black30};
  }
`;

export default PlaceItem;
