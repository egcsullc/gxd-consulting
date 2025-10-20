import FeatureCard from '@/components/feature-card'
import Stat from '@/components/stat'
import ContactForm from '@/components/contact-form'
import { Network, Lock, Cloud, Server, LineChart, Radar } from 'lucide-react'

export default function Page(){
  return (
    <>
      <section className="border-b">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Advisory, architecture, and hands-on hardening for modern enterprises.</h1>
            <p className="opacity-80 text-lg max-w-2xl">We design resilient networks, build zero trust roadmaps, and execute remediation aligned to NIST, ISO 27001, and SOC 2.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a className="btn" href="#contact">Free Gap Analysis</a>
              <a className="btn-outline" href="#insights">Methodology</a>
              <div className="text-sm opacity-80">⏱️ Typical kickoff in 5–10 days</div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Zero Trust','Network Segmentation','Cloud Security','Pen Testing','IR Readiness','GRC & Audits','SASE/SSE','OT/ICS'].map(t=> (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Snapshot: Current-State Risk</h3>
            <p className="opacity-70 text-sm mb-4">Executive view of top exposures by likelihood × impact.</p>
            <div className="grid grid-cols-3 gap-4">
              <Stat value="17" label="High Findings" />
              <Stat value="43" label="Medium" />
              <Stat value="12" label="Critical Paths" />
            </div>
            <div className="grid gap-2 text-sm mt-4">
              {['Flat VLANs','Legacy VPN','Overprivileged IAM','Shadow SaaS'].map(x => (
                <div key={x}>✔️ {x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-3">Services</h2>
          <p className="opacity-80 mb-8">Engagements structured for velocity and outcomes.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<Network className="w-5 h-5"/>} title="Network Architecture & Segmentation" desc="Layered controls, east-west visibility, and blast-radius reduction for hybrid estates." cta="Reference designs"/>
            <FeatureCard icon={<Cloud className="w-5 h-5"/>} title="Cloud Security" desc="Guardrails for AWS, Azure, and GCP. IAM least privilege, identity-aware networking, policy as code." cta="Cloud playbooks"/>
            <FeatureCard icon={<Lock className="w-5 h-5"/>} title="Zero Trust Roadmap" desc="Identity-first access, continuous verification, device posture, and micro-perimeters." cta="Roadmap"/>
            <FeatureCard icon={<Radar className="w-5 h-5"/>} title="Offensive Security" desc="Red team, adversary emulation, and focused penetration testing aligned to MITRE ATT&CK." cta="Scopes"/>
            <FeatureCard icon={<Server className="w-5 h-5"/>} title="IR Readiness & Tabletop" desc="Decision frameworks, comms trees, legal coordination, and runbooks tested with real scenarios." cta="Run a tabletop"/>
            <FeatureCard icon={<LineChart className="w-5 h-5"/>} title="Security Metrics & Board Reporting" desc="KPIs, KRIs, and exec dashboards that express risk clearly." cta="Sample dashboard"/>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 border-t">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <ContactForm />
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Stat value="10+ yrs" label="Average practitioner exp." />
              <Stat value=">95%" label="Client retention" />
              <Stat value="2–6 wks" label="Typical engagement" />
              <Stat value="24h" label="Proposal turnaround" />
            </div>
            <div className="space-y-2 text-sm opacity-90">
              <div>📞 +1 (555) 000-1212</div>
              <div>✉️ hello@gxd.consulting</div>
              <div>San Francisco, CA • Remote-first</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
