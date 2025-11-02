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
      <img
        src="/image.png"
        alt="ARIN IT Solutions Logo"
        className={sizeClasses[size]}
      />
    </div>
  );
};

export default Logo;
