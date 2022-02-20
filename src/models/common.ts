export type TChildren = { children: React.ReactNode };

export type TRouteProps = {
  [key: string]: any;
};

export type TToken = string | null;

export type TDecodedToken = {
  email: string;
  userId: string;
  exp: number;
  iat: number;
};
