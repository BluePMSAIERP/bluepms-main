<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Mobile &amp; Accessibility Controls</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Mobile &amp; Accessibility Controls</h1>
        <p>Deliver inclusive, responsive experiences with offline synchronization, geolocation services, and ADA-aligned options.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="CustomerPortalSelfService.aspx">Preview Portal</a>
        </div>
    </header>
    <main class="main">
        <section class="form-section">
            <h2 class="section-title">Device Experience</h2>
            <div class="form-grid">
                <div>
                    <label for="Responsive">Responsive Layout</label>
                    <select id="Responsive">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="OfflineMode">Offline Mode</label>
                    <select id="OfflineMode">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="PushNotifications">Push Notifications</label>
                    <select id="PushNotifications">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="GeoPermissions">Geolocation</label>
                    <select id="GeoPermissions">
                        <option>Ask per session</option>
                        <option>Always allow</option>
                        <option>Disabled</option>
                    </select>
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Accessibility Settings</h2>
            <div class="form-grid">
                <div>
                    <label for="ScreenReader">Screen Reader Labels</label>
                    <select id="ScreenReader">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="ContrastMode">High Contrast Mode</label>
                    <select id="ContrastMode">
                        <option>Auto</option>
                        <option>Always on</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="VoiceInput">Voice Input</label>
                    <select id="VoiceInput">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div>
                    <label for="FontScaling">Font Scaling</label>
                    <input id="FontScaling" type="range" min="80" max="150" value="100" />
                </div>
            </div>
            <div class="button-row">
                <button type="button">Preview Mobile Layout</button>
                <button type="button">Validate ADA Checklist</button>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Usage Insights</h2>
            <div class="grid">
                <div class="metric">
                    <span>67%</span>
                    Sessions on Mobile
                </div>
                <div class="metric">
                    <span>12%</span>
                    Offline Sync Adoption
                </div>
                <div class="metric">
                    <span>98%</span>
                    Accessibility Compliance Score
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>Ensure experiences meet WCAG 2.2 AA with continuous monitoring.</div>
    </footer>
</div>
</body>
</html>
