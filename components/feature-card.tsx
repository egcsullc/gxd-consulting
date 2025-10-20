import { ReactNode } from 'react'
export default function FeatureCard({ icon, title, desc, cta }: { icon: ReactNode, title: string, desc: string, cta?: string }){
  return (
    <div className="card h-full p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl border">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="opacity-80 text-sm">{desc}</p>
      {cta && <div className="mt-4"><a className="btn-outline" href="#">{cta}</a></div>}
    </div>
  )
}
