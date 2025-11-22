import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectArea {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  position: string;
}

export interface BoardMember {
  name: string;
  position: string;
  description?: string;
}
