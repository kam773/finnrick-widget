import { createContext } from 'react';

interface WidgetContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  clientKey: string;
}

export const WidgetContext = createContext<WidgetContextType>({
  isOpen: true,
  setIsOpen: () => undefined,
  clientKey: '',
});
