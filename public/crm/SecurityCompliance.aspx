<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Security &amp; Compliance Console</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Security &amp; Compliance Console</h1>
        <p>Define roles, manage consent flags, monitor encryption policies, and produce compliance-ready audit reports.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="IntegrationManagement.aspx">Review Integrations</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Role-Based Access</h2>
            <div class="form-grid">
                <div>
                    <label for="RoleName">Role Name</label>
                    <input id="RoleName" type="text" placeholder="Global Admin" />
                </div>
                <div>
                    <label for="Description">Description</label>
                    <input id="Description" type="text" placeholder="Full access to CRM module" />
                </div>
                <div>
                    <label for="Scope">Scope</label>
                    <select id="Scope">
                        <option>Global</option>
                        <option>Regional</option>
                        <option>Departmental</option>
                    </select>
                </div>
            </div>
            <label for="Permissions">Permissions Matrix</label>
            <textarea id="Permissions" placeholder="CustomerProfile=Read/Write, Analytics=View, Security=Admin"></textarea>
            <div class="button-row">
                <button type="button">Add Role</button>
                <button type="button">Clone Role</button>
                <button type="button">Export Policy</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Consent Management</h2>
            <div class="form-grid">
                <div>
                    <label for="ConsentCustomerID">Customer ID</label>
                    <input id="ConsentCustomerID" type="number" placeholder="1289" />
                </div>
                <div>
                    <label for="EmailConsent">Email Consent</label>
                    <select id="EmailConsent">
                        <option>Granted</option>
                        <option>Withdrawn</option>
                    </select>
                </div>
                <div>
                    <label for="SMSConsent">SMS Consent</label>
                    <select id="SMSConsent">
                        <option>Granted</option>
                        <option>Withdrawn</option>
                    </select>
                </div>
                <div>
                    <label for="DataProcessing">Data Processing Consent</label>
                    <select id="DataProcessing">
                        <option>Granted</option>
                        <option>Withdrawn</option>
                    </select>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Save Consent</button>
                <button type="button">Generate Compliance Report</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Security Overview</h2>
            <div class="grid">
                <div class="metric">
                    <span>100%</span>
                    Encryption Coverage
                </div>
                <div class="metric">
                    <span>0</span>
                    Breach Alerts (30 days)
                </div>
                <div class="metric">
                    <span>24</span>
                    Audit Logs Reviewed Today
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Compliance modes include GDPR, CCPA, PDPA, and HIPAA with tailored controls.</div>
    </footer>
</div>
</body>
</html>
