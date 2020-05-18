export default {
  namespaced: true,
  state: {
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    },
    routes: [
      {
        path: "/",
        name: "Home",
        icon: 'mdi-home'
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: 'mdi-monitor-dashboard'
      },
      {
        name: "Organization",
        icon: 'mdi-office-building',
        childs: [
          {
            path: "/organization-structure",
            name: "Structure",
            icon: 'mdi-vector-polyline'
          },
          {
            path: "/company-policy",
            name: "Company Policy",
            icon: 'mdi-police-badge-outline'
          },
          {
            path: "/company-settings",
            name: "Company Settings",
            icon: 'mdi-ship-wheel'
          }
        ]
      },
      {
        name: "Master Data",
        icon: 'mdi-wall',
        childs: [
          {
            path: "/company",
            name: "Company",
            icon: 'mdi-briefcase-outline'
          },
          {
            path: "/hierarchy",
            name: "Hierarchy",
            icon: 'mdi-briefcase-account-outline'
          },
          {
            path: "/position",
            name: "Position",
            icon: 'mdi-bag-checked'
          },
          {
            path: "/job-title",
            name: "Job Title",
            icon: 'mdi-bag-personal'
          },
          {
            path: "/grade",
            name: "Grade",
            icon: 'mdi-crown-outline'
          },
          {
            path: "/event-holiday",
            name: "Event & Holiday",
            icon: 'mdi-calendar-heart'
          },
          {
            path: "/working-shift",
            name: "Working Shift",
            icon: 'mdi-calendar-clock'
          },
          {
            path: "/allowance",
            name: "Allowance",
            icon: 'mdi-card-account-details-star-outline'
          },
          {
            path: "/leave",
            name: "Leave",
            icon: 'mdi-calendar-export'
          },
          {
            path: "/business-trip",
            name: "Business Trip",
            icon: 'mdi-wallet-travel'
          },
          {
            path: "/payroll-component",
            name: "Payroll Component",
            icon: 'mdi-credit-card'
          },
          {
            path: "/employee",
            name: "Employee",
            icon: 'mdi-book-account-outline'
          }
        ]
      },
      {
        name: "Attendance",
        icon: 'mdi-map-marker-check-outline',
        childs: [
          {
            path: "/fingerscan-sync",
            name: "Fingerscan Sync",
            icon: 'mdi-fingerprint'
          },
          {
            path: "/attendance-override",
            name: "Attendance Override",
            icon: 'mdi-file-replace-outline'
          },
          {
            path: "/business-trip",
            name: "Business Trip",
            icon: 'mdi-truck-check-outline'
          },
          {
            path: "/leave",
            name: "Leave",
            icon: 'mdi-calendar-minus'
          },
          {
            path: "/permission",
            name: "Permission",
            icon: 'mdi-wheelchair-accessibility'
          }
        ]
      },
      {
        name: "Reimbursement",
        icon: 'mdi-file-refresh-outline',
        childs: [
          {
            path: "/medical-claim",
            name: "Medical Claim",
            icon: 'mdi-medical-bag'
          },
          {
            path: "/glasses-claim",
            name: "Glasses Claim",
            icon: 'mdi-glasses'
          },
          {
            path: "/operational-claim",
            name: "Operational Claim",
            icon: 'mdi-shield-refresh-outline'
          },
          {
            path: "/business-trip",
            name: "Business Trip",
            icon: 'mdi-truck-check-outline'
          }
        ]
      },
      {
        name: "Payroll",
        icon: 'mdi-account-cash-outline',
        childs: [
          {
            path: "/earning",
            name: "Earning",
            icon: 'mdi-cash-plus'
          },
          {
            path: "/deduction",
            name: "Deduction",
            icon: 'mdi-cash-minus'
          },
          {
            path: "/payroll-cockpit",
            name: "Payroll Cockpit",
            icon: 'mdi-cash-refund'
          },
          {
            path: "/severance",
            name: "Severance",
            icon: 'mdi-cash-remove'
          },
          {
            path: "/employee-tax-report",
            name: "Employee Tax Report",
            icon: 'mdi-bank-minus'
          }
        ]
      },
      {
        name: "Self Service",
        icon: 'mdi-lifebuoy',
        childs: [
          {
            path: "/attendance-record",
            name: "Attendance Record",
            icon: 'mdi-book-account-outline'
          },
          {
            path: "/business-trip",
            name: "Business Trip",
            icon: 'mdi-wallet-travel'
          },
          {
            path: "/leave",
            name: "Leave",
            icon: 'mdi-sign-direction'
          },
          {
            path: "/approval",
            name: "Approval",
            icon: 'mdi-clipboard-list-outline'
          },
          {
            path: "/payslip",
            name: "Payslip",
            icon: 'mdi-file-export-outline'
          }
        ]
      },
      {
        path: "/administrator",
        name: "Administrator",
        icon: 'mdi-face-agent'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
}