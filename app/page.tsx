import Link from "next/link"
import { Mic, ArrowRight, Sparkles, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-[0.03] z-0"></div>

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-black rounded-full p-1.5">
              <Mic className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">Preppify</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            How it works
          </Link>
        </nav>
        <div className="flex items-center gap-2">   
          <Link href="/auth/signup" className="hidden md:block">
            <Button style={{cursor : 'pointer'}}
             className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg shadow-purple-900/20">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-900/20 rounded-full border border-purple-500/20 text-purple-400 text-sm font-medium">
          Job Interviews? We Eat Those for Breakfast.
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
          You’re Not Just Prepping{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 relative">
            You’re Leveling Up
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-purple-500/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,0 Q50,10 100,0" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Preppify uses advanced AI to help you prepare for interviews through voice
            interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup" className="hidden md:block">
            <Button
            style={{cursor : 'pointer'}}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg shadow-purple-900/20 h-14 px-8 rounded-xl"
            >
              Try for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Voice Visualization */}
      <section className="py-10 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <div className="flex justify-center">
          <div className="flex items-end gap-1 h-32">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-purple-600 to-violet-500 rounded-full animate-pulse"
                style={{
                  height: `${Math.sin(i * 0.2) * 50 + 20}%`,
                  animationDelay: `${i * 0.05}s`,
                  opacity: 0.7 + Math.sin(i * 0.3) * 0.3,
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-900/20 rounded-full border border-purple-500/20 text-purple-400 text-sm font-medium">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Powerful Voice-Enabled Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how Preppify can transform your preparation experience with cutting-edge AI technology.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 hover:border-gray-700 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mic className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Voice Recognition
            </h3>
            <p className="text-gray-400">
              Advanced AI that understands context, nuance, and can recognize different accents with remarkable
              accuracy.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 hover:border-gray-700 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Smart Suggestions
            </h3>
            <p className="text-gray-400">
              Get real-time feedback and suggestions to improve your delivery and content with personalized insights.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 hover:border-gray-700 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Instant Analysis
            </h3>
            <p className="text-gray-400">
              Detailed analysis of your speech patterns, pacing, and clarity with actionable insights for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-900/20 rounded-full border border-purple-500/20 text-purple-400 text-sm font-medium">
            Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How Preppify Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Simple steps to transform your preparation experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 hidden md:block"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center mb-6 z-10 shadow-lg shadow-purple-900/30">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Record Your Voice</h3>
            <p className="text-gray-400">
              Use our intuitive interface to record your practice sessions with crystal-clear audio quality.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center mb-6 z-10 shadow-lg shadow-purple-900/30">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
            <p className="text-gray-400">
              Our advanced AI analyzes your speech patterns, content, and delivery in real-time.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center mb-6 z-10 shadow-lg shadow-purple-900/30">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Get Feedback</h3>
            <p className="text-gray-400">
              Receive detailed insights and actionable suggestions to improve your performance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-900/20 rounded-full border border-purple-500/20 text-purple-400 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Join thousands of satisfied professionals who use Preppify</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Preppify transformed my interview preparation. I landed my dream job after just two weeks of practice!",
              name: "Sarah Johnson",
              title: "Software Engineer",
            },
            {
              quote:
                "The real-time feedback helped me refine my sales pitch. My conversion rates have increased by 30%.",
              name: "Michael Chen",
              title: "Sales Director",
            },
            {
              quote:
                "As someone who struggles with public speaking, Preppify has been a game-changer for my confidence.",
              name: "Emma Rodriguez",
              title: "Marketing Manager",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 hover:border-gray-700 transition-all duration-300"
            >
              <div className="mb-6 text-purple-400">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.1333 4.8 12.6667 5.73333 11.3333C6.66667 10 7.86667 9.33333 9.33333 9.33333L10.6667 12C9.86667 12.2667 9.2 12.7333 8.66667 13.4C8.13333 14.0667 7.86667 14.8667 7.86667 15.8C7.86667 16.0667 7.93333 16.2667 8.06667 16.4C8.2 16.5333 8.33333 16.6 8.46667 16.6C8.73333 16.6 9.06667 16.4667 9.46667 16.2C9.86667 15.9333 10.2667 15.8 10.6667 15.8C11.4667 15.8 12.1333 16.0667 12.6667 16.6C13.2 17.1333 13.4667 17.8 13.4667 18.6C13.4667 19.4 13.2 20.0667 12.6667 20.6C12.1333 21.1333 11.4667 21.4 10.6667 21.4C10.2667 21.3333 9.86667 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14.1333 16.8 12.6667 17.7333 11.3333C18.6667 10 19.8667 9.33333 21.3333 9.33333L22.6667 12C21.8667 12.2667 21.2 12.7333 20.6667 13.4C20.1333 14.0667 19.8667 14.8667 19.8667 15.8C19.8667 16.0667 19.9333 16.2667 20.0667 16.4C20.2 16.5333 20.3333 16.6 20.4667 16.6C20.7333 16.6 21.0667 16.4667 21.4667 16.2C21.8667 15.9333 22.2667 15.8 22.6667 15.8C23.4667 15.8 24.1333 16.0667 24.6667 16.6C25.2 17.1333 25.4667 17.8 25.4667 18.6C25.4667 19.4 25.2 20.0667 24.6667 20.6C24.1333 21.1333 23.4667 21.4 22.6667 21.4C22.2667 21.3333 21.8667 21.3333 21.3333 21.3333Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center mr-3">
                  <span className="text-white font-medium text-sm">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-[0.03]"></div>

          <div className="relative p-10 md:p-16 text-center rounded-3xl border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your preparation?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who use Preppify to perfect their communication skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="hidden md:block">
            <Button
            style={{cursor : 'pointer'}}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg shadow-purple-900/20 h-14 px-8 rounded-xl"
              >
                Get Started Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-20 relative z-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">Preppify</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur opacity-70"></div>
                  <div className="relative bg-black rounded-full p-1">
                    <Mic className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
                <span className="text-lg font-bold">Preppify</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered voice assistant for better preparation.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Preppify. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://github.com/Abhay17pawar" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
