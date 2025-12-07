// app/page.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Shield,
  Clock,
  BarChart3,
  Users,
  FileText,
  HeartPulse,
  MessageSquare,
  DollarSign,
  Stethoscope,
  CreditCard,
  ClipboardCheck,
  Database,
  Building,
  Server,
  Star,
  FileCheck,
  Activity,
  UserCheck,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Serving from "@/components/Serving";
export default function Home() {
  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="text-white w-8 h-8 md:w-8 md:h-8" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Keen Claim <span className="text-red-600">LLC</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["ABOUT", "WHY CHOOSE US", "OUR SERVICES", "CONTACT US"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Phone CTA */}
          <a
            href="tel:4433330041"
            className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            443-333-0041
          </a>
        </div>
      </div>
    </nav>
  );
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ABOUT <span className="text-red-600">KEEN CLAIM LLC</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering Excellence in Healthcare Revenue Cycle Management
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Keen Claim LLC</strong> is a well-founded and robust
                  Revenue Cycle Management firm serving individual Healthcare
                  Practices, Large Multi-site Healthcare Groups, Urgent care,
                  Free-standing Emergency Rooms, Ambulatory Surgical Centers,
                  and Micro-Hospitals.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With years of experience in meticulously handling{" "}
                  <strong className="text-red-600">multi-million dollar</strong>{" "}
                  accounts for our valued clients and with a{" "}
                  <strong className="text-blue-600">
                    300% annual growth in our client portfolio
                  </strong>
                  , we have successfully managed to excel and proved that we are
                  amongst the best in the business.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To empower and enable healthcare entities to succeed
                    operationally and financially by ensuring they are
                    reimbursed fairly for the services they deliver to the
                    community.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To improve the health of every community we serve through
                    efficient and ethical revenue cycle management.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "98%", label: "Claim Accuracy" },
                { value: "40%", label: "Revenue Increase" },
                { value: "24/7", label: "Support" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl text-center shadow-sm"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const WhyChooseUs = () => (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-red-600">Keen Claim LLC</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for healthcare providers
            nationwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  24/7 Operational Support
                </h3>
              </div>
              <p className="text-gray-600">
                With our unique hybrid operations structure, we provide
                round-the-clock support ensuring every claim receives adequate
                reimbursement and reporting while delivering matchless patient
                services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="text-red-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  HIPAA Compliant Security
                </h3>
              </div>
              <p className="text-gray-600">
                We are committed to protecting critical healthcare data with
                encrypted IPSEC VPN connections and advanced FIREWALL
                implementations, ensuring your valuable data is secure and
                protected from intrusions.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">
                Deep Healthcare Industry Roots
              </h3>
              <p className="text-lg mb-6">
                Keen Claim LLC has deep roots in the healthcare industry with
                experience in managing and operating profitable healthcare
                ventures while giving back to the community. We integrate the
                best possible framework to ensure matchless collections and
                hassle-free operations.
              </p>
              <p className="text-2xl font-bold">
                For best results, you want{" "}
                <span className="text-yellow-300">Keen Claim LLC</span> by your
                side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  interface Service {
    name: string;
    icon: React.ReactNode;
    shortDescription: string;
    fullDescription: string;
  }

  interface ExpandedServices {
    [key: string]: boolean;
  }

  const ServicesSection = () => {
    // State for each service's "show more" toggle with proper typing
    const [expandedServices, setExpandedServices] = useState<ExpandedServices>(
      {}
    );

    const toggleService = (serviceName: string) => {
      setExpandedServices((prev) => ({
        ...prev,
        [serviceName]: !prev[serviceName],
      }));
    };

    const services: Service[] = [
      {
        name: "CREDENTIALING",
        icon: <UserCheck className="text-blue-600" size={28} />,
        shortDescription:
          "Complex credentialing process handled by experienced specialists for seamless workflow.",
        fullDescription:
          "Credentialing is a complex and delicate process handled by our experienced professional credentialing specialists to ensure pre-requisites for seamless workflow are met timely. We manage all aspects of provider enrollment and credentialing with payers and regulatory bodies.",
      },
      {
        name: "Coding",
        icon: <FileCheck className="text-green-600" size={28} />,
        shortDescription:
          "Certified Professional Coders ensure accurate and compliant coding practices.",
        fullDescription:
          "Our Certified Professional Coders (CPC) with updated knowledge and latest trends in the industry ensure accurate and compliant coding practices are adopted by setting Industry Benchmark Standards. We stay current with ICD-10, CPT, and HCPCS updates.",
      },
      {
        name: "CHARGE ENTRY",
        icon: <CreditCard className="text-purple-600" size={28} />,
        shortDescription:
          "Meticulous charge entry to maintain the integrity of your billing cycle.",
        fullDescription:
          "Charge Entry is an essential and crucial part of the whole billing process. If it is not carried out meticulously, the whole cycle may get disturbed and sometimes will likely have to start again. Our team ensures accuracy in every entry to prevent revenue leakage.",
      },
      {
        name: "CLAIMS SCRUBBING",
        icon: <ClipboardCheck className="text-red-600" size={28} />,
        shortDescription:
          "Expert examination of each claim for errors prior to submission.",
        fullDescription:
          "A dedicated team of expert professionals examines each claim for demographic, coding, and submission errors prior to submission, ensuring valid and accurate data is submitted to the Payors. This significantly reduces denial rates and speeds up reimbursement.",
      },
      {
        name: "AR FOLLOW UP",
        icon: <Activity className="text-orange-600" size={28} />,
        shortDescription:
          "Rigorous follow-up on submitted claims for timely adjudication.",
        fullDescription:
          "We have a dedicated team of experienced and well-versed account receivable specialists rigorously following up on all submitted claims with the Payors to get timely adjudication status and maximize collections.",
      },
      {
        name: "DENIALS & APPEALS",
        icon: <AlertCircle className="text-yellow-600" size={28} />,
        shortDescription:
          "Systematic approach to handle underpaid and denied claims.",
        fullDescription:
          "Our team has implemented an exhaustive and systematic approach for all underpaid, partially paid, and denied claims, resulting in most claims being adjudicated timely with optimal reimbursements through effective appeal strategies.",
      },
      {
        name: "PAYMENT POSTING",
        icon: <DollarSign className="text-emerald-600" size={28} />,
        shortDescription:
          "Daily review and posting of payments for accurate cash flow tracking.",
        fullDescription:
          "A dedicated team ensures all paper checks, ERAs, and EFTs are reviewed daily and posted timely to give day-to-day status of cash inflow to our clients so they know what's going on in their practice with complete transparency.",
      },
      {
        name: "PATIENT SERVICES",
        icon: <Users className="text-cyan-600" size={28} />,
        shortDescription:
          "Designated patient advocates for post-care communication.",
        fullDescription:
          "We equip our client's healthcare facilities with designated patient advocates and customer service representatives that remain in contact with patients after care delivery, improving patient satisfaction and reducing bad debt.",
      },
      {
        name: "REPORTING",
        icon: <BarChart3 className="text-indigo-600" size={28} />,
        shortDescription:
          "Real-time analytics and reporting for practice transparency.",
        fullDescription:
          "Our dedicated analytics and reporting team analyzes trends and ensures implementation of a pre-defined reporting and transparency matrix depicting real-time status of our clients' practice performance and financial health.",
      },
      {
        name: "FREE-STANDING ER",
        icon: <Building className="text-rose-600" size={28} />,
        shortDescription:
          "Specialized solutions for Free-Standing Emergency Rooms.",
        fullDescription:
          "We have a track record with the best possible approach and solutions for Free-Standing Emergency Rooms / Micro-Hospitals with revenue outcomes they may have never expected, handling unique billing challenges specific to emergency care.",
      },
      {
        name: "IT SERVICES",
        icon: <Server className="text-gray-600" size={28} />,
        shortDescription:
          "Secure data management and IT support for healthcare operations.",
        fullDescription:
          "Our IT services include secure data transmission and storage, access to software, scalable medical facility infrastructure, reliable IT support, and other services mandatory for seamless healthcare operations and HIPAA compliance.",
      },
      {
        name: "SPECIAL SERVICES",
        icon: <Star className="text-amber-600" size={28} />,
        shortDescription:
          "Comprehensive services including Marketing, HR, and Payroll.",
        fullDescription:
          "We are proud of our well-structured RCM system, and on top of that we offer Marketing, HR, and Payroll services. We may offer any special services as required by healthcare entities, providing end-to-end practice management solutions.",
      },
    ];

    return (
      <section
        id="our-services"
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                OUR <span className="text-blue-600">SERVICES</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Comprehensive Revenue Cycle Management Solutions by{" "}
              <span className="font-bold text-blue-700">Keen Claim LLC</span>
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tailored services to maximize your revenue potential and
              streamline healthcare operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>

                <button
                  className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors"
                  onClick={() => toggleService(service.name)}
                >
                  <span className="text-sm">SHOW MORE</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      expandedServices[service.name] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedServices[service.name] && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                    <p className="text-gray-700 mb-3">
                      {service.fullDescription}
                    </p>
                    <div className="flex items-center justify-end">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Keen Claim LLC
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full">
              <Star size={20} />
              <span className="font-bold">Keen Claim LLC</span>
              <span className="text-blue-100">|</span>
              <span>Complete Revenue Cycle Management Solutions</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => (
    <section
      id="contact-us"
      className="py-20 bg-gradient-to-br from-blue-50 to-red-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                CONTACT <span className="text-red-600">US</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your revenue cycle management? Get in touch
                with our experts today.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-500">Email</div>
                    <a
                      href="mailto:info@keenclaim.com"
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                    >
                      info@keenclaimllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-500">Call</div>
                    <a
                      href="tel:+14433330041"
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                    >
                      (443) 333-0041
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-500">Address</div>
                    <div className="text-lg font-semibold text-gray-900">
                      101 W Renner Rd Suite 140
                      <br />
                      Richardson, TX 75082
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your practice..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-white text-gray-800 shadow-lg pt-12 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 lg:mb-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="text-white w-8 h-8 md:w-8 md:h-8" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold block">
                Keen Claim <span className="text-red-500">LLC</span>
              </span>
              <p className="text-gray-600 text-sm mt-1">
                Healthcare Revenue Management Specialists
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "HIPAA Compliance"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Medical Billing",
                  "Revenue Cycle Management",
                  "Practice Consulting",
                  "Claims Processing",
                  "Patient Billing",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                Connect With Us
              </h4>
              <p className="text-gray-600 mb-4">
                Follow us on social media for updates and insights
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {[
                  {
                    icon: "in",
                    color: "bg-blue-600",
                    hover: "hover:bg-blue-700",
                    label: "LinkedIn",
                  },
                  {
                    icon: "𝕏",
                    color: "bg-gray-900",
                    hover: "hover:bg-black",
                    label: "Twitter",
                  },
                  {
                    icon: "f",
                    color: "bg-blue-500",
                    hover: "hover:bg-blue-600",
                    label: "Facebook",
                  },
                  {
                    icon: "ig",
                    color: "bg-gradient-to-r from-purple-500 to-pink-500",
                    hover: "hover:from-purple-600 hover:to-pink-600",
                    label: "Instagram",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`${social.color} ${social.hover} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md relative group`}
                    aria-label={social.label}
                  >
                    <span className="font-semibold">{social.icon}</span>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span>{" "}
                  info@keenclaimllc.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> (443) 333-0041
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-3">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-900">
                KEEN CLAIM LLC
              </span>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <Serving />
      <ContactSection />
      <Footer />
    </div>
  );
}
