import Link from "next/link";

const cards = [
  { title: "Customer Profile Management", href: "/crm/CustomerProfileManagement.aspx", description: "Golden record with audit trails, duplicate detection, and multilingual support." },
  { title: "Contact & Interaction Tracking", href: "/crm/ContactInteractionTracking.aspx", description: "Timeline logging, sentiment scoring, reminders, and attachment handling." },
  { title: "Lead Management", href: "/crm/LeadManagement.aspx", description: "AI scoring, nurture journeys, and conversion tooling." },
  { title: "Opportunity & Sales Pipeline", href: "/crm/OpportunitySalesPipeline.aspx", description: "Kanban stages, forecasting, and collaboration threads." },
  { title: "Marketing Automation", href: "/crm/MarketingAutomation.aspx", description: "Segment builder, personalization tokens, and analytics." },
  { title: "Service & Support", href: "/crm/ServiceSupportTicket.aspx", description: "Omni-channel ticketing with SLA monitoring and knowledge integration." },
  { title: "Analytics Dashboard", href: "/crm/AnalyticsReportingDashboard.aspx", description: "Real-time KPIs, predictive insights, and export controls." },
  { title: "Integration Management", href: "/crm/IntegrationManagement.aspx", description: "Connector setup, webhook automation, and sync telemetry." },
  { title: "AI Driven Features", href: "/crm/AIDrivenFeatures.aspx", description: "Configure recommendations, chatbots, and anomaly detection." },
  { title: "Mobile & Accessibility", href: "/crm/MobileAccessibility.aspx", description: "Responsive, offline, geolocation, and ADA settings." },
  { title: "Security & Compliance", href: "/crm/SecurityCompliance.aspx", description: "Role governance, consent tracking, and compliance reports." },
  { title: "Customization Builder", href: "/crm/CustomizationWorkflowBuilder.aspx", description: "No-code fields, workflow automation, and version history." },
  { title: "Collaboration & Team", href: "/crm/CollaborationTeamManagement.aspx", description: "Task assignments, threaded conversations, and performance metrics." },
  { title: "Customer Portal", href: "/crm/CustomerPortalSelfService.aspx", description: "Self-service profile, tickets, and knowledge access." },
  { title: "Billing & Subscription", href: "/crm/BillingSubscriptionManagement.aspx", description: "Plan management, invoicing, and payment tracking." },
];

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-slate-900 to-indigo-900" />
        <div className="relative px-6 py-24 lg:px-16">
          <div className="max-w-5xl">
            <p className="text-blue-200 uppercase tracking-[0.35em] text-xs font-semibold">CRM MODULE</p>
            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              Experience Management Command Center
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-3xl">
              Launch any customer lifecycle workspace with one click. The CRM Command Center delivers usability-focused Web Forms that integrate analytics, automation, and AI-driven insights.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/crm/CRM.aspx"
                className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:bg-blue-400"
                target="_blank"
              >
                Open Web Forms Command Center
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              target="_blank"
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 shadow-[0_35px_60px_-15px_rgba(15,23,42,0.55)] transition hover:translate-y-[-6px] hover:bg-white/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-0 transition group-hover:opacity-100" />
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{card.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                Launch Workspace
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
