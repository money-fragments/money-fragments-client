interface IMarkers {
  position: { lat: number; lng: number };
  content?: string;
  address?: string;
}
interface Expense {
  id: string;
  date: number;
  year: string;
  month: string;
  place: string;
  product: string;
  price: number;
  experience: string;
  userId: string;
  placeInfo: IMarkers;
}
