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
  userId?: number; // usuario que crea la cancha
  teamId?: number; // equipo del usuario (opcional)
}