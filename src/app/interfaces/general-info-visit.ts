export interface Click {
  clickId: string;
  userId: string;
  fecha: string;  // Podrías cambiar esto a `Date` si necesitas manipularlo como fecha
  page: string;   // La página donde se realizó el clic
}

export interface User {
  userId: string;
  name: string;
  email: string;
  clicks: Click[];  // Una lista de clics asociados a este usuario
}

export interface UserWithClicks {
  users: User[];
}

export interface LoginResponse {
  message: string;
  token: string;
}
