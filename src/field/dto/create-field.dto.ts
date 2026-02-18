export class CreateFieldDto {
  name: string;
  latitude: number;
  longitude: number;
  photoUrl?: string;
  rating?: number;
  comments?: string[];
  isPaid: boolean;
  price?: number;
  comunaId: number; 
}