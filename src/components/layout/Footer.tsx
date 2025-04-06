import { Github, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div>
              <h3 className="font-bold text-lg">Evertree Vault</h3>
              <p className="text-sm text-foreground/70">
                Where truth takes root forever.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Made by Azzam credit */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background/50">
              <span className="text-sm">Made with 💚 by Azzam</span>
            </div>

            <div className="flex items-center gap-4">
              {/* LinkedIn link */}
              <a
                href="https://linkedin.com/in/m-azzam-azis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* GitHub link */}
              <a
                href="https://github.com/m-azzam-azis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-2 text-xs bg-foreground/5 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Built on Internet Computer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-foreground/60">
          <p>© {currentYear} Evertree Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
