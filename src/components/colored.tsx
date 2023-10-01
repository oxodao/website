import { ReactNode } from "react";

type Color = 'BLUE' | 'GREEN' | 'YELLOW' | 'RED';

export default function Colored({children, color}: {children: ReactNode, color: Color}) {
    return <span className={`colored ${color}`}>{children}</span>
}