<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Integration Management Hub</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Integration Management Hub</h1>
        <p>Configure, monitor, and audit every integration with secure credential storage, webhook automation, and sync analytics.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="SecurityCompliance.aspx">Review Security Policies</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Connector Configuration</h2>
            <div class="form-grid">
                <div>
                    <label for="IntegrationType">Integration Type</label>
                    <select id="IntegrationType">
                        <option>ERP</option>
                        <option>E-commerce</option>
                        <option>Social</option>
                        <option>Custom API</option>
                    </select>
                </div>
                <div>
                    <label for="Endpoint">Endpoint URL</label>
                    <input id="Endpoint" type="url" placeholder="https://api.partner.com/v1" />
                </div>
                <div>
                    <label for="Schedule">Sync Schedule</label>
                    <input id="Schedule" type="text" placeholder="Every 15 minutes" />
                </div>
                <div>
                    <label for="Authentication">Authentication</label>
                    <select id="Authentication">
                        <option>OAuth 2.0</option>
                        <option>API Key</option>
                        <option>Basic Auth</option>
                    </select>
                </div>
                <div>
                    <label for="CompanyID">Company ID</label>
                    <input id="CompanyID" type="text" placeholder="COMP-1001" />
                </div>
                <div>
                    <label for="GroupCompanyID">Group Company ID</label>
                    <input id="GroupCompanyID" type="text" placeholder="GC-45" />
                </div>
            </div>
            <label for="FieldMappings">Field Mappings</label>
            <textarea id="FieldMappings" placeholder="Email &lt;-&gt; ExternalEmail, LastContactDate &lt;-&gt; LastActivity"></textarea>
            <div class="button-row">
                <button type="button">Test Connection</button>
                <button type="button">Save Connector</button>
                <button type="button">Run Sync Now</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Sync Activity</h2>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Integration</th>
                            <th>Status</th>
                            <th>Records</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-06-02 08:30</td>
                            <td>ERP SAP</td>
                            <td><span class="status-pill success">Success</span></td>
                            <td>245</td>
                            <td>58s</td>
                        </tr>
                        <tr>
                            <td>2024-06-02 06:15</td>
                            <td>eCommerce Shopify</td>
                            <td><span class="status-pill warning">Partial</span></td>
                            <td>120</td>
                            <td>1m 12s</td>
                        </tr>
                        <tr>
                            <td>2024-06-01 21:45</td>
                            <td>Social LinkedIn</td>
                            <td><span class="status-pill danger">Failed</span></td>
                            <td>0</td>
                            <td>35s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Automation Rules</h2>
            <div class="checklist">
                <div class="checklist-item">When a customer unsubscribes, update external marketing platforms.</div>
                <div class="checklist-item">If opportunity stage changes to Closed Won, trigger ERP order creation webhook.</div>
                <div class="checklist-item">Post integration failure alerts to Slack + email.</div>
            </div>
        </section>
    </main>
    <footer>
        <div>Comprehensive audit logs and encryption policies maintain compliance with global regulations.</div>
    </footer>
</div>
</body>
</html>
