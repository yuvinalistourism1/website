"use client";

export function LegalStyles() {
  return (
    <style jsx>{`
      .legal-content h2 {
        font-family: serif;
        font-size: 3rem;
        font-weight: 700;
        color: #0D1B2A;
        margin-top: 6rem;
        margin-bottom: 2.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 2px solid rgba(255, 193, 7, 0.4);
      }
      .legal-content h2:first-of-type {
        margin-top: 0;
      }
      .legal-content h3 {
        font-family: serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: rgba(30, 58, 95, 0.9);
        margin-top: 3.5rem;
        margin-bottom: 1.5rem;
        padding: 0.75rem 1rem;
        background: rgba(255, 193, 7, 0.05);
        border-left: 4px solid #FFC107;
        border-radius: 0.5rem;
      }
      .legal-content p {
        font-size: 1rem;
        line-height: 1.9;
        color: rgba(30, 58, 95, 0.8);
        margin-bottom: 1.5rem;
      }
      .legal-content p:first-of-type {
        font-size: 0.875rem;
        color: rgba(30, 58, 95, 0.6);
        font-style: italic;
        margin-bottom: 4rem;
      }
      .legal-content ul,
      .legal-content ol {
        margin: 2rem 0;
        padding: 1.5rem 1.5rem 1.5rem 3rem;
        background: rgba(249, 250, 251, 0.5);
        border: 1px solid rgba(30, 58, 95, 0.1);
        border-radius: 0.75rem;
      }
      .legal-content li {
        font-size: 1rem;
        line-height: 1.8;
        color: rgba(30, 58, 95, 0.85);
        margin: 1rem 0;
      }
      .legal-content ul li::marker {
        color: #FFC107;
        font-size: 1.5rem;
        font-weight: 700;
      }
      .legal-content ol li::marker {
        color: #FFC107;
        font-weight: 700;
      }
      .legal-content table {
        width: 100%;
        margin: 3rem 0;
        border-collapse: collapse;
        border-radius: 0.75rem;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      .legal-content thead {
        background: rgba(255, 193, 7, 0.1);
        border-bottom: 2px solid rgba(255, 193, 7, 0.3);
      }
      .legal-content th {
        padding: 1.25rem;
        text-align: left;
        font-weight: 700;
        color: #0D1B2A;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .legal-content td {
        padding: 1.25rem;
        border-top: 1px solid rgba(30, 58, 95, 0.1);
        color: rgba(30, 58, 95, 0.85);
        background: white;
      }
      .legal-content tbody tr:hover {
        background: rgba(249, 250, 251, 0.5);
      }
      .legal-content strong {
        font-weight: 700;
        color: #0D1B2A;
      }
      .legal-content a {
        color: #FFC107;
        font-weight: 600;
        text-decoration: none;
      }
      .legal-content a:hover {
        text-decoration: underline;
      }
    `}</style>
  );
}
