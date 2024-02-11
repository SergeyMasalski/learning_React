import { createContext } from 'react';
import Interfaces from '../constants/interfaces';

interface IAutorizationContext {
  user: Interfaces.User | undefined;
  setUser?: (user: Interfaces.User | undefined) => void;
}

const AuthorizationContext = createContext<IAutorizationContext>({ user: undefined });

export default AuthorizationContext;
