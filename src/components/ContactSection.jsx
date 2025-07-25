import { SiX } from "react-icons/si";
import { cn } from "@/lib/utils";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { title } from "framer-motion/client";
import { Description } from "@radix-ui/react-toast";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a unique project in your mind or want to collaborate? Feel free
          to connect with me. I'm always open to discussing new ventures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:samadtharqawi@gmail.com "
                    aria-label="Send email to samadtharqawi@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    samadtharqawi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel: +91 8086555479"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8086555479
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Malappuram, Kerela, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-3">Connect With Me</h4>
              <div className="flex space-x-4 justify-center items-center">
                <a href="#" target="-blank">
                  <Linkedin />
                </a>

                <a href="#" target="-blank">
                  <SiX />
                </a>

                <a href="#" target="-blank">
                  <Instagram />
                </a>

                <a href="#" target="-blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mb-4 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Muhammed Shareef..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mb-4 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="shareef101@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mb-4 w-full min-h-[120px] px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Samad..!, I want to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
