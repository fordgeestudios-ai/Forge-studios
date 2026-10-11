/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import type { ReactNode, FormEvent } from "react";
import {
  ArrowRight,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Puzzle,
  Radio,
  Brain,
  Settings,
  TrendingUp,
  Users,
  Target,
  Layers,
  Play,
  Mail,
  Stethoscope,
  Award,
} from "lucide-react";
import Navbar from "./components/Navbar";

const WHATSAPP = "917542878967";
const EMAIL = "fordgeestudios@gmail.com";
const INSTAGRAM = "https://www.instagram.com/fordge.studios/";
const LINKEDIN = "https://www.linkedin.com/company/fordge-studios/";

function wa(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

/** Wordmark: FORDGE (yellow) + STUDIOS (black). */
function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tighter ${className}`}>
      <span className="text-mango">FORDGE</span>
      <span className="text-ink">STUDIOS</span>
    </span>
  );
}

/**
 * Reliable scroll reveal. Content is revealed by an IntersectionObserver
 * (which also fires for elements already on screen at load), so nothing
 * gets stuck invisible. Falls back to visible if IO is unavailable.
 */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type ReelItem = {
  code: string;
  client: string;
  topic: string;
  metric?: string;
};

const REELS: ReelItem[] = [
  { code: "DdB2hP-CDpq", client: "Pinhole Endovascular", topic: "When is varicose veins treated?", metric: "New" },
  { code: "DcOdBZWj0h_", client: "Toothfluencer Dental", topic: "Tooth gems", metric: "5.6K views" },
  { code: "DPsq9mYER_1", client: "The Moment Makers", topic: "Event highlight", metric: "Events" },
  { code: "DWoey3Ukb-P", client: "The Moment Makers", topic: "Event highlight", metric: "Events" },
];

function ReelCard({ reel }: { reel: ReelItem }) {
  const url = `https://www.instagram.com/reel/${reel.code}/`;
  return (
    <div className="bg-white rounded-3xl border border-ink/5 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col">
      <div className="relative bg-ink/5" style={{ height: 540 }}>
        <iframe
          src={`https://www.instagram.com/reel/${reel.code}/embed/`}
          title={`${reel.client} — ${reel.topic}`}
          loading="lazy"
          allowFullScreen
          scrolling="no"
          className="w-full h-full border-0"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold leading-tight">{reel.client}</h3>
          {reel.metric && (
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider bg-mango/15 text-ink px-3 py-1 rounded-full">
              {reel.metric}
            </span>
          )}
        </div>
        <p className="text-grey mb-4">{reel.topic}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-mango transition-colors"
        >
          <Play size={16} /> Watch on Instagram
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Fordge Studios! I'd like to discuss content for my brand.\n\n` +
      `Name: ${name || "-"}\n` +
      `Profession / Business: ${work || "-"}\n` +
      `Message: ${message || "-"}`;
    window.open(wa(text), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full bg-white border border-ink/10 rounded-2xl px-5 py-4 text-ink placeholder:text-grey/50 focus:outline-none focus:ring-2 focus:ring-mango/40 focus:border-mango transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className={field}
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={field}
        placeholder="Your profession or business (e.g. Doctor, Law firm, Clinic)"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      <textarea
        className={`${field} min-h-[120px] resize-y`}
        placeholder="What would you like help with?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-ink text-off-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl"
      >
        <MessageCircle size={20} /> Send on WhatsApp
      </button>
      <p className="text-sm text-grey/70 text-center">
        Prefer email? Write to{" "}
        <a href={`mailto:${EMAIL}`} className="font-bold text-ink hover:text-mango">
          {EMAIL}
        </a>
      </p>
    </form>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-mango selection:text-ink">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-mango/15 text-ink text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Stethoscope size={16} /> For doctors, lawyers &amp; growing businesses
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              We Turn Businesses Into <span className="text-mango">Brands</span> And Doubt Into Belief.
            </h1>
            <h2 className="text-xl md:text-2xl text-grey font-medium mb-8 max-w-xl">
              We help doctors, law firms and businesses grow visibility, build authority, and earn
              trust through strategic content.
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={wa("Hi Fordge Studios! I'm interested in your content and branding services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mango text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-mango/90 transition-all hover:scale-105 shadow-xl shadow-mango/20"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a
                href="#work"
                className="bg-white border border-ink/10 text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-off-white transition-all"
              >
                <Play size={20} /> See our work
              </a>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-grey/60">
              Doctors · Clinics · Law firms · Growing businesses
            </p>
          </div>

          {/* Real-metrics credibility card (replaces the empty placeholder) */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-mango/20 to-transparent rounded-full blur-3xl absolute -inset-10 -z-10" />
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-ink/5 transform rotate-2">
              <p className="text-sm font-bold uppercase tracking-widest text-grey mb-1">
                Recent results
              </p>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-6xl font-display font-bold text-ink">150K</span>
                <span className="text-grey mb-2">views on a single medical reel</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-off-white rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-ink">50K</div>
                  <div className="text-xs text-grey">BPH reel</div>
                </div>
                <div className="bg-off-white rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-ink">5.6K</div>
                  <div className="text-xs text-grey">Dental</div>
                </div>
                <div className="bg-off-white rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-ink">100+</div>
                  <div className="text-xs text-grey">Videos</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-ink text-off-white rounded-2xl p-4">
                <Stethoscope className="text-mango shrink-0" size={22} />
                <span className="text-sm font-medium">
                  Trusted by doctors &amp; healthcare brands
                </span>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 bg-mango p-6 rounded-2xl shadow-xl animate-float">
              <TrendingUp className="text-ink" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 STATS BAND */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-3 gap-4 bg-ink text-off-white rounded-3xl px-6 py-8 md:py-10">
              {[
                { value: "100+", label: "Videos produced" },
                { value: "150K", label: "Views on our top reel" },
                { value: "4+", label: "Brands & practices" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-5xl font-display font-bold text-mango">{s.value}</div>
                  <div className="text-sm md:text-base text-off-white/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-ink text-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">
              Most Businesses Don’t Have a Visibility Problem — They Have a{" "}
              <span className="text-mango">Strategy</span> Problem.
            </h2>
            <p className="text-xl text-off-white/60 max-w-2xl mx-auto">
              You might be excellent at what you do. But without consistent visibility and clear
              positioning, your audience never builds trust.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Inconsistent posting", icon: <AlertCircle /> },
              { title: "No clear brand identity", icon: <Target /> },
              { title: "Content without direction", icon: <Layers /> },
              { title: "Low engagement", icon: <TrendingUp /> },
              { title: "Not being remembered", icon: <Users /> },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group h-full">
                  <div className="text-mango mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-16">
            <p className="text-2xl font-display italic text-mango">
              "If people don’t see you consistently, they won’t trust you."
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl mb-8">
                We Build Systems That Make You Seen, Trusted, and Chosen.
              </h2>
              <p className="text-xl text-grey mb-8">
                Fordge Studios is not just a content agency. We design a structured approach to
                content creation, distribution, and positioning — so your practice or firm grows
                with consistency.
              </p>
              <div className="p-6 bg-soft-yellow rounded-2xl border-l-4 border-mango">
                <p className="text-xl font-bold text-ink">
                  This is not random content. This is calculated visibility.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-ink via-ink to-grey flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-mango text-5xl md:text-6xl font-display font-bold mb-2">
                      200K+
                    </div>
                    <p className="text-off-white/80 font-medium">
                      combined views across recent medical reels
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-mango text-ink p-6 rounded-2xl font-bold shadow-xl">
                  Calculated Strategy
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">What We Do</h2>
            <div className="h-2 w-24 bg-mango rounded-full" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Content Creation",
                desc: "We create high-quality, platform-specific content designed to capture attention and communicate your expertise clearly.",
                icon: <Puzzle className="w-10 h-10" />,
              },
              {
                title: "Content Distribution",
                desc: "We ensure your content reaches the right audience across platforms — consistently and effectively.",
                icon: <Radio className="w-10 h-10" />,
              },
              {
                title: "Brand Positioning",
                desc: "We shape how your audience perceives you — as a trusted and credible authority in your space.",
                icon: <Brain className="w-10 h-10" />,
              },
              {
                title: "Content Systems",
                desc: "We build repeatable systems that generate visibility and trust over time — not one-time results.",
                icon: <Settings className="w-10 h-10" />,
              },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white p-10 rounded-3xl border border-ink/5 hover:shadow-2xl hover:shadow-mango/10 transition-all group h-full">
                  <div className="text-mango mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-grey text-lg leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-24 bg-ink text-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">Our Approach</h2>
            <p className="text-xl text-off-white/60">A structured path to brand authority.</p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              "Understand Your Practice & Market",
              "Build Your Content Strategy",
              "Create High-Impact Content",
              "Distribute Across Platforms",
              "Scale Visibility & Authority",
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative">
                  <div className="text-6xl font-display font-bold text-white/10 mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-4">{step}</h3>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-mango">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="text-2xl font-display">
              Consistency builds <span className="text-mango">visibility</span>. Strategy builds{" "}
              <span className="text-mango">trust</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. OUR WORK / REELS */}
      <section id="work" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Our Work</h2>
            <p className="text-xl text-grey max-w-2xl mx-auto">
              A few highlights from the 100+ videos we’ve produced for doctors, clinics and growing
              brands — explaining complex topics in a way people actually watch.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REELS.map((reel) => (
              <Reveal key={reel.code}>
                <ReelCard reel={reel} />
              </Reveal>
            ))}
          </div>

          <p className="text-center text-sm text-grey/60 mt-8 max-w-2xl mx-auto">
            A selection from 100+ videos produced across our engagements. View counts reflect the
            reach of these individual reels.
          </p>
        </div>
      </section>

      {/* 7. RESULTS SECTION */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">What You Get</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Strong online presence",
              "Increased brand visibility",
              "Better audience trust",
              "Clear positioning in your market",
              "Consistent content output",
              "Higher quality leads",
            ].map((point, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-ink/5 h-full">
                  <CheckCircle2 className="text-mango shrink-0" size={28} />
                  <span className="text-lg font-medium">{point}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DIFFERENTIATION SECTION */}
      <section className="py-24 bg-soft-yellow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl mb-8">Why Fordge Studios?</h2>
              <div className="space-y-6">
                {[
                  "We focus on positioning, not just posting",
                  "We build systems, not one-off content",
                  "We think long-term brand, not short-term reach",
                  "We combine strategy + execution",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-mango rounded-full" />
                    <span className="text-xl font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-display font-bold mt-12 text-ink">
                Anyone can post content. Very few can build a brand.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[320px] bg-gradient-to-br from-ink via-ink to-[#2a2a2a] rounded-[3rem] overflow-hidden shadow-2xl">
                <Award className="absolute -bottom-8 -right-8 text-mango/10" size={220} strokeWidth={1.5} />
                <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                  <h3 className="text-3xl mb-6 text-mango">The Fordge Difference</h3>
                  <p className="text-lg text-off-white opacity-90 leading-relaxed">
                    Most agencies focus on vanity metrics. We focus on market authority. We don't
                    just want you to be seen; we want you to be respected.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. ABOUT SECTION */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl mb-8">About Fordge Studios</h2>
              <p className="text-xl text-grey leading-relaxed mb-8">
                Fordge Studios was built with one goal — to help professionals grow by becoming
                brands people trust. We believe visibility without positioning is noise, and content
                without strategy is wasted effort.
              </p>
              <p className="text-xl text-grey leading-relaxed">
                We build strong, consistent, and scalable brand presence through structured content
                systems — for doctors, law firms and businesses ready to lead their market.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <Reveal className="h-full">
            <div className="h-full bg-gradient-to-br from-mango to-soft-yellow p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-mango/20 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl mb-6">
                Ready to Turn Your Business Into a Brand?
              </h2>
              <p className="text-xl font-medium mb-10 opacity-80">
                Let’s build your visibility and authority system. Tell us a little about your work
                and we’ll take it from there.
              </p>
              <div className="space-y-4">
                <a
                  href={wa("Hi Fordge Studios! I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-ink text-off-white px-6 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle size={22} /> Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 bg-white text-ink px-6 py-4 rounded-2xl font-bold hover:bg-off-white transition-colors"
                >
                  <Mail size={22} /> {EMAIL}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="h-full bg-white p-8 md:p-10 rounded-[3rem] border border-ink/5 shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-20 bg-off-white border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <Logo className="text-3xl block mb-6" />
              <p className="text-xl text-grey max-w-sm">“Building Brands That People Trust.”</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Links</h4>
              <ul className="space-y-4 text-grey">
                <li><a href="#home" className="hover:text-mango transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-mango transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-mango transition-colors">Our Work</a></li>
                <li><a href="#about" className="hover:text-mango transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-mango transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
              <ul className="space-y-4 text-grey">
                <li>
                  <a href={wa("Hi Fordge Studios! I'm reaching out from your website.")} target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors">WhatsApp</a>
                </li>
                <li>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors">Instagram</a>
                </li>
                <li>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-mango transition-colors">Email</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-4 text-grey/60 text-sm">
            <p>© 2026 Fordge Studios. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/privacy.html" className="hover:text-ink">Privacy Policy</a>
              <a href="/terms.html" className="hover:text-ink">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
