/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  Zap
} from "lucide-react";
import Navbar from "./components/Navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-mango selection:text-ink">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              We Turn Businesses Into <span className="text-mango">Brands</span> And Doubt Into Belief.
            </h1>
            <h2 className="text-xl md:text-2xl text-grey font-medium mb-8 max-w-xl">
              We help businesses grow visibility, build authority, and earn trust through strategic content across platforms.
            </h2>
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="https://wa.me/7542878967?text=Hi%20Forge%20Studios!%20I'm%20interested%20in%20your%20branding%20and%20visibility%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mango text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-mango/90 transition-all hover:scale-105 shadow-xl shadow-mango/20"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a 
                href="https://wa.me/7542878967?text=Hi%20Forge%20Studios!%20I'd%20like%20to%20chat%20about%20my%20brand%20visibility." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-ink/10 text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-off-white transition-all"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
            <p className="text-lg text-grey/80 max-w-lg">
              In today’s market, attention is currency. If your business isn’t consistently seen, it’s forgotten. At Forge Studios, we build content systems that make your brand visible, credible, and impossible to ignore.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-mango/20 to-transparent rounded-full blur-3xl absolute -inset-10 -z-10" />
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-ink/5 transform rotate-2">
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-ink/5 rounded-full" />
                <div className="h-4 w-1/2 bg-ink/5 rounded-full" />
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="aspect-square bg-mango/10 rounded-2xl" />
                  <div className="aspect-square bg-mango/10 rounded-2xl" />
                  <div className="aspect-square bg-mango/10 rounded-2xl" />
                </div>
                <div className="h-32 w-full bg-ink/5 rounded-2xl flex items-center justify-center">
                  <Zap className="text-mango" size={48} />
                </div>
              </div>
            </div>
            {/* Abstract floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-mango p-6 rounded-2xl shadow-xl"
            >
              <TrendingUp className="text-ink" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-ink text-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">
              Most Businesses Don’t Have a Visibility Problem — They Have a <span className="text-mango">Strategy</span> Problem.
            </h2>
            <p className="text-xl text-off-white/60 max-w-2xl mx-auto">
              You might have a great product or service. But without consistent visibility and clear positioning, your audience never builds trust.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { title: "Inconsistent posting", icon: <AlertCircle /> },
              { title: "No clear brand identity", icon: <Target /> },
              { title: "Content without direction", icon: <Layers /> },
              { title: "Low engagement", icon: <TrendingUp /> },
              { title: "Not being remembered", icon: <Users /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="text-mango mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.p {...fadeIn} className="text-center mt-16 text-2xl font-display italic text-mango">
            "If people don’t see you consistently, they won’t trust you."
          </motion.p>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl mb-8">
                We Build Systems That Make You Seen, Trusted, and Chosen.
              </h2>
              <p className="text-xl text-grey mb-8">
                Forge Studios is not just a content agency. We design a structured approach to content creation, distribution, and positioning — so your business grows with consistency.
              </p>
              <div className="p-6 bg-soft-yellow rounded-2xl border-l-4 border-mango">
                <p className="text-xl font-bold text-ink">
                  This is not random content. This is calculated visibility.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-ink rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/analytics-vision/800/450" 
                  alt="Calculated Strategy" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-mango text-ink p-6 rounded-2xl font-bold shadow-xl">
                Calculated Strategy
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">What We Do</h2>
            <div className="h-2 w-24 bg-mango rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Content Creation",
                desc: "We create high-quality, platform-specific content designed to capture attention and communicate your brand clearly.",
                icon: <Puzzle className="w-10 h-10" />
              },
              {
                title: "Content Distribution",
                desc: "We ensure your content reaches the right audience across platforms — consistently and effectively.",
                icon: <Radio className="w-10 h-10" />
              },
              {
                title: "Brand Positioning",
                desc: "We shape how your audience perceives you — as a trusted and credible authority in your space.",
                icon: <Brain className="w-10 h-10" />
              },
              {
                title: "Content Systems",
                desc: "We build repeatable systems that generate visibility and trust over time — not one-time results.",
                icon: <Settings className="w-10 h-10" />
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-ink/5 hover:shadow-2xl hover:shadow-mango/10 transition-all group"
              >
                <div className="text-mango mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-grey text-lg leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-24 bg-ink text-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">Our Approach</h2>
            <p className="text-xl text-off-white/60">A structured path to brand authority.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              "Understand Your Business & Market",
              "Build Your Content Strategy",
              "Create High-Impact Content",
              "Distribute Across Platforms",
              "Scale Visibility & Authority"
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-display font-bold text-white/10 mb-4">0{i + 1}</div>
                <h3 className="text-lg font-bold mb-4">{step}</h3>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-mango">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20 text-center">
            <p className="text-2xl font-display">
              Consistency builds <span className="text-mango">visibility</span>. Strategy builds <span className="text-mango">trust</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. RESULTS SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">What You Get</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Strong online presence",
              "Increased brand visibility",
              "Better audience trust",
              "Clear positioning in your market",
              "Consistent content output",
              "Higher quality leads"
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-off-white rounded-2xl border border-ink/5"
              >
                <CheckCircle2 className="text-mango shrink-0" size={28} />
                <span className="text-lg font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIFFERENTIATION SECTION */}
      <section className="py-24 bg-soft-yellow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl mb-8">Why Forge Studios?</h2>
              <div className="space-y-6">
                {[
                  "We focus on positioning, not just posting",
                  "We build systems, not one-off content",
                  "We think long-term brand, not short-term reach",
                  "We combine strategy + execution"
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
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] bg-ink rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/business-growth/800/800" 
                alt="The Forge Difference" 
                className="w-full h-full object-cover opacity-40 absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                <h3 className="text-3xl mb-6 text-mango">The Forge Difference</h3>
                <p className="text-lg text-off-white opacity-90 leading-relaxed">
                  Most agencies focus on vanity metrics. We focus on market authority. We don't just want you to be seen; we want you to be respected.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. ABOUT SECTION */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://picsum.photos/seed/forge-about/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl mb-8">About Forge Studios</h2>
              <p className="text-xl text-grey leading-relaxed mb-8">
                Forge Studios was built with one goal — to help businesses grow by becoming brands people trust. We believe visibility without positioning is noise, and content without strategy is wasted effort.
              </p>
              <p className="text-xl text-grey leading-relaxed">
                We focus on building strong, consistent, and scalable brand presence through structured content systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section id="contact" className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-mango to-soft-yellow p-12 md:p-24 rounded-[3rem] text-center shadow-2xl shadow-mango/20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl mb-6">Ready to Turn Your Business Into a Brand?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 opacity-80">
              Let’s build your visibility and authority system.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/7542878967?text=Hi%20Forge%20Studios!%20I'm%20ready%20to%20start%20turning%20my%20business%20into%20a%20brand." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ink text-off-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl"
              >
                Start Now
              </a>
              <a 
                href="https://wa.me/7542878967?text=Hi%20Forge%20Studios!%20I'd%20like%20to%20discuss%20a%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-ink px-10 py-5 rounded-full font-bold text-xl hover:bg-off-white transition-colors"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-ink/5 whitespace-nowrap pointer-events-none">
            FORGE STUDIOS
          </div>
        </motion.div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-20 bg-off-white border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-3xl font-display font-bold mb-6">FORGE<span className="text-mango">STUDIOS</span></div>
              <p className="text-xl text-grey max-w-sm">
                “Building Brands That People Trust.”
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Links</h4>
              <ul className="space-y-4 text-grey">
                <li><a href="#home" className="hover:text-mango transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-mango transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-mango transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-mango transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
              <ul className="space-y-4 text-grey">
                <li><a href="https://wa.me/7542878967?text=Hi%20Forge%20Studios!%20I'm%20reaching%20out%20from%20your%20website." target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors flex items-center gap-2">WhatsApp</a></li>
                <li><a href="https://instagram.com/yourlink" target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors flex items-center gap-2">Instagram</a></li>
                <li><a href="https://linkedin.com/in/yourlink" target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors flex items-center gap-2">LinkedIn</a></li>
                <li><a href="https://twitter.com/yourlink" target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors flex items-center gap-2">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-4 text-grey/60 text-sm">
            <p>© 2026 Forge Studios. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-ink">Privacy Policy</a>
              <a href="#" className="hover:text-ink">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
