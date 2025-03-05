import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <nav className="max-w-7xl mx-auto my-5 flex items-center justify-center">
        <div className="muted font-medium">
          Made with 💖 on 🌍 by{" "}
          <a
            href="https://x.com/unorodeo"
            target="_blank"
            className="underline md:no-underline decoration-primary underline-offset-2 hover:underline text-foreground"
          >
            unorodeo
          </a>
        </div>
      </nav>
    </footer>
  );
};
