"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/config/about";
import { useSmoothReveal } from "@/hooks/useSmoothReveal";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Link as TransitionLink } from "next-transition-router";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function TeamMemberResume({ params }: PageProps) {
  // Unwrap params promise using React.use()
  const { id } = use(params);

  // Find the team member by ID
  const member = teamMembers.find((m) => m.id === id);

  // If member not found or no resume data, show 404
  if (!member || !member.resume) {
    notFound();
  }

  const { resume } = member;

  // Animation refs
  const headerRef = useSmoothReveal({ delay: 0.2, duration: 1.0, from: "bottom" });
  const summaryRef = useSmoothReveal({ delay: 0.4, duration: 0.8, from: "bottom" });
  const experienceRef = useSmoothReveal({ delay: 0.5, duration: 0.8, from: "bottom" });
  const educationRef = useSmoothReveal({ delay: 0.6, duration: 0.8, from: "bottom" });
  const skillsRef = useSmoothReveal({ delay: 0.7, duration: 0.8, from: "bottom" });
  const projectsRef = useSmoothReveal({ delay: 0.8, duration: 0.8, from: "bottom" });
  const awardsRef = useSmoothReveal({ delay: 0.9, duration: 0.8, from: "bottom" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        {/* Back Button */}
        <div className="mb-8">
          <TransitionLink href="/about">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1 duration-300" />
              Back to Team
            </Button>
          </TransitionLink>
        </div>

        {/* Header Section */}
        <div ref={headerRef} className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-thin tracking-tight text-foreground mb-4">
              {member.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-light text-foreground/70 mb-6">
              {member.title}
            </p>
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Co-Founder
            </Badge>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{resume.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{resume.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${resume.email}`}
                className="text-sm hover:text-foreground transition-colors duration-300"
              >
                {resume.email}
              </a>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <section ref={summaryRef} className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-6 tracking-wide">
            SUMMARY
          </h2>
          <div className="h-px bg-foreground/20 mb-6"></div>
          <p className="text-foreground/70 leading-relaxed text-lg">
            {resume.summary}
          </p>
        </section>

        {/* Work Experience Section */}
        {resume.experience && resume.experience.length > 0 && (
          <section ref={experienceRef} className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-6 tracking-wide">
              WORK EXPERIENCE
            </h2>
            <div className="h-px bg-foreground/20 mb-8"></div>

            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-foreground/80">{exp.company}</p>
                  </div>
                  <div className="text-foreground/60 mt-2 md:mt-0 md:text-right">
                    <p className="text-sm">{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-3 ml-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-foreground/70 leading-relaxed relative before:content-[''] before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:bg-foreground/30 before:rounded-full"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education Section */}
        {resume.education && resume.education.length > 0 && (
          <section ref={educationRef} className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-6 tracking-wide">
              EDUCATION
            </h2>
            <div className="h-px bg-foreground/20 mb-8"></div>

            {resume.education.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-light text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-foreground/70">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-foreground/60 mt-1">{edu.gpa}</p>
                    )}
                  </div>
                  <p className="text-foreground/60 text-sm mt-2 md:mt-0">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Skills Section */}
        {resume.skills && resume.skills.length > 0 && (
          <section ref={skillsRef} className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-6 tracking-wide">
              SKILLS
            </h2>
            <div className="h-px bg-foreground/20 mb-8"></div>

            <div className="flex flex-wrap gap-3">
              {resume.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-light"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {resume.projects && resume.projects.length > 0 && (
          <section ref={projectsRef} className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-6 tracking-wide">
              PROJECTS & RESEARCH
            </h2>
            <div className="h-px bg-foreground/20 mb-8"></div>

            <div className="space-y-6">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-xl font-light text-foreground mb-2">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards & Certifications Section */}
        {((resume.awards && resume.awards.length > 0) ||
          (resume.certifications && resume.certifications.length > 0)) && (
          <section ref={awardsRef} className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-6 tracking-wide">
              AWARDS & CERTIFICATIONS
            </h2>
            <div className="h-px bg-foreground/20 mb-8"></div>

            {resume.certifications && resume.certifications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-light text-foreground mb-4">
                  Certifications
                </h3>
                <ul className="space-y-2 ml-6">
                  {resume.certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="text-foreground/70 relative before:content-[''] before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:bg-foreground/30 before:rounded-full"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resume.awards && resume.awards.length > 0 && (
              <div>
                <h3 className="text-xl font-light text-foreground mb-4">
                  Awards & Recognition
                </h3>
                <ul className="space-y-2 ml-6">
                  {resume.awards.map((award, index) => (
                    <li
                      key={index}
                      className="text-foreground/70 relative before:content-[''] before:absolute before:-left-6 before:top-2.5 before:w-2 before:h-2 before:bg-foreground/30 before:rounded-full"
                    >
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Back Button */}
        <div className="text-center mt-16">
          <TransitionLink href="/about">
            <button className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">
              <span className="relative z-10">BACK TO TEAM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
