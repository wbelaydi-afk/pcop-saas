export const roles = ['CEO', 'Operations Manager', 'Compliance Officer', 'Banking Officer', 'Broker', 'Legal', 'Viewer'];

export const team = [
  { name: 'Walid Belaydi', role: 'Managing Director', access: 'Admin', productivity: 96 },
  { name: 'Sarah Operations', role: 'Operations Manager', access: 'Manager', productivity: 91 },
  { name: 'Adam Compliance', role: 'Compliance Officer', access: 'Compliance', productivity: 88 },
  { name: 'Nadia Banking', role: 'Banking Officer', access: 'Banking', productivity: 86 }
];

export const deals = [
  { id:'PCOP-2026-001', commodity:'Gold Bullion', buyer:'Aurora Capital DMCC', seller:'Helios Refinery SG', value:240000000, status:'Compliance Cleared', risk:'Low', owner:'Sarah Operations', next:'Draft SPA', progress:72 },
  { id:'PCOP-2026-002', commodity:'EN590 10PPM', buyer:'Atlantic Energy FZE', seller:'North Sea Petrochem', value:520000000, status:'Bank Instrument Pending', risk:'Medium', owner:'Nadia Banking', next:'MT799 review', progress:61 },
  { id:'PCOP-2026-003', commodity:'Copper Cathodes', buyer:'Zenith Metals BV', seller:'Andes Mining Export', value:188000000, status:'Shipment Active', risk:'Low', owner:'Sarah Operations', next:'SGS confirmation', progress:84 },
  { id:'PCOP-2026-004', commodity:'ICUMSA 45', buyer:'Euro Commodities BV', seller:'Brazil Agro Export', value:76000000, status:'KYC Pending', risk:'High', owner:'Adam Compliance', next:'UBO verification', progress:32 }
];

export const workflows = [
  { step:'Lead Intake', automation:'Auto-create deal room', saved:'2h/deal' },
  { step:'NDA & NCNDA', automation:'Generate + route signature', saved:'3h/deal' },
  { step:'KYC/KYB', automation:'Checklist + risk score', saved:'6h/deal' },
  { step:'ICPO/FCO', automation:'Document validation', saved:'4h/deal' },
  { step:'SPA Draft', automation:'Clause-based builder', saved:'8h/deal' },
  { step:'Banking', automation:'MT799/LC tracker', saved:'5h/deal' },
  { step:'Shipping', automation:'Milestone tracking', saved:'4h/deal' },
  { step:'Commission', automation:'Split matrix + trigger', saved:'3h/deal' },
  { step:'Archive', automation:'Auto-index + audit log', saved:'2h/deal' }
];

export const deliverables = [
  'Executive Transaction Report', 'NCNDA', 'IMFPA', 'SPA Draft', 'ICPO', 'FCO', 'KYC/KYB File', 'AML Risk Memo', 'Banking Instruction Pack', 'Shipping Status Report', 'Commission Settlement Sheet', 'Board Brief PDF'
];
