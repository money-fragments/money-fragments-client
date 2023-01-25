import React from 'react';
import { IMarkers } from './Maps';

interface IPlaceItemProps {
  list: IMarkers[];
}

const PlaceItem = ({ list }: IPlaceItemProps) => {
  return (
    <>
      {list.map((item) => (
        <ul>
          <li>
            {item.content}
            {item.address}
          </li>
        </ul>
      ))}
    </>
  );
};

export default PlaceItem;
