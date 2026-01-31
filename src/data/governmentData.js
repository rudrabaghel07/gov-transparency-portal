export const governmentData = {
  departments: [
    { id: 1, name: 'Ministry of Education', budget: 7300800000000, spent: 7000000000000, year: 2024, category: 'Social Services', priority: 'High', employees: 290000, projects: 120 },
    { id: 2, name: 'Ministry of Health & Family Welfare', budget: 8190000000000, spent: 8000000000000, year: 2024, category: 'Social Services', priority: 'Critical', employees: 410000, projects: 150 },
    { id: 3, name: 'Ministry of Defence', budget: 68121000000000, spent: 65000000000000, year: 2024, category: 'Security', priority: 'Critical', employees: 150000, projects: 80 },
    { id: 4, name: 'Ministry of Road Transport & Highways', budget: 28733300000000, spent: 25000000000000, year: 2024, category: 'Development', priority: 'High', employees: 95000, projects: 180 },
    { id: 5, name: 'Ministry of Railways', budget: 25544500000000, spent: 23000000000000, year: 2024, category: 'Transport', priority: 'High', employees: 120000, projects: 210 },
    { id: 6, name: 'Ministry of Agriculture & Farmers Welfare', budget: 18875453000000, spent: 18000000000000, year: 2024, category: 'Economic', priority: 'High', employees: 70000, projects: 160 },
    { id: 7, name: 'Ministry of Power', budget: 9000000000000, spent: 8800000000000, year: 2024, category: 'Development', priority: 'Medium', employees: 50000, projects: 105 },
    { id: 8, name: 'Ministry of Environment, Forest & Climate Change', budget: 4000000000000, spent: 3800000000000, year: 2024, category: 'Environmental', priority: 'Medium', employees: 30000, projects: 130 },
    { id: 9, name: 'Ministry of Science & Technology', budget: 5600000000000, spent: 5200000000000, year: 2024, category: 'Research', priority: 'High', employees: 45000, projects: 140 },
    { id: 10, name: 'Ministry of Home Affairs', budget: 23321000000000, spent: 22000000000000, year: 2024, category: 'Security', priority: 'Critical', employees: 105000, projects: 75 },
    { id: 11, name: 'Ministry of Consumer Affairs, Food & Public Distribution', budget: 4570000000000, spent: 4500000000000, year: 2024, category: 'Social Services', priority: 'High', employees: 50000, projects: 110 },
    { id: 12, name: 'Ministry of Urban Development', budget: 15000000000000, spent: 14000000000000, year: 2024, category: 'Development', priority: 'Medium', employees: 64000, projects: 175 }
  ],

  yearlyTrends: [
    { year: 2020, totalBudget: 900000000000000, totalSpent: 880000000000000, surplus: 20000000000000 },
    { year: 2021, totalBudget: 950000000000000, totalSpent: 930000000000000, surplus: 20000000000000 },
    { year: 2022, totalBudget: 1050000000000000, totalSpent: 1020000000000000, surplus: 30000000000000 },
    { year: 2023, totalBudget: 1120000000000000, totalSpent: 1100000000000000, surplus: 20000000000000 },
    { year: 2024, totalBudget: 1268000000000000, totalSpent: 1180000000000000, surplus: 88000000000000 }
  ],

  projects: [
    { id: 1, name: 'National Highway Development Project', department: 'Ministry of Road Transport & Highways', budget: 2500000000000, spent: 1800000000000, status: 'In Progress', completion: 70, startDate: '2023-01', endDate: '2026-06' },
    { id: 2, name: 'Ayushman Bharat Healthcare Expansion', department: 'Ministry of Health & Family Welfare', budget: 940600000000, spent: 800000000000, status: 'In Progress', completion: 60, startDate: '2022-04', endDate: '2025-12' },
    { id: 3, name: 'Digital India Education Plan', department: 'Ministry of Education', budget: 600000000000, spent: 550000000000, status: 'In Progress', completion: 95, startDate: '2023-03', endDate: '2024-06' },
    { id: 4, name: 'Defence Modernisation Scheme', department: 'Ministry of Defence', budget: 2000000000000, spent: 1800000000000, status: 'In Progress', completion: 80, startDate: '2022-01', endDate: '2027-12' },
    { id: 5, name: 'Smart Railway Corridors', department: 'Ministry of Railways', budget: 1800000000000, spent: 1500000000000, status: 'In Progress', completion: 75, startDate: '2023-02', endDate: '2026-10' },
    { id: 6, name: 'PMGSY Rural Roads Expansion', department: 'Ministry of Rural Development', budget: 1200000000000, spent: 1000000000000, status: 'In Progress', completion: 67, startDate: '2023-01', endDate: '2025-09' },
    { id: 7, name: 'Clean India Water & Waste Management', department: 'Ministry of Environment, Forest & Climate Change', budget: 800000000000, spent: 650000000000, status: 'In Progress', completion: 62, startDate: '2023-01', endDate: '2026-12' },
    { id: 8, name: 'AI Research & Innovation Mission', department: 'Ministry of Science & Technology', budget: 900000000000, spent: 700000000000, status: 'In Progress', completion: 66, startDate: '2023-05', endDate: '2025-12' }
  ],

  transactions: [
    { id: 1, date: '2024-01-15', department: 'Ministry of Education', category: 'Equipment', amount: 125000000000, vendor: 'Gov Tech Solutions', description: 'School digital equipment procurement' },
    { id: 2, date: '2024-01-20', department: 'Ministry of Health & Family Welfare', category: 'Medical Supplies', amount: 234000000000, vendor: 'Med India Supplies', description: 'Health infrastructure & medicines' },
    { id: 3, date: '2024-01-25', department: 'Ministry of Road Transport & Highways', category: 'Construction', amount: 345000000000, vendor: 'BuildIndia Corp.', description: 'Road construction materials' },
    { id: 4, date: '2024-02-05', department: 'Ministry of Defence', category: 'Equipment', amount: 456000000000, vendor: 'Defence Systems India', description: 'Defence procurement' }
  ],

  revenue: [
    { source: 'Income Tax', amount: 487000000000000, percentage: 38.4, year: 2024 },
    { source: 'Corporate Tax', amount: 329000000000000, percentage: 25.9, year: 2024 },
    { source: 'Goods & Services Tax', amount: 241000000000000, percentage: 19.0, year: 2024 },
    { source: 'Customs Duty', amount: 114000000000000, percentage: 9.0, year: 2024 },
    { source: 'Excise Duties', amount: 63000000000000, percentage: 5.0, year: 2024 },
    { source: 'Other Receipts', amount: 34000000000000, percentage: 2.7, year: 2024 }
  ]
};
