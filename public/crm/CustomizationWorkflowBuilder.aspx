<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Customization &amp; Workflow Builder</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Customization &amp; Workflow Builder</h1>
        <p>Create bespoke fields and automation sequences without code. Versioned changes and preview modes keep stakeholders confident.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="AIDrivenFeatures.aspx">Enhance with AI</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Custom Field Designer</h2>
            <div class="form-grid">
                <div>
                    <label for="FieldName">Field Name</label>
                    <input id="FieldName" type="text" placeholder="OnboardingScore" />
                </div>
                <div>
                    <label for="FieldType">Field Type</label>
                    <select id="FieldType">
                        <option>Text</option>
                        <option>Number</option>
                        <option>Date</option>
                        <option>Dropdown</option>
                        <option>Checkbox</option>
                    </select>
                </div>
                <div>
                    <label for="FieldTarget">Target Entity</label>
                    <select id="FieldTarget">
                        <option>Customer</option>
                        <option>Lead</option>
                        <option>Opportunity</option>
                        <option>Ticket</option>
                    </select>
                </div>
            </div>
            <label for="FieldOptions">Options / Validation</label>
            <textarea id="FieldOptions" placeholder="Dropdown options, regex validation, default values..."></textarea>
            <div class="button-row">
                <button type="button">Add Field</button>
                <button type="button">Preview Form</button>
                <button type="button">Publish Changes</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Workflow Orchestrator</h2>
            <div class="form-grid">
                <div>
                    <label for="TriggerEvent">Trigger Event</label>
                    <select id="TriggerEvent">
                        <option>Customer Created</option>
                        <option>Lead Score Updated</option>
                        <option>Opportunity Stage Changed</option>
                        <option>Ticket Resolved</option>
                    </select>
                </div>
                <div>
                    <label for="Conditions">Conditions</label>
                    <input id="Conditions" type="text" placeholder="VIPTag = true" />
                </div>
                <div>
                    <label for="Actions">Actions</label>
                    <textarea id="Actions" placeholder="Notify account team, create task, update subscription"></textarea>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Add Step</button>
                <button type="button">Test Workflow</button>
                <button type="button">Enable Workflow</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Version History</h2>
            <div class="timeline">
                <div class="timeline-entry">
                    <strong>Version 5</strong>
                    <p>Added onboarding score field and triggered welcome campaign for VIP customers.</p>
                </div>
                <div class="timeline-entry">
                    <strong>Version 4</strong>
                    <p>Introduced Slack notifications for stalled opportunities &gt; 14 days.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>All changes tracked with rollback capabilities and approval workflows.</div>
    </footer>
</div>
</body>
</html>
