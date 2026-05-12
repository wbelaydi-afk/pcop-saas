export const roles = ['Admin','Managing Director','Sales','Compliance','Operations','Finance','Viewer'];
export const deals = [
 {id:'PCOP-2026-044', commodity:'Gold Bullion', buyer:'Aurora Capital DMCC', seller:'Helios Refinery SG', value:240000000, status:'Compliance Cleared', risk:'Low', owner:'Sales Team', progress:72},
 {id:'PCOP-2026-051', commodity:'EN590 10PPM', buyer:'Atlantic Energy FZE', seller:'North Sea Petrochem', value:520000000, status:'Bank Instrument Pending', risk:'Medium', owner:'Banking Desk', progress:58},
 {id:'PCOP-2026-063', commodity:'Copper Cathodes', buyer:'Zenith Metals BV', seller:'Andes Mining Export', value:188000000, status:'Shipment Active', risk:'Low', owner:'Ops Desk', progress:83},
 {id:'PCOP-2026-079', commodity:'ICUMSA 45', buyer:'Euro Commodities BV', seller:'Brazil Agro Export', value:62000000, status:'SPA Draft', risk:'Medium', owner:'Legal Desk', progress:39}
];
export const workflow = ['Lead Qualification','NDA / NCNDA','KYC/KYB','Mandate Verification','ICPO Validation','FCO Issuance','SPA Drafting','Compliance Clearance','Bank Instrument','POP Verification','Shipment','Commission Release','Archive & Audit'];
export const employees = [
 {name:'Managing Director', email:'md@pcop.local', role:'Admin', access:'Full'},
 {name:'Compliance Officer', email:'compliance@pcop.local', role:'Compliance', access:'KYC, AML, Audit'},
 {name:'Operations Manager', email:'ops@pcop.local', role:'Operations', access:'Deals, Shipping'},
 {name:'Finance Controller', email:'finance@pcop.local', role:'Finance', access:'Commissions, Banking'},
 {name:'Sales Originator', email:'sales@pcop.local', role:'Sales', access:'CRM, Deals'}
];
export const docs = ['NCNDA','IMFPA','SPA','ICPO','FCO','KYC Report','AML Clearance','Executive Report'];
