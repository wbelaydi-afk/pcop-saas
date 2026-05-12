export const deals = [
  { id: 'PCOP-2026-044', commodity: 'Gold Bullion', buyer: 'Aurora Capital DMCC', seller: 'Helios Refinery SG', status: 'Compliance Cleared', value: '$240M', risk: 'Low' },
  { id: 'PCOP-2026-051', commodity: 'EN590 10PPM', buyer: 'Atlantic Energy FZE', seller: 'North Sea Petrochem', status: 'Bank Instrument Pending', value: '$520M', risk: 'Medium' },
  { id: 'PCOP-2026-063', commodity: 'Copper Cathodes', buyer: 'Zenith Metals BV', seller: 'Andes Mining Export', status: 'Shipment Active', value: '$188M', risk: 'Low' }
];

export const workflowSteps = [
  'Lead Qualification', 'KYC/KYB Verification', 'ICPO Validation', 'FCO Approval', 'SPA Drafting', 'Compliance Screening', 'SWIFT Processing', 'POP Verification', 'Shipment Monitoring', 'Commission Settlement', 'Audit & Archive'
];

export const users = [
  { name: 'Managing Director', role: 'Admin', access: 'Full Platform' },
  { name: 'Compliance Officer', role: 'Compliance', access: 'KYC / AML / Audit' },
  { name: 'Banking Coordinator', role: 'Banking', access: 'SWIFT / LC / SBLC' },
  { name: 'Broker', role: 'Origination', access: 'CRM / Deals' }
];
