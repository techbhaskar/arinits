import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-16 w-auto",
    md: "h-24 w-auto",
    lg: "h-32 w-auto",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-white rounded-full p-2 flex items-center justify-center">
        <img
          src="/logo_transparent.png"
          alt="ARIN IT Solutions Logo"
          className={sizeClasses[size]}
        />
      </div>
    </div>
  );
};

export default Logo;
