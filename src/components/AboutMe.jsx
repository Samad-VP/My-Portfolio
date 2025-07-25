import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I am a full-stack web developer with one year of experience in
              delivering responsive and dynamic web applications. My expertise
              in both front-end and back-end technologies enables me to create
              user-friendly interfaces and robust server-side logic.
            </p>

            <p className="text-muted-foreground">
              Having successfully completed various projects, I have sharpened
              my skills in popular frameworks while staying at the forefront of
              industry trends. I am committed to solving challenges and
              continuously advancing my knowledge. I excel in collaborative
              environments and am ready to transform your vision into reality.
              Let’s connect to discuss how I can contribute effectively to your
              goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* Smooth scroll to contact section */}
              <Link
                to="contact"
                smooth={true}
                duration={600}
                className="cosmic-button cursor-pointer"
                aria-label="Scroll to Contact"
              >
                Get In Touch
              </Link>

              {/* Download CV Button */}
              <a
                href="/CV_Abdulsamad.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Download my CV"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Icon Cards with Animation */}
          <div className="grid grid-cols-1 gap-6">
            {/* Developer Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="border gradient-border p-6 card-hover rounded-md shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Full-Stack Developer
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Proficient in MERN stack, building modern and scalable
                    applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Collaborator Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="border gradient-border p-6 card-hover rounded-xl shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Collaborative</h4>
                  <p className="text-muted-foreground text-sm">
                    A team player who thrives in agile and collaborative
                    environments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="border gradient-border p-6 card-hover rounded-xl shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">1 Year Experience</h4>
                  <p className="text-muted-foreground text-sm">
                    Hands-on experience delivering real-world solutions to
                    clients.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
