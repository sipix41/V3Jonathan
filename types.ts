import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}