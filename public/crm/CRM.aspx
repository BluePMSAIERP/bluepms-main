<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>CRM Command Center</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <div class="wrapper">
        <header>
            <h1>CRM Experience Command Center</h1>
            <p>Navigate the complete suite of CRM and CX tooling. Every workspace below opens a dedicated Web Forms experience with modern UX, analytics infused insights, and automation controls.</p>
            <div class="hero-actions">
                <a class="btn" href="CustomerProfileManagement.aspx">Launch Customer Profile Manager</a>
                <a class="btn secondary" href="/">Return to Main Site</a>
            </div>
        </header>
        <main class="main">
            <section>
                <h2 class="section-title">Operational Workspaces</h2>
                <p class="section-subtitle">Purpose-built canvases streamline the full customer lifecycle from lead capture to billing. Cards display core capabilities and open the relevant form in a new tab.</p>
                <div class="grid">
                    <a class="card" href="CustomerProfileManagement.aspx">
                        <h2>Customer Profile Management</h2>
                        <p>Unified customer golden record with data stewardship, auditing, duplicate detection, and multilingual UI controls.</p>
                    </a>
                    <a class="card" href="ContactInteractionTracking.aspx">
                        <h2>Contact &amp; Interaction Tracking</h2>
                        <p>Chronological engagement timeline with AI powered sentiment, reminders, and omni-channel insights.</p>
                    </a>
                    <a class="card" href="LeadManagement.aspx">
                        <h2>Lead Management</h2>
                        <p>Score, qualify, nurture, and convert leads with adaptive scoring and automated email playbooks.</p>
                    </a>
                    <a class="card" href="OpportunitySalesPipeline.aspx">
                        <h2>Opportunity &amp; Pipeline</h2>
                        <p>Kanban visual pipeline, forecasting metrics, collaboration threads, and quote orchestration.</p>
                    </a>
                    <a class="card" href="MarketingAutomation.aspx">
                        <h2>Marketing Automation</h2>
                        <p>Targeted segment builder, personalization tokens, experiment orchestration, and campaign analytics.</p>
                    </a>
                    <a class="card" href="ServiceSupportTicket.aspx">
                        <h2>Service &amp; Support</h2>
                        <p>Omni-channel ticketing with SLA monitoring, knowledge integration, and escalation ladders.</p>
                    </a>
                    <a class="card" href="AnalyticsReportingDashboard.aspx">
                        <h2>Analytics &amp; Reporting</h2>
                        <p>Real-time KPIs, predictive trends, and interactive report builder with export capabilities.</p>
                    </a>
                    <a class="card" href="IntegrationManagement.aspx">
                        <h2>Integration Management</h2>
                        <p>Connect external systems, configure bi-directional sync, and monitor webhook execution.</p>
                    </a>
                    <a class="card" href="AIDrivenFeatures.aspx">
                        <h2>AI Driven Features</h2>
                        <p>Manage AI services from recommendation tuning to anomaly detection and conversational agents.</p>
                    </a>
                    <a class="card" href="MobileAccessibility.aspx">
                        <h2>Mobile &amp; Accessibility</h2>
                        <p>Responsive strategies, offline sync, voice input controls, and geo-intelligence preferences.</p>
                    </a>
                    <a class="card" href="SecurityCompliance.aspx">
                        <h2>Security &amp; Compliance</h2>
                        <p>Role governance, consent oversight, encryption policies, and compliance reporting.</p>
                    </a>
                    <a class="card" href="CustomizationWorkflowBuilder.aspx">
                        <h2>Customization &amp; Workflow</h2>
                        <p>Low-code field designer with automation orchestrator and API hooks.</p>
                    </a>
                    <a class="card" href="CollaborationTeamManagement.aspx">
                        <h2>Collaboration &amp; Team</h2>
                        <p>Assign tasks, coordinate via contextual chat, and measure team performance.</p>
                    </a>
                    <a class="card" href="CustomerPortalSelfService.aspx">
                        <h2>Customer Portal</h2>
                        <p>Empower customers with profile updates, ticket visibility, and knowledge resources.</p>
                    </a>
                    <a class="card" href="BillingSubscriptionManagement.aspx">
                        <h2>Billing &amp; Subscription</h2>
                        <p>Manage plans, invoicing, payment gateways, and renewal automation.</p>
                    </a>
                </div>
            </section>
        </main>
        <footer>
            <div>CRM Experience Management &bull; Powered by BluePMS</div>
            <div class="footer-links">
                <a href="CustomerProfileManagement.aspx">Profiles</a>
                <a href="AnalyticsReportingDashboard.aspx">Analytics</a>
                <a href="SecurityCompliance.aspx">Compliance</a>
                <a href="BillingSubscriptionManagement.aspx">Billing</a>
            </div>
        </footer>
    </div>
</body>
</html>
