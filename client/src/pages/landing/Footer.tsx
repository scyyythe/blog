import { MessageCircle, Twitter, Github, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-12 bg-transparent">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tots</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  A modern blogging platform for creators. Write, share and grow
                  your audience with beautiful, fast, and privacy-first tools.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
            <div>
              <h4 className="text-sm font-medium mb-2">Product</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-foreground">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-foreground">
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Company</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <a href="/about" className="hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Resources</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <a href="/blog" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-foreground">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-foreground">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Community</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <a href="/community" className="hover:text-foreground">
                    Join Community
                  </a>
                </li>
                <li>
                  <a href="/sponsors" className="hover:text-foreground">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="/newsletter" className="hover:text-foreground">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thread. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@thread.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
