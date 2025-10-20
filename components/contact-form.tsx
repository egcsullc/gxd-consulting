'use client'
import { useState } from 'react'
export default function ContactForm(){
  const [status, setStatus] = useState<'idle'|'sent'>('idle')
  const onSubmit = (e: React.FormEvent)=>{ e.preventDefault(); setStatus('sent') }
  return (
    <form onSubmit={onSubmit} className="card p-6 max-w-2xl">
      <h3 className="text-lg font-semibold">Start a conversation</h3>
      <p className="opacity-70 text-sm mb-4">We respond within one business day.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="border rounded-xl px-3 py-2" placeholder="Full name" required />
        <input className="border rounded-xl px-3 py-2" placeholder="Work email" type="email" required />
        <input className="border rounded-xl px-3 py-2" placeholder="Company" />
        <input className="border rounded-xl px-3 py-2" placeholder="Role" />
      </div>
      <textarea className="border rounded-xl px-3 py-2 mt-4 w-full" rows={6} placeholder="How can GXD Consulting help?"></textarea>
      <div className="flex items-center gap-3 mt-4">
        <button className="btn" type="submit">Request consult</button>
        <p className="text-xs opacity-70">By submitting, you agree to our Terms and Privacy Policy.</p>
      </div>
      {status==='sent' && <p className="mt-3 text-sm">Thanks — we’ll be in touch.</p>}
    </form>
  )
}
