'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Workflow, Users, ShieldCheck, Landmark, Ship, FileText,
  FileSignature, Fingerprint, Bell, Settings, Search, ChevronRight, Plus,
  Download, Sparkles, Lock, CheckCircle2, AlertTriangle, Clock3, Building2,
  BadgeDollarSign, Gauge, ClipboardCheck, Rocket, Printer
} from 'lucide-react';
import { deals, workflows, deliverables, team } from '@/lib/mockData';

const nav = [
  ['Dashboard', LayoutDashboard], ['Workflow', Workflow], ['CRM', Users], ['Compliance', ShieldCheck],
  ['Banking', Landmark], ['Shipping', Ship], ['Documents', FileText], ['e-Signature', FileSignature],
  ['Users & Access', Fingerprint], ['Alerts', Bell], ['Settings', Settings]
] as const;

function money(n:number){ return '$' + (n/1000000).toFixed(0) + 'M'; }

function Card({children, className=''}:{children:React.ReactNode; className?:string}){
  return <div className={`bg-white border border-[#E8E2D8] rounded-[30px] shadow-sm ${className}`}>{children}</div>
}

function Button({children, dark=false}:{children:React.ReactNode; dark?:boolean}){
  return <button className={`rounded-2xl px-5 py-3 text-sm flex items-center gap-2 transition ${dark?'bg-[#2F3437] text-white':'bg-[#6FAFA2] text-white shadow-lg shadow-[#6FAFA2]/20'}`}>{children}</button>
}

export default function Home(){
  const [active,setActive]=useState('Dashboard');
  const exposure=useMemo(()=>deals.reduce((a,d)=>a+d.value,0),[]);
  const productivity=89;
  const commission=exposure*0.012;

  return <main className="min-h-screen bg-[#F7F4EE] text-[#2F3437] flex">
    <aside className="hidden xl:flex w-[310px] bg-white border-r border-[#E8E2D8] p-6 flex-col no-print">
      <div className="flex gap-4 items-center mb-8">
        <div className="h-14 w-14 rounded-3xl bg-[#6FAFA2] text-white flex items-center justify-center font-semibold text-2xl">P</div>
        <div><p className="text-xs tracking-[0.28em] uppercase text-[#7B8587]">Full SaaS</p><h1 className="text-lg font-light leading-tight">Private Commodity<br/>Operations Platform</h1></div>
      </div>
      <nav className="space-y-2 flex-1 overflow-y-auto">
        {nav.map(([label,Icon])=><button key={label} onClick={()=>setActive(label)} className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl text-sm ${active===label?'bg-[#6FAFA2] text-white shadow-lg':'hover:bg-[#F7F4EE] text-[#4D5658]'}`}>
          <span className="flex items-center gap-3"><Icon size={19}/>{label}</span><ChevronRight size={15}/>
        </button>)}
      </nav>
      <Card className="p-5 bg-[#2F3437] text-white border-0 mt-5"><div className="flex gap-2 items-center text-xs uppercase tracking-[0.22em] opacity-70"><Sparkles size={16}/>AI Copilot</div><p className="mt-4 text-sm opacity-90 leading-relaxed">Résumé automatique des deals, alertes de risque, génération de documents, affectation de tâches et reporting exécutif.</p></Card>
    </aside>

    <section className="flex-1 p-5 lg:p-8 overflow-y-auto">
      <Card className="p-7 mb-6">
        <div className="flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#6FAFA2] mb-3">Enterprise SaaS • CRM • Workflow • Documents • Access Control</p>
            <h2 className="text-4xl lg:text-6xl font-extralight leading-tight">Commodity Operations OS<br/>ultra digital & intuitif</h2>
            <p className="mt-5 max-w-4xl text-[#667173] leading-relaxed">Plateforme SaaS connectée pour salariés : deals, KYC/KYB, compliance, banking, shipping, documents PDF, signatures, audit trail, livrables clients et reporting management dans un seul cockpit.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 min-w-[350px]">
            <div className="rounded-3xl p-5 bg-[#6FAFA2] text-white"><p className="text-xs uppercase tracking-[0.22em] opacity-75">Productivity Gain</p><div className="text-5xl font-light mt-4">{productivity}%</div><p className="text-sm opacity-90 mt-2">objectif workflow automation</p></div>
            <div className="rounded-3xl p-5 bg-[#EFEAE2]"><p className="text-xs uppercase tracking-[0.22em] text-[#6E7779]">Live Mode</p><div className="text-3xl font-light mt-4">Deployable</div><p className="text-sm text-[#6E7779] mt-2">Vercel + Supabase ready</p></div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5 mb-6">
        {[['Pipeline Exposure',money(exposure),Building2],['Projected Commission',money(commission),BadgeDollarSign],['Active Deals',String(deals.length),ClipboardCheck],['Team Productivity','89%',Gauge]].map(([label,value,Icon]:any)=><motion.div whileHover={{y:-4}} key={label}><Card className="p-6"><div className="flex justify-between"><p className="text-xs uppercase tracking-[0.22em] text-[#7B8587]">{label}</p><Icon className="text-[#6FAFA2]" size={22}/></div><div className="text-4xl font-light text-[#6FAFA2] mt-5">{value}</div></Card></motion.div>)}
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mb-6">
        <Card className="p-7 2xl:col-span-2">
          <div className="flex justify-between items-center mb-6"><div><h3 className="text-3xl font-extralight">Deal Workflow Engine</h3><p className="text-[#6E7779] mt-1">Orchestration complète, tâches, statuts, automatisations et livrables.</p></div><Button><Plus size={16}/>New Workflow</Button></div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((w,i)=><motion.div whileHover={{scale:1.02}} key={w.step} className="rounded-3xl bg-[#FCFBF8] border border-[#ECE6DD] p-5"><p className="text-xs uppercase tracking-[0.22em] text-[#B89B72]">Step {i+1}</p><h4 className="mt-3 font-medium">{w.step}</h4><p className="text-sm text-[#697477] mt-2">{w.automation}</p><p className="mt-4 text-xs text-[#6FAFA2] uppercase tracking-[0.18em]">Gain {w.saved}</p></motion.div>)}
          </div>
        </Card>
        <Card className="p-7">
          <h3 className="text-3xl font-extralight mb-2">Employee Hub</h3><p className="text-[#6E7779] mb-6">Accès utilisateur, rôles et performance.</p>
          <div className="space-y-4">{team.map(t=><div key={t.name} className="rounded-3xl bg-[#FCFBF8] border border-[#ECE6DD] p-4"><div className="flex justify-between"><div><p className="font-medium">{t.name}</p><p className="text-sm text-[#6E7779]">{t.role} • {t.access}</p></div><span className="text-[#6FAFA2] font-medium">{t.productivity}%</span></div><div className="h-2 bg-[#EFEAE2] rounded-full mt-3"><div className="h-2 bg-[#6FAFA2] rounded-full" style={{width:t.productivity+'%'}}/></div></div>)}</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 mb-6">
        <Card className="p-7 overflow-hidden">
          <div className="flex justify-between items-center mb-6"><div><h3 className="text-3xl font-extralight">CRM Transactions</h3><p className="text-[#6E7779] mt-1">Pipeline deal-room par transaction.</p></div><Search className="text-[#6FAFA2]"/></div>
          <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr className="text-xs uppercase tracking-[0.2em] text-[#7B8587] border-b border-[#ECE6DD]"><th className="pb-4">Deal</th><th className="pb-4">Commodity</th><th className="pb-4">Status</th><th className="pb-4">Next</th><th className="pb-4">Value</th></tr></thead><tbody>{deals.map(d=><tr key={d.id} className="border-b border-[#F1ECE4]"><td className="py-5 font-medium">{d.id}</td><td>{d.commodity}</td><td><span className="px-3 py-1 rounded-full bg-[#6FAFA2]/10 text-[#6FAFA2] text-xs">{d.status}</span></td><td>{d.next}</td><td className="font-medium">{money(d.value)}</td></tr>)}</tbody></table></div>
        </Card>
        <Card className="p-7">
          <div className="flex justify-between items-center mb-6"><div><h3 className="text-3xl font-extralight">Document & PDF Studio</h3><p className="text-[#6E7779] mt-1">Livrables prêts pour clients, banques et direction.</p></div><Button dark><Printer size={16}/>Print/PDF</Button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{deliverables.map(x=><div key={x} className="rounded-3xl bg-[#FCFBF8] border border-[#ECE6DD] p-5"><div className="flex justify-between"><FileText className="text-[#6FAFA2]"/><Clock3 className="text-[#B89B72]" size={18}/></div><h4 className="mt-5 font-medium">{x}</h4><button onClick={()=>window.print()} className="mt-4 text-xs uppercase tracking-[0.2em] text-[#6FAFA2] flex gap-2 items-center"><Download size={14}/>Generate PDF</button></div>)}</div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-r from-[#6FAFA2] to-[#8FB7AA] text-white border-0 mb-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8"><div><p className="uppercase tracking-[0.28em] text-xs opacity-75">Connected SaaS Synergy</p><h3 className="text-4xl font-extralight mt-4">Tout le desk dans un seul cockpit.</h3><p className="mt-5 max-w-3xl text-white/90 leading-relaxed">CRM, tâches, compliance, documents PDF, accès salariés, reporting, deals, banking, shipping et audit trail sont pensés pour réduire les doubles saisies, supprimer les fichiers dispersés et accélérer l’exécution jusqu’à 89%.</p></div><div className="flex flex-wrap gap-3 items-start"><Button dark><Rocket size={16}/>Deploy Online</Button><Button><Lock size={16}/>Invite Team</Button></div></div>
      </Card>

      <div className="print-doc hidden print:block"><h1>Executive Transaction Report</h1><p>Private Commodity Operations Platform</p><hr/><h2>Pipeline Summary</h2><p>Total exposure: {money(exposure)}</p><p>Projected productivity gain: 89%</p><h2>Active Deals</h2>{deals.map(d=><p key={d.id}>{d.id} — {d.commodity} — {d.status} — {money(d.value)}</p>)}</div>
    </section>
  </main>
}
