import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-56 h-14",
    md: "w-64 h-16",
    lg: "w-96 h-24",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center">
        <img
          src="/arinits-logo-dark.jpg"
          alt="ARINITS logo"
          width="1376"
          height="768"
          decoding="async"
          className={`${sizeClasses[size]} object-cover rounded-lg`}
        />
      </div>
    </div>
  );
};

export default Logo;
