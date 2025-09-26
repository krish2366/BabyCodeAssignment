import React, { useState } from "react";
import {
  BookOpen,
  Mic,
  Brain,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {

  const features = [
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: "Speaking Practice",
      description:
        "Interactive speaking sessions with AI-powered feedback and real-time pronunciation analysis.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Mock Tests",
      description:
        "Full-length practice tests that simulate the actual IELTS exam environment perfectly.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI Band Score",
      description:
        "Advanced AI technology provides instant band score predictions and detailed performance insights.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Guidance",
      description:
        "Learn from certified IELTS instructors with years of experience and proven track records.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      score: "Band 8.5",
      text: "The AI feedback system helped me improve my speaking skills dramatically. I achieved my target score in just 2 months!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Yo Yo Hassan",
      score: "Band 8.0",
      text: "Excellent mock tests that perfectly match the real exam. The detailed analysis helped me focus on my weak areas.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Maria Rodriguez",
      score: "Band 9.0",
      text: "Outstanding preparation platform! The personalized study plan and expert guidance made all the difference.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Achieve Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    Dream IELTS{" "}
                  </span>
                  Score
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Master all four IELTS skills with our AI-powered platform,
                  expert instructors, and personalized learning paths designed
                  for your success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Free Trial
                </button>
                <a
                  href="https://youtu.be/dQw4w9WgXcQ?si=fKT23aLEJVIzFM3_"
                  target="_blank"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Watch Demo
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15K+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8.2</div>
                  <div className="text-gray-600">Avg. Band Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Students studying"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-80 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose F-IELTS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most comprehensive IELTS preparation with
              cutting-edge technology and proven methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Feature feature={feature} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our students achieved their dream IELTS scores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial testimonial={testimonial} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
