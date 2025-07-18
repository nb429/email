import React, { useState } from 'react';
import { Mail, Smartphone, Monitor, Eye, Code, Download, Check, Zap, Palette, Settings, Copy, RefreshCw } from 'lucide-react';

interface EmailTemplate {
  id: string;
  name: string;
  type: string;
  description: string;
  html: string;
  preview: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const emailTemplates: EmailTemplate[] = [
  {
    id: 'modern-newsletter',
    name: 'Modern Newsletter',
    type: 'Newsletter',
    description: 'Clean, modern newsletter with image hero and content blocks',
    preview: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    colors: { primary: '#2563eb', secondary: '#64748b', accent: '#f59e0b' },
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Modern Newsletter</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; background: #f8fafc; }
        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { font-size: 32px; font-weight: 700; margin-bottom: 12px; letter-spacing: -0.025em; }
        .header p { font-size: 18px; opacity: 0.9; }
        .hero-image { width: 100%; height: 250px; background: linear-gradient(45deg, #f3f4f6, #e5e7eb); display: block; }
        .content { padding: 40px 30px; }
        .section { margin-bottom: 35px; }
        .section h2 { color: #1f2937; font-size: 26px; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.025em; }
        .section p { color: #4b5563; font-size: 16px; line-height: 1.7; margin-bottom: 20px; }
        .cta-button { display: inline-block; background: #f59e0b; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; transition: all 0.3s ease; }
        .cta-button:hover { background: #d97706; transform: translateY(-1px); }
        .divider { height: 1px; background: #e5e7eb; margin: 30px 0; }
        .footer { background: #f9fafb; padding: 30px; text-align: center; color: #6b7280; font-size: 14px; }
        .footer a { color: #2563eb; text-decoration: none; }
        .social-links { margin: 20px 0; }
        .social-links a { display: inline-block; margin: 0 10px; }
        @media screen and (max-width: 480px) {
            .email-container { margin: 0 !important; }
            .header, .content { padding: 25px 20px !important; }
            .header h1 { font-size: 28px !important; }
            .section h2 { font-size: 22px !important; }
            .cta-button { padding: 14px 28px !important; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Weekly Insights</h1>
            <p>Your source for industry trends and innovations</p>
        </div>
        <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600&h=250" alt="Newsletter Hero" class="hero-image">
        <div class="content">
            <div class="section">
                <h2>Featured Article</h2>
                <p>Discover the latest trends in digital transformation and how leading companies are leveraging technology to create exceptional customer experiences. Our expert analysis breaks down the key strategies and tools you need to know.</p>
                <a href="#" class="cta-button">Read Full Article</a>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h2>Industry Updates</h2>
                <p>Stay informed with our curated selection of the most important industry news, emerging technologies, and market insights that matter to your business.</p>
            </div>
            <div class="section">
                <h2>Upcoming Events</h2>
                <p>Join us for our monthly webinar series where industry leaders share their insights and answer your questions. Register now to secure your spot.</p>
                <a href="#" class="cta-button">Register Now</a>
            </div>
        </div>
        <div class="footer">
            <div class="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
            </div>
            <p>&copy; 2025 Your Company. All rights reserved.</p>
            <p>123 Business Ave, Suite 100, City, State 12345</p>
            <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'premium-promo',
    name: 'Premium Promotional',
    type: 'Marketing',
    description: 'High-converting promotional email with product showcase and urgency',
    preview: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    colors: { primary: '#7c3aed', secondary: '#ef4444', accent: '#10b981' },
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Premium Sale</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background: #f1f5f9; }
        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); color: white; padding: 50px 30px; text-align: center; position: relative; overflow: hidden; }
        .header::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: pulse 4s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 0.8; } }
        .header h1 { font-size: 36px; font-weight: 800; margin-bottom: 15px; position: relative; z-index: 1; }
        .discount-badge { background: #ef4444; color: white; padding: 12px 24px; border-radius: 50px; font-size: 20px; font-weight: 700; margin: 20px 0; display: inline-block; position: relative; z-index: 1; }
        .countdown { background: rgba(255,255,255,0.2); padding: 20px; border-radius: 12px; margin: 20px 0; position: relative; z-index: 1; }
        .countdown p { font-size: 16px; margin-bottom: 10px; }
        .countdown-timer { font-size: 24px; font-weight: 700; }
        .content { padding: 40px 30px; }
        .product-grid { width: 100%; }
        .product-row { width: 100%; margin-bottom: 30px; }
        .product-item { display: inline-block; width: 48%; vertical-align: top; margin: 0 1% 20px 0; text-align: center; }
        .product-image { width: 100%; height: 180px; background: linear-gradient(45deg, #f3f4f6, #e5e7eb); border-radius: 12px; margin-bottom: 15px; position: relative; overflow: hidden; }
        .product-image::after { content: '✨'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; }
        .product-title { font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #1f2937; }
        .product-price { color: #ef4444; font-size: 20px; font-weight: 700; }
        .product-original-price { color: #9ca3af; font-size: 16px; text-decoration: line-through; margin-left: 8px; }
        .cta-section { text-align: center; padding: 40px 30px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); }
        .cta-section h2 { color: #92400e; font-size: 28px; font-weight: 700; margin-bottom: 15px; }
        .cta-button { display: inline-block; background: #10b981; color: white; padding: 18px 40px; text-decoration: none; border-radius: 12px; font-size: 18px; font-weight: 700; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); }
        .cta-button:hover { background: #059669; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5); }
        .guarantee { background: #f0fdf4; padding: 25px; margin: 30px 0; border-radius: 12px; text-align: center; }
        .guarantee h3 { color: #166534; font-size: 20px; margin-bottom: 10px; }
        .guarantee p { color: #16a34a; }
        .footer { background: #1f2937; color: white; padding: 30px; text-align: center; }
        .footer a { color: #60a5fa; text-decoration: none; }
        @media screen and (max-width: 480px) {
            .email-container { margin: 0 !important; }
            .header, .content, .cta-section { padding: 25px 20px !important; }
            .header h1 { font-size: 28px !important; }
            .product-item { width: 100% !important; margin: 0 0 20px 0 !important; }
            .countdown-timer { font-size: 20px !important; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🔥 FLASH SALE 🔥</h1>
            <div class="discount-badge">50% OFF Everything</div>
            <div class="countdown">
                <p>Sale Ends In:</p>
                <div class="countdown-timer">23:59:42</div>
            </div>
        </div>
        <div class="content">
            <div class="product-grid">
                <div class="product-row">
                    <div class="product-item">
                        <div class="product-image"></div>
                        <div class="product-title">Premium Package</div>
                        <div class="product-price">$49.99 <span class="product-original-price">$99.99</span></div>
                    </div>
                    <div class="product-item">
                        <div class="product-image"></div>
                        <div class="product-title">Professional Suite</div>
                        <div class="product-price">$79.99 <span class="product-original-price">$159.99</span></div>
                    </div>
                </div>
                <div class="product-row">
                    <div class="product-item">
                        <div class="product-image"></div>
                        <div class="product-title">Starter Kit</div>
                        <div class="product-price">$24.99 <span class="product-original-price">$49.99</span></div>
                    </div>
                    <div class="product-item">
                        <div class="product-image"></div>
                        <div class="product-title">Enterprise Solution</div>
                        <div class="product-price">$199.99 <span class="product-original-price">$399.99</span></div>
                    </div>
                </div>
            </div>
            <div class="guarantee">
                <h3>🛡️ 30-Day Money-Back Guarantee</h3>
                <p>Not satisfied? Get a full refund, no questions asked!</p>
            </div>
        </div>
        <div class="cta-section">
            <h2>Don't Miss Out!</h2>
            <p>Limited time offer - Sale ends at midnight!</p>
            <a href="#" class="cta-button">Shop Now & Save 50%</a>
        </div>
        <div class="footer">
            <p>&copy; 2025 Your Store. All rights reserved.</p>
            <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'elegant-welcome',
    name: 'Elegant Welcome',
    type: 'Transactional',
    description: 'Sophisticated welcome email with step-by-step onboarding guide',
    preview: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    colors: { primary: '#0f172a', secondary: '#64748b', accent: '#06b6d4' },
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Welcome to Our Platform</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background: #f8fafc; line-height: 1.6; }
        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 50px 30px; text-align: center; position: relative; }
        .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="30" r="1.5" fill="white" opacity="0.1"/></svg>'); }
        .welcome-icon { font-size: 48px; margin-bottom: 20px; position: relative; z-index: 1; }
        .header h1 { font-size: 32px; font-weight: 700; margin-bottom: 15px; position: relative; z-index: 1; }
        .header p { font-size: 18px; opacity: 0.9; position: relative; z-index: 1; }
        .content { padding: 50px 30px; }
        .intro { text-align: center; margin-bottom: 40px; }
        .intro h2 { color: #1f2937; font-size: 28px; font-weight: 700; margin-bottom: 15px; }
        .intro p { color: #6b7280; font-size: 18px; }
        .steps-container { margin: 40px 0; }
        .step { display: flex; align-items: flex-start; margin-bottom: 30px; padding: 25px; background: #f9fafb; border-radius: 16px; border-left: 4px solid #06b6d4; }
        .step-number { flex-shrink: 0; width: 50px; height: 50px; background: #06b6d4; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px; margin-right: 20px; }
        .step-content { flex: 1; }
        .step-title { font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 8px; }
        .step-description { color: #6b7280; font-size: 16px; line-height: 1.6; }
        .cta-section { text-align: center; padding: 40px 30px; background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%); margin: 30px 0; border-radius: 16px; }
        .cta-section h3 { color: #0e7490; font-size: 24px; font-weight: 700; margin-bottom: 15px; }
        .cta-button { display: inline-block; background: #06b6d4; color: white; padding: 16px 32px; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4); }
        .cta-button:hover { background: #0891b2; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5); }
        .resources { background: #f1f5f9; padding: 30px; border-radius: 16px; margin: 30px 0; }
        .resources h3 { color: #1f2937; font-size: 22px; font-weight: 600; margin-bottom: 20px; }
        .resource-item { display: flex; align-items: center; margin-bottom: 15px; }
        .resource-icon { width: 24px; height: 24px; background: #06b6d4; border-radius: 50%; margin-right: 15px; }
        .resource-link { color: #0891b2; text-decoration: none; font-weight: 500; }
        .resource-link:hover { text-decoration: underline; }
        .footer { background: #1f2937; color: white; padding: 40px 30px; text-align: center; }
        .footer h4 { font-size: 18px; margin-bottom: 15px; }
        .footer p { color: #9ca3af; font-size: 14px; margin-bottom: 10px; }
        .footer a { color: #60a5fa; text-decoration: none; }
        .footer a:hover { text-decoration: underline; }
        @media screen and (max-width: 480px) {
            .email-container { margin: 0 !important; }
            .header, .content, .cta-section { padding: 25px 20px !important; }
            .header h1 { font-size: 28px !important; }
            .step { flex-direction: column !important; text-align: center !important; }
            .step-number { margin: 0 auto 15px auto !important; }
            .intro h2 { font-size: 24px !important; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="welcome-icon">🎉</div>
            <h1>Welcome to Our Platform!</h1>
            <p>We're thrilled to have you join our community</p>
        </div>
        <div class="content">
            <div class="intro">
                <h2>You're All Set!</h2>
                <p>Let's get you started with everything you need to succeed on our platform.</p>
            </div>
            <div class="steps-container">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <div class="step-title">Complete Your Profile</div>
                        <div class="step-description">Add your personal information, preferences, and profile picture to help others connect with you and personalize your experience.</div>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <div class="step-title">Explore Key Features</div>
                        <div class="step-description">Take a tour of our platform's main features. From dashboard analytics to collaboration tools, discover what makes us unique.</div>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <div class="step-title">Join the Community</div>
                        <div class="step-description">Connect with other members, join discussions, and start building valuable relationships within our community.</div>
                    </div>
                </div>
            </div>
            <div class="cta-section">
                <h3>Ready to Get Started?</h3>
                <p>Complete your setup and unlock all features</p>
                <a href="#" class="cta-button">Complete Setup Now</a>
            </div>
            <div class="resources">
                <h3>Helpful Resources</h3>
                <div class="resource-item">
                    <div class="resource-icon"></div>
                    <a href="#" class="resource-link">Getting Started Guide</a>
                </div>
                <div class="resource-item">
                    <div class="resource-icon"></div>
                    <a href="#" class="resource-link">Video Tutorials</a>
                </div>
                <div class="resource-item">
                    <div class="resource-icon"></div>
                    <a href="#" class="resource-link">Community Forum</a>
                </div>
                <div class="resource-item">
                    <div class="resource-icon"></div>
                    <a href="#" class="resource-link">Support Center</a>
                </div>
            </div>
        </div>
        <div class="footer">
            <h4>Need Help?</h4>
            <p>Our support team is here to help you every step of the way.</p>
            <p><a href="#">Contact Support</a> | <a href="#">FAQ</a> | <a href="#">Community</a></p>
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'modern-invoice',
    name: 'Modern Invoice',
    type: 'Transactional',
    description: 'Professional invoice template with clean design and payment details',
    preview: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    colors: { primary: '#059669', secondary: '#374151', accent: '#f59e0b' },
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Invoice #INV-2025-001</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background: #f9fafb; color: #111827; }
        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background: #059669; color: white; padding: 40px 30px; }
        .header-content { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 24px; font-weight: 700; }
        .invoice-number { text-align: right; }
        .invoice-number h1 { font-size: 28px; font-weight: 700; margin-bottom: 5px; }
        .invoice-number p { opacity: 0.9; }
        .invoice-details { padding: 30px; background: #f8fafc; border-bottom: 1px solid #e5e7eb; }
        .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .detail-section h3 { color: #374151; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; }
        .detail-section p { color: #6b7280; margin-bottom: 5px; }
        .items-section { padding: 30px; }
        .items-header { display: grid; grid-template-columns: 3fr 1fr 1fr 1fr; gap: 20px; padding-bottom: 15px; border-bottom: 2px solid #e5e7eb; margin-bottom: 15px; }
        .items-header div { font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
        .item-row { display: grid; grid-template-columns: 3fr 1fr 1fr 1fr; gap: 20px; padding: 15px 0; border-bottom: 1px solid #f3f4f6; }
        .item-row:last-child { border-bottom: none; }
        .item-description { color: #374151; font-weight: 500; }
        .item-meta { color: #6b7280; font-size: 14px; margin-top: 5px; }
        .item-qty, .item-price, .item-total { color: #6b7280; text-align: right; }
        .totals-section { background: #f8fafc; padding: 30px; border-top: 1px solid #e5e7eb; }
        .totals-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .totals-row.total { font-weight: 700; font-size: 18px; color: #059669; border-top: 2px solid #e5e7eb; padding-top: 15px; margin-top: 15px; }
        .payment-section { padding: 30px; }
        .payment-section h3 { color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 15px; }
        .payment-status { display: inline-block; background: #d1fae5; color: #065f46; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
        .payment-method { background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .footer { background: #374151; color: white; padding: 30px; text-align: center; }
        .footer p { margin-bottom: 10px; opacity: 0.8; }
        .footer a { color: #60a5fa; text-decoration: none; }
        @media screen and (max-width: 480px) {
            .email-container { margin: 0 !important; }
            .header-content { flex-direction: column !important; text-align: center !important; }
            .invoice-number { text-align: center !important; margin-top: 20px !important; }
            .details-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
            .items-header, .item-row { grid-template-columns: 2fr 1fr !important; }
            .item-qty, .item-price { display: none !important; }
            .totals-row { font-size: 14px !important; }
            .totals-row.total { font-size: 16px !important; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="logo">Your Company</div>
                <div class="invoice-number">
                    <h1>Invoice</h1>
                    <p>#INV-2025-001</p>
                </div>
            </div>
        </div>
        <div class="invoice-details">
            <div class="details-grid">
                <div class="detail-section">
                    <h3>Bill To</h3>
                    <p><strong>John Doe</strong></p>
                    <p>ABC Corporation</p>
                    <p>123 Business Street</p>
                    <p>New York, NY 10001</p>
                    <p>john.doe@abccorp.com</p>
                </div>
                <div class="detail-section">
                    <h3>Invoice Details</h3>
                    <p><strong>Issue Date:</strong> January 15, 2025</p>
                    <p><strong>Due Date:</strong> February 14, 2025</p>
                    <p><strong>Payment Terms:</strong> Net 30</p>
                    <p><strong>PO Number:</strong> PO-2025-001</p>
                </div>
            </div>
        </div>
        <div class="items-section">
            <div class="items-header">
                <div>Description</div>
                <div style="text-align: right;">Qty</div>
                <div style="text-align: right;">Price</div>
                <div style="text-align: right;">Total</div>
            </div>
            <div class="item-row">
                <div>
                    <div class="item-description">Professional Website Design</div>
                    <div class="item-meta">Custom responsive design with modern UI/UX</div>
                </div>
                <div class="item-qty">1</div>
                <div class="item-price">$2,500.00</div>
                <div class="item-total">$2,500.00</div>
            </div>
            <div class="item-row">
                <div>
                    <div class="item-description">SEO Optimization</div>
                    <div class="item-meta">Complete on-page and technical SEO setup</div>
                </div>
                <div class="item-qty">1</div>
                <div class="item-price">$800.00</div>
                <div class="item-total">$800.00</div>
            </div>
            <div class="item-row">
                <div>
                    <div class="item-description">Content Management System</div>
                    <div class="item-meta">Custom CMS with admin dashboard</div>
                </div>
                <div class="item-qty">1</div>
                <div class="item-price">$1,200.00</div>
                <div class="item-total">$1,200.00</div>
            </div>
        </div>
        <div class="totals-section">
            <div class="totals-row">
                <span>Subtotal:</span>
                <span>$4,500.00</span>
            </div>
            <div class="totals-row">
                <span>Tax (8.25%):</span>
                <span>$371.25</span>
            </div>
            <div class="totals-row total">
                <span>Total Amount:</span>
                <span>$4,871.25</span>
            </div>
        </div>
        <div class="payment-section">
            <h3>Payment Information</h3>
            <div class="payment-status">✓ Paid</div>
            <div class="payment-method">
                <p><strong>Payment Method:</strong> Credit Card (**** 4532)</p>
                <p><strong>Transaction ID:</strong> TXN-2025-001-ABC</p>
                <p><strong>Payment Date:</strong> January 15, 2025</p>
            </div>
            <p><strong>Thank you for your business!</strong> If you have any questions about this invoice, please contact our billing department.</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
            <p>123 Business Ave, Suite 100, City, State 12345</p>
            <p>Phone: (555) 123-4567 | Email: billing@yourcompany.com</p>
            <p><a href="#">Download PDF</a> | <a href="#">Payment Portal</a></p>
        </div>
    </div>
</body>
</html>`
  }
];

const emailClients = [
  { name: 'Outlook', icon: '📧', supported: true, compatibility: 95 },
  { name: 'Gmail', icon: '✉️', supported: true, compatibility: 98 },
  { name: 'Apple Mail', icon: '📮', supported: true, compatibility: 92 },
  { name: 'Thunderbird', icon: '🌩️', supported: true, compatibility: 88 },
  { name: 'Yahoo Mail', icon: '📨', supported: true, compatibility: 90 },
  { name: 'Outlook.com', icon: '📧', supported: true, compatibility: 94 },
  { name: 'Lotus Notes', icon: '📄', supported: false, compatibility: 65 }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0]);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [isCodeCopied, setIsCodeCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('templates');

  const downloadHTML = () => {
    const blob = new Blob([selectedTemplate.html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate.id}-template.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(selectedTemplate.html);
      setIsCodeCopied(true);
      setTimeout(() => setIsCodeCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Email Template Studio</h1>
                  <p className="text-gray-600">Professional HTML email templates with perfect cross-client compatibility</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setViewMode(viewMode === 'preview' ? 'code' : 'preview')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                {viewMode === 'preview' ? <Code className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{viewMode === 'preview' ? 'View Code' : 'Preview'}</span>
              </button>
              {viewMode === 'code' && (
                <button
                  onClick={copyCode}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                >
                  {isCodeCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{isCodeCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              )}
              <button
                onClick={downloadHTML}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Navigation */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection('templates')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === 'templates'
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Palette className="h-5 w-5" />
                  <span className="font-medium">Templates</span>
                </button>
                <button
                  onClick={() => setActiveSection('compatibility')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === 'compatibility'
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="font-medium">Compatibility</span>
                </button>
              </nav>
            </div>

            {/* Template Selection */}
            {activeSection === 'templates' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Template</h2>
                <div className="space-y-4">
                  {emailTemplates.map((template) => (
                    <div
                      key={template.id}
                      onClick={() => setSelectedTemplate(template)}
                      className={`cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 transform hover:scale-105 ${
                        selectedTemplate.id === template.id
                          ? 'border-blue-500 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <img
                          src={template.preview}
                          alt={template.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full">
                          {template.type}
                        </span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: template.colors.primary }}></div>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: template.colors.secondary }}></div>
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: template.colors.accent }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Email Client Compatibility */}
            {activeSection === 'compatibility' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                  Client Compatibility
                </h3>
                <div className="space-y-3">
                  {emailClients.map((client) => (
                    <div key={client.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{client.icon}</span>
                        <span className="font-medium text-gray-900">{client.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${
                              client.compatibility >= 90
                                ? 'bg-green-500'
                                : client.compatibility >= 80
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                            }`}
                            style={{ width: `${client.compatibility}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{client.compatibility}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> All templates are tested across major email clients and optimized for maximum compatibility.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Template Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTemplate.name}</h2>
                    <p className="text-gray-600">{selectedTemplate.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setDeviceView('desktop')}
                        className={`px-4 py-2 flex items-center space-x-2 transition-all duration-200 ${
                          deviceView === 'desktop'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Monitor className="h-4 w-4" />
                        <span>Desktop</span>
                      </button>
                      <button
                        onClick={() => setDeviceView('mobile')}
                        className={`px-4 py-2 flex items-center space-x-2 transition-all duration-200 ${
                          deviceView === 'mobile'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Smartphone className="h-4 w-4" />
                        <span>Mobile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {viewMode === 'preview' ? (
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className={`mx-auto transition-all duration-300 ${
                      deviceView === 'mobile' ? 'max-w-sm' : 'max-w-full'
                    }`}>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe
                          srcDoc={selectedTemplate.html}
                          className="w-full h-96 border-0"
                          title="Email Preview"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-semibold">HTML Source Code</h3>
                      <button
                        onClick={copyCode}
                        className="flex items-center space-x-2 px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        {isCodeCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span className="text-sm">{isCodeCopied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto max-h-96">
                      <code>{selectedTemplate.html}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Responsive Design</h3>
                </div>
                <p className="text-gray-600">Perfect rendering across all devices with mobile-optimized layouts and touch-friendly interactions.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Cross-Client Compatible</h3>
                </div>
                <p className="text-gray-600">Tested and optimized for all major email clients including Outlook, Gmail, Apple Mail, and more.</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Production Ready</h3>
                </div>
                <p className="text-gray-600">Clean, semantic HTML with inline CSS for maximum compatibility and professional appearance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;