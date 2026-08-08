import { createContext } from "react";

const PartContext = createContext();

export function PartProvider({ children }) {
  const [part, setPart] = useState("");

  return (
    <PartContext.Provider value={{ part, setPart }}>
      {children}
    </PartContext.Provider>
  );
}
export default PartContext;
