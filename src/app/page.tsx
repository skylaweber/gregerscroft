'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Zap, TrendingUp, Users, Menu, Linkedin, Twitter, Youtube, Building2, Shield, Search, Wallet, Lock, Settings, ShoppingCart, Palette, Video, Brain, Globe, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm("meoqjrzl");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-white"
  const thinnerFontClass = "font-light"
  const roundedButtonClass = "rounded-full"

  const NavItems = () => (
    <>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#features">
        Features
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#about">
        About
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#testimonials">
        Testimonials
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#faq">
        FAQ
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#contact">
        Contact
      </Link>
    </>
  )

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    if (state.succeeded) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span className="ml-2 text-lg font-bold text-white">Gregerscroft</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <NavItems />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className={`p-0 md:hidden hover:bg-yellow-500 group ${roundedButtonClass}`} size="icon">
              <Menu className="h-5 w-5 group-hover:text-black" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black">
            <nav className="flex flex-col gap-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-32 lg:py-42 xl:py-62 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-500/10 to-black animate-breath"></div>
          <div className="absolute inset-0 grid-background"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-screen-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className={`text-3xl ${thinnerFontClass} tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ${gradientTextClass}`}>
                  Innovative Government Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
                  Optimizing public sector operations to deliver better services for citizens.
                </p>
              </div>
              <div className="w-full max-w-[200px] space-y-2">
                <Link href="#contact">
                  <Button className={`w-full bg-gradient-to-r from-yellow-500 to-white text-gray-900 hover:from-yellow-600 hover:to-gray-100 ${roundedButtonClass}`}>
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="h-px bg-gradient-to-r from-yellow-500 to-black"></div>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl text-center mb-12 ${gradientTextClass}`}>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="h-8 w-8 text-yellow-500" />,
                  title: "Strategic Consulting",
                  description: "Expert guidance for public sector transformation and modernization with proven ROI"
                },
                {
                  icon: <Shield className="h-8 w-8 text-yellow-500" />,
                  title: "Risk Management & Investigations",
                  description: "Complex fraud investigations, risk assessment, and mitigation strategies for government agencies"
                },
                {
                  icon: <Search className="h-8 w-8 text-yellow-500" />,
                  title: "Compliance & Oversight",
                  description: "Comprehensive audits and quality assurance reviews to ensure regulatory compliance and operational integrity"
                },
                {
                  icon: <Wallet className="h-8 w-8 text-yellow-500" />,
                  title: "Financial Intelligence",
                  description: "Advanced financial fraud detection, BSA/AML/KYC compliance, and cryptocurrency investigation services"
                },
                {
                  icon: <Lock className="h-8 w-8 text-yellow-500" />,
                  title: "Cybersecurity & Digital Forensics",
                  description: "Protection of critical infrastructure with expert computer forensics and cyber intelligence"
                },
                {
                  icon: <Settings className="h-8 w-8 text-yellow-500" />,
                  title: "Process Optimization",
                  description: "AI-powered automation and data-driven workflow improvements for enhanced operational efficiency"
                },
                {
                  icon: <ShoppingCart className="h-8 w-8 text-yellow-500" />,
                  title: "Procurement Integrity",
                  description: "Anti-fraud measures and compliance protocols for government procurement systems"
                },
                {
                  icon: <Palette className="h-8 w-8 text-yellow-500" />,
                  title: "Content Development",
                  description: "Professional technical writing, documentation, and strategic communications"
                },
                {
                  icon: <Video className="h-8 w-8 text-yellow-500" />,
                  title: "Digital Media Solutions",
                  description: "Comprehensive multimedia production and content management for government communications"
                },
                {
                  icon: <Brain className="h-8 w-8 text-yellow-500" />,
                  title: "Advanced Analytics",
                  description: "AI-powered data analysis and predictive modeling for informed decision-making"
                },
                {
                  icon: <Globe className="h-8 w-8 text-yellow-500" />,
                  title: "Technology Integration",
                  description: "Seamless implementation of modern digital solutions and emerging technologies"
                },
                {
                  icon: <Target className="h-8 w-8 text-yellow-500" />,
                  title: "Program Management",
                  description: "Strategic oversight of mission-critical initiatives with proven success in large-scale projects"
                }
              ].map((service, index) => (
                <Card key={index} className="bg-neutral-900 border border-gray-700">
                  <CardContent className="flex flex-col items-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full border border-gray-700 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className={`text-xl ${thinnerFontClass} text-center ${gradientTextClass}`}>{service.title}</h3>
                    <p className="text-center text-gray-300">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl ${gradientTextClass}`}>About Gregerscroft</h2>
                <p className="text-gray-300 md:text-lg">
                  At Gregerscroft, we bring over two decades of government experience to transform public sector operations. Our leadership team includes Department of Justice award-winning investigators, cybersecurity experts, and program directors with proven success in managing complex government initiatives worth billions in impact.
                </p>
                <p className="text-gray-300 md:text-lg">
                  Our expertise spans fraud and internal investigations, cybersecurity, and digital forensics, complemented by extensive experience in technology infrastructure, technical writing, and strategic communications. Recognized with the Law Enforcement Public Service Award and multiple Excellence Awards, we've led nationwide programs, managed $40M+ budgets, and developed cutting-edge systems that have increased program impact from millions to billions in recoveries.
                </p>
                <p className="text-gray-300 md:text-lg">
                  Partner with Gregerscroft to bring cutting-edge solutions and efficiency to your government projects. With experience across multiple government agencies, advanced certifications in cybersecurity and fraud examination, and deep expertise in artificial intelligence, machine learning, and blockchain technologies, our proven track record ensures we deliver measurable results while maintaining the highest standards of compliance and security.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/images/pexels-fauxels-3184357.jpg"
                  alt="About Gregerscroft"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl text-center mb-12 ${gradientTextClass}`}>What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechCorp",
                  quote: "Gregerscroft transformed our business with their AI solutions. We&apos;ve seen a 40% increase in efficiency!"
                },
                {
                  name: "Michael Chen",
                  company: "InnovateCo",
                  quote: "The predictive analytics tool from Gregerscroft has revolutionized our decision-making process."
                },
                {
                  name: "Emily Rodriguez",
                  company: "FutureTech",
                  quote: "Working with Gregerscroft was a game-changer. Their AI expertise is unmatched in the industry."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-neutral-900 border border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl text-center mb-12 ${gradientTextClass}`}>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "What industries do you serve?",
                  answer: "We serve a wide range of industries including finance, healthcare, retail, and manufacturing. Our AI solutions are adaptable to various business needs."
                },
                {
                  question: "How long does it take to implement your AI solutions?",
                  answer: "Implementation time varies depending on the complexity of the solution and your existing infrastructure. Typically, our projects range from 2-6 months."
                },
                {
                  question: "Do I need to have technical expertise to use your services?",
                  answer: "No, our solutions are designed to be user-friendly. We provide comprehensive training and ongoing support to ensure you can maximize the benefits of our AI tools."
                },
                {
                  question: "How do you ensure data privacy and security?",
                  answer: "We adhere to strict data protection protocols and comply with industry standards like GDPR. Your data security is our top priority."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl ${gradientTextClass}`}>
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg">
                  Ready to start your AI journey? Contact us today and let&apos;s discuss how we can help transform your business.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {formSubmitted ? (
                  <div className="bg-neutral-800 p-6 rounded-lg">
                    <p className="text-green-500 text-lg font-semibold mb-2">Thank you for your message!</p>
                    <p className="text-gray-300">We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      className="bg-neutral-800 text-white border-gray-700"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <Input
                      className="bg-neutral-800 text-white border-gray-700"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                    <Textarea
                      className="bg-neutral-800 text-white border-gray-700"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                    <Button type="submit" disabled={state.submitting} className={`w-full bg-gradient-to-r from-yellow-500 to-white text-gray-900 hover:from-yellow-600 hover:to-gray-100 ${roundedButtonClass}`}>
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-xl">
          <p className="text-xs text-gray-400">© 2024 Gregerscroft. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes breath {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-breath {
          animation: breath 8s ease-in-out infinite;
        }
        .grid-background {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 100%);
        }
      `}</style>
    </div>
  )
}