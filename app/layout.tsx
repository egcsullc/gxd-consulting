import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'GXD Consulting — Cyber & Network Security',
  description: 'Advisory, architecture, and hands-on hardening for modern enterprises.',
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="sticky top-0 z-40 border-b backdrop-blur bg-white/70 dark:bg-neutral-950/70">
          <div className="container h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 grid place-items-center">⚔️</div>
              <span className="font-semibold">GXD Consulting</span>
              <span className="badge ml-2">Cyber & Network Security</span>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:underline">Services</a>
              <a href="#solutions" className="hover:underline">Solutions</a>
              <a href="#industries" className="hover:underline">Industries</a>
              <a href="#compliance" className="hover:underline">Compliance</a>
              <a href="#insights" className="hover:underline">Insights</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <a href="#contact" className="btn hidden sm:inline-flex">Request Assessment</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t py-10">
          <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2"><span>⚔️</span><span className="font-medium">GXD Consulting</span></div>
              <p className="text-sm opacity-70 mt-2">© {new Date().getFullYear()} GXD Consulting. All rights reserved.</p>
            </div>
            <div className="text-sm flex flex-wrap gap-4 opacity-80">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Responsible Disclosure</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
