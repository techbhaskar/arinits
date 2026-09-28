import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-12 w-auto",
    md: "h-16 w-auto",
    lg: "h-24 w-auto",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center">
        <img
          src="/arinits-logo-dark.svg"
          alt="ARINITS logo"
          width="800"
          height="240"
          decoding="async"
          className={sizeClasses[size]}
        />
      </div>
    </div>
  );
};

export default Logo;
