// components/Navbar.tsx
import Link from 'next/link';
import Skills from '@/pages/Skills';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
const Navbar = () => {
  return (
    <nav className="fixed  h-20 top-0 z-30 bg-gray-900 text-white pt-7" 
    style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}
    >
      <div className="flex justify-center items-center space-x-8 ">
        <Link href={'/About'}> 
        <p className="text_pages ">About</p>
        </Link>
        <Link href={'/Skills'}>
        <p className="text_pages">Skills</p>
        </Link>
        <Link href={'/Projects'}>
        <p className="text_pages">Projects</p>
        </Link>
        <Link href={'/Contact'}>
        <p className="text_pages">Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
