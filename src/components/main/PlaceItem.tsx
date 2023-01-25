import React from 'react';
import { IMarkers } from './Maps';
interface IPlaceItemProps {
  markers: IMarkers[];
  setMarkers: React.Dispatch<React.SetStateAction<IMarkers[]>>;
}

const PlaceItem = ({ markers, setMarkers }: IPlaceItemProps) => {
  return (
    <>
      {markers.map((item) => (
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
