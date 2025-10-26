import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Apple,
  ArrowRight,
  Chrome,
  Download,
  Globe,
  Laptop,
  Smartphone,
} from "lucide-react";

export const DownloadApp = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Write Anywhere, Anytime</h2>
          <p className="text-muted-foreground text-md mb-8">
            Access Thread from any device with our native apps and responsive
            web interface. Keep writing and engaging with your audience wherever
            you are.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Web App</h3>
                <p className="text-muted-foreground text-sm">
                  Access Thread from any modern browser
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Mobile Apps</h3>
                <p className="text-muted-foreground text-sm">
                  Native iOS and Android apps for the best mobile experience
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Desktop App</h3>
                <p className="text-muted-foreground text-sm">
                  Enhanced writing experience with our desktop application
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="flex items-center space-x-2">
              <Chrome className="h-5 w-5" />
              <span>Web Version</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Apple className="h-5 w-5" />
              <span>Download for Mac</span>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 z-0" />
          <CardContent className="relative z-10 p-8">
            <img
              src="/mockup.png"
              alt="Thread App Interface"
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
