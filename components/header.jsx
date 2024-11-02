import Image from 'next/image';
import Link from 'next/link';

import {
    ArrowUpRightIcon,
  } from '@heroicons/react/24/outline'

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <header role="banner">
            <a href="#main-content" class="skippy">Skip to Main Content</a>
            <nav id="main-nav" role="navigation">
                <span class="visually-hidden">Main Navigation</span>
            </nav>
        </header>
    );
}
