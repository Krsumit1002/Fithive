"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "10-Minute Morning Workouts",
    thumbnail:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Nutrition Myths Busted",
    thumbnail:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Home Workout Essentials",
    thumbnail:
      "https://images.pexels.com/photos/8033017/pexels-photo-8033017.jpeg",
  },
  {
    title: "Cardio vs Strength Training",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Meal Prep for Busy People",
    thumbnail:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Yoga for Stress Relief",
    thumbnail:
      "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "HIIT: Burn Fat Faster",
    thumbnail:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Fitness Mistakes to Avoid",
    thumbnail:
      "https://images.pexels.com/photos/33768808/pexels-photo-33768808.jpeg",
  },
  {
    title: "Best Post-Workout Foods",
    thumbnail:
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "The Science of Sleep & Fitness",
    thumbnail:
      "https://images.pexels.com/photos/4498188/pexels-photo-4498188.jpeg",
  },
  {
    title: "Beginner’s Guide to Strength Training",
    thumbnail:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Staying Motivated on Your Fitness Journey",
    thumbnail:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Hydration & Performance",
    thumbnail:
      "https://images.pexels.com/photos/5327555/pexels-photo-5327555.jpeg",
  },
  {
    title: "Building Core Strength",
    thumbnail:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Fitness on a Budget",
    thumbnail:
      "https://images.unsplash.com/photo-1526401485004-2aa5b88d764a?w=600&auto=format&fit=crop&q=80",
  },
];
