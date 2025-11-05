<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Customer Profile Management</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="wrapper">
    <header>
        <h1>Customer Profile Management</h1>
        <p>Maintain a single source of truth for every customer with audit trails, duplicate detection, multilingual copy, and powerful import/export pipelines.</p>
        <div class="hero-actions">
            <a class="btn" href="CRM.aspx">Back to CRM Command Center</a>
            <a class="btn secondary" href="LeadManagement.aspx">Jump to Lead Workspace</a>
        </div>
    </header>
    <main class="main">
        <div class="notification">
            Real-time duplicate detection actively compares Email, Phone, CompanyID, and PassportID across the master data service. Conflicts surface here with remediation actions.
        </div>
        <div class="tab-bar">
            <span class="tab active">Basic Info</span>
            <span class="tab">Personal</span>
            <span class="tab">Professional</span>
            <span class="tab">Status</span>
            <span class="tab">Notes &amp; History</span>
            <span class="tab">Audit Trail</span>
        </div>
        <section class="form-section">
            <h2 class="section-title">Identity &amp; Contact</h2>
            <div class="form-grid">
                <div>
                    <label for="FirstName">First Name*</label>
                    <input id="FirstName" type="text" placeholder="Jane" />
                </div>
                <div>
                    <label for="LastName">Last Name*</label>
                    <input id="LastName" type="text" placeholder="Doe" />
                </div>
                <div>
                    <label for="Email">Email*</label>
                    <input id="Email" type="email" placeholder="jane.doe@domain.com" />
                </div>
                <div>
                    <label for="PhoneNumber">Phone</label>
                    <input id="PhoneNumber" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                    <label for="AlternatePhoneNumber">Alternate Phone</label>
                    <input id="AlternatePhoneNumber" type="tel" placeholder="(555) 987-6543" />
                </div>
                <div>
                    <label for="MobilePhoneNumber">Mobile</label>
                    <input id="MobilePhoneNumber" type="tel" placeholder="(555) 555-0101" />
                </div>
                <div>
                    <label for="PreferredContactMethod">Preferred Contact</label>
                    <select id="PreferredContactMethod">
                        <option>Email</option>
                        <option>Phone</option>
                        <option>SMS</option>
                    </select>
                </div>
                <div>
                    <label for="LeadSource">Lead Source</label>
                    <select id="LeadSource">
                        <option>Referral</option>
                        <option>Website</option>
                        <option>Trade Show</option>
                        <option>Partner</option>
                    </select>
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Address &amp; Demographics</h2>
            <div class="form-grid">
                <div>
                    <label for="Address">Address</label>
                    <input id="Address" type="text" placeholder="123 Innovation Way" />
                </div>
                <div>
                    <label for="City">City</label>
                    <input id="City" type="text" />
                </div>
                <div>
                    <label for="State">State</label>
                    <input id="State" type="text" />
                </div>
                <div>
                    <label for="ZipCode">Zip Code</label>
                    <input id="ZipCode" type="text" />
                </div>
                <div>
                    <label for="Country">Country</label>
                    <input id="Country" type="text" />
                </div>
                <div>
                    <label for="DateOfBirth">Date of Birth</label>
                    <input id="DateOfBirth" type="date" />
                </div>
                <div>
                    <label for="Gender">Gender</label>
                    <select id="Gender">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-Binary</option>
                        <option>Prefer Not to Say</option>
                    </select>
                </div>
                <div>
                    <label for="MaritalStatus">Marital Status</label>
                    <select id="MaritalStatus">
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        <option>Widowed</option>
                    </select>
                </div>
                <div>
                    <label for="Nationality">Nationality</label>
                    <input id="Nationality" type="text" />
                </div>
                <div>
                    <label for="CountryOfResidence">Country of Residence</label>
                    <input id="CountryOfResidence" type="text" />
                </div>
                <div>
                    <label for="PassportID">Passport ID</label>
                    <input id="PassportID" type="text" />
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Professional &amp; Status</h2>
            <div class="form-grid">
                <div>
                    <label for="Occupation">Occupation</label>
                    <input id="Occupation" type="text" />
                </div>
                <div>
                    <label for="Company">Company</label>
                    <input id="Company" type="text" />
                </div>
                <div>
                    <label for="CompanyID">Company ID</label>
                    <input id="CompanyID" type="text" />
                </div>
                <div>
                    <label for="GroupCompanyID">Group Company ID</label>
                    <input id="GroupCompanyID" type="text" />
                </div>
                <div>
                    <label for="AccountStatus">Account Status</label>
                    <select id="AccountStatus">
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Prospect</option>
                    </select>
                </div>
                <div>
                    <label for="SubscriptionType">Subscription Type</label>
                    <select id="SubscriptionType">
                        <option>Premium</option>
                        <option>Standard</option>
                        <option>Lite</option>
                    </select>
                </div>
                <div>
                    <label for="VIPTag">VIP</label>
                    <input id="VIPTag" type="checkbox" />
                </div>
                <div>
                    <label for="LastContactDate">Last Contact Date</label>
                    <input id="LastContactDate" type="datetime-local" />
                </div>
            </div>
        </section>
        <section class="form-section">
            <h2 class="section-title">Notes &amp; Audit</h2>
            <div class="form-grid">
                <div>
                    <label for="Notes">Notes</label>
                    <textarea id="Notes" placeholder="Summaries, goals, commitments..." ></textarea>
                </div>
                <div>
                    <label for="Audit">Audit Trail</label>
                    <div class="timeline">
                        <div class="timeline-entry">
                            <strong>Profile Updated</strong>
                            <p>Updated by Sophia Lee on 2024-05-14 &mdash; Email changed and VIPTag enabled.</p>
                        </div>
                        <div class="timeline-entry">
                            <strong>Created</strong>
                            <p>Created by API Sync on 2023-11-01 with lead source Trade Show.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-row">
                <button type="button">Save Profile</button>
                <button type="button">Run Duplicate Check</button>
                <button type="button">Import CSV</button>
                <button type="button">Export Excel</button>
            </div>
        </section>
    </main>
    <footer>
        <div>Audit ready customer governance &mdash; multilingual &amp; enterprise compliant.</div>
    </footer>
</div>
</body>
</html>
