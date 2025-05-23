import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { Logo } from '../logo';
import { NavigationMenu } from '../navigationMenu';


const container = cva(
  'flex justify-between lg:justify-around items-center px-4 lg:px-8 py-6 z-40',
);

export function Navbar() {

      return (
    <div className={container()}>
      <Link href="/dashboard">
        
        <Logo/>
      </Link>
      <NavigationMenu/>
    </div>
  );

}