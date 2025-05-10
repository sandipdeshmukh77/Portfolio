// src/components/Button.tsx
import React from "react";
import type { LucideIcon } from "lucide-react";

// Reusable Button component
interface ButtonProps {
    text: string; // Button text
    onClick?: () => void; // Optional click handler
    icon?: LucideIcon; // Optional Lucide icon
    color?: string; // Optional color for the button background
}

const Button: React.FC<ButtonProps> = ({ text, onClick, icon: Icon, color = "royalblue" }) => {
    return (
        <button
            onClick={onClick}
            style={{ background: color }}
            className="font-family-inherit text-white text-lg px-4 py-3 flex items-center justify-center gap-2 rounded-full overflow-hidden transition-all duration-200 ease-in-out"
        >
            {/* Text */}
            <span>{text}</span>
            {/* Icon (if provided) */}
            {Icon && (
                <div className="svg-wrapper-1">
                    <Icon size={24} />
                </div>
            )}


        </button>
    );
};

export default Button;
