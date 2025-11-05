<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Lead Management Studio</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Lead Management Studio</h1>
        <p>Capture, qualify, and convert leads with adaptive scoring and orchestrated nurture programs surpassing traditional CRM playbooks.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="MarketingAutomation.aspx">Launch Nurture Automation</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Lead Intake</h2>
            <div class="form-grid">
                <div>
                    <label for="LeadName">Lead Name</label>
                    <input id="LeadName" type="text" placeholder="Acme CTO" />
                </div>
                <div>
                    <label for="LeadEmail">Email</label>
                    <input id="LeadEmail" type="email" placeholder="cto@acme.com" />
                </div>
                <div>
                    <label for="LeadPhone">Phone</label>
                    <input id="LeadPhone" type="tel" placeholder="(555) 777-2048" />
                </div>
                <div>
                    <label for="LeadSource">Lead Source</label>
                    <select id="LeadSource">
                        <option>Website</option>
                        <option>Event</option>
                        <option>Referral</option>
                        <option>Partner</option>
                    </select>
                </div>
                <div>
                    <label for="LeadCompanyID">Company ID</label>
                    <input id="LeadCompanyID" type="text" placeholder="COMP-1001" />
                </div>
                <div>
                    <label for="LeadGroupCompanyID">Group Company ID</label>
                    <input id="LeadGroupCompanyID" type="text" placeholder="GC-45" />
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Qualification &amp; Scoring</h2>
            <div class="form-grid">
                <div>
                    <label for="LeadStatus">Status</label>
                    <select id="LeadStatus">
                        <option>New</option>
                        <option>Working</option>
                        <option>Qualified</option>
                        <option>Disqualified</option>
                    </select>
                </div>
                <div>
                    <label for="LeadScore">Lead Score (0-100)</label>
                    <input id="LeadScore" type="number" min="0" max="100" value="82" />
                </div>
                <div>
                    <label for="QualificationStage">Qualification Stage</label>
                    <select id="QualificationStage">
                        <option>Discovery</option>
                        <option>Needs Analysis</option>
                        <option>Proposal</option>
                        <option>Negotiation</option>
                    </select>
                </div>
                <div>
                    <label for="AIInsights">AI Insights</label>
                    <textarea id="AIInsights" placeholder="AI recommended to send ROI case study and schedule technical validation"></textarea>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Recalculate Score</button>
                <button type="button">Enroll in Nurture</button>
                <button type="button">Convert to Customer</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Conversion Analytics</h2>
            <div class="grid">
                <div class="metric">
                    <span>32%</span>
                    Conversion Rate (Last 30 days)
                </div>
                <div class="metric">
                    <span>8 days</span>
                    Avg. Time to Qualification
                </div>
                <div class="metric">
                    <span>+18%</span>
                    AI Predicted Lift with Personalization
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Seamless conversion flows push enriched records into Customer Master instantly.</div>
    </footer>
</div>
</body>
</html>
