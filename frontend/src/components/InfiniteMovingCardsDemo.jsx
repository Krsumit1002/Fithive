"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[20rem] gap-4 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "FitHive has completely changed the way I track my workouts. The dashboard is so easy to use, and I actually look forward to logging my progress every day!",
      name: "Rohit Sharma",
      title: "Software Engineer",
    },
    {
      quote:
        "I love the personalized fitness insights! The tips are practical, and I’ve already started seeing better results in just a few weeks.",
      name: "Ananya Verma",
      title: "Fitness Enthusiast",
    },
    {
      quote:
        "Finally, an app that keeps me motivated. The reminders and progress tracker are exactly what I needed to stay consistent.",
      name: "Aditya Kumar",
      title: "College Student",
    },
    {
      quote:
        "The nutrition section is amazing. It gives me realistic suggestions that I can actually follow in my busy schedule.",
      name: "Sneha Patel",
      title: "Marketing Manager",
    },
    {
      quote:
        "FitHive makes fitness fun! I like how everything feels simple yet powerful. Highly recommend it to anyone serious about health.",
      name: "Vikas Mehra",
      title: "Entrepreneur",
    },
  ];
  
