<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Customer Portal Self-Service</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Customer Portal Self-Service</h1>
        <p>Empower customers to manage their profile, track tickets, and access knowledge resources through a secure, branded experience.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="ServiceSupportTicket.aspx">Support Console</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">SSO Login</h2>
            <div class="form-grid">
                <div>
                    <label for="SSOProvider">SSO Provider</label>
                    <select id="SSOProvider">
                        <option>Azure AD</option>
                        <option>Okta</option>
                        <option>Google</option>
                        <option>Custom SAML</option>
                    </select>
                </div>
                <div>
                    <label for="PortalCompanyID">Company ID</label>
                    <input id="PortalCompanyID" type="text" placeholder="COMP-1001" />
                </div>
                <div>
                    <label for="PortalGroupCompanyID">Group Company ID</label>
                    <input id="PortalGroupCompanyID" type="text" placeholder="GC-45" />
                </div>
            </div>
            <div class="button-row">
                <button type="button">Test SSO</button>
                <button type="button">Configure Branding</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Profile Self-Update</h2>
            <div class="form-grid">
                <div>
                    <label for="PortalAddress">Address</label>
                    <input id="PortalAddress" type="text" placeholder="123 Innovation Way" />
                </div>
                <div>
                    <label for="PortalPhone">Phone</label>
                    <input id="PortalPhone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                    <label for="PortalMobile">Mobile</label>
                    <input id="PortalMobile" type="tel" placeholder="(555) 555-0101" />
                </div>
            </div>
            <div class="button-row">
                <button type="button">Save Update</button>
                <button type="button">View Change History</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Tickets &amp; Knowledge Base</h2>
            <div class="grid">
                <div class="card">
                    <h2>Submit Ticket</h2>
                    <p>Guided triage collects priority, channel, and attachments for faster resolution.</p>
                </div>
                <div class="card">
                    <h2>Active Tickets</h2>
                    <p>Timeline view with SLA countdown and agent updates.</p>
                </div>
                <div class="card">
                    <h2>Knowledge Base</h2>
                    <p>Search articles, community posts, and AI generated answers in one place.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Portal experiences share design tokens with the core CRM for brand consistency.</div>
    </footer>
</div>
</body>
</html>
