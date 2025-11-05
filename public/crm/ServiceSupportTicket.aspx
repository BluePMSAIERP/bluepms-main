<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Service &amp; Support Ticketing</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Service &amp; Support Ticketing</h1>
        <p>Deliver proactive customer care with SLA intelligence, knowledge base integration, and escalation workflows that outperform legacy support desks.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="CustomerPortalSelfService.aspx">View Customer Portal</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Ticket Details</h2>
            <div class="form-grid">
                <div>
                    <label for="TicketCustomer">Customer ID</label>
                    <input id="TicketCustomer" type="number" placeholder="1289" />
                </div>
                <div>
                    <label for="TicketID">Ticket ID</label>
                    <input id="TicketID" type="text" placeholder="TCK-2024-556" />
                </div>
                <div>
                    <label for="IssueType">Issue Type</label>
                    <select id="IssueType">
                        <option>Technical</option>
                        <option>Billing</option>
                        <option>Training</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label for="Priority">Priority</label>
                    <select id="Priority">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                    </select>
                </div>
                <div>
                    <label for="Status">Status</label>
                    <select id="Status">
                        <option>Open</option>
                        <option>Assigned</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                    </select>
                </div>
            </div>
            <label for="Description">Description</label>
            <textarea id="Description" placeholder="Describe the issue with steps, impact, environment..."></textarea>
            <div class="button-row">
                <button type="button">Attach File</button>
                <button type="button">Search Knowledge Base</button>
                <button type="button">Escalate</button>
                <button type="button">Save Ticket</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">SLA &amp; Timeline</h2>
            <div class="grid">
                <div class="metric">
                    <span>02:14</span>
                    Time Remaining to First Response
                </div>
                <div class="metric">
                    <span>05:45</span>
                    Time Remaining to Resolution
                </div>
                <div class="metric">
                    <span>97%</span>
                    SLA Compliance (30 days)
                </div>
            </div>
            <div class="timeline">
                <div class="timeline-entry">
                    <strong>2024-06-03 10:45</strong>
                    <p>Ticket created via chat with auto-triage routing to Tier 2.</p>
                </div>
                <div class="timeline-entry">
                    <strong>2024-06-03 11:10</strong>
                    <p>Agent added resolution notes and linked knowledge article KB-5521.</p>
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Customer Satisfaction</h2>
            <div class="grid">
                <div class="card">
                    <h2>Post-resolution Survey</h2>
                    <p>Net promoter: 74, CSAT: 4.7/5. Automated follow-up triggered.</p>
                </div>
                <div class="card">
                    <h2>Breach Alerts</h2>
                    <p>No breaches in the last 90 days. Alerts configured for push + SMS.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Escalation policies sync to OpsGenie and PagerDuty for critical incidents.</div>
    </footer>
</div>
</body>
</html>
