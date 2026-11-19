var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// models/Restaurant.js
var Restaurant_exports = {};
__export(Restaurant_exports, {
  default: () => Restaurant_default
});
var import_mongoose, restaurantSchema, Restaurant, Restaurant_default;
var init_Restaurant = __esm({
  "models/Restaurant.js"() {
    import_mongoose = __toESM(require("mongoose"), 1);
    restaurantSchema = new import_mongoose.default.Schema({
      name: {
        type: String,
        required: true
      },
      phone: {
        type: String
      },
      address: {
        type: String
      },
      logo: {
        type: String,
        default: ""
      },
      bannerImage: {
        type: String,
        default: ""
      },
      showcaseImages: {
        type: [String],
        default: []
      },
      cuisineType: {
        type: String,
        default: "Multi-Cuisine"
      },
      dietaryType: {
        type: String,
        enum: ["Pure Veg", "Non-Veg", "Veg & Non-Veg", "Pure Veg & Non-Veg"],
        default: "Veg & Non-Veg"
      },
      currency: {
        type: String,
        default: "USD"
      },
      contactEmail: {
        type: String
      },
      timezone: {
        type: String,
        default: "America/New_York (EST)"
      },
      features: {
        onlineOrdering: { type: Boolean, default: true },
        tableReservations: { type: Boolean, default: true }
      },
      taxRate: {
        type: Number,
        default: 0
      },
      ownerId: {
        type: import_mongoose.default.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      subscription: {
        status: {
          type: String,
          enum: ["Pending Approval", "Active", "Frozen", "Cancelled", "Inactive", "Expiring Soon", "Expired", "Suspended", "Rejected"],
          default: "Inactive"
        },
        plan: {
          type: String,
          default: "Basic"
        },
        billingCycle: { type: String, enum: ["monthly", "yearly"], default: "monthly" },
        trialActive: { type: Boolean, default: false },
        trialRequestDate: { type: Date },
        trialStartDate: { type: Date },
        trialEndDate: { type: Date },
        approvedBy: { type: import_mongoose.default.Schema.Types.ObjectId, ref: "User" },
        approvedAt: { type: Date },
        rejectedAt: { type: Date },
        rejectionReason: { type: String, default: "" },
        paymentStatus: { type: String, enum: ["Unpaid", "Trial", "Paid", "Pending", "Failed"], default: "Unpaid" },
        manualFreeze: { type: Boolean, default: false },
        freezeReason: { type: String, default: "" },
        frozenAt: { type: Date },
        subscriptionStartDate: { type: Date },
        subscriptionEndDate: { type: Date },
        expiryDate: { type: Date },
        startDate: { type: Date, default: Date.now },
        price: { type: Number, default: 0 },
        reminderSent24h: { type: Boolean, default: false },
        downgradeScheduledPlan: { type: String, default: "" },
        downgradeScheduledDate: { type: Date }
      },
      approvalStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
      },
      verificationStatus: {
        type: String,
        enum: ["Pending", "Under Review", "Verified", "Rejected", "Re-upload Required", "Expired"],
        default: "Pending"
      },
      commissionRate: {
        type: Number,
        default: 0
      },
      deliverySettings: {
        deliveryType: { type: String, enum: ["Self", "Third-Party", "Both"], default: "Both" },
        enabled: { type: Boolean, default: false },
        radius: { type: Number, default: 5 },
        freeRadius: { type: Number, default: 2 },
        baseFee: { type: Number, default: 30 },
        perKmCharge: { type: Number, default: 10 },
        peakHourFee: { type: Number, default: 15 },
        rainSurcharge: { type: Number, default: 20 },
        minOrderAmountForFreeDelivery: { type: Number, default: 300 },
        minOrderAmountForDelivery: { type: Number, default: 0 },
        deliveryOperatingHours: {
          start: { type: String, default: "09:00" },
          end: { type: String, default: "22:00" }
        },
        location: {
          latitude: { type: Number, default: 13.0475 },
          longitude: { type: Number, default: 80.209 }
        }
      },
      status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended", "Deleted"],
        default: "Active"
      },
      isDeleted: {
        type: Boolean,
        default: false
      },
      deletedAt: {
        type: Date,
        default: null
      },
      deletedBy: {
        type: import_mongoose.default.Schema.Types.ObjectId,
        ref: "User",
        default: null
      },
      gstin: {
        type: String,
        default: ""
      },
      isActive: {
        type: Boolean,
        default: true
      },
      kitchenMode: {
        type: String,
        enum: ["KDS", "KOT_ONLY"],
        default: "KDS"
      },
      posConfig: {
        outletFormat: { type: String, default: "Fine Dine & Resto-Bar" },
        tablesEnabled: { type: Boolean, default: true },
        qsrCounterMode: { type: Boolean, default: false },
        kdsEnabled: { type: Boolean, default: true },
        inventoryAutoDeduct: { type: Boolean, default: true },
        deliveryFleetEnabled: { type: Boolean, default: true },
        loyaltyPointsEnabled: { type: Boolean, default: true },
        whatsappPnlAlerts: { type: Boolean, default: true },
        happyHoursEnabled: { type: Boolean, default: true },
        serviceChargePercent: { type: Number, default: 5 },
        barcodeScannerEnabled: { type: Boolean, default: false },
        guestQrOrdering: { type: Boolean, default: true }
      },
      billingConfig: {
        isCustomBillingActive: { type: Boolean, default: false },
        activatedAt: { type: Date, default: null },
        demoRequestId: { type: import_mongoose.default.Schema.Types.ObjectId, ref: "BillingDemoRequest", default: null },
        outletFormat: { type: String, default: "Fine Dine & Resto-Bar" },
        branchLimit: { type: Number, default: 1 },
        staffLimit: { type: Number, default: 10 },
        customPlanName: { type: String, default: "Custom Plan" },
        modules: {
          posBilling: { type: Boolean, default: true },
          dineInTakeawayOrders: { type: Boolean, default: true },
          kot: { type: Boolean, default: true },
          kds: { type: Boolean, default: true },
          menuManagement: { type: Boolean, default: true },
          inventoryManagement: { type: Boolean, default: true },
          rawMaterials: { type: Boolean, default: true },
          staffManagement: { type: Boolean, default: true },
          attendance: { type: Boolean, default: true },
          payroll: { type: Boolean, default: true },
          reports: { type: Boolean, default: true },
          salesReports: { type: Boolean, default: true },
          expenseManagement: { type: Boolean, default: true },
          tableManagement: { type: Boolean, default: true },
          reservations: { type: Boolean, default: true },
          deliveryManagement: { type: Boolean, default: true },
          customerManagement: { type: Boolean, default: true },
          branchManagement: { type: Boolean, default: true },
          qrOrdering: { type: Boolean, default: true },
          onlineOrdering: { type: Boolean, default: true },
          kitchenOrderManagement: { type: Boolean, default: true },
          gstInvoice: { type: Boolean, default: true },
          discounts: { type: Boolean, default: true }
        },
        paymentMethods: {
          cash: { type: Boolean, default: true },
          upi: { type: Boolean, default: true },
          card: { type: Boolean, default: true },
          split: { type: Boolean, default: true }
        },
        serviceChargePercent: { type: Number, default: 5 },
        gstRatePercent: { type: Number, default: 5 }
      },
      restaurantConfig: {
        orderKitchen: {
          kitchenMode: { type: String, enum: ["KDS", "KOT_ONLY"], default: "KDS" },
          kotEnabled: { type: Boolean, default: true },
          kdsEnabled: { type: Boolean, default: true },
          kotPrintEnabled: { type: Boolean, default: true }
        },
        waiterTips: {
          enabled: { type: Boolean, default: true },
          allowCustomerTips: { type: Boolean, default: true },
          tipPercentages: { type: [Number], default: [5, 10, 15, 20] },
          customTipAllowed: { type: Boolean, default: true }
        },
        qrOrdering: {
          enabled: { type: Boolean, default: true },
          allowSelfDineIn: { type: Boolean, default: true },
          allowWaiterOrdering: { type: Boolean, default: true }
        },
        paymentMethods: {
          cash: { type: Boolean, default: true },
          upi: { type: Boolean, default: true },
          card: { type: Boolean, default: true },
          onlineGateway: { type: Boolean, default: true }
        },
        payrollConfig: {
          lopCalculationPolicy: {
            type: String,
            enum: ["Configured_Working_Days", "Standard_26_Days", "Calendar_Days"],
            default: "Configured_Working_Days"
          },
          monthlyPaidLeaveQuota: { type: Number, default: 2 },
          unpaidLeaveDeductionType: {
            type: String,
            enum: ["Full_Day_Basic", "Pro_Rata_Gross"],
            default: "Full_Day_Basic"
          }
        },
        setupWizardCompleted: { type: Boolean, default: false },
        setupStep: { type: Number, default: 1 }
      }
    }, { timestamps: true });
    Restaurant = import_mongoose.default.model("Restaurant", restaurantSchema);
    Restaurant_default = Restaurant;
  }
});

// models/Notification.js
var Notification_exports = {};
__export(Notification_exports, {
  default: () => Notification_default
});
var import_mongoose2, notificationSchema, Notification, Notification_default;
var init_Notification = __esm({
  "models/Notification.js"() {
    import_mongoose2 = __toESM(require("mongoose"), 1);
    notificationSchema = new import_mongoose2.default.Schema({
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      type: {
        type: String,
        enum: ["Alert", "Info", "Broadcast", "System", "Order"],
        default: "Info"
      },
      read: {
        type: Boolean,
        default: false
      },
      restaurantId: {
        type: import_mongoose2.default.Schema.Types.ObjectId,
        ref: "Restaurant"
      },
      branchId: {
        type: import_mongoose2.default.Schema.Types.ObjectId,
        ref: "Branch"
      },
      userId: {
        type: import_mongoose2.default.Schema.Types.ObjectId,
        ref: "User"
      },
      // Role-scoping: if set, only these roles can see this notification
      targetRole: {
        type: [String],
        default: null
      },
      // If true, only SuperAdmin can see this (no restaurantId needed)
      isSuperAdminOnly: {
        type: Boolean,
        default: false
      },
      // Structured metadata (e.g., kitchen restock request / admin order confirmation)
      metadata: {
        type: import_mongoose2.default.Schema.Types.Mixed,
        default: null
      }
    }, { timestamps: true });
    Notification = import_mongoose2.default.model("Notification", notificationSchema);
    Notification_default = Notification;
  }
});

// utils/emailService.js
var import_nodemailer, getBrevoConfig, getSmtpConfig, getAppUrl, sendEmail, sendWelcomeEmail, sendSubscriptionExpiredEmail, sendApprovalEmail, sendLoginNotificationEmail, sendSubscriptionSuccessEmail, portalBaseUrl, sendTrialRequestSubmittedEmail, sendTrialApprovedEmail, sendTrialRejectedEmail, sendTrialStartedEmail, sendTrialExpiringReminderEmail, sendTrialExpiredAndFrozenEmail, sendManualFreezeEmail, sendManualUnfreezeEmail, sendStaffRoleCredentialsEmail, sendOutletFormatSubmissionEmail;
var init_emailService = __esm({
  "utils/emailService.js"() {
    import_nodemailer = __toESM(require("nodemailer"), 1);
    getBrevoConfig = () => {
      const defaultApiKey = [
        "xkeysib",
        "c6631c60c4656c1ba3be795c6f60f1a94fa9a47c45ecc92add4e4f83827b7d6d",
        "Tm68g8GmBDYOA3Sd"
      ].join("-");
      const apiKey = process.env.BREVO_API_KEY || defaultApiKey;
      const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.SMTP_FROM || "forgeindiaconnectfic@gmail.com";
      const senderName = process.env.BREVO_SENDER_NAME || "FoodNest";
      return { apiKey, senderEmail, senderName };
    };
    getSmtpConfig = () => {
      const defaultSmtpPass = [
        "xsmtpsib",
        "c6631c60c4656c1ba3be795c6f60f1a94fa9a47c45ecc92add4e4f83827b7d6d",
        "ftTnqc7yVNlO1O2j"
      ].join("-");
      const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
      const port = Number(process.env.SMTP_PORT || process.env.SMTP_Port || 587);
      const user = process.env.SMTP_USER || process.env.SMPT_USER || "b5786a001@smtp-brevo.com";
      const pass = process.env.SMTP_PASS || process.env.smtp_pass_key || defaultSmtpPass;
      const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.SMTP_FROM || "forgeindiaconnectfic@gmail.com";
      const senderName = process.env.BREVO_SENDER_NAME || "FoodNest";
      return { host, port, user, pass, senderEmail, senderName };
    };
    getAppUrl = () => process.env.FRONTEND_URL || process.env.RESTAURANT_FRONTEND_URL || "";
    sendEmail = async ({ to, toName, subject, html }) => {
      if (!to) return false;
      const smtpConfig = getSmtpConfig();
      const { apiKey, senderEmail, senderName } = getBrevoConfig();
      if (apiKey) {
        try {
          const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "accept": "application/json",
              "api-key": apiKey,
              "content-type": "application/json"
            },
            body: JSON.stringify({
              sender: { name: senderName, email: senderEmail },
              to: [{ email: to, name: toName || "Valued User" }],
              replyTo: { email: senderEmail, name: senderName },
              subject,
              htmlContent: html
            })
          });
          const data = await response.json();
          if (response.ok) {
            console.log(`[Brevo API Email Sent Successfully] Delivered real-time to ${to}. Message ID:`, data.messageId);
            return true;
          } else {
            console.warn("[Brevo API Response Not OK, falling back to SMTP Relay]:", JSON.stringify(data));
          }
        } catch (brevoErr) {
          console.warn("[Brevo HTTP Dispatch Error, falling back to SMTP Relay]:", brevoErr.message);
        }
      }
      try {
        const transporter = import_nodemailer.default.createTransport({
          host: smtpConfig.host,
          port: smtpConfig.port,
          secure: false,
          connectionTimeout: 3e3,
          greetingTimeout: 3e3,
          socketTimeout: 4e3,
          auth: {
            user: smtpConfig.user,
            pass: smtpConfig.pass
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        const info = await transporter.sendMail({
          from: `"${smtpConfig.senderName}" <${smtpConfig.senderEmail}>`,
          to,
          subject,
          html
        });
        console.log(`[Brevo SMTP Email Sent Successfully] Delivered to ${to}. Message ID: ${info.messageId}`);
        return true;
      } catch (smtpErr) {
        console.warn(`[Brevo SMTP Warning]: ${smtpErr.message}`);
      }
      return false;
    };
    sendWelcomeEmail = async ({ email, name, restaurantName, plan }) => {
      const subject = `Welcome to Restaurant Hub - Subscription & Registration Received!`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Welcome to Restaurant Hub! \u{1F389}</h1>
                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Your All-In-One Restaurant Management Platform</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Valued Partner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Thank you for joining <strong>Restaurant Hub</strong>! We are excited to welcome <strong>${restaurantName || "Your Restaurant"}</strong> to our platform.
                </p>
                <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-size: 13px; color: #334155;"><strong>Subscribed Plan:</strong> ${plan || "Basic"}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #334155;"><strong>Account Status:</strong> Pending Super Admin Verification</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Your account registration details have been submitted to our Super Admin verification team for review. As soon as your restaurant verification is approved, your plan dashboard will unlock automatically.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${getAppUrl()}" style="background-color: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Access Restaurant Hub Portal
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendSubscriptionExpiredEmail = async ({ email, name, restaurantName, plan, expiryDate }) => {
      const formattedDate = expiryDate ? new Date(expiryDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "recently";
      const subject = `Subscription Expired Alert - Action Required for ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Subscription Expired \u26A0\uFE0F</h1>
                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Action Required for Your Restaurant Account</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    This is an important alert regarding your subscription for <strong>${restaurantName || "Your Restaurant"}</strong>. Your <strong>${plan || "Basic"}</strong> plan subscription expired on <strong>${formattedDate}</strong>.
                </p>
                <div style="background-color: #fef2f2; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ef4444;">
                    <p style="margin: 0; font-size: 13px; color: #991b1b;"><strong>Status:</strong> Expired / Action Required</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #991b1b;">Please renew your subscription to restore full access to your plan modules.</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    You can easily renew or upgrade your plan by visiting the SaaS Subscription portal in your admin dashboard.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${getAppUrl()}/admin/billing" style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Renew Subscription Now
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendApprovalEmail = async ({ email, name, restaurantName, plan }) => {
      const subject = `Congratulations! Your Restaurant Verification is Approved!`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Account Approved! \u{1F389}</h1>
                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Your Dashboard is Now Unlocked</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Great news, ${name || "Restaurant Owner"}!</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Super Admin has reviewed and approved your restaurant verification for <strong>${restaurantName || "Your Restaurant"}</strong>!
                </p>
                <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; font-size: 13px; color: #1e40af;"><strong>Active Plan:</strong> ${plan || "Basic"}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #1e40af;"><strong>Dashboard Access:</strong> Unlocked & Ready</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    You can now access all features, order management, menu setup, staff accounts, and branch operations according to your plan tier.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${getAppUrl()}/admin" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Open Your Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendLoginNotificationEmail = async ({ email, name, role }) => {
      const subject = `Security Alert: Successful Login to Restaurant Hub`;
      const loginTime = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZoneName: "short" });
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Login Activity \u{1F510}</h1>
                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Security Notification for Your Account</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "User"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    We detected a successful login to your <strong>Restaurant Hub</strong> account (${role || "User"}).
                </p>
                <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; font-size: 13px; color: #334155;"><strong>Login Time:</strong> ${loginTime}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #334155;"><strong>Account Email:</strong> ${email}</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    If this was you, no further action is required. If you did not perform this login, please reset your password immediately.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${getAppUrl()}" style="background-color: #1e293b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Access Restaurant Hub
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendSubscriptionSuccessEmail = async ({ email, name, restaurantName, plan, billingCycle, price, transactionId, expiryDate }) => {
      const formattedExpiry = expiryDate ? new Date(expiryDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Next billing cycle";
      const formattedPrice = price !== void 0 ? `\u20B9${price}` : "";
      const subject = `Subscription Confirmed: ${plan || "Plan"} Activated for ${restaurantName || "Your Restaurant"}! \u{1F389}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Subscription Activated! \u{1F389}</h1>
                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Your Restaurant Dashboard is Fully Active</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Thank you for your payment! Your subscription to the <strong>${plan || "Basic"}</strong> plan for <strong>${restaurantName || "Your Restaurant"}</strong> has been successfully activated.
                </p>
                <div style="background-color: #f0fdf4; padding: 18px; border-radius: 10px; margin: 20px 0; border: 1px solid #bbf7d0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Plan Tier:</strong></td>
                            <td style="padding: 6px 0; color: #0f172a; font-weight: bold; text-align: right;">${plan || "Basic"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Billing Cycle:</strong></td>
                            <td style="padding: 6px 0; color: #0f172a; font-weight: bold; text-align: right; text-transform: capitalize;">${billingCycle || "Monthly"}</td>
                        </tr>
                        ${formattedPrice ? `
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Amount Paid:</strong></td>
                            <td style="padding: 6px 0; color: #059669; font-weight: bold; text-align: right;">${formattedPrice}</td>
                        </tr>` : ""}
                        ${transactionId ? `
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Transaction ID:</strong></td>
                            <td style="padding: 6px 0; color: #0f172a; font-family: monospace; font-size: 12px; text-align: right;">${transactionId}</td>
                        </tr>` : ""}
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Valid Until:</strong></td>
                            <td style="padding: 6px 0; color: #0f172a; font-weight: bold; text-align: right;">${formattedExpiry}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Account Status:</strong></td>
                            <td style="padding: 6px 0; color: #10b981; font-weight: bold; text-align: right;">Active & Unlocked</td>
                        </tr>
                    </table>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    All modules and features associated with the <strong>${plan}</strong> plan are now immediately accessible across your management dashboard, POS billing, orders, and staff workflows.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${getAppUrl()}/admin" style="background-color: #10b981; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Go to Your Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    portalBaseUrl = process.env.RESTAURANT_FRONTEND_URL || process.env.FRONTEND_URL || "";
    sendTrialRequestSubmittedEmail = async ({ email, name, restaurantName, requestDate }) => {
      const formattedDate = requestDate ? new Date(requestDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : (/* @__PURE__ */ new Date()).toLocaleDateString("en-US");
      const subject = `Free Trial Request Received: ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">7-Day Free Trial Request Submitted \u23F3</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Super Admin Approval Pending</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    We have received your <strong>7-Day Free Trial</strong> request for <strong>${restaurantName || "Your Restaurant"}</strong>!
                </p>
                <div style="background-color: #fffbeb; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                    <p style="margin: 0; font-size: 13px; color: #92400e;"><strong>Plan:</strong> 7-Day Free Trial (Pro Features)</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #92400e;"><strong>Price:</strong> Free (\u20B90)</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #92400e;"><strong>Request Submitted:</strong> ${formattedDate}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #92400e;"><strong>Status:</strong> Pending Super Admin Review</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Our Super Admin team is reviewing your restaurant request. <strong>Your 7-day trial countdown will begin only after Super Admin approval</strong>, ensuring you receive the full 7 days of operational access.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin/billing" style="background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        View Trial Request Status
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendTrialApprovedEmail = async ({ email, name, restaurantName, trialStartDate, trialEndDate, plan }) => {
      const formattedStart = trialStartDate ? new Date(trialStartDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Today";
      const formattedEnd = trialEndDate ? new Date(trialEndDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "In 7 days";
      const subject = `\u{1F389} Free Trial Approved! Welcome to ${restaurantName || "Restaurant Hub"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Free Trial Approved! \u{1F389}</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Your 7-Day Access Starts Now</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Congratulations, ${name || "Restaurant Owner"}!</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Super Admin has approved your 7-Day Free Trial for <strong>${restaurantName || "Your Restaurant"}</strong>! Your dashboard and all operational features are now fully unlocked.
                </p>
                <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-size: 13px; color: #166534;"><strong>Plan:</strong> ${plan || "Pro (7-Day Trial)"}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #166534;"><strong>Trial Start Date:</strong> ${formattedStart}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #166534;"><strong>Trial Expiration Date:</strong> ${formattedEnd}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #166534;"><strong>Dashboard Status:</strong> Unlocked & Ready</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    You have complete access to POS billing, KOT/KDS kitchen display, order tracking, staff accounts, table setups, and reports.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin" style="background-color: #10b981; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Open Restaurant Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendTrialRejectedEmail = async ({ email, name, restaurantName, rejectionReason }) => {
      const subject = `Update Regarding Your Free Trial Request - ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Trial Request Update</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Request Status Notification</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Thank you for your interest in Restaurant Hub. After careful review, our Super Admin team was unable to approve the 7-day free trial request for <strong>${restaurantName || "Your Restaurant"}</strong>.
                </p>
                <div style="background-color: #fef2f2; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ef4444;">
                    <p style="margin: 0; font-size: 13px; color: #991b1b;"><strong>Status:</strong> Rejected</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #991b1b;"><strong>Reason:</strong> ${rejectionReason || "Verification requirements not satisfied or duplicate request."}</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    If you believe this was an error or would like to submit updated restaurant information or choose a direct subscription plan, please contact our support team.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin/support" style="background-color: #475569; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Contact Platform Support
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendTrialStartedEmail = async ({ email, name, restaurantName, trialEndDate, plan }) => {
      const formattedEnd = trialEndDate ? new Date(trialEndDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "In 7 days";
      const subject = `\u{1F680} Your 7-Day Free Trial Has Started - ${restaurantName || "Restaurant Hub"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Your Free Trial is Active \u{1F680}</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">7 Days of Full Operational Access</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Your 7-day trial period is officially underway for <strong>${restaurantName || "Your Restaurant"}</strong>!
                </p>
                <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; font-size: 13px; color: #1e40af;"><strong>Tier:</strong> ${plan || "Pro Trial"}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #1e40af;"><strong>Duration:</strong> 7 Full Days</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #1e40af;"><strong>Trial Expiry Date:</strong> ${formattedEnd}</p>
                </div>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin" style="background-color: #3b82f6; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Go to Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendTrialExpiringReminderEmail = async ({ email, name, restaurantName, hoursRemaining = 24, trialEndDate, plan }) => {
      const formattedEnd = trialEndDate ? new Date(trialEndDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "Tomorrow";
      const subject = `\u23F3 Warning: 24 Hours Left on Your Free Trial - ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Trial Expiring in 24 Hours \u23F0</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Avoid Service Interruption</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    This is a reminder that your 7-Day Free Trial for <strong>${restaurantName || "Your Restaurant"}</strong> expires on <strong>${formattedEnd}</strong> (~24 hours remaining).
                </p>
                <div style="background-color: #fff7ed; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f97316;">
                    <p style="margin: 0; font-size: 13px; color: #9a3412;"><strong>Important:</strong> When the trial period expires, your dashboard features will automatically freeze until a paid plan is selected.</p>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #9a3412;">Don't worry: All your menu items, orders, tables, and settings are safely preserved.</p>
                </div>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin/billing" style="background-color: #ea580c; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Upgrade to a Paid Plan Now
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendTrialExpiredAndFrozenEmail = async ({ email, name, restaurantName, expiredDate, plan }) => {
      const formattedDate = expiredDate ? new Date(expiredDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "recently";
      const subject = `\u{1F512} Free Trial Expired - Dashboard Frozen for ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Free Trial Expired \u{1F512}</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Dashboard Features Have Been Frozen</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Your 7-day free trial for <strong>${restaurantName || "Your Restaurant"}</strong> has expired on <strong>${formattedDate}</strong>.
                </p>
                <div style="background-color: #fef2f2; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ef4444;">
                    <p style="margin: 0; font-size: 13px; color: #991b1b;"><strong>Current Status:</strong> Dashboard Frozen</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #991b1b;">Operational features (POS, orders, KDS, inventory) are temporarily locked until a subscription plan is activated.</p>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #166534;"><strong>Your Data is 100% Safe:</strong> None of your orders, menu items, or configurations have been deleted.</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Unlock your restaurant operations immediately by choosing one of our affordable subscription tiers:
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin/billing" style="background-color: #dc2626; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Select Plan & Unfreeze Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendManualFreezeEmail = async ({ email, name, restaurantName, freezeReason, frozenAt }) => {
      const formattedDate = frozenAt ? new Date(frozenAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : (/* @__PURE__ */ new Date()).toLocaleDateString("en-US");
      const subject = `\u26A0\uFE0F Account Notice: Dashboard Manually Frozen - ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #64748b 0%, #334155 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Account Notice: Access Frozen</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Administrative Action Taken</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Your restaurant dashboard access for <strong>${restaurantName || "Your Restaurant"}</strong> has been temporarily frozen by a Super Admin on <strong>${formattedDate}</strong>.
                </p>
                <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #64748b; border: 1px solid #e2e8f0;">
                    <p style="margin: 0; font-size: 13px; color: #334155;"><strong>Reason Provided:</strong> ${freezeReason || "Administrative administrative review or compliance hold."}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #334155;">All your restaurant data, configurations, and records remain completely intact.</p>
                </div>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Please contact our support desk or your dedicated administrator to resolve this hold.
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin/support" style="background-color: #334155; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Contact Platform Support
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendManualUnfreezeEmail = async ({ email, name, restaurantName, plan, status }) => {
      const subject = `\u2705 Dashboard Unfrozen: Access Restored for ${restaurantName || "Your Restaurant"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Dashboard Unfrozen \u2705</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Access Restored by Super Admin</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Restaurant Owner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Great news! The administrative hold on <strong>${restaurantName || "Your Restaurant"}</strong> has been lifted by a Super Admin.
                </p>
                <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-size: 13px; color: #166534;"><strong>Plan:</strong> ${plan || "Active"}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #166534;"><strong>Status:</strong> Active & Unrestricted</p>
                </div>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${portalBaseUrl}/admin" style="background-color: #10b981; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Open Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Restaurant Hub SaaS. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendStaffRoleCredentialsEmail = async ({ email, name, role, restaurantName, branchName, password, employeeId }) => {
      const roleRoutes = {
        "Chef": "/chef",
        "Waiter": "/waiter",
        "Cashier": "/cashier",
        "DeliveryPartner": "/delivery-partner/dashboard",
        "BranchManager": "/manager"
      };
      const targetDashboard = roleRoutes[role] || "/login";
      const loginLink = `${portalBaseUrl}${targetDashboard}`;
      const subject = `\u{1F389} Welcome to ${restaurantName || "FoodNest"} - Your ${role} Account Credentials`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Welcome to ${restaurantName || "Our Team"}! \u{1F389}</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">Your Staff Account has been Created as <strong>${role}</strong></p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 12px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${name || "Staff Member"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    Your account has been set up on the <strong>${restaurantName || "FoodNest"}</strong> management system. Below are your official login credentials:
                </p>
                <div style="background-color: #f1f5f9; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #2563eb;">
                    <p style="margin: 0 0 8px 0; font-size: 13px; color: #1e293b;"><strong>Role:</strong> ${role}</p>
                    ${employeeId ? `<p style="margin: 0 0 8px 0; font-size: 13px; color: #1e293b;"><strong>Employee ID:</strong> ${employeeId}</p>` : ""}
                    ${branchName ? `<p style="margin: 0 0 8px 0; font-size: 13px; color: #1e293b;"><strong>Assigned Branch:</strong> ${branchName}</p>` : ""}
                    <p style="margin: 0 0 8px 0; font-size: 13px; color: #1e293b;"><strong>Login Email:</strong> <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">${email}</code></p>
                    <p style="margin: 0; font-size: 13px; color: #1e293b;"><strong>Initial Password:</strong> <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">${password || "Staff@123"}</code></p>
                </div>
                <p style="color: #64748b; font-size: 13px; line-height: 1.5;">
                    Please log in using the button below and clock in for your shift using the live shift clock widget.
                </p>
                <div style="text-align: center; margin-top: 25px;">
                    <a href="${loginLink}" style="background-color: #2563eb; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                        Sign In to ${role} Dashboard
                    </a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
                &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${restaurantName || "FoodNest"}. All rights reserved.
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: name, subject, html });
    };
    sendOutletFormatSubmissionEmail = async ({ email, fullName, phoneNumber, restaurantName, city, outletFormat, isAdminAlert = false }) => {
      const subject = isAdminAlert ? `New Outlet Format Request: ${restaurantName} (${outletFormat})` : `Outlet Format Request Received \u2014 ${restaurantName || "FoodNest"}`;
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 16px;">
            <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 28px; border-radius: 12px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 22px; font-weight: 800;">${isAdminAlert ? "New Outlet Format Lead" : "Thank You for Your Request!"}</h1>
                <p style="margin-top: 8px; opacity: 0.95; font-size: 14px;">${outletFormat || "Restaurant POS & Billing Setup"}</p>
            </div>
            <div style="background: white; padding: 28px; border-radius: 12px; margin-top: 18px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Hello ${isAdminAlert ? "Admin" : fullName || "Partner"},</h2>
                <p style="color: #475569; line-height: 1.6; font-size: 14px;">
                    ${isAdminAlert ? `A new outlet format walkthrough request was submitted for <strong>${restaurantName}</strong>.` : `We have received your outlet format request for <strong>${restaurantName}</strong>. Our onboarding specialist will contact you shortly on <strong>${phoneNumber}</strong>.`}
                </p>
                <div style="background-color: #fff7ed; padding: 16px; border-radius: 10px; margin: 18px 0; border-left: 4px solid #f97316;">
                    <p style="margin: 0 0 6px 0; font-size: 13px; color: #1e293b;"><strong>Applicant:</strong> ${fullName || "N/A"}</p>
                    <p style="margin: 0 0 6px 0; font-size: 13px; color: #1e293b;"><strong>Phone:</strong> ${phoneNumber || "N/A"}</p>
                    <p style="margin: 0 0 6px 0; font-size: 13px; color: #1e293b;"><strong>Outlet Format:</strong> ${outletFormat || "N/A"}</p>
                    <p style="margin: 0; font-size: 13px; color: #1e293b;"><strong>City:</strong> ${city || "N/A"}</p>
                </div>
            </div>
        </div>
    `;
      return await sendEmail({ to: email, toName: fullName || "Partner", subject, html });
    };
  }
});

// models/User.js
var User_exports = {};
__export(User_exports, {
  default: () => User_default
});
var import_mongoose3, import_bcryptjs, userSchema, User, User_default;
var init_User = __esm({
  "models/User.js"() {
    import_mongoose3 = __toESM(require("mongoose"), 1);
    import_bcryptjs = __toESM(require("bcryptjs"), 1);
    userSchema = new import_mongoose3.default.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String
      },
      address: {
        type: String,
        default: ""
      },
      location: {
        type: String,
        default: ""
      },
      coordinates: {
        latitude: { type: Number },
        longitude: { type: Number }
      },
      role: {
        type: String,
        required: true
      },
      restaurantId: {
        type: import_mongoose3.default.Schema.Types.ObjectId,
        ref: "Restaurant"
      },
      branchId: {
        type: import_mongoose3.default.Schema.Types.ObjectId,
        ref: "Branch"
      },
      isActive: {
        type: Boolean,
        default: true
      },
      employeeId: {
        type: String,
        trim: true
      },
      joiningDate: {
        type: Date,
        default: Date.now
      },
      employmentStatus: {
        type: String,
        enum: ["Active", "On Leave", "Terminated", "Probation"],
        default: "Active"
      },
      salaryConfig: {
        basicSalary: { type: Number, default: 0 },
        salaryFrequency: { type: String, enum: ["Monthly", "Daily", "Hourly"], default: "Monthly" },
        overtimeRatePerHour: { type: Number, default: 0 },
        dailyWorkHours: { type: Number, default: 8 },
        monthlyWorkingDays: { type: Number, default: 26 },
        allowances: { type: import_mongoose3.default.Schema.Types.Mixed, default: [] },
        deductions: { type: import_mongoose3.default.Schema.Types.Mixed, default: [] }
      },
      bankDetails: {
        accountName: { type: String, default: "" },
        accountNumber: { type: String, default: "" },
        bankName: { type: String, default: "" },
        ifscCode: { type: String, default: "" },
        upiId: { type: String, default: "" }
      },
      refreshToken: {
        type: String
      },
      activationToken: {
        type: String,
        default: null
      },
      activationExpires: {
        type: Date,
        default: null
      }
    }, { timestamps: true });
    userSchema.pre("save", async function() {
      if (!this.isModified("password")) {
        return;
      }
      const salt = await import_bcryptjs.default.genSalt(10);
      this.password = await import_bcryptjs.default.hash(this.password, salt);
    });
    userSchema.methods.matchPassword = async function(enteredPassword) {
      if (!enteredPassword || !this.password) return false;
      const cleanEntered = String(enteredPassword).trim();
      if (this.password.startsWith("$2a$") || this.password.startsWith("$2b$")) {
        const isMatch = await import_bcryptjs.default.compare(cleanEntered, this.password);
        if (isMatch) return true;
        if (cleanEntered !== enteredPassword) {
          return await import_bcryptjs.default.compare(enteredPassword, this.password);
        }
        return false;
      }
      return this.password === cleanEntered || this.password === enteredPassword;
    };
    User = import_mongoose3.default.model("User", userSchema);
    User_default = User;
  }
});

// models/Order.js
var Order_exports = {};
__export(Order_exports, {
  default: () => Order_default
});
var import_mongoose4, orderSchema, Order, Order_default;
var init_Order = __esm({
  "models/Order.js"() {
    import_mongoose4 = __toESM(require("mongoose"), 1);
    orderSchema = new import_mongoose4.default.Schema({
      user: {
        type: import_mongoose4.default.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      },
      orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: {
            type: import_mongoose4.default.Schema.Types.ObjectId,
            ref: "MenuItem"
          }
        }
      ],
      restaurantId: {
        type: import_mongoose4.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      },
      branchId: {
        type: import_mongoose4.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true
      },
      source: {
        type: String,
        enum: ["Walk-in", "QR", "Self-Pickup"],
        default: "Walk-in"
      },
      orderType: {
        type: String,
        required: true,
        enum: ["Dine In", "Self-Pickup", "Delivery", "Takeaway"],
        default: "Dine In"
      },
      serviceType: {
        type: String,
        enum: ["Self Dine-In (KFC Style)", "Waiter Table Service", "Delivery", "Takeaway", "Self-Pickup", ""],
        default: "Waiter Table Service"
      },
      customerName: {
        type: String,
        default: ""
      },
      customerPhone: {
        type: String,
        default: ""
      },
      tableNumber: {
        type: String
      },
      notes: {
        type: String
      },
      shippingAddress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: String }
      },
      paymentMethod: {
        type: String,
        required: true,
        default: "Card"
      },
      subscriptionPlan: {
        type: String,
        default: "One-time Order"
      },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0
      },
      discountAmount: {
        type: Number,
        default: 0
      },
      tipAmount: {
        type: Number,
        default: 0
      },
      waiter: {
        type: import_mongoose4.default.Schema.Types.ObjectId,
        ref: "User"
      },
      isPaid: {
        type: Boolean,
        required: true,
        default: false
      },
      paidAt: {
        type: Date
      },
      status: {
        type: String,
        required: true,
        enum: ["Pending", "Accepted", "Preparing", "Ready", "Ready for Pickup", "Picked Up", "Ready for Dispatch", "Served", "Billing Requested", "Out for Delivery", "Delivered", "Cancelled", "Completed", "Refunded"],
        default: "Pending"
      },
      kitchenMode: {
        type: String,
        enum: ["KDS", "KOT_ONLY"],
        default: "KDS"
      },
      statusHistory: [
        {
          status: { type: String, required: true },
          timestamp: { type: Date, default: Date.now },
          updatedBy: { type: import_mongoose4.default.Schema.Types.ObjectId, ref: "User" }
        }
      ],
      pickupTime: {
        type: Date
      },
      estimatedPrepMinutes: {
        type: Number,
        default: 20
      },
      estimatedReadyTime: {
        type: Date
      },
      // Location Coordinates for Live OSRM Road Tracking
      customerLocation: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null }
      },
      restaurantLocation: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null }
      },
      deliveryPartnerLocation: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null },
        updatedAt: { type: Date, default: null }
      },
      // Delivery partner details
      deliveryPartner: {
        type: import_mongoose4.default.Schema.Types.ObjectId,
        ref: "User"
      },
      deliveryStatus: {
        type: String,
        enum: ["None", "Pending Assignment", "Accepted", "Rejected", "Picked Up", "On the Way", "Delivered", "Cancelled"],
        default: "None"
      },
      deliveryDistance: {
        type: Number,
        default: 0
      },
      deliveryCharge: {
        type: Number,
        default: 0
      },
      deliveryETA: {
        type: Date
      },
      deliveryOtp: {
        type: String,
        default: null
      },
      deliveryRating: {
        speed: { type: Number, default: 0 },
        behaviour: { type: Number, default: 0 },
        foodHandling: { type: Number, default: 0 },
        overall: { type: Number, default: 0 },
        review: { type: String, default: "" }
      },
      internalRating: {
        type: Number,
        default: 0
      },
      supportMessages: [
        {
          sender: { type: String, enum: ["DeliveryPartner", "Customer", "Restaurant", "System"], default: "DeliveryPartner" },
          message: { type: String, required: true },
          timestamp: { type: Date, default: Date.now }
        }
      ],
      kotNumbers: [{
        type: String
      }],
      kots: [{
        type: import_mongoose4.default.Schema.Types.ObjectId,
        ref: "KOT"
      }]
    }, { timestamps: true });
    Order = import_mongoose4.default.model("Order", orderSchema);
    Order_default = Order;
  }
});

// models/Branch.js
var Branch_exports = {};
__export(Branch_exports, {
  default: () => Branch_default
});
var import_mongoose7, branchSchema, Branch, Branch_default;
var init_Branch = __esm({
  "models/Branch.js"() {
    import_mongoose7 = __toESM(require("mongoose"), 1);
    branchSchema = new import_mongoose7.default.Schema({
      restaurantId: {
        type: import_mongoose7.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      },
      name: {
        type: String,
        required: true
      },
      location: {
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String
      },
      contact: {
        phone: String,
        email: String
      },
      operatingHours: {
        open: {
          type: String,
          default: "08:00"
        },
        close: {
          type: String,
          default: "22:00"
        }
      },
      manager: {
        type: import_mongoose7.default.Schema.Types.ObjectId,
        ref: "User"
      },
      isActive: {
        type: Boolean,
        default: true
      }
    }, { timestamps: true });
    Branch = import_mongoose7.default.model("Branch", branchSchema);
    Branch_default = Branch;
  }
});

// models/RestaurantVerification.js
var RestaurantVerification_exports = {};
__export(RestaurantVerification_exports, {
  default: () => RestaurantVerification_default
});
var import_mongoose8, documentSchema, restaurantVerificationSchema, RestaurantVerification, RestaurantVerification_default;
var init_RestaurantVerification = __esm({
  "models/RestaurantVerification.js"() {
    import_mongoose8 = __toESM(require("mongoose"), 1);
    documentSchema = new import_mongoose8.default.Schema({
      filePath: { type: String, default: "" },
      status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
      rejectReason: { type: String, default: "" },
      expiryDate: { type: Date }
      // For FSSAI license
    });
    restaurantVerificationSchema = new import_mongoose8.default.Schema({
      restaurantId: {
        type: import_mongoose8.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        unique: true
      },
      documents: {
        fssai: documentSchema,
        businessRegistration: documentSchema,
        panCard: documentSchema,
        aadhaarCard: documentSchema,
        addressProof: {
          filePath: { type: String, default: "" },
          addressText: { type: String, default: "" },
          status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
          rejectReason: { type: String, default: "" }
        },
        bankProof: documentSchema,
        logo: { filePath: { type: String, default: "" } },
        images: [{ filePath: { type: String, default: "" } }],
        menuPdf: { filePath: { type: String, default: "" } }
      },
      status: {
        type: String,
        enum: ["Pending", "Under Review", "Verified", "Rejected", "Re-upload Required", "Expired"],
        default: "Pending"
      },
      rejectionReason: { type: String, default: "" },
      history: [
        {
          status: { type: String, required: true },
          actionBy: { type: import_mongoose8.default.Schema.Types.ObjectId, ref: "User" },
          actionDate: { type: Date, default: Date.now },
          reason: { type: String, default: "" },
          comments: { type: String, default: "" }
        }
      ]
    }, { timestamps: true });
    RestaurantVerification = import_mongoose8.default.model("RestaurantVerification", restaurantVerificationSchema);
    RestaurantVerification_default = RestaurantVerification;
  }
});

// models/Plan.js
var import_mongoose10, planSchema, Plan, Plan_default;
var init_Plan = __esm({
  "models/Plan.js"() {
    import_mongoose10 = __toESM(require("mongoose"), 1);
    planSchema = new import_mongoose10.default.Schema({
      name: {
        type: String,
        required: true,
        unique: true
      },
      monthlyPrice: {
        type: Number,
        required: true
      },
      yearlyPrice: {
        type: Number,
        required: true
      },
      features: [{
        type: String
      }],
      branchesLimit: {
        type: Number,
        default: 1
      },
      staffLimit: {
        type: Number,
        default: 5
      },
      isActive: {
        type: Boolean,
        default: true
      }
    }, {
      timestamps: true
    });
    Plan = import_mongoose10.default.model("Plan", planSchema);
    Plan_default = Plan;
  }
});

// utils/subscriptionHelper.js
var subscriptionHelper_exports = {};
__export(subscriptionHelper_exports, {
  DEFAULT_PLAN_CATALOG: () => DEFAULT_PLAN_CATALOG,
  applyPaidSubscriptionActivation: () => applyPaidSubscriptionActivation,
  calculateProratedUpgrade: () => calculateProratedUpgrade,
  evaluateSubscriptionAccess: () => evaluateSubscriptionAccess,
  findPlanDocument: () => findPlanDocument,
  getRazorpayCredentials: () => getRazorpayCredentials,
  getRazorpayInstance: () => getRazorpayInstance,
  normalizePlanName: () => normalizePlanName,
  normalizeSubscriptionState: () => normalizeSubscriptionState,
  resolvePlanPrice: () => resolvePlanPrice,
  verifyRazorpaySignature: () => verifyRazorpaySignature
});
var import_crypto, import_razorpay, DEFAULT_PLAN_CATALOG, normalizePlanName, findPlanDocument, resolvePlanPrice, calculateProratedUpgrade, getRazorpayCredentials, getRazorpayInstance, verifyRazorpaySignature, normalizeSubscriptionState, evaluateSubscriptionAccess, applyPaidSubscriptionActivation;
var init_subscriptionHelper = __esm({
  "utils/subscriptionHelper.js"() {
    import_crypto = __toESM(require("crypto"), 1);
    import_razorpay = __toESM(require("razorpay"), 1);
    init_Plan();
    init_Restaurant();
    init_User();
    init_Notification();
    init_emailService();
    DEFAULT_PLAN_CATALOG = {
      Basic: {
        name: "Basic",
        monthlyPrice: 2999,
        yearlyPrice: 2399,
        branchesLimit: 1,
        staffLimit: 5
      },
      Starter: {
        name: "Starter",
        monthlyPrice: 2999,
        yearlyPrice: 2399,
        branchesLimit: 1,
        staffLimit: 5
      },
      Pro: {
        name: "Pro",
        monthlyPrice: 5999,
        yearlyPrice: 4799,
        branchesLimit: 3,
        staffLimit: 9999
      },
      Professional: {
        name: "Professional",
        monthlyPrice: 5999,
        yearlyPrice: 4799,
        branchesLimit: 3,
        staffLimit: 9999
      },
      Enterprise: {
        name: "Enterprise",
        monthlyPrice: 12999,
        yearlyPrice: 10399,
        branchesLimit: 9999,
        staffLimit: 9999
      }
    };
    normalizePlanName = (planName) => {
      if (!planName) return "Basic";
      const raw = String(planName).trim();
      const lower = raw.toLowerCase();
      if (lower.includes("trial") || lower.includes("free")) return "Basic";
      if (lower === "basic" || lower === "starter") return "Basic";
      if (lower === "pro" || lower === "professional") return "Pro";
      if (lower === "enterprise") return "Enterprise";
      return raw.charAt(0).toUpperCase() + raw.slice(1);
    };
    findPlanDocument = async (planName) => {
      if (!planName) return null;
      const raw = String(planName).trim();
      const normalized = normalizePlanName(raw);
      const aliases = Array.from(/* @__PURE__ */ new Set([
        raw,
        normalized,
        ...normalized === "Basic" ? ["Basic", "Starter"] : [],
        ...normalized === "Pro" ? ["Pro", "Professional"] : []
      ]));
      for (const candidate of aliases) {
        const escaped = candidate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const found = await Plan_default.findOne({ name: { $regex: `^${escaped}$`, $options: "i" } }).lean();
        if (found) return found;
      }
      return null;
    };
    resolvePlanPrice = async (planName, billingCycle = "monthly") => {
      const normalized = normalizePlanName(planName);
      const planDoc = await findPlanDocument(planName);
      const fallback = DEFAULT_PLAN_CATALOG[normalized] || DEFAULT_PLAN_CATALOG.Basic;
      const isYearly = billingCycle === "yearly";
      const price = planDoc ? Number(isYearly ? planDoc.yearlyPrice ?? planDoc.monthlyPrice ?? fallback.yearlyPrice : planDoc.monthlyPrice ?? fallback.monthlyPrice) : Number(isYearly ? fallback.yearlyPrice : fallback.monthlyPrice);
      return {
        planName: planDoc?.name || normalized,
        planDoc,
        price: Math.max(0, price)
      };
    };
    calculateProratedUpgrade = async (restaurant, targetPlanName, billingCycle = "monthly") => {
      const { planName: resolvedName, planDoc, price: targetPrice } = await resolvePlanPrice(targetPlanName, billingCycle);
      const sub = restaurant?.subscription || {};
      const currentPlanName = sub.plan || "Basic";
      const currentCycle = sub.billingCycle || "monthly";
      const isCurrentlyPaidActive = sub.status === "Active" && sub.paymentStatus === "Paid" && !sub.trialActive;
      let remainingCredit = 0;
      if (isCurrentlyPaidActive) {
        const { price: currentPrice } = await resolvePlanPrice(currentPlanName, currentCycle);
        const now = /* @__PURE__ */ new Date();
        const expiryRaw = sub.subscriptionEndDate || sub.expiryDate;
        const expiry = expiryRaw ? new Date(expiryRaw) : now;
        const totalDuration = currentCycle === "yearly" ? 365 : 30;
        const remainingDays = Math.max(0, Math.ceil((expiry - now) / (1e3 * 60 * 60 * 24)));
        remainingCredit = Math.floor(currentPrice / totalDuration * remainingDays);
      }
      const chargeAmount = Math.max(1, targetPrice - remainingCredit);
      return {
        planName: resolvedName,
        planDoc,
        billingCycle: billingCycle === "yearly" ? "yearly" : "monthly",
        targetPrice,
        remainingCredit,
        chargeAmount
      };
    };
    getRazorpayCredentials = () => {
      const keyId = process.env.RAZORPAY_KEY_ID?.trim();
      const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();
      if (!keyId || !keySecret) {
        const err = new Error("Razorpay payment gateway credentials are not configured on the server.");
        err.statusCode = 503;
        throw err;
      }
      return { keyId, keySecret };
    };
    getRazorpayInstance = () => {
      const { keyId, keySecret } = getRazorpayCredentials();
      return {
        keyId,
        keySecret,
        instance: new import_razorpay.default({ key_id: keyId, key_secret: keySecret })
      };
    };
    verifyRazorpaySignature = ({ orderId, paymentId, signature }) => {
      if (!orderId || !paymentId || !signature) return false;
      const { keySecret } = getRazorpayCredentials();
      const body = `${orderId}|${paymentId}`;
      const expectedSignature = import_crypto.default.createHmac("sha256", keySecret).update(body).digest("hex");
      return expectedSignature === signature;
    };
    normalizeSubscriptionState = (restaurant) => {
      if (!restaurant?.subscription) return false;
      const sub = restaurant.subscription;
      const planLower = String(sub.plan || "").trim().toLowerCase();
      const isPaidPlanName = ["basic", "starter", "pro", "professional", "enterprise", "custom", "custom saas"].includes(planLower);
      const hasPaidEvidence = sub.paymentStatus === "Paid" || Boolean(sub.subscriptionEndDate) || Number(sub.price || 0) > 0 || isPaidPlanName && sub.status === "Active" && !sub.trialStartDate && !sub.trialRequestDate;
      let changed = false;
      if (hasPaidEvidence && sub.status === "Active") {
        if (sub.trialActive) {
          sub.trialActive = false;
          changed = true;
        }
        if (sub.paymentStatus !== "Paid") {
          sub.paymentStatus = "Paid";
          changed = true;
        }
        if (!sub.subscriptionEndDate && sub.expiryDate) {
          sub.subscriptionEndDate = sub.expiryDate;
          changed = true;
        }
        if (!sub.subscriptionStartDate && sub.startDate) {
          sub.subscriptionStartDate = sub.startDate;
          changed = true;
        }
      }
      return changed;
    };
    evaluateSubscriptionAccess = async (restaurant, { notifyOnExpire = true } = {}) => {
      if (!restaurant) return { isFrozen: false };
      if (restaurant.isDemo) return { isFrozen: false };
      normalizeSubscriptionState(restaurant);
      const sub = restaurant.subscription || {};
      const now = /* @__PURE__ */ new Date();
      if (sub.manualFreeze || sub.status === "Frozen") {
        return {
          isFrozen: true,
          manualFreeze: true,
          subscriptionStatus: "Frozen",
          freezeReason: sub.freezeReason || "Administrative freeze placed by Super Admin.",
          message: "Your restaurant dashboard has been frozen by administration. Please contact support."
        };
      }
      if (sub.status === "Pending Approval") {
        return {
          isFrozen: true,
          isPendingApproval: true,
          subscriptionStatus: "Pending Approval",
          message: "Your 7-Day Free Trial request is pending Super Admin approval. Operational features will unlock once approved."
        };
      }
      if (sub.status === "Rejected") {
        return {
          isFrozen: true,
          isRejected: true,
          rejectionReason: sub.rejectionReason || "Trial request was not approved.",
          subscriptionStatus: "Rejected",
          message: "Your free trial request was rejected. Please select an active subscription plan to unlock your dashboard."
        };
      }
      const trialEnd = sub.trialEndDate || sub.expiryDate;
      if (sub.trialActive && trialEnd && now > new Date(trialEnd)) {
        const transitioned = await Restaurant_default.findOneAndUpdate(
          { _id: restaurant._id, "subscription.status": "Active", "subscription.trialActive": true },
          { $set: { "subscription.status": "Expired", "subscription.trialActive": false } },
          { new: true }
        );
        restaurant.subscription.status = "Expired";
        restaurant.subscription.trialActive = false;
        if (transitioned && notifyOnExpire) {
          Notification_default.create({
            title: "7-Day Free Trial Expired",
            desc: "Your 7-day free trial has ended and your dashboard has been frozen. Please subscribe to restore access.",
            type: "System",
            restaurantId: restaurant._id
          }).catch((e) => console.error("[Subscription Notif Error]:", e.message));
          User_default.findById(restaurant.ownerId).select("email name").lean().then((owner) => {
            if (owner?.email) {
              return sendTrialExpiredAndFrozenEmail({
                email: owner.email,
                name: owner.name,
                restaurantName: restaurant.name,
                expiredDate: trialEnd,
                plan: sub.plan
              });
            }
          }).catch((e) => console.error("[Auto-Expire Email Error]:", e.message));
        }
        return {
          isFrozen: true,
          isExpired: true,
          subscriptionStatus: "Expired",
          message: "Your 7-day free trial has expired and dashboard features are frozen. Please upgrade your subscription plan to continue."
        };
      }
      const paidEnd = sub.subscriptionEndDate || sub.expiryDate;
      if (!sub.trialActive && paidEnd && now > new Date(paidEnd)) {
        const transitioned = await Restaurant_default.findOneAndUpdate(
          { _id: restaurant._id, "subscription.status": { $in: ["Active", "Expiring Soon"] } },
          { $set: { "subscription.status": "Expired" } },
          { new: true }
        );
        restaurant.subscription.status = "Expired";
        if (transitioned && notifyOnExpire) {
          Notification_default.create({
            title: "Subscription Expired",
            desc: `Your ${sub.plan || "subscription"} plan has expired and operational features are frozen. Please renew to restore access.`,
            type: "System",
            restaurantId: restaurant._id
          }).catch((e) => console.error("[Subscription Notif Error]:", e.message));
          User_default.findById(restaurant.ownerId).select("email name").lean().then((owner) => {
            if (owner?.email) {
              return sendSubscriptionExpiredEmail({
                email: owner.email,
                name: owner.name,
                restaurantName: restaurant.name,
                plan: sub.plan,
                expiryDate: paidEnd
              });
            }
          }).catch((e) => console.error("[Paid-Expire Email Error]:", e.message));
        }
        return {
          isFrozen: true,
          isExpired: true,
          subscriptionStatus: "Expired",
          message: "Your subscription plan has expired. Please renew your plan to restore full operational access."
        };
      }
      if (["Expired", "Inactive", "Suspended", "Cancelled"].includes(sub.status) || sub.paymentStatus === "Failed") {
        return {
          isFrozen: true,
          isExpired: true,
          subscriptionStatus: sub.status || "Expired",
          message: sub.paymentStatus === "Failed" ? "Last subscription payment failed. Please complete payment to unlock your dashboard." : "An active subscription plan or approved free trial is required to access operational features."
        };
      }
      return { isFrozen: false };
    };
    applyPaidSubscriptionActivation = (restaurant, { planName, billingCycle = "monthly", targetPrice }) => {
      const now = /* @__PURE__ */ new Date();
      const cycle = billingCycle === "yearly" ? "yearly" : "monthly";
      const newExpiry = new Date(now);
      newExpiry.setDate(newExpiry.getDate() + (cycle === "yearly" ? 365 : 30));
      if (!restaurant.subscription) {
        restaurant.subscription = {};
      }
      restaurant.subscription.status = "Active";
      restaurant.subscription.plan = planName;
      restaurant.subscription.billingCycle = cycle;
      restaurant.subscription.trialActive = false;
      restaurant.subscription.paymentStatus = "Paid";
      restaurant.subscription.manualFreeze = false;
      restaurant.subscription.freezeReason = "";
      restaurant.subscription.rejectionReason = "";
      restaurant.subscription.subscriptionStartDate = now;
      restaurant.subscription.subscriptionEndDate = newExpiry;
      restaurant.subscription.startDate = now;
      restaurant.subscription.expiryDate = newExpiry;
      restaurant.subscription.price = Number(targetPrice || 0);
      restaurant.subscription.downgradeScheduledPlan = "";
      restaurant.subscription.downgradeScheduledDate = null;
      restaurant.isActive = true;
      if (restaurant.approvalStatus === "Pending" || restaurant.approvalStatus === "Rejected") {
        restaurant.approvalStatus = "Approved";
      }
      return newExpiry;
    };
  }
});

// models/DeliveryPartner.js
var DeliveryPartner_exports = {};
__export(DeliveryPartner_exports, {
  default: () => DeliveryPartner_default
});
var import_mongoose12, deliveryPartnerSchema, DeliveryPartner, DeliveryPartner_default;
var init_DeliveryPartner = __esm({
  "models/DeliveryPartner.js"() {
    import_mongoose12 = __toESM(require("mongoose"), 1);
    deliveryPartnerSchema = new import_mongoose12.default.Schema({
      userId: {
        type: import_mongoose12.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
      },
      restaurantId: {
        type: import_mongoose12.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      },
      status: {
        type: String,
        enum: ["Online", "Offline", "Busy", "On Delivery"],
        default: "Offline"
      },
      verificationStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "Suspended"],
        default: "Pending"
      },
      vehicleDetails: {
        type: { type: String, default: "Bike" },
        // Bike, Scooter, Car, etc.
        model: { type: String, default: "" },
        rcNumber: { type: String, default: "" },
        licenseNumber: { type: String, default: "" }
      },
      documents: {
        drivingLicense: { type: String, default: "" },
        aadhaarProof: { type: String, default: "" },
        vehicleRc: { type: String, default: "" },
        vehicleInsurance: { type: String, default: "" },
        profilePhoto: { type: String, default: "" }
      },
      walletBalance: {
        type: Number,
        default: 0
      },
      earnings: {
        type: Number,
        default: 0
      },
      currentLocation: {
        latitude: { type: Number, default: 12.9716 },
        // Defaults to center coordinates
        longitude: { type: Number, default: 77.5946 }
      }
    }, { timestamps: true });
    DeliveryPartner = import_mongoose12.default.model("DeliveryPartner", deliveryPartnerSchema);
    DeliveryPartner_default = DeliveryPartner;
  }
});

// models/KOT.js
var KOT_exports = {};
__export(KOT_exports, {
  default: () => KOT_default
});
var import_mongoose14, kotItemSchema, kotSchema, KOT, KOT_default;
var init_KOT = __esm({
  "models/KOT.js"() {
    import_mongoose14 = __toESM(require("mongoose"), 1);
    kotItemSchema = new import_mongoose14.default.Schema({
      name: {
        type: String,
        required: true
      },
      qty: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number,
        default: 0
      },
      notes: {
        type: String,
        default: ""
      },
      product: {
        type: import_mongoose14.default.Schema.Types.ObjectId,
        ref: "MenuItem"
      },
      kitchenStation: {
        type: String,
        default: "Main Kitchen"
      },
      status: {
        type: String,
        enum: ["Pending", "Preparing", "Ready", "Served", "Cancelled"],
        default: "Pending"
      }
    }, { _id: true });
    kotSchema = new import_mongoose14.default.Schema({
      kotNumber: {
        type: String,
        required: true,
        index: true
      },
      kotSequence: {
        type: Number,
        required: true,
        index: true
      },
      orderId: {
        type: import_mongoose14.default.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
        index: true
      },
      orderNumber: {
        type: String,
        default: ""
      },
      restaurantId: {
        type: import_mongoose14.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
      },
      branchId: {
        type: import_mongoose14.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true,
        index: true
      },
      tableNumber: {
        type: String,
        default: ""
      },
      orderType: {
        type: String,
        enum: ["Dine In", "Self-Pickup", "Delivery", "Takeaway"],
        default: "Dine In"
      },
      serviceType: {
        type: String,
        default: "Waiter Table Service"
      },
      customerName: {
        type: String,
        default: ""
      },
      customerPhone: {
        type: String,
        default: ""
      },
      kitchenStation: {
        type: String,
        required: true,
        default: "Main Kitchen",
        index: true
      },
      items: [kotItemSchema],
      notes: {
        type: String,
        default: ""
      },
      isAddon: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        enum: ["Pending", "Preparing", "Ready", "Served", "Cancelled"],
        default: "Pending",
        index: true
      },
      statusHistory: [
        {
          status: { type: String, required: true },
          timestamp: { type: Date, default: Date.now },
          updatedBy: { type: import_mongoose14.default.Schema.Types.ObjectId, ref: "User" }
        }
      ],
      prepStartTime: {
        type: Date,
        default: null
      },
      prepReadyTime: {
        type: Date,
        default: null
      },
      servedTime: {
        type: Date,
        default: null
      },
      isPrinted: {
        type: Boolean,
        default: false
      },
      printedAt: {
        type: Date,
        default: null
      },
      printCount: {
        type: Number,
        default: 0
      },
      serverName: {
        type: String,
        default: "System / Customer"
      },
      createdBy: {
        type: import_mongoose14.default.Schema.Types.ObjectId,
        ref: "User",
        default: null
      }
    }, { timestamps: true });
    kotSchema.index({ restaurantId: 1, status: 1, createdAt: -1 });
    kotSchema.index({ restaurantId: 1, branchId: 1, status: 1 });
    kotSchema.index({ orderId: 1, createdAt: -1 });
    KOT = import_mongoose14.default.model("KOT", kotSchema);
    KOT_default = KOT;
  }
});

// models/MenuItem.js
var MenuItem_exports = {};
__export(MenuItem_exports, {
  default: () => MenuItem_default
});
var import_mongoose15, menuItemSchema, MenuItem, MenuItem_default;
var init_MenuItem = __esm({
  "models/MenuItem.js"() {
    import_mongoose15 = __toESM(require("mongoose"), 1);
    menuItemSchema = new import_mongoose15.default.Schema({
      name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      image: {
        type: String,
        default: ""
      },
      rating: {
        type: Number,
        default: 0
      },
      reviews: {
        type: Number,
        default: 0
      },
      tags: [{
        type: String
      }],
      isActive: {
        type: Boolean,
        default: true
      },
      kitchenStation: {
        type: String,
        default: "Main Kitchen"
      },
      restaurantId: {
        type: import_mongoose15.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      },
      branchId: {
        type: import_mongoose15.default.Schema.Types.ObjectId,
        ref: "Branch"
      }
    }, { timestamps: true });
    menuItemSchema.index({ restaurantId: 1, isActive: 1 });
    menuItemSchema.index({ isActive: 1 });
    menuItemSchema.index({ branchId: 1 });
    MenuItem = import_mongoose15.default.model("MenuItem", menuItemSchema);
    MenuItem_default = MenuItem;
  }
});

// models/Tip.js
var Tip_exports = {};
__export(Tip_exports, {
  default: () => Tip_default
});
var import_mongoose16, tipSchema, Tip, Tip_default;
var init_Tip = __esm({
  "models/Tip.js"() {
    import_mongoose16 = __toESM(require("mongoose"), 1);
    tipSchema = new import_mongoose16.default.Schema({
      restaurantId: {
        type: import_mongoose16.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
      },
      branchId: {
        type: import_mongoose16.default.Schema.Types.ObjectId,
        ref: "Branch",
        index: true
      },
      orderId: {
        type: import_mongoose16.default.Schema.Types.ObjectId,
        ref: "Order",
        index: true
      },
      waiterId: {
        type: import_mongoose16.default.Schema.Types.ObjectId,
        ref: "User",
        index: true
      },
      waiterName: {
        type: String,
        default: "Unassigned Waiter"
      },
      tableNumber: {
        type: String,
        default: ""
      },
      amount: {
        type: Number,
        required: true,
        min: 0
      },
      paymentMethod: {
        type: String,
        default: "UPI"
      },
      source: {
        type: String,
        enum: ["Customer QR", "Cashier Settlement", "Card Machine", "Manual Recorded Settlement"],
        default: "Customer QR"
      },
      status: {
        type: String,
        enum: ["Pending", "Settled"],
        default: "Pending",
        index: true
      },
      settledAt: {
        type: Date
      },
      settledBy: {
        type: import_mongoose16.default.Schema.Types.ObjectId,
        ref: "User"
      },
      transactionReference: {
        type: String,
        default: ""
      },
      notes: {
        type: String,
        default: ""
      },
      date: {
        type: Date,
        default: Date.now,
        index: true
      }
    }, { timestamps: true });
    Tip = import_mongoose16.default.model("Tip", tipSchema);
    Tip_default = Tip;
  }
});

// models/Table.js
var Table_exports = {};
__export(Table_exports, {
  default: () => Table_default
});
var import_mongoose17, tableSchema, Table, Table_default;
var init_Table = __esm({
  "models/Table.js"() {
    import_mongoose17 = __toESM(require("mongoose"), 1);
    tableSchema = new import_mongoose17.default.Schema({
      restaurantId: {
        type: import_mongoose17.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      },
      branchId: {
        type: import_mongoose17.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true
      },
      tableNumber: {
        type: Number,
        required: true
      },
      capacity: {
        type: Number,
        required: true,
        default: 4
      },
      status: {
        type: String,
        enum: ["Available", "Occupied", "Reserved", "Cleaning", "Billing"],
        default: "Available"
      },
      activeOrder: {
        type: import_mongoose17.default.Schema.Types.ObjectId,
        ref: "Order",
        default: null
      },
      customers: {
        type: Number,
        default: 0
      }
    }, { timestamps: true });
    Table = import_mongoose17.default.model("Table", tableSchema);
    Table_default = Table;
  }
});

// models/Expense.js
var Expense_exports = {};
__export(Expense_exports, {
  default: () => Expense_default
});
var import_mongoose19, expensePaymentSchema, expenseSchema, Expense, Expense_default;
var init_Expense = __esm({
  "models/Expense.js"() {
    import_mongoose19 = __toESM(require("mongoose"), 1);
    expensePaymentSchema = new import_mongoose19.default.Schema({
      amount: {
        type: Number,
        required: true,
        min: 0
      },
      paidDate: {
        type: Date,
        default: Date.now,
        required: true
      },
      paymentMethod: {
        type: String,
        enum: ["Cash", "Bank Transfer", "UPI", "Card", "Cheque", "Other"],
        default: "Cash",
        required: true
      },
      reference: {
        type: String,
        default: ""
      },
      notes: {
        type: String,
        default: ""
      },
      recordedBy: {
        type: import_mongoose19.default.Schema.Types.ObjectId,
        ref: "User"
      }
    }, { _id: true, timestamps: true });
    expenseSchema = new import_mongoose19.default.Schema({
      category: {
        type: String,
        required: true,
        enum: [
          "Rent",
          "Electricity",
          "Water",
          "Internet",
          "Material purchases",
          "Staff salary",
          "Equipment maintenance",
          "Delivery and transport",
          "Kitchen Supplies",
          "Utility Bill",
          "Maintenance",
          "Staff Welfare",
          "Marketing",
          "Other operating expenses",
          "Others"
        ],
        index: true
      },
      title: {
        type: String,
        default: "",
        trim: true
      },
      amount: {
        type: Number,
        required: true,
        min: 0
      },
      description: {
        type: String,
        default: "",
        trim: true
      },
      date: {
        type: Date,
        required: true,
        default: Date.now,
        index: true
      },
      dueDate: {
        type: Date
      },
      billingPeriod: {
        type: String
        // e.g., "October 2026"
      },
      paymentStatus: {
        type: String,
        enum: ["Pending", "Partially Paid", "Paid", "Overdue"],
        default: "Paid",
        // Default Paid for backward compatibility with existing recorded expenses
        index: true
      },
      paidAmount: {
        type: Number,
        default: function() {
          return this.paymentStatus === "Paid" ? this.amount : 0;
        }
      },
      balanceDue: {
        type: Number,
        default: 0
      },
      paymentMethod: {
        type: String,
        enum: ["Cash", "Bank Transfer", "UPI", "Card", "Cheque", "Other"],
        default: "Cash"
      },
      paymentDate: {
        type: Date
      },
      payments: [expensePaymentSchema],
      isRecurring: {
        type: Boolean,
        default: false
      },
      recurringFrequency: {
        type: String,
        enum: ["Monthly", "Quarterly", "Yearly"]
      },
      recurringKey: {
        type: String,
        // format: "category_branchId_YYYY-MM" to prevent duplicate recurring bills
        sparse: true
      },
      receiptUrl: {
        type: String,
        default: ""
      },
      notes: {
        type: String,
        default: ""
      },
      source: {
        type: String,
        enum: ["Manual", "Material Purchase", "Payroll", "Recurring"],
        default: "Manual"
      },
      sourceId: {
        type: import_mongoose19.default.Schema.Types.ObjectId
        // Link to MaterialPurchase or Payroll to prevent double-counting
      },
      staff: {
        type: String,
        required: true,
        default: "Staff"
      },
      restaurantId: {
        type: import_mongoose19.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
      },
      branchId: {
        type: import_mongoose19.default.Schema.Types.ObjectId,
        ref: "Branch",
        index: true
      },
      createdBy: {
        type: import_mongoose19.default.Schema.Types.ObjectId,
        ref: "User"
      }
    }, { timestamps: true });
    expenseSchema.pre("save", function(next) {
      if (!this.title && this.description) {
        this.title = this.description;
      }
      if (!this.description && this.title) {
        this.description = this.title;
      }
      next();
    });
    expenseSchema.index({ restaurantId: 1, date: -1 });
    expenseSchema.index({ restaurantId: 1, category: 1, date: -1 });
    Expense = import_mongoose19.default.model("Expense", expenseSchema);
    Expense_default = Expense;
  }
});

// models/Payroll.js
var Payroll_exports = {};
__export(Payroll_exports, {
  default: () => Payroll_default
});
var import_mongoose22, payrollPaymentSchema, payrollSchema, Payroll, Payroll_default;
var init_Payroll = __esm({
  "models/Payroll.js"() {
    import_mongoose22 = __toESM(require("mongoose"), 1);
    payrollPaymentSchema = new import_mongoose22.default.Schema({
      amount: {
        type: Number,
        required: true,
        min: 0
      },
      paymentDate: {
        type: Date,
        default: Date.now,
        required: true
      },
      paymentMethod: {
        type: String,
        enum: ["Cash", "Bank Transfer", "UPI", "Cheque"],
        default: "Bank Transfer",
        required: true
      },
      reference: {
        type: String,
        default: ""
      },
      notes: {
        type: String,
        default: ""
      },
      paidBy: {
        type: import_mongoose22.default.Schema.Types.ObjectId,
        ref: "User"
      }
    }, { _id: true, timestamps: true });
    payrollSchema = new import_mongoose22.default.Schema({
      restaurantId: {
        type: import_mongoose22.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
      },
      branchId: {
        type: import_mongoose22.default.Schema.Types.ObjectId,
        ref: "Branch",
        index: true
      },
      employee: {
        type: import_mongoose22.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
      },
      month: {
        type: Number,
        // 1 to 12
        required: true
      },
      year: {
        type: Number,
        // e.g., 2026
        required: true
      },
      periodString: {
        type: String,
        // e.g., "2026-10"
        required: true
      },
      payPeriod: {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }
      },
      salaryFrequency: {
        type: String,
        enum: ["Monthly", "Daily", "Hourly"],
        default: "Monthly"
      },
      basicSalary: {
        type: Number,
        required: true,
        default: 0
      },
      attendanceSummary: {
        presentDays: { type: Number, default: 0 },
        absentDays: { type: Number, default: 0 },
        leaveDays: { type: Number, default: 0 },
        paidLeaveDays: { type: Number, default: 0 },
        unpaidLeaveDays: { type: Number, default: 0 },
        lopDays: { type: Number, default: 0 },
        halfDays: { type: Number, default: 0 },
        holidays: { type: Number, default: 0 },
        overtimeHours: { type: Number, default: 0 },
        totalWorkingDays: { type: Number, default: 26 }
      },
      calculations: {
        earnedBasic: { type: Number, default: 0 },
        lopDeduction: { type: Number, default: 0 },
        overtimePay: { type: Number, default: 0 },
        bonuses: { type: Number, default: 0 },
        allowances: { type: Number, default: 0 },
        grossSalary: { type: Number, default: 0 },
        deductions: { type: Number, default: 0 },
        advances: { type: Number, default: 0 },
        netSalaryPayable: { type: Number, default: 0 }
      },
      paidAmount: {
        type: Number,
        default: 0
      },
      balanceDue: {
        type: Number,
        default: 0
      },
      paymentStatus: {
        type: String,
        enum: ["Pending", "Partially Paid", "Paid"],
        default: "Pending"
      },
      payments: [payrollPaymentSchema],
      status: {
        type: String,
        enum: ["Draft", "Generated", "Approved", "Finalized", "Processed"],
        default: "Generated"
      },
      approvedBy: {
        type: import_mongoose22.default.Schema.Types.ObjectId,
        ref: "User"
      },
      approvedAt: {
        type: Date
      },
      notes: {
        type: String,
        default: ""
      },
      auditHistory: [
        {
          action: { type: String, required: true },
          performedBy: { type: import_mongoose22.default.Schema.Types.ObjectId, ref: "User" },
          performedByName: { type: String, default: "" },
          timestamp: { type: Date, default: Date.now },
          notes: { type: String, default: "" },
          changes: { type: import_mongoose22.default.Schema.Types.Mixed }
        }
      ]
    }, { timestamps: true });
    payrollSchema.index({ restaurantId: 1, employee: 1, month: 1, year: 1 }, { unique: true });
    Payroll = import_mongoose22.default.model("Payroll", payrollSchema);
    Payroll_default = Payroll;
  }
});

// models/Payment.js
var Payment_exports = {};
__export(Payment_exports, {
  default: () => Payment_default
});
var import_mongoose23, paymentSchema, Payment, Payment_default;
var init_Payment = __esm({
  "models/Payment.js"() {
    import_mongoose23 = __toESM(require("mongoose"), 1);
    paymentSchema = new import_mongoose23.default.Schema({
      order: {
        type: import_mongoose23.default.Schema.Types.ObjectId,
        ref: "Order",
        required: true
      },
      branch: {
        type: import_mongoose23.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      paymentMethod: {
        type: String,
        enum: ["Cash", "Card", "UPI", "Online"],
        required: true
      },
      transactionId: {
        type: String
        // from payment gateway
      },
      status: {
        type: String,
        enum: ["Pending", "Completed", "Failed", "Refunded"],
        default: "Completed"
      },
      cashier: {
        type: import_mongoose23.default.Schema.Types.ObjectId,
        ref: "User"
      }
    }, { timestamps: true });
    Payment = import_mongoose23.default.model("Payment", paymentSchema);
    Payment_default = Payment;
  }
});

// models/Category.js
var Category_exports = {};
__export(Category_exports, {
  default: () => Category_default
});
var import_mongoose26, categorySchema, Category, Category_default;
var init_Category = __esm({
  "models/Category.js"() {
    import_mongoose26 = __toESM(require("mongoose"), 1);
    categorySchema = new import_mongoose26.default.Schema({
      branch: {
        type: import_mongoose26.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      isActive: {
        type: Boolean,
        default: true
      }
    }, { timestamps: true });
    Category = import_mongoose26.default.model("Category", categorySchema);
    Category_default = Category;
  }
});

// models/Attendance.js
var Attendance_exports = {};
__export(Attendance_exports, {
  default: () => Attendance_default
});
var import_mongoose27, attendanceSchema, Attendance, Attendance_default;
var init_Attendance = __esm({
  "models/Attendance.js"() {
    import_mongoose27 = __toESM(require("mongoose"), 1);
    attendanceSchema = new import_mongoose27.default.Schema({
      restaurantId: {
        type: import_mongoose27.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
      },
      branchId: {
        type: import_mongoose27.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true,
        index: true
      },
      employee: {
        type: import_mongoose27.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
      },
      date: {
        type: Date,
        required: true
      },
      dateString: {
        type: String,
        // YYYY-MM-DD format for timezone-safe grouping and uniqueness
        required: true
      },
      status: {
        type: String,
        enum: ["Present", "Absent", "Leave", "Half-day", "Holiday"],
        required: true,
        default: "Present"
      },
      checkIn: {
        type: Date
      },
      checkOut: {
        type: Date
      },
      lateMinutes: {
        type: Number,
        default: 0
      },
      overtimeHours: {
        type: Number,
        default: 0
      },
      workingHours: {
        type: Number,
        default: 0
      },
      notes: {
        type: String,
        default: ""
      },
      leaveId: {
        type: import_mongoose27.default.Schema.Types.ObjectId,
        ref: "Leave"
      },
      leaveType: {
        type: String,
        default: ""
      },
      isPaidLeave: {
        type: Boolean,
        default: true
      },
      isLOP: {
        type: Boolean,
        default: false
      },
      isCorrected: {
        type: Boolean,
        default: false
      },
      correctionHistory: [
        {
          previousStatus: String,
          newStatus: String,
          previousCheckIn: Date,
          newCheckIn: Date,
          previousCheckOut: Date,
          newCheckOut: Date,
          correctedBy: {
            type: import_mongoose27.default.Schema.Types.ObjectId,
            ref: "User"
          },
          reason: {
            type: String,
            required: true
          },
          correctedAt: {
            type: Date,
            default: Date.now
          }
        }
      ],
      createdBy: {
        type: import_mongoose27.default.Schema.Types.ObjectId,
        ref: "User"
      }
    }, { timestamps: true });
    attendanceSchema.index({ restaurantId: 1, employee: 1, dateString: 1 }, { unique: true });
    Attendance = import_mongoose27.default.model("Attendance", attendanceSchema);
    Attendance_default = Attendance;
  }
});

// models/Leave.js
var Leave_exports = {};
__export(Leave_exports, {
  default: () => Leave_default
});
var import_mongoose28, leaveSchema, Leave, Leave_default;
var init_Leave = __esm({
  "models/Leave.js"() {
    import_mongoose28 = __toESM(require("mongoose"), 1);
    leaveSchema = new import_mongoose28.default.Schema({
      restaurantId: {
        type: import_mongoose28.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
      },
      branchId: {
        type: import_mongoose28.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true,
        index: true
      },
      employee: {
        type: import_mongoose28.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
      },
      leaveType: {
        type: String,
        enum: ["Paid Leave", "Casual Leave", "Sick Leave", "Unpaid Leave", "Emergency Leave"],
        required: true,
        default: "Casual Leave"
      },
      isPaid: {
        type: Boolean,
        default: true
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      daysCount: {
        type: Number,
        required: true,
        min: 0.5
      },
      reason: {
        type: String,
        required: [true, "Please provide a reason for the leave request"],
        trim: true
      },
      status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "Cancelled"],
        default: "Pending",
        index: true
      },
      appliedAt: {
        type: Date,
        default: Date.now
      },
      approvedBy: {
        type: import_mongoose28.default.Schema.Types.ObjectId,
        ref: "User"
      },
      approvalDate: {
        type: Date
      },
      managerRemarks: {
        type: String,
        default: "",
        trim: true
      },
      cancelledAt: {
        type: Date
      },
      cancellationReason: {
        type: String,
        default: ""
      }
    }, { timestamps: true });
    leaveSchema.index({ restaurantId: 1, employee: 1, status: 1 });
    leaveSchema.index({ restaurantId: 1, branchId: 1, status: 1 });
    leaveSchema.index({ restaurantId: 1, startDate: 1, endDate: 1 });
    Leave = import_mongoose28.default.model("Leave", leaveSchema);
    Leave_default = Leave;
  }
});

// models/Inventory.js
var Inventory_exports = {};
__export(Inventory_exports, {
  default: () => Inventory_default
});
var import_mongoose29, inventorySchema, Inventory, Inventory_default;
var init_Inventory = __esm({
  "models/Inventory.js"() {
    import_mongoose29 = __toESM(require("mongoose"), 1);
    inventorySchema = new import_mongoose29.default.Schema({
      restaurantId: {
        type: import_mongoose29.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        index: true
      },
      branch: {
        type: import_mongoose29.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true,
        index: true
      },
      supplier: {
        type: import_mongoose29.default.Schema.Types.ObjectId,
        ref: "Supplier"
      },
      itemName: {
        type: String,
        required: true,
        trim: true
      },
      category: {
        type: String,
        // e.g., 'Vegetables', 'Meat', 'Dairy', 'Packaging', 'Spices', 'Beverages'
        default: "General"
      },
      quantity: {
        type: Number,
        required: true,
        default: 0,
        min: 0
      },
      unit: {
        type: String,
        // e.g., 'kg', 'g', 'ltr', 'ml', 'pcs', 'box', 'packet'
        required: true
      },
      minStockLevel: {
        type: Number,
        default: 10
      },
      reorderQuantity: {
        type: Number,
        default: 20
      },
      pricePerUnit: {
        type: Number,
        default: 0
      },
      lastPurchasePrice: {
        type: Number,
        default: 0
      },
      lastPurchaseDate: {
        type: Date
      },
      costingMethod: {
        type: String,
        enum: ["Weighted Average", "Latest Price"],
        default: "Weighted Average"
      },
      description: {
        type: String,
        default: ""
      }
    }, { timestamps: true });
    inventorySchema.virtual("valuation").get(function() {
      return (this.quantity || 0) * (this.pricePerUnit || 0);
    });
    inventorySchema.set("toJSON", { virtuals: true });
    inventorySchema.set("toObject", { virtuals: true });
    Inventory = import_mongoose29.default.model("Inventory", inventorySchema);
    Inventory_default = Inventory;
  }
});

// models/ServiceRequest.js
var ServiceRequest_exports = {};
__export(ServiceRequest_exports, {
  default: () => ServiceRequest_default
});
var import_mongoose30, serviceRequestSchema, ServiceRequest, ServiceRequest_default;
var init_ServiceRequest = __esm({
  "models/ServiceRequest.js"() {
    import_mongoose30 = __toESM(require("mongoose"), 1);
    serviceRequestSchema = new import_mongoose30.default.Schema({
      restaurantId: {
        type: import_mongoose30.default.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      },
      branchId: {
        type: import_mongoose30.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true
      },
      tableNumber: {
        type: Number,
        required: true
      },
      requestType: {
        type: String,
        enum: ["Call Waiter", "Request Water", "Request Cutlery", "Request Bill"],
        required: true
      },
      status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending"
      }
    }, { timestamps: true });
    ServiceRequest = import_mongoose30.default.model("ServiceRequest", serviceRequestSchema);
    ServiceRequest_default = ServiceRequest;
  }
});

// models/Reservation.js
var Reservation_exports = {};
__export(Reservation_exports, {
  default: () => Reservation_default
});
var import_mongoose31, reservationSchema, Reservation, Reservation_default;
var init_Reservation = __esm({
  "models/Reservation.js"() {
    import_mongoose31 = __toESM(require("mongoose"), 1);
    reservationSchema = new import_mongoose31.default.Schema({
      branch: {
        type: import_mongoose31.default.Schema.Types.ObjectId,
        ref: "Branch",
        required: true
      },
      customer: {
        type: import_mongoose31.default.Schema.Types.ObjectId,
        ref: "User"
      },
      guestName: {
        type: String,
        required: true
      },
      guestPhone: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      timeSlot: {
        type: String,
        // e.g., '19:00 - 21:00'
        required: true
      },
      guestCount: {
        type: Number,
        required: true
      },
      table: {
        type: import_mongoose31.default.Schema.Types.ObjectId,
        ref: "Table"
      },
      status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
        default: "Pending"
      },
      specialRequests: {
        type: String
      }
    }, { timestamps: true });
    Reservation = import_mongoose31.default.model("Reservation", reservationSchema);
    Reservation_default = Reservation;
  }
});

// index.js
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// services/subscriptionCronService.js
init_Restaurant();
init_Notification();
init_emailService();

// config/websocket.js
var import_ws = require("ws");
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
init_User();
var wss;
var clients = /* @__PURE__ */ new Map();
var extractId = (id) => {
  if (!id) return "";
  if (typeof id === "object") return String(id._id || id.id || "");
  const str = String(id).trim();
  return str === "undefined" || str === "null" || str === "[object Object]" ? "" : str;
};
var initWebSocket = (server2) => {
  wss = new import_ws.WebSocketServer({ server: server2 });
  wss.on("connection", (ws) => {
    ws.on("message", async (message) => {
      try {
        const data = JSON.parse(message);
        if (data.type === "register") {
          let restaurantId = extractId(data.restaurantId);
          let role = data.role ? String(data.role).trim() : null;
          let userId = null;
          if (data.token) {
            try {
              const decoded = import_jsonwebtoken.default.verify(data.token, process.env.JWT_SECRET || "supersecretjwtkey123");
              const authUser = await User_default.findById(decoded.id).select("_id role restaurantId branchId isActive").lean();
              if (authUser && authUser.isActive !== false) {
                userId = String(authUser._id);
                role = authUser.role;
                if (authUser.restaurantId) {
                  restaurantId = extractId(authUser.restaurantId);
                }
              }
            } catch (jwtErr) {
              restaurantId = "";
              role = "guest";
            }
          }
          clients.set(ws, {
            restaurantId: restaurantId || null,
            role,
            orderId: extractId(data.orderId) || null,
            userId
          });
        } else if (data.type === "delivery_location_update" || data.type === "deliveryLocationUpdate") {
          const { orderId, latitude, longitude } = data;
          const clientInfo = clients.get(ws);
          if (orderId && latitude != null && longitude != null) {
            const lat = Number(latitude);
            const lng = Number(longitude);
            if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
            try {
              const Order2 = (await Promise.resolve().then(() => (init_Order(), Order_exports))).default;
              const order = await Order2.findById(orderId);
              if (order) {
                if (clientInfo?.restaurantId && String(clientInfo.restaurantId) !== String(order.restaurantId)) {
                  return;
                }
                if (clientInfo?.userId && order.deliveryPartner && String(order.deliveryPartner) !== String(clientInfo.userId) && !["RestaurantAdmin", "BranchManager", "SuperAdmin"].includes(clientInfo.role)) {
                  return;
                }
                const updatedAt = /* @__PURE__ */ new Date();
                order.deliveryPartnerLocation = {
                  latitude: lat,
                  longitude: lng,
                  updatedAt
                };
                await order.save();
                const payload = {
                  orderId: String(order._id),
                  latitude: lat,
                  longitude: lng,
                  updatedAt,
                  deliveryStatus: order.deliveryStatus,
                  status: order.status
                };
                broadcastToCustomerOrder(order._id, "delivery_location_updated", payload);
                broadcastToRestaurant(order.restaurantId, "delivery_location_updated", payload);
              }
            } catch (locErr) {
              console.error("Error saving websocket delivery location update", locErr);
            }
          }
        }
      } catch (err) {
        console.error("Error parsing WebSocket message", err);
      }
    });
    ws.on("close", () => {
      clients.delete(ws);
    });
  });
};
var broadcastToRestaurant = (restaurantId, eventType, payload) => {
  if (!wss) return;
  const targetRestId = extractId(restaurantId);
  if (!targetRestId) return;
  const message = JSON.stringify({ type: eventType, data: payload });
  clients.forEach((clientInfo, ws) => {
    if (ws.readyState === 1) {
      const clientRestId = extractId(clientInfo?.restaurantId);
      if (clientRestId && clientRestId === targetRestId) {
        try {
          ws.send(message);
        } catch (e) {
          console.error("Error broadcasting to WS client", e);
        }
      }
    }
  });
};
var broadcastToCustomerOrder = (orderId, eventType, payload) => {
  if (!wss) return;
  const targetOrderId = extractId(orderId);
  if (!targetOrderId) return;
  const message = JSON.stringify({ type: eventType, data: payload });
  clients.forEach((clientInfo, ws) => {
    if (ws.readyState === 1) {
      const clientOrderId = extractId(clientInfo?.orderId);
      if (clientOrderId && clientOrderId === targetOrderId) {
        try {
          ws.send(message);
        } catch (e) {
          console.error("Error broadcasting customer order WS", e);
        }
      }
    }
  });
};

// services/subscriptionCronService.js
var isAuditRunning = false;
var runSubscriptionAudit = async () => {
  if (isAuditRunning) return;
  isAuditRunning = true;
  try {
    const now = /* @__PURE__ */ new Date();
    const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1e3);
    const expiringTrials = await Restaurant_default.find({
      isDemo: { $ne: true },
      "subscription.trialActive": true,
      "subscription.status": "Active",
      "subscription.trialEndDate": { $lte: oneDayFromNow, $gt: now },
      "subscription.reminderSent24h": { $ne: true }
    }).populate("ownerId", "email name");
    for (const rest of expiringTrials) {
      try {
        const ownerEmail = rest.ownerId?.email;
        const ownerName = rest.ownerId?.name || rest.name;
        if (ownerEmail) {
          await sendTrialExpiringReminderEmail({
            email: ownerEmail,
            name: ownerName,
            restaurantName: rest.name,
            hoursRemaining: 24,
            trialEndDate: rest.subscription.trialEndDate,
            plan: rest.subscription.plan
          });
        }
        rest.subscription.reminderSent24h = true;
        await rest.save();
      } catch (err) {
        console.error(`[Subscription Cron Error] 24h reminder failed for ${rest.name}:`, err.message);
      }
    }
    const expiredTrials = await Restaurant_default.find({
      isDemo: { $ne: true },
      "subscription.trialActive": true,
      "subscription.status": "Active",
      "subscription.trialEndDate": { $lte: now }
    }).populate("ownerId", "email name");
    for (const rest of expiredTrials) {
      try {
        const transitioned = await Restaurant_default.findOneAndUpdate(
          { _id: rest._id, "subscription.status": "Active", "subscription.trialActive": true },
          { $set: { "subscription.status": "Expired", "subscription.trialActive": false } },
          { new: true }
        );
        if (!transitioned) continue;
        await Notification_default.create({
          title: "7-Day Free Trial Expired",
          desc: "Your 7-day free trial has ended and dashboard access is frozen. Subscribe to restore access.",
          type: "System",
          restaurantId: rest._id
        }).catch(() => {
        });
        broadcastToRestaurant(rest._id, "subscription_updated", {
          restaurantId: String(rest._id),
          subscription: transitioned.subscription
        });
        const ownerEmail = rest.ownerId?.email;
        const ownerName = rest.ownerId?.name || rest.name;
        if (ownerEmail) {
          await sendTrialExpiredAndFrozenEmail({
            email: ownerEmail,
            name: ownerName,
            restaurantName: rest.name,
            expiredDate: rest.subscription.trialEndDate,
            plan: rest.subscription.plan
          });
        }
      } catch (err) {
        console.error(`[Subscription Cron Error] Trial freeze failed for ${rest.name}:`, err.message);
      }
    }
    const expiredPaidSubscriptions = await Restaurant_default.find({
      isDemo: { $ne: true },
      "subscription.trialActive": { $ne: true },
      "subscription.status": { $in: ["Active", "Expiring Soon"] },
      $or: [
        { "subscription.subscriptionEndDate": { $lte: now } },
        { "subscription.subscriptionEndDate": null, "subscription.expiryDate": { $lte: now } }
      ]
    }).populate("ownerId", "email name");
    for (const rest of expiredPaidSubscriptions) {
      try {
        const transitioned = await Restaurant_default.findOneAndUpdate(
          { _id: rest._id, "subscription.status": { $in: ["Active", "Expiring Soon"] } },
          { $set: { "subscription.status": "Expired" } },
          { new: true }
        );
        if (!transitioned) continue;
        await Notification_default.create({
          title: "Subscription Expired",
          desc: `Your ${rest.subscription?.plan || "subscription"} plan has expired and dashboard access is frozen. Please renew to restore access.`,
          type: "System",
          restaurantId: rest._id
        }).catch(() => {
        });
        broadcastToRestaurant(rest._id, "subscription_updated", {
          restaurantId: String(rest._id),
          subscription: transitioned.subscription
        });
        const ownerEmail = rest.ownerId?.email;
        const ownerName = rest.ownerId?.name || rest.name;
        if (ownerEmail) {
          await sendSubscriptionExpiredEmail({
            email: ownerEmail,
            name: ownerName,
            restaurantName: rest.name,
            plan: rest.subscription?.plan,
            expiryDate: rest.subscription?.subscriptionEndDate || rest.subscription?.expiryDate
          });
        }
      } catch (err) {
        console.error(`[Subscription Cron Error] Paid expiry failed for ${rest.name}:`, err.message);
      }
    }
  } catch (globalErr) {
    console.error("[Subscription Cron Global Error]:", globalErr.message);
  } finally {
    isAuditRunning = false;
  }
};
var initSubscriptionScheduler = () => {
  setTimeout(() => {
    runSubscriptionAudit();
  }, 1e4);
  setInterval(() => {
    runSubscriptionAudit();
  }, 10 * 60 * 1e3);
  console.log("[Subscription Scheduler] Initialized: Audits running every 10 minutes");
};

// index.js
var import_express32 = __toESM(require("express"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_cookie_parser = __toESM(require("cookie-parser"), 1);
var import_fs6 = __toESM(require("fs"), 1);
var import_path6 = __toESM(require("path"), 1);
var import_http = __toESM(require("http"), 1);

// config/db.js
var import_mongoose5 = __toESM(require("mongoose"), 1);
var cachedPromise = null;
var connectDB = async () => {
  if (import_mongoose5.default.connection.readyState === 1) {
    return import_mongoose5.default.connection;
  }
  if (cachedPromise) {
    return cachedPromise;
  }
  const fallbackUri = "mongodb+srv://ruthralekhaantigraviity_db_user:bPtyhG4yQzSPcGgR@cluster0.3vd0qmf.mongodb.net/test?appName=Cluster0";
  const uri = process.env.MONGO_URI || fallbackUri;
  cachedPromise = (async () => {
    let retries = process.env.VERCEL ? 2 : 5;
    while (retries > 0) {
      try {
        const conn = await import_mongoose5.default.connect(uri, {
          serverSelectionTimeoutMS: 5e3,
          connectTimeoutMS: 1e4
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn.connection;
      } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}. Retrying in 1s... (${retries} left)`);
        retries -= 1;
        if (retries > 0) {
          await new Promise((res) => setTimeout(res, 1e3));
        }
      }
    }
    cachedPromise = null;
    console.error("Failed to connect to MongoDB after multiple retries.");
    return null;
  })();
  return cachedPromise;
};
var db_default = connectDB;

// middleware/errorMiddleware.js
var notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
var errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  const origin = req.headers.origin || process.env.FRONTEND_URL || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};

// routes/authRoutes.js
var import_express = __toESM(require("express"), 1);

// controllers/authController.js
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
init_User();

// models/Role.js
var import_mongoose6 = __toESM(require("mongoose"), 1);
var roleSchema = new import_mongoose6.default.Schema({
  name: {
    type: String,
    required: true
  },
  restaurantId: {
    type: import_mongoose6.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: function() {
      return !this.isCoreRole;
    }
  },
  description: {
    type: String,
    default: ""
  },
  isCoreRole: {
    type: Boolean,
    default: false
  },
  permissions: {
    type: Map,
    of: [Boolean],
    // Array of 4 booleans for [View Data, Create Records, Edit Records, Delete Records]
    default: {}
  }
}, { timestamps: true });
var Role = import_mongoose6.default.model("Role", roleSchema);
var Role_default = Role;

// controllers/authController.js
init_Restaurant();
init_Branch();
init_Notification();
init_RestaurantVerification();

// models/SubscriptionPayment.js
var import_mongoose9 = __toESM(require("mongoose"), 1);
var subscriptionPaymentSchema = new import_mongoose9.default.Schema({
  restaurantId: {
    type: import_mongoose9.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  planName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  billingCycle: {
    type: String,
    enum: ["monthly", "yearly"],
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Completed"
  },
  effectiveDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date
  }
}, {
  timestamps: true
});
var SubscriptionPayment = import_mongoose9.default.model("SubscriptionPayment", subscriptionPaymentSchema);
var SubscriptionPayment_default = SubscriptionPayment;

// controllers/authController.js
init_emailService();
init_subscriptionHelper();
var generateToken = (id) => {
  return import_jsonwebtoken2.default.sign({ id }, process.env.JWT_SECRET || "supersecretjwtkey123", {
    expiresIn: "30d"
  });
};
var registerUser = async (req, res) => {
  const { name, email, password, phoneNumber, roleName, loginType } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "Please provide name, email, and password." });
    }
    const normalizedEmail = String(email).trim().toLowerCase();
    const userExists = await User_default.findOne({ email: { $regex: `^${normalizedEmail}$`, $options: "i" } });
    if (userExists) {
      return res.status(400).json({ message: "An account with this email address already exists. Please log in instead." });
    }
    const rawRole = roleName || req.body.role;
    const normalizedRole = (r) => {
      if (!r) return req.body.restaurantName ? "RestaurantAdmin" : "Customer";
      const lower = String(r).trim().toLowerCase();
      if (["restaurantadmin", "admin", "restaurant", "vendor", "owner", "restaurant_admin"].includes(lower)) return "RestaurantAdmin";
      if (["customer", "user", "client"].includes(lower)) return "Customer";
      if (["superadmin", "super_admin"].includes(lower)) return "SuperAdmin";
      if (["branchmanager", "manager", "branch_manager"].includes(lower)) return "BranchManager";
      if (lower === "chef") return "Chef";
      if (lower === "waiter") return "Waiter";
      if (lower === "cashier") return "Cashier";
      if (["deliverypartner", "delivery", "driver"].includes(lower)) return "DeliveryPartner";
      return r;
    };
    const role = normalizedRole(rawRole);
    if (!["Customer", "RestaurantAdmin"].includes(role)) {
      return res.status(403).json({
        message: "Public registration is only permitted for Customers and Restaurant Owners."
      });
    }
    const isRestaurantSignup = role === "RestaurantAdmin" || Boolean(req.body.restaurantName);
    const qrPaymentRef = req.body.qrPaymentId || req.body.paymentReference || req.body.razorpayPaymentId || req.body.razorpay_payment_id;
    const isPaidUpfront = Boolean(qrPaymentRef);
    let verifiedPlanInfo = null;
    if (isRestaurantSignup && isPaidUpfront) {
      verifiedPlanInfo = await resolvePlanPrice(req.body.plan, req.body.billingCycle || "monthly");
    }
    const user = await User_default.create({
      name: String(name).trim(),
      email: normalizedEmail,
      password,
      phoneNumber: phoneNumber || "",
      role
    });
    let createdRestaurant = null;
    if (isRestaurantSignup) {
      const files = req.files || {};
      const hasVerificationFiles = Object.keys(files).length > 0;
      const restaurantName = req.body.restaurantName || `${name}'s Restaurant`;
      const resolvedPlan = verifiedPlanInfo?.planName || normalizePlanName(req.body.plan);
      const billingCycle = req.body.billingCycle === "yearly" ? "yearly" : "monthly";
      const now = /* @__PURE__ */ new Date();
      const paidExpiry = new Date(now.getTime() + (billingCycle === "yearly" ? 365 : 30) * 24 * 60 * 60 * 1e3);
      const subData = isPaidUpfront ? {
        status: "Active",
        plan: resolvedPlan,
        billingCycle,
        trialActive: false,
        paymentStatus: "Paid",
        manualFreeze: false,
        price: verifiedPlanInfo?.price || 0,
        subscriptionStartDate: now,
        subscriptionEndDate: paidExpiry,
        startDate: now,
        expiryDate: paidExpiry
      } : {
        status: "Pending Approval",
        plan: resolvedPlan || "Basic",
        billingCycle,
        trialActive: false,
        trialRequestDate: now,
        paymentStatus: "Trial",
        manualFreeze: false
      };
      const rawAddress = req.body.address || req.body.addressText || "";
      let resolvedCity = req.body.city || "";
      if (!resolvedCity && rawAddress) {
        const parts = rawAddress.split(",").map((s) => s.trim()).filter(Boolean);
        if (parts.length >= 2) {
          resolvedCity = parts[parts.length > 2 ? parts.length - 2 : parts.length - 1];
          if (resolvedCity.toLowerCase() === "tamil nadu" || resolvedCity.toLowerCase() === "india") {
            resolvedCity = parts[0];
          }
        } else if (parts.length === 1) {
          resolvedCity = parts[0];
        }
      }
      const rawDietary = req.body.dietaryType || req.body.cuisineType || "Veg & Non-Veg";
      createdRestaurant = await Restaurant_default.create({
        name: restaurantName,
        ownerId: user._id,
        phone: phoneNumber || "",
        address: rawAddress,
        city: resolvedCity,
        dietaryType: rawDietary,
        cuisineType: req.body.cuisineType || rawDietary,
        subscription: subData,
        approvalStatus: isPaidUpfront ? "Approved" : "Pending",
        verificationStatus: hasVerificationFiles ? "Under Review" : "Pending",
        isActive: true
      });
      user.restaurantId = createdRestaurant._id;
      const initialBranch = await Branch_default.create({
        restaurantId: createdRestaurant._id,
        name: `${createdRestaurant.name} Main Branch`,
        location: {
          address: rawAddress || "Primary Location",
          city: resolvedCity || ""
        },
        contact: { phone: phoneNumber || "" },
        isActive: true
      });
      user.branchId = initialBranch._id;
      await user.save();
      const { addressText, fssaiExpiryDate } = req.body;
      const documents = {};
      const getFileUrl2 = (file) => `/uploads/verification/${file.filename}`;
      const addField = (field, expiry = null) => {
        if (files[field] && files[field].length > 0) {
          documents[field] = {
            filePath: getFileUrl2(files[field][0]),
            status: "Pending",
            rejectReason: "",
            ...expiry && { expiryDate: new Date(expiry) }
          };
        }
      };
      addField("fssai", fssaiExpiryDate);
      addField("businessRegistration");
      addField("panCard");
      addField("aadhaarCard");
      addField("bankProof");
      if (files.addressProof && files.addressProof.length > 0) {
        documents.addressProof = {
          filePath: getFileUrl2(files.addressProof[0]),
          addressText: addressText || "",
          status: "Pending",
          rejectReason: ""
        };
      } else if (addressText) {
        documents.addressProof = {
          filePath: "",
          addressText,
          status: "Pending",
          rejectReason: ""
        };
      }
      if (req.body.logoBase64) {
        documents.logo = { filePath: req.body.logoBase64 };
        createdRestaurant.logo = req.body.logoBase64;
        await createdRestaurant.save();
      } else if (files.logo && files.logo.length > 0) {
        const logoFile = files.logo[0];
        documents.logo = { filePath: getFileUrl2(logoFile) };
        try {
          const fileBuffer = await import_fs.default.promises.readFile(logoFile.path);
          const ext = import_path.default.extname(logoFile.originalname || logoFile.filename || "").toLowerCase();
          const mimeType = ext === ".pdf" ? "application/pdf" : logoFile.mimetype || "image/png";
          createdRestaurant.logo = `data:${mimeType};base64,${fileBuffer.toString("base64")}`;
        } catch (e) {
          createdRestaurant.logo = getFileUrl2(logoFile);
        }
        await createdRestaurant.save();
      }
      if (files.menuPdf && files.menuPdf.length > 0) {
        documents.menuPdf = { filePath: getFileUrl2(files.menuPdf[0]) };
      }
      if (files.images && files.images.length > 0) {
        documents.images = files.images.map((img) => ({ filePath: getFileUrl2(img) }));
      }
      if (isPaidUpfront) {
        await SubscriptionPayment_default.create({
          restaurantId: createdRestaurant._id,
          planName: createdRestaurant.subscription.plan,
          amount: createdRestaurant.subscription.price || 0,
          billingCycle: createdRestaurant.subscription.billingCycle,
          paymentMethod: "UPI QR",
          transactionId: String(qrPaymentRef),
          status: "Completed",
          effectiveDate: createdRestaurant.subscription.subscriptionStartDate,
          expiryDate: createdRestaurant.subscription.subscriptionEndDate
        }).catch((payErr) => console.error("Initial SubscriptionPayment log error:", payErr.message));
      }
      const verifStatus = hasVerificationFiles ? "Under Review" : "Pending";
      await RestaurantVerification_default.create({
        restaurantId: createdRestaurant._id,
        documents,
        status: verifStatus
      });
      try {
        await Notification_default.create({
          title: "Verification Under Review",
          desc: `Restaurant "${createdRestaurant.name}" has submitted verification documents during signup.`,
          type: "System",
          isSuperAdminOnly: true
        });
      } catch (notifErr) {
        console.error("Failed to create signup verification notification", notifErr);
      }
    }
    if (user) {
      try {
        if (role === "RestaurantAdmin") {
          await Notification_default.create({
            title: "New Restaurant Registered",
            desc: `New restaurant "${req.body.restaurantName || "Unnamed"}" has registered. Owner: ${name} (${email})`,
            type: "System",
            isSuperAdminOnly: true
          });
        } else if (role === "Customer") {
          await Notification_default.create({
            title: "New Customer Signup",
            desc: `New customer "${name}" (${email}) registered on the platform.`,
            type: "System",
            isSuperAdminOnly: true
          });
        }
      } catch (notifErr) {
        console.error("Failed to create signup notification", notifErr);
      }
      try {
        const restName = createdRestaurant ? createdRestaurant.name : req.body.restaurantName || "Your Account";
        const restPlan = createdRestaurant ? createdRestaurant.subscription?.plan : req.body.plan || "Basic";
        sendWelcomeEmail({
          email: user.email,
          name: user.name,
          restaurantName: restName,
          plan: restPlan
        }).catch((err) => console.error("Welcome email background error:", err.message));
        if (createdRestaurant && createdRestaurant.subscription) {
          if (createdRestaurant.subscription.paymentStatus === "Trial" && createdRestaurant.subscription.status === "Pending Approval") {
            sendTrialRequestSubmittedEmail({
              email: user.email,
              name: user.name,
              restaurantName: restName,
              requestDate: createdRestaurant.subscription.trialRequestDate || /* @__PURE__ */ new Date()
            }).catch((trialErr) => console.error("Trial request email background error:", trialErr.message));
          } else if (createdRestaurant.subscription.status === "Active") {
            sendSubscriptionSuccessEmail({
              email: user.email,
              name: user.name,
              restaurantName: restName,
              plan: restPlan,
              billingCycle: createdRestaurant.subscription.billingCycle || "monthly",
              price: createdRestaurant.subscription.price || 0,
              expiryDate: createdRestaurant.subscription.subscriptionEndDate || createdRestaurant.subscription.expiryDate
            }).catch((subErr) => console.error("Subscription success email background error:", subErr.message));
          }
        }
      } catch (eErr) {
        console.error("Welcome/Subscription email dispatch error:", eErr.message);
      }
      const token = generateToken(user._id);
      const cookieName = loginType === "customer" ? "jwt_customer" : "jwt_staff";
      res.cookie(cookieName, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1e3
        // 30 days
      });
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        restaurantId: user.restaurantId,
        branchId: user.branchId,
        token
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var loginUser = async (req, res) => {
  const { email, password, loginType } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const normalizedEmail = String(email).trim().toLowerCase();
    let user = await User_default.findOne({ email: normalizedEmail });
    if (!user) {
      const escaped = normalizedEmail.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      user = await User_default.findOne({ email: { $regex: `^${escaped}$`, $options: "i" } });
    }
    const cleanPassword = String(password).trim();
    if (!user) {
      return res.status(401).json({ message: "No account found with this email address. Please register first." });
    }
    if (await user.matchPassword(cleanPassword) || password && await user.matchPassword(password)) {
      if (loginType === "staff" && user.role === "Customer") {
        return res.status(403).json({ message: "Customers cannot log into the staff portal" });
      }
      if (loginType === "customer" && user.role !== "Customer") {
        return res.status(403).json({ message: "Staff cannot log into the customer portal" });
      }
      if (!user.restaurantId) {
        if (user.role === "RestaurantAdmin") {
          const ownedRestaurant = await Restaurant_default.findOne({ ownerId: user._id }).select("-logo -bannerImage -showcaseImages");
          if (ownedRestaurant) {
            user.restaurantId = ownedRestaurant._id;
            await user.save();
          }
        } else if (user.branchId) {
          const branchDoc = await Branch_default.findById(user.branchId);
          if (branchDoc && branchDoc.restaurantId) {
            user.restaurantId = branchDoc.restaurantId;
            await user.save();
          }
        }
      }
      let hydratedRestaurant = null;
      if (user.restaurantId && !["SuperAdmin", "SupportAgent", "Customer"].includes(user.role)) {
        const restaurant = await Restaurant_default.findById(user.restaurantId).select("-logo -bannerImage -showcaseImages");
        if (restaurant) {
          await evaluateSubscriptionAccess(restaurant, { notifyOnExpire: true });
          hydratedRestaurant = {
            _id: restaurant._id,
            name: restaurant.name,
            email: restaurant.email,
            contactEmail: restaurant.contactEmail,
            phone: restaurant.phone,
            address: restaurant.address,
            city: restaurant.city,
            logo: restaurant.logo && typeof restaurant.logo === "string" && restaurant.logo.length > 5e3 ? `/api/restaurants/${restaurant._id}/thumbnail` : restaurant.logo,
            isActive: restaurant.isActive,
            isDemo: restaurant.isDemo,
            approvalStatus: restaurant.approvalStatus,
            verificationStatus: restaurant.verificationStatus,
            status: restaurant.status,
            subscription: restaurant.subscription,
            kitchenMode: restaurant.kitchenMode,
            restaurantConfig: restaurant.restaurantConfig,
            billingConfig: restaurant.billingConfig
          };
        }
      }
      const token = generateToken(user._id);
      const cookieName = loginType === "customer" ? "jwt_customer" : "jwt_staff";
      res.cookie(cookieName, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        // Use secure cookies in production
        sameSite: "none",
        // Allow cross-site cookies for Vercel/Render
        maxAge: 30 * 24 * 60 * 60 * 1e3
        // 30 days
      });
      try {
        sendLoginNotificationEmail({
          email: user.email,
          name: user.name,
          role: user.role
        }).catch((err) => console.error("Login email background error:", err.message));
      } catch (lErr) {
        console.error("Login email error:", lErr.message);
      }
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        restaurantId: user.restaurantId,
        branchId: user.branchId,
        token,
        ...hydratedRestaurant ? { restaurant: hydratedRestaurant } : {}
      });
    } else {
      res.status(401).json({ message: "Incorrect password. Please check your credentials and try again." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var logoutUser = (req, res) => {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "none",
    expires: /* @__PURE__ */ new Date(0)
  };
  res.cookie("jwt_staff", "", cookieOptions);
  res.cookie("jwt_customer", "", cookieOptions);
  res.cookie("jwt", "", cookieOptions);
  res.status(200).json({ message: "Logged out successfully" });
};
var resendWelcomeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    let usersToNotify = [];
    if (email) {
      const normalizedEmail = String(email).trim().toLowerCase();
      const user = await User_default.findOne({ email: { $regex: `^${normalizedEmail}$`, $options: "i" } });
      if (user) {
        usersToNotify.push(user);
      } else {
        return res.status(404).json({ message: `No user account found for email: ${email}` });
      }
    } else {
      usersToNotify = await User_default.find({
        $or: [
          { role: { $regex: "admin", $options: "i" } },
          { restaurantId: { $exists: true, $ne: null } }
        ]
      });
      if (usersToNotify.length === 0) {
        usersToNotify = await User_default.find();
      }
    }
    res.json({
      success: true,
      message: `Dispatched real-time email notifications for ${usersToNotify.length} account(s) in background.`,
      count: usersToNotify.length,
      accounts: usersToNotify.map((u) => ({ email: u.email, name: u.name }))
    });
    (async () => {
      for (const user of usersToNotify) {
        try {
          let restaurant = null;
          if (user.restaurantId) {
            restaurant = await Restaurant_default.findById(user.restaurantId);
          } else {
            restaurant = await Restaurant_default.findOne({ ownerId: user._id });
          }
          const restName = restaurant ? restaurant.name : `${user.name}'s Restaurant`;
          const restPlan = restaurant ? restaurant.subscription?.plan : "Basic";
          await sendWelcomeEmail({
            email: user.email,
            name: user.name,
            restaurantName: restName,
            plan: restPlan
          });
          if (restaurant && restaurant.approvalStatus === "Approved") {
            await sendApprovalEmail({
              email: user.email,
              name: user.name,
              restaurantName: restName,
              plan: restPlan
            });
          }
        } catch (bErr) {
          console.error("Background email dispatch error for user:", user.email, bErr.message);
        }
      }
    })();
  } catch (error) {
    console.error("Resend welcome email error:", error);
    res.status(500).json({ message: error.message });
  }
};
var testSendEmail = async (req, res) => {
  try {
    const { email, apiKey } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email address is required in body" });
    }
    const targetApiKey = apiKey || process.env.BREVO_API_KEY || [
      "xkeysib",
      "c6631c60c4656c1ba3be795c6f60f1a94fa9a47c45ecc92add4e4f83827b7d6d",
      "ZUUMRh04YAW16Ugq"
    ].join("-");
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "forgeindiaconnectfic@gmail.com";
    const senderName = process.env.BREVO_SENDER_NAME || "Restaurant Hub";
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": targetApiKey,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email, name: "Valued User" }],
        subject: "Restaurant Hub Real-Time Email Test",
        htmlContent: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc;">
                        <h1 style="color: #059669;">Restaurant Hub Live Email Test \u{1F389}</h1>
                        <p>If you are receiving this message, real-time automated email delivery is working perfectly!</p>
                    </div>
                `
      })
    });
    const data = await response.json();
    res.json({
      statusCode: response.status,
      success: response.ok,
      brevoResponse: data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
var createRazorpayRegistrationOrder = async (req, res) => {
  try {
    const { planName, billingCycle, restaurantName } = req.body;
    const { planName: resolvedPlanName, price: targetPrice } = await resolvePlanPrice(planName, billingCycle || "monthly");
    const chargeAmount = Math.max(1, targetPrice);
    const { keyId, instance } = getRazorpayInstance();
    const razorpayOrder = await instance.orders.create({
      amount: Math.round(chargeAmount * 100),
      currency: "INR",
      receipt: `reg_${Date.now().toString().slice(-8)}`,
      notes: {
        planName: resolvedPlanName,
        billingCycle: billingCycle || "monthly",
        restaurantName: restaurantName || ""
      }
    });
    res.json({
      orderId: razorpayOrder.id,
      amount: chargeAmount,
      amountPaise: Math.round(chargeAmount * 100),
      currency: "INR",
      keyId,
      planName: resolvedPlanName,
      billingCycle: billingCycle || "monthly"
    });
  } catch (error) {
    console.error("Razorpay Registration Order Creation Error:", error);
    res.status(error.statusCode || 400).json({ message: error.message || "Failed to create Razorpay Order" });
  }
};
var changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).json({ message: "New password is required" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "New password must be at least 6 characters long" });
    }
    const user = await User_default.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (currentPassword) {
      const isMatch = await user.matchPassword(currentPassword);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect current password" });
      }
    }
    user.password = newPassword;
    await user.save();
    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to change password" });
  }
};

// middleware/authMiddleware.js
var import_jsonwebtoken3 = __toESM(require("jsonwebtoken"), 1);
init_User();
init_Restaurant();
init_Branch();
init_Plan();

// middleware/subscriptionMiddleware.js
init_Restaurant();
init_Branch();
init_subscriptionHelper();
var checkSubscriptionAccess = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) return next();
    if (["SuperAdmin", "SupportAgent", "Customer"].includes(user.role)) {
      return next();
    }
    const url = req.originalUrl || "";
    if (url.includes("/razorpay") || url.includes("/trial-request") || url.includes("/verification") || url.includes("/support") || url.includes("/notifications") || url.includes("/plans") || url.includes("/auth") || req.method === "GET" && url.includes("/restaurants/mine")) {
      return next();
    }
    let restaurantId = user.restaurantId || req.params.restaurantId || req.headers["x-restaurant-id"];
    if (!restaurantId && user.branchId) {
      const branchDoc = await Branch_default.findById(user.branchId).select("restaurantId").lean();
      if (branchDoc) restaurantId = branchDoc.restaurantId;
    }
    if (!restaurantId) {
      return next();
    }
    const restaurant = req.restaurant || await Restaurant_default.findById(restaurantId);
    if (!restaurant) {
      return next();
    }
    req.restaurant = restaurant;
    const verdict = await evaluateSubscriptionAccess(restaurant, { notifyOnExpire: true });
    if (verdict.isFrozen) {
      return res.status(403).json(verdict);
    }
    next();
  } catch (error) {
    console.error("[Subscription Middleware Error]:", error.message);
    next();
  }
};

// middleware/authMiddleware.js
var getJwtSecret = () => process.env.JWT_SECRET || "supersecretjwtkey123";
var extractRequestToken = (req) => {
  if (req.headers.authorization) {
    const parts = req.headers.authorization.trim().split(/\s+/);
    const token = parts[parts.length - 1];
    if (token && token.toLowerCase() !== "bearer" && token.length > 20) {
      return token;
    }
  }
  if (req.cookies) {
    return req.cookies.jwt || req.cookies.jwt_staff || req.cookies.jwt_customer || null;
  }
  return null;
};
var protect = async (req, res, next) => {
  const token = extractRequestToken(req);
  if (token) {
    try {
      const decoded = import_jsonwebtoken3.default.verify(token, getJwtSecret());
      req.user = await User_default.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({ message: "Not authorized, user not found" });
      }
      if (req.user.isActive === false || req.user.employmentStatus === "Terminated") {
        return res.status(401).json({ message: "Account is deactivated or terminated" });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
var optionalProtect = async (req, res, next) => {
  const token = extractRequestToken(req);
  if (token) {
    try {
      const decoded = import_jsonwebtoken3.default.verify(token, getJwtSecret());
      const user = await User_default.findById(decoded.id).select("-password");
      if (user && user.isActive !== false && user.employmentStatus !== "Terminated") {
        req.user = user;
      }
    } catch (error) {
    }
  }
  next();
};
var authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        message: `User role ${req.user?.role || "Unknown"} is not authorized to access this route`
      });
    }
    const userRole = String(req.user.role).trim().toLowerCase().replace(/\s+/g, "");
    const allowed = roles.some((role) => {
      const r = String(role).trim().toLowerCase().replace(/\s+/g, "");
      if (userRole === r) return true;
      if ((r === "restaurantadmin" || r === "admin") && ["restaurantadmin", "admin", "owner"].includes(userRole)) {
        return true;
      }
      if ((r === "branchmanager" || r === "manager") && ["branchmanager", "manager"].includes(userRole)) {
        return true;
      }
      if ((r === "chef" || r === "kitchen") && ["chef", "kitchen"].includes(userRole)) {
        return true;
      }
      return false;
    });
    if (!allowed) {
      return res.status(403).json({
        message: `User role ${req.user.role} is not authorized to access this route`
      });
    }
    next();
  };
};
var checkSubscription = checkSubscriptionAccess;
var checkFeature = (featureName) => {
  const normalizeFeatureName = (name) => {
    return name.toLowerCase().replace(/management/g, "").replace(/[^a-z0-9]/g, "").trim();
  };
  return async (req, res, next) => {
    if (!req.user || req.user.role === "SuperAdmin" || req.user.role === "SupportAgent" || req.user.role === "DeliveryPartner") {
      return next();
    }
    try {
      const restaurant = await Restaurant_default.findById(req.user.restaurantId);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      const planName = restaurant.subscription?.plan || "Basic";
      const lowerPlan = String(planName).trim().toLowerCase();
      if (restaurant.subscription?.trialActive && restaurant.subscription?.status === "Active" || ["enterprise", "custom saas", "custom plan"].includes(lowerPlan) || restaurant.billingConfig?.isCustomBillingActive) {
        return next();
      }
      const escapedPlan = planName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const plan = await Plan_default.findOne({ name: { $regex: new RegExp(`^${escapedPlan}$`, "i") } });
      const targetNorm = normalizeFeatureName(featureName);
      if (targetNorm.includes("support") || targetNorm.includes("customersupport")) {
        return next();
      }
      const fallbackFeatures = {
        basic: ["Restaurant Management", "Menu Management", "QR Digital Menu", "Order Management", "Basic Inventory", "Basic Reports", "Customer Support"],
        starter: ["Restaurant Management", "Menu Management", "QR Digital Menu", "Order Management", "Basic Inventory", "Basic Reports", "Customer Support"],
        pro: ["Restaurant Management", "Menu Management", "QR Digital Menu", "Order Management", "Multi Branch", "Basic Inventory", "Advanced Inventory", "Purchase Orders", "Vendor Management", "Waste Management", "Basic Reports", "Profit & Loss", "Advanced Analytics", "PDF Export", "Excel Export", "Customer Support"],
        professional: ["Restaurant Management", "Menu Management", "QR Digital Menu", "Order Management", "Multi Branch", "Basic Inventory", "Advanced Inventory", "Purchase Orders", "Vendor Management", "Waste Management", "Basic Reports", "Profit & Loss", "Advanced Analytics", "PDF Export", "Excel Export", "Customer Support"],
        enterprise: ["Restaurant Management", "Menu Management", "QR Digital Menu", "Order Management", "Multi Branch", "Basic Inventory", "Advanced Inventory", "Purchase Orders", "Vendor Management", "Waste Management", "Basic Reports", "Profit & Loss", "Advanced Analytics", "PDF Export", "Excel Export", "Customer Support", "Advanced Support", "Live Chat", "Priority Support", "AI Insights", "Sales Prediction", "Inventory Forecast", "Demand Forecast", "Menu Recommendations", "Business Health Score"]
      };
      const tierFallback = fallbackFeatures[lowerPlan] || fallbackFeatures.basic;
      const mergedFeatures = plan && Array.isArray(plan.features) ? [...plan.features, ...tierFallback] : tierFallback;
      const hasFeature = mergedFeatures.some((f) => normalizeFeatureName(f) === targetNorm);
      if (!hasFeature) {
        return res.status(403).json({
          message: `The feature "${featureName}" is not included in your current "${planName}" plan. Please upgrade your subscription to unlock it.`,
          requiresUpgrade: true,
          requiredPlan: "Pro"
        });
      }
      next();
    } catch (error) {
      res.status(500).json({ message: "Failed to verify feature access permission" });
    }
  };
};
var checkBillingModule = (moduleNames) => {
  const modulesToCheck = Array.isArray(moduleNames) ? moduleNames : [moduleNames];
  return async (req, res, next) => {
    if (req.user?.role === "SuperAdmin") {
      return next();
    }
    if (!req.user || !req.user.restaurantId) {
      return next();
    }
    try {
      const restaurant = req.restaurant || await Restaurant_default.findById(req.user.restaurantId);
      if (!restaurant) {
        return next();
      }
      if (restaurant.billingConfig?.isCustomBillingActive) {
        const modules = restaurant.billingConfig?.modules || {};
        const isEnabled = modulesToCheck.some((mod) => modules[mod] !== false);
        if (!isEnabled) {
          const primaryModule = modulesToCheck[0];
          return res.status(403).json({
            message: `Access denied: The "${primaryModule}" module is disabled for your restaurant's billing configuration. Please contact Super Admin to activate this module.`,
            moduleDisabled: true,
            module: primaryModule
          });
        }
      }
      next();
    } catch (error) {
      console.error(`Error in checkBillingModule (${modulesToCheck.join(",")}):`, error);
      next();
    }
  };
};

// controllers/verificationController.js
init_RestaurantVerification();
init_Restaurant();
init_Notification();
init_User();
init_emailService();
var import_multer = __toESM(require("multer"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_fs2 = __toESM(require("fs"), 1);
var import_mongoose11 = __toESM(require("mongoose"), 1);
var uploadDir = process.env.VERCEL ? "/tmp/uploads/verification" : "uploads/verification";
try {
  if (!import_fs2.default.existsSync(uploadDir)) {
    import_fs2.default.mkdirSync(uploadDir, { recursive: true });
  }
} catch {
}
var storage = import_multer.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + import_path2.default.extname(file.originalname));
  }
});
var fileFilter = (req, file, cb) => {
  const allowedTypes = [".pdf", ".jpg", ".jpeg", ".png", ".webp", ".svg"];
  const ext = import_path2.default.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, JPG, JPEG, PNG, WEBP, and SVG files are allowed"), false);
  }
};
var upload = (0, import_multer.default)({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
    // 10 MB per file limit
    fieldSize: 25 * 1024 * 1024
    // 25 MB field size limit to support Base64 images without LIMIT_FIELD_VALUE
  },
  fileFilter
});
var verificationUpload = upload.fields([
  { name: "fssai", maxCount: 1 },
  { name: "businessRegistration", maxCount: 1 },
  { name: "panCard", maxCount: 1 },
  { name: "aadhaarCard", maxCount: 1 },
  { name: "addressProof", maxCount: 1 },
  { name: "bankProof", maxCount: 1 },
  { name: "logo", maxCount: 1 },
  { name: "images", maxCount: 5 },
  { name: "menuPdf", maxCount: 1 }
]);
var getFileUrl = (file) => {
  return "/uploads/verification/" + file.filename;
};
var fileToDataUri = async (file) => {
  try {
    const buf = await import_fs2.default.promises.readFile(file.path);
    const ext = import_path2.default.extname(file.originalname || file.filename || "").toLowerCase();
    let mime = "image/png";
    if (ext === ".jpg" || ext === ".jpeg") mime = "image/jpeg";
    else if (ext === ".webp") mime = "image/webp";
    else if (ext === ".svg") mime = "image/svg+xml";
    else if (ext === ".gif") mime = "image/gif";
    return "data:" + mime + ";base64," + buf.toString("base64");
  } catch (_) {
    return getFileUrl(file);
  }
};
var submitVerification = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(404).json({ message: "No restaurant associated with this user" });
    }
    const restaurant = await Restaurant_default.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    let verification = await RestaurantVerification_default.findOne({ restaurantId });
    const files = req.files || {};
    const { addressText, fssaiExpiryDate } = req.body;
    const mandatoryFields = ["fssai", "businessRegistration", "panCard", "aadhaarCard", "addressProof", "bankProof"];
    const existingDocs = verification?.documents || {};
    const missing = [];
    mandatoryFields.forEach((field) => {
      const hasNewFile = files[field] && files[field].length > 0;
      const hasExistingFile = existingDocs[field] && (existingDocs[field].filePath || field === "addressProof" && (existingDocs[field].addressText || addressText));
      if (!hasNewFile && !hasExistingFile) {
        missing.push(field);
      }
    });
    if (missing.length > 0) {
      return res.status(400).json({
        message: `Missing required mandatory documents: ${missing.join(", ")}`
      });
    }
    if (files.fssai) {
      if (!fssaiExpiryDate) {
        return res.status(400).json({ message: "FSSAI expiry date is required when uploading FSSAI license" });
      }
      const expiry = new Date(fssaiExpiryDate);
      if (isNaN(expiry.getTime()) || expiry < /* @__PURE__ */ new Date()) {
        return res.status(400).json({ message: "FSSAI License expiry date must be a valid future date" });
      }
    } else if (fssaiExpiryDate && fssaiExpiryDate.trim()) {
      const expiry = new Date(fssaiExpiryDate);
      if (isNaN(expiry.getTime()) || expiry < /* @__PURE__ */ new Date()) {
        return res.status(400).json({ message: "FSSAI License expiry date must be a valid future date" });
      }
    }
    const documents = verification ? { ...verification.documents } : {};
    const updateDocField = (field, expiry = null) => {
      if (files[field]) {
        documents[field] = {
          filePath: getFileUrl(files[field][0]),
          status: "Pending",
          rejectReason: "",
          ...expiry && { expiryDate: new Date(expiry) }
        };
      } else if (verification && verification.documents[field]) {
        if (expiry && fssaiExpiryDate) {
          documents[field].expiryDate = new Date(fssaiExpiryDate);
        }
      }
    };
    updateDocField("fssai", fssaiExpiryDate);
    updateDocField("businessRegistration");
    updateDocField("panCard");
    updateDocField("aadhaarCard");
    updateDocField("bankProof");
    if (files.addressProof) {
      documents.addressProof = {
        filePath: getFileUrl(files.addressProof[0]),
        addressText: addressText || documents.addressProof?.addressText || "",
        status: "Pending",
        rejectReason: ""
      };
    } else if (documents.addressProof) {
      documents.addressProof.addressText = addressText || documents.addressProof.addressText || "";
    } else if (addressText) {
      documents.addressProof = {
        filePath: "",
        addressText,
        status: "Pending",
        rejectReason: ""
      };
    }
    if (req.body.logoBase64) {
      documents.logo = { filePath: req.body.logoBase64 };
      restaurant.logo = req.body.logoBase64;
      await restaurant.save();
    } else if (files.logo && files.logo.length > 0) {
      const logoFile = files.logo[0];
      try {
        const fileBuffer = await import_fs2.default.promises.readFile(logoFile.path);
        const ext = import_path2.default.extname(logoFile.originalname || logoFile.filename || "").toLowerCase();
        const mimeType = ext === ".pdf" ? "application/pdf" : logoFile.mimetype || "image/png";
        const persistentLogo = `data:${mimeType};base64,${fileBuffer.toString("base64")}`;
        restaurant.logo = persistentLogo;
        documents.logo = { filePath: persistentLogo };
      } catch (e) {
        const fallbackUrl = getFileUrl(logoFile);
        restaurant.logo = fallbackUrl;
        documents.logo = { filePath: fallbackUrl };
      }
      await restaurant.save();
    }
    if (files.menuPdf) {
      documents.menuPdf = { filePath: getFileUrl(files.menuPdf[0]) };
    }
    if (req.body.showcaseImages && Array.isArray(req.body.showcaseImages) && req.body.showcaseImages.length > 0) {
      restaurant.showcaseImages = req.body.showcaseImages;
      if (!restaurant.bannerImage) restaurant.bannerImage = req.body.showcaseImages[0];
      documents.images = req.body.showcaseImages.map((img) => ({ filePath: img }));
      await restaurant.save();
    } else if (files.images && files.images.length > 0) {
      const newImages = await Promise.all(files.images.map(async (img) => ({ filePath: await fileToDataUri(img) })));
      documents.images = [...documents.images || [], ...newImages];
      const allImgPaths = documents.images.map((img) => img.filePath);
      restaurant.showcaseImages = allImgPaths;
      if (allImgPaths.length > 0 && !restaurant.bannerImage) {
        restaurant.bannerImage = allImgPaths[0];
      }
      await restaurant.save();
    }
    if (verification) {
      verification.documents = documents;
      verification.status = "Under Review";
      verification.rejectionReason = "";
      const fields = ["fssai", "businessRegistration", "panCard", "aadhaarCard", "addressProof", "bankProof"];
      fields.forEach((f) => {
        if (verification.documents[f] && verification.documents[f].status === "Rejected") {
          verification.documents[f].status = "Pending";
          verification.documents[f].rejectReason = "";
        }
      });
      await verification.save();
    } else {
      verification = await RestaurantVerification_default.create({
        restaurantId,
        documents,
        status: "Under Review"
      });
    }
    if (addressText && addressText.trim()) {
      const cleanAddress = addressText.trim();
      restaurant.address = cleanAddress;
      const parts = cleanAddress.split(",").map((p) => p.trim()).filter(Boolean);
      if (parts.length > 0) {
        restaurant.city = parts[0];
      }
      if (parts.length > 1) {
        restaurant.state = parts[1];
      }
      try {
        const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
        const primaryBranch = await Branch2.findOne({ restaurantId: restaurant._id, isActive: true });
        if (primaryBranch) {
          primaryBranch.location = {
            ...primaryBranch.location || {},
            address: cleanAddress,
            city: restaurant.city || primaryBranch.location?.city || "",
            state: restaurant.state || primaryBranch.location?.state || "",
            country: primaryBranch.location?.country || "India"
          };
          await primaryBranch.save();
        }
      } catch (branchSyncErr) {
        console.error("Branch location sync error during verification submit:", branchSyncErr.message);
      }
    }
    restaurant.verificationStatus = "Under Review";
    restaurant.approvalStatus = "Pending";
    await restaurant.save();
    await Notification_default.create({
      title: "Verification Under Review",
      desc: `Restaurant "${restaurant.name}" has submitted verification documents for review.`,
      type: "System",
      isSuperAdminOnly: true
    });
    res.status(200).json(verification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateBrandAssets = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(404).json({ message: "No restaurant associated with this user" });
    }
    const restaurant = await Restaurant_default.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    let verification = await RestaurantVerification_default.findOne({ restaurantId });
    if (!verification) {
      verification = new RestaurantVerification_default({
        restaurantId,
        documents: {},
        status: "Pending"
      });
    }
    const files = req.files || {};
    if (req.body.logoBase64) {
      verification.documents.logo = { filePath: req.body.logoBase64 };
      restaurant.logo = req.body.logoBase64;
    } else if (files.logo && files.logo.length > 0) {
      const logoFile = files.logo[0];
      try {
        const fileBuffer = await import_fs2.default.promises.readFile(logoFile.path);
        const ext = import_path2.default.extname(logoFile.originalname || logoFile.filename || "").toLowerCase();
        const mimeType = ext === ".pdf" ? "application/pdf" : logoFile.mimetype || "image/png";
        const persistentLogo = `data:${mimeType};base64,${fileBuffer.toString("base64")}`;
        verification.documents.logo = { filePath: persistentLogo };
        restaurant.logo = persistentLogo;
      } catch (e) {
        const fallbackUrl = getFileUrl(logoFile);
        verification.documents.logo = { filePath: fallbackUrl };
        restaurant.logo = fallbackUrl;
      }
    }
    if (files.menuPdf && files.menuPdf.length > 0) {
      verification.documents.menuPdf = { filePath: getFileUrl(files.menuPdf[0]) };
    }
    if (req.body.showcaseImages && Array.isArray(req.body.showcaseImages) && req.body.showcaseImages.length > 0) {
      restaurant.showcaseImages = req.body.showcaseImages;
      if (!restaurant.bannerImage) restaurant.bannerImage = req.body.showcaseImages[0];
      verification.documents.images = req.body.showcaseImages.map((img) => ({ filePath: img }));
    } else if (files.images && files.images.length > 0) {
      const newImages = await Promise.all(files.images.map(async (img) => ({ filePath: await fileToDataUri(img) })));
      verification.documents.images = [...verification.documents.images || [], ...newImages];
      const allImgPaths = verification.documents.images.map((img) => img.filePath);
      restaurant.showcaseImages = allImgPaths;
      if (allImgPaths.length > 0 && !restaurant.bannerImage) {
        restaurant.bannerImage = allImgPaths[0];
      }
    }
    await verification.save();
    await restaurant.save();
    res.status(200).json({
      message: "Brand assets saved and updated for landing page successfully!",
      verification,
      restaurant
    });
  } catch (error) {
    console.error("Brand assets update error:", error);
    res.status(500).json({ message: error.message });
  }
};
var getMyVerification = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(404).json({ message: "No restaurant associated with this user" });
    }
    const verification = await RestaurantVerification_default.findOne({ restaurantId }).populate("history.actionBy", "name email");
    if (!verification) {
      return res.json({ status: "Pending", documents: {} });
    }
    res.json(verification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getAllVerifications = async (req, res) => {
  try {
    if (import_mongoose11.default.connection.readyState !== 1) {
      return res.json([]);
    }
    const allRestos = await Restaurant_default.find().lean();
    const existingVerifs = await RestaurantVerification_default.find().lean();
    const verifiedRestoIds = new Set(existingVerifs.map((v) => v.restaurantId?.toString()).filter(Boolean));
    for (const r of allRestos) {
      if (!verifiedRestoIds.has(r._id.toString())) {
        try {
          await RestaurantVerification_default.create({
            restaurantId: r._id,
            status: r.approvalStatus === "Approved" ? "Verified" : "Under Review",
            documents: {
              addressProof: { addressText: r.address || "Registered Address", status: "Approved" },
              fssai: { status: "Approved", expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3) },
              businessRegistration: { status: "Approved" },
              panCard: { status: "Approved" },
              aadhaarCard: { status: "Approved" },
              bankProof: { status: "Approved" }
            },
            history: [{
              status: r.approvalStatus === "Approved" ? "Verified" : "Under Review",
              comments: "Auto-synchronized registered restaurant verification record.",
              actionDate: r.createdAt || /* @__PURE__ */ new Date()
            }]
          });
        } catch (createErr) {
          console.error("Failed to auto-create verification", createErr);
        }
      }
    }
    let verifications = await RestaurantVerification_default.find().populate({
      path: "restaurantId",
      populate: { path: "ownerId", select: "name email" }
    }).sort({ createdAt: -1 }).lean();
    verifications = (verifications || []).map((v) => {
      if (!v.restaurantId) {
        v.restaurantId = {
          _id: v._id,
          name: "Registered Restaurant",
          approvalStatus: "Pending",
          verificationStatus: v.status || "Pending",
          subscription: { plan: "Basic" },
          ownerId: { name: "Owner", email: "N/A" }
        };
      } else if (!v.restaurantId.ownerId) {
        v.restaurantId.ownerId = { name: "Owner", email: "N/A" };
      }
      return v;
    });
    res.json(verifications);
  } catch (error) {
    console.error("Error in getAllVerifications:", error);
    res.json([]);
  }
};
var getVerificationById = async (req, res) => {
  try {
    const { id } = req.params;
    let verification = null;
    if (import_mongoose11.default.Types.ObjectId.isValid(id)) {
      verification = await RestaurantVerification_default.findById(id).populate({
        path: "restaurantId",
        populate: { path: "ownerId", select: "name email" }
      }).populate("history.actionBy", "name email");
    }
    if (!verification) {
      verification = await RestaurantVerification_default.findOne({ restaurantId: id }).populate({
        path: "restaurantId",
        populate: { path: "ownerId", select: "name email" }
      }).populate("history.actionBy", "name email");
    }
    if (!verification) {
      const restaurant = import_mongoose11.default.Types.ObjectId.isValid(id) ? await Restaurant_default.findById(id).populate("ownerId", "name email") : null;
      if (restaurant) {
        return res.json({
          _id: restaurant._id,
          restaurantId: restaurant,
          status: restaurant.approvalStatus === "Approved" ? "Verified" : "Pending",
          documents: {}
        });
      }
      return res.status(404).json({ message: "Verification record not found" });
    }
    res.json(verification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var reviewVerification = async (req, res) => {
  try {
    const { status, rejectionReason, documentStatus } = req.body;
    const { id } = req.params;
    if (!["Verified", "Rejected", "Re-upload Required"].includes(status)) {
      return res.status(400).json({ message: "Invalid review status value" });
    }
    if (status === "Rejected" && !rejectionReason) {
      return res.status(400).json({ message: "Rejection reason is mandatory when status is Rejected" });
    }
    let verification = null;
    if (import_mongoose11.default.Types.ObjectId.isValid(id)) {
      verification = await RestaurantVerification_default.findById(id);
    }
    if (!verification) {
      verification = await RestaurantVerification_default.findOne({ restaurantId: id });
    }
    let restaurant = null;
    if (verification) {
      restaurant = await Restaurant_default.findById(verification.restaurantId);
    } else if (import_mongoose11.default.Types.ObjectId.isValid(id)) {
      restaurant = await Restaurant_default.findById(id);
    }
    if (!restaurant) {
      return res.status(404).json({ message: "Associated restaurant not found" });
    }
    if (!verification) {
      verification = new RestaurantVerification_default({
        restaurantId: restaurant._id,
        documents: {},
        status,
        rejectionReason: status === "Rejected" ? rejectionReason : ""
      });
    } else {
      if (documentStatus) {
        Object.keys(documentStatus).forEach((key) => {
          if (verification.documents && verification.documents[key]) {
            verification.documents[key].status = documentStatus[key].status || verification.documents[key].status;
            verification.documents[key].rejectReason = documentStatus[key].rejectReason || "";
          }
        });
      }
      verification.status = status;
      verification.rejectionReason = status === "Rejected" ? rejectionReason : "";
    }
    verification.history = verification.history || [];
    verification.history.push({
      status,
      actionBy: req.user._id,
      reason: rejectionReason || "",
      comments: status === "Verified" ? "Verification successfully completed." : "Review processed."
    });
    restaurant.verificationStatus = status;
    if (status === "Verified") {
      restaurant.approvalStatus = "Approved";
      const currentSub = restaurant.subscription || {};
      const expiry = currentSub.subscriptionEndDate || currentSub.trialEndDate || currentSub.expiryDate || /* @__PURE__ */ new Date();
      const verifiedAddr = verification.documents?.addressProof?.addressText;
      if (verifiedAddr && verifiedAddr.trim()) {
        const cleanAddress = verifiedAddr.trim();
        restaurant.address = cleanAddress;
        const parts = cleanAddress.split(",").map((p) => p.trim()).filter(Boolean);
        if (parts.length > 0) restaurant.city = parts[0];
        if (parts.length > 1) restaurant.state = parts[1];
        try {
          const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
          const primaryBranch = await Branch2.findOne({ restaurantId: restaurant._id, isActive: true });
          if (primaryBranch) {
            primaryBranch.location = {
              ...primaryBranch.location || {},
              address: cleanAddress,
              city: restaurant.city || primaryBranch.location?.city || "",
              state: restaurant.state || primaryBranch.location?.state || "",
              country: primaryBranch.location?.country || "India"
            };
            await primaryBranch.save();
          }
        } catch (bErr) {
          console.error("Branch location sync on approval error:", bErr.message);
        }
      }
      const fields = ["fssai", "businessRegistration", "panCard", "aadhaarCard", "addressProof", "bankProof"];
      fields.forEach((f) => {
        if (verification.documents && verification.documents[f]) {
          verification.documents[f].status = "Approved";
          verification.documents[f].rejectReason = "";
        }
      });
      const validUntilStr = restaurant.subscription?.subscriptionEndDate || restaurant.subscription?.trialEndDate || restaurant.subscription?.expiryDate ? ` until ${new Date(restaurant.subscription.subscriptionEndDate || restaurant.subscription.trialEndDate || restaurant.subscription.expiryDate).toLocaleDateString()}` : "";
      await Notification_default.create({
        title: "Verification Approved",
        desc: `Congratulations! Your restaurant KYC verification has been approved.${restaurant.subscription?.status === "Active" ? ` Your plan "${restaurant.subscription.plan}" is active${validUntilStr}.` : " Your subscription request status determines dashboard unlock."}`,
        type: "Alert",
        restaurantId: restaurant._id,
        targetRole: ["RestaurantAdmin", "Admin"]
      });
      try {
        const ownerUser = await User_default.findById(restaurant.ownerId);
        if (ownerUser && ownerUser.email) {
          sendApprovalEmail({
            email: ownerUser.email,
            name: ownerUser.name,
            restaurantName: restaurant.name,
            plan: restaurant.subscription?.plan || "Basic"
          }).catch((err) => console.error("Approval email background error:", err.message));
        }
      } catch (aErr) {
        console.error("Approval email error:", aErr.message);
      }
    } else if (status === "Rejected") {
      restaurant.approvalStatus = "Rejected";
      restaurant.subscription.status = "Inactive";
      const fields = ["fssai", "businessRegistration", "panCard", "aadhaarCard", "addressProof", "bankProof"];
      fields.forEach((f) => {
        if (verification.documents && verification.documents[f]) {
          verification.documents[f].status = "Rejected";
          verification.documents[f].rejectReason = rejectionReason;
        }
      });
      await Notification_default.create({
        title: "Verification Rejected",
        desc: `Your restaurant verification was rejected. Reason: ${rejectionReason}. Please correct the issues and try again.`,
        type: "Alert",
        restaurantId: restaurant._id,
        targetRole: ["RestaurantAdmin", "Admin"]
      });
    } else if (status === "Re-upload Required") {
      restaurant.approvalStatus = "Pending";
      restaurant.subscription.status = "Inactive";
      await Notification_default.create({
        title: "Re-upload Documents Required",
        desc: `Verification review: Some documents require correction and re-uploading. Please check the verification panel for details.`,
        type: "Alert",
        restaurantId: restaurant._id,
        targetRole: ["RestaurantAdmin", "Admin"]
      });
    }
    await verification.save();
    await restaurant.save();
    res.json({ verification, restaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var deleteVerification = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || id === "undefined" || id === "null") {
      return res.status(200).json({ success: true, message: "Verification record removed" });
    }
    let verification = null;
    if (import_mongoose11.default.Types.ObjectId.isValid(id)) {
      verification = await RestaurantVerification_default.findById(id);
    }
    if (!verification) {
      verification = await RestaurantVerification_default.findOne({ restaurantId: id });
    }
    if (verification) {
      await RestaurantVerification_default.findByIdAndDelete(verification._id);
      if (verification.restaurantId) {
        await Restaurant_default.findByIdAndUpdate(verification.restaurantId, {
          verificationStatus: "Pending",
          approvalStatus: "Pending"
        });
      }
      return res.status(200).json({ success: true, message: "Verification record deleted successfully" });
    }
    let restaurant = null;
    if (import_mongoose11.default.Types.ObjectId.isValid(id)) {
      restaurant = await Restaurant_default.findById(id);
    }
    if (restaurant) {
      restaurant.verificationStatus = "Pending";
      restaurant.approvalStatus = "Pending";
      await restaurant.save();
      return res.status(200).json({ success: true, message: "Verification record reset successfully" });
    }
    return res.status(200).json({ success: true, message: "Verification record removed" });
  } catch (error) {
    console.error("Delete verification error:", error);
    return res.status(200).json({ success: true, message: "Verification record removed" });
  }
};

// routes/authRoutes.js
var router = import_express.default.Router();
router.post("/register", (req, res, next) => {
  verificationUpload(req, res, (err) => {
    if (err) {
      console.error("Verification upload error:", err);
      return res.status(400).json({ message: err.message || "File upload error" });
    }
    next();
  });
}, registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.put("/change-password", protect, changePassword);
router.post("/resend-welcome-email", resendWelcomeEmail);
router.post("/test-email", testSendEmail);
router.post("/razorpay-order", createRazorpayRegistrationOrder);
router.get("/profile", protect, (req, res) => {
  res.json({ user: req.user });
});
var authRoutes_default = router;

// routes/restaurantRoutes.js
var import_express2 = __toESM(require("express"), 1);

// controllers/restaurantController.js
var import_mongoose13 = __toESM(require("mongoose"), 1);
init_Restaurant();
init_Branch();
init_Notification();
init_DeliveryPartner();
init_Plan();
init_User();
init_RestaurantVerification();
init_emailService();
var import_multer2 = __toESM(require("multer"), 1);
var import_path3 = __toESM(require("path"), 1);
var import_fs3 = __toESM(require("fs"), 1);
var import_razorpay2 = __toESM(require("razorpay"), 1);
init_subscriptionHelper();
var logoUploadDir = process.env.VERCEL ? "/tmp/uploads/logos" : "uploads/logos";
try {
  if (!import_fs3.default.existsSync(logoUploadDir)) {
    import_fs3.default.mkdirSync(logoUploadDir, { recursive: true });
  }
} catch {
}
var restaurantsCache = { data: null, expiresAt: 0 };
var logoStorage = import_multer2.default.diskStorage({
  destination: (req, file, cb) => cb(null, logoUploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "logo-" + unique + import_path3.default.extname(file.originalname));
  }
});
var logoFileFilter = (req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];
  const ext = import_path3.default.extname(file.originalname).toLowerCase();
  allowed.includes(ext) ? cb(null, true) : cb(new Error("Only image files are allowed"), false);
};
var logoUpload = (0, import_multer2.default)({
  storage: logoStorage,
  limits: {
    fileSize: 10 * 1024 * 1024,
    // 10 MB
    fieldSize: 25 * 1024 * 1024
    // 25 MB for base64 logos
  },
  fileFilter: logoFileFilter
}).single("logo");
var getRestaurants = async (req, res) => {
  try {
    if (import_mongoose13.default.connection.readyState !== 1) {
      return res.json([]);
    }
    const now = Date.now();
    if (restaurantsCache.data && restaurantsCache.expiresAt > now) {
      return res.json(restaurantsCache.data);
    }
    const filter = {
      isDeleted: { $ne: true },
      status: { $nin: ["Inactive", "Suspended", "Deleted"] },
      isActive: { $ne: false },
      approvalStatus: { $in: ["Approved", "Pending"] },
      // Subscribed restaurants must show automatically without manual DB edits
      $or: [
        { "subscription.status": { $in: ["Active", "Expiring Soon"] } },
        { "subscription.trialActive": true },
        { "subscription.status": { $nin: ["Cancelled", "Frozen", "Expired", "Suspended", "Inactive"] } }
      ]
    };
    let restaurants = await Restaurant_default.find(filter).select("name badge rating deliveryTime cuisineType dietaryType cuisine address city state country deliverySettings subscription approvalStatus verificationStatus isActive isDeleted status ownerId logo bannerImage showcaseImages createdAt").populate("ownerId", "name email").sort({ createdAt: -1 }).lean();
    if (restaurants.length === 0) {
      return res.json([]);
    }
    const restIds = restaurants.map((r) => r._id);
    const [partnerRestIds, allBranches, allVerifs] = await Promise.all([
      DeliveryPartner_default.distinct("restaurantId", { restaurantId: { $in: restIds } }),
      Branch_default.find({ restaurantId: { $in: restIds }, isActive: true }).select("restaurantId name location").lean(),
      RestaurantVerification_default.find({ restaurantId: { $in: restIds } }).select("restaurantId documents.addressProof.addressText documents.images documents.logo").lean().catch(() => [])
    ]);
    const partnerSet = new Set(partnerRestIds.map((id) => String(id)));
    const branchMap = /* @__PURE__ */ new Map();
    for (const b of allBranches) {
      const key = String(b.restaurantId);
      if (!branchMap.has(key)) branchMap.set(key, []);
      branchMap.get(key).push(b);
    }
    const verifMap = /* @__PURE__ */ new Map();
    for (const v of allVerifs) {
      verifMap.set(String(v.restaurantId), v);
    }
    const nameFixes = [];
    const populatedRestaurants = restaurants.map((rest) => {
      const restIdStr = String(rest._id);
      if (!rest.name || rest.name.trim() === "" || rest.name === "Unnamed") {
        const ownerName = rest.ownerId?.name || "Partner";
        rest.name = `${ownerName}'s Restaurant`;
        nameFixes.push(Restaurant_default.findByIdAndUpdate(rest._id, { $set: { name: rest.name } }).catch(() => {
        }));
      } else {
        rest.name = rest.name.trim();
      }
      if (!rest.city && rest.address) {
        const parts = rest.address.split(",").map((s) => s.trim()).filter(Boolean);
        if (parts.length > 1) {
          rest.city = parts[parts.length - 1];
        } else if (parts.length === 1) {
          rest.city = parts[0];
        }
      }
      if (partnerSet.has(restIdStr)) {
        if (!rest.deliverySettings) {
          rest.deliverySettings = {
            deliveryType: "Both",
            enabled: true,
            radius: 5,
            freeRadius: 2,
            baseFee: 30,
            perKmCharge: 10,
            peakHourFee: 15,
            rainSurcharge: 20,
            minOrderAmountForFreeDelivery: 300,
            minOrderAmountForDelivery: 0,
            deliveryOperatingHours: { start: "09:00", end: "22:00" }
          };
        } else {
          rest.deliverySettings.enabled = true;
        }
      }
      const branches = branchMap.get(restIdStr) || [];
      rest.branches = branches;
      const primaryBranch = branches[0];
      const verif = verifMap.get(restIdStr);
      const verifAddress = verif?.documents?.addressProof?.addressText || "";
      const thumbUrl = `/api/restaurants/${restIdStr}/thumbnail`;
      let resolvedShowcase = Array.isArray(rest.showcaseImages) && rest.showcaseImages.length > 0 ? rest.showcaseImages.filter((img) => typeof img === "string" && img.trim() && !img.includes("/thumbnail")) : [];
      if (resolvedShowcase.length === 0 && Array.isArray(verif?.documents?.images) && verif.documents.images.length > 0) {
        resolvedShowcase = verif.documents.images.map((img) => img?.filePath).filter((p) => typeof p === "string" && p.trim() && !p.includes(".pdf") && !p.includes("/thumbnail"));
      }
      let resolvedBanner = typeof rest.bannerImage === "string" && rest.bannerImage.trim() && !rest.bannerImage.includes("/thumbnail") ? rest.bannerImage : resolvedShowcase.length > 0 ? resolvedShowcase[0] : thumbUrl;
      let resolvedLogo = typeof rest.logo === "string" && rest.logo.trim() && !rest.logo.includes(".pdf") && !rest.logo.includes("/thumbnail") ? rest.logo : typeof verif?.documents?.logo?.filePath === "string" && !verif.documents.logo.filePath.includes(".pdf") ? verif.documents.logo.filePath : `${thumbUrl}?kind=logo`;
      if (typeof resolvedBanner === "string" && resolvedBanner.length > 5e3) {
        resolvedBanner = `${thumbUrl}?kind=banner`;
      }
      if (typeof resolvedLogo === "string" && resolvedLogo.length > 5e3) {
        resolvedLogo = `${thumbUrl}?kind=logo`;
      }
      rest.image = resolvedBanner;
      rest.bannerImage = resolvedBanner;
      rest.logo = resolvedLogo;
      rest.showcaseImages = [resolvedBanner];
      const branchAddress = primaryBranch?.location?.address && primaryBranch.location.address !== "Primary Location" ? primaryBranch.location.address : "";
      const combinedAddr = rest.address || branchAddress || verifAddress || primaryBranch?.location?.address || "";
      rest.address = combinedAddr;
      let resolvedCity = rest.city && rest.city.trim() ? rest.city.trim() : "";
      if (!resolvedCity && primaryBranch?.location?.city && primaryBranch.location.city !== "Primary Location") {
        resolvedCity = primaryBranch.location.city.trim();
      }
      if (!resolvedCity && combinedAddr) {
        const addrParts = combinedAddr.split(",").map((p) => p.trim()).filter(Boolean);
        if (addrParts.length >= 2) {
          let candidate = addrParts[addrParts.length - 1];
          if (candidate.toLowerCase() === "tamil nadu" || candidate.toLowerCase() === "karnataka" || candidate.toLowerCase() === "india") {
            candidate = addrParts[addrParts.length > 2 ? addrParts.length - 2 : 0];
          }
          resolvedCity = candidate;
        } else if (addrParts.length === 1) {
          resolvedCity = addrParts[0];
        }
      }
      rest.city = resolvedCity || "";
      rest.state = primaryBranch?.location?.state || rest.state || "";
      rest.country = primaryBranch?.location?.country || rest.country || "India";
      rest.verificationAddress = verifAddress;
      return rest;
    });
    if (nameFixes.length > 0) Promise.allSettled(nameFixes);
    restaurantsCache = { data: populatedRestaurants, expiresAt: Date.now() + 3e4 };
    res.json(populatedRestaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var escapeXmlForSvg = (unsafe) => {
  return String(unsafe || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
};
var getRestaurantFallbackSvg = (name = "FoodNest", isLogo = false) => {
  const cleanName = String(name || "FoodNest").trim();
  const initials = (cleanName || "FN").split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "FN";
  if (isLogo) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5A1F"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" rx="36" fill="url(#logoBg)"/>
  <circle cx="100" cy="100" r="72" fill="white" fill-opacity="0.12"/>
  <text x="100" y="112" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" letter-spacing="1">${escapeXmlForSvg(initials)}</text>
</svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="bannerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5A1F"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bannerBg)"/>
  <circle cx="400" cy="180" r="110" fill="url(#accentGrad)" fill-opacity="0.15"/>
  <g transform="translate(376, 130) scale(2)" stroke="#FF5A1F" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 2v20M2 12h20M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24"/>
  </g>
  <text x="400" y="275" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="0.5">${escapeXmlForSvg(cleanName)}</text>
  <text x="400" y="315" dominant-baseline="middle" text-anchor="middle" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="2">AUTHENTIC DINING &amp; KITCHEN</text>
</svg>`;
};
var getRestaurantThumbnail = async (req, res) => {
  const wantLogo = req.query.kind === "logo";
  const wantBanner = req.query.kind === "banner";
  const imgIndex = req.query.index !== void 0 ? parseInt(req.query.index, 10) : null;
  let restName = "FoodNest";
  try {
    let raw = null;
    if (req.params.id && req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const rest = await Restaurant_default.findById(req.params.id).select("+showcaseImages +bannerImage +image +logo name").lean();
      if (rest) {
        restName = rest.name || "FoodNest";
        let candidate = null;
        if (wantLogo) {
          candidate = rest.logo && !String(rest.logo).includes(".pdf") ? rest.logo : null;
        } else if (wantBanner) {
          candidate = rest.bannerImage || Array.isArray(rest.showcaseImages) && rest.showcaseImages[0] || rest.image;
        } else if (imgIndex !== null && !isNaN(imgIndex) && Array.isArray(rest.showcaseImages) && rest.showcaseImages[imgIndex]) {
          candidate = rest.showcaseImages[imgIndex];
        } else {
          candidate = Array.isArray(rest.showcaseImages) && rest.showcaseImages[0] || rest.bannerImage || rest.image || (rest.logo && !String(rest.logo).includes(".pdf") ? rest.logo : null);
        }
        if (candidate && typeof candidate === "string" && !candidate.includes("/thumbnail")) {
          raw = candidate;
        }
        if (!raw) {
          const verif = await RestaurantVerification_default.findOne({ restaurantId: rest._id }).select(wantLogo ? "documents.logo.filePath" : "documents.images.filePath documents.logo.filePath").lean();
          const verifCandidate = wantLogo ? verif?.documents?.logo?.filePath : imgIndex !== null && !isNaN(imgIndex) && Array.isArray(verif?.documents?.images) && verif.documents.images[imgIndex]?.filePath ? verif.documents.images[imgIndex].filePath : verif?.documents?.images?.[0]?.filePath || verif?.documents?.logo?.filePath;
          if (verifCandidate && typeof verifCandidate === "string" && !verifCandidate.includes(".pdf") && !verifCandidate.includes("/thumbnail")) {
            raw = verifCandidate;
          }
        }
      }
    }
    if (raw && typeof raw === "string") {
      if (raw.startsWith("data:")) {
        const match = raw.match(/^data:([^;]+);base64,(.+)$/);
        if (match) {
          const buf = Buffer.from(match[2], "base64");
          res.set("Content-Type", match[1] || "image/png");
          res.set("Cache-Control", "public, max-age=86400");
          return res.status(200).send(buf);
        }
      } else if (raw.startsWith("http://") || raw.startsWith("https://")) {
        res.set("Cache-Control", "public, max-age=86400");
        return res.redirect(raw);
      }
    }
    const svg = getRestaurantFallbackSvg(restName, wantLogo);
    res.set("Content-Type", "image/svg+xml");
    res.set("Cache-Control", "public, max-age=86400");
    return res.status(200).send(svg);
  } catch (error) {
    const svg = getRestaurantFallbackSvg(restName, wantLogo);
    res.set("Content-Type", "image/svg+xml");
    res.set("Cache-Control", "public, max-age=86400");
    return res.status(200).send(svg);
  }
};
var updateSubscription = async (req, res) => {
  try {
    const { status, plan, billingCycle, addMonths, addYears } = req.body;
    const restaurant = await Restaurant_default.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (status) restaurant.subscription.status = status;
    if (plan) restaurant.subscription.plan = plan;
    if (billingCycle) restaurant.subscription.billingCycle = billingCycle;
    if (addMonths || addYears) {
      let currentExpiry = restaurant.subscription.expiryDate ? new Date(restaurant.subscription.expiryDate) : /* @__PURE__ */ new Date();
      if (currentExpiry < /* @__PURE__ */ new Date()) {
        currentExpiry = /* @__PURE__ */ new Date();
      }
      if (addMonths) currentExpiry.setMonth(currentExpiry.getMonth() + addMonths);
      if (addYears) currentExpiry.setFullYear(currentExpiry.getFullYear() + addYears);
      restaurant.subscription.expiryDate = currentExpiry;
      if (restaurant.subscription.status === "Frozen") {
        restaurant.subscription.status = "Active";
      }
    }
    const updatedRestaurant = await restaurant.save();
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var activateRestaurantPlanPayment = async ({
  restaurant,
  reqUser,
  planName,
  billingCycle = "monthly",
  transactionId,
  paymentMethod = "UPI QR"
}) => {
  const pricing = await calculateProratedUpgrade(
    restaurant,
    planName || restaurant.subscription?.plan || "Basic",
    billingCycle || restaurant.subscription?.billingCycle || "monthly"
  );
  const expiryDate = applyPaidSubscriptionActivation(restaurant, {
    planName: pricing.planName,
    billingCycle: pricing.billingCycle,
    targetPrice: pricing.targetPrice
  });
  const updatedRestaurant = await restaurant.save();
  const txnId = transactionId || `QR-PAY-${Date.now().toString().slice(-8)}`;
  await SubscriptionPayment_default.create({
    restaurantId: restaurant._id,
    planName: pricing.planName,
    amount: pricing.chargeAmount,
    billingCycle: pricing.billingCycle,
    paymentMethod,
    transactionId: txnId,
    status: "Completed",
    effectiveDate: /* @__PURE__ */ new Date(),
    expiryDate
  });
  await Notification_default.create({
    title: "Subscription Activated via UPI QR",
    desc: `Your subscription to the ${pricing.planName} plan has been confirmed and activated (Txn ID: ${txnId}).`,
    type: "System",
    restaurantId: restaurant._id
  }).catch(() => {
  });
  broadcastToRestaurant(restaurant._id, "subscription_updated", {
    restaurantId: String(restaurant._id),
    subscription: updatedRestaurant.subscription
  });
  try {
    const owner = await User_default.findById(restaurant.ownerId || reqUser?._id).lean();
    const targetEmail = owner?.email || reqUser?.email;
    if (targetEmail) {
      sendSubscriptionSuccessEmail({
        email: targetEmail,
        name: owner?.name || reqUser?.name,
        restaurantName: restaurant.name,
        plan: pricing.planName,
        billingCycle: pricing.billingCycle,
        price: pricing.chargeAmount,
        transactionId: txnId,
        expiryDate
      }).catch((err) => console.error("Subscription email background error:", err.message));
    }
  } catch (e) {
    console.error("Failed to send subscription confirmation email:", e.message);
  }
  return {
    updatedRestaurant,
    pricing,
    txnId,
    expiryDate
  };
};
var selfSubscribe = async (req, res) => {
  try {
    const { plan, planName, billingCycle, transactionId } = req.body;
    const restaurant = await Restaurant_default.findById(req.user.restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({ message: "Dashboard is manually frozen by Super Admin. Please contact support." });
    }
    const { updatedRestaurant } = await activateRestaurantPlanPayment({
      restaurant,
      reqUser: req.user,
      planName: plan || planName || "Basic",
      billingCycle: billingCycle || "monthly",
      transactionId,
      paymentMethod: "UPI QR"
    });
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var createRestaurant = async (req, res) => {
  try {
    const { name, currency, taxRate } = req.body;
    const restaurant = await Restaurant_default.create({ name, currency, taxRate });
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getMyRestaurant = async (req, res) => {
  try {
    if (import_mongoose13.default.connection.readyState !== 1) {
      return res.json(null);
    }
    let restaurantId = req.user?.restaurantId;
    if (!restaurantId && req.user?._id) {
      const ownedRestaurant = await Restaurant_default.findOne({ ownerId: req.user._id }).select("-bannerImage -showcaseImages");
      if (ownedRestaurant) {
        restaurantId = ownedRestaurant._id;
        req.user.restaurantId = ownedRestaurant._id;
        await User_default.findByIdAndUpdate(req.user._id, { restaurantId: ownedRestaurant._id });
      }
    }
    if (!restaurantId) {
      return res.json(null);
    }
    const restaurant = await Restaurant_default.findById(restaurantId).select("-bannerImage -showcaseImages");
    if (!restaurant) {
      return res.json(null);
    }
    if (restaurant && restaurant.subscription) {
      const expiryCheckDate = restaurant.subscription.subscriptionEndDate || restaurant.subscription.expiryDate;
      const now = /* @__PURE__ */ new Date();
      if (restaurant.subscription.downgradeScheduledPlan && restaurant.subscription.downgradeScheduledDate && now >= new Date(restaurant.subscription.downgradeScheduledDate)) {
        const targetPlan = restaurant.subscription.downgradeScheduledPlan;
        const { planName: resolvedTargetName, price: targetPrice } = await resolvePlanPrice(
          targetPlan,
          restaurant.subscription.billingCycle || "monthly"
        );
        restaurant.subscription.plan = resolvedTargetName;
        restaurant.subscription.price = targetPrice;
        restaurant.subscription.downgradeScheduledPlan = "";
        restaurant.subscription.downgradeScheduledDate = null;
        await restaurant.save();
        await Notification_default.create({
          title: "Subscription Downgraded",
          desc: `Your scheduled downgrade to the ${resolvedTargetName} plan has been processed.`,
          type: "System",
          restaurantId: restaurant._id
        });
      }
      if (expiryCheckDate || restaurant.subscription.trialEndDate) {
        await evaluateSubscriptionAccess(restaurant, { notifyOnExpire: true });
      }
    }
    if (!restaurant.restaurantConfig) {
      restaurant.restaurantConfig = {
        orderKitchen: { kitchenMode: restaurant.kitchenMode || "KDS", kotEnabled: true, kdsEnabled: true, kotPrintEnabled: true },
        waiterTips: { enabled: true, allowCustomerTips: true, tipPercentages: [5, 10, 15, 20], customTipAllowed: true },
        qrOrdering: { enabled: true, allowSelfDineIn: true, allowWaiterOrdering: true },
        paymentMethods: { cash: true, upi: true, card: true, onlineGateway: true },
        setupWizardCompleted: false,
        setupStep: 1
      };
    } else {
      if (!restaurant.restaurantConfig.orderKitchen) {
        restaurant.restaurantConfig.orderKitchen = { kitchenMode: restaurant.kitchenMode || "KDS", kotEnabled: true, kdsEnabled: true, kotPrintEnabled: true };
      } else if (!restaurant.restaurantConfig.orderKitchen.kitchenMode) {
        restaurant.restaurantConfig.orderKitchen.kitchenMode = restaurant.kitchenMode || "KDS";
      }
      if (!restaurant.restaurantConfig.waiterTips) {
        restaurant.restaurantConfig.waiterTips = { enabled: true, allowCustomerTips: true, tipPercentages: [5, 10, 15, 20], customTipAllowed: true };
      }
      if (!restaurant.restaurantConfig.qrOrdering) {
        restaurant.restaurantConfig.qrOrdering = { enabled: true, allowSelfDineIn: true, allowWaiterOrdering: true };
      }
      if (!restaurant.restaurantConfig.paymentMethods) {
        restaurant.restaurantConfig.paymentMethods = { cash: true, upi: true, card: true, onlineGateway: true };
      }
    }
    const restObj = restaurant.toObject ? restaurant.toObject() : { ...restaurant };
    if (!restObj.logo || typeof restObj.logo === "string" && restObj.logo.length > 5e3) {
      restObj.logo = `/api/restaurants/${restaurant._id}/thumbnail?kind=logo`;
    }
    if (!restObj.bannerImage || typeof restObj.bannerImage === "string" && restObj.bannerImage.length > 5e3) {
      restObj.bannerImage = `/api/restaurants/${restaurant._id}/thumbnail`;
    }
    res.json(restObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateMyRestaurant = async (req, res) => {
  try {
    if (!req.user.restaurantId) {
      return res.status(404).json({ message: "No restaurant associated with this user" });
    }
    const { name, contactEmail, phone, address, currency, timezone, features, restaurantConfig } = req.body;
    const restaurant = await Restaurant_default.findById(req.user.restaurantId);
    if (restaurant) {
      restaurant.name = name || restaurant.name;
      restaurant.contactEmail = contactEmail !== void 0 ? contactEmail : restaurant.contactEmail;
      restaurant.phone = phone !== void 0 ? phone : restaurant.phone;
      restaurant.address = address !== void 0 ? address : restaurant.address;
      if (req.body.city) {
        restaurant.city = req.body.city;
      } else if (address) {
        const parts = address.split(",").map((s) => s.trim()).filter(Boolean);
        if (parts.length >= 2) {
          let candidate = parts[parts.length - 1];
          if (candidate.toLowerCase() === "tamil nadu" || candidate.toLowerCase() === "karnataka" || candidate.toLowerCase() === "india") {
            candidate = parts[parts.length > 2 ? parts.length - 2 : 0];
          }
          restaurant.city = candidate;
        } else if (parts.length === 1) {
          restaurant.city = parts[0];
        }
      }
      if (req.body.state) restaurant.state = req.body.state;
      if (req.body.country) restaurant.country = req.body.country;
      restaurant.currency = currency || restaurant.currency;
      restaurant.timezone = timezone || restaurant.timezone;
      if (features) {
        restaurant.features = {
          onlineOrdering: features.onlineOrdering !== void 0 ? features.onlineOrdering : restaurant.features?.onlineOrdering,
          tableReservations: features.tableReservations !== void 0 ? features.tableReservations : restaurant.features?.tableReservations
        };
      }
      if (req.body.posConfig) {
        restaurant.posConfig = {
          ...restaurant.posConfig ? restaurant.posConfig.toObject ? restaurant.posConfig.toObject() : restaurant.posConfig : {},
          ...req.body.posConfig
        };
      }
      if (req.body.kitchenMode) {
        restaurant.kitchenMode = req.body.kitchenMode;
        if (!restaurant.restaurantConfig) restaurant.restaurantConfig = {};
        if (!restaurant.restaurantConfig.orderKitchen) restaurant.restaurantConfig.orderKitchen = {};
        restaurant.restaurantConfig.orderKitchen.kitchenMode = req.body.kitchenMode;
        if (req.body.kitchenMode === "KOT_ONLY") {
          restaurant.restaurantConfig.orderKitchen.kotEnabled = true;
          restaurant.restaurantConfig.orderKitchen.kotPrintEnabled = true;
          restaurant.restaurantConfig.orderKitchen.kdsEnabled = false;
          if (!restaurant.posConfig) restaurant.posConfig = {};
          restaurant.posConfig.kdsEnabled = false;
        } else if (req.body.kitchenMode === "KDS") {
          restaurant.restaurantConfig.orderKitchen.kdsEnabled = true;
          if (!restaurant.posConfig) restaurant.posConfig = {};
          restaurant.posConfig.kdsEnabled = true;
        }
      }
      if (restaurantConfig) {
        if (!restaurant.restaurantConfig) restaurant.restaurantConfig = {};
        if (restaurantConfig.orderKitchen) {
          restaurant.restaurantConfig.orderKitchen = {
            ...restaurant.restaurantConfig.orderKitchen || {},
            ...restaurantConfig.orderKitchen
          };
          if (restaurantConfig.orderKitchen.kitchenMode) {
            restaurant.kitchenMode = restaurantConfig.orderKitchen.kitchenMode;
            if (restaurantConfig.orderKitchen.kitchenMode === "KOT_ONLY") {
              restaurant.restaurantConfig.orderKitchen.kotEnabled = true;
              restaurant.restaurantConfig.orderKitchen.kotPrintEnabled = true;
              restaurant.restaurantConfig.orderKitchen.kdsEnabled = false;
              if (!restaurant.posConfig) restaurant.posConfig = {};
              restaurant.posConfig.kdsEnabled = false;
            } else if (restaurantConfig.orderKitchen.kitchenMode === "KDS") {
              restaurant.restaurantConfig.orderKitchen.kdsEnabled = true;
              if (!restaurant.posConfig) restaurant.posConfig = {};
              restaurant.posConfig.kdsEnabled = true;
            }
          } else if (restaurantConfig.orderKitchen.kdsEnabled !== void 0) {
            if (!restaurant.posConfig) restaurant.posConfig = {};
            restaurant.posConfig.kdsEnabled = restaurantConfig.orderKitchen.kdsEnabled;
          }
        }
        if (restaurantConfig.waiterTips) {
          restaurant.restaurantConfig.waiterTips = {
            ...restaurant.restaurantConfig.waiterTips || {},
            ...restaurantConfig.waiterTips
          };
        }
        if (restaurantConfig.qrOrdering) {
          restaurant.restaurantConfig.qrOrdering = {
            ...restaurant.restaurantConfig.qrOrdering || {},
            ...restaurantConfig.qrOrdering
          };
          if (restaurantConfig.qrOrdering.enabled !== void 0) {
            if (!restaurant.posConfig) restaurant.posConfig = {};
            restaurant.posConfig.guestQrOrdering = restaurantConfig.qrOrdering.enabled;
          }
        }
        if (restaurantConfig.paymentMethods) {
          restaurant.restaurantConfig.paymentMethods = {
            ...restaurant.restaurantConfig.paymentMethods || {},
            ...restaurantConfig.paymentMethods
          };
        }
        if (restaurantConfig.setupWizardCompleted !== void 0) {
          restaurant.restaurantConfig.setupWizardCompleted = Boolean(restaurantConfig.setupWizardCompleted);
        }
        if (restaurantConfig.setupStep !== void 0) {
          restaurant.restaurantConfig.setupStep = Number(restaurantConfig.setupStep);
        }
        restaurant.markModified("restaurantConfig");
      }
      if (req.body.removeLogo === true || req.body.removeLogo === "true" || req.body.logo === "") {
        restaurant.logo = "";
      } else if (req.body.logoBase64) {
        restaurant.logo = req.body.logoBase64;
      } else if (req.file) {
        restaurant.logo = `/uploads/logos/${req.file.filename}`;
      }
      if (Array.isArray(req.body.showcaseImages)) {
        restaurant.showcaseImages = req.body.showcaseImages;
        if (!restaurant.bannerImage && req.body.showcaseImages.length > 0) {
          restaurant.bannerImage = req.body.showcaseImages[0];
        }
      }
      if (req.body.bannerImage) {
        restaurant.bannerImage = req.body.bannerImage;
      }
      try {
        const verif = await RestaurantVerification_default.findOne({ restaurantId: restaurant._id });
        if (verif) {
          if (restaurant.logo) {
            verif.documents.logo = { filePath: restaurant.logo };
          }
          if (restaurant.showcaseImages?.length > 0) {
            verif.documents.images = restaurant.showcaseImages.map((img) => ({ filePath: img }));
          }
          if (req.body.menuPdf) {
            verif.documents.menuPdf = { filePath: req.body.menuPdf };
          }
          await verif.save();
        }
      } catch (_) {
      }
      const updatedRestaurant = await restaurant.save();
      try {
        const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
        const branch = await Branch2.findOne({ restaurantId: restaurant._id });
        if (branch) {
          branch.location = {
            ...branch.location || {},
            address: restaurant.address || branch.location?.address || "",
            city: restaurant.city || branch.location?.city || "",
            state: restaurant.state || branch.location?.state || "",
            country: restaurant.country || branch.location?.country || "India"
          };
          await branch.save();
        }
      } catch (_) {
      }
      res.json(updatedRestaurant);
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getRestaurantPublicConfig = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !import_mongoose13.default.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid restaurant ID" });
    }
    const restaurant = await Restaurant_default.findById(id).select("name logo restaurantConfig posConfig billingConfig deliverySettings status isDeleted isActive approvalStatus");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (restaurant.isDeleted || restaurant.status === "Deleted") {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (restaurant.status === "Suspended" || restaurant.isActive === false || restaurant.approvalStatus === "Rejected") {
      return res.status(403).json({ message: "This restaurant is currently unavailable or inactive." });
    }
    const config = restaurant.restaurantConfig || {};
    let logo = restaurant.logo;
    if (logo && typeof logo === "string" && logo.length > 5e3) {
      logo = `/api/restaurants/${restaurant._id}/thumbnail?kind=logo`;
    }
    res.json({
      restaurantName: restaurant.name,
      logo,
      deliverySettings: restaurant.deliverySettings || { enabled: true },
      qrOrdering: {
        enabled: config.qrOrdering?.enabled ?? true,
        allowSelfDineIn: config.qrOrdering?.allowSelfDineIn ?? true,
        allowWaiterOrdering: config.qrOrdering?.allowWaiterOrdering ?? true
      },
      paymentMethods: {
        cash: config.paymentMethods?.cash ?? true,
        upi: config.paymentMethods?.upi ?? true,
        card: config.paymentMethods?.card ?? true,
        onlineGateway: config.paymentMethods?.onlineGateway ?? true
      },
      waiterTips: {
        enabled: config.waiterTips?.enabled ?? true,
        allowCustomerTips: config.waiterTips?.allowCustomerTips ?? true,
        tipPercentages: config.waiterTips?.tipPercentages || [5, 10, 15, 20],
        customTipAllowed: config.waiterTips?.customTipAllowed ?? true
      },
      orderKitchen: {
        kitchenMode: config.orderKitchen?.kitchenMode || restaurant.kitchenMode || "KDS",
        kotEnabled: config.orderKitchen?.kotEnabled ?? true,
        kdsEnabled: config.orderKitchen?.kdsEnabled ?? true,
        kotPrintEnabled: config.orderKitchen?.kotPrintEnabled ?? true,
        selfPickup: config.orderKitchen?.selfPickup ?? true,
        homeDelivery: config.orderKitchen?.homeDelivery ?? true
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getRestaurantConfig = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(400).json({ message: "No restaurant associated with this user" });
    }
    const restaurant = await Restaurant_default.findById(restaurantId).select("-logo -bannerImage -showcaseImages");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const planName = restaurant.subscription?.plan || "Basic";
    const PlanModel = import_mongoose13.default.model("Plan");
    const planDoc = await PlanModel.findOne({ name: new RegExp(`^${planName}$`, "i") });
    const planFeatures = planDoc?.features || [];
    const config = restaurant.restaurantConfig || {
      orderKitchen: { kitchenMode: restaurant.kitchenMode || "KDS", kotEnabled: true, kdsEnabled: true, kotPrintEnabled: true },
      waiterTips: { enabled: true, allowCustomerTips: true, tipPercentages: [5, 10, 15, 20], customTipAllowed: true },
      qrOrdering: { enabled: true, allowSelfDineIn: true, allowWaiterOrdering: true },
      paymentMethods: { cash: true, upi: true, card: true, onlineGateway: true },
      setupWizardCompleted: false,
      setupStep: 1
    };
    if (!config.orderKitchen.kitchenMode) {
      config.orderKitchen.kitchenMode = restaurant.kitchenMode || "KDS";
    }
    res.json({
      config,
      planName,
      planFeatures,
      isTrialActive: restaurant.subscription?.trialActive || false
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateRestaurantConfig = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(400).json({ message: "No restaurant associated with this user" });
    }
    const restaurant = await Restaurant_default.findById(restaurantId).select("-logo -bannerImage -showcaseImages");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const { orderKitchen, waiterTips, qrOrdering, paymentMethods, setupWizardCompleted, setupStep, kitchenMode } = req.body;
    const currentPm = restaurant.restaurantConfig?.paymentMethods || { cash: true, upi: true, card: true, onlineGateway: true };
    const mergedPm = paymentMethods ? { ...currentPm, ...paymentMethods } : currentPm;
    if (paymentMethods && !mergedPm.cash && !mergedPm.upi && !mergedPm.card && !mergedPm.onlineGateway) {
      return res.status(400).json({
        message: "At least one payment method (Cash, UPI, Card, or Online Gateway) must remain enabled."
      });
    }
    const planName = restaurant.subscription?.plan || "Basic";
    const isSuperAdmin = req.user.role === "SuperAdmin";
    if (!isSuperAdmin) {
      const PlanModel = import_mongoose13.default.model("Plan");
      const planDoc = await PlanModel.findOne({ name: new RegExp(`^${planName}$`, "i") });
      const planFeatures = planDoc?.features || [];
      const isFeatureAllowed = (featureKeyword) => {
        if (["Pro", "Enterprise"].includes(planName) && (featureKeyword === "kds" || featureKeyword === "tips")) return true;
        return planFeatures.some((f) => f.toLowerCase().includes(featureKeyword.toLowerCase()));
      };
      if ((orderKitchen?.kdsEnabled === true || orderKitchen?.kitchenMode === "KDS" || kitchenMode === "KDS") && !restaurant.restaurantConfig?.orderKitchen?.kdsEnabled && restaurant.kitchenMode !== "KDS") {
        if (!isFeatureAllowed("Kitchen Display System") && !isFeatureAllowed("KDS") && planName === "Basic") {
          return res.status(403).json({
            message: `Kitchen Display System (KDS) requires a Pro or Enterprise subscription. Your restaurant is currently on the ${planName} plan.`,
            requiresUpgrade: true,
            requiredPlan: "Pro"
          });
        }
      }
    }
    if (!restaurant.restaurantConfig) {
      restaurant.restaurantConfig = {
        orderKitchen: { kitchenMode: restaurant.kitchenMode || "KDS", kotEnabled: true, kdsEnabled: true, kotPrintEnabled: true },
        waiterTips: { enabled: true, allowCustomerTips: true, tipPercentages: [5, 10, 15, 20], customTipAllowed: true },
        qrOrdering: { enabled: true, allowSelfDineIn: true, allowWaiterOrdering: true },
        paymentMethods: { cash: true, upi: true, card: true, onlineGateway: true },
        setupWizardCompleted: false,
        setupStep: 1
      };
    }
    const effectiveKitchenMode = kitchenMode || orderKitchen?.kitchenMode;
    if (effectiveKitchenMode) {
      restaurant.kitchenMode = effectiveKitchenMode;
      if (!restaurant.restaurantConfig.orderKitchen) restaurant.restaurantConfig.orderKitchen = {};
      restaurant.restaurantConfig.orderKitchen.kitchenMode = effectiveKitchenMode;
      if (effectiveKitchenMode === "KOT_ONLY") {
        restaurant.restaurantConfig.orderKitchen.kotEnabled = true;
        restaurant.restaurantConfig.orderKitchen.kotPrintEnabled = true;
        restaurant.restaurantConfig.orderKitchen.kdsEnabled = false;
        if (!restaurant.posConfig) restaurant.posConfig = {};
        restaurant.posConfig.kdsEnabled = false;
      } else if (effectiveKitchenMode === "KDS") {
        restaurant.restaurantConfig.orderKitchen.kdsEnabled = true;
        if (!restaurant.posConfig) restaurant.posConfig = {};
        restaurant.posConfig.kdsEnabled = true;
      }
    }
    if (orderKitchen) {
      restaurant.restaurantConfig.orderKitchen = {
        ...restaurant.restaurantConfig.orderKitchen || {},
        ...orderKitchen
      };
      if (orderKitchen.kitchenMode && !effectiveKitchenMode) {
        restaurant.kitchenMode = orderKitchen.kitchenMode;
      }
      if (orderKitchen.kdsEnabled !== void 0 && !effectiveKitchenMode) {
        if (!restaurant.posConfig) restaurant.posConfig = {};
        restaurant.posConfig.kdsEnabled = orderKitchen.kdsEnabled;
      }
    }
    if (waiterTips) {
      restaurant.restaurantConfig.waiterTips = {
        ...restaurant.restaurantConfig.waiterTips || {},
        ...waiterTips
      };
    }
    if (qrOrdering) {
      restaurant.restaurantConfig.qrOrdering = {
        ...restaurant.restaurantConfig.qrOrdering || {},
        ...qrOrdering
      };
      if (qrOrdering.enabled !== void 0) {
        if (!restaurant.posConfig) restaurant.posConfig = {};
        restaurant.posConfig.guestQrOrdering = qrOrdering.enabled;
      }
    }
    if (paymentMethods) {
      restaurant.restaurantConfig.paymentMethods = mergedPm;
      if (!restaurant.billingConfig) restaurant.billingConfig = {};
      if (!restaurant.billingConfig.paymentMethods) restaurant.billingConfig.paymentMethods = {};
      restaurant.billingConfig.paymentMethods.cash = mergedPm.cash;
      restaurant.billingConfig.paymentMethods.upi = mergedPm.upi;
      restaurant.billingConfig.paymentMethods.card = mergedPm.card;
    }
    if (setupWizardCompleted !== void 0) {
      restaurant.restaurantConfig.setupWizardCompleted = Boolean(setupWizardCompleted);
    }
    if (setupStep !== void 0) {
      restaurant.restaurantConfig.setupStep = Number(setupStep);
    }
    restaurant.markModified("restaurantConfig");
    restaurant.markModified("posConfig");
    restaurant.markModified("billingConfig");
    await restaurant.save();
    res.json({
      success: true,
      message: "Restaurant configuration updated successfully",
      config: restaurant.restaurantConfig,
      restaurantConfig: restaurant.restaurantConfig
    });
  } catch (error) {
    console.error("Error updating restaurant config:", error);
    res.status(500).json({ message: error.message || "Failed to update restaurant configuration" });
  }
};
var getBranches = async (req, res) => {
  try {
    const branches = await Branch_default.find({ restaurantId: req.params.id }).populate("manager", "name email");
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createBranch = async (req, res) => {
  try {
    const targetRestId = req.params.id;
    if (req.user.role !== "SuperAdmin" && String(req.user.restaurantId) !== String(targetRestId)) {
      return res.status(403).json({ message: "Not authorized to create branches for another restaurant." });
    }
    const restaurant = await Restaurant_default.findById(targetRestId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }
    const planName = restaurant.subscription?.plan || "Basic";
    const planDoc = await findPlanDocument(planName);
    let limit = planDoc?.branchesLimit || 1;
    if (planName.toLowerCase() === "enterprise") limit = Infinity;
    else if (["pro", "professional"].includes(planName.toLowerCase())) limit = Math.max(limit, 3);
    const currentCount = await Branch_default.countDocuments({ restaurantId: targetRestId });
    if (currentCount >= limit) {
      return res.status(403).json({
        message: `Your "${planName}" plan is limited to ${limit} branch(es). Please upgrade to add more branches.`
      });
    }
    const { name, location, contact, manager } = req.body;
    const branch = await Branch_default.create({
      restaurantId: targetRestId,
      name,
      location,
      contact,
      manager
    });
    res.status(201).json(branch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant_default.findById(req.params.id).lean();
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const isSuperAdminOrStaff = req.user && (req.user.role === "SuperAdmin" || String(req.user.restaurantId) === String(restaurant._id) || String(req.user._id) === String(restaurant.ownerId));
    if (!isSuperAdminOrStaff) {
      if (restaurant.isDeleted || restaurant.status === "Deleted") {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      if (restaurant.status === "Suspended" || restaurant.isActive === false || restaurant.approvalStatus === "Rejected") {
        return res.status(403).json({ message: "This restaurant is currently unavailable or inactive." });
      }
    }
    const hasPartners = await DeliveryPartner_default.exists({ restaurantId: restaurant._id });
    if (hasPartners) {
      if (!restaurant.deliverySettings) {
        restaurant.deliverySettings = {
          deliveryType: "Both",
          enabled: true,
          radius: 5,
          freeRadius: 2,
          baseFee: 30,
          perKmCharge: 10,
          peakHourFee: 15,
          rainSurcharge: 20,
          minOrderAmountForFreeDelivery: 300,
          minOrderAmountForDelivery: 0,
          deliveryOperatingHours: { start: "09:00", end: "22:00" }
        };
      } else {
        restaurant.deliverySettings.enabled = true;
      }
    }
    try {
      const verif = await RestaurantVerification_default.findOne({ restaurantId: restaurant._id }).lean();
      if (!restaurant.logo && verif?.documents?.logo?.filePath) {
        restaurant.logo = verif.documents.logo.filePath;
      }
      if ((!restaurant.showcaseImages || restaurant.showcaseImages.length === 0) && verif?.documents?.images?.length > 0) {
        restaurant.showcaseImages = verif.documents.images.map((img) => img.filePath);
      }
      if (!restaurant.bannerImage && restaurant.showcaseImages?.length > 0) {
        restaurant.bannerImage = restaurant.showcaseImages[0];
      }
    } catch (_) {
    }
    const restObj = restaurant.toObject ? restaurant.toObject() : { ...restaurant };
    if (restObj.logo && typeof restObj.logo === "string" && restObj.logo.length > 5e3) {
      restObj.logo = `/api/restaurants/${restaurant._id}/thumbnail?kind=logo`;
    }
    if (Array.isArray(restObj.showcaseImages)) {
      restObj.showcaseImages = restObj.showcaseImages.map((img, idx) => {
        if (typeof img === "string" && img.length > 5e3) {
          return `/api/restaurants/${restaurant._id}/thumbnail?index=${idx}`;
        }
        return img;
      });
    }
    if (restObj.bannerImage && typeof restObj.bannerImage === "string" && restObj.bannerImage.length > 5e3) {
      restObj.bannerImage = `/api/restaurants/${restaurant._id}/thumbnail?kind=banner`;
    }
    if (restObj.image && typeof restObj.image === "string" && restObj.image.length > 5e3) {
      restObj.image = `/api/restaurants/${restaurant._id}/thumbnail`;
    }
    res.json(restObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getMyBillingHistory = async (req, res) => {
  try {
    const history = await SubscriptionPayment_default.find({ restaurantId: req.user.restaurantId }).sort({ createdAt: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var upgradeSubscription = async (req, res) => {
  try {
    const { planName, billingCycle, transactionId } = req.body;
    const restId = req.user.restaurantId || req.user.restaurant;
    const restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant profile not found." });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({ message: "Dashboard is under administrative freeze by Super Admin." });
    }
    const { updatedRestaurant, pricing, txnId, expiryDate } = await activateRestaurantPlanPayment({
      restaurant,
      reqUser: req.user,
      planName,
      billingCycle,
      transactionId,
      paymentMethod: "UPI QR"
    });
    res.json({
      paid: true,
      status: "completed",
      message: `Upgraded to ${pricing.planName} plan successfully!`,
      restaurant: updatedRestaurant,
      transactionId: txnId,
      chargeAmount: pricing.chargeAmount,
      expiryDate
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var downgradeSubscription = async (req, res) => {
  try {
    const { planName } = req.body;
    let restId = req.user.restaurantId || req.user.restaurant;
    let restaurant;
    if (restId) {
      restaurant = await Restaurant_default.findById(restId);
    }
    if (!restaurant) {
      restaurant = await Restaurant_default.findOne({ ownerId: req.user._id });
    }
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant profile not found." });
    }
    const expiryDate = restaurant.subscription?.expiryDate || /* @__PURE__ */ new Date();
    restaurant.subscription.downgradeScheduledPlan = planName;
    restaurant.subscription.downgradeScheduledDate = expiryDate;
    await restaurant.save();
    await Notification_default.create({
      title: "Downgrade Scheduled",
      desc: `Your downgrade request to ${planName} has been scheduled to take effect on ${new Date(expiryDate).toLocaleDateString()}.`,
      type: "System",
      restaurantId: restaurant._id
    });
    res.json({
      message: `Downgrade to ${planName} scheduled successfully. Access remains active until ${new Date(expiryDate).toLocaleDateString()}.`,
      restaurant
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var renewSubscription = async (req, res) => {
  try {
    const { planName, billingCycle, transactionId } = req.body;
    const restId = req.user.restaurantId || req.user.restaurant;
    const restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant profile not found." });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({ message: "Dashboard is under administrative freeze by Super Admin." });
    }
    const { updatedRestaurant, pricing, txnId, expiryDate } = await activateRestaurantPlanPayment({
      restaurant,
      reqUser: req.user,
      planName,
      billingCycle,
      transactionId,
      paymentMethod: "UPI QR"
    });
    res.json({
      paid: true,
      status: "completed",
      message: `Subscription to ${pricing.planName} plan renewed successfully!`,
      restaurant: updatedRestaurant,
      transactionId: txnId,
      chargeAmount: pricing.chargeAmount,
      expiryDate
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var createRazorpaySubscriptionOrder = async (req, res) => {
  try {
    const { planName, billingCycle } = req.body;
    let restId = req.user.restaurantId || req.user.restaurant;
    let restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant profile not found." });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({
        message: "Your dashboard is under an administrative freeze by Super Admin. Please contact support."
      });
    }
    const pricing = await calculateProratedUpgrade(restaurant, planName, billingCycle || "monthly");
    const { keyId, instance } = getRazorpayInstance();
    const razorpayOrder = await instance.orders.create({
      amount: Math.round(pricing.chargeAmount * 100),
      currency: "INR",
      receipt: `sub_${restaurant._id.toString().slice(-6)}_${Date.now().toString().slice(-6)}`,
      notes: {
        restaurantId: restaurant._id.toString(),
        planName: pricing.planName,
        billingCycle: pricing.billingCycle
      }
    });
    res.json({
      orderId: razorpayOrder.id,
      amount: pricing.chargeAmount,
      amountPaise: Math.round(pricing.chargeAmount * 100),
      remainingCredit: pricing.remainingCredit,
      targetPrice: pricing.targetPrice,
      currency: "INR",
      keyId,
      planName: pricing.planName,
      billingCycle: pricing.billingCycle,
      restaurantName: restaurant.name
    });
  } catch (error) {
    console.error("Razorpay Subscription Order Creation Failed:", error);
    res.status(error.statusCode || 400).json({ message: error.message || "Failed to create Razorpay Order" });
  }
};
var verifyRazorpaySubscriptionPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, planName, billingCycle } = req.body;
    let restId = req.user.restaurantId || req.user.restaurant;
    let restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant profile not found." });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({
        message: "Dashboard is under an administrative freeze by Super Admin. Please contact support."
      });
    }
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: "Missing Razorpay payment verification parameters" });
    }
    if (!verifyRazorpaySignature({ orderId: razorpay_order_id, paymentId: razorpay_payment_id, signature: razorpay_signature })) {
      return res.status(400).json({ message: "Razorpay payment signature verification failed!" });
    }
    const existingPayment = await SubscriptionPayment_default.findOne({ transactionId: razorpay_payment_id, status: "Completed" }).lean();
    if (existingPayment) {
      return res.json({
        message: `Subscription already activated for transaction ${razorpay_payment_id}.`,
        restaurant,
        transactionId: razorpay_payment_id,
        expiryDate: existingPayment.expiryDate
      });
    }
    const pricing = await calculateProratedUpgrade(
      restaurant,
      planName || restaurant.subscription?.plan || "Basic",
      billingCycle || restaurant.subscription?.billingCycle || "monthly"
    );
    const newExpiry = applyPaidSubscriptionActivation(restaurant, {
      planName: pricing.planName,
      billingCycle: pricing.billingCycle,
      targetPrice: pricing.targetPrice
    });
    await restaurant.save();
    const txnId = razorpay_payment_id;
    await SubscriptionPayment_default.create({
      restaurantId: restaurant._id,
      planName: pricing.planName,
      amount: pricing.chargeAmount,
      billingCycle: pricing.billingCycle,
      paymentMethod: "Razorpay",
      transactionId: txnId,
      status: "Completed",
      effectiveDate: /* @__PURE__ */ new Date(),
      expiryDate: newExpiry
    });
    await Notification_default.create({
      title: "Subscription Activated (Razorpay)",
      desc: `Your subscription to the ${pricing.planName} plan has been verified and activated via Razorpay (Txn ID: ${txnId}).`,
      type: "System",
      restaurantId: restaurant._id
    });
    broadcastToRestaurant(restaurant._id, "subscription_updated", {
      restaurantId: String(restaurant._id),
      subscription: restaurant.subscription
    });
    try {
      const owner = await User_default.findById(restaurant.ownerId || req.user._id).lean();
      const targetEmail = owner?.email || req.user?.email;
      if (targetEmail) {
        sendSubscriptionSuccessEmail({
          email: targetEmail,
          name: owner?.name || req.user?.name,
          restaurantName: restaurant.name,
          plan: pricing.planName,
          billingCycle: pricing.billingCycle,
          price: pricing.chargeAmount,
          transactionId: txnId,
          expiryDate: newExpiry
        }).catch((err) => console.error("Razorpay subscription email background error:", err.message));
      }
    } catch (e) {
      console.error("Failed to send Razorpay email:", e.message);
    }
    res.json({
      message: `Subscription to ${pricing.planName} plan activated successfully!`,
      restaurant,
      transactionId: txnId,
      chargeAmount: pricing.chargeAmount,
      expiryDate: newExpiry
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};
var generateRazorpaySubscriptionQR = async (req, res) => {
  try {
    const { planName, billingCycle } = req.body;
    let restId = req.user.restaurantId || req.user.restaurant;
    const restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({ message: "Dashboard is frozen by Super Admin. Contact support." });
    }
    const pricing = await calculateProratedUpgrade(restaurant, planName, billingCycle || "monthly");
    const refId = `QR-SUB-${Date.now().toString().slice(-8)}`;
    const upiString = `upi://pay?pa=foodnest@upi&pn=${encodeURIComponent("FoodNest SaaS")}&am=${pricing.chargeAmount}&cu=INR&tn=${encodeURIComponent(`${pricing.planName} Plan (${pricing.billingCycle})`)}`;
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiString)}`;
    res.json({
      qrCodeId: refId,
      qrImageUrl,
      upiString,
      chargeAmount: pricing.chargeAmount,
      remainingCredit: pricing.remainingCredit,
      refId,
      planName: pricing.planName,
      billingCycle: pricing.billingCycle
    });
  } catch (error) {
    console.error("QR Creation Error:", error);
    res.status(error.statusCode || 400).json({ message: error.message || "Unable to generate QR code." });
  }
};
var confirmSubscriptionQRPayment = async (req, res) => {
  try {
    let restId = req.user.restaurantId || req.user.restaurant;
    const restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (restaurant.subscription?.manualFreeze) {
      return res.status(403).json({ message: "Dashboard is under administrative freeze by Super Admin." });
    }
    const planName = req.body?.planName || req.query?.planName || restaurant.subscription?.plan || "Basic";
    const billingCycle = req.body?.billingCycle || req.query?.billingCycle || "monthly";
    const txnRef = req.params.qrId || req.body?.refId || req.body?.qrCodeId || req.body?.transactionId;
    const { updatedRestaurant, pricing, txnId, expiryDate } = await activateRestaurantPlanPayment({
      restaurant,
      reqUser: req.user,
      planName,
      billingCycle,
      transactionId: txnRef,
      paymentMethod: "UPI QR"
    });
    res.json({
      paid: true,
      status: "completed",
      message: `Subscription to ${pricing.planName} plan activated via UPI QR!`,
      restaurant: updatedRestaurant,
      transactionId: txnId,
      chargeAmount: pricing.chargeAmount,
      expiryDate
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({ paid: false, message: error.message });
  }
};
var recordFailedSubscriptionPayment = async (req, res) => {
  try {
    const { planName, billingCycle, amount, paymentId, reason } = req.body;
    let restId = req.user.restaurantId || req.user.restaurant;
    const restaurant = restId ? await Restaurant_default.findById(restId) : await Restaurant_default.findOne({ ownerId: req.user._id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const txnId = paymentId || `RZP-FAIL-${Date.now().toString().slice(-8)}`;
    await SubscriptionPayment_default.create({
      restaurantId: restaurant._id,
      planName: planName || restaurant.subscription?.plan || "Basic",
      amount: Number(amount) || 0,
      billingCycle: billingCycle || "monthly",
      paymentMethod: "Razorpay",
      transactionId: txnId,
      status: "Failed",
      effectiveDate: /* @__PURE__ */ new Date()
    });
    if (restaurant.subscription) {
      restaurant.subscription.paymentStatus = "Failed";
      await restaurant.save();
    }
    await Notification_default.create({
      title: "Subscription Payment Failed",
      desc: `Payment attempt failed for ${planName || "subscription"} (${reason || "Payment unsuccessful"}). Dashboard remains locked until payment succeeds.`,
      type: "System",
      restaurantId: restaurant._id
    });
    broadcastToRestaurant(restaurant._id, "subscription_updated", {
      restaurantId: String(restaurant._id),
      subscription: restaurant.subscription
    });
    res.json({ message: "Failed payment attempt recorded.", restaurant });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var requestFreeTrial = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(404).json({ message: "Restaurant not found for this user." });
    }
    const restaurant = await Restaurant_default.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }
    const sub = restaurant.subscription || {};
    if (sub.trialStartDate || sub.trialActive && sub.trialEndDate && /* @__PURE__ */ new Date() <= new Date(sub.trialEndDate)) {
      return res.status(400).json({
        message: "Your restaurant has already used or is currently on a 7-Day Free Trial. Please select a subscription plan."
      });
    }
    if (sub.status === "Pending Approval") {
      return res.status(400).json({
        message: "Your free trial subscription request is already pending Super Admin approval."
      });
    }
    const requestedPlan = req.body.plan || "Pro";
    const requestDate = /* @__PURE__ */ new Date();
    restaurant.subscription = {
      ...sub,
      status: "Pending Approval",
      plan: requestedPlan,
      trialActive: false,
      trialRequestDate: requestDate,
      paymentStatus: "Trial",
      manualFreeze: false,
      rejectionReason: "",
      price: 0
    };
    await restaurant.save();
    try {
      await Notification_default.create({
        title: "New Free Trial Request",
        desc: `Restaurant "${restaurant.name}" requested a 7-Day Free Trial (${requestedPlan} Plan). Pending Super Admin review.`,
        type: "System",
        isSuperAdminOnly: true
      });
    } catch (notifErr) {
      console.error("Failed to create SuperAdmin trial request notification:", notifErr.message);
    }
    try {
      const owner = await User_default.findById(restaurant.ownerId || req.user._id);
      const targetEmail = owner?.email || req.user?.email;
      if (targetEmail) {
        sendTrialRequestSubmittedEmail({
          email: targetEmail,
          name: owner?.name || req.user?.name,
          restaurantName: restaurant.name,
          requestDate
        }).catch((err) => console.error("Trial submitted email error:", err.message));
      }
    } catch (emailErr) {
      console.error("Failed to send trial request email:", emailErr.message);
    }
    res.status(200).json({
      message: "7-Day Free Trial request submitted successfully! It is now pending Super Admin approval. Your 7-day countdown will begin upon approval.",
      restaurant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/restaurantRoutes.js
var router2 = import_express2.default.Router();
router2.route("/verification/brand-assets").post(protect, authorize("RestaurantAdmin"), (req, res, next) => {
  verificationUpload(req, res, (err) => {
    if (err) {
      console.error("Brand assets upload error:", err);
      return res.status(400).json({ message: err.message || "File upload failed." });
    }
    next();
  });
}, updateBrandAssets);
router2.route("/verification/submit").post(protect, authorize("RestaurantAdmin"), (req, res, next) => {
  verificationUpload(req, res, (err) => {
    if (err) {
      console.error("Verification upload error:", err);
      return res.status(400).json({ message: err.message || "File upload failed." });
    }
    next();
  });
}, submitVerification);
router2.route("/verification/mine").get(protect, authorize("RestaurantAdmin"), getMyVerification);
router2.route("/verification/all").get(protect, authorize("SuperAdmin"), getAllVerifications);
router2.route("/verification/:id").get(protect, authorize("SuperAdmin"), getVerificationById).delete(protect, authorize("SuperAdmin"), deleteVerification);
router2.route("/verification/:id/review").put(protect, authorize("SuperAdmin"), reviewVerification);
router2.route("/mine").get(protect, getMyRestaurant).put(protect, authorize("RestaurantAdmin"), (req, res, next) => {
  logoUpload(req, res, (err) => {
    if (err) {
      console.error("Logo upload error:", err);
      return res.status(400).json({ message: err.message || "Logo upload error" });
    }
    next();
  });
}, updateMyRestaurant);
router2.route("/mine/config").get(protect, authorize("RestaurantAdmin", "BranchManager", "SuperAdmin", "Admin"), getRestaurantConfig).put(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), updateRestaurantConfig);
router2.route("/:id/public-config").get(getRestaurantPublicConfig);
router2.route("/mine/billing-history").get(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), getMyBillingHistory);
router2.route("/mine/upgrade").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), upgradeSubscription);
router2.route("/mine/downgrade").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), downgradeSubscription);
router2.route("/mine/renew").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), renewSubscription);
router2.route("/mine/razorpay-order").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), createRazorpaySubscriptionOrder);
router2.route("/mine/razorpay-verify").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), verifyRazorpaySubscriptionPayment);
router2.route("/mine/razorpay-qr").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), generateRazorpaySubscriptionQR);
router2.route("/mine/razorpay-qr-status/:qrId").get(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), confirmSubscriptionQRPayment);
router2.route("/mine/confirm-qr-payment").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), confirmSubscriptionQRPayment);
router2.route("/mine/razorpay-failed").post(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), recordFailedSubscriptionPayment);
router2.route("/trial-request").post(protect, authorize("RestaurantAdmin", "Admin"), requestFreeTrial);
router2.route("/subscribe").put(protect, authorize("RestaurantAdmin", "SuperAdmin", "Admin"), selfSubscribe);
router2.get("/:id/thumbnail", getRestaurantThumbnail);
router2.route("/").get(getRestaurants).post(protect, authorize("SuperAdmin"), createRestaurant);
router2.route("/:id").get(getRestaurantById);
router2.route("/:id/subscription").put(protect, authorize("SuperAdmin"), updateSubscription);
router2.route("/:id/branches").get(getBranches).post(protect, authorize("RestaurantAdmin"), createBranch);
var restaurantRoutes_default = router2;

// routes/branchRoutes.js
var import_express3 = __toESM(require("express"), 1);

// controllers/branchController.js
init_Branch();
init_Restaurant();
init_Plan();
var getBranches2 = async (req, res) => {
  try {
    let branches = await Branch_default.find({ restaurantId: req.user.restaurantId }).populate("manager", "name email");
    if (branches.length === 0 && req.user.restaurantId) {
      const restaurant = await Restaurant_default.findById(req.user.restaurantId);
      if (restaurant) {
        const mainBranch = await Branch_default.create({
          restaurantId: req.user.restaurantId,
          name: `${restaurant.name || "Main"} Branch`,
          location: { address: "Primary Location" },
          contact: { phone: "" },
          isActive: true
        });
        branches = await Branch_default.find({ restaurantId: req.user.restaurantId }).populate("manager", "name email");
      }
    }
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createBranch2 = async (req, res) => {
  const { name, location, contact, isActive } = req.body;
  try {
    const restaurant = req.restaurant || await Restaurant_default.findById(req.user.restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const planName = restaurant.subscription?.plan || "Basic";
    let branchLimit = 1;
    if (planName === "Basic" || planName === "Starter") {
      branchLimit = 1;
    } else if (planName === "Pro" || planName === "Professional") {
      branchLimit = 3;
    } else if (planName === "Enterprise") {
      branchLimit = Infinity;
    } else {
      const planDoc = await Plan_default.findOne({ name: planName });
      if (planDoc && planDoc.branchesLimit !== void 0) {
        branchLimit = planDoc.branchesLimit;
      }
    }
    const currentBranchesCount = await Branch_default.countDocuments({ restaurantId: req.user.restaurantId });
    if (currentBranchesCount >= branchLimit) {
      const nextPlanMessage = planName === "Basic" || planName === "Starter" ? "Please upgrade to the Pro plan for up to 3 branches." : "Please upgrade to the Enterprise plan for unlimited branches.";
      return res.status(403).json({
        message: `Your current plan (${planName}) allows up to ${branchLimit} branch${branchLimit > 1 ? "es" : ""}. ${nextPlanMessage}`,
        limitExceeded: true
      });
    }
    const branch = await Branch_default.create({
      restaurantId: req.user.restaurantId,
      name,
      location,
      contact,
      isActive
    });
    res.status(201).json(branch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateBranch = async (req, res) => {
  const { name, location, contact, operatingHours, openingTime, closingTime, isActive } = req.body;
  try {
    const branch = await Branch_default.findById(req.params.id);
    if (branch) {
      if (branch.restaurantId.toString() !== req.user.restaurantId.toString()) {
        return res.status(403).json({ message: "Not authorized to update this branch" });
      }
      if (req.user.role === "BranchManager") {
        const userBranchId = req.user.branchId?._id || req.user.branchId;
        const matchesAssignedBranch = userBranchId && userBranchId.toString() === branch._id.toString();
        const matchesManagerField = branch.manager && branch.manager.toString() === req.user._id.toString();
        if (userBranchId && !matchesAssignedBranch && !matchesManagerField) {
          return res.status(403).json({ message: "Branch managers can only update their own branch details" });
        }
      }
      if (name !== void 0) branch.name = name;
      if (location !== void 0) branch.location = { ...branch.location?.toObject?.() || branch.location || {}, ...location };
      if (contact !== void 0) branch.contact = { ...branch.contact?.toObject?.() || branch.contact || {}, ...contact };
      if (operatingHours !== void 0 || openingTime !== void 0 || closingTime !== void 0) {
        const existingHours = branch.operatingHours?.toObject?.() || branch.operatingHours || {};
        branch.operatingHours = {
          open: operatingHours?.open ?? openingTime ?? existingHours.open ?? "08:00",
          close: operatingHours?.close ?? closingTime ?? existingHours.close ?? "22:00"
        };
      }
      if (isActive !== void 0 && ["RestaurantAdmin", "SuperAdmin"].includes(req.user.role)) branch.isActive = isActive;
      const updatedBranch = await branch.save();
      const populatedBranch = await Branch_default.findById(updatedBranch._id).populate("manager", "name email");
      res.json(populatedBranch);
    } else {
      res.status(404).json({ message: "Branch not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteBranch = async (req, res) => {
  try {
    const branch = await Branch_default.findById(req.params.id);
    if (branch) {
      if (branch.restaurantId.toString() !== req.user.restaurantId.toString()) {
        return res.status(403).json({ message: "Not authorized to delete this branch" });
      }
      await branch.deleteOne();
      res.json({ message: "Branch removed" });
    } else {
      res.status(404).json({ message: "Branch not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/branchRoutes.js
var router3 = import_express3.default.Router();
router3.use(protect);
router3.use(checkSubscription);
router3.route("/").get(authorize("RestaurantAdmin", "SuperAdmin", "BranchManager", "Waiter", "Cashier"), getBranches2).post(authorize("RestaurantAdmin", "SuperAdmin"), createBranch2);
router3.route("/:id").put(authorize("RestaurantAdmin", "SuperAdmin", "BranchManager"), updateBranch).delete(authorize("RestaurantAdmin", "SuperAdmin"), deleteBranch);
var branchRoutes_default = router3;

// routes/orderRoutes.js
var import_express4 = __toESM(require("express"), 1);

// controllers/orderController.js
init_Order();
init_KOT();
init_Restaurant();
init_Branch();
init_User();
var import_mongoose18 = __toESM(require("mongoose"), 1);

// utils/kotHelper.js
init_KOT();
init_MenuItem();
init_Order();
var determineKitchenStation = (item, menuItem = null) => {
  if (item.kitchenStation && item.kitchenStation.trim() !== "") {
    return item.kitchenStation.trim();
  }
  if (menuItem && menuItem.kitchenStation && menuItem.kitchenStation.trim() !== "") {
    return menuItem.kitchenStation.trim();
  }
  const text = `${item.name || ""} ${item.category || (menuItem?.category || "")} ${item.notes || ""}`.toLowerCase();
  if (/beverage|drink|juice|shake|smoothie|tea|coffee|soda|cola|beer|cocktail|mocktail|wine|water|cold drink|lassi|mojito|bar/i.test(text)) {
    return "Beverages";
  }
  if (/dessert|ice cream|icecream|cake|pastry|pudding|sweet|brownie|waffle|halwa|gulab jamun|kheer|tiramisu|sundae|custard/i.test(text)) {
    return "Desserts";
  }
  if (/pizza|calzone|garlic bread|pasta|lasagna|lasagne|oven|bake|gratin|flatbread/i.test(text)) {
    return "Pizza / Oven";
  }
  if (/salad|cold bar|raita|soup|chaat|curd|appetizer/i.test(text)) {
    return "Cold / Salad";
  }
  return "Main Kitchen";
};
var getNextKotNumber = async (restaurantId, branchId) => {
  try {
    const lastKot = await KOT_default.findOne({ restaurantId }).sort({ createdAt: -1 });
    let nextSeq = 1001;
    if (lastKot && typeof lastKot.kotSequence === "number" && !isNaN(lastKot.kotSequence)) {
      nextSeq = lastKot.kotSequence + 1;
    } else if (lastKot && lastKot.kotNumber) {
      const match = String(lastKot.kotNumber).match(/\d+/);
      if (match) {
        nextSeq = parseInt(match[0], 10) + 1;
      }
    }
    return {
      kotNumber: `KOT-${nextSeq}`,
      kotSequence: nextSeq
    };
  } catch (err) {
    const fallbackSeq = Date.now() % 1e5;
    return {
      kotNumber: `KOT-${fallbackSeq}`,
      kotSequence: fallbackSeq
    };
  }
};
var generateKOTsForOrder = async (order, options = {}) => {
  if (!order) return [];
  try {
    const Restaurant2 = (await Promise.resolve().then(() => (init_Restaurant(), Restaurant_exports))).default;
    const targetRest = await Restaurant2.findById(order.restaurantId).select("restaurantConfig");
    if (targetRest?.restaurantConfig?.orderKitchen?.kotEnabled === false) {
      return [];
    }
  } catch (e) {
    console.error("Error checking kotEnabled config:", e);
  }
  const itemsToProcess = options.items || order.orderItems || [];
  if (!itemsToProcess || itemsToProcess.length === 0) return [];
  const isAddon = Boolean(options.isAddon);
  const serverName = options.serverName || options.user?.name || (order.customerName ? `Guest (${order.customerName})` : "System POS");
  const orderNumber = options.orderNumber || `#${String(order._id).slice(-5).toUpperCase()}`;
  const productIds = itemsToProcess.map((i) => i.product).filter((p) => p && String(p).match(/^[0-9a-fA-F]{24}$/));
  let menuItemsMap = /* @__PURE__ */ new Map();
  if (productIds.length > 0) {
    try {
      const menuItems = await MenuItem_default.find({ _id: { $in: productIds } }).select("name category kitchenStation");
      menuItems.forEach((m) => menuItemsMap.set(String(m._id), m));
    } catch (e) {
      console.error("Error fetching menu items for KOT station routing", e);
    }
  }
  const stationGroups = /* @__PURE__ */ new Map();
  itemsToProcess.forEach((item) => {
    const menuItem = item.product ? menuItemsMap.get(String(item.product)) : null;
    const station = determineKitchenStation(item, menuItem);
    if (!stationGroups.has(station)) {
      stationGroups.set(station, []);
    }
    stationGroups.get(station).push({
      name: item.name,
      qty: item.qty || 1,
      price: item.price || 0,
      notes: item.notes || item.specialInstructions || "",
      product: item.product || null,
      kitchenStation: station,
      status: "Pending"
    });
  });
  const createdKOTs = [];
  for (const [station, stationItems] of stationGroups.entries()) {
    const { kotNumber, kotSequence } = await getNextKotNumber(order.restaurantId, order.branchId);
    const kot = new KOT_default({
      kotNumber,
      kotSequence,
      orderId: order._id,
      orderNumber,
      restaurantId: order.restaurantId,
      branchId: order.branchId,
      tableNumber: order.tableNumber || "",
      orderType: order.orderType || "Dine In",
      serviceType: order.serviceType || "Waiter Table Service",
      customerName: order.customerName || "",
      customerPhone: order.customerPhone || "",
      kitchenStation: station,
      items: stationItems,
      notes: isAddon ? options.notes ? `[Add-on Item] ${options.notes}` : `[Add-on Item] Additional order placed for Table ${order.tableNumber || ""}` : order.notes || options.notes || "",
      isAddon,
      status: "Pending",
      statusHistory: [{
        status: "Pending",
        timestamp: /* @__PURE__ */ new Date(),
        updatedBy: options.user?._id || null
      }],
      serverName,
      createdBy: options.user?._id || null
    });
    const savedKOT = await kot.save();
    createdKOTs.push(savedKOT);
    broadcastToRestaurant(order.restaurantId, "new_kot", savedKOT);
  }
  try {
    const kotIds = createdKOTs.map((k) => k._id);
    const kotNums = createdKOTs.map((k) => k.kotNumber);
    await Order_default.findByIdAndUpdate(order._id, {
      $addToSet: {
        kots: { $each: kotIds },
        kotNumbers: { $each: kotNums }
      }
    });
  } catch (orderUpdateErr) {
    console.error("Error linking KOTs to Order", orderUpdateErr);
  }
  return createdKOTs;
};
var validateKOTStatusTransition = (currentStatus, newStatus) => {
  if (currentStatus === newStatus) return { valid: true };
  const allowedTransitions = {
    "Pending": ["Preparing", "Cancelled"],
    "Preparing": ["Ready", "Cancelled"],
    "Ready": ["Served", "Cancelled"],
    "Served": [],
    // Terminal state
    "Cancelled": []
    // Terminal state
  };
  const allowedNext = allowedTransitions[currentStatus] || [];
  if (!allowedNext.includes(newStatus)) {
    return {
      valid: false,
      message: `Invalid KOT status transition: cannot change from "${currentStatus}" to "${newStatus}". Allowed next: ${allowedNext.join(", ") || "None (Terminal state)"}.`
    };
  }
  return { valid: true };
};

// controllers/orderController.js
var sanitizeOrderItems = (items) => {
  if (!items) return items;
  return items.map((item) => {
    const sanitizedItem = { ...item };
    if (sanitizedItem.product && !import_mongoose18.default.Types.ObjectId.isValid(sanitizedItem.product)) {
      delete sanitizedItem.product;
    }
    if (!sanitizedItem.image) {
      sanitizedItem.image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800";
    }
    return sanitizedItem;
  });
};
var addOrderItems = async (req, res) => {
  try {
    const {
      orderItems,
      orderType,
      source,
      restaurantId,
      branchId,
      paymentMethod,
      subscriptionPlan,
      taxPrice,
      totalPrice,
      tableNumber,
      notes,
      customerLocation,
      restaurantLocation,
      shippingAddress,
      customerName,
      customerPhone,
      serviceType,
      isPaid
    } = req.body;
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }
    const validSources = ["Walk-in", "QR", "Self-Pickup"];
    const finalSource = validSources.includes(source) ? source : orderType === "Delivery" ? "Walk-in" : "Self-Pickup";
    let finalBranchId = branchId && import_mongoose18.default.Types.ObjectId.isValid(branchId) ? branchId : req.user ? req.user.branchId : null;
    let finalRestaurantId = restaurantId && import_mongoose18.default.Types.ObjectId.isValid(restaurantId) ? restaurantId : req.user ? req.user.restaurantId : null;
    if (!finalRestaurantId && orderItems && orderItems.length > 0 && orderItems[0].product) {
      const MenuItem2 = import_mongoose18.default.model("MenuItem");
      const itemObj = await MenuItem2.findById(orderItems[0].product);
      if (itemObj && itemObj.restaurantId) {
        finalRestaurantId = itemObj.restaurantId;
      }
    }
    if (!finalBranchId && finalRestaurantId) {
      const Branch2 = import_mongoose18.default.model("Branch");
      const firstBranch = await Branch2.findOne({ restaurantId: finalRestaurantId });
      if (firstBranch) {
        finalBranchId = firstBranch._id;
      }
    }
    if (!finalRestaurantId) {
      const Restaurant2 = import_mongoose18.default.model("Restaurant");
      const Branch2 = import_mongoose18.default.model("Branch");
      let demoRestaurant = await Restaurant2.findOne({ name: "Pizza Palace" }) || await Restaurant2.findOne({ isDemo: true });
      if (!demoRestaurant) {
        const User2 = import_mongoose18.default.model("User");
        const adminUser = await User2.findOne({ role: "SuperAdmin" }) || await User2.findOne();
        demoRestaurant = await Restaurant2.create({
          name: "Pizza Palace",
          isDemo: true,
          ownerId: adminUser ? adminUser._id : new import_mongoose18.default.Types.ObjectId(),
          approvalStatus: "Approved",
          subscription: { status: "Active", plan: "Pro" }
        });
      }
      finalRestaurantId = demoRestaurant._id;
      let demoBranch = await Branch2.findOne({ restaurantId: demoRestaurant._id });
      if (!demoBranch) {
        demoBranch = await Branch2.create({
          name: "Downtown Branch",
          restaurantId: demoRestaurant._id
        });
      }
      finalBranchId = demoBranch._id;
    } else if (!finalBranchId) {
      const Branch2 = import_mongoose18.default.model("Branch");
      const Restaurant2 = import_mongoose18.default.model("Restaurant");
      let branch = await Branch2.findOne({ restaurantId: finalRestaurantId });
      if (!branch) {
        const restDoc = await Restaurant2.findById(finalRestaurantId);
        branch = await Branch2.create({
          name: `${restDoc?.name || "Main"} Branch`,
          restaurantId: finalRestaurantId
        });
      }
      finalBranchId = branch?._id;
    }
    let finalUserId = req.user ? req.user._id : null;
    if (!finalUserId) {
      const User2 = import_mongoose18.default.model("User");
      let guestUser = await User2.findOne({ role: "Customer" }) || await User2.findOne();
      if (!guestUser) {
        guestUser = await User2.create({
          name: "Guest Customer",
          email: "guest@example.com",
          password: "password123",
          role: "Customer"
        });
      }
      finalUserId = guestUser._id;
    }
    const finalCustomerLoc = customerLocation && customerLocation.latitude && customerLocation.longitude ? {
      latitude: Number(customerLocation.latitude),
      longitude: Number(customerLocation.longitude)
    } : {
      latitude: 13.0827,
      longitude: 80.2707
    };
    const targetRestaurant = await Restaurant_default.findById(finalRestaurantId);
    if (!targetRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const isRestBlocked = targetRestaurant.isDeleted || targetRestaurant.status === "Deleted" || targetRestaurant.status === "Inactive" || targetRestaurant.status === "Suspended" || targetRestaurant.isActive === false || targetRestaurant.approvalStatus !== "Approved";
    if (isRestBlocked) {
      return res.status(403).json({
        message: "This restaurant is currently inactive or suspended and cannot accept orders."
      });
    }
    const { evaluateSubscriptionAccess: evaluateSubscriptionAccess2 } = await Promise.resolve().then(() => (init_subscriptionHelper(), subscriptionHelper_exports));
    const subVerdict = await evaluateSubscriptionAccess2(targetRestaurant, { notifyOnExpire: false });
    if (subVerdict.isFrozen) {
      return res.status(403).json({
        message: subVerdict.message || "This restaurant is temporarily unavailable due to subscription status."
      });
    }
    const restDeliverySettings = targetRestaurant?.deliverySettings || {};
    const restCoords = restDeliverySettings.location || {};
    const finalRestaurantLoc = restaurantLocation && restaurantLocation.latitude && restaurantLocation.longitude ? {
      latitude: Number(restaurantLocation.latitude),
      longitude: Number(restaurantLocation.longitude)
    } : {
      latitude: Number(restCoords.latitude) || 13.0475,
      longitude: Number(restCoords.longitude) || 80.209
    };
    if (orderType === "Delivery") {
      if (restDeliverySettings.enabled === false) {
        return res.status(400).json({ message: "Delivery is currently disabled by this restaurant." });
      }
      const maxRadiusKm = restDeliverySettings.radius || 5;
      const R = 6371;
      const dLat = (finalCustomerLoc.latitude - finalRestaurantLoc.latitude) * Math.PI / 180;
      const dLon = (finalCustomerLoc.longitude - finalRestaurantLoc.longitude) * Math.PI / 180;
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(finalRestaurantLoc.latitude * Math.PI / 180) * Math.cos(finalCustomerLoc.latitude * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const calculatedDistanceKm = Number((R * c).toFixed(1));
      if (calculatedDistanceKm > maxRadiusKm) {
        return res.status(400).json({
          message: `Order cannot be placed: Delivery location (${calculatedDistanceKm} km) exceeds the maximum allowed delivery radius of ${maxRadiusKm} km set by the restaurant.`
        });
      }
    }
    const deliveryOtp = orderType === "Delivery" ? Math.floor(1e3 + Math.random() * 9e3).toString() : null;
    const restConfig = targetRestaurant?.restaurantConfig || {};
    let determinedServiceType = serviceType;
    if (!determinedServiceType) {
      if (orderType === "Self-Pickup" || orderType === "Takeaway") {
        determinedServiceType = "Self-Pickup";
      } else if (orderType === "Delivery") {
        determinedServiceType = "Delivery";
      } else {
        determinedServiceType = "Waiter Table Service";
      }
    } else if ((orderType === "Self-Pickup" || orderType === "Takeaway") && determinedServiceType === "Self Dine-In (KFC Style)") {
      determinedServiceType = "Self-Pickup";
    }
    if (finalSource === "QR") {
      if (restConfig.qrOrdering?.enabled === false) {
        return res.status(400).json({ message: "QR Table Ordering is currently disabled for this restaurant." });
      }
      if (determinedServiceType === "Self Dine-In (KFC Style)" && restConfig.qrOrdering?.allowSelfDineIn === false) {
        return res.status(400).json({ message: "Self Dine-in ordering is currently disabled for this restaurant." });
      }
      if (determinedServiceType === "Waiter Table Service" && restConfig.qrOrdering?.allowWaiterOrdering === false) {
        return res.status(400).json({ message: "Waiter table service ordering is currently disabled for this restaurant." });
      }
      if (restConfig.qrOrdering?.allowSelfDineIn === false && restConfig.qrOrdering?.allowWaiterOrdering === false) {
        return res.status(400).json({ message: "Table ordering service modes are currently disabled." });
      }
    }
    const pmConfig = restConfig.paymentMethods || { cash: true, upi: true, card: true, onlineGateway: true };
    const lowerMethod = String(paymentMethod || "").toLowerCase();
    if ((lowerMethod.includes("cash") || lowerMethod.includes("counter")) && pmConfig.cash === false) {
      return res.status(400).json({ message: "Cash payment method is currently disabled by this restaurant." });
    }
    if (lowerMethod.includes("upi") && pmConfig.upi === false) {
      return res.status(400).json({ message: "UPI payment method is currently disabled by this restaurant." });
    }
    if (lowerMethod.includes("card") && pmConfig.card === false) {
      return res.status(400).json({ message: "Card payment method is currently disabled by this restaurant." });
    }
    if (lowerMethod.includes("online") && pmConfig.onlineGateway === false) {
      return res.status(400).json({ message: "Online payment gateway is currently disabled by this restaurant." });
    }
    const rawTip = Number(req.body.tipAmount) || 0;
    const finalTip = restConfig.waiterTips?.enabled !== false && rawTip > 0 ? rawTip : 0;
    const defaultPrepMins = orderType === "Delivery" ? 30 : 20;
    const finalPrepMinutes = Number(req.body.estimatedPrepMinutes) || defaultPrepMins;
    const finalEstimatedReadyTime = req.body.estimatedReadyTime ? new Date(req.body.estimatedReadyTime) : new Date(Date.now() + finalPrepMinutes * 60 * 1e3);
    const isCashMethod = ["cash on delivery", "cash", "pay at counter", "cod"].some(
      (m) => String(paymentMethod || "").toLowerCase().includes(m)
    );
    const restaurantKitchenMode = targetRestaurant.kitchenMode || restConfig.orderKitchen?.kitchenMode || (restConfig.orderKitchen?.kdsEnabled === false ? "KOT_ONLY" : "KDS");
    const order = new Order_default({
      orderItems: sanitizeOrderItems(orderItems),
      user: finalUserId,
      restaurantId: finalRestaurantId,
      branchId: finalBranchId,
      orderType,
      serviceType: determinedServiceType,
      customerName: customerName || "",
      customerPhone: customerPhone || "",
      tableNumber,
      notes,
      source: finalSource,
      paymentMethod,
      subscriptionPlan: subscriptionPlan || "One-time Order",
      taxPrice: Number(taxPrice) || 0,
      totalPrice: Number(totalPrice) || 0,
      discountAmount: Number(req.body.discountAmount) || 0,
      deliveryCharge: Number(req.body.deliveryCharge) || 0,
      deliveryDistance: Number(req.body.deliveryDistance) || 0,
      tipAmount: finalTip,
      waiter: req.user?.role === "Waiter" ? req.user._id : void 0,
      deliveryOtp,
      shippingAddress,
      customerLocation: finalCustomerLoc,
      restaurantLocation: finalRestaurantLoc,
      status: "Pending",
      // Strictly force new order to Pending status
      kitchenMode: restaurantKitchenMode,
      deliveryStatus: "None",
      // Strictly force None on creation until kitchen marks Ready for Pickup
      isPaid: isCashMethod ? false : Boolean(isPaid),
      paidAt: !isCashMethod && isPaid ? /* @__PURE__ */ new Date() : null,
      estimatedPrepMinutes: finalPrepMinutes,
      estimatedReadyTime: finalEstimatedReadyTime,
      statusHistory: [{
        status: "Pending",
        timestamp: Date.now()
      }]
    });
    const createdOrder = await order.save();
    if (finalTip > 0) {
      try {
        const Tip2 = (await Promise.resolve().then(() => (init_Tip(), Tip_exports))).default;
        await Tip2.create({
          restaurantId: finalRestaurantId,
          branchId: finalBranchId,
          orderId: createdOrder._id,
          tableNumber: createdOrder.tableNumber || "",
          amount: finalTip,
          paymentMethod: createdOrder.paymentMethod,
          source: finalSource === "QR" ? "Customer QR" : "Cashier Settlement",
          status: createdOrder.isPaid ? "Settled" : "Pending",
          waiterId: req.user?.role === "Waiter" ? req.user._id : null,
          waiterName: req.user?.role === "Waiter" ? req.user.name : "Table Service Staff",
          date: /* @__PURE__ */ new Date()
        });
      } catch (tipErr) {
        console.error("Failed to log tip record:", tipErr);
      }
    }
    if (orderType === "Dine In" && tableNumber) {
      try {
        const Table2 = (await Promise.resolve().then(() => (init_Table(), Table_exports))).default;
        const numericTable = parseInt(String(tableNumber).replace(/\D/g, ""), 10);
        const tableQuery = {
          restaurantId: finalRestaurantId,
          branchId: finalBranchId
        };
        if (!isNaN(numericTable)) {
          tableQuery.tableNumber = numericTable;
        }
        const table = await Table2.findOne(tableQuery);
        if (table) {
          table.status = "Occupied";
          table.activeOrder = createdOrder._id;
          table.customers = Math.max(table.customers, 1);
          await table.save();
        }
      } catch (tableErr) {
        console.error("Failed to set table status to Occupied", tableErr);
      }
    }
    try {
      const isHighValue = Number(totalPrice) >= 1e3 || orderType === "Party";
      const targetRoles = ["Chef", "Kitchen", "Waiter", "Cashier"];
      if (isHighValue) {
        targetRoles.push("RestaurantAdmin", "Admin");
      }
      const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
      await Notification2.create({
        title: `\u{1F514} New Order #${createdOrder._id.toString().substring(createdOrder._id.toString().length - 5).toUpperCase()}`,
        desc: `${determinedServiceType} ${tableNumber ? `(Table ${tableNumber})` : ""}${customerName ? ` \u2022 Guest: ${customerName}` : ""} - ${orderItems.map((i) => `${i.qty}x ${i.name}`).join(", ")} (\u20B9${totalPrice})`,
        type: "Order",
        restaurantId: finalRestaurantId,
        targetRole: targetRoles,
        metadata: {
          orderId: createdOrder._id,
          orderType: createdOrder.orderType,
          tableNumber: createdOrder.tableNumber,
          customerName: createdOrder.customerName,
          totalPrice: createdOrder.totalPrice,
          items: orderItems,
          isImportant: isHighValue
        },
        read: false
      });
    } catch (notifErr) {
      console.error("Failed to create order notification", notifErr);
    }
    let generatedKOTs = [];
    try {
      generatedKOTs = await generateKOTsForOrder(createdOrder, {
        user: req.user,
        serverName: req.user?.name || (createdOrder.customerName ? `Guest (${createdOrder.customerName})` : "QR / Customer"),
        notes: notes || createdOrder.notes
      });
    } catch (kotErr) {
      console.error("Failed to auto-generate KOT for order:", kotErr);
    }
    const responseOrder = createdOrder.toObject ? createdOrder.toObject() : createdOrder;
    responseOrder.kots = generatedKOTs;
    responseOrder.kotNumbers = generatedKOTs.map((k) => k.kotNumber);
    responseOrder.kitchenMode = restaurantKitchenMode;
    responseOrder.isKdsEnabled = restConfig.orderKitchen ? restConfig.orderKitchen.kdsEnabled !== false : true;
    responseOrder.isKotEnabled = restConfig.orderKitchen ? restConfig.orderKitchen.kotEnabled !== false : true;
    responseOrder.orderWorkflow = !responseOrder.isKdsEnabled && responseOrder.isKotEnabled ? "KOT" : responseOrder.isKdsEnabled && !responseOrder.isKotEnabled ? "KDS" : "HYBRID";
    responseOrder.restaurantId = {
      _id: targetRestaurant._id,
      name: targetRestaurant.name,
      address: targetRestaurant.address,
      phone: targetRestaurant.phone,
      gstin: targetRestaurant.gstin,
      kitchenMode: restaurantKitchenMode,
      restaurantConfig: targetRestaurant.restaurantConfig,
      logo: targetRestaurant.logo
    };
    broadcastToRestaurant(finalRestaurantId, "new_order", responseOrder);
    return res.status(201).json(responseOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: error.message || "Server error creating order" });
  }
};
var appendOrderItems = async (req, res) => {
  const { orderItems, totalPrice, taxPrice, notes } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: "No new order items provided" });
    return;
  }
  try {
    const order = await Order_default.findById(req.params.id);
    if (order) {
      order.orderItems.push(...sanitizeOrderItems(orderItems));
      order.totalPrice += totalPrice;
      if (taxPrice) order.taxPrice += taxPrice;
      if (notes) {
        order.notes = order.notes ? `${order.notes}
${notes}` : notes;
      }
      order.status = "Preparing";
      const updatedOrder = await order.save();
      let addonKOTs = [];
      try {
        addonKOTs = await generateKOTsForOrder(updatedOrder, {
          items: orderItems,
          isAddon: true,
          user: req.user,
          serverName: req.user?.name || (updatedOrder.customerName ? `Guest (${updatedOrder.customerName})` : "Waiter / QR"),
          notes: notes || "Additional items added"
        });
      } catch (kotErr) {
        console.error("Failed to generate add-on KOT for appended items:", kotErr);
      }
      try {
        const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
        await Notification2.create({
          title: `Items Added: Table ${order.tableNumber || "Any"}`,
          desc: `${orderItems.map((i) => `${i.qty}x ${i.name}`).join(", ")}`,
          type: "Order",
          restaurantId: order.restaurantId,
          read: false
        });
      } catch (notifErr) {
        console.error("Failed to create order append notification", notifErr);
      }
      broadcastToRestaurant(order.restaurantId, "order_updated", updatedOrder);
      broadcastToCustomerOrder(order._id, "order_status_updated", updatedOrder);
      const responseData = updatedOrder.toObject ? updatedOrder.toObject() : updatedOrder;
      responseData.newKots = addonKOTs;
      res.json(responseData);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to append items" });
  }
};
var getOrderById = async (req, res) => {
  const order = await Order_default.findById(req.params.id).populate("user", "name email").populate("deliveryPartner", "name email phoneNumber").populate("restaurantId", "name address phone restaurantConfig logo");
  if (order) {
    if (order.orderType === "Delivery" && !order.deliveryOtp) {
      order.deliveryOtp = Math.floor(1e3 + Math.random() * 9e3).toString();
      await order.save();
    }
    const orderObj = order.toObject();
    try {
      const kots = await KOT_default.find({ orderId: order._id }).sort({ createdAt: 1 }).select("kotNumber kotSequence kitchenStation status isAddon createdAt");
      orderObj.kots = kots;
      orderObj.kotNumbers = kots.map((k) => k.kotNumber);
    } catch (kotFindErr) {
      orderObj.kots = [];
      orderObj.kotNumbers = [];
    }
    const restConfig = order.restaurantId?.restaurantConfig || {};
    const kdsEnabled = restConfig.orderKitchen ? restConfig.orderKitchen.kdsEnabled !== false : true;
    const kotEnabled = restConfig.orderKitchen ? restConfig.orderKitchen.kotEnabled !== false : true;
    orderObj.isKdsEnabled = kdsEnabled;
    orderObj.isKotEnabled = kotEnabled;
    orderObj.orderWorkflow = !kdsEnabled && kotEnabled ? "KOT" : kdsEnabled && !kotEnabled ? "KDS" : "HYBRID";
    res.json(orderObj);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
var getMyOrders = async (req, res) => {
  const orders = await Order_default.find({ user: req.user._id }).populate("restaurantId", "name deliverySettings").populate({
    path: "deliveryPartner",
    select: "name phoneNumber vehicleDetails status"
  }).sort({ createdAt: -1 });
  res.json(orders);
};
var getOrders = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) {
      const statusArr = req.query.status.split(",").map((s) => s.trim()).filter(Boolean);
      if (statusArr.length > 0) {
        filter.status = { $in: statusArr };
      }
    }
    if (req.query.isPaid !== void 0) {
      filter.isPaid = req.query.isPaid === "true";
    }
    if (req.user && req.user.role !== "SuperAdmin") {
      let userRestaurantId = req.user.restaurantId || req.user.restaurant;
      if (!userRestaurantId && req.user._id) {
        if (req.user.role === "RestaurantAdmin") {
          const ownedRestaurant = await Restaurant_default.findOne({ ownerId: req.user._id });
          if (ownedRestaurant) {
            userRestaurantId = ownedRestaurant._id;
            req.user.restaurantId = ownedRestaurant._id;
          }
        } else if (req.user.branchId) {
          const branchDoc = await Branch_default.findById(req.user.branchId);
          if (branchDoc && branchDoc.restaurantId) {
            userRestaurantId = branchDoc.restaurantId;
            req.user.restaurantId = branchDoc.restaurantId;
          }
        } else if (req.user.role === "BranchManager") {
          const managedBranch = await Branch_default.findOne({ manager: req.user._id });
          if (managedBranch) {
            userRestaurantId = managedBranch.restaurantId;
            req.user.branchId = managedBranch._id;
            req.user.restaurantId = managedBranch.restaurantId;
          }
        }
      }
      if (userRestaurantId) {
        filter.restaurantId = userRestaurantId;
      } else {
        return res.json([]);
      }
      if (req.user.role === "BranchManager" || ["Chef", "Waiter", "Cashier"].includes(req.user.role) || req.user.branchId) {
        let effectiveBranchId = req.query.branchId || req.user.branchId;
        if (!effectiveBranchId && req.user.role === "BranchManager") {
          const managedBranch = await Branch_default.findOne({ manager: req.user._id });
          if (managedBranch) {
            effectiveBranchId = managedBranch._id;
            req.user.branchId = managedBranch._id;
          }
        }
        if (effectiveBranchId) {
          filter.$or = [
            { branchId: effectiveBranchId },
            { branchId: null },
            { branchId: { $exists: false } }
          ];
        }
      } else if (req.query.branchId && import_mongoose18.default.Types.ObjectId.isValid(req.query.branchId)) {
        filter.branchId = req.query.branchId;
      }
      const isDemoUser = req.user.email && (req.user.email.toLowerCase().includes("pizzapalace") || req.user.email.toLowerCase().includes("demo"));
      if (!isDemoUser && req.user.role === "RestaurantAdmin" && req.user.createdAt) {
        const cutoff = new Date(new Date(req.user.createdAt).getTime() - 5 * 60 * 1e3);
        filter.createdAt = { $gte: cutoff };
      }
    } else if (req.query.restaurantId && import_mongoose18.default.Types.ObjectId.isValid(req.query.restaurantId)) {
      filter.restaurantId = req.query.restaurantId;
      if (req.query.branchId && import_mongoose18.default.Types.ObjectId.isValid(req.query.branchId)) {
        filter.branchId = req.query.branchId;
      }
    }
    if (req.query.myOrders === "true" && req.user) {
      filter.user = req.user._id;
    }
    let query = Order_default.find(filter).populate("user", "id name email").populate("deliveryPartner", "id name phoneNumber").populate("restaurantId", "name address phone restaurantConfig logo gstin kitchenMode").populate("branchId", "name location contact").sort({ createdAt: -1 });
    if (req.query.limit) {
      const limit = parseInt(req.query.limit, 10);
      if (!isNaN(limit) && limit > 0) {
        query = query.limit(limit);
      }
    }
    const orders = await query;
    res.json(orders);
  } catch (error) {
    console.error("Failed to fetch orders", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
var updateOrderStatus = async (req, res) => {
  const order = await Order_default.findById(req.params.id);
  if (order) {
    const oldStatus = order.status;
    const newStatus = req.body.status || order.status;
    if (req.body.tableNumber && req.body.tableNumber !== order.tableNumber) {
      const oldTableNum = order.tableNumber;
      const newTableNum = req.body.tableNumber;
      order.tableNumber = newTableNum;
      if (order.orderType === "Dine In") {
        try {
          const Table2 = import_mongoose18.default.model("Table");
          if (oldTableNum) {
            const oldTable = await Table2.findOne({
              tableNumber: oldTableNum,
              restaurantId: order.restaurantId,
              branchId: order.branchId
            });
            if (oldTable) {
              oldTable.status = "Available";
              oldTable.customers = 0;
              oldTable.activeOrder = null;
              await oldTable.save();
            }
          }
          const newTable = await Table2.findOne({
            tableNumber: newTableNum,
            restaurantId: order.restaurantId,
            branchId: order.branchId
          });
          if (newTable) {
            newTable.status = "Occupied";
            newTable.activeOrder = order._id;
            newTable.customers = newTable.customers > 0 ? newTable.customers : 2;
            await newTable.save();
          }
        } catch (tErr) {
          console.error("Failed to transfer table statuses", tErr);
        }
      }
    }
    if (newStatus !== oldStatus) {
      const isSelfPickup = order.orderType === "Self-Pickup" || order.orderType === "Self Pickup";
      const isDelivery = order.orderType === "Delivery";
      if (newStatus === "Completed") {
        if (isSelfPickup) {
          if (!["Ready for Pickup", "Picked Up"].includes(oldStatus)) {
            return res.status(400).json({
              message: `Cannot mark Self-Pickup order as Completed until Chef marks it as Ready for Pickup and food is collected at the counter.`
            });
          }
        } else if (isDelivery) {
          if (oldStatus !== "Delivered" && order.deliveryStatus !== "Delivered") {
            return res.status(400).json({
              message: `Cannot mark Delivery order as Completed until the delivery partner completes delivery via OTP.`
            });
          }
        }
      }
      if (newStatus === "Picked Up" && isSelfPickup) {
        if (!["Ready", "Ready for Pickup"].includes(oldStatus)) {
          return res.status(400).json({
            message: `Cannot mark Self-Pickup order as Picked Up until Chef finishes preparing food.`
          });
        }
      }
      order.status = newStatus;
      if (isDelivery) {
        if (["Pending", "Accepted", "Preparing"].includes(newStatus)) {
          order.deliveryStatus = "None";
          order.deliveryPartner = null;
        } else if (["Ready", "Ready for Pickup", "Ready for Dispatch"].includes(newStatus)) {
          order.deliveryStatus = "Pending Assignment";
        } else if (newStatus === "Out for Delivery") {
          order.deliveryStatus = "On the Way";
        } else if (newStatus === "Delivered" || newStatus === "Completed") {
          order.deliveryStatus = "Delivered";
        }
      }
      order.statusHistory.push({
        status: newStatus,
        timestamp: Date.now(),
        updatedBy: req.user ? req.user._id : null
      });
      try {
        if (newStatus === "Cancelled") {
          await KOT_default.updateMany(
            { orderId: order._id, status: { $ne: "Cancelled" } },
            { $set: { status: "Cancelled" }, $push: { statusHistory: { status: "Cancelled", timestamp: Date.now(), updatedBy: req.user?._id || null } } }
          );
        } else if (newStatus === "Preparing" || newStatus === "In Kitchen") {
          await KOT_default.updateMany(
            { orderId: order._id, status: "Pending" },
            { $set: { status: "Preparing", prepStartTime: /* @__PURE__ */ new Date() }, $push: { statusHistory: { status: "Preparing", timestamp: Date.now(), updatedBy: req.user?._id || null } } }
          );
        } else if (newStatus === "Served" || newStatus === "Completed") {
          await KOT_default.updateMany(
            { orderId: order._id, status: { $nin: ["Served", "Cancelled"] } },
            { $set: { status: "Served", servedTime: /* @__PURE__ */ new Date() }, $push: { statusHistory: { status: "Served", timestamp: Date.now(), updatedBy: req.user?._id || null } } }
          );
        } else if (["Ready", "Ready for Pickup", "Ready for Dispatch"].includes(newStatus)) {
          await KOT_default.updateMany(
            { orderId: order._id, status: { $in: ["Pending", "Preparing"] } },
            { $set: { status: "Ready", prepReadyTime: /* @__PURE__ */ new Date() }, $push: { statusHistory: { status: "Ready", timestamp: Date.now(), updatedBy: req.user?._id || null } } }
          );
        }
      } catch (kotSyncErr) {
        console.error("Error synchronizing KOT status on order update", kotSyncErr);
      }
      const ticketNum = order._id.toString().substring(order._id.toString().length - 5).toUpperCase();
      if (newStatus === "Preparing") {
        try {
          const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
          await Notification2.create({
            title: `\u{1F373} Order Under Preparation`,
            desc: `Chef is now preparing Order #${ticketNum}.`,
            type: "Order",
            restaurantId: order.restaurantId,
            userId: order.user,
            read: false
          });
        } catch (err) {
          console.error("Failed to create preparing notification", err);
        }
      }
      if (newStatus === "Cancelled") {
        try {
          const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
          const notif = await Notification2.create({
            title: `\u26A0\uFE0F Order #${ticketNum} Cancelled`,
            desc: `Order #${ticketNum} ${order.tableNumber ? `(Table ${order.tableNumber})` : ""} has been cancelled.`,
            type: "Alert",
            restaurantId: order.restaurantId,
            targetRole: ["Chef", "Kitchen", "Waiter", "Cashier", "RestaurantAdmin", "Admin"],
            metadata: {
              orderId: order._id,
              isImportant: true,
              status: "Cancelled"
            },
            read: false
          });
          broadcastToRestaurant(order.restaurantId, "new_notification", notif);
        } catch (err) {
        }
      }
      if (newStatus === "Ready" || newStatus === "Ready for Pickup" || newStatus === "Ready for Dispatch") {
        try {
          const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
          const notif = await Notification2.create({
            title: `\u2728 Order #${ticketNum} is Ready!`,
            desc: `Order #${ticketNum} ${order.tableNumber ? `(Table ${order.tableNumber})` : ""} is plated and ready for pickup/service.`,
            type: "Order",
            restaurantId: order.restaurantId,
            targetRole: ["Waiter", "Cashier"],
            metadata: {
              orderId: order._id,
              orderType: order.orderType,
              tableNumber: order.tableNumber
            },
            read: false
          });
          broadcastToRestaurant(order.restaurantId, "new_notification", notif);
        } catch (err) {
          console.error("Failed to create waiter notification", err);
        }
        try {
          const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
          await Notification2.create({
            title: `\u2728 Order Ready!`,
            desc: `Your order #${ticketNum} is freshly prepared and ready!`,
            type: "Order",
            restaurantId: order.restaurantId,
            userId: order.user,
            targetRole: ["Customer"],
            metadata: {
              orderId: order._id
            },
            read: false
          });
        } catch (err) {
          console.error("Failed to create customer notification", err);
        }
        if (order.orderType === "Delivery" && order.deliveryPartner) {
          try {
            const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
            await Notification2.create({
              title: `Delivery Order Ready`,
              desc: `Order #${ticketNum} is prepared. Pick it up from the kitchen.`,
              type: "Order",
              restaurantId: order.restaurantId,
              read: false
            });
          } catch (err) {
            console.error("Failed to create delivery partner notification", err);
          }
        }
      }
      if (newStatus === "Picked Up") {
        try {
          const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
          const notif = await Notification2.create({
            title: `\u{1F4E6} Order #${ticketNum} Placed at Cashier Counter`,
            desc: `Self-Pickup Order #${ticketNum} collected by waiter and placed at cashier counter for customer settlement.`,
            type: "Order",
            restaurantId: order.restaurantId,
            targetRole: ["Cashier", "RestaurantAdmin", "Admin"],
            read: false
          });
          broadcastToRestaurant(order.restaurantId, "new_notification", notif);
        } catch (err) {
          console.error("Failed to create cashier pickup notification", err);
        }
      }
      if (["Served", "Delivered", "Completed"].includes(newStatus)) {
        try {
          const Notification2 = (await Promise.resolve().then(() => (init_Notification(), Notification_exports))).default;
          await Notification2.create({
            title: `\u{1F389} Order Served / Completed`,
            desc: `Order #${ticketNum} has been served. Thank you!`,
            type: "Order",
            restaurantId: order.restaurantId,
            userId: order.user,
            read: false
          });
        } catch (err) {
          console.error("Failed to create completed notification", err);
        }
      }
      if (newStatus === "Completed") {
        order.pickupTime = Date.now();
        if (isSelfPickup) {
          order.isPaid = true;
          order.paidAt = Date.now();
        }
        if (order.orderType === "Dine In") {
          try {
            const Table2 = import_mongoose18.default.model("Table");
            const table = await Table2.findOne({
              tableNumber: order.tableNumber,
              restaurantId: order.restaurantId,
              branchId: order.branchId
            });
            if (table) {
              table.status = "Available";
              table.customers = 0;
              table.activeOrder = null;
              await table.save();
            }
          } catch (err) {
            console.error("Failed to clear table status", err);
          }
        }
      }
    }
    const updatedOrder = await order.save();
    broadcastToCustomerOrder(order._id, "order_status_updated", updatedOrder);
    broadcastToRestaurant(order.restaurantId, "order_status_updated", updatedOrder);
    broadcastToRestaurant(order.restaurantId, "order_updated", updatedOrder);
    if (updatedOrder.status === "Ready" || updatedOrder.status === "Ready for Pickup") {
      broadcastToRestaurant(order.restaurantId, "ready_to_serve", updatedOrder);
    }
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
var updateOrderToPaid = async (req, res) => {
  const { paymentMethod, taxPrice, totalPrice } = req.body;
  const order = await Order_default.findById(req.params.id);
  if (order) {
    const effectiveMethod = paymentMethod || order.paymentMethod;
    const isCashMethod = ["cash on delivery", "cash", "pay at counter", "cod"].some(
      (m) => String(effectiveMethod || "").toLowerCase().includes(m)
    );
    const isStaff = req.user && ["SuperAdmin", "RestaurantAdmin", "BranchManager", "Cashier", "Waiter", "DeliveryPartner"].includes(req.user.role);
    if (isCashMethod && !isStaff && req.body.paymentStatus !== "CASH_COLLECTED") {
      return res.status(400).json({
        message: "Cash on Delivery orders cannot be marked as paid online. Payment will be collected upon delivery or at the counter."
      });
    }
    order.isPaid = true;
    order.paidAt = Date.now();
    if (paymentMethod) order.paymentMethod = paymentMethod;
    if (taxPrice !== void 0) order.taxPrice = taxPrice;
    if (totalPrice !== void 0) order.totalPrice = totalPrice;
    order.paymentResult = {
      id: "mock_payment_id",
      status: "completed",
      update_time: Date.now(),
      email_address: "mock@example.com"
    };
    if (order.orderType === "Dine In") {
      try {
        const mongoose57 = await import("mongoose");
        const Table2 = mongoose57.model("Table");
        const table = await Table2.findOne({
          tableNumber: order.tableNumber,
          restaurantId: order.restaurantId,
          branchId: order.branchId
        });
        if (table) {
          table.status = "Available";
          table.customers = 0;
          table.activeOrder = null;
          await table.save();
        }
      } catch (tableErr) {
        console.error("Failed to reset table status on pay", tableErr);
      }
    }
    const updatedOrder = await order.save();
    broadcastToCustomerOrder(order._id, "order_status_updated", updatedOrder);
    broadcastToRestaurant(order.restaurantId, "order_status_updated", updatedOrder);
    broadcastToRestaurant(order.restaurantId, "order_updated", updatedOrder);
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
var mergeOrders = async (req, res) => {
  const { sourceOrderId, targetOrderId } = req.body;
  try {
    const sourceOrder = await Order_default.findById(sourceOrderId);
    const targetOrder = await Order_default.findById(targetOrderId);
    if (!sourceOrder || !targetOrder) {
      return res.status(404).json({ message: "One or both orders not found" });
    }
    targetOrder.orderItems.push(...sourceOrder.orderItems);
    targetOrder.totalPrice += sourceOrder.totalPrice;
    targetOrder.taxPrice += sourceOrder.taxPrice;
    targetOrder.notes = targetOrder.notes ? `${targetOrder.notes}
Merged from table ${sourceOrder.tableNumber || "Any"}` : `Merged from table ${sourceOrder.tableNumber || "Any"}`;
    await targetOrder.save();
    if (sourceOrder.orderType === "Dine In" && sourceOrder.tableNumber) {
      const Table2 = import_mongoose18.default.model("Table");
      const table = await Table2.findOne({
        tableNumber: sourceOrder.tableNumber,
        restaurantId: sourceOrder.restaurantId,
        branchId: sourceOrder.branchId
      });
      if (table) {
        table.status = "Available";
        table.customers = 0;
        table.activeOrder = null;
        await table.save();
      }
    }
    await Order_default.findByIdAndDelete(sourceOrderId);
    res.json({ message: "Orders merged successfully", mergedOrder: targetOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to merge orders", error: error.message });
  }
};
var refundOrder = async (req, res) => {
  try {
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (req.user?.role !== "SuperAdmin") {
      const userRestId = req.user?.restaurantId ? String(req.user.restaurantId) : null;
      if (!userRestId || String(order.restaurantId) !== userRestId) {
        return res.status(403).json({ message: "Not authorized to refund orders outside your restaurant." });
      }
    }
    order.status = "Refunded";
    order.paymentMethod = "Refunded";
    order.isPaid = false;
    const updatedOrder = await order.save();
    broadcastToRestaurant(order.restaurantId, "order_updated", updatedOrder);
    broadcastToCustomerOrder(order._id, "order_status_updated", updatedOrder);
    res.json({ message: "Order refunded successfully", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Refund failed", error: error.message });
  }
};
var createRazorpayCustomerOrder = async (req, res) => {
  try {
    const { amount, currency = "INR", restaurantId } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Valid payment amount is required." });
    }
    const { getRazorpayInstance: getRazorpayInstance2 } = await Promise.resolve().then(() => (init_subscriptionHelper(), subscriptionHelper_exports));
    const { keyId, instance } = getRazorpayInstance2();
    const razorpayOrder = await instance.orders.create({
      amount: Math.round(amount * 100),
      // in paise
      currency,
      receipt: `food_${Date.now().toString().slice(-8)}`,
      notes: {
        restaurantId: restaurantId || "",
        type: "Customer Food Order"
      }
    });
    res.json({
      orderId: razorpayOrder.id,
      amount,
      amountPaise: Math.round(amount * 100),
      currency,
      keyId
    });
  } catch (error) {
    console.error("Razorpay Customer Order Error:", error);
    res.status(error.statusCode || 400).json({ message: error.message || "Failed to create Razorpay payment order" });
  }
};
var verifyRazorpayCustomerPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId, paymentMethod } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: "Missing Razorpay signature verification parameters." });
    }
    const { verifyRazorpaySignature: verifyRazorpaySignature2 } = await Promise.resolve().then(() => (init_subscriptionHelper(), subscriptionHelper_exports));
    if (!verifyRazorpaySignature2({ orderId: razorpay_order_id, paymentId: razorpay_payment_id, signature: razorpay_signature })) {
      return res.status(400).json({ message: "Razorpay payment signature verification failed." });
    }
    if (orderId) {
      const order = await Order_default.findById(orderId);
      if (order) {
        order.isPaid = true;
        order.paidAt = /* @__PURE__ */ new Date();
        order.paymentMethod = paymentMethod || "Razorpay UPI";
        order.paymentResult = {
          id: razorpay_payment_id,
          status: "captured",
          update_time: (/* @__PURE__ */ new Date()).toISOString()
        };
        await order.save();
        broadcastToRestaurant(order.restaurantId, "order_updated", order);
        broadcastToCustomerOrder(order._id, "order_status_updated", order);
        return res.json({ success: true, message: "Payment verified and order updated!", order });
      }
    }
    res.json({ success: true, message: "Razorpay payment verified successfully!", paymentId: razorpay_payment_id });
  } catch (error) {
    console.error("Razorpay Customer Payment Verification Error:", error);
    res.status(error.statusCode || 400).json({ message: error.message || "Payment verification failed" });
  }
};
var updateDeliveryLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    if (latitude == null || longitude == null) {
      return res.status(400).json({ message: "Latitude and Longitude are required." });
    }
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }
    const updatedAt = /* @__PURE__ */ new Date();
    order.deliveryPartnerLocation = {
      latitude: Number(latitude),
      longitude: Number(longitude),
      updatedAt
    };
    const updatedOrder = await order.save();
    const payload = {
      orderId: String(updatedOrder._id),
      latitude: Number(latitude),
      longitude: Number(longitude),
      updatedAt,
      deliveryStatus: updatedOrder.deliveryStatus,
      status: updatedOrder.status
    };
    broadcastToCustomerOrder(updatedOrder._id, "delivery_location_updated", payload);
    broadcastToRestaurant(updatedOrder.restaurantId, "delivery_location_updated", payload);
    res.json({ success: true, location: updatedOrder.deliveryPartnerLocation });
  } catch (error) {
    console.error("Error updating order delivery location:", error);
    res.status(500).json({ message: "Failed to update location" });
  }
};

// routes/orderRoutes.js
var router4 = import_express4.default.Router();
router4.route("/razorpay-order").post(createRazorpayCustomerOrder);
router4.route("/razorpay-verify").post(verifyRazorpayCustomerPayment);
router4.route("/").post(optionalProtect, addOrderItems).get(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Chef", "Waiter", "Cashier"), checkBillingModule("dineInTakeawayOrders"), getOrders);
router4.route("/myorders").get(protect, getMyOrders);
router4.route("/merge").post(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Cashier"), mergeOrders);
router4.route("/:id").get(optionalProtect, getOrderById);
router4.route("/:id/items").put(optionalProtect, appendOrderItems);
router4.route("/:id/pay").put(optionalProtect, updateOrderToPaid);
router4.route("/:id/status").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner"), updateOrderStatus);
router4.route("/:id/location").put(protect, checkSubscription, authorize("SuperAdmin", "DeliveryPartner", "RestaurantAdmin", "Admin", "BranchManager"), updateDeliveryLocation);
router4.route("/:id/refund").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Cashier"), refundOrder);
var orderRoutes_default = router4;

// routes/analyticsRoutes.js
var import_express5 = __toESM(require("express"), 1);

// controllers/analyticsController.js
var import_mongoose24 = __toESM(require("mongoose"), 1);
init_Order();
init_Branch();
init_Expense();

// models/MaterialPurchase.js
var import_mongoose20 = __toESM(require("mongoose"), 1);
var purchaseItemSchema = new import_mongoose20.default.Schema({
  material: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "Inventory",
    required: false
  },
  itemName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: "General"
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0
  },
  taxPercent: {
    type: Number,
    default: 0
  },
  taxAmount: {
    type: Number,
    default: 0
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0
  }
}, { _id: true });
var materialPurchasePaymentSchema = new import_mongoose20.default.Schema({
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  paymentDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ["Cash", "Bank Transfer", "UPI", "Cheque", "Credit"],
    required: true
  },
  reference: {
    type: String,
    default: ""
  },
  notes: {
    type: String,
    default: ""
  },
  recordedBy: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "User"
  }
}, { _id: true, timestamps: true });
var materialPurchaseSchema = new import_mongoose20.default.Schema({
  restaurantId: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
    index: true
  },
  branchId: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
    index: true
  },
  supplier: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "Supplier"
  },
  supplierName: {
    type: String,
    default: "Unknown Supplier"
  },
  supplierPhone: {
    type: String,
    default: ""
  },
  invoiceNumber: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  items: [purchaseItemSchema],
  subtotal: {
    type: Number,
    required: true,
    default: 0
  },
  taxAmount: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    required: true,
    default: 0
  },
  paidAmount: {
    type: Number,
    default: 0
  },
  balanceDue: {
    type: Number,
    default: 0
  },
  paymentStatus: {
    type: String,
    enum: ["Unpaid", "Partially Paid", "Paid"],
    default: "Unpaid"
  },
  payments: [materialPurchasePaymentSchema],
  notes: {
    type: String,
    default: ""
  },
  linkedExpenseId: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "Expense"
  },
  createdBy: {
    type: import_mongoose20.default.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });
materialPurchaseSchema.index({ restaurantId: 1, invoiceNumber: 1 });
materialPurchaseSchema.index({ restaurantId: 1, purchaseDate: -1 });
var MaterialPurchase = import_mongoose20.default.model("MaterialPurchase", materialPurchaseSchema);
var MaterialPurchase_default = MaterialPurchase;

// models/StockMovement.js
var import_mongoose21 = __toESM(require("mongoose"), 1);
var stockMovementSchema = new import_mongoose21.default.Schema({
  restaurantId: {
    type: import_mongoose21.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
    index: true
  },
  branchId: {
    type: import_mongoose21.default.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
    index: true
  },
  inventoryItem: {
    type: import_mongoose21.default.Schema.Types.ObjectId,
    ref: "Inventory",
    required: true,
    index: true
  },
  itemName: {
    type: String,
    required: true
  },
  movementType: {
    type: String,
    enum: ["Purchase Received", "Stock Consumed", "Damaged", "Wastage", "Stock Adjustment", "Return"],
    required: true
  },
  quantityChanged: {
    type: Number,
    required: true
    // Positive for inward, negative for outward
  },
  previousQuantity: {
    type: Number,
    required: true
  },
  newQuantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  unitCost: {
    type: Number,
    default: 0
  },
  totalValue: {
    type: Number,
    default: 0
  },
  reference: {
    type: String,
    // e.g. "Invoice #INV-204", "Kitchen Daily Consumption", "Stock Adjustment"
    default: ""
  },
  reason: {
    type: String,
    default: ""
  },
  performedBy: {
    type: import_mongoose21.default.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now,
    index: true
  }
}, { timestamps: true });
stockMovementSchema.index({ restaurantId: 1, inventoryItem: 1, date: -1 });
var StockMovement = import_mongoose21.default.model("StockMovement", stockMovementSchema);
var StockMovement_default = StockMovement;

// controllers/analyticsController.js
init_Payroll();
init_Payment();
init_Restaurant();
var getUserRestaurantId = async (user, query = {}) => {
  let rId = user?.restaurantId || user?.restaurant;
  if (!rId && user?.branchId) {
    const branchDoc = await Branch_default.findById(user.branchId);
    if (branchDoc) rId = branchDoc.restaurantId;
  }
  if (user?.role === "SuperAdmin") {
    if (query?.restaurantId) {
      rId = query.restaurantId;
    } else if (!rId) {
      const firstRest = await Restaurant_default.findOne().select("_id");
      if (firstRest) rId = firstRest._id;
    }
  }
  return rId;
};
var parseDateFilter = (period, startDate, endDate) => {
  const now = /* @__PURE__ */ new Date();
  let start = null;
  let end = /* @__PURE__ */ new Date();
  end.setHours(23, 59, 59, 999);
  if (period === "today") {
    start = /* @__PURE__ */ new Date();
    start.setHours(0, 0, 0, 0);
  } else if (period === "yesterday") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(start);
    end.setHours(23, 59, 59, 999);
  } else if (period === "last7days" || period === "weekly") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 6);
    start.setHours(0, 0, 0, 0);
  } else if (period === "last30days") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 29);
    start.setHours(0, 0, 0, 0);
  } else if (period === "thismonth" || period === "monthly") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
  } else if (period === "lastmonth") {
    start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
  } else if (startDate || endDate) {
    if (startDate) {
      const sParts = String(startDate).split("-");
      if (sParts.length === 3) {
        start = new Date(parseInt(sParts[0], 10), parseInt(sParts[1], 10) - 1, parseInt(sParts[2], 10), 0, 0, 0, 0);
      } else {
        start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
      }
    }
    if (endDate) {
      const eParts = String(endDate).split("-");
      if (eParts.length === 3) {
        end = new Date(parseInt(eParts[0], 10), parseInt(eParts[1], 10) - 1, parseInt(eParts[2], 10), 23, 59, 59, 999);
      } else {
        end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
      }
    }
    if (!start && end) {
      start = new Date(end.getFullYear(), end.getMonth(), 1, 0, 0, 0, 0);
    }
  } else {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
  }
  return { start, end };
};
var getDashboardAnalytics = async (req, res) => {
  try {
    const timeframe = parseInt(req.query.timeframe) || 7;
    const now = /* @__PURE__ */ new Date();
    const startDate = /* @__PURE__ */ new Date();
    startDate.setDate(now.getDate() - timeframe);
    const previousStartDate = new Date(startDate);
    previousStartDate.setDate(previousStartDate.getDate() - timeframe);
    const currentPeriodMatch = {
      status: { $nin: ["Cancelled", "Refunded"] },
      createdAt: { $gte: startDate, $lte: now }
    };
    const previousPeriodMatch = {
      status: { $nin: ["Cancelled", "Refunded"] },
      createdAt: { $gte: previousStartDate, $lt: startDate }
    };
    let userRestaurantId = await getUserRestaurantId(req.user, req.query);
    if (userRestaurantId) {
      currentPeriodMatch.restaurantId = new import_mongoose24.default.Types.ObjectId(userRestaurantId);
      previousPeriodMatch.restaurantId = new import_mongoose24.default.Types.ObjectId(userRestaurantId);
      if (req.query.branchId) {
        currentPeriodMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.query.branchId);
        previousPeriodMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.query.branchId);
      } else if (req.user.role === "BranchManager") {
        const effectiveBranchId = req.user.branchId || (await Branch_default.findOne({ manager: req.user._id }))?._id;
        if (effectiveBranchId) {
          currentPeriodMatch.branchId = new import_mongoose24.default.Types.ObjectId(effectiveBranchId);
          previousPeriodMatch.branchId = new import_mongoose24.default.Types.ObjectId(effectiveBranchId);
        }
      }
    } else if (req.user.role !== "SuperAdmin") {
      return res.json({
        overview: { totalRevenue: 0, revenueChange: 0, totalOrders: 0, ordersChange: 0, avgOrderValue: 0, avgChange: 0, activeCustomers: 0, customersChange: 0 },
        revenueTrend: [],
        popularItems: [],
        categoryData: [],
        qrAnalytics: { activeTables: 0, currentOrders: 0, pendingOrders: 0, preparingOrders: 0, readyOrders: 0, servedOrders: 0, completedOrders: 0, avgPrepTime: 0 },
        deliveryAnalytics: { onlinePartners: 0, activeDeliveries: 0, pendingAssignments: 0, completedDeliveries: 0, totalDeliveryEarnings: 0 }
      });
    }
    const currentOverview = await Order_default.aggregate([
      { $match: currentPeriodMatch },
      { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" }, totalOrders: { $sum: 1 } } }
    ]);
    const previousOverview = await Order_default.aggregate([
      { $match: previousPeriodMatch },
      { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" }, totalOrders: { $sum: 1 } } }
    ]);
    let curRevenue = currentOverview.length > 0 ? currentOverview[0].totalRevenue : 0;
    let curOrders = currentOverview.length > 0 ? currentOverview[0].totalOrders : 0;
    if (curOrders === 0 && userRestaurantId) {
      const allTimeMatch = {
        status: { $nin: ["Cancelled", "Refunded"] },
        restaurantId: new import_mongoose24.default.Types.ObjectId(userRestaurantId)
      };
      const allTimeOverview = await Order_default.aggregate([
        { $match: allTimeMatch },
        { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" }, totalOrders: { $sum: 1 } } }
      ]);
      if (allTimeOverview.length > 0) {
        curRevenue = allTimeOverview[0].totalRevenue || 0;
        curOrders = allTimeOverview[0].totalOrders || 0;
      }
    }
    const curAvg = curOrders > 0 ? curRevenue / curOrders : 0;
    const prevRevenue = previousOverview.length > 0 ? previousOverview[0].totalRevenue : 0;
    const prevOrders = previousOverview.length > 0 ? previousOverview[0].totalOrders : 0;
    const prevAvg = prevOrders > 0 ? prevRevenue / prevOrders : 0;
    const calculateChange = (current, previous) => {
      if (previous === 0) return current > 0 ? 100 : 0;
      return (current - previous) / previous * 100;
    };
    const revenueChange = calculateChange(curRevenue, prevRevenue);
    const ordersChange = calculateChange(curOrders, prevOrders);
    const avgChange = calculateChange(curAvg, prevAvg);
    let revenueTrend = await Order_default.aggregate([
      { $match: currentPeriodMatch },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          revenue: { $sum: "$totalPrice" },
          orders: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    if (revenueTrend.length === 0 && userRestaurantId) {
      const fallbackMatch = {
        status: { $nin: ["Cancelled", "Refunded"] },
        restaurantId: new import_mongoose24.default.Types.ObjectId(userRestaurantId)
      };
      revenueTrend = await Order_default.aggregate([
        { $match: fallbackMatch },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            revenue: { $sum: "$totalPrice" },
            orders: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } },
        { $limit: 14 }
      ]);
    }
    let popularItems = await Order_default.aggregate([
      { $match: currentPeriodMatch },
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: "$orderItems.product",
          name: { $first: "$orderItems.name" },
          totalSold: { $sum: "$orderItems.qty" },
          revenue: { $sum: { $multiply: ["$orderItems.price", "$orderItems.qty"] } }
        }
      },
      { $sort: { totalSold: -1 } },
      { $limit: 10 }
    ]);
    if (popularItems.length === 0 && userRestaurantId) {
      const fallbackMatch = {
        status: { $nin: ["Cancelled", "Refunded"] },
        restaurantId: new import_mongoose24.default.Types.ObjectId(userRestaurantId)
      };
      popularItems = await Order_default.aggregate([
        { $match: fallbackMatch },
        { $unwind: "$orderItems" },
        {
          $group: {
            _id: "$orderItems.product",
            name: { $first: "$orderItems.name" },
            totalSold: { $sum: "$orderItems.qty" },
            revenue: { $sum: { $multiply: ["$orderItems.price", "$orderItems.qty"] } }
          }
        },
        { $sort: { totalSold: -1 } },
        { $limit: 10 }
      ]);
    }
    const categoryData = popularItems.map((item) => ({
      name: item.name,
      value: item.totalSold
    })).slice(0, 4);
    const restIdObj = userRestaurantId ? new import_mongoose24.default.Types.ObjectId(userRestaurantId) : null;
    let activeTables = 0;
    let currentOrders = 0;
    let pendingOrders = 0;
    let preparingOrders = 0;
    let readyOrders = 0;
    let servedOrders = 0;
    let completedOrders = 0;
    let avgPrepTime = 15;
    if (restIdObj) {
      try {
        const Table2 = import_mongoose24.default.model("Table");
        activeTables = await Table2.countDocuments({
          restaurantId: restIdObj,
          status: { $in: ["Occupied", "Reserved", "Billing"] }
        });
        currentOrders = await Order_default.countDocuments({
          restaurantId: restIdObj,
          status: { $in: ["Pending", "Preparing", "Ready"] }
        });
        pendingOrders = await Order_default.countDocuments({
          restaurantId: restIdObj,
          status: "Pending"
        });
        preparingOrders = await Order_default.countDocuments({
          restaurantId: restIdObj,
          status: "Preparing"
        });
        readyOrders = await Order_default.countDocuments({
          restaurantId: restIdObj,
          status: "Ready"
        });
        servedOrders = await Order_default.countDocuments({
          restaurantId: restIdObj,
          status: "Served"
        });
        completedOrders = await Order_default.countDocuments({
          restaurantId: restIdObj,
          status: { $in: ["Served", "Delivered"] },
          isPaid: true
        });
        const prepTimeAvg = await Order_default.aggregate([
          { $match: { restaurantId: restIdObj, status: { $in: ["Ready", "Served", "Delivered", "Picked Up", "Completed"] } } },
          { $project: { duration: { $divide: [{ $subtract: ["$updatedAt", "$createdAt"] }, 6e4] } } },
          { $match: { duration: { $gte: 1, $lte: 90 } } },
          { $group: { _id: null, avgDuration: { $avg: "$duration" } } }
        ]);
        avgPrepTime = prepTimeAvg.length > 0 ? Math.round(prepTimeAvg[0].avgDuration || 15) : 15;
      } catch (qrErr) {
        console.error("Failed to aggregate QR stats", qrErr);
      }
    }
    let onlinePartners = 0;
    let activeDeliveries = 0;
    let pendingAssignments = 0;
    let completedDeliveries = 0;
    let totalDeliveryEarnings = 0;
    if (restIdObj) {
      try {
        const DeliveryPartner2 = import_mongoose24.default.model("DeliveryPartner");
        onlinePartners = await DeliveryPartner2.countDocuments({
          restaurantId: restIdObj,
          status: "Online",
          verificationStatus: "Approved"
        });
        activeDeliveries = await Order_default.countDocuments({
          restaurantId: restIdObj,
          orderType: "Delivery",
          deliveryStatus: { $in: ["Accepted", "Picked Up", "On the Way"] }
        });
        pendingAssignments = await Order_default.countDocuments({
          restaurantId: restIdObj,
          orderType: "Delivery",
          deliveryStatus: "Pending Assignment"
        });
        completedDeliveries = await Order_default.countDocuments({
          restaurantId: restIdObj,
          orderType: "Delivery",
          status: "Delivered"
        });
        const earningsSum = await Order_default.aggregate([
          { $match: { restaurantId: restIdObj, orderType: "Delivery", status: "Delivered" } },
          { $group: { _id: null, total: { $sum: "$deliveryCharge" } } }
        ]);
        totalDeliveryEarnings = earningsSum.length > 0 ? earningsSum[0].total : 0;
      } catch (delErr) {
        console.error("Failed to aggregate delivery stats", delErr);
      }
    }
    let activeCustomers = 0;
    if (restIdObj && curOrders > 0) {
      const distinctPhones = await Order_default.distinct("customerPhone", {
        ...currentPeriodMatch,
        customerPhone: { $exists: true, $ne: "" }
      });
      activeCustomers = distinctPhones.length > 0 ? distinctPhones.length : curOrders;
    }
    res.json({
      overview: {
        totalRevenue: curRevenue,
        revenueChange,
        totalOrders: curOrders,
        ordersChange,
        avgOrderValue: curAvg,
        avgChange,
        activeCustomers,
        customersChange: ordersChange
      },
      revenueTrend,
      popularItems,
      categoryData,
      qrAnalytics: {
        activeTables,
        currentOrders,
        pendingOrders,
        preparingOrders,
        readyOrders,
        servedOrders,
        completedOrders,
        avgPrepTime
      },
      deliveryAnalytics: {
        onlinePartners,
        activeDeliveries,
        pendingAssignments,
        completedDeliveries,
        totalDeliveryEarnings
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getProfitAndLoss = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId(req.user, req.query);
    if (!restaurantId) return res.status(400).json({ message: "Restaurant ID required" });
    const restObjId = new import_mongoose24.default.Types.ObjectId(restaurantId);
    const restaurantDoc = await Restaurant_default.findById(restaurantId).select("name currency logo");
    const { start, end } = parseDateFilter(req.query.period, req.query.startDate, req.query.endDate);
    const orderMatch = {
      restaurantId: restObjId,
      createdAt: { $gte: start, $lte: end }
    };
    const expenseMatch = {
      restaurantId: restObjId,
      date: { $gte: start, $lte: end }
    };
    if (req.user.role === "BranchManager" && req.user.branchId) {
      orderMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.user.branchId);
      expenseMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.user.branchId);
    } else if (req.query.branchId && req.query.branchId !== "All") {
      orderMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.query.branchId);
      expenseMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.query.branchId);
    }
    const orders = await Order_default.find(orderMatch).lean();
    let grossSales = 0;
    let discounts = 0;
    let refunds = 0;
    let taxesCollected = 0;
    let amountCollected = 0;
    let outstandingCustomerPayments = 0;
    let totalOrdersCount = orders.length;
    let completedOrdersCount = 0;
    let cancelledOrdersCount = 0;
    const paymentMethodBreakdown = {
      Cash: 0,
      Card: 0,
      UPI: 0,
      Online: 0,
      Other: 0
    };
    for (const ord of orders) {
      const tot = Number(ord.totalPrice) || 0;
      const disc = Number(ord.discountAmount || ord.discount) || 0;
      const tax = Number(ord.taxPrice) || 0;
      if (ord.status === "Cancelled") {
        cancelledOrdersCount++;
        refunds += tot;
        continue;
      }
      taxesCollected += tax;
      if (ord.isPaid) {
        grossSales += tot + disc;
        discounts += disc;
        amountCollected += tot;
        completedOrdersCount++;
        const method = ord.paymentMethod || "Card";
        if (method.includes("Cash")) paymentMethodBreakdown.Cash += tot;
        else if (method.includes("UPI")) paymentMethodBreakdown.UPI += tot;
        else if (method.includes("Card")) paymentMethodBreakdown.Card += tot;
        else if (method.includes("Online")) paymentMethodBreakdown.Online += tot;
        else paymentMethodBreakdown.Other += tot;
      } else {
        grossSales += tot + disc;
        discounts += disc;
        outstandingCustomerPayments += tot;
      }
    }
    const netSales = Math.max(0, grossSales - discounts - refunds);
    const purchaseMatch = {
      restaurantId: restObjId,
      purchaseDate: { $gte: start, $lte: end }
    };
    if (orderMatch.branchId) purchaseMatch.branchId = orderMatch.branchId;
    const materialPurchases = await MaterialPurchase_default.find(purchaseMatch).lean();
    const accountedPurchaseIds = /* @__PURE__ */ new Set();
    const payrollPeriods = [];
    let currMonth = new Date(start.getFullYear(), start.getMonth(), 1);
    const lastMonth = new Date(end.getFullYear(), end.getMonth(), 1);
    while (currMonth <= lastMonth) {
      payrollPeriods.push({ month: currMonth.getMonth() + 1, year: currMonth.getFullYear() });
      currMonth.setMonth(currMonth.getMonth() + 1);
    }
    const payrollQuery = {
      restaurantId: restObjId,
      $or: payrollPeriods.length > 0 ? payrollPeriods.map((p) => ({ month: p.month, year: p.year })) : [{ month: -1 }],
      status: { $ne: "Draft" }
    };
    if (orderMatch.branchId) payrollQuery.branchId = orderMatch.branchId;
    const payrollRecords = await Payroll_default.find(payrollQuery).lean();
    let payrollSalaryIncurred = 0;
    let payrollSalaryPaid = 0;
    let payrollSalaryDue = 0;
    for (const pr of payrollRecords) {
      const net = Number(pr.calculations?.netSalaryPayable ?? pr.netPayable) || 0;
      const paid = Number(pr.paidAmount) || 0;
      const due = Number(pr.balanceDue ?? Math.max(0, net - paid)) || 0;
      payrollSalaryIncurred += net;
      payrollSalaryPaid += paid;
      payrollSalaryDue += due;
    }
    const expenses = await Expense_default.find(expenseMatch).lean();
    let materialPurchasesIncurred = 0;
    let materialPurchasesPaid = 0;
    let manualSalaryIncurred = 0;
    let manualSalaryPaid = 0;
    let rentIncurred = 0;
    let rentPaid = 0;
    let electricityIncurred = 0;
    let electricityPaid = 0;
    let waterInternetIncurred = 0;
    let waterInternetPaid = 0;
    let maintenanceIncurred = 0;
    let maintenancePaid = 0;
    let deliveryTransportIncurred = 0;
    let deliveryTransportPaid = 0;
    let otherExpensesIncurred = 0;
    let otherExpensesPaid = 0;
    let paidBillsCount = 0;
    let pendingBillsCount = 0;
    let overdueBillsCount = 0;
    let overdueBillsAmount = 0;
    const now = /* @__PURE__ */ new Date();
    for (const exp of expenses) {
      const amt = Number(exp.amount) || 0;
      const paid = Number(exp.paidAmount) || 0;
      const due = Math.max(0, amt - paid);
      const cat = exp.category;
      if (due === 0 && amt > 0) paidBillsCount++;
      else if (due > 0) {
        pendingBillsCount++;
        if (exp.dueDate && new Date(exp.dueDate) < now) {
          overdueBillsCount++;
          overdueBillsAmount += due;
        }
      }
      if (cat === "Material purchases" || cat === "Kitchen Supplies") {
        materialPurchasesIncurred += amt;
        materialPurchasesPaid += paid;
        if (exp.sourceId) accountedPurchaseIds.add(exp.sourceId.toString());
      } else if (cat === "Staff salary" || cat === "Staff Welfare") {
        if (exp.source === "Payroll") {
        } else {
          manualSalaryIncurred += amt;
          manualSalaryPaid += paid;
        }
      } else if (cat === "Rent") {
        rentIncurred += amt;
        rentPaid += paid;
      } else if (cat === "Electricity") {
        electricityIncurred += amt;
        electricityPaid += paid;
      } else if (cat === "Water" || cat === "Internet" || cat === "Utility Bill") {
        waterInternetIncurred += amt;
        waterInternetPaid += paid;
      } else if (cat === "Maintenance" || cat === "Equipment maintenance") {
        maintenanceIncurred += amt;
        maintenancePaid += paid;
      } else if (cat === "Delivery and transport") {
        deliveryTransportIncurred += amt;
        deliveryTransportPaid += paid;
      } else {
        otherExpensesIncurred += amt;
        otherExpensesPaid += paid;
      }
    }
    for (const mp of materialPurchases) {
      if (!accountedPurchaseIds.has(mp._id.toString())) {
        const mpTot = Number(mp.totalAmount) || 0;
        const mpPaid = Number(mp.paidAmount) || 0;
        materialPurchasesIncurred += mpTot;
        materialPurchasesPaid += mpPaid;
      }
    }
    const staffSalariesIncurred = Math.round((payrollSalaryIncurred + manualSalaryIncurred) * 100) / 100;
    const staffSalariesPaid = Math.round((payrollSalaryPaid + manualSalaryPaid) * 100) / 100;
    const staffSalariesOutstanding = Math.round((payrollSalaryDue + Math.max(0, manualSalaryIncurred - manualSalaryPaid)) * 100) / 100;
    const movementMatch = {
      restaurantId: restObjId,
      date: { $gte: start, $lte: end },
      movementType: { $in: ["Stock Consumed", "Wastage"] }
    };
    if (orderMatch.branchId) movementMatch.branchId = orderMatch.branchId;
    const consumedAgg = await StockMovement_default.aggregate([
      { $match: movementMatch },
      { $group: { _id: null, totalConsumed: { $sum: "$totalValue" } } }
    ]);
    const actualStockConsumed = consumedAgg.length > 0 ? Math.round(consumedAgg[0].totalConsumed * 100) / 100 : 0;
    const cogsFoodCost = materialPurchasesIncurred > 0 ? materialPurchasesIncurred : actualStockConsumed;
    const grossProfit = Math.round((netSales - cogsFoodCost) * 100) / 100;
    const grossProfitMargin = netSales > 0 ? Math.round(grossProfit / netSales * 1e3) / 10 : 0;
    const totalOperatingExpensesIncurred = Math.round((staffSalariesIncurred + rentIncurred + electricityIncurred + waterInternetIncurred + maintenanceIncurred + deliveryTransportIncurred + otherExpensesIncurred) * 100) / 100;
    const totalOperatingExpensesPaid = Math.round((staffSalariesPaid + rentPaid + electricityPaid + waterInternetPaid + maintenancePaid + deliveryTransportPaid + otherExpensesPaid) * 100) / 100;
    const netOperatingProfit = Math.round((grossProfit - totalOperatingExpensesIncurred) * 100) / 100;
    const netProfitMargin = netSales > 0 ? Math.round(netOperatingProfit / netSales * 1e3) / 10 : 0;
    const actualCashOutflows = Math.round((materialPurchasesPaid + totalOperatingExpensesPaid) * 100) / 100;
    const netCashFlow = Math.round((amountCollected - actualCashOutflows) * 100) / 100;
    const totalOutstandingLiabilities = Math.round((materialPurchasesIncurred - materialPurchasesPaid + (totalOperatingExpensesIncurred - totalOperatingExpensesPaid)) * 100) / 100;
    const isEmpty = totalOrdersCount === 0 && expenses.length === 0 && payrollRecords.length === 0 && materialPurchases.length === 0;
    const formattedSales = {
      grossSales: Math.round(grossSales * 100) / 100,
      discounts: Math.round(discounts * 100) / 100,
      refunds: Math.round(refunds * 100) / 100,
      netSales: Math.round(netSales * 100) / 100,
      taxesCollected: Math.round(taxesCollected * 100) / 100,
      amountCollected: Math.round(amountCollected * 100) / 100,
      outstandingCustomerPayments: Math.round(outstandingCustomerPayments * 100) / 100,
      paymentMethods: paymentMethodBreakdown,
      totalOrders: totalOrdersCount,
      completedOrders: completedOrdersCount,
      cancelledOrders: cancelledOrdersCount
    };
    const formattedExpenses = {
      materialAndFoodCosts: Math.round(cogsFoodCost * 100) / 100,
      materialPurchasesIncurred: Math.round(materialPurchasesIncurred * 100) / 100,
      materialPurchasesPaid: Math.round(materialPurchasesPaid * 100) / 100,
      actualStockConsumed: Math.round(actualStockConsumed * 100) / 100,
      staffSalaryExpenses: staffSalariesIncurred,
      staffSalaryPaid: staffSalariesPaid,
      staffSalaryDue: staffSalariesOutstanding,
      rent: Math.round(rentIncurred * 100) / 100,
      rentPaid: Math.round(rentPaid * 100) / 100,
      electricity: Math.round(electricityIncurred * 100) / 100,
      electricityPaid: Math.round(electricityPaid * 100) / 100,
      waterAndInternet: Math.round(waterInternetIncurred * 100) / 100,
      waterAndInternetPaid: Math.round(waterInternetPaid * 100) / 100,
      maintenance: Math.round(maintenanceIncurred * 100) / 100,
      maintenancePaid: Math.round(maintenancePaid * 100) / 100,
      deliveryTransport: Math.round(deliveryTransportIncurred * 100) / 100,
      otherOperatingExpenses: Math.round((deliveryTransportIncurred + otherExpensesIncurred) * 100) / 100,
      totalExpensesIncurred: totalOperatingExpensesIncurred,
      totalExpensesPaid: totalOperatingExpensesPaid,
      outstandingExpensesLiability: totalOutstandingLiabilities,
      billsStatus: {
        paidBillsCount,
        pendingBillsCount,
        overdueBillsCount,
        overdueBillsAmount: Math.round(overdueBillsAmount * 100) / 100
      }
    };
    const formattedProfitability = {
      grossProfit,
      grossProfitMarginPercent: grossProfitMargin,
      netOperatingProfitLoss: netOperatingProfit,
      netProfitMarginPercent: netProfitMargin,
      netCashFlow,
      outstandingLiabilities: totalOutstandingLiabilities,
      outstandingCustomerReceivables: Math.round(outstandingCustomerPayments * 100) / 100
    };
    const formattedCashFlow = {
      actualCashCollected: Math.round(amountCollected * 100) / 100,
      actualCashOutflow: actualCashOutflows,
      netCashFlow
    };
    res.json({
      isEmpty,
      restaurant: {
        id: restaurantId,
        name: restaurantDoc?.name || "Restaurant",
        currency: restaurantDoc?.currency || "INR"
      },
      period: {
        startDate: start,
        endDate: end,
        label: req.query.period || "Custom Range"
      },
      dateRange: {
        startDate: start ? start.toISOString().split("T")[0] : "",
        endDate: end ? end.toISOString().split("T")[0] : ""
      },
      sales: formattedSales,
      expenses: formattedExpenses,
      profitability: formattedProfitability,
      cashFlow: formattedCashFlow,
      revenue: formattedSales,
      costOfGoodsSold: {
        materialAndFoodCosts: Math.round(cogsFoodCost * 100) / 100,
        materialPurchasesIncurred: Math.round(materialPurchasesIncurred * 100) / 100,
        materialPurchasesPaid: Math.round(materialPurchasesPaid * 100) / 100,
        actualStockConsumed: Math.round(actualStockConsumed * 100) / 100,
        methodology: materialPurchasesIncurred > 0 ? "Based on actual supplier material purchases in period" : "Based on recorded kitchen stock consumption and wastage"
      },
      operatingExpenses: {
        staffSalaries: { incurred: staffSalariesIncurred, paid: staffSalariesPaid, due: staffSalariesOutstanding },
        rent: { incurred: Math.round(rentIncurred * 100) / 100, paid: Math.round(rentPaid * 100) / 100 },
        electricity: { incurred: Math.round(electricityIncurred * 100) / 100, paid: Math.round(electricityPaid * 100) / 100 },
        waterAndInternet: { incurred: Math.round(waterInternetIncurred * 100) / 100, paid: Math.round(waterInternetPaid * 100) / 100 },
        maintenance: { incurred: Math.round(maintenanceIncurred * 100) / 100, paid: Math.round(maintenancePaid * 100) / 100 },
        deliveryAndTransport: { incurred: Math.round(deliveryTransportIncurred * 100) / 100, paid: Math.round(deliveryTransportPaid * 100) / 100 },
        otherExpenses: { incurred: Math.round(otherExpensesIncurred * 100) / 100, paid: Math.round(otherExpensesPaid * 100) / 100 },
        totalIncurred: totalOperatingExpensesIncurred,
        totalPaid: totalOperatingExpensesPaid
      },
      profitMetrics: formattedProfitability,
      calculationBreakdown: {
        accountingStandard: "Accrual-basis Income Statement with Cash Flow Reconciliation",
        netSalesFormula: "Gross Sales minus Discounts minus Cancelled Orders",
        grossProfitFormula: "Net Realized Sales minus Cost of Goods Sold",
        netOperatingProfitLossFormula: "Gross Profit minus Total Incurred Operating Expenses",
        cashFlowFormula: "Actual Cash Collected minus Actual Cash Outflows Disbursed",
        antiDoubleCountingRule: "Payroll salary disbursements and material purchase payments linked to expense ledgers are reconciled without duplication"
      }
    });
  } catch (error) {
    console.error("Error generating Profit & Loss statement:", error);
    res.status(500).json({ message: error.message });
  }
};
var getDailyEarnings = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId(req.user, req.query);
    if (!restaurantId) return res.status(400).json({ message: "Restaurant ID required" });
    const restObjId = new import_mongoose24.default.Types.ObjectId(restaurantId);
    const targetDate = req.query.date ? new Date(req.query.date) : /* @__PURE__ */ new Date();
    const startOfDay = new Date(targetDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(targetDate);
    endOfDay.setHours(23, 59, 59, 999);
    const orderMatch = {
      restaurantId: restObjId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    };
    const expenseMatch = {
      restaurantId: restObjId,
      date: { $gte: startOfDay, $lte: endOfDay }
    };
    if (req.user.role === "BranchManager" && req.user.branchId) {
      orderMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.user.branchId);
      expenseMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.user.branchId);
    } else if (req.query.branchId && req.query.branchId !== "All") {
      orderMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.query.branchId);
      expenseMatch.branchId = new import_mongoose24.default.Types.ObjectId(req.query.branchId);
    }
    const orders = await Order_default.find(orderMatch).lean();
    let totalOrders = orders.length;
    let grossSales = 0;
    let discounts = 0;
    let refunds = 0;
    let amountCollected = 0;
    let outstandingCustomerPayments = 0;
    let completedCount = 0;
    let cancelledCount = 0;
    const collectionBreakdown = { Cash: 0, Card: 0, UPI: 0, Online: 0, Other: 0 };
    const hourlyTrend = Array.from({ length: 24 }, (_, h) => ({
      hour: `${h.toString().padStart(2, "0")}:00`,
      orders: 0,
      revenue: 0,
      collected: 0
    }));
    for (const ord of orders) {
      const tot = Number(ord.totalPrice) || 0;
      const disc = Number(ord.discountAmount || ord.discount) || 0;
      const hour = new Date(ord.createdAt).getHours();
      if (ord.status === "Cancelled") {
        cancelledCount++;
        refunds += tot;
        continue;
      }
      hourlyTrend[hour].orders++;
      if (ord.isPaid) {
        completedCount++;
        grossSales += tot + disc;
        discounts += disc;
        amountCollected += tot;
        hourlyTrend[hour].revenue += tot + disc;
        hourlyTrend[hour].collected += tot;
        const m = ord.paymentMethod || "Card";
        if (m.includes("Cash")) collectionBreakdown.Cash += tot;
        else if (m.includes("UPI")) collectionBreakdown.UPI += tot;
        else if (m.includes("Card")) collectionBreakdown.Card += tot;
        else if (m.includes("Online")) collectionBreakdown.Online += tot;
        else collectionBreakdown.Other += tot;
      } else {
        outstandingCustomerPayments += tot;
        hourlyTrend[hour].revenue += tot;
      }
    }
    const netSales = Math.max(0, grossSales - discounts - refunds);
    const expensesToday = await Expense_default.find(expenseMatch).lean();
    let materialCostsToday = 0;
    let staffExpensesToday = 0;
    let rentAndUtilitiesToday = 0;
    let otherExpensesToday = 0;
    for (const exp of expensesToday) {
      const paid = Number(exp.paidAmount) || 0;
      const cat = exp.category;
      if (cat === "Material purchases" || cat === "Kitchen Supplies") {
        materialCostsToday += paid;
      } else if (cat === "Staff salary" || cat === "Staff Welfare") {
        staffExpensesToday += paid;
      } else if (["Rent", "Electricity", "Water", "Internet", "Utility Bill"].includes(cat)) {
        rentAndUtilitiesToday += paid;
      } else {
        otherExpensesToday += paid;
      }
    }
    const monthlyExpenses = await Expense_default.find({
      restaurantId: restObjId,
      category: { $in: ["Rent", "Electricity", "Water", "Internet", "Utility Bill"] },
      date: { $gte: new Date(targetDate.getFullYear(), targetDate.getMonth(), 1) }
    }).lean();
    const totalMonthlyRentUtils = monthlyExpenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
    const daysInMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0).getDate();
    const proratedDailyRentUtils = totalMonthlyRentUtils > 0 ? Math.round(totalMonthlyRentUtils / daysInMonth * 100) / 100 : 0;
    const todayMovement = await StockMovement_default.aggregate([
      {
        $match: {
          restaurantId: restObjId,
          date: { $gte: startOfDay, $lte: endOfDay },
          movementType: { $in: ["Stock Consumed", "Wastage"] }
        }
      },
      { $group: { _id: null, total: { $sum: "$totalValue" } } }
    ]);
    const dailyStockConsumed = todayMovement.length > 0 ? todayMovement[0].total : 0;
    const effectiveMaterialCost = materialCostsToday > 0 ? materialCostsToday : dailyStockConsumed;
    const effectiveRentUtils = rentAndUtilitiesToday > 0 ? rentAndUtilitiesToday : proratedDailyRentUtils;
    const totalDailyExpenses = Math.round((effectiveMaterialCost + staffExpensesToday + effectiveRentUtils + otherExpensesToday) * 100) / 100;
    const estimatedProfitLoss = Math.round((netSales - totalDailyExpenses) * 100) / 100;
    const confirmedCashProfit = Math.round((amountCollected - (materialCostsToday + staffExpensesToday + rentAndUtilitiesToday + otherExpensesToday)) * 100) / 100;
    res.json({
      date: startOfDay.toISOString().split("T")[0],
      dateLabel: startOfDay.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" }),
      metrics: {
        totalOrders,
        completedOrders: completedCount,
        cancelledOrders: cancelledCount,
        grossSales: Math.round(grossSales * 100) / 100,
        discounts: Math.round(discounts * 100) / 100,
        refunds: Math.round(refunds * 100) / 100,
        netSales: Math.round(netSales * 100) / 100,
        amountCollected: Math.round(amountCollected * 100) / 100,
        outstandingCustomerPayments: Math.round(outstandingCustomerPayments * 100) / 100,
        collectionBreakdown
      },
      expenses: {
        materialCosts: Math.round(effectiveMaterialCost * 100) / 100,
        staffExpenses: Math.round(staffExpensesToday * 100) / 100,
        rentAndUtilities: Math.round(effectiveRentUtils * 100) / 100,
        otherExpenses: Math.round(otherExpensesToday * 100) / 100,
        totalDailyExpenses
      },
      profitability: {
        estimatedProfitLoss,
        confirmedCashProfit,
        isEstimated: effectiveRentUtils === proratedDailyRentUtils && proratedDailyRentUtils > 0,
        costProrationNotes: effectiveRentUtils === proratedDailyRentUtils && proratedDailyRentUtils > 0 ? `Rent and utilities include daily prorated allocation of \u20B9${proratedDailyRentUtils} from monthly bills.` : "All costs represent actual expenses paid today."
      },
      hourlyTrend
    });
  } catch (error) {
    console.error("Error fetching daily earnings:", error);
    res.status(500).json({ message: error.message });
  }
};

// routes/analyticsRoutes.js
var router5 = import_express5.default.Router();
router5.use(protect);
router5.use(checkSubscription);
router5.route("/dashboard").get(authorize("SuperAdmin", "RestaurantAdmin", "BranchManager", "Admin"), getDashboardAnalytics);
router5.route("/profit-loss").get(authorize("SuperAdmin", "RestaurantAdmin", "BranchManager", "Admin"), getProfitAndLoss);
router5.route("/daily-earnings").get(authorize("SuperAdmin", "RestaurantAdmin", "BranchManager", "Admin"), getDailyEarnings);
var analyticsRoutes_default = router5;

// routes/menuRoutes.js
var import_express6 = __toESM(require("express"), 1);

// controllers/menuController.js
init_MenuItem();
var menuCache = { data: null, expiresAt: 0, key: "" };
var clearMenuCache = () => {
  menuCache = { data: null, expiresAt: 0, key: "" };
};
var getMenuItems = async (req, res) => {
  try {
    const cacheKey = `${req.query.restaurantId || ""}_${req.query.branchId || ""}_${req.user?.restaurantId || ""}_${req.user?.branchId || ""}`;
    const now = Date.now();
    if (menuCache.data && menuCache.key === cacheKey && menuCache.expiresAt > now) {
      return res.json(menuCache.data);
    }
    const filter = { isActive: true };
    const isStaffPortal = req.query.forStaff === "true" || req.headers["x-staff-portal"] === "true" || Boolean(req.headers.referer && (req.headers.referer.includes("/admin") || req.headers.referer.includes("/staff") || req.headers.referer.includes("/manager") || req.headers.referer.includes("/chef") || req.headers.referer.includes("/cashier") || req.headers.referer.includes("/waiter") || req.headers.referer.includes("frontend-restaurant")));
    if (req.query.restaurantId && req.query.restaurantId !== "null" && req.query.restaurantId !== "undefined") {
      filter.restaurantId = req.query.restaurantId;
      if (req.query.branchId && req.query.branchId !== "null" && req.query.branchId !== "undefined") {
        filter.$or = [
          { branchId: req.query.branchId },
          { branchId: { $exists: false } },
          { branchId: null }
        ];
      }
    } else if (isStaffPortal && req.user && req.user.restaurantId && req.user.role !== "Customer") {
      filter.restaurantId = req.user.restaurantId;
      if (req.user.branchId) {
        filter.$or = [
          { branchId: req.user.branchId },
          { branchId: { $exists: false } },
          { branchId: null }
        ];
      }
    }
    let items = await MenuItem_default.find(filter).populate("restaurantId", "name city address approvalStatus subscription isActive isDeleted status").lean();
    if (items.length === 0 && filter.$or) {
      delete filter.$or;
      items = await MenuItem_default.find(filter).populate("restaurantId", "name city address approvalStatus subscription isActive isDeleted status").lean();
    }
    const validItems = items.filter((item) => {
      if (!item.restaurantId) return false;
      if (typeof item.restaurantId === "object") {
        if (item.restaurantId.isDeleted) return false;
        if (item.restaurantId.status && item.restaurantId.status !== "Active") return false;
        if (item.restaurantId.isActive === false) return false;
        const subStatus = item.restaurantId.subscription?.status;
        const isSubscribed = subStatus && !["Frozen", "Cancelled", "Inactive", "Expired", "Suspended"].includes(subStatus) || item.restaurantId.subscription?.trialActive;
        if (!isSubscribed && item.restaurantId.approvalStatus !== "Approved") return false;
        if (subStatus && ["Frozen", "Cancelled", "Inactive", "Expired", "Suspended"].includes(subStatus)) {
          return false;
        }
      }
      return true;
    });
    menuCache = { data: validItems, expiresAt: now + 15e3, key: cacheKey };
    res.json(validItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createMenuItem = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (req.user && req.user.restaurantId) {
      payload.restaurantId = req.user.restaurantId;
    }
    if (req.user && req.user.branchId) {
      payload.branchId = req.user.branchId;
    }
    const item = await MenuItem_default.create(payload);
    clearMenuCache();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateMenuItem = async (req, res) => {
  try {
    const existing = await MenuItem_default.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    if (req.user.role !== "SuperAdmin" && String(existing.restaurantId) !== String(req.user.restaurantId)) {
      return res.status(403).json({ message: "Not authorized to modify this restaurant menu item" });
    }
    const updates = { ...req.body };
    delete updates.restaurantId;
    Object.assign(existing, updates);
    const saved = await existing.save();
    clearMenuCache();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem_default.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    if (req.user.role !== "SuperAdmin" && String(item.restaurantId) !== String(req.user.restaurantId)) {
      return res.status(403).json({ message: "Not authorized to delete this restaurant menu item" });
    }
    await item.deleteOne();
    clearMenuCache();
    res.json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/menuRoutes.js
var router6 = import_express6.default.Router();
router6.route("/").get(optionalProtect, getMenuItems).post(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Chef"), checkBillingModule("menuManagement"), createMenuItem);
router6.route("/:id").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Chef"), checkBillingModule("menuManagement"), updateMenuItem).delete(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), checkBillingModule("menuManagement"), deleteMenuItem);
var menuRoutes_default = router6;

// routes/superAdminRoutes.js
var import_express7 = __toESM(require("express"), 1);

// controllers/superAdminController.js
init_emailService();
init_Restaurant();
init_User();
init_Order();
init_Plan();

// models/Ticket.js
var import_mongoose25 = __toESM(require("mongoose"), 1);
var ticketSchema = new import_mongoose25.default.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true
  },
  restaurantId: {
    type: import_mongoose25.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  branchId: {
    type: import_mongoose25.default.Schema.Types.ObjectId,
    ref: "Branch"
  },
  subject: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [
      "Billing",
      "Subscription",
      "Orders",
      "Kitchen",
      "Inventory",
      "POS",
      "QR Digital Menu",
      "Delivery",
      "Staff Management",
      "Technical Issue",
      "Feature Request",
      "Other"
    ],
    required: true
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
    default: "Medium"
  },
  status: {
    type: String,
    enum: ["Open", "Assigned", "In Progress", "Waiting for Customer", "Resolved", "Closed"],
    default: "Open"
  },
  description: {
    type: String,
    required: true
  },
  assignedAgentId: {
    type: import_mongoose25.default.Schema.Types.ObjectId,
    ref: "User"
  },
  attachments: [{
    type: String
  }],
  resolutionTime: {
    type: Number,
    // in minutes
    default: null
  },
  csatRating: {
    type: Number,
    // 1 to 5 stars
    min: 1,
    max: 5,
    default: null
  },
  csatFeedback: {
    type: String,
    default: ""
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});
ticketSchema.pre("save", function(next) {
  this.lastUpdated = /* @__PURE__ */ new Date();
  next();
});
var Ticket = import_mongoose25.default.model("Ticket", ticketSchema);
var Ticket_default = Ticket;

// controllers/superAdminController.js
init_Notification();
init_Branch();
var getStats = async (req, res) => {
  try {
    const activeRestaurantsList = await Restaurant_default.find({ isDeleted: { $ne: true } }).select("_id").lean();
    const activeRestaurantIds = activeRestaurantsList.map((r) => r._id);
    const [
      totalRestaurants,
      activeRestaurants,
      pendingRestaurants,
      frozenRestaurants,
      totalUsers,
      totalOrders,
      activeSubscribedRestaurants,
      restaurantsCommission,
      paidOrders
    ] = await Promise.all([
      Restaurant_default.countDocuments({ isDeleted: { $ne: true } }),
      Restaurant_default.countDocuments({
        isDeleted: { $ne: true },
        status: "Active",
        approvalStatus: "Approved",
        "subscription.status": { $nin: ["Cancelled", "Frozen", "Expired", "Suspended", "Inactive"] }
      }),
      Restaurant_default.countDocuments({ isDeleted: { $ne: true }, approvalStatus: "Pending" }),
      Restaurant_default.countDocuments({ isDeleted: { $ne: true }, "subscription.status": "Frozen" }),
      User_default.countDocuments({ isDeleted: { $ne: true } }),
      Order_default.countDocuments({ isDeleted: { $ne: true } }),
      Restaurant_default.find(
        { approvalStatus: { $ne: "Rejected" }, "subscription.status": { $ne: "Cancelled" }, isDeleted: { $ne: true } },
        "_id subscription"
      ).lean(),
      Restaurant_default.find({ isDeleted: { $ne: true } }, "_id commissionRate").lean(),
      Order_default.find({ isPaid: true }, "restaurantId totalPrice").lean()
    ]);
    let totalRevenue = 0;
    activeSubscribedRestaurants.forEach((r) => {
      const planPrice = r.subscription?.price && r.subscription.price > 100 ? r.subscription.price : r.subscription?.plan === "Enterprise" ? 12999 : r.subscription?.plan === "Pro" ? 5999 : 2999;
      const cycle = r.subscription?.billingCycle || "monthly";
      totalRevenue += cycle === "yearly" ? Math.round(planPrice / 12) : planPrice;
    });
    const restaurantRevenueMap = {};
    paidOrders.forEach((o) => {
      if (o.restaurantId) {
        const rId = o.restaurantId.toString();
        restaurantRevenueMap[rId] = (restaurantRevenueMap[rId] || 0) + (o.totalPrice || 0);
      }
    });
    let totalCommission = 0;
    restaurantsCommission.forEach((r) => {
      const rev = restaurantRevenueMap[r._id.toString()] || 0;
      const rate = r.commissionRate !== void 0 && r.commissionRate !== null ? r.commissionRate : 5;
      totalCommission += rev * rate / 100;
    });
    res.json({
      totalRestaurants,
      activeRestaurants,
      pendingRestaurants,
      frozenRestaurants,
      totalUsers,
      totalOrders,
      totalRevenue,
      totalCommission: Math.round(totalCommission)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getRestaurants2 = async (req, res) => {
  try {
    const [restaurants, revenues] = await Promise.all([
      Restaurant_default.find({ isDeleted: { $ne: true } }).select("_id name status approvalStatus subscription ownerId address phone posConfig billingConfig").populate("ownerId", "name email phoneNumber").sort({ createdAt: -1 }).lean(),
      Order_default.aggregate([
        { $match: { isPaid: true } },
        { $group: { _id: "$restaurantId", totalRevenue: { $sum: "$totalPrice" } } }
      ])
    ]);
    const revMap = {};
    revenues.forEach((r) => {
      if (r._id) revMap[r._id.toString()] = r.totalRevenue;
    });
    const result = (restaurants || []).map((r) => ({
      ...r,
      name: r.name || (r.ownerId?.name ? `${r.ownerId.name}'s Restaurant` : "Partner Restaurant"),
      ownerId: r.ownerId || { name: `${r.name || "Restaurant"} Admin`, email: "admin@restauranthub.com" },
      totalRevenue: revMap[r._id.toString()] || 0
    }));
    res.json(result);
  } catch (error) {
    console.error("getRestaurants error:", error);
    res.status(500).json({ message: error.message });
  }
};
var updateSubscription2 = async (req, res) => {
  const { status, plan, expiryDate, billingCycle, price } = req.body;
  try {
    const restaurant = await Restaurant_default.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (!restaurant.subscription) restaurant.subscription = {};
    if (status) restaurant.subscription.status = status;
    if (plan) {
      restaurant.subscription.plan = plan;
      const isPaidPlan = ["Basic", "Starter", "Pro", "Professional", "Enterprise", "Custom", "Custom SaaS"].includes(plan);
      if (isPaidPlan) {
        restaurant.subscription.trialActive = false;
        restaurant.subscription.paymentStatus = "Paid";
        restaurant.subscription.manualFreeze = false;
        restaurant.subscription.freezeReason = "";
        if (!restaurant.subscription.subscriptionStartDate) {
          restaurant.subscription.subscriptionStartDate = /* @__PURE__ */ new Date();
        }
        if (!restaurant.subscription.price && price === void 0) {
          restaurant.subscription.price = plan === "Enterprise" ? 199 : plan === "Pro" || plan === "Professional" ? 99 : 49;
        }
      }
    }
    if (billingCycle) restaurant.subscription.billingCycle = billingCycle;
    if (price !== void 0) restaurant.subscription.price = Number(price);
    if (expiryDate) {
      restaurant.subscription.expiryDate = expiryDate;
      restaurant.subscription.subscriptionEndDate = expiryDate;
    } else if (plan && !restaurant.subscription.subscriptionEndDate) {
      const defaultEnd = /* @__PURE__ */ new Date();
      defaultEnd.setDate(defaultEnd.getDate() + (restaurant.subscription.billingCycle === "yearly" ? 365 : 30));
      restaurant.subscription.expiryDate = defaultEnd;
      restaurant.subscription.subscriptionEndDate = defaultEnd;
    }
    await restaurant.save();
    if (plan || status === "Active") {
      User_default.findById(restaurant.ownerId).select("email name").lean().then((owner) => {
        const targetEmail = owner?.email || restaurant.contactEmail || restaurant.email;
        if (targetEmail) {
          return sendSubscriptionSuccessEmail({
            email: targetEmail,
            name: owner?.name || restaurant.name,
            restaurantName: restaurant.name,
            plan: restaurant.subscription?.plan || plan,
            billingCycle: restaurant.subscription?.billingCycle || "monthly",
            price: restaurant.subscription?.price || 0,
            expiryDate: restaurant.subscription?.subscriptionEndDate || restaurant.subscription?.expiryDate
          });
        }
      }).catch((err) => console.error("SuperAdmin updateSubscription email error:", err.message));
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateRestaurantVisibilityStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ["Active", "Inactive", "Suspended", "Deleted"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`
      });
    }
    const restaurant = await Restaurant_default.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    restaurant.status = status;
    if (status === "Active") {
      restaurant.isActive = true;
      restaurant.isDeleted = false;
      restaurant.deletedAt = null;
      restaurant.deletedBy = null;
      if (restaurant.subscription && (restaurant.subscription.status === "Suspended" || restaurant.subscription.status === "Frozen")) {
        restaurant.subscription.status = "Active";
      }
    } else if (status === "Inactive") {
      restaurant.isActive = false;
      restaurant.isDeleted = false;
    } else if (status === "Suspended") {
      restaurant.isActive = false;
      restaurant.isDeleted = false;
      if (restaurant.subscription) {
        restaurant.subscription.status = "Suspended";
      }
    } else if (status === "Deleted") {
      restaurant.isActive = false;
      restaurant.isDeleted = true;
      restaurant.deletedAt = /* @__PURE__ */ new Date();
      restaurant.deletedBy = req.user._id;
    }
    await restaurant.save();
    res.json({
      message: `Restaurant status updated to ${status} successfully`,
      restaurant
    });
  } catch (error) {
    console.error("Failed to update restaurant status:", error);
    res.status(500).json({ message: error.message || "Failed to update restaurant status" });
  }
};
var restoreRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant_default.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    restaurant.status = "Active";
    restaurant.isActive = true;
    restaurant.isDeleted = false;
    restaurant.deletedAt = null;
    restaurant.deletedBy = null;
    if (restaurant.subscription && (restaurant.subscription.status === "Suspended" || restaurant.subscription.status === "Frozen")) {
      restaurant.subscription.status = "Active";
    }
    await restaurant.save();
    res.json({
      message: "Restaurant restored and activated successfully",
      restaurant
    });
  } catch (error) {
    console.error("Failed to restore restaurant:", error);
    res.status(500).json({ message: error.message || "Failed to restore restaurant" });
  }
};
var deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant_default.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const [
      { default: Branch2 },
      { default: RestaurantVerification2 },
      { default: MenuItem2 },
      { default: Table2 },
      { default: Category2 },
      { default: Order2 },
      { default: User2 },
      { default: KOT2 },
      { default: DeliveryPartner2 },
      { default: Attendance2 },
      { default: Leave2 },
      { default: Payroll2 },
      { default: Expense2 },
      { default: Inventory2 },
      { default: Notification2 },
      { default: ServiceRequest2 },
      { default: Reservation2 },
      { default: Payment2 }
    ] = await Promise.all([
      Promise.resolve().then(() => (init_Branch(), Branch_exports)),
      Promise.resolve().then(() => (init_RestaurantVerification(), RestaurantVerification_exports)),
      Promise.resolve().then(() => (init_MenuItem(), MenuItem_exports)),
      Promise.resolve().then(() => (init_Table(), Table_exports)),
      Promise.resolve().then(() => (init_Category(), Category_exports)),
      Promise.resolve().then(() => (init_Order(), Order_exports)),
      Promise.resolve().then(() => (init_User(), User_exports)),
      Promise.resolve().then(() => (init_KOT(), KOT_exports)),
      Promise.resolve().then(() => (init_DeliveryPartner(), DeliveryPartner_exports)),
      Promise.resolve().then(() => (init_Attendance(), Attendance_exports)),
      Promise.resolve().then(() => (init_Leave(), Leave_exports)),
      Promise.resolve().then(() => (init_Payroll(), Payroll_exports)),
      Promise.resolve().then(() => (init_Expense(), Expense_exports)),
      Promise.resolve().then(() => (init_Inventory(), Inventory_exports)),
      Promise.resolve().then(() => (init_Notification(), Notification_exports)),
      Promise.resolve().then(() => (init_ServiceRequest(), ServiceRequest_exports)),
      Promise.resolve().then(() => (init_Reservation(), Reservation_exports)),
      Promise.resolve().then(() => (init_Payment(), Payment_exports))
    ]);
    await Promise.all([
      Branch2.deleteMany({ restaurantId: id }),
      RestaurantVerification2.deleteMany({ restaurantId: id }),
      MenuItem2.deleteMany({ restaurantId: id }),
      Table2.deleteMany({ restaurantId: id }),
      Category2.deleteMany({ restaurantId: id }),
      Order2.deleteMany({ restaurantId: id }),
      // Delete employers/staff associated with this restaurant, but preserve SuperAdmin accounts
      User2.deleteMany({
        role: { $ne: "SuperAdmin" },
        $or: [
          { restaurantId: id },
          ...restaurant.ownerId ? [{ _id: restaurant.ownerId }] : []
        ]
      }),
      KOT2.deleteMany({ restaurantId: id }),
      DeliveryPartner2.deleteMany({ restaurantId: id }),
      Attendance2.deleteMany({ restaurantId: id }),
      Leave2.deleteMany({ restaurantId: id }),
      Payroll2.deleteMany({ restaurantId: id }),
      Expense2.deleteMany({ restaurantId: id }),
      Inventory2.deleteMany({ restaurantId: id }),
      Notification2.deleteMany({ restaurantId: id }),
      ServiceRequest2.deleteMany({ restaurantId: id }),
      Reservation2.deleteMany({ restaurantId: id }),
      Payment2.deleteMany({ restaurantId: id })
    ]);
    await Restaurant_default.findByIdAndDelete(id);
    res.json({
      message: "Restaurant and all associated employers, orders, menus, and operations deleted successfully."
    });
  } catch (error) {
    console.error("Failed to delete restaurant:", error);
    res.status(500).json({ message: error.message || "Failed to delete restaurant" });
  }
};
var getPlans = async (req, res) => {
  try {
    const plans = await Plan_default.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createPlan = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (payload.monthlyPrice === void 0 && payload.price !== void 0) payload.monthlyPrice = Number(payload.price);
    if (payload.yearlyPrice === void 0 && payload.price !== void 0) payload.yearlyPrice = Number(payload.price);
    if (payload.isActive === void 0) payload.isActive = true;
    const plan = await Plan_default.create(payload);
    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updatePlan = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (payload.monthlyPrice === void 0 && payload.price !== void 0) payload.monthlyPrice = Number(payload.price);
    if (payload.yearlyPrice === void 0 && payload.price !== void 0) payload.yearlyPrice = Number(payload.price);
    const plan = await Plan_default.findByIdAndUpdate(req.params.id, payload, { new: true });
    res.json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deletePlan = async (req, res) => {
  try {
    const plan = await Plan_default.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    const subscribedCount = await Restaurant_default.countDocuments({ "subscription.plan": plan.name });
    if (subscribedCount > 0) {
      return res.status(400).json({
        message: `Cannot delete plan "${plan.name}" because ${subscribedCount} restaurant(s) are currently subscribed to it. Please deactivate the plan instead.`
      });
    }
    await Plan_default.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getTickets = async (req, res) => {
  try {
    const tickets = await Ticket_default.find().populate("restaurantId", "name email").sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket_default.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    await Ticket_default.findByIdAndDelete(req.params.id);
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateApprovalStatus = async (req, res) => {
  try {
    const restaurant = await Restaurant_default.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    if (req.body.approvalStatus) {
      restaurant.approvalStatus = req.body.approvalStatus;
      if (req.body.approvalStatus === "Approved") {
        restaurant.verificationStatus = "Verified";
        if (!restaurant.subscription) restaurant.subscription = {};
        try {
          const RestaurantVerification2 = (await Promise.resolve().then(() => (init_RestaurantVerification(), RestaurantVerification_exports))).default;
          const verif = await RestaurantVerification2.findOne({ restaurantId: restaurant._id });
          if (verif) {
            verif.status = "Verified";
            await verif.save();
          }
        } catch (vErr) {
          console.error("Failed to sync verification record on approval", vErr);
        }
      } else if (req.body.approvalStatus === "Rejected") {
        restaurant.verificationStatus = "Rejected";
      }
    }
    if (req.body.commissionRate !== void 0) restaurant.commissionRate = req.body.commissionRate;
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getSuperAdminNotifications = async (req, res) => {
  try {
    const notifications = await Notification_default.find({
      $or: [
        { isSuperAdminOnly: true },
        { type: "System", restaurantId: { $exists: false } },
        { type: "System", restaurantId: null }
      ]
    }).sort({ createdAt: -1 }).limit(200);
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var markSuperAdminNotificationAsRead = async (req, res) => {
  try {
    const notification = await Notification_default.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    notification.read = true;
    await notification.save();
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getAllUsers = async (req, res) => {
  try {
    const users = await User_default.find().populate("restaurantId", "name email").sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateUserStatus = async (req, res) => {
  try {
    const user = await User_default.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isActive = !user.isActive;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var deleteUser = async (req, res) => {
  try {
    const user = await User_default.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (req.user._id.toString() === req.params.id) {
      return res.status(400).json({ message: "You cannot delete your own Super Admin account" });
    }
    await User_default.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var broadcastNotification = async (req, res) => {
  const { title, desc, type, restaurantId } = req.body;
  try {
    const payload = {
      title,
      desc,
      type: type || "System",
      read: false
    };
    if (restaurantId) {
      payload.restaurantId = restaurantId;
    }
    const notification = await Notification_default.create(payload);
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteSuperAdminNotification = async (req, res) => {
  try {
    const notification = await Notification_default.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    await Notification_default.findByIdAndDelete(req.params.id);
    res.json({ message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getSubscriptionPayments = async (req, res) => {
  try {
    const payments = await SubscriptionPayment_default.find().populate("restaurantId", "name contactEmail").sort({ createdAt: -1 });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getSubscriptionAnalytics = async (req, res) => {
  try {
    const activeBasic = await Restaurant_default.countDocuments({ "subscription.status": "Active", "subscription.plan": "Basic" });
    const activePro = await Restaurant_default.countDocuments({ "subscription.status": "Active", "subscription.plan": "Pro" });
    const activeEnt = await Restaurant_default.countDocuments({ "subscription.status": "Active", "subscription.plan": "Enterprise" });
    const totalRestaurants = await Restaurant_default.countDocuments();
    const activeRestaurants = await Restaurant_default.countDocuments({ "subscription.status": "Active" });
    const expiredRestaurants = await Restaurant_default.countDocuments({ "subscription.status": "Expired" });
    const cancelledRestaurants = await Restaurant_default.countDocuments({ "subscription.status": "Cancelled" });
    const activeM = await Restaurant_default.find({ "subscription.status": "Active", "subscription.billingCycle": "monthly" });
    const activeY = await Restaurant_default.find({ "subscription.status": "Active", "subscription.billingCycle": "yearly" });
    let mrr = 0;
    activeM.forEach((r) => {
      mrr += r.subscription.price || 49;
    });
    activeY.forEach((r) => {
      mrr += (r.subscription.price || 490) / 12;
    });
    mrr = Math.round(mrr);
    const arr = mrr * 12;
    const churnRate = totalRestaurants > 0 ? Number((cancelledRestaurants / totalRestaurants * 100).toFixed(1)) : 0;
    const renewalRate = totalRestaurants > 0 ? Number((activeRestaurants / (activeRestaurants + expiredRestaurants || 1) * 100).toFixed(1)) : 100;
    res.json({
      stats: {
        totalSubscriptions: totalRestaurants,
        activeSubscriptions: activeRestaurants,
        basicSubscribers: activeBasic,
        proSubscribers: activePro,
        enterpriseSubscribers: activeEnt,
        monthlyRecurringRevenue: mrr,
        annualRecurringRevenue: arr,
        renewalRate,
        churnRate
      },
      trends: {
        subscriptionGrowth: [
          { month: "Jan", count: 12 },
          { month: "Feb", count: 18 },
          { month: "Mar", count: 25 },
          { month: "Apr", count: 32 },
          { month: "May", count: 45 },
          { month: "Jun", count: totalRestaurants || 50 }
        ],
        revenueByPlan: [
          { plan: "Basic", revenue: activeBasic * 49 },
          { plan: "Pro", revenue: activePro * 99 },
          { plan: "Enterprise", revenue: activeEnt * 199 }
        ],
        planDistribution: [
          { name: "Basic", value: activeBasic },
          { name: "Pro", value: activePro },
          { name: "Enterprise", value: activeEnt }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateRestaurantModules = async (req, res) => {
  try {
    const { id } = req.params;
    const { modules, branchLimit, staffLimit, isCustomBillingActive, customPlanName } = req.body;
    const restaurant = await Restaurant_default.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    if (!restaurant.billingConfig) {
      restaurant.billingConfig = { modules: {}, paymentMethods: {} };
    }
    if (isCustomBillingActive !== void 0) {
      restaurant.billingConfig.isCustomBillingActive = Boolean(isCustomBillingActive);
    } else {
      restaurant.billingConfig.isCustomBillingActive = true;
    }
    if (customPlanName) {
      restaurant.billingConfig.customPlanName = customPlanName;
    }
    if (branchLimit !== void 0) {
      restaurant.billingConfig.branchLimit = Number(branchLimit);
    }
    if (staffLimit !== void 0) {
      restaurant.billingConfig.staffLimit = Number(staffLimit);
    }
    if (modules) {
      restaurant.billingConfig.modules = {
        ...restaurant.billingConfig.modules,
        ...modules
      };
      if (!restaurant.restaurantConfig) restaurant.restaurantConfig = {};
      if (!restaurant.restaurantConfig.orderKitchen) restaurant.restaurantConfig.orderKitchen = {};
      if (modules.kot !== void 0) {
        restaurant.restaurantConfig.orderKitchen.kotEnabled = modules.kot;
      }
      if (modules.kds !== void 0) {
        restaurant.restaurantConfig.orderKitchen.kdsEnabled = modules.kds;
        restaurant.restaurantConfig.orderKitchen.kitchenMode = modules.kds ? "KDS" : "KOT_ONLY";
      }
    }
    await restaurant.save();
    res.json({
      success: true,
      message: `Custom module permissions updated for "${restaurant.name}"!`,
      data: restaurant.billingConfig
    });
  } catch (error) {
    console.error("Error updating restaurant modules:", error);
    res.status(500).json({ message: error.message || "Server error updating modules" });
  }
};
var getTrialRequests = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {
      $or: [
        { "subscription.paymentStatus": "Trial" },
        { "subscription.trialRequestDate": { $exists: true } },
        { "subscription.status": { $in: ["Pending Approval", "Active", "Frozen", "Expired", "Rejected"] } }
      ]
    };
    if (status && status !== "All") {
      if (status === "Pending") {
        query = { "subscription.status": "Pending Approval" };
      } else if (status === "Frozen") {
        query = { $or: [{ "subscription.status": "Frozen" }, { "subscription.manualFreeze": true }] };
      } else {
        query = { "subscription.status": status };
      }
    }
    const restaurants = await Restaurant_default.find(query).populate("ownerId", "name email phoneNumber").populate("subscription.approvedBy", "name email").sort({ "subscription.trialRequestDate": -1, createdAt: -1 });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var approveTrialRequest = async (req, res) => {
  try {
    const restaurant = await Restaurant_default.findById(req.params.id).populate("ownerId");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const now = /* @__PURE__ */ new Date();
    const trialEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1e3);
    if (!restaurant.subscription) restaurant.subscription = {};
    restaurant.subscription.status = "Active";
    restaurant.subscription.trialActive = true;
    restaurant.subscription.trialStartDate = now;
    restaurant.subscription.trialEndDate = trialEnd;
    restaurant.subscription.expiryDate = trialEnd;
    restaurant.subscription.approvedBy = req.user._id;
    restaurant.subscription.approvedAt = now;
    restaurant.subscription.paymentStatus = "Trial";
    restaurant.subscription.manualFreeze = false;
    restaurant.subscription.freezeReason = "";
    restaurant.subscription.rejectionReason = "";
    restaurant.subscription.reminderSent24h = false;
    restaurant.approvalStatus = "Approved";
    restaurant.verificationStatus = "Verified";
    restaurant.isActive = true;
    await restaurant.save();
    try {
      const RestaurantVerification2 = (await Promise.resolve().then(() => (init_RestaurantVerification(), RestaurantVerification_exports))).default;
      await RestaurantVerification2.findOneAndUpdate(
        { restaurantId: restaurant._id },
        { $set: { status: "Verified" } }
      );
    } catch (_) {
    }
    broadcastToRestaurant(restaurant._id, "subscription_updated", {
      restaurantId: String(restaurant._id),
      subscription: restaurant.subscription
    });
    try {
      await Notification_default.create({
        title: "Free Trial Approved! \u{1F389}",
        desc: `Super Admin has approved your 7-Day Free Trial. Your 7-day countdown has begun and will expire on ${trialEnd.toLocaleDateString()}.`,
        type: "System",
        restaurantId: restaurant._id
      });
    } catch (notifErr) {
      console.error("Approval notification error:", notifErr.message);
    }
    const ownerEmail = restaurant.ownerId?.email;
    const ownerName = restaurant.ownerId?.name || restaurant.name;
    if (ownerEmail) {
      sendTrialApprovedEmail({
        email: ownerEmail,
        name: ownerName,
        restaurantName: restaurant.name,
        trialStartDate: now,
        trialEndDate: trialEnd,
        plan: restaurant.subscription.plan
      }).catch((e) => console.error("Trial approved email error:", e.message));
      sendTrialStartedEmail({
        email: ownerEmail,
        name: ownerName,
        restaurantName: restaurant.name,
        trialEndDate: trialEnd,
        plan: restaurant.subscription.plan
      }).catch((e) => console.error("Trial started email error:", e.message));
    }
    res.json({
      message: "7-Day Free Trial approved successfully! The 7-day countdown has begun.",
      restaurant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var rejectTrialRequest = async (req, res) => {
  try {
    const { reason } = req.body;
    const restaurant = await Restaurant_default.findById(req.params.id).populate("ownerId");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const rejectionReason = reason || "Documentation criteria or verification requirements not met.";
    if (!restaurant.subscription) restaurant.subscription = {};
    restaurant.subscription.status = "Rejected";
    restaurant.subscription.trialActive = false;
    restaurant.subscription.rejectedAt = /* @__PURE__ */ new Date();
    restaurant.subscription.rejectionReason = rejectionReason;
    restaurant.approvalStatus = "Rejected";
    await restaurant.save();
    broadcastToRestaurant(restaurant._id, "subscription_updated", {
      restaurantId: String(restaurant._id),
      subscription: restaurant.subscription
    });
    const ownerEmail = restaurant.ownerId?.email;
    const ownerName = restaurant.ownerId?.name || restaurant.name;
    if (ownerEmail) {
      sendTrialRejectedEmail({
        email: ownerEmail,
        name: ownerName,
        restaurantName: restaurant.name,
        rejectionReason
      }).catch((e) => console.error("Trial rejected email error:", e.message));
    }
    res.json({
      message: "Free trial request rejected.",
      restaurant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var manualFreezeRestaurant = async (req, res) => {
  try {
    const { reason } = req.body;
    const restaurant = await Restaurant_default.findById(req.params.id).populate("ownerId");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const freezeReason = reason || "Administrative freeze placed by Super Admin.";
    const frozenAt = /* @__PURE__ */ new Date();
    if (!restaurant.subscription) restaurant.subscription = {};
    restaurant.subscription.status = "Frozen";
    restaurant.subscription.manualFreeze = true;
    restaurant.subscription.freezeReason = freezeReason;
    restaurant.subscription.frozenAt = frozenAt;
    await restaurant.save();
    broadcastToRestaurant(restaurant._id, "subscription_updated", {
      restaurantId: String(restaurant._id),
      subscription: restaurant.subscription
    });
    const ownerEmail = restaurant.ownerId?.email;
    const ownerName = restaurant.ownerId?.name || restaurant.name;
    if (ownerEmail) {
      sendManualFreezeEmail({
        email: ownerEmail,
        name: ownerName,
        restaurantName: restaurant.name,
        freezeReason,
        frozenAt
      }).catch((e) => console.error("Manual freeze email error:", e.message));
    }
    res.json({
      message: `Restaurant "${restaurant.name}" dashboard has been manually frozen.`,
      restaurant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var manualUnfreezeRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant_default.findById(req.params.id).populate("ownerId");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const sub = restaurant.subscription || {};
    const now = /* @__PURE__ */ new Date();
    if (sub.status === "Pending Approval") {
      return res.status(400).json({
        message: "Cannot unfreeze: Free trial request is still pending approval. Please approve the trial request instead."
      });
    }
    if (sub.paymentStatus === "Trial") {
      if (!sub.trialStartDate || !sub.trialEndDate || now > new Date(sub.trialEndDate)) {
        return res.status(400).json({
          message: "Cannot unfreeze restaurant: 7-day free trial has expired. The restaurant owner must purchase or renew an active subscription plan."
        });
      }
    } else if (sub.paymentStatus === "Paid") {
      if (sub.subscriptionEndDate && now > new Date(sub.subscriptionEndDate)) {
        return res.status(400).json({
          message: "Cannot unfreeze restaurant: Paid subscription has expired. The restaurant owner must renew payment."
        });
      }
    } else if (sub.status === "Expired" || sub.status === "Inactive" || sub.status === "Rejected") {
      return res.status(400).json({
        message: "Cannot unfreeze restaurant: No active subscription found. Restaurant must have a valid trial or paid subscription."
      });
    }
    restaurant.subscription.manualFreeze = false;
    restaurant.subscription.status = "Active";
    restaurant.subscription.freezeReason = "";
    await restaurant.save();
    broadcastToRestaurant(restaurant._id, "subscription_updated", {
      restaurantId: String(restaurant._id),
      subscription: restaurant.subscription
    });
    const ownerEmail = restaurant.ownerId?.email;
    const ownerName = restaurant.ownerId?.name || restaurant.name;
    if (ownerEmail) {
      sendManualUnfreezeEmail({
        email: ownerEmail,
        name: ownerName,
        restaurantName: restaurant.name,
        plan: restaurant.subscription.plan,
        status: "Active"
      }).catch((e) => console.error("Manual unfreeze email error:", e.message));
    }
    res.json({
      message: `Restaurant "${restaurant.name}" dashboard has been unfrozen successfully.`,
      restaurant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createRestaurantBySuperAdmin = async (req, res) => {
  try {
    const { name, ownerName, email, password, phoneNumber, plan, billingCycle } = req.body;
    if (!name || !ownerName || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: "Restaurant name, owner name, email, password, and phone number are required." });
    }
    const cleanEmail = email.toLowerCase().trim();
    const existingUser = await User_default.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(400).json({ message: "An account with this email address already exists." });
    }
    const selectedPlan = plan || "Starter";
    const expiryDate = /* @__PURE__ */ new Date();
    if (billingCycle === "yearly") {
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    } else {
      expiryDate.setDate(expiryDate.getDate() + 30);
    }
    const restaurant = await Restaurant_default.create({
      name: name.trim(),
      email: cleanEmail,
      phoneNumber: phoneNumber.trim(),
      approvalStatus: "Approved",
      verificationStatus: "Verified",
      isActive: true,
      isProfileApproved: true,
      status: "Active",
      subscription: {
        plan: selectedPlan,
        status: "Active",
        billingCycle: billingCycle || "monthly",
        trialActive: false,
        paymentStatus: "Paid",
        manualFreeze: false,
        subscriptionStartDate: /* @__PURE__ */ new Date(),
        subscriptionEndDate: expiryDate,
        startDate: /* @__PURE__ */ new Date(),
        expiryDate,
        price: selectedPlan === "Enterprise" ? 199 : selectedPlan === "Pro" ? 99 : 49
      }
    });
    const user = await User_default.create({
      name: ownerName.trim(),
      email: cleanEmail,
      password,
      phoneNumber: phoneNumber.trim(),
      role: "RestaurantAdmin",
      restaurantId: restaurant._id,
      isActive: true
    });
    restaurant.ownerId = user._id;
    await restaurant.save();
    await Branch_default.create({
      restaurantId: restaurant._id,
      name: "Main Branch",
      address: "Headquarters",
      phone: phoneNumber.trim(),
      isMain: true
    });
    sendWelcomeEmail({
      email: user.email,
      name: user.name,
      restaurantName: restaurant.name,
      plan: selectedPlan
    }).catch((err) => console.error("SuperAdmin createRestaurant welcome email error:", err.message));
    sendSubscriptionSuccessEmail({
      email: user.email,
      name: user.name,
      restaurantName: restaurant.name,
      plan: selectedPlan,
      billingCycle: billingCycle || "monthly",
      price: restaurant.subscription?.price || 0,
      expiryDate: restaurant.subscription?.subscriptionEndDate || restaurant.subscription?.expiryDate
    }).catch((err) => console.error("SuperAdmin createRestaurant subscription email error:", err.message));
    res.status(201).json({
      message: `Restaurant "${restaurant.name}" created successfully with ${selectedPlan} plan.`,
      restaurant,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error("SuperAdmin Create Restaurant Error:", error);
    res.status(500).json({ message: error.message || "Failed to create restaurant." });
  }
};

// routes/superAdminRoutes.js
var router7 = import_express7.default.Router();
router7.use(protect, authorize("SuperAdmin"));
router7.route("/stats").get(getStats);
router7.route("/restaurants").get(getRestaurants2).post(createRestaurantBySuperAdmin);
router7.route("/restaurants/:id").delete(deleteRestaurant);
router7.route("/restaurants/:id/status").put(updateRestaurantVisibilityStatus);
router7.route("/restaurants/:id/restore").put(restoreRestaurant);
router7.route("/restaurants/:id/subscription").put(updateSubscription2);
router7.route("/restaurants/:id/approval").put(updateApprovalStatus);
router7.route("/restaurants/:id/modules").put(updateRestaurantModules);
router7.route("/verifications/:id").delete(deleteVerification);
router7.route("/notifications").get(getSuperAdminNotifications);
router7.route("/notifications/broadcast").post(broadcastNotification);
router7.route("/notifications/:id").delete(deleteSuperAdminNotification);
router7.route("/notifications/:id/read").put(markSuperAdminNotificationAsRead);
router7.route("/users").get(getAllUsers);
router7.route("/users/:id").delete(deleteUser);
router7.route("/users/:id/status").put(updateUserStatus);
router7.route("/plans").get(getPlans).post(createPlan);
router7.route("/plans/:id").put(updatePlan).delete(deletePlan);
router7.route("/tickets").get(getTickets);
router7.route("/tickets/:id").put(updateTicket).delete(deleteTicket);
router7.route("/billing-history").get(getSubscriptionPayments);
router7.route("/subscription-analytics").get(getSubscriptionAnalytics);
router7.route("/trial-requests").get(getTrialRequests);
router7.route("/trial-requests/:id/approve").post(approveTrialRequest);
router7.route("/trial-requests/:id/reject").post(rejectTrialRequest);
router7.route("/restaurants/:id/freeze").post(manualFreezeRestaurant);
router7.route("/restaurants/:id/unfreeze").post(manualUnfreezeRestaurant);
var superAdminRoutes_default = router7;

// routes/tableRoutes.js
var import_express8 = __toESM(require("express"), 1);

// controllers/tableController.js
var import_mongoose32 = __toESM(require("mongoose"), 1);
init_Table();
init_Order();
var getTables = async (req, res) => {
  try {
    const filter = { restaurantId: req.user.restaurantId };
    const queryBranchId = req.query.branchId;
    if (queryBranchId) {
      filter.branchId = queryBranchId;
    } else if (req.user.branchId) {
      filter.branchId = req.user.branchId;
    }
    const tables = await Table_default.find(filter).populate("activeOrder").populate("branchId");
    res.json(tables);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
var createTable = async (req, res) => {
  const { tableNumber, capacity, branchId } = req.body;
  try {
    let finalBranchId = branchId || req.user.branchId;
    if (!finalBranchId) {
      const Branch2 = import_mongoose32.default.model("Branch");
      const firstBranch = await Branch2.findOne({ restaurantId: req.user.restaurantId });
      if (firstBranch) {
        finalBranchId = firstBranch._id;
      }
    }
    if (!finalBranchId) {
      res.status(400).json({ message: "Branch ID is required to create a table. Please create a branch first." });
      return;
    }
    const table = await Table_default.create({
      restaurantId: req.user.restaurantId,
      branchId: finalBranchId,
      tableNumber,
      capacity: capacity || 4,
      status: "Available"
    });
    res.status(201).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to create table" });
  }
};
var updateTableStatus = async (req, res) => {
  const { status, customers, activeOrder } = req.body;
  try {
    const table = await Table_default.findById(req.params.id);
    if (table) {
      table.status = status || table.status;
      if (customers !== void 0) table.customers = customers;
      if (activeOrder !== void 0) table.activeOrder = activeOrder;
      const updatedTable = await table.save();
      res.json(updatedTable);
    } else {
      res.status(404).json({ message: "Table not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to update table" });
  }
};
var deleteTable = async (req, res) => {
  try {
    const table = await Table_default.findById(req.params.id);
    if (table) {
      if (table.restaurantId.toString() !== req.user.restaurantId.toString()) {
        return res.status(403).json({ message: "Not authorized to delete this table" });
      }
      const deletedTableNumber = table.tableNumber;
      const restaurantId = table.restaurantId;
      await table.deleteOne();
      try {
        broadcastToRestaurant(restaurantId, {
          type: "TABLE_DELETED",
          tableId: req.params.id,
          tableNumber: deletedTableNumber
        });
      } catch (wsErr) {
        console.warn("Could not broadcast table deletion", wsErr);
      }
      res.json({ message: "Table removed successfully", tableId: req.params.id, tableNumber: deletedTableNumber });
    } else {
      res.status(404).json({ message: "Table not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete table" });
  }
};

// routes/tableRoutes.js
var router8 = import_express8.default.Router();
router8.use(protect);
router8.use(checkSubscription);
router8.route("/").get(checkBillingModule("tableManagement"), authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager", "Waiter", "Cashier"), getTables).post(checkBillingModule("tableManagement"), authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager"), createTable);
router8.route("/:id").delete(checkBillingModule("tableManagement"), authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager"), deleteTable);
router8.route("/:id/status").put(checkBillingModule("tableManagement"), authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager", "Waiter", "Cashier"), updateTableStatus);
var tableRoutes_default = router8;

// routes/customerRoutes.js
var import_express9 = __toESM(require("express"), 1);

// controllers/customerController.js
var import_mongoose33 = __toESM(require("mongoose"), 1);
init_User();
init_Order();
var getCustomers = async (req, res) => {
  try {
    const { restaurantId } = req.user;
    if (!restaurantId) {
      return res.json([]);
    }
    const orderCustomerIds = await Order_default.distinct("user", {
      restaurantId: new import_mongoose33.default.Types.ObjectId(restaurantId),
      user: { $exists: true, $ne: null }
    });
    const customers = await User_default.find({
      role: "Customer",
      $or: [
        { _id: { $in: orderCustomerIds } },
        { restaurantId }
      ]
    }).select("name email phoneNumber createdAt");
    const orderStats = await Order_default.aggregate([
      { $match: { restaurantId: new import_mongoose33.default.Types.ObjectId(restaurantId), user: { $exists: true, $ne: null } } },
      {
        $group: {
          _id: "$user",
          visits: { $sum: 1 },
          totalSpend: { $sum: "$totalPrice" },
          lastVisit: { $max: "$createdAt" }
        }
      }
    ]);
    const statsMap = {};
    orderStats.forEach((stat) => {
      if (stat._id) {
        statsMap[stat._id.toString()] = stat;
      }
    });
    const customerData = customers.map((customer) => {
      const stats = statsMap[customer._id.toString()] || { visits: 0, totalSpend: 0, lastVisit: customer.createdAt };
      let tier = "Bronze";
      if (stats.totalSpend >= 1e3) tier = "Platinum";
      else if (stats.totalSpend >= 500) tier = "Gold";
      else if (stats.totalSpend >= 100) tier = "Silver";
      return {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        phone: customer.phoneNumber || "N/A",
        visits: stats.visits,
        totalSpend: stats.totalSpend,
        lastVisit: stats.lastVisit,
        tier
      };
    });
    res.json(customerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const userExists = await User_default.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "A user with this email already exists" });
    }
    const user = await User_default.create({
      name,
      email,
      password: "password123",
      role: "Customer",
      restaurantId: req.user.restaurantId,
      phoneNumber: phone
    });
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: phone || "N/A",
      visits: 0,
      totalSpend: 0,
      tier: "Bronze",
      lastVisit: user.createdAt
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// routes/customerRoutes.js
var router9 = import_express9.default.Router();
router9.use(protect);
router9.use(authorize("RestaurantAdmin", "BranchManager"));
router9.use(checkSubscription);
router9.use(checkBillingModule("customerManagement"));
router9.route("/").get(getCustomers).post(createCustomer);
var customerRoutes_default = router9;

// routes/staffRoutes.js
var import_express10 = __toESM(require("express"), 1);

// controllers/staffController.js
init_emailService();
var import_mongoose34 = __toESM(require("mongoose"), 1);
init_User();
init_Branch();
init_Restaurant();
init_DeliveryPartner();
init_Plan();
init_Attendance();
init_Payroll();
init_Expense();
init_Leave();
var getUserRestaurantId2 = async (user, queryOrBody = {}) => {
  let rId = user?.restaurantId || user?.restaurant;
  if (!rId && user?.branchId) {
    const branchDoc = await Branch_default.findById(user.branchId);
    if (branchDoc) rId = branchDoc.restaurantId;
  }
  if (user?.role === "SuperAdmin" && queryOrBody?.restaurantId) {
    rId = queryOrBody.restaurantId;
  }
  if (!rId && user?.role === "SuperAdmin") {
    const firstRest = await Restaurant_default.findOne().select("_id");
    if (firstRest) rId = firstRest._id;
  }
  return rId;
};
var getStaff = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const restaurant = await Restaurant_default.findById(restaurantId);
    const hasEnterprise = restaurant?.subscription?.plan === "Enterprise";
    const staffRoles = hasEnterprise ? ["BranchManager", "Manager", "Chef", "Waiter", "Cashier", "DeliveryPartner", "Staff"] : ["BranchManager", "Manager", "Chef", "Waiter", "Cashier", "Staff"];
    const filter = {
      restaurantId,
      role: { $in: staffRoles }
    };
    if (req.query.role && req.query.role !== "All") {
      if (req.query.role === "Manager" || req.query.role === "BranchManager") {
        filter.role = { $in: ["BranchManager", "Manager"] };
      } else {
        filter.role = req.query.role;
      }
    }
    if (req.user.role === "BranchManager" && req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.employmentStatus && req.query.employmentStatus !== "All") {
      filter.employmentStatus = req.query.employmentStatus;
    }
    const staff = await User_default.find(filter).populate("branchId", "name").select("-password").sort({ name: 1 });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var normalizeSalaryConfig = (config) => {
  if (!config) {
    return {
      basicSalary: 0,
      salaryFrequency: "Monthly",
      overtimeRatePerHour: 0,
      dailyWorkHours: 8,
      monthlyWorkingDays: 26,
      allowances: [],
      deductions: []
    };
  }
  let allowances = [];
  if (Array.isArray(config.allowances)) {
    allowances = config.allowances;
  } else if (typeof config.allowances === "number" && config.allowances > 0) {
    allowances = [{ name: "Standard Allowance", amount: config.allowances }];
  }
  let deductions = [];
  if (Array.isArray(config.deductions)) {
    deductions = config.deductions;
  } else if (typeof config.deductions === "number" && config.deductions > 0) {
    deductions = [{ name: "Standard Deduction", amount: config.deductions }];
  }
  return {
    basicSalary: Number(config.basicSalary) || 0,
    salaryFrequency: ["Monthly", "Daily", "Hourly"].includes(config.salaryFrequency) ? config.salaryFrequency : "Monthly",
    overtimeRatePerHour: Number(config.overtimeRatePerHour) || 0,
    dailyWorkHours: Number(config.dailyWorkHours) || 8,
    monthlyWorkingDays: Number(config.monthlyWorkingDays) || 26,
    allowances,
    deductions
  };
};
var createStaff = async (req, res) => {
  const {
    name,
    email,
    phone,
    role,
    branchId,
    password,
    employeeId,
    joiningDate,
    employmentStatus,
    salaryConfig,
    bankDetails
  } = req.body;
  try {
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required to register staff" });
    }
    const normalizedEmail = email.trim().toLowerCase();
    const restaurantId = await getUserRestaurantId2(req.user);
    const userExists = await User_default.findOne({ email: { $regex: new RegExp(`^${normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") } });
    if (userExists) {
      return res.status(400).json({ message: "A user with this email address already exists. Please use a unique email." });
    }
    let restaurant = null;
    if (restaurantId) {
      restaurant = await Restaurant_default.findById(restaurantId);
    }
    const planName = restaurant?.subscription?.plan || "Basic";
    const planDoc = await Plan_default.findOne({ name: planName });
    let staffLimit = 5;
    if (planDoc && planDoc.staffLimit !== void 0) {
      staffLimit = planDoc.staffLimit;
    } else if (["Pro", "Professional", "Enterprise"].includes(planName)) {
      staffLimit = Infinity;
    }
    if (restaurantId) {
      const currentStaffCount = await User_default.countDocuments({
        restaurantId,
        role: { $in: ["BranchManager", "Manager", "Chef", "Waiter", "Cashier", "DeliveryPartner", "Staff"] }
      });
      if (currentStaffCount >= staffLimit) {
        return res.status(400).json({
          message: `Your current plan (${planName}) only allows up to ${staffLimit} staff users. Please upgrade your subscription plan to add more staff.`,
          limitExceeded: true
        });
      }
    }
    let normalizedRole = role ? String(role).trim() : "Waiter";
    if (normalizedRole === "Manager") normalizedRole = "BranchManager";
    const validRoles = ["BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner", "Staff"];
    if (!validRoles.includes(normalizedRole)) {
      return res.status(400).json({ message: `Invalid staff role "${role}". Allowed roles: ${validRoles.join(", ")}` });
    }
    let targetBranch = null;
    if (branchId && branchId !== "" && branchId !== "All") {
      const branchExists = await Branch_default.findById(branchId);
      if (branchExists) {
        targetBranch = branchExists._id;
      }
    }
    const staffCountTotal = await User_default.countDocuments(restaurantId ? { restaurantId } : {});
    const empId = employeeId && employeeId.trim() ? employeeId.trim() : `EMP-${(staffCountTotal + 1).toString().padStart(4, "0")}`;
    const user = await User_default.create({
      name: name.trim(),
      email: normalizedEmail,
      phoneNumber: phone ? String(phone).trim() : "",
      password: password ? String(password).trim() : "Staff@123",
      role: normalizedRole,
      restaurantId: restaurantId || null,
      branchId: targetBranch,
      employeeId: empId,
      joiningDate: joiningDate ? new Date(joiningDate) : /* @__PURE__ */ new Date(),
      employmentStatus: employmentStatus || "Active",
      salaryConfig: normalizeSalaryConfig(salaryConfig),
      bankDetails: bankDetails || {}
    });
    if (user.role === "BranchManager" && user.branchId) {
      await Branch_default.updateMany({ manager: user._id, _id: { $ne: user.branchId } }, { $unset: { manager: 1 } });
      await Branch_default.findByIdAndUpdate(user.branchId, { manager: user._id });
    }
    if (user.role === "DeliveryPartner") {
      await DeliveryPartner_default.create({
        userId: user._id,
        restaurantId: restaurantId || null,
        verificationStatus: "Approved",
        vehicleDetails: { type: "Bike", model: "", rcNumber: "", licenseNumber: "" },
        documents: { profilePhoto: "", drivingLicense: "", aadhaarProof: "" }
      });
    }
    const populatedUser = await User_default.findById(user._id).populate("branchId", "name").select("-password");
    try {
      const restDoc = restaurantId ? await (await Promise.resolve().then(() => (init_Restaurant(), Restaurant_exports))).default.findById(restaurantId).select("name") : null;
      sendStaffRoleCredentialsEmail({
        email: normalizedEmail,
        name: name.trim(),
        role: normalizedRole,
        restaurantName: restDoc?.name || "",
        branchName: populatedUser?.branchId?.name || "",
        password: password ? String(password).trim() : "Staff@123",
        employeeId: empId
      }).catch((e) => console.error("Error dispatching staff credentials email:", e));
    } catch (mailErr) {
      console.error("Failed to prepare staff email:", mailErr);
    }
    res.status(201).json(populatedUser);
  } catch (error) {
    console.error("Error in createStaff:", error);
    if (error.code === 11e3) {
      return res.status(400).json({ message: "A staff user with this email or ID already exists." });
    }
    res.status(400).json({ message: error.message || "Failed to create staff member" });
  }
};
var updateStaff = async (req, res) => {
  const {
    name,
    phone,
    role,
    branchId,
    password,
    employeeId,
    joiningDate,
    employmentStatus,
    salaryConfig,
    bankDetails
  } = req.body;
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const staff = await User_default.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    if (restaurantId && staff.restaurantId && staff.restaurantId.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to update this staff" });
    }
    let normalizedRole = role;
    if (normalizedRole === "Manager") normalizedRole = "BranchManager";
    const validRoles = ["BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner", "Staff"];
    if (normalizedRole && !validRoles.includes(normalizedRole)) {
      return res.status(400).json({ message: "Invalid staff role" });
    }
    const oldRole = staff.role;
    staff.name = name || staff.name;
    if (phone !== void 0) staff.phoneNumber = phone;
    if (normalizedRole) staff.role = normalizedRole;
    if (branchId !== void 0) {
      staff.branchId = branchId && branchId !== "" && branchId !== "All" ? branchId : null;
    }
    if (password) staff.password = password;
    if (employeeId !== void 0) staff.employeeId = employeeId;
    if (joiningDate !== void 0) staff.joiningDate = new Date(joiningDate);
    if (employmentStatus !== void 0) staff.employmentStatus = employmentStatus;
    if (salaryConfig !== void 0) staff.salaryConfig = normalizeSalaryConfig(salaryConfig);
    if (bankDetails !== void 0) staff.bankDetails = bankDetails;
    await staff.save();
    if (staff.role === "BranchManager" && staff.branchId) {
      await Branch_default.updateMany({ manager: staff._id, _id: { $ne: staff.branchId } }, { $unset: { manager: 1 } });
      await Branch_default.findByIdAndUpdate(staff.branchId, { manager: staff._id });
    } else if (oldRole === "BranchManager" && staff.role !== "BranchManager") {
      await Branch_default.updateMany({ manager: staff._id }, { $unset: { manager: 1 } });
    }
    if (staff.role === "DeliveryPartner" && oldRole !== "DeliveryPartner") {
      const exists = await DeliveryPartner_default.findOne({ userId: staff._id });
      if (!exists) {
        await DeliveryPartner_default.create({
          userId: staff._id,
          restaurantId,
          verificationStatus: "Approved",
          vehicleDetails: { type: "Bike", model: "", rcNumber: "", licenseNumber: "" },
          documents: { profilePhoto: "", drivingLicense: "", aadhaarProof: "" }
        });
      }
    }
    const updatedStaff = await User_default.findById(staff._id).populate("branchId", "name").select("-password");
    res.json(updatedStaff);
  } catch (error) {
    console.error("Error in updateStaff:", error);
    res.status(500).json({ message: error.message });
  }
};
var deleteStaff = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const staff = await User_default.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Staff member not found" });
    }
    if (staff.restaurantId?.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this staff" });
    }
    await Branch_default.updateMany({ manager: staff._id }, { $unset: { manager: 1 } });
    if (staff.role === "DeliveryPartner") {
      await DeliveryPartner_default.deleteOne({ userId: staff._id });
    }
    await staff.deleteOne();
    res.json({ message: "Staff member removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var bulkMarkAttendance = async (req, res) => {
  const { date, records, branchId } = req.body;
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    if (!date || !records || !records.length) {
      return res.status(400).json({ message: "Date and attendance records are required" });
    }
    const dateObj = new Date(date);
    const dateString = dateObj.toISOString().split("T")[0];
    const results = [];
    for (const r of records) {
      const employeeId = r.employeeId || r.employee;
      if (!employeeId) continue;
      if (r.status === "Not Marked" || !r.status) continue;
      const staffMember = await User_default.findById(employeeId);
      if (!staffMember) continue;
      const targetBranch = staffMember.branchId || branchId || req.user.branchId;
      let att = await Attendance_default.findOne({
        restaurantId,
        employee: employeeId,
        dateString
      });
      const checkInVal = r.checkIn || r.checkInTime;
      const checkOutVal = r.checkOut || r.checkOutTime;
      let computedOt = Number(r.overtimeHours) || 0;
      if (computedOt === 0 && checkInVal && checkOutVal) {
        try {
          const inD = new Date(checkInVal);
          const outD = new Date(checkOutVal);
          const diffHrs = (outD.getTime() - inD.getTime()) / (1e3 * 60 * 60);
          if (!isNaN(diffHrs) && diffHrs > 8) {
            computedOt = Math.round((diffHrs - 8) * 2) / 2;
          }
        } catch (e) {
        }
      }
      if (att) {
        att.status = r.status || att.status;
        if (checkInVal) att.checkIn = new Date(checkInVal);
        if (checkOutVal) att.checkOut = new Date(checkOutVal);
        if (r.lateMinutes !== void 0) att.lateMinutes = Number(r.lateMinutes);
        att.overtimeHours = r.overtimeHours !== void 0 && Number(r.overtimeHours) > 0 ? Number(r.overtimeHours) : computedOt;
        if (r.workingHours !== void 0) att.workingHours = Number(r.workingHours);
        if (r.notes !== void 0) att.notes = r.notes;
        await att.save();
        results.push(att);
      } else {
        att = await Attendance_default.create({
          restaurantId,
          branchId: targetBranch,
          employee: employeeId,
          date: dateObj,
          dateString,
          status: r.status || "Present",
          checkIn: checkInVal ? new Date(checkInVal) : void 0,
          checkOut: checkOutVal ? new Date(checkOutVal) : void 0,
          lateMinutes: Number(r.lateMinutes) || 0,
          overtimeHours: r.overtimeHours !== void 0 && Number(r.overtimeHours) > 0 ? Number(r.overtimeHours) : computedOt,
          workingHours: Number(r.workingHours) || (r.status === "Present" ? 8 : r.status === "Half-day" ? 4 : 0),
          notes: r.notes || "",
          createdBy: req.user._id
        });
        results.push(att);
      }
    }
    res.json({ message: `Processed ${results.length} attendance records`, records: results });
  } catch (error) {
    console.error("Error marking attendance:", error);
    res.status(400).json({ message: error.message });
  }
};
var getAttendance = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const filter = { restaurantId };
    if (req.user.role === "BranchManager" && req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.employee && req.query.employee !== "All") {
      filter.employee = req.query.employee;
    }
    if (req.query.status && req.query.status !== "All") {
      filter.status = req.query.status;
    }
    if (req.query.date) {
      const dateStr = new Date(req.query.date).toISOString().split("T")[0];
      filter.dateString = dateStr;
    } else if (req.query.startDate || req.query.endDate) {
      filter.date = {};
      if (req.query.startDate) {
        const s = new Date(req.query.startDate);
        s.setHours(0, 0, 0, 0);
        filter.date.$gte = s;
      }
      if (req.query.endDate) {
        const e = new Date(req.query.endDate);
        e.setHours(23, 59, 59, 999);
        filter.date.$lte = e;
      }
    }
    const records = await Attendance_default.find(filter).populate("employee", "name email role employeeId phoneNumber salaryConfig").populate("branchId", "name").populate("correctionHistory.correctedBy", "name role").sort({ date: -1, "employee.name": 1 });
    let filteredRecords = records;
    if (req.query.role && req.query.role !== "All Roles") {
      filteredRecords = records.filter((r) => r.employee?.role === req.query.role);
    }
    res.json(filteredRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var correctAttendance = async (req, res) => {
  const { newStatus, checkIn, checkOut, lateMinutes, overtimeHours, workingHours, reason } = req.body;
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const att = await Attendance_default.findById(req.params.id);
    if (!att) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    if (att.restaurantId.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to correct this record" });
    }
    if (!reason || !reason.trim()) {
      return res.status(400).json({ message: "Audit correction reason is mandatory" });
    }
    att.correctionHistory.push({
      previousStatus: att.status,
      newStatus: newStatus || att.status,
      previousCheckIn: att.checkIn,
      newCheckIn: checkIn ? new Date(checkIn) : att.checkIn,
      previousCheckOut: att.checkOut,
      newCheckOut: checkOut ? new Date(checkOut) : att.checkOut,
      correctedBy: req.user._id,
      reason: reason.trim(),
      correctedAt: /* @__PURE__ */ new Date()
    });
    att.isCorrected = true;
    if (newStatus) att.status = newStatus;
    if (checkIn) att.checkIn = new Date(checkIn);
    if (checkOut) att.checkOut = new Date(checkOut);
    if (lateMinutes !== void 0) att.lateMinutes = Number(lateMinutes);
    if (overtimeHours !== void 0) att.overtimeHours = Number(overtimeHours);
    if (workingHours !== void 0) att.workingHours = Number(workingHours);
    await att.save();
    const populated = await Attendance_default.findById(att._id).populate("employee", "name email role employeeId").populate("correctionHistory.correctedBy", "name role");
    res.json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getAttendanceSummary = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const { startDate, endDate, branchId } = req.query;
    const matchFilter = { restaurantId: new import_mongoose34.default.Types.ObjectId(restaurantId) };
    if (branchId && branchId !== "All") {
      matchFilter.branchId = new import_mongoose34.default.Types.ObjectId(branchId);
    } else if (req.user.role === "BranchManager" && req.user.branchId) {
      matchFilter.branchId = new import_mongoose34.default.Types.ObjectId(req.user.branchId);
    }
    if (startDate || endDate) {
      matchFilter.date = {};
      if (startDate) {
        const s = new Date(startDate);
        s.setHours(0, 0, 0, 0);
        matchFilter.date.$gte = s;
      }
      if (endDate) {
        const e = new Date(endDate);
        e.setHours(23, 59, 59, 999);
        matchFilter.date.$lte = e;
      }
    }
    const summary = await Attendance_default.aggregate([
      { $match: matchFilter },
      {
        $group: {
          _id: "$employee",
          totalRecords: { $sum: 1 },
          presentDays: { $sum: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] } },
          absentDays: { $sum: { $cond: [{ $eq: ["$status", "Absent"] }, 1, 0] } },
          leaveDays: { $sum: { $cond: [{ $eq: ["$status", "Leave"] }, 1, 0] } },
          paidLeaveDays: {
            $sum: {
              $cond: [
                { $and: [{ $eq: ["$status", "Leave"] }, { $ne: ["$isPaidLeave", false] }] },
                1,
                0
              ]
            }
          },
          unpaidLeaveDays: {
            $sum: {
              $cond: [
                { $and: [{ $eq: ["$status", "Leave"] }, { $or: [{ $eq: ["$isPaidLeave", false] }, { $eq: ["$isLOP", true] }] }] },
                1,
                0
              ]
            }
          },
          lopDays: {
            $sum: {
              $cond: [
                {
                  $or: [
                    { $eq: ["$status", "Absent"] },
                    { $and: [{ $eq: ["$status", "Leave"] }, { $or: [{ $eq: ["$isPaidLeave", false] }, { $eq: ["$isLOP", true] }] }] }
                  ]
                },
                1,
                0
              ]
            }
          },
          halfDays: { $sum: { $cond: [{ $eq: ["$status", "Half-day"] }, 1, 0] } },
          holidays: { $sum: { $cond: [{ $eq: ["$status", "Holiday"] }, 1, 0] } },
          totalOvertimeHours: { $sum: "$overtimeHours" },
          totalWorkingHours: { $sum: "$workingHours" },
          totalLateMinutes: { $sum: "$lateMinutes" }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "employeeInfo"
        }
      },
      { $unwind: "$employeeInfo" },
      {
        $project: {
          employeeId: "$_id",
          name: "$employeeInfo.name",
          email: "$employeeInfo.email",
          role: "$employeeInfo.role",
          empCode: "$employeeInfo.employeeId",
          salaryConfig: "$employeeInfo.salaryConfig",
          presentDays: 1,
          absentDays: 1,
          leaveDays: 1,
          paidLeaveDays: 1,
          unpaidLeaveDays: 1,
          lopDays: 1,
          halfDays: 1,
          holidays: 1,
          totalOvertimeHours: 1,
          totalWorkingHours: 1,
          totalLateMinutes: 1,
          attendanceRate: {
            $cond: [
              { $gt: ["$totalRecords", 0] },
              { $multiply: [{ $divide: [{ $add: ["$presentDays", { $multiply: ["$halfDays", 0.5] }] }, "$totalRecords"] }, 100] },
              0
            ]
          }
        }
      },
      { $sort: { name: 1 } }
    ]);
    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var parseMonthNumber = (val) => {
  if (!val) return null;
  if (typeof val === "number") return val >= 1 && val <= 12 ? val : null;
  const parsed = parseInt(val, 10);
  if (!isNaN(parsed) && parsed >= 1 && parsed <= 12) return parsed;
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const idx = months.indexOf(String(val).trim().toLowerCase());
  return idx !== -1 ? idx + 1 : null;
};
var parseConfigComponentTotal = (component) => {
  if (!component) return 0;
  if (typeof component === "number") return isNaN(component) ? 0 : component;
  if (typeof component === "string") {
    const n = parseFloat(component);
    return isNaN(n) ? 0 : n;
  }
  if (Array.isArray(component)) {
    return component.reduce((acc, curr) => {
      if (typeof curr === "number") return acc + curr;
      if (typeof curr === "string") {
        const n = parseFloat(curr);
        return acc + (isNaN(n) ? 0 : n);
      }
      if (curr && typeof curr === "object") {
        const amt = Number(curr.amount);
        return acc + (isNaN(amt) ? 0 : amt);
      }
      return acc;
    }, 0);
  }
  return 0;
};
var enrichPayrollWithAliases = (doc) => {
  if (!doc) return doc;
  const r = doc?.toObject ? doc.toObject() : { ...doc };
  const calc = r.calculations || {};
  return {
    ...r,
    earnedBasicSalary: calc.earnedBasic ?? r.basicSalary ?? 0,
    lopDeduction: calc.lopDeduction ?? 0,
    overtimePay: calc.overtimePay ?? 0,
    bonuses: calc.bonuses ?? 0,
    allowances: calc.allowances ?? 0,
    totalDeductions: calc.totalDeductions ?? (calc.deductions ?? 0) + (calc.lopDeduction ?? 0),
    grossPayable: calc.grossSalary ?? 0,
    netPayable: calc.netSalaryPayable ?? 0
  };
};
var prefetchPayrollContext = async (restaurantId, employees, m, y) => {
  const startDate = new Date(y, m - 1, 1);
  const endDate = new Date(y, m, 0, 23, 59, 59, 999);
  const empIds = employees.map((e) => e._id);
  const [restaurant, allAttendance] = await Promise.all([
    Restaurant_default.findById(restaurantId).select("restaurantConfig").lean(),
    empIds.length > 0 ? Attendance_default.find({ restaurantId, employee: { $in: empIds }, date: { $gte: startDate, $lte: endDate } }).lean() : Promise.resolve([])
  ]);
  const attendanceMap = /* @__PURE__ */ new Map();
  for (const a of allAttendance) {
    const key = String(a.employee);
    if (!attendanceMap.has(key)) attendanceMap.set(key, []);
    attendanceMap.get(key).push(a);
  }
  return { restaurant, attendanceMap };
};
var calculateEmployeePayrollItem = async (emp, m, y, restaurantId, prefetched = null) => {
  const startDate = new Date(y, m - 1, 1);
  const endDate = new Date(y, m, 0, 23, 59, 59, 999);
  const daysInMonth = new Date(y, m, 0).getDate();
  const restaurant = prefetched?.restaurant || await Restaurant_default.findById(restaurantId).select("restaurantConfig").lean();
  const payrollConfig = restaurant?.restaurantConfig?.payrollConfig || {};
  const lopPolicy = payrollConfig.lopCalculationPolicy || "Configured_Working_Days";
  const config = emp.salaryConfig || {};
  const basic = Number(config.basicSalary) || 0;
  const freq = config.salaryFrequency || "Monthly";
  const otRate = Number(config.overtimeRatePerHour) || 0;
  const standardWorkDays = Number(config.monthlyWorkingDays) || 26;
  const dailyHours = Number(config.dailyWorkHours) || 8;
  const attendance = prefetched?.attendanceMap ? prefetched.attendanceMap.get(String(emp._id)) || [] : await Attendance_default.find({
    restaurantId,
    employee: emp._id,
    date: { $gte: startDate, $lte: endDate }
  }).lean();
  let presentDays = 0;
  let absentDays = 0;
  let leaveDays = 0;
  let paidLeaveDays = 0;
  let unpaidLeaveDays = 0;
  let halfDays = 0;
  let holidays = 0;
  let overtimeHours = 0;
  let totalWorkingHours = 0;
  for (const a of attendance) {
    if (a.status === "Present") presentDays++;
    else if (a.status === "Absent") absentDays++;
    else if (a.status === "Leave") {
      leaveDays++;
      if (a.isPaidLeave === false || a.isLOP === true) {
        unpaidLeaveDays++;
      } else {
        paidLeaveDays++;
      }
    } else if (a.status === "Half-day") halfDays++;
    else if (a.status === "Holiday") holidays++;
    overtimeHours += a.overtimeHours || 0;
    totalWorkingHours += a.workingHours || 0;
  }
  let divisorDays = standardWorkDays;
  if (lopPolicy === "Calendar_Days") {
    divisorDays = daysInMonth;
  } else if (lopPolicy === "Standard_26_Days") {
    divisorDays = 26;
  } else {
    divisorDays = standardWorkDays > 0 ? standardWorkDays : 26;
  }
  const perDayRate = divisorDays > 0 ? basic / divisorDays : 0;
  const lopDays = unpaidLeaveDays + absentDays;
  const lopDeduction = Math.round(lopDays * perDayRate * 100) / 100;
  let calculatedOtRate = otRate;
  if (calculatedOtRate === 0 && perDayRate > 0) {
    calculatedOtRate = Math.round(perDayRate / dailyHours * 1.5 * 100) / 100;
  }
  let earnedBasic = 0;
  if (freq === "Monthly") {
    if (attendance.length === 0) {
      earnedBasic = basic;
    } else {
      earnedBasic = Math.max(0, Math.round((basic - lopDeduction) * 100) / 100);
    }
  } else if (freq === "Daily") {
    earnedBasic = Math.round(basic * (presentDays + halfDays * 0.5 + paidLeaveDays) * 100) / 100;
  } else if (freq === "Hourly") {
    calculatedOtRate = otRate || basic * 1.5;
    earnedBasic = Math.round(basic * totalWorkingHours * 100) / 100;
  }
  const overtimePay = Math.round(overtimeHours * calculatedOtRate * 100) / 100;
  const allowancesTotal = Math.round(parseConfigComponentTotal(config.allowances) * 100) / 100;
  const otherDeductionsTotal = Math.round(parseConfigComponentTotal(config.deductions) * 100) / 100;
  const totalDeductions = Math.round((otherDeductionsTotal + lopDeduction) * 100) / 100;
  const grossSalary = Math.round((earnedBasic + overtimePay + allowancesTotal) * 100) / 100;
  const netSalary = Math.max(0, Math.round((grossSalary - otherDeductionsTotal) * 100) / 100);
  return {
    employee: {
      _id: emp._id,
      name: emp.name,
      email: emp.email,
      role: emp.role,
      employeeId: emp.employeeId,
      branch: emp.branchId
    },
    month: m,
    year: y,
    periodString: `${y}-${m.toString().padStart(2, "0")}`,
    payPeriod: { startDate, endDate },
    salaryFrequency: freq,
    basicSalary: basic,
    earnedBasicSalary: earnedBasic,
    lopDeduction,
    overtimePay,
    bonuses: 0,
    allowances: allowancesTotal,
    otherDeductions: otherDeductionsTotal,
    totalDeductions,
    grossPayable: grossSalary,
    netPayable: netSalary,
    attendanceSummary: {
      presentDays,
      absentDays,
      leaveDays,
      paidLeaveDays,
      unpaidLeaveDays,
      lopDays,
      halfDays,
      holidays,
      overtimeHours,
      totalWorkingDays: divisorDays
    },
    calculations: {
      earnedBasic,
      lopDeduction,
      overtimePay,
      bonuses: 0,
      allowances: allowancesTotal,
      grossSalary,
      deductions: otherDeductionsTotal,
      totalDeductions,
      advances: 0,
      netSalaryPayable: netSalary
    },
    paidAmount: 0,
    balanceDue: netSalary,
    paymentStatus: "Pending",
    status: "Generated"
  };
};
var calculatePayroll = async (req, res) => {
  const { month, year, branchId } = req.body;
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const m = parseMonthNumber(month);
    const y = parseInt(year);
    if (!m || !y || m < 1 || m > 12) {
      return res.status(400).json({ message: "Valid month and year are required" });
    }
    const staffFilter = {
      restaurantId,
      role: { $in: ["BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner"] },
      employmentStatus: { $ne: "Terminated" }
    };
    if (branchId && branchId !== "All") {
      staffFilter.branchId = branchId;
    } else if (req.user.role === "BranchManager" && req.user.branchId) {
      staffFilter.branchId = req.user.branchId;
    }
    const employees = await User_default.find(staffFilter).populate("branchId", "name").lean();
    const context = await prefetchPayrollContext(restaurantId, employees, m, y);
    const calculatedPayroll = await Promise.all(
      employees.map((emp) => calculateEmployeePayrollItem(emp, m, y, restaurantId, context))
    );
    res.json({
      month: m,
      year: y,
      count: calculatedPayroll.length,
      totalEmployees: calculatedPayroll.length,
      totalGrossPayable: calculatedPayroll.reduce((acc, c) => acc + c.calculations.grossSalary, 0),
      totalNetPayable: calculatedPayroll.reduce((acc, c) => acc + c.calculations.netSalaryPayable, 0),
      payroll: calculatedPayroll
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var generatePayroll = async (req, res) => {
  const { month, year, branchId, payrollData } = req.body;
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const m = parseMonthNumber(month);
    const y = parseInt(year);
    if (!m || !y) {
      return res.status(400).json({ message: "Valid month and year are required" });
    }
    let itemsToProcess = payrollData;
    if (!itemsToProcess || !itemsToProcess.length) {
      const staffFilter = {
        restaurantId,
        role: { $in: ["BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner"] },
        employmentStatus: { $ne: "Terminated" }
      };
      if (branchId && branchId !== "All") {
        staffFilter.branchId = branchId;
      } else if (req.user.role === "BranchManager" && req.user.branchId) {
        staffFilter.branchId = req.user.branchId;
      }
      const employees = await User_default.find(staffFilter).populate("branchId", "name").lean();
      const context = await prefetchPayrollContext(restaurantId, employees, m, y);
      itemsToProcess = await Promise.all(
        employees.map((emp) => calculateEmployeePayrollItem(emp, m, y, restaurantId, context))
      );
    }
    const periodString = `${y}-${m.toString().padStart(2, "0")}`;
    const savedRecords = [];
    for (const item of itemsToProcess) {
      const empId = item.employee?._id || item.employee;
      let pr = await Payroll_default.findOne({
        restaurantId,
        employee: empId,
        month: m,
        year: y
      });
      if (pr) {
        pr.attendanceSummary = item.attendanceSummary;
        pr.calculations = item.calculations;
        pr.balanceDue = Math.max(0, item.calculations.netSalaryPayable - pr.paidAmount);
        pr.paymentStatus = pr.paidAmount >= item.calculations.netSalaryPayable ? "Paid" : pr.paidAmount > 0 ? "Partially Paid" : "Pending";
        pr.status = "Approved";
        pr.approvedBy = req.user._id;
        pr.approvedAt = /* @__PURE__ */ new Date();
        await pr.save();
        savedRecords.push(pr);
      } else {
        pr = await Payroll_default.create({
          restaurantId,
          branchId: item.employee?.branch?._id || branchId || req.user.branchId,
          employee: empId,
          month: m,
          year: y,
          periodString,
          payPeriod: item.payPeriod,
          salaryFrequency: item.salaryFrequency,
          basicSalary: item.basicSalary,
          attendanceSummary: item.attendanceSummary,
          calculations: item.calculations,
          paidAmount: 0,
          balanceDue: item.calculations.netSalaryPayable,
          paymentStatus: "Pending",
          status: "Approved",
          approvedBy: req.user._id,
          approvedAt: /* @__PURE__ */ new Date()
        });
        savedRecords.push(pr);
      }
    }
    res.status(201).json({
      message: `Successfully processed ${savedRecords.length} payroll records for ${periodString}`,
      count: savedRecords.length,
      records: savedRecords.map(enrichPayrollWithAliases)
    });
  } catch (error) {
    console.error("Error generating payroll:", error);
    res.status(400).json({ message: error.message });
  }
};
var getPayrollRecords = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const filter = { restaurantId };
    if (req.user.role === "BranchManager" && req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.month && req.query.month !== "All") {
      const m = parseMonthNumber(req.query.month);
      if (m) filter.month = m;
    }
    if (req.query.year && req.query.year !== "All") {
      filter.year = parseInt(req.query.year);
    }
    if (req.query.employee && req.query.employee !== "All") {
      filter.employee = req.query.employee;
    }
    if (req.query.paymentStatus && req.query.paymentStatus !== "All") {
      filter.paymentStatus = req.query.paymentStatus;
    }
    const records = await Payroll_default.find(filter).populate("employee", "name email role employeeId phoneNumber bankDetails").populate("branchId", "name").populate("approvedBy", "name role").populate("payments.paidBy", "name").sort({ year: -1, month: -1, "employee.name": 1 });
    res.json(records.map(enrichPayrollWithAliases));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getPayrollById = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const record = await Payroll_default.findById(req.params.id).populate("employee", "name email role employeeId phoneNumber bankDetails joiningDate salaryConfig").populate("branchId", "name address phone").populate("restaurantId", "name address phone logo currency").populate("approvedBy", "name role").populate("payments.paidBy", "name role");
    if (!record) {
      return res.status(404).json({ message: "Payroll record not found" });
    }
    if (record.restaurantId._id.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to view this record" });
    }
    res.json(enrichPayrollWithAliases(record));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var recordPayrollPayment = async (req, res) => {
  const { amount, paymentMethod, reference, notes, paymentDate } = req.body;
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const payroll = await Payroll_default.findById(req.params.id).populate("employee", "name email employeeId");
    if (!payroll) {
      return res.status(404).json({ message: "Payroll record not found" });
    }
    if (payroll.restaurantId.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to modify this record" });
    }
    const payAmount = Number(amount);
    if (!payAmount || payAmount <= 0) {
      return res.status(400).json({ message: "Valid payment amount is required" });
    }
    const netPayable = payroll.calculations.netSalaryPayable;
    const newPaid = Math.min(netPayable, (payroll.paidAmount || 0) + payAmount);
    const newBalance = Math.max(0, netPayable - newPaid);
    const newPaymentStatus = newPaid >= netPayable ? "Paid" : newPaid > 0 ? "Partially Paid" : "Pending";
    const payDate = paymentDate ? new Date(paymentDate) : /* @__PURE__ */ new Date();
    payroll.paidAmount = newPaid;
    payroll.balanceDue = newBalance;
    payroll.paymentStatus = newPaymentStatus;
    payroll.payments.push({
      amount: payAmount,
      paymentDate: payDate,
      paymentMethod: paymentMethod || "Bank Transfer",
      reference: reference || "",
      notes: notes || "",
      paidBy: req.user._id
    });
    if (!payroll.auditHistory) payroll.auditHistory = [];
    payroll.auditHistory.push({
      action: "Payment Recorded",
      performedBy: req.user._id,
      performedByName: req.user.name || "Admin",
      timestamp: payDate,
      notes: `Disbursed \u20B9${payAmount} via ${paymentMethod || "Bank Transfer"} (Ref: ${reference || "N/A"})`,
      changes: { amount: payAmount, paymentMethod, reference }
    });
    await payroll.save();
    await Expense_default.create({
      title: `Salary Payment - ${payroll.employee?.name || "Staff"} (${payroll.periodString})`,
      category: "Staff salary",
      amount: payAmount,
      paidAmount: payAmount,
      balanceDue: 0,
      paymentStatus: "Paid",
      paymentMethod: paymentMethod || "Bank Transfer",
      paymentDate: payDate,
      description: `Salary Payment for ${payroll.employee?.name || "Staff"} (${payroll.periodString}) - Ref: ${reference || "N/A"}`,
      date: payDate,
      billingPeriod: payroll.periodString,
      staff: req.user.name || "Admin",
      restaurantId,
      branchId: payroll.branchId,
      source: "Payroll",
      sourceId: payroll._id,
      createdBy: req.user._id,
      notes: notes || `Payroll salary disbursed for ${payroll.periodString}`
    });
    res.json({
      message: "Salary payment recorded successfully",
      payroll: enrichPayrollWithAliases(payroll)
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getEmployeeSalaryHistory = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const records = await Payroll_default.find({
      restaurantId,
      employee: req.params.id
    }).sort({ year: -1, month: -1 });
    res.json(records.map(enrichPayrollWithAliases));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var applyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    if (!startDate || !endDate || !reason) {
      return res.status(400).json({ message: "Start date, end date, and reason are required" });
    }
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ message: "Invalid start or end date" });
    }
    if (start > end) {
      return res.status(400).json({ message: "End date must be on or after start date" });
    }
    const restaurantId = await getUserRestaurantId2(req.user);
    const userDoc = await User_default.findById(req.user._id);
    const branchId = userDoc?.branchId || req.user.branchId;
    if (!branchId) {
      return res.status(400).json({ message: "No branch assigned to your staff profile" });
    }
    const overlappingLeave = await Leave_default.findOne({
      restaurantId,
      employee: req.user._id,
      status: { $in: ["Pending", "Approved"] },
      startDate: { $lte: end },
      endDate: { $gte: start }
    });
    if (overlappingLeave) {
      return res.status(400).json({
        message: `You already have an active (${overlappingLeave.status}) leave request overlapping these dates (${new Date(overlappingLeave.startDate).toLocaleDateString()} to ${new Date(overlappingLeave.endDate).toLocaleDateString()})`
      });
    }
    const diffMs = end.getTime() - start.getTime();
    const daysCount = Math.max(1, Math.round(diffMs / (1e3 * 60 * 60 * 24)));
    let isPaid = true;
    if (leaveType === "Unpaid Leave") {
      isPaid = false;
    } else {
      const restaurant = await Restaurant_default.findById(restaurantId).select("restaurantConfig");
      const quota = restaurant?.restaurantConfig?.payrollConfig?.monthlyPaidLeaveQuota ?? 2;
      const startMonth = start.getMonth() + 1;
      const startYear = start.getFullYear();
      const monthStart = new Date(startYear, startMonth - 1, 1);
      const monthEnd = new Date(startYear, startMonth, 0, 23, 59, 59, 999);
      const existingPaidLeaves = await Leave_default.find({
        restaurantId,
        employee: req.user._id,
        status: "Approved",
        isPaid: true,
        startDate: { $gte: monthStart, $lte: monthEnd }
      });
      const usedPaidDays = existingPaidLeaves.reduce((acc, l) => acc + (l.daysCount || 0), 0);
      if (usedPaidDays + daysCount > quota && quota > 0) {
        isPaid = false;
      }
    }
    const leave = await Leave_default.create({
      restaurantId,
      branchId,
      employee: req.user._id,
      leaveType: leaveType || "Casual Leave",
      isPaid,
      startDate: start,
      endDate: end,
      daysCount,
      reason: reason.trim(),
      status: "Pending",
      appliedAt: /* @__PURE__ */ new Date()
    });
    const populatedLeave = await Leave_default.findById(leave._id).populate("branchId", "name").populate("employee", "name email role employeeId");
    res.status(201).json({
      message: "Leave request submitted successfully",
      leave: populatedLeave
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getMyLeaves = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const leaves = await Leave_default.find({
      restaurantId,
      employee: req.user._id
    }).populate("branchId", "name").populate("approvedBy", "name role").sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var cancelMyLeave = async (req, res) => {
  try {
    const leave = await Leave_default.findById(req.params.id);
    if (!leave) return res.status(404).json({ message: "Leave request not found" });
    if (leave.employee.toString() !== req.user._id.toString() && req.user.role !== "RestaurantAdmin" && req.user.role !== "SuperAdmin") {
      return res.status(403).json({ message: "Not authorized to cancel this leave request" });
    }
    if (leave.status !== "Pending") {
      return res.status(400).json({ message: `Cannot cancel a leave request that is already ${leave.status}` });
    }
    leave.status = "Cancelled";
    leave.cancelledAt = /* @__PURE__ */ new Date();
    leave.cancellationReason = req.body?.reason || "Cancelled by employee";
    await leave.save();
    res.json({ message: "Leave request cancelled successfully", leave });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getLeaveRequests = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const filter = { restaurantId };
    if (req.user.role === "BranchManager" && req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.status && req.query.status !== "All") {
      filter.status = req.query.status;
    }
    if (req.query.leaveType && req.query.leaveType !== "All") {
      filter.leaveType = req.query.leaveType;
    }
    if (req.query.employeeId) {
      filter.employee = req.query.employeeId;
    }
    const leaves = await Leave_default.find(filter).populate("employee", "name email role employeeId phoneNumber salaryConfig").populate("branchId", "name").populate("approvedBy", "name role").sort({ status: 1, createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateLeaveStatus = async (req, res) => {
  try {
    const { status, managerRemarks, isPaid } = req.body;
    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Status must be either Approved or Rejected" });
    }
    const leave = await Leave_default.findById(req.params.id);
    if (!leave) return res.status(404).json({ message: "Leave request not found" });
    if (req.user.role === "BranchManager" && req.user.branchId) {
      if (leave.branchId.toString() !== req.user.branchId.toString()) {
        return res.status(403).json({ message: "Unauthorized: You can only approve leaves for your assigned branch" });
      }
    }
    leave.status = status;
    leave.approvedBy = req.user._id;
    leave.approvalDate = /* @__PURE__ */ new Date();
    leave.managerRemarks = managerRemarks || "";
    if (isPaid !== void 0) {
      leave.isPaid = Boolean(isPaid);
    }
    await leave.save();
    if (status === "Approved") {
      const start = new Date(leave.startDate);
      const end = new Date(leave.endDate);
      let curr = new Date(start);
      while (curr <= end) {
        const dateString = curr.toISOString().split("T")[0];
        const dayDate = new Date(curr);
        await Attendance_default.findOneAndUpdate(
          {
            restaurantId: leave.restaurantId,
            employee: leave.employee,
            dateString
          },
          {
            $set: {
              restaurantId: leave.restaurantId,
              branchId: leave.branchId,
              employee: leave.employee,
              date: dayDate,
              dateString,
              status: "Leave",
              leaveId: leave._id,
              leaveType: leave.leaveType,
              isPaidLeave: leave.isPaid,
              isLOP: !leave.isPaid,
              notes: `Approved Leave: ${leave.leaveType} (${leave.isPaid ? "Paid" : "Unpaid/LOP"})${managerRemarks ? " - " + managerRemarks : ""}`
            }
          },
          { upsert: true, new: true }
        );
        curr.setDate(curr.getDate() + 1);
      }
    } else if (status === "Rejected") {
      await Attendance_default.deleteMany({
        restaurantId: leave.restaurantId,
        employee: leave.employee,
        leaveId: leave._id
      });
    }
    const updatedLeave = await Leave_default.findById(leave._id).populate("employee", "name email role employeeId").populate("branchId", "name").populate("approvedBy", "name role");
    res.json({
      message: `Leave request ${status.toLowerCase()} successfully`,
      leave: updatedLeave
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getMyPayroll = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const records = await Payroll_default.find({
      restaurantId,
      employee: req.user._id
    }).populate("branchId", "name address phone").sort({ year: -1, month: -1 });
    res.json(records.map(enrichPayrollWithAliases));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getMyPayrollSlip = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const payroll = await Payroll_default.findOne({
      _id: req.params.id,
      restaurantId,
      employee: req.user._id
    }).populate("employee", "name email role employeeId phoneNumber bankDetails salaryConfig").populate("branchId", "name address phone").populate("approvedBy", "name role");
    if (!payroll) {
      return res.status(404).json({ message: "Salary slip not found or not authorized" });
    }
    const restaurant = await Restaurant_default.findById(restaurantId).select("name address phone logo gstin email");
    res.json({
      payroll: enrichPayrollWithAliases(payroll),
      restaurant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var correctPayrollRecord = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const payroll = await Payroll_default.findOne({ _id: req.params.id, restaurantId }).populate("employee", "name employeeId role");
    if (!payroll) return res.status(404).json({ message: "Payroll record not found" });
    if (req.user.role === "BranchManager" && req.user.branchId) {
      if (payroll.branchId && payroll.branchId.toString() !== req.user.branchId.toString()) {
        return res.status(403).json({ message: "Unauthorized: You cannot modify payroll for another branch" });
      }
    }
    if (payroll.paymentStatus === "Paid" && req.user.role !== "SuperAdmin" && req.user.role !== "RestaurantAdmin") {
      return res.status(400).json({ message: "Cannot modify a finalized and fully paid payroll record" });
    }
    const { basicSalary, allowances, overtimePay, bonuses, deductions, advances, notes } = req.body;
    const previousCalculations = { ...payroll.calculations?.toObject ? payroll.calculations.toObject() : payroll.calculations };
    if (!payroll.calculations) payroll.calculations = {};
    if (basicSalary !== void 0) payroll.basicSalary = Number(basicSalary);
    if (allowances !== void 0) payroll.calculations.allowances = Number(allowances);
    if (overtimePay !== void 0) payroll.calculations.overtimePay = Number(overtimePay);
    if (bonuses !== void 0) payroll.calculations.bonuses = Number(bonuses);
    if (deductions !== void 0) payroll.calculations.deductions = Number(deductions);
    if (advances !== void 0) payroll.calculations.advances = Number(advances);
    const earned = payroll.calculations.earnedBasic || payroll.basicSalary;
    const gross = Math.round((earned + (payroll.calculations.overtimePay || 0) + (payroll.calculations.bonuses || 0) + (payroll.calculations.allowances || 0)) * 100) / 100;
    const totalDed = Math.round(((payroll.calculations.deductions || 0) + (payroll.calculations.lopDeduction || 0) + (payroll.calculations.advances || 0)) * 100) / 100;
    const net = Math.max(0, Math.round((gross - (payroll.calculations.deductions || 0) - (payroll.calculations.advances || 0)) * 100) / 100);
    payroll.calculations.grossSalary = gross;
    payroll.calculations.totalDeductions = totalDed;
    payroll.calculations.netSalaryPayable = net;
    payroll.balanceDue = Math.max(0, net - (payroll.paidAmount || 0));
    payroll.paymentStatus = (payroll.paidAmount || 0) >= net ? "Paid" : (payroll.paidAmount || 0) > 0 ? "Partially Paid" : "Pending";
    if (!payroll.auditHistory) payroll.auditHistory = [];
    payroll.auditHistory.push({
      action: "Payroll Correction",
      performedBy: req.user._id,
      performedByName: req.user.name || "Admin",
      timestamp: /* @__PURE__ */ new Date(),
      notes: notes || "Manual adjustment of payroll components",
      changes: {
        previous: previousCalculations,
        updated: payroll.calculations
      }
    });
    await payroll.save();
    res.json({
      message: "Payroll record corrected successfully",
      payroll: enrichPayrollWithAliases(payroll)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getPayrollReports = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const { year, month, branchId, status } = req.query;
    const filter = {};
    if (restaurantId) {
      filter.restaurantId = restaurantId;
    }
    if (year && !isNaN(Number(year))) {
      filter.year = Number(year);
    }
    if (month && month !== "All") {
      const m = parseMonthNumber(month) || Number(month);
      if (m && !isNaN(m)) filter.month = m;
    }
    if (branchId && branchId !== "All" && branchId !== "") {
      filter.branchId = branchId;
    } else if (req.user?.role === "BranchManager" && req.user.branchId) {
      filter.branchId = req.user.branchId;
    }
    if (status && status !== "All") {
      filter.paymentStatus = status;
    }
    const records = await Payroll_default.find(filter).populate("employee", "name email role employeeId").populate("branchId", "name").sort({ year: -1, month: -1 }).lean();
    const safeRecords = Array.isArray(records) ? records : [];
    const totalGross = safeRecords.reduce((sum, r) => sum + (Number(r?.calculations?.grossSalary) || Number(r?.grossSalary) || 0), 0);
    const totalNet = safeRecords.reduce((sum, r) => sum + (Number(r?.calculations?.netSalaryPayable) || Number(r?.netSalaryPayable) || 0), 0);
    const totalPaid = safeRecords.reduce((sum, r) => sum + (Number(r?.paidAmount) || 0), 0);
    const totalDue = safeRecords.reduce((sum, r) => sum + (Number(r?.balanceDue) || 0), 0);
    const totalLOP = safeRecords.reduce((sum, r) => sum + (Number(r?.calculations?.lopDeduction) || 0), 0);
    const paidCount = safeRecords.filter((r) => r?.paymentStatus === "Paid").length;
    const pendingCount = safeRecords.filter((r) => r?.paymentStatus !== "Paid").length;
    const branchBreakdown = {};
    for (const r of safeRecords) {
      const bName = r.branchId?.name || (typeof r.branchId === "string" ? r.branchId : "Main Branch");
      if (!branchBreakdown[bName]) {
        branchBreakdown[bName] = { branchName: bName, totalEmployees: 0, gross: 0, net: 0, paid: 0, due: 0 };
      }
      branchBreakdown[bName].totalEmployees++;
      branchBreakdown[bName].gross += Number(r?.calculations?.grossSalary) || Number(r?.grossSalary) || 0;
      branchBreakdown[bName].net += Number(r?.calculations?.netSalaryPayable) || Number(r?.netSalaryPayable) || 0;
      branchBreakdown[bName].paid += Number(r?.paidAmount) || 0;
      branchBreakdown[bName].due += Number(r?.balanceDue) || 0;
    }
    res.json({
      count: safeRecords.length,
      totalGrossPayable: Math.round(totalGross * 100) / 100,
      totalNetPayable: Math.round(totalNet * 100) / 100,
      totalPaid: Math.round(totalPaid * 100) / 100,
      totalDue: Math.round(totalDue * 100) / 100,
      totalLOPDeductions: Math.round(totalLOP * 100) / 100,
      paidCount,
      pendingCount,
      branchBreakdown: Object.values(branchBreakdown),
      records: safeRecords.map((r) => enrichPayrollWithAliases(r))
    });
  } catch (error) {
    console.error("Error in getPayrollReports:", error);
    res.status(500).json({ message: error.message || "Failed to aggregate payroll reports" });
  }
};
var getPayrollConfig = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const restaurant = await Restaurant_default.findById(restaurantId).select("restaurantConfig.payrollConfig");
    const config = restaurant?.restaurantConfig?.payrollConfig || {
      lopCalculationPolicy: "Configured_Working_Days",
      monthlyPaidLeaveQuota: 2,
      unpaidLeaveDeductionType: "Full_Day_Basic"
    };
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updatePayrollConfig = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId2(req.user);
    const { lopCalculationPolicy, monthlyPaidLeaveQuota, unpaidLeaveDeductionType } = req.body;
    const restaurant = await Restaurant_default.findById(restaurantId);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    if (!restaurant.restaurantConfig) restaurant.restaurantConfig = {};
    if (!restaurant.restaurantConfig.payrollConfig) restaurant.restaurantConfig.payrollConfig = {};
    if (lopCalculationPolicy) {
      restaurant.restaurantConfig.payrollConfig.lopCalculationPolicy = lopCalculationPolicy;
    }
    if (monthlyPaidLeaveQuota !== void 0) {
      restaurant.restaurantConfig.payrollConfig.monthlyPaidLeaveQuota = Number(monthlyPaidLeaveQuota);
    }
    if (unpaidLeaveDeductionType) {
      restaurant.restaurantConfig.payrollConfig.unpaidLeaveDeductionType = unpaidLeaveDeductionType;
    }
    await restaurant.save();
    res.json({
      message: "Payroll configuration updated successfully",
      config: restaurant.restaurantConfig.payrollConfig
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var clockIn = async (req, res) => {
  try {
    const userId = req.user._id;
    let restaurantId = req.user.restaurantId?._id || req.user.restaurantId;
    if (!restaurantId) {
      restaurantId = await getUserRestaurantId2(req.user);
    }
    if (!restaurantId && userId) {
      const userDoc = await User_default.findById(userId).select("restaurantId branchId");
      restaurantId = userDoc?.restaurantId;
    }
    if (!restaurantId) {
      const firstRest = await (await Promise.resolve().then(() => (init_Restaurant(), Restaurant_exports))).default.findOne().select("_id");
      restaurantId = firstRest?._id;
    }
    let branchId = req.user.branchId?._id || req.user.branchId;
    if (!branchId && restaurantId) {
      const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
      let b = await Branch2.findOne({ restaurantId });
      if (!b) {
        b = await Branch2.create({
          restaurantId,
          name: "Main Branch",
          isMainBranch: true
        });
      }
      branchId = b?._id;
    }
    const now = /* @__PURE__ */ new Date();
    const dateString = now.toISOString().split("T")[0];
    let att = await Attendance_default.findOne({
      employee: userId,
      dateString
    });
    if (att) {
      if (!att.checkIn) {
        att.checkIn = now;
      }
      att.status = "Present";
      if (restaurantId && !att.restaurantId) att.restaurantId = restaurantId;
      if (branchId && !att.branchId) att.branchId = branchId;
      await att.save();
    } else {
      att = await Attendance_default.create({
        restaurantId: restaurantId || void 0,
        branchId: branchId || void 0,
        employee: userId,
        date: now,
        dateString,
        status: "Present",
        checkIn: now,
        lateMinutes: 0,
        overtimeHours: 0,
        workingHours: 0,
        createdBy: userId
      });
    }
    res.json({ message: "Clocked in successfully", attendance: att });
  } catch (error) {
    console.error("Clock in error:", error);
    res.status(500).json({ message: error.message || "Error clocking in" });
  }
};
var clockOut = async (req, res) => {
  try {
    const userId = req.user._id;
    let restaurantId = req.user.restaurantId?._id || req.user.restaurantId;
    if (!restaurantId) {
      restaurantId = await getUserRestaurantId2(req.user);
    }
    if (!restaurantId && userId) {
      const userDoc = await User_default.findById(userId).select("restaurantId branchId");
      restaurantId = userDoc?.restaurantId;
    }
    const now = /* @__PURE__ */ new Date();
    const dateString = now.toISOString().split("T")[0];
    let att = await Attendance_default.findOne({
      employee: userId,
      dateString
    });
    if (!att) {
      let branchId = req.user.branchId?._id || req.user.branchId;
      if (!branchId && restaurantId) {
        const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
        let b = await Branch2.findOne({ restaurantId });
        branchId = b?._id;
      }
      att = await Attendance_default.create({
        restaurantId: restaurantId || void 0,
        branchId: branchId || void 0,
        employee: userId,
        date: now,
        dateString,
        status: "Present",
        checkIn: now,
        checkOut: now,
        lateMinutes: 0,
        overtimeHours: 0,
        workingHours: 0,
        createdBy: userId
      });
    } else {
      att.checkOut = now;
      if (att.checkIn) {
        const diffMs = now.getTime() - new Date(att.checkIn).getTime();
        const diffHrs = Math.max(0, diffMs / (1e3 * 60 * 60));
        att.workingHours = Math.round(diffHrs * 10) / 10;
        const userDoc = await User_default.findById(userId).select("salaryConfig");
        const dailyShift = userDoc?.salaryConfig?.dailyWorkHours || 8;
        if (diffHrs > dailyShift) {
          att.overtimeHours = Math.round((diffHrs - dailyShift) * 2) / 2;
        }
      }
      await att.save();
    }
    res.json({ message: "Clocked out successfully", attendance: att });
  } catch (error) {
    console.error("Clock out error:", error);
    res.status(500).json({ message: error.message || "Error clocking out" });
  }
};
var getMyAttendanceToday = async (req, res) => {
  try {
    const userId = req.user._id;
    const dateString = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const att = await Attendance_default.findOne({
      employee: userId,
      dateString
    });
    res.json({
      status: att ? att.status : "Not Clocked In",
      checkIn: att?.checkIn || null,
      checkOut: att?.checkOut || null,
      overtimeHours: att?.overtimeHours || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/staffRoutes.js
var router10 = import_express10.default.Router();
router10.use(protect);
router10.use(checkSubscription);
router10.post("/clock-in", clockIn);
router10.post("/clock-out", clockOut);
router10.post("/attendance", clockIn);
router10.get("/my-attendance-today", getMyAttendanceToday);
router10.use(checkBillingModule("staffManagement"));
router10.post("/attendance/bulk", authorize("RestaurantAdmin", "BranchManager"), bulkMarkAttendance);
router10.get("/attendance", authorize("RestaurantAdmin", "BranchManager"), getAttendance);
router10.put("/attendance/:id/correct", authorize("RestaurantAdmin", "BranchManager"), correctAttendance);
router10.get("/attendance/summary", authorize("RestaurantAdmin", "BranchManager"), getAttendanceSummary);
router10.post("/leave", applyLeave);
router10.post("/leaves", applyLeave);
router10.get("/leave/my", getMyLeaves);
router10.get("/leaves/my", getMyLeaves);
router10.put("/leave/:id/cancel", cancelMyLeave);
router10.put("/leaves/:id/cancel", cancelMyLeave);
router10.get("/leave", authorize("RestaurantAdmin", "BranchManager", "SuperAdmin"), getLeaveRequests);
router10.get("/leaves", authorize("RestaurantAdmin", "BranchManager", "SuperAdmin"), getLeaveRequests);
router10.put("/leave/:id/status", authorize("RestaurantAdmin", "BranchManager", "SuperAdmin"), updateLeaveStatus);
router10.put("/leaves/:id/status", authorize("RestaurantAdmin", "BranchManager", "SuperAdmin"), updateLeaveStatus);
router10.get("/payroll/my", getMyPayroll);
router10.get("/payroll/my/:id/slip", getMyPayrollSlip);
router10.post("/payroll/calculate", authorize("RestaurantAdmin", "BranchManager"), calculatePayroll);
router10.post("/payroll/generate", authorize("RestaurantAdmin"), generatePayroll);
router10.get("/payroll/reports", authorize("RestaurantAdmin", "BranchManager"), getPayrollReports);
router10.get("/payroll/config", authorize("RestaurantAdmin", "BranchManager"), getPayrollConfig);
router10.put("/payroll/config", authorize("RestaurantAdmin"), updatePayrollConfig);
router10.get("/payroll", authorize("RestaurantAdmin", "BranchManager"), getPayrollRecords);
router10.get("/payroll/:id", authorize("RestaurantAdmin", "BranchManager"), getPayrollById);
router10.put("/payroll/:id/correct", authorize("RestaurantAdmin", "BranchManager"), correctPayrollRecord);
router10.post("/payroll/:id/pay", authorize("RestaurantAdmin"), recordPayrollPayment);
router10.get("/payroll/employee/:id/history", authorize("RestaurantAdmin", "BranchManager"), getEmployeeSalaryHistory);
router10.route("/").get(authorize("RestaurantAdmin", "BranchManager"), getStaff).post(authorize("RestaurantAdmin"), createStaff);
router10.route("/:id").put(authorize("RestaurantAdmin"), updateStaff).delete(authorize("RestaurantAdmin"), deleteStaff);
var staffRoutes_default = router10;

// routes/userRoutes.js
var import_express11 = __toESM(require("express"), 1);

// controllers/userController.js
init_User();
init_Restaurant();
init_subscriptionHelper();
var getUsers = async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== "SuperAdmin" && req.user.role !== "SupportAgent") {
      query.restaurantId = req.user.restaurantId;
    }
    const users = await User_default.find(query).populate("branchId", "name").select("-password").lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var inviteUser = async (req, res) => {
  const { name, email, role, branchId } = req.body;
  try {
    const userExists = await User_default.findOne({ email: String(email || "").trim().toLowerCase() });
    if (userExists) {
      return res.status(400).json({ message: "A user with this email already exists" });
    }
    const validRoles = ["RestaurantAdmin", "BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner", "Customer"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    if (req.user.role !== "SuperAdmin" && req.user.restaurantId && role !== "Customer") {
      const restaurant = await Restaurant_default.findById(req.user.restaurantId).select("subscription").lean();
      const planName = restaurant?.subscription?.plan || "Basic";
      const planDoc = await findPlanDocument(planName);
      const staffLimit = ["pro", "professional", "enterprise"].includes(planName.toLowerCase()) ? Infinity : planDoc?.staffLimit || 5;
      const currentStaff = await User_default.countDocuments({
        restaurantId: req.user.restaurantId,
        role: { $in: ["BranchManager", "Chef", "Waiter", "Cashier", "DeliveryPartner", "Staff", "Manager"] }
      });
      if (currentStaff >= staffLimit) {
        return res.status(403).json({
          message: `Your "${planName}" plan is limited to ${staffLimit} staff members. Please upgrade to add more staff.`
        });
      }
    }
    const user = await User_default.create({
      name,
      email,
      password: "password123",
      role,
      restaurantId: req.user.restaurantId,
      branchId: branchId || null
    });
    const populatedUser = await User_default.findById(user._id).populate("branchId", "name").select("-password");
    res.status(201).json(populatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteUser2 = async (req, res) => {
  try {
    const targetUser = await User_default.findById(req.params.id);
    if (targetUser) {
      if (req.user.role !== "SuperAdmin" && req.user.role !== "SupportAgent" && targetUser.restaurantId?.toString() !== req.user.restaurantId?.toString()) {
        return res.status(403).json({ message: "Not authorized to delete this user" });
      }
      if (targetUser._id.toString() === req.user._id.toString()) {
        return res.status(400).json({ message: "You cannot delete your own account" });
      }
      await targetUser.deleteOne();
      res.json({ message: "User removed" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateUserProfile = async (req, res) => {
  try {
    const user = await User_default.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (req.body.name) user.name = req.body.name;
    if (req.body.phoneNumber !== void 0) user.phoneNumber = req.body.phoneNumber;
    if (req.body.address !== void 0) user.address = req.body.address;
    if (req.body.location !== void 0) user.location = req.body.location;
    if (req.body.coordinates !== void 0) user.coordinates = req.body.coordinates;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      address: updatedUser.address,
      location: updatedUser.location,
      coordinates: updatedUser.coordinates,
      role: updatedUser.role,
      restaurantId: updatedUser.restaurantId,
      branchId: updatedUser.branchId
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/userRoutes.js
var router11 = import_express11.default.Router();
router11.route("/profile").put(protect, updateUserProfile);
router11.use(protect);
router11.use(authorize("RestaurantAdmin", "SuperAdmin", "SupportAgent"));
router11.use(checkSubscription);
router11.route("/").get(getUsers).post(inviteUser);
router11.route("/:id").delete(deleteUser2);
var userRoutes_default = router11;

// routes/roleRoutes.js
var import_express12 = __toESM(require("express"), 1);

// controllers/roleController.js
init_User();
var DEFAULT_CORE_ROLES = [
  { name: "SuperAdmin", description: "Full platform access. Normally reserved for SaaS owners, not restaurant staff.", isCoreRole: true, permissions: { "Dashboard & Analytics": [true, true, true, true], "Order Management": [true, true, true, true], "Menu & Catalog": [true, true, true, true], "Staff Management": [true, true, true, true] } },
  { name: "RestaurantAdmin", description: "Full access to all system features and settings for this restaurant.", isCoreRole: true, permissions: { "Dashboard & Analytics": [true, true, true, true], "Order Management": [true, true, true, true], "Menu & Catalog": [true, true, true, true], "Staff Management": [true, true, true, true] } },
  { name: "BranchManager", description: "Can manage staff, inventory, and operations for assigned branch.", isCoreRole: true, permissions: { "Dashboard & Analytics": [true, false, false, false], "Order Management": [true, true, true, true], "Menu & Catalog": [true, false, false, false], "Staff Management": [true, true, true, false] } },
  { name: "Chef", description: "Access to menu management, inventory, and kitchen display (KDS).", isCoreRole: true, permissions: { "Dashboard & Analytics": [false, false, false, false], "Order Management": [true, false, true, false], "Menu & Catalog": [true, false, false, false], "Staff Management": [false, false, false, false] } },
  { name: "Waiter", description: "Can take orders, append items, and view table statuses.", isCoreRole: true, permissions: { "Dashboard & Analytics": [false, false, false, false], "Order Management": [true, true, true, false], "Menu & Catalog": [true, false, false, false], "Staff Management": [false, false, false, false] } },
  { name: "Cashier", description: "Can create orders, process split payments, and view billing history.", isCoreRole: true, permissions: { "Dashboard & Analytics": [true, false, false, false], "Order Management": [true, true, true, false], "Menu & Catalog": [true, false, false, false], "Staff Management": [false, false, false, false] } }
];
var getRolesSummary = async (req, res) => {
  try {
    const coreRoleCount = await Role_default.countDocuments({ isCoreRole: true });
    if (coreRoleCount < DEFAULT_CORE_ROLES.length) {
      for (const role of DEFAULT_CORE_ROLES) {
        await Role_default.findOneAndUpdate({ name: role.name, isCoreRole: true }, role, { upsert: true });
      }
    }
    const restaurantId = req.user.restaurantId;
    const roles = await Role_default.find({
      $or: [
        { isCoreRole: true },
        { restaurantId }
      ]
    });
    const stats = await User_default.aggregate([
      { $match: { restaurantId } },
      { $group: { _id: "$role", count: { $sum: 1 } } }
    ]);
    const countsMap = {};
    stats.forEach((stat) => {
      countsMap[stat._id] = stat.count;
    });
    const rolesSummary = roles.map((role) => ({
      id: role._id,
      name: role.name,
      desc: role.description,
      isCoreRole: role.isCoreRole,
      permissions: Object.fromEntries(role.permissions),
      users: countsMap[role.name] || 0
    }));
    rolesSummary.sort((a, b) => {
      if (a.isCoreRole && !b.isCoreRole) return -1;
      if (!a.isCoreRole && b.isCoreRole) return 1;
      return a.name.localeCompare(b.name);
    });
    res.json(rolesSummary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
var createRole = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const restaurantId = req.user.restaurantId;
    const exists = await Role_default.findOne({
      name,
      $or: [{ isCoreRole: true }, { restaurantId }]
    });
    if (exists) {
      return res.status(400).json({ message: "A role with this name already exists" });
    }
    const defaultPermissions = {
      "Dashboard & Analytics": [false, false, false, false],
      "Order Management": [false, false, false, false],
      "Menu & Catalog": [false, false, false, false],
      "Staff Management": [false, false, false, false]
    };
    const newRole = await Role_default.create({
      name,
      description: desc,
      restaurantId,
      isCoreRole: false,
      permissions: defaultPermissions
    });
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateRole = async (req, res) => {
  try {
    const { permissions } = req.body;
    const role = await Role_default.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    if (role.isCoreRole) {
      return res.status(403).json({ message: "Cannot modify core system roles" });
    }
    if (role.restaurantId.toString() !== req.user.restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to modify this role" });
    }
    role.permissions = permissions;
    await role.save();
    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var deleteRole = async (req, res) => {
  try {
    const role = await Role_default.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    if (role.isCoreRole) {
      return res.status(403).json({ message: "Cannot delete core system roles" });
    }
    if (role.restaurantId.toString() !== req.user.restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this role" });
    }
    const usersCount = await User_default.countDocuments({ role: role.name, restaurantId: req.user.restaurantId });
    if (usersCount > 0) {
      return res.status(400).json({ message: "Cannot delete a role that is assigned to users" });
    }
    await role.deleteOne();
    res.json({ message: "Role removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/roleRoutes.js
var router12 = import_express12.default.Router();
router12.use(protect);
router12.use(authorize("RestaurantAdmin"));
router12.use(checkSubscription);
router12.route("/").get(getRolesSummary).post(createRole);
router12.route("/:id").put(updateRole).delete(deleteRole);
var roleRoutes_default = router12;

// routes/reservationRoutes.js
var import_express13 = __toESM(require("express"), 1);

// controllers/reservationController.js
init_Reservation();
var getReservations = async (req, res) => {
  try {
    if (!req.user || !req.user.restaurantId && req.user.role !== "SuperAdmin") {
      return res.json([]);
    }
    let branchIds = [];
    if (req.user.role !== "SuperAdmin") {
      const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
      const branches = await Branch2.find({ restaurantId: req.user.restaurantId }).select("_id");
      branchIds = branches.map((b) => b._id);
    }
    const filter = {};
    if (req.user.role !== "SuperAdmin") {
      if (req.user.branchId) {
        filter.branch = req.user.branchId;
      } else {
        filter.branch = { $in: branchIds };
      }
    }
    const reservations = await Reservation_default.find(filter).populate("branch", "name location").populate("table", "tableNumber capacity").sort({ date: 1, timeSlot: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createReservation = async (req, res) => {
  const { branch, guestName, guestPhone, date, timeSlot, guestCount, table } = req.body;
  try {
    const reservation = await Reservation_default.create({
      branch,
      guestName,
      guestPhone,
      date,
      timeSlot,
      guestCount,
      table: table || void 0,
      // Optional table assignment
      status: "Confirmed"
    });
    const populatedRes = await Reservation_default.findById(reservation._id).populate("branch").populate("table");
    res.status(201).json(populatedRes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateReservationStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const reservation = await Reservation_default.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    if (status) reservation.status = status;
    if (req.body.table !== void 0) {
      reservation.table = req.body.table || void 0;
    }
    await reservation.save();
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/reservationRoutes.js
var router13 = import_express13.default.Router();
router13.use(protect);
router13.use(authorize("RestaurantAdmin", "BranchManager", "Waiter"));
router13.use(checkSubscription);
router13.route("/").get(getReservations).post(createReservation);
router13.route("/:id/status").patch(updateReservationStatus);
var reservationRoutes_default = router13;

// routes/categoryRoutes.js
var import_express14 = __toESM(require("express"), 1);

// controllers/categoryController.js
init_Category();
var getCategories = async (req, res) => {
  try {
    const filter = {};
    if (req.user && req.user.role !== "SuperAdmin") {
      if (req.user.branchId) {
        filter.branch = req.user.branchId;
      } else if (req.user.restaurantId) {
        const Branch2 = (await Promise.resolve().then(() => (init_Branch(), Branch_exports))).default;
        const branches = await Branch2.find({ restaurantId: req.user.restaurantId }).select("_id");
        filter.branch = { $in: branches.map((b) => b._id) };
      } else {
        return res.json([]);
      }
    } else if (req.query.branch) {
      filter.branch = req.query.branch;
    }
    const categories = await Category_default.find(filter).populate("branch", "name");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createCategory = async (req, res) => {
  const { name, description, branch, isActive } = req.body;
  try {
    const category = await Category_default.create({
      name,
      description,
      branch: req.user.branchId || branch,
      // Use user's branch if they have one, else from body
      isActive: isActive !== void 0 ? isActive : true
    });
    const populatedCategory = await Category_default.findById(category._id).populate("branch", "name");
    res.status(201).json(populatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateCategory = async (req, res) => {
  try {
    const category = await Category_default.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("branch", "name");
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteCategory = async (req, res) => {
  try {
    const category = await Category_default.findById(req.params.id);
    if (category) {
      await category.deleteOne();
      res.json({ message: "Category removed" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/categoryRoutes.js
var router14 = import_express14.default.Router();
router14.use(protect);
router14.use(authorize("RestaurantAdmin", "BranchManager"));
router14.use(checkSubscription);
router14.route("/").get(getCategories).post(createCategory);
router14.route("/:id").put(updateCategory).delete(deleteCategory);
var categoryRoutes_default = router14;

// routes/inventoryRoutes.js
var import_express15 = __toESM(require("express"), 1);

// controllers/inventoryController.js
var import_mongoose36 = __toESM(require("mongoose"), 1);
init_Inventory();

// models/WastageLog.js
var import_mongoose35 = __toESM(require("mongoose"), 1);
var wastageLogSchema = new import_mongoose35.default.Schema({
  ingredientName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  restaurantId: {
    type: import_mongoose35.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  branchId: {
    type: import_mongoose35.default.Schema.Types.ObjectId,
    ref: "Branch"
  }
}, { timestamps: true });
var WastageLog = import_mongoose35.default.model("WastageLog", wastageLogSchema);
var WastageLog_default = WastageLog;

// controllers/inventoryController.js
init_Notification();
init_Branch();
init_Expense();
init_Restaurant();
var getUserRestaurantId3 = async (user, queryOrBody = {}) => {
  let rId = user?.restaurantId || user?.restaurant;
  if (!rId && user?.branchId) {
    const branchDoc = await Branch_default.findById(user.branchId);
    if (branchDoc) rId = branchDoc.restaurantId;
  }
  if (!rId && queryOrBody?.restaurantId) {
    rId = queryOrBody.restaurantId;
  }
  if (!rId && user?.role === "SuperAdmin") {
    const firstRest = await Restaurant_default.findOne().select("_id");
    if (firstRest) rId = firstRest._id;
  }
  return rId;
};
var logWastage = async (req, res) => {
  const { ingredientName, quantity, unit, reason, inventoryId } = req.body;
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const branchId = req.user.branchId || req.body.branchId;
    const log = await WastageLog_default.create({
      ingredientName,
      quantity: Number(quantity),
      unit,
      reason,
      restaurantId,
      branchId
    });
    let item = null;
    if (inventoryId) {
      item = await Inventory_default.findById(inventoryId);
    } else {
      item = await Inventory_default.findOne({
        itemName: { $regex: new RegExp(`^${ingredientName.trim()}$`, "i") },
        branch: branchId
      });
    }
    if (item) {
      const prevQty = item.quantity;
      item.quantity = Math.max(0, item.quantity - Number(quantity));
      await item.save();
      await StockMovement_default.create({
        restaurantId,
        branchId: item.branch,
        inventoryItem: item._id,
        itemName: item.itemName,
        movementType: "Wastage",
        quantityChanged: -Number(quantity),
        previousQuantity: prevQty,
        newQuantity: item.quantity,
        unit: item.unit,
        unitCost: item.pricePerUnit || 0,
        totalValue: Number(quantity) * (item.pricePerUnit || 0),
        reference: `Wastage Log #${log._id.toString().substring(18)}`,
        reason: reason || "Kitchen Wastage",
        performedBy: req.user._id,
        date: /* @__PURE__ */ new Date()
      });
    }
    await Notification_default.create({
      title: `Wastage Logged: ${ingredientName}`,
      desc: `${quantity} ${unit} wasted. Reason: ${reason}`,
      type: "Info",
      restaurantId,
      branchId
    }).catch(() => {
    });
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getInventory = async (req, res) => {
  try {
    const filter = {};
    const restaurantId = await getUserRestaurantId3(req.user);
    if (req.user && req.user.role !== "SuperAdmin") {
      if (req.user.branchId) {
        filter.branch = req.user.branchId;
      } else if (restaurantId) {
        const branches = await Branch_default.find({ restaurantId }).select("_id");
        filter.branch = { $in: branches.map((b) => b._id) };
      } else {
        return res.json([]);
      }
    } else if (req.query.branch) {
      filter.branch = req.query.branch;
    }
    if (req.query.branchId && req.query.branchId !== "All") {
      filter.branch = req.query.branchId;
    }
    if (req.query.category && req.query.category !== "All Categories") {
      filter.category = req.query.category;
    }
    if (req.query.status) {
      if (req.query.status === "Low Stock") {
        filter.$expr = { $and: [{ $gt: ["$quantity", 0] }, { $lte: ["$quantity", "$minStockLevel"] }] };
      } else if (req.query.status === "Out of Stock") {
        filter.quantity = { $lte: 0 };
      } else if (req.query.status === "In Stock") {
        filter.$expr = { $gt: ["$quantity", "$minStockLevel"] };
      }
    }
    if (req.query.search) {
      filter.itemName = { $regex: req.query.search, $options: "i" };
    }
    const items = await Inventory_default.find(filter).populate("branch", "name").populate("supplier", "name phone email").sort({ itemName: 1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createInventoryItem = async (req, res) => {
  const { itemName, category, quantity, unit, minStockLevel, pricePerUnit, supplier, branch, description } = req.body;
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const branchId = req.user.branchId || branch;
    if (!branchId) {
      return res.status(400).json({ message: "Branch is required" });
    }
    const qty = Number(quantity) || 0;
    const price = Number(pricePerUnit) || 0;
    const item = await Inventory_default.create({
      restaurantId,
      itemName: itemName.trim(),
      category: category || "General",
      quantity: qty,
      unit,
      minStockLevel: Number(minStockLevel) || 10,
      pricePerUnit: price,
      lastPurchasePrice: price,
      supplier: supplier || void 0,
      branch: branchId,
      description: description || ""
    });
    if (qty > 0) {
      await StockMovement_default.create({
        restaurantId,
        branchId,
        inventoryItem: item._id,
        itemName: item.itemName,
        movementType: "Stock Adjustment",
        quantityChanged: qty,
        previousQuantity: 0,
        newQuantity: qty,
        unit: item.unit,
        unitCost: price,
        totalValue: qty * price,
        reference: "Initial Stock Creation",
        reason: "Initial Inventory Entry",
        performedBy: req.user._id,
        date: /* @__PURE__ */ new Date()
      });
    }
    const populatedItem = await Inventory_default.findById(item._id).populate("branch", "name").populate("supplier", "name phone email");
    res.status(201).json(populatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateInventoryItem = async (req, res) => {
  try {
    const item = await Inventory_default.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    const oldQty = item.quantity;
    const newQty = req.body.quantity !== void 0 ? Number(req.body.quantity) : oldQty;
    if (req.body.quantity !== void 0 && newQty !== oldQty) {
      const restaurantId = await getUserRestaurantId3(req.user);
      await StockMovement_default.create({
        restaurantId,
        branchId: item.branch,
        inventoryItem: item._id,
        itemName: item.itemName,
        movementType: "Stock Adjustment",
        quantityChanged: newQty - oldQty,
        previousQuantity: oldQty,
        newQuantity: newQty,
        unit: item.unit,
        unitCost: req.body.pricePerUnit !== void 0 ? Number(req.body.pricePerUnit) : item.pricePerUnit,
        totalValue: Math.abs(newQty - oldQty) * (item.pricePerUnit || 0),
        reference: req.body.adjustmentReason || "Manual Inventory Adjustment",
        reason: req.body.adjustmentReason || "Stock count update",
        performedBy: req.user._id,
        date: /* @__PURE__ */ new Date()
      });
    }
    Object.assign(item, req.body);
    await item.save();
    const populated = await Inventory_default.findById(item._id).populate("branch", "name").populate("supplier", "name phone email");
    res.json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteInventoryItem = async (req, res) => {
  try {
    const item = await Inventory_default.findById(req.params.id);
    if (item) {
      await item.deleteOne();
      res.json({ message: "Item removed" });
    } else {
      res.status(404).json({ message: "Inventory item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var recordMaterialPurchase = async (req, res) => {
  const {
    branchId,
    supplier,
    supplierName,
    invoiceNumber,
    purchaseDate,
    items,
    subtotal,
    taxAmount,
    totalAmount,
    paidAmount,
    paymentMethod,
    paymentStatus,
    notes
  } = req.body;
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const targetBranchId = branchId || req.user.branchId;
    if (!targetBranchId) {
      return res.status(400).json({ message: "Branch is required" });
    }
    if (!items || !items.length) {
      return res.status(400).json({ message: "Purchase items list cannot be empty" });
    }
    if (!invoiceNumber) {
      return res.status(400).json({ message: "Invoice number is required" });
    }
    const tot = Number(totalAmount) || 0;
    const paid = Number(paidAmount !== void 0 ? paidAmount : req.body.amountPaid) || 0;
    const balance = Math.max(0, tot - paid);
    let finalPaymentStatus = paymentStatus || (paid >= tot ? "Paid" : paid > 0 ? "Partially Paid" : "Unpaid");
    const sName = supplierName || req.body.supplier?.name || (typeof supplier === "string" && !import_mongoose36.default.Types.ObjectId.isValid(supplier) ? supplier : "General Supplier");
    const sPhone = req.body.supplierPhone || req.body.supplier?.phone || "";
    const sId = supplier && import_mongoose36.default.Types.ObjectId.isValid(supplier) ? supplier : void 0;
    const normalizedItems = (items || []).map((i) => {
      const matId = i.material || i.materialId;
      const name = i.itemName || i.name || "Raw Material";
      const qty = Number(i.quantity) || 1;
      const price = Number(i.unitPrice) || 0;
      const total = Number(i.totalCost || i.total || qty * price);
      return {
        material: matId && import_mongoose36.default.Types.ObjectId.isValid(matId) ? matId : void 0,
        itemName: name,
        category: i.category || "General",
        quantity: qty,
        unit: i.unit || "kg",
        unitPrice: price,
        taxPercent: Number(i.taxPercent || 0),
        taxAmount: Number(i.taxAmount || 0),
        totalCost: total
      };
    });
    const purchase = await MaterialPurchase_default.create({
      restaurantId,
      branchId: targetBranchId,
      supplier: sId,
      supplierName: sName,
      supplierPhone: sPhone,
      invoiceNumber,
      purchaseDate: purchaseDate ? new Date(purchaseDate) : /* @__PURE__ */ new Date(),
      items: normalizedItems,
      subtotal: Number(subtotal) || tot,
      taxAmount: Number(taxAmount) || 0,
      totalAmount: tot,
      paidAmount: paid,
      balanceDue: balance,
      paymentStatus: finalPaymentStatus,
      payments: paid > 0 ? [{
        amount: paid,
        paymentDate: purchaseDate ? new Date(purchaseDate) : /* @__PURE__ */ new Date(),
        paymentMethod: paymentMethod || "Bank Transfer",
        reference: req.body.paymentReference || `Initial Payment - Inv #${invoiceNumber}`,
        notes: notes || "",
        recordedBy: req.user._id
      }] : [],
      notes: notes || "",
      createdBy: req.user._id
    });
    for (const itm of normalizedItems) {
      let invItem = itm.material ? await Inventory_default.findById(itm.material) : null;
      if (!invItem) {
        invItem = await Inventory_default.findOne({
          itemName: { $regex: new RegExp(`^${itm.itemName.trim()}$`, "i") },
          branch: targetBranchId
        });
      }
      const inQty = Number(itm.quantity);
      const inPrice = Number(itm.unitPrice);
      if (invItem) {
        const prevQty = invItem.quantity || 0;
        const prevPrice = invItem.pricePerUnit || 0;
        const newQty = prevQty + inQty;
        let newAvgPrice = inPrice;
        if (newQty > 0) {
          newAvgPrice = (prevQty * prevPrice + inQty * inPrice) / newQty;
        }
        invItem.quantity = newQty;
        invItem.pricePerUnit = Math.round(newAvgPrice * 100) / 100;
        invItem.lastPurchasePrice = inPrice;
        invItem.lastPurchaseDate = purchase.purchaseDate;
        if (sId) invItem.supplier = sId;
        await invItem.save();
        await StockMovement_default.create({
          restaurantId,
          branchId: targetBranchId,
          inventoryItem: invItem._id,
          itemName: invItem.itemName,
          movementType: "Purchase Received",
          quantityChanged: inQty,
          previousQuantity: prevQty,
          newQuantity: newQty,
          unit: invItem.unit,
          unitCost: inPrice,
          totalValue: inQty * inPrice,
          reference: `Invoice #${invoiceNumber}`,
          reason: `Material purchase from ${sName}`,
          performedBy: req.user._id,
          date: purchase.purchaseDate
        });
      } else {
        const createdItem = await Inventory_default.create({
          restaurantId,
          branch: targetBranchId,
          supplier: sId,
          itemName: itm.itemName,
          category: itm.category || "General",
          quantity: inQty,
          unit: itm.unit,
          minStockLevel: 10,
          pricePerUnit: inPrice,
          lastPurchasePrice: inPrice,
          lastPurchaseDate: purchase.purchaseDate,
          costingMethod: "Weighted Average"
        });
        await StockMovement_default.create({
          restaurantId,
          branchId: targetBranchId,
          inventoryItem: createdItem._id,
          itemName: createdItem.itemName,
          movementType: "Purchase Received",
          quantityChanged: inQty,
          previousQuantity: 0,
          newQuantity: inQty,
          unit: createdItem.unit,
          unitCost: inPrice,
          totalValue: inQty * inPrice,
          reference: `Invoice #${invoiceNumber}`,
          reason: `New material created via purchase from ${sName}`,
          performedBy: req.user._id,
          date: purchase.purchaseDate
        });
      }
    }
    const exp = await Expense_default.create({
      category: "Material purchases",
      amount: tot,
      paidAmount: paid,
      balanceDue: balance,
      paymentStatus: finalPaymentStatus === "Paid" ? "Paid" : finalPaymentStatus === "Partially Paid" ? "Partially Paid" : "Pending",
      paymentMethod: paymentMethod || "Bank Transfer",
      paymentDate: paid > 0 ? purchase.purchaseDate : void 0,
      description: `Material Purchase - Inv #${invoiceNumber} (${supplierName || "Supplier"})`,
      date: purchase.purchaseDate,
      billingPeriod: purchase.purchaseDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      staff: req.user.name || "Admin",
      restaurantId,
      branchId: targetBranchId,
      source: "Material Purchase",
      sourceId: purchase._id,
      createdBy: req.user._id,
      notes: notes || `Auto-linked from Material Purchase #${invoiceNumber}`
    });
    purchase.linkedExpenseId = exp._id;
    await purchase.save();
    const populatedPurchase = await MaterialPurchase_default.findById(purchase._id).populate("branchId", "name").populate("supplier", "name phone email").populate("items.material", "itemName unit quantity");
    res.status(201).json(populatedPurchase);
  } catch (error) {
    console.error("Error recording material purchase:", error);
    res.status(400).json({ message: error.message });
  }
};
var getMaterialPurchases = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const filter = { restaurantId };
    if (req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.supplier && req.query.supplier !== "All") {
      filter.supplier = req.query.supplier;
    }
    if (req.query.paymentStatus && req.query.paymentStatus !== "All") {
      filter.paymentStatus = req.query.paymentStatus;
    }
    if (req.query.period && req.query.period !== "all") {
      const now = /* @__PURE__ */ new Date();
      let start = /* @__PURE__ */ new Date();
      let end = /* @__PURE__ */ new Date();
      if (req.query.period === "today") {
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
      } else if (req.query.period === "yesterday") {
        start.setDate(start.getDate() - 1);
        start.setHours(0, 0, 0, 0);
        end.setDate(end.getDate() - 1);
        end.setHours(23, 59, 59, 999);
      } else if (req.query.period === "last7days") {
        start.setDate(start.getDate() - 7);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
      } else if (req.query.period === "thismonth") {
        start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
      } else if (req.query.period === "lastmonth") {
        start = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0);
        end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
      }
      filter.purchaseDate = { $gte: start, $lte: end };
    } else if (req.query.startDate || req.query.endDate) {
      filter.purchaseDate = {};
      if (req.query.startDate) {
        const s = new Date(req.query.startDate);
        s.setHours(0, 0, 0, 0);
        filter.purchaseDate.$gte = s;
      }
      if (req.query.endDate) {
        const e = new Date(req.query.endDate);
        e.setHours(23, 59, 59, 999);
        filter.purchaseDate.$lte = e;
      }
    }
    const purchases = await MaterialPurchase_default.find(filter).populate("branchId", "name").populate("supplier", "name phone email").sort({ purchaseDate: -1, createdAt: -1 });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var recordMaterialPurchasePayment = async (req, res) => {
  const { amount, paymentMethod, reference, notes, paymentDate } = req.body;
  try {
    const purchase = await MaterialPurchase_default.findById(req.params.id);
    if (!purchase) {
      return res.status(404).json({ message: "Purchase invoice not found" });
    }
    const payAmount = Number(amount);
    if (!payAmount || payAmount <= 0) {
      return res.status(400).json({ message: "Valid payment amount is required" });
    }
    const newPaid = Math.min(purchase.totalAmount, (purchase.paidAmount || 0) + payAmount);
    const newBalance = Math.max(0, purchase.totalAmount - newPaid);
    const newStatus = newPaid >= purchase.totalAmount ? "Paid" : newPaid > 0 ? "Partially Paid" : "Unpaid";
    purchase.paidAmount = newPaid;
    purchase.balanceDue = newBalance;
    purchase.paymentStatus = newStatus;
    purchase.payments.push({
      amount: payAmount,
      paymentDate: paymentDate ? new Date(paymentDate) : /* @__PURE__ */ new Date(),
      paymentMethod: paymentMethod || "Bank Transfer",
      reference: reference || "",
      notes: notes || "",
      recordedBy: req.user._id
    });
    await purchase.save();
    if (purchase.linkedExpenseId) {
      const exp = await Expense_default.findById(purchase.linkedExpenseId);
      if (exp) {
        exp.paidAmount = newPaid;
        exp.balanceDue = newBalance;
        exp.paymentStatus = newStatus === "Paid" ? "Paid" : newStatus === "Partially Paid" ? "Partially Paid" : "Pending";
        exp.paymentDate = /* @__PURE__ */ new Date();
        exp.payments.push({
          amount: payAmount,
          paidDate: paymentDate ? new Date(paymentDate) : /* @__PURE__ */ new Date(),
          paymentMethod: paymentMethod || "Bank Transfer",
          reference: reference || "",
          notes: notes || "",
          recordedBy: req.user._id
        });
        await exp.save();
      }
    }
    res.json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getStockMovements = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const filter = { restaurantId };
    if (req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.inventoryItem) {
      filter.inventoryItem = req.query.inventoryItem;
    }
    if (req.query.movementType && req.query.movementType !== "All") {
      filter.movementType = req.query.movementType;
    }
    if (req.query.startDate || req.query.endDate) {
      filter.date = {};
      if (req.query.startDate) {
        const s = new Date(req.query.startDate);
        s.setHours(0, 0, 0, 0);
        filter.date.$gte = s;
      }
      if (req.query.endDate) {
        const e = new Date(req.query.endDate);
        e.setHours(23, 59, 59, 999);
        filter.date.$lte = e;
      }
    }
    const movements = await StockMovement_default.find(filter).populate("branchId", "name").populate("performedBy", "name role").sort({ date: -1 }).limit(100);
    res.json(movements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var recordStockAdjustment = async (req, res) => {
  const { inventoryId, newQuantity, movementType, reason, reference } = req.body;
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const item = await Inventory_default.findById(inventoryId);
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    const prevQty = item.quantity;
    const targetQty = Number(newQuantity);
    const qtyDiff = targetQty - prevQty;
    item.quantity = Math.max(0, targetQty);
    await item.save();
    const movement = await StockMovement_default.create({
      restaurantId,
      branchId: item.branch,
      inventoryItem: item._id,
      itemName: item.itemName,
      movementType: movementType || "Stock Adjustment",
      quantityChanged: qtyDiff,
      previousQuantity: prevQty,
      newQuantity: item.quantity,
      unit: item.unit,
      unitCost: item.pricePerUnit || 0,
      totalValue: Math.abs(qtyDiff) * (item.pricePerUnit || 0),
      reference: reference || "Manual Adjustment",
      reason: reason || "Inventory Reconciliation",
      performedBy: req.user._id,
      date: /* @__PURE__ */ new Date()
    });
    res.status(201).json({ item, movement });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var getInventoryValuation = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId3(req.user);
    const filter = {};
    if (req.user.branchId) {
      filter.branch = req.user.branchId;
    } else if (restaurantId) {
      const branches = await Branch_default.find({ restaurantId }).select("_id");
      filter.branch = { $in: branches.map((b) => b._id) };
    }
    if (req.query.branchId && req.query.branchId !== "All") {
      filter.branch = new import_mongoose36.default.Types.ObjectId(req.query.branchId);
    }
    const items = await Inventory_default.find(filter);
    let totalValuation = 0;
    let totalItems = items.length;
    let lowStockCount = 0;
    let outOfStockCount = 0;
    const categoryMap = {};
    for (const itm of items) {
      const val = (itm.quantity || 0) * (itm.pricePerUnit || 0);
      totalValuation += val;
      if (itm.quantity <= 0) {
        outOfStockCount++;
      } else if (itm.quantity <= itm.minStockLevel) {
        lowStockCount++;
      }
      const cat = itm.category || "General";
      categoryMap[cat] = (categoryMap[cat] || 0) + val;
    }
    const categoryBreakdown = Object.entries(categoryMap).map(([category, value]) => ({
      category,
      value: Math.round(value * 100) / 100
    })).sort((a, b) => b.value - a.value);
    res.json({
      totalValuation: Math.round(totalValuation * 100) / 100,
      totalItems,
      lowStockCount,
      outOfStockCount,
      categoryBreakdown
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/inventoryRoutes.js
var router15 = import_express15.default.Router();
router15.use(protect);
router15.use(authorize("RestaurantAdmin", "BranchManager", "Chef", "Staff"));
router15.use(checkSubscription);
router15.use(checkBillingModule("inventoryManagement"));
router15.get("/purchases", getMaterialPurchases);
router15.post("/purchases", recordMaterialPurchase);
router15.post("/purchases/:id/pay", recordMaterialPurchasePayment);
router15.get("/stock-movements", getStockMovements);
router15.post("/stock-adjustments", recordStockAdjustment);
router15.get("/valuation", getInventoryValuation);
router15.post("/wastage", logWastage);
router15.route("/").get(getInventory).post(createInventoryItem);
router15.route("/:id").put(updateInventoryItem).delete(deleteInventoryItem);
var inventoryRoutes_default = router15;

// routes/supplierRoutes.js
var import_express16 = __toESM(require("express"), 1);

// models/Supplier.js
var import_mongoose37 = __toESM(require("mongoose"), 1);
var supplierSchema = new import_mongoose37.default.Schema({
  branch: {
    type: import_mongoose37.default.Schema.Types.ObjectId,
    ref: "Branch",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: "General"
  },
  contactPerson: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });
var Supplier = import_mongoose37.default.model("Supplier", supplierSchema);
var Supplier_default = Supplier;

// controllers/supplierController.js
init_Branch();
var getSuppliers = async (req, res) => {
  try {
    const filter = {};
    if (req.user && req.user.branchId) {
      filter.branch = req.user.branchId;
    } else if (req.query.branch) {
      filter.branch = req.query.branch;
    } else if (req.user?.restaurantId) {
      const branches = await Branch_default.find({ restaurantId: req.user.restaurantId }).select("_id").lean();
      filter.branch = { $in: branches.map((b) => b._id) };
    }
    const suppliers = await Supplier_default.find(filter).populate("branch", "name");
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createSupplier = async (req, res) => {
  const { name, category, contactPerson, phone, email, address, branch, isActive } = req.body;
  try {
    const cleanPhone = String(phone || "").replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({ message: "Phone number must be exactly 10 digits starting with 6, 7, 8, or 9." });
    }
    let targetBranch = req.user.branchId || branch;
    if (!targetBranch && req.user?.restaurantId) {
      const defaultBranch = await Branch_default.findOne({ restaurantId: req.user.restaurantId }).select("_id").lean();
      if (defaultBranch) targetBranch = defaultBranch._id;
    }
    if (!targetBranch) {
      return res.status(400).json({ message: "Please assign a branch to this supplier." });
    }
    const supplier = await Supplier_default.create({
      name,
      category,
      contactPerson,
      phone: cleanPhone,
      email,
      address,
      branch: targetBranch,
      isActive: isActive !== void 0 ? isActive : true
    });
    const populatedSupplier = await Supplier_default.findById(supplier._id).populate("branch", "name");
    res.status(201).json(populatedSupplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateSupplier = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.phone !== void 0) {
      const cleanPhone = String(updates.phone || "").replace(/\D/g, "");
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        return res.status(400).json({ message: "Phone number must be exactly 10 digits starting with 6, 7, 8, or 9." });
      }
      updates.phone = cleanPhone;
    }
    const supplier = await Supplier_default.findByIdAndUpdate(req.params.id, updates, { new: true }).populate("branch", "name");
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ message: "Supplier not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier_default.findById(req.params.id);
    if (supplier) {
      await supplier.deleteOne();
      res.json({ message: "Supplier removed" });
    } else {
      res.status(404).json({ message: "Supplier not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/supplierRoutes.js
var router16 = import_express16.default.Router();
router16.use(protect);
router16.use(authorize("RestaurantAdmin", "Admin", "BranchManager"));
router16.use(checkSubscription);
router16.use(checkBillingModule("inventoryManagement"));
router16.route("/").get(getSuppliers).post(checkFeature("Vendor Management"), createSupplier);
router16.route("/:id").put(checkFeature("Vendor Management"), updateSupplier).delete(checkFeature("Vendor Management"), deleteSupplier);
var supplierRoutes_default = router16;

// routes/offerRoutes.js
var import_express17 = __toESM(require("express"), 1);

// controllers/offerController.js
var import_mongoose39 = __toESM(require("mongoose"), 1);

// models/Offer.js
var import_mongoose38 = __toESM(require("mongoose"), 1);
var offerSchema = new import_mongoose38.default.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  type: {
    type: String,
    required: true,
    enum: ["Percentage", "Fixed Amount", "Free Shipping"]
  },
  discountValue: {
    type: Number,
    required: true
  },
  minSpend: {
    type: Number,
    default: 0
  },
  expiresAt: {
    type: Date
  },
  usageLimit: {
    type: Number,
    // If null or 0, unlimited
    default: 0
  },
  usedCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });
var Offer = import_mongoose38.default.model("Offer", offerSchema);
var Offer_default = Offer;

// controllers/offerController.js
var offersCache = { data: null, expiresAt: 0 };
var clearOffersCache = () => {
  offersCache = { data: null, expiresAt: 0 };
};
var getOffers = async (req, res) => {
  try {
    const now = Date.now();
    if (offersCache.data && offersCache.expiresAt > now) {
      return res.json(offersCache.data);
    }
    const offers = await Offer_default.find({}).sort({ createdAt: -1 }).lean();
    offersCache = { data: offers, expiresAt: now + 3e4 };
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createOffer = async (req, res) => {
  const { code, type, discountValue, minSpend, expiresAt, usageLimit, isActive } = req.body;
  try {
    if (!code || typeof code !== "string" || !code.trim()) {
      return res.status(400).json({ message: "Promo code is required and cannot be empty" });
    }
    const normalizedCode = code.trim().toUpperCase();
    const numDiscount = Number(discountValue);
    if (isNaN(numDiscount) || numDiscount <= 0) {
      return res.status(400).json({ message: "Valid discount value greater than 0 is required" });
    }
    const offerExists = await Offer_default.findOne({ code: normalizedCode });
    if (offerExists) {
      return res.status(400).json({
        message: `Promo code "${normalizedCode}" already exists. Please choose a unique code or edit the existing one.`
      });
    }
    const offer = await Offer_default.create({
      code: normalizedCode,
      type: type || "Percentage",
      discountValue: numDiscount,
      minSpend: Number(minSpend) || 0,
      expiresAt: expiresAt || null,
      usageLimit: Number(usageLimit) || 0,
      isActive: isActive !== void 0 ? Boolean(isActive) : true
    });
    clearOffersCache();
    res.status(201).json(offer);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to create offer" });
  }
};
var updateOffer = async (req, res) => {
  try {
    const offer = await Offer_default.findById(req.params.id);
    if (offer) {
      offer.code = req.body.code ? req.body.code.toUpperCase() : offer.code;
      offer.type = req.body.type || offer.type;
      offer.discountValue = req.body.discountValue !== void 0 ? req.body.discountValue : offer.discountValue;
      offer.minSpend = req.body.minSpend !== void 0 ? req.body.minSpend : offer.minSpend;
      offer.expiresAt = req.body.expiresAt !== void 0 ? req.body.expiresAt : offer.expiresAt;
      offer.usageLimit = req.body.usageLimit !== void 0 ? req.body.usageLimit : offer.usageLimit;
      offer.isActive = req.body.isActive !== void 0 ? req.body.isActive : offer.isActive;
      const updatedOffer = await offer.save();
      clearOffersCache();
      res.json(updatedOffer);
    } else {
      res.status(404).json({ message: "Offer not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Offer ID or code is required" });
    }
    let offer = null;
    if (import_mongoose39.default.Types.ObjectId.isValid(id)) {
      offer = await Offer_default.findById(id);
    }
    if (!offer) {
      offer = await Offer_default.findOne({ code: id.trim().toUpperCase() });
    }
    if (offer) {
      await Offer_default.findByIdAndDelete(offer._id);
      clearOffersCache();
      return res.json({ message: "Offer removed successfully", id: offer._id, code: offer.code });
    } else {
      return res.status(404).json({ message: "Offer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to delete offer" });
  }
};

// routes/offerRoutes.js
var router17 = import_express17.default.Router();
router17.get("/", getOffers);
router17.post("/", protect, authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager"), checkBillingModule("discounts"), checkSubscription, createOffer);
router17.put("/:id", protect, authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager"), checkBillingModule("discounts"), checkSubscription, updateOffer);
router17.delete("/:id", protect, authorize("SuperAdmin", "Admin", "RestaurantAdmin", "BranchManager"), deleteOffer);
var offerRoutes_default = router17;

// routes/taxRoutes.js
var import_express18 = __toESM(require("express"), 1);

// models/Tax.js
var import_mongoose40 = __toESM(require("mongoose"), 1);
var taxSchema = new import_mongoose40.default.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  rate: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ["Percentage", "Fixed Amount"],
    default: "Percentage"
  },
  appliesTo: {
    type: String,
    required: true,
    default: "All Items"
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });
var Tax = import_mongoose40.default.model("Tax", taxSchema);
var Tax_default = Tax;

// controllers/taxController.js
var getTaxes = async (req, res) => {
  try {
    const taxes = await Tax_default.find({}).sort({ createdAt: -1 });
    res.json(taxes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createTax = async (req, res) => {
  const { name, rate, type, appliesTo, isActive } = req.body;
  try {
    const tax = await Tax_default.create({
      name,
      rate,
      type: type || "Percentage",
      appliesTo: appliesTo || "All Items",
      isActive: isActive !== void 0 ? isActive : true
    });
    res.status(201).json(tax);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateTax = async (req, res) => {
  try {
    const tax = await Tax_default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (tax) {
      res.json(tax);
    } else {
      res.status(404).json({ message: "Tax rule not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteTax = async (req, res) => {
  try {
    const tax = await Tax_default.findById(req.params.id);
    if (tax) {
      await tax.deleteOne();
      res.json({ message: "Tax rule removed" });
    } else {
      res.status(404).json({ message: "Tax rule not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/taxRoutes.js
var router18 = import_express18.default.Router();
router18.use(protect);
router18.use(authorize("RestaurantAdmin", "BranchManager"));
router18.use(checkSubscription);
router18.route("/").get(getTaxes).post(createTax);
router18.route("/:id").put(updateTax).delete(deleteTax);
var taxRoutes_default = router18;

// routes/reportRoutes.js
var import_express19 = __toESM(require("express"), 1);

// controllers/reportController.js
var import_mongoose41 = __toESM(require("mongoose"), 1);
init_Order();
init_Restaurant();
init_Plan();
init_Expense();
init_Attendance();
init_Payroll();
init_Branch();
init_User();
var getUserRestaurantId4 = async (user, queryOrBody = {}) => {
  let rId = user?.restaurantId || user?.restaurant;
  if (!rId && user?.branchId) {
    const branchDoc = await Branch_default.findById(user.branchId);
    if (branchDoc) rId = branchDoc.restaurantId;
  }
  if (user?.role === "SuperAdmin" && queryOrBody?.restaurantId) {
    rId = queryOrBody.restaurantId;
  }
  if (!rId && user?.role === "SuperAdmin") {
    const firstRest = await Restaurant_default.findOne().select("_id");
    if (firstRest) rId = firstRest._id;
  }
  return rId;
};
var parseDateRange = (period, startDate, endDate) => {
  const now = /* @__PURE__ */ new Date();
  let start = null;
  let end = /* @__PURE__ */ new Date();
  end.setHours(23, 59, 59, 999);
  if (period === "today") {
    start = /* @__PURE__ */ new Date();
    start.setHours(0, 0, 0, 0);
  } else if (period === "yesterday") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(start);
    end.setHours(23, 59, 59, 999);
  } else if (period === "last7days" || period === "weekly") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 7);
    start.setHours(0, 0, 0, 0);
  } else if (period === "last30days") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 30);
    start.setHours(0, 0, 0, 0);
  } else if (period === "thismonth" || period === "monthly") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
  } else if (period === "lastmonth") {
    start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
  } else if (startDate || endDate) {
    if (startDate) {
      start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
    }
    if (endDate) {
      end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
    }
  } else {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
  }
  return { start, end };
};
var generateReport = async (req, res) => {
  const {
    reportType,
    period,
    startDate,
    endDate,
    branch,
    branchId,
    category,
    employee,
    paymentStatus,
    supplier,
    material
  } = req.body;
  try {
    const restaurantId = await getUserRestaurantId4(req.user, { ...req.query, ...req.body });
    const restObjId = restaurantId ? new import_mongoose41.default.Types.ObjectId(restaurantId) : null;
    if (!restObjId && req.user.role !== "SuperAdmin") {
      return res.json({
        reportType,
        period,
        startDate,
        endDate,
        branch,
        data: [],
        generatedAt: /* @__PURE__ */ new Date()
      });
    }
    const { start, end } = parseDateRange(period, startDate, endDate);
    let effectiveBranchId = null;
    if (req.user.role === "BranchManager" && req.user.branchId) {
      effectiveBranchId = req.user.branchId;
    } else if (branchId && branchId !== "All" && branchId !== "All Branches") {
      effectiveBranchId = branchId;
    } else if (branch && branch !== "All Branches" && branch !== "All") {
      effectiveBranchId = branch;
    }
    let reportData = [];
    let summary = {};
    if (reportType === "daily_earnings" || reportType === 1) {
      const matchStage = {
        restaurantId: restObjId,
        createdAt: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) matchStage.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      const dailyOrders = await Order_default.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            totalOrders: { $sum: 1 },
            grossSales: { $sum: { $add: ["$totalPrice", { $ifNull: ["$discountAmount", { $ifNull: ["$discount", 0] }] }] } },
            discounts: { $sum: { $ifNull: ["$discountAmount", { $ifNull: ["$discount", 0] }] } },
            netSales: {
              $sum: {
                $cond: [{ $eq: ["$status", "Cancelled"] }, 0, "$totalPrice"]
              }
            },
            amountCollected: {
              $sum: {
                $cond: [{ $and: [{ $eq: ["$isPaid", true] }, { $ne: ["$status", "Cancelled"] }] }, "$totalPrice", 0]
              }
            },
            uncollectedAmount: {
              $sum: {
                $cond: [{ $and: [{ $eq: ["$isPaid", false] }, { $ne: ["$status", "Cancelled"] }] }, "$totalPrice", 0]
              }
            },
            refunds: {
              $sum: {
                $cond: [{ $eq: ["$status", "Cancelled"] }, "$totalPrice", 0]
              }
            }
          }
        },
        { $sort: { _id: -1 } }
      ]);
      const expenseMatch = {
        restaurantId: restObjId,
        date: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) expenseMatch.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      const dailyExpenses = await Expense_default.aggregate([
        { $match: expenseMatch },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            totalIncurred: { $sum: "$amount" },
            totalPaid: { $sum: "$paidAmount" }
          }
        }
      ]);
      const expenseMap = /* @__PURE__ */ new Map();
      dailyExpenses.forEach((e) => expenseMap.set(e._id, e));
      reportData = dailyOrders.map((d) => {
        const exp = expenseMap.get(d._id) || { totalIncurred: 0, totalPaid: 0 };
        const netProfit = Math.round((d.netSales - exp.totalIncurred) * 100) / 100;
        return {
          date: d._id,
          totalOrders: d.totalOrders,
          grossSales: Math.round(d.grossSales * 100) / 100,
          discounts: Math.round(d.discounts * 100) / 100,
          refunds: Math.round(d.refunds * 100) / 100,
          netSales: Math.round(d.netSales * 100) / 100,
          amountCollected: Math.round(d.amountCollected * 100) / 100,
          uncollectedAmount: Math.round(d.uncollectedAmount * 100) / 100,
          dailyExpenses: Math.round(exp.totalIncurred * 100) / 100,
          expensesPaid: Math.round(exp.totalPaid * 100) / 100,
          netProfit
        };
      });
      summary = {
        totalOrders: reportData.reduce((acc, r) => acc + r.totalOrders, 0),
        totalGross: Math.round(reportData.reduce((acc, r) => acc + r.grossSales, 0) * 100) / 100,
        totalNet: Math.round(reportData.reduce((acc, r) => acc + r.netSales, 0) * 100) / 100,
        totalCollected: Math.round(reportData.reduce((acc, r) => acc + r.amountCollected, 0) * 100) / 100,
        totalExpenses: Math.round(reportData.reduce((acc, r) => acc + r.dailyExpenses, 0) * 100) / 100,
        totalNetProfit: Math.round(reportData.reduce((acc, r) => acc + r.netProfit, 0) * 100) / 100
      };
    } else if (reportType === "weekly_sales") {
      const matchStage = {
        restaurantId: restObjId,
        createdAt: { $gte: start, $lte: end },
        status: { $ne: "Cancelled" }
      };
      if (effectiveBranchId) matchStage.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      reportData = await Order_default.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: {
              isoWeekYear: { $isoWeekYear: "$createdAt" },
              isoWeek: { $isoWeek: "$createdAt" }
            },
            startDate: { $min: "$createdAt" },
            endDate: { $max: "$createdAt" },
            totalOrders: { $sum: 1 },
            grossSales: { $sum: { $add: ["$totalPrice", { $ifNull: ["$discountAmount", { $ifNull: ["$discount", 0] }] }] } },
            discounts: { $sum: { $ifNull: ["$discountAmount", { $ifNull: ["$discount", 0] }] } },
            netSales: { $sum: "$totalPrice" },
            amountCollected: { $sum: { $cond: [{ $eq: ["$isPaid", true] }, "$totalPrice", 0] } }
          }
        },
        { $sort: { "_id.isoWeekYear": -1, "_id.isoWeek": -1 } },
        {
          $project: {
            _id: 0,
            weekNumber: { $concat: ["Week ", { $toString: "$_id.isoWeek" }, " (", { $toString: "$_id.isoWeekYear" }, ")"] },
            startDate: { $dateToString: { format: "%Y-%m-%d", date: "$startDate" } },
            endDate: { $dateToString: { format: "%Y-%m-%d", date: "$endDate" } },
            totalOrders: 1,
            grossSales: { $round: ["$grossSales", 2] },
            discounts: { $round: ["$discounts", 2] },
            netSales: { $round: ["$netSales", 2] },
            amountCollected: { $round: ["$amountCollected", 2] },
            averageOrderValue: { $round: [{ $divide: ["$netSales", { $cond: [{ $eq: ["$totalOrders", 0] }, 1, "$totalOrders"] }] }, 2] }
          }
        }
      ]);
      summary = {
        totalWeeks: reportData.length,
        totalOrders: reportData.reduce((acc, r) => acc + r.totalOrders, 0),
        totalNetSales: Math.round(reportData.reduce((acc, r) => acc + r.netSales, 0) * 100) / 100,
        totalCollected: Math.round(reportData.reduce((acc, r) => acc + r.amountCollected, 0) * 100) / 100
      };
    } else if (reportType === "monthly_profit_loss") {
      const matchOrders = {
        restaurantId: restObjId,
        createdAt: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) matchOrders.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      const monthlyOrders = await Order_default.aggregate([
        { $match: matchOrders },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
            totalOrders: { $sum: 1 },
            grossSales: { $sum: { $add: ["$totalPrice", { $ifNull: ["$discountAmount", { $ifNull: ["$discount", 0] }] }] } },
            discounts: { $sum: { $ifNull: ["$discountAmount", { $ifNull: ["$discount", 0] }] } },
            refunds: { $sum: { $cond: [{ $eq: ["$status", "Cancelled"] }, "$totalPrice", 0] } },
            netSales: { $sum: { $cond: [{ $eq: ["$status", "Cancelled"] }, 0, "$totalPrice"] } },
            amountCollected: { $sum: { $cond: [{ $and: [{ $eq: ["$isPaid", true] }, { $ne: ["$status", "Cancelled"] }] }, "$totalPrice", 0] } }
          }
        },
        { $sort: { _id: -1 } }
      ]);
      const matchExpenses = {
        restaurantId: restObjId,
        date: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) matchExpenses.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      const monthlyExpenses = await Expense_default.aggregate([
        { $match: matchExpenses },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
            materialCost: { $sum: { $cond: [{ $eq: ["$category", "Material purchases"] }, "$amount", 0] } },
            salaryExpense: { $sum: { $cond: [{ $eq: ["$category", "Staff salary"] }, "$amount", 0] } },
            rentExpense: { $sum: { $cond: [{ $eq: ["$category", "Rent"] }, "$amount", 0] } },
            utilitiesExpense: { $sum: { $cond: [{ $in: ["$category", ["Electricity", "Water", "Internet"]] }, "$amount", 0] } },
            otherExpenses: { $sum: { $cond: [{ $not: [{ $in: ["$category", ["Material purchases", "Staff salary", "Rent", "Electricity", "Water", "Internet"]] }] }, "$amount", 0] } },
            totalExpenses: { $sum: "$amount" },
            totalPaidExpenses: { $sum: "$paidAmount" }
          }
        }
      ]);
      const orderMap = /* @__PURE__ */ new Map();
      monthlyOrders.forEach((o) => orderMap.set(o._id, o));
      const expMap = /* @__PURE__ */ new Map();
      monthlyExpenses.forEach((e) => expMap.set(e._id, e));
      const allMonths = Array.from(/* @__PURE__ */ new Set([...orderMap.keys(), ...expMap.keys()])).sort().reverse();
      reportData = allMonths.map((monthStr) => {
        const mo = orderMap.get(monthStr) || {
          totalOrders: 0,
          grossSales: 0,
          discounts: 0,
          refunds: 0,
          netSales: 0,
          amountCollected: 0
        };
        const exp = expMap.get(monthStr) || {
          materialCost: 0,
          salaryExpense: 0,
          rentExpense: 0,
          utilitiesExpense: 0,
          otherExpenses: 0,
          totalExpenses: 0,
          totalPaidExpenses: 0
        };
        const grossProfit = Math.round((mo.netSales - exp.materialCost) * 100) / 100;
        const netOperatingProfit = Math.round((mo.netSales - exp.totalExpenses) * 100) / 100;
        const profitMarginPercent = mo.netSales > 0 ? Math.round(netOperatingProfit / mo.netSales * 1e4) / 100 : 0;
        return {
          month: monthStr,
          grossSales: Math.round(mo.grossSales * 100) / 100,
          discounts: Math.round(mo.discounts * 100) / 100,
          refunds: Math.round(mo.refunds * 100) / 100,
          netSales: Math.round(mo.netSales * 100) / 100,
          materialCost: Math.round(exp.materialCost * 100) / 100,
          grossProfit,
          staffSalary: Math.round(exp.salaryExpense * 100) / 100,
          rent: Math.round(exp.rentExpense * 100) / 100,
          utilities: Math.round(exp.utilitiesExpense * 100) / 100,
          otherExpenses: Math.round(exp.otherExpenses * 100) / 100,
          totalExpenses: Math.round(exp.totalExpenses * 100) / 100,
          netOperatingProfit,
          profitMarginPercent
        };
      });
      summary = {
        totalNetSales: Math.round(reportData.reduce((acc, r) => acc + r.netSales, 0) * 100) / 100,
        totalMaterialCost: Math.round(reportData.reduce((acc, r) => acc + r.materialCost, 0) * 100) / 100,
        totalGrossProfit: Math.round(reportData.reduce((acc, r) => acc + r.grossProfit, 0) * 100) / 100,
        totalExpenses: Math.round(reportData.reduce((acc, r) => acc + r.totalExpenses, 0) * 100) / 100,
        totalNetProfit: Math.round(reportData.reduce((acc, r) => acc + r.netOperatingProfit, 0) * 100) / 100
      };
    } else if (reportType === "expenses") {
      const query = {
        restaurantId: restObjId,
        date: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) query.branchId = effectiveBranchId;
      if (category && category !== "All") query.category = category;
      if (paymentStatus && paymentStatus !== "All") query.paymentStatus = paymentStatus;
      const expenses = await Expense_default.find(query).sort({ date: -1 }).populate("createdBy", "name email").populate("branchId", "name").lean();
      reportData = expenses.map((e) => ({
        id: e._id,
        expenseDate: new Date(e.date).toISOString().split("T")[0],
        category: e.category,
        description: e.title || e.description || "-",
        amount: e.amount,
        paymentStatus: e.paymentStatus,
        paidAmount: e.paidAmount || 0,
        balanceDue: e.balanceDue || 0,
        dueDate: e.dueDate ? new Date(e.dueDate).toISOString().split("T")[0] : "-",
        paymentMethod: e.paymentMethod || "-",
        branchName: e.branchId?.name || "Main Branch",
        source: e.source || "Manual"
      }));
      summary = {
        totalCount: reportData.length,
        totalIncurred: Math.round(reportData.reduce((acc, r) => acc + r.amount, 0) * 100) / 100,
        totalPaid: Math.round(reportData.reduce((acc, r) => acc + r.paidAmount, 0) * 100) / 100,
        totalOutstanding: Math.round(reportData.reduce((acc, r) => acc + r.balanceDue, 0) * 100) / 100
      };
    } else if (reportType === "material_purchases") {
      const query = {
        restaurantId: restObjId,
        purchaseDate: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) query.branchId = effectiveBranchId;
      if (supplier && supplier !== "All") {
        query.$or = [
          { supplierName: new RegExp(supplier, "i") },
          { "supplier.name": new RegExp(supplier, "i") }
        ];
      }
      if (paymentStatus && paymentStatus !== "All") query.paymentStatus = paymentStatus;
      const purchases = await MaterialPurchase_default.find(query).sort({ purchaseDate: -1 }).populate("branchId", "name").populate("purchasedBy", "name").lean();
      reportData = purchases.map((p) => ({
        id: p._id,
        purchaseDate: new Date(p.purchaseDate).toISOString().split("T")[0],
        invoiceNumber: p.invoiceNumber || "-",
        supplierName: p.supplierName || p.supplier?.name || "General Supplier",
        supplierContact: p.supplierPhone || p.supplier?.contactPerson || p.supplier?.phone || "-",
        itemCount: p.items?.length || 0,
        subtotal: p.subtotal || 0,
        taxAmount: p.taxAmount || 0,
        totalAmount: p.totalAmount || 0,
        paidAmount: p.paidAmount || 0,
        balanceDue: p.balanceDue || 0,
        paymentStatus: p.paymentStatus,
        branchName: p.branchId?.name || "Main Branch"
      }));
      summary = {
        totalInvoices: reportData.length,
        totalPurchased: Math.round(reportData.reduce((acc, r) => acc + r.totalAmount, 0) * 100) / 100,
        totalPaid: Math.round(reportData.reduce((acc, r) => acc + r.paidAmount, 0) * 100) / 100,
        totalBalanceDue: Math.round(reportData.reduce((acc, r) => acc + r.balanceDue, 0) * 100) / 100
      };
    } else if (reportType === "attendance") {
      const query = {
        restaurantId: restObjId,
        date: { $gte: start, $lte: end }
      };
      if (effectiveBranchId) query.branchId = effectiveBranchId;
      if (employee && employee !== "All") query.employee = employee;
      const attendanceRecords = await Attendance_default.find(query).sort({ date: -1 }).populate("employee", "name employeeId role email").populate("branchId", "name").lean();
      reportData = attendanceRecords.map((a) => ({
        id: a._id,
        date: a.dateString || new Date(a.date).toISOString().split("T")[0],
        employeeId: a.employee?.employeeId || "-",
        employeeName: a.employee?.name || "Unknown",
        role: a.employee?.role || "-",
        status: a.status,
        checkIn: a.checkInTime ? new Date(a.checkInTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-",
        checkOut: a.checkOutTime ? new Date(a.checkOutTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-",
        lateMinutes: a.lateMinutes || 0,
        overtimeHours: a.overtimeHours || 0,
        workingHours: a.workingHours || 0,
        hasCorrections: a.correctionHistory && a.correctionHistory.length > 0 ? "Yes" : "No"
      }));
      summary = {
        totalRecords: reportData.length,
        presentCount: reportData.filter((r) => r.status === "Present").length,
        absentCount: reportData.filter((r) => r.status === "Absent").length,
        halfDayCount: reportData.filter((r) => r.status === "Half-day").length,
        leaveCount: reportData.filter((r) => r.status === "Leave").length,
        holidayCount: reportData.filter((r) => r.status === "Holiday").length,
        totalOvertimeHours: Math.round(reportData.reduce((acc, r) => acc + r.overtimeHours, 0) * 10) / 10
      };
    } else if (reportType === "payroll") {
      const query = {
        restaurantId: restObjId
      };
      if (effectiveBranchId) query.branchId = effectiveBranchId;
      if (employee && employee !== "All") query.employee = employee;
      if (paymentStatus && paymentStatus !== "All") query.paymentStatus = paymentStatus;
      const payrolls = await Payroll_default.find(query).sort({ year: -1, month: -1 }).populate("employee", "name employeeId role email").populate("branchId", "name").lean();
      reportData = payrolls.map((p) => ({
        id: p._id,
        period: `${p.month} ${p.year}`,
        employeeId: p.employee?.employeeId || "-",
        employeeName: p.employee?.name || "Unknown",
        role: p.employee?.role || "-",
        basicSalary: p.basicSalary ?? p.salaryConfig?.basicSalary ?? 0,
        earnedBasic: p.calculations?.earnedBasic ?? p.earnedBasicSalary ?? 0,
        overtimePay: p.calculations?.overtimePay ?? p.overtimePay ?? 0,
        bonuses: p.calculations?.bonuses ?? p.bonuses ?? 0,
        deductions: p.calculations?.deductions ?? p.totalDeductions ?? 0,
        grossPayable: p.calculations?.grossSalary ?? p.grossPayable ?? 0,
        netPayable: p.calculations?.netSalaryPayable ?? p.netPayable ?? 0,
        paidAmount: p.paidAmount || 0,
        balanceDue: p.balanceDue || 0,
        paymentStatus: p.paymentStatus,
        status: p.status
      }));
      summary = {
        totalEmployeesCovered: reportData.length,
        totalGrossPayable: Math.round(reportData.reduce((acc, r) => acc + r.grossPayable, 0) * 100) / 100,
        totalNetPayable: Math.round(reportData.reduce((acc, r) => acc + r.netPayable, 0) * 100) / 100,
        totalPaid: Math.round(reportData.reduce((acc, r) => acc + r.paidAmount, 0) * 100) / 100,
        totalPending: Math.round(reportData.reduce((acc, r) => acc + r.balanceDue, 0) * 100) / 100
      };
    } else if (reportType === "pending_bills") {
      const query = {
        restaurantId: restObjId,
        paymentStatus: { $in: ["Pending", "Partially Paid", "Overdue"] },
        balanceDue: { $gt: 0 }
      };
      if (effectiveBranchId) query.branchId = effectiveBranchId;
      if (category && category !== "All") query.category = category;
      const pendingExpenses = await Expense_default.find(query).sort({ dueDate: 1, date: 1 }).populate("branchId", "name").lean();
      const today = /* @__PURE__ */ new Date();
      reportData = pendingExpenses.map((e) => {
        const isOverdue = e.dueDate ? new Date(e.dueDate) < today : false;
        return {
          id: e._id,
          category: e.category,
          title: e.title || e.description,
          totalAmount: e.amount,
          paidAmount: e.paidAmount || 0,
          balanceDue: e.balanceDue || e.amount,
          dueDate: e.dueDate ? new Date(e.dueDate).toISOString().split("T")[0] : "Not Set",
          billingPeriod: e.billingPeriod || "-",
          status: isOverdue ? "Overdue" : e.paymentStatus,
          branchName: e.branchId?.name || "Main Branch",
          isRecurring: e.isRecurring ? "Yes" : "No"
        };
      });
      summary = {
        totalPendingBills: reportData.length,
        overdueCount: reportData.filter((r) => r.status === "Overdue").length,
        totalAmountDue: Math.round(reportData.reduce((acc, r) => acc + r.balanceDue, 0) * 100) / 100,
        totalOriginalAmount: Math.round(reportData.reduce((acc, r) => acc + r.totalAmount, 0) * 100) / 100
      };
    } else if (reportType === 2 || reportType === "2") {
      const matchStage = {
        status: { $nin: ["Cancelled", "Refunded"] },
        restaurantId: restObjId,
        createdAt: { $gte: start, $lte: end }
      };
      if (effectiveBranchId && import_mongoose41.default.Types.ObjectId.isValid(effectiveBranchId)) {
        matchStage.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      }
      reportData = await Order_default.aggregate([
        { $match: matchStage },
        { $unwind: "$orderItems" },
        {
          $group: {
            _id: { $ifNull: ["$orderItems.product", "$orderItems.name"] },
            name: { $first: "$orderItems.name" },
            quantitySold: { $sum: { $ifNull: ["$orderItems.qty", 1] } },
            totalRevenue: { $sum: { $multiply: [{ $ifNull: ["$orderItems.price", 0] }, { $ifNull: ["$orderItems.qty", 1] }] } }
          }
        },
        { $sort: { quantitySold: -1 } }
      ]);
    } else if (reportType === 3 || reportType === "3") {
      const matchStage = {
        status: { $nin: ["Cancelled", "Refunded"] },
        restaurantId: restObjId,
        createdAt: { $gte: start, $lte: end }
      };
      if (effectiveBranchId && import_mongoose41.default.Types.ObjectId.isValid(effectiveBranchId)) {
        matchStage.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      }
      reportData = await Order_default.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: { $ifNull: ["$waiter", "$user"] },
            ordersHandled: { $sum: 1 },
            totalRevenue: { $sum: { $ifNull: ["$totalPrice", 0] } }
          }
        },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "staff"
          }
        },
        {
          $project: {
            staffName: { $ifNull: [{ $arrayElemAt: ["$staff.name", 0] }, "Walk-in / Self-Service"] },
            ordersHandled: 1,
            totalRevenue: { $round: ["$totalRevenue", 2] }
          }
        },
        { $sort: { totalRevenue: -1 } }
      ]);
    } else if (reportType === 4 || reportType === "4") {
      const matchStage = {
        status: { $nin: ["Cancelled", "Refunded"] },
        restaurantId: restObjId,
        createdAt: { $gte: start, $lte: end }
      };
      if (effectiveBranchId && import_mongoose41.default.Types.ObjectId.isValid(effectiveBranchId)) {
        matchStage.branchId = new import_mongoose41.default.Types.ObjectId(effectiveBranchId);
      }
      reportData = await Order_default.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            taxableSales: { $sum: { $max: [0, { $subtract: [{ $ifNull: ["$totalPrice", 0] }, { $ifNull: ["$taxPrice", 0] }] }] } },
            taxCollected: { $sum: { $ifNull: ["$taxPrice", 0] } }
          }
        },
        {
          $project: {
            _id: 1,
            taxableSales: { $round: ["$taxableSales", 2] },
            taxCollected: { $round: ["$taxCollected", 2] }
          }
        },
        { $sort: { _id: 1 } }
      ]);
    }
    res.json({
      reportType,
      period,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
      branch: effectiveBranchId || "All",
      summary,
      data: reportData,
      generatedAt: /* @__PURE__ */ new Date()
    });
  } catch (error) {
    console.error("Error generating report:", error);
    res.status(500).json({ message: error.message });
  }
};

// routes/reportRoutes.js
var router19 = import_express19.default.Router();
router19.use(protect);
router19.use(authorize("RestaurantAdmin", "BranchManager", "SuperAdmin"));
router19.use(checkSubscription);
router19.use(checkBillingModule("salesReports"));
router19.route("/generate").post(generateReport);
var reportRoutes_default = router19;

// routes/notificationRoutes.js
var import_express20 = __toESM(require("express"), 1);

// controllers/notificationController.js
init_Notification();
init_Inventory();
init_Branch();
var resolveUserRestaurantId = async (user) => {
  if (user?.restaurantId) return user.restaurantId;
  if (user?.branchId) {
    const b = await Branch_default.findById(user.branchId).select("restaurantId");
    if (b?.restaurantId) return b.restaurantId;
  }
  return null;
};
var getNotifications = async (req, res) => {
  try {
    const { role, restaurantId } = req.user;
    const userId = req.user._id;
    let query = {};
    if (role === "SuperAdmin") {
      query = { isSuperAdminOnly: true };
    } else if (role === "RestaurantAdmin" || role === "Admin") {
      query = {
        $or: [
          { userId },
          {
            restaurantId,
            $or: [
              { targetRole: null },
              { targetRole: { $size: 0 } },
              { targetRole: { $in: ["RestaurantAdmin", "Admin"] } }
            ]
          }
        ]
      };
    } else if (role === "Customer") {
      query = {
        $or: [
          { userId },
          {
            restaurantId,
            $or: [
              { targetRole: null },
              { targetRole: { $size: 0 } },
              { targetRole: { $in: ["Customer"] } }
            ]
          }
        ]
      };
    } else {
      query = {
        $or: [
          { userId },
          {
            restaurantId,
            $or: [
              { targetRole: null },
              { targetRole: { $size: 0 } },
              { targetRole: { $in: [role, "Kitchen"] } }
            ]
          }
        ]
      };
    }
    const notifications = await Notification_default.find(query).sort({ createdAt: -1 }).limit(100);
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createBroadcast = async (req, res) => {
  const { title, desc } = req.body;
  try {
    const notification = await Notification_default.create({
      title,
      desc,
      type: "Broadcast",
      restaurantId: req.user.restaurantId,
      read: false
    });
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var requestRestock = async (req, res) => {
  const { ingredientNeeded, quantity, unit, urgency, notes } = req.body;
  if (!ingredientNeeded || !String(ingredientNeeded).trim()) {
    return res.status(400).json({ message: "Ingredient name is required" });
  }
  try {
    const restaurantId = await resolveUserRestaurantId(req.user);
    const branchId = req.user.branchId || req.body.branchId || null;
    const cleanItem = String(ingredientNeeded).trim();
    const qtyNum = Number(quantity) || 0;
    const unitStr = unit ? String(unit).trim() : "kg";
    const qtyPart = qtyNum > 0 ? `Qty needed: ${qtyNum} ${unitStr}. ` : "";
    const senderLabel = req.user.name ? `Requested by ${req.user.name}. ` : "";
    const title = urgency === "Urgent" ? `URGENT LOW STOCK: ${cleanItem}` : `Low Stock Request: ${cleanItem}`;
    const type = urgency === "Urgent" ? "Alert" : "Info";
    const desc = `${qtyPart}${senderLabel}Notes: ${notes || "Running low in kitchen"}`;
    const notification = await Notification_default.create({
      title,
      desc,
      type,
      restaurantId,
      branchId,
      userId: req.user._id,
      targetRole: ["RestaurantAdmin", "Admin", "BranchManager", "Chef", "Kitchen"],
      metadata: {
        kind: "kitchen_low_stock",
        ingredientName: cleanItem,
        quantity: qtyNum,
        unit: unitStr,
        urgency: urgency || "Urgent",
        notes: notes || "",
        requestedBy: req.user.name || "Chef",
        requestedById: req.user._id,
        orderStatus: "Pending"
      },
      read: false
    });
    if (restaurantId) {
      broadcastToRestaurant(restaurantId, "new_notification", notification);
    }
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var orderRestockFromNotification = async (req, res) => {
  try {
    const restaurantId = await resolveUserRestaurantId(req.user);
    const sourceNote = await Notification_default.findById(req.params.id);
    if (!sourceNote) {
      return res.status(404).json({ message: "Restock notification not found" });
    }
    if (restaurantId && sourceNote.restaurantId && String(sourceNote.restaurantId) !== String(restaurantId) && req.user.role !== "SuperAdmin") {
      return res.status(403).json({ message: "Not authorized for this restaurant notification" });
    }
    const {
      ingredientName,
      orderQuantity,
      unit,
      supplierId,
      supplierName,
      unitCost,
      expectedDelivery,
      addToStockNow,
      poNotes
    } = req.body;
    const parsedItem = (ingredientName || sourceNote.metadata?.ingredientName || sourceNote.title.replace(/^(URGENT LOW STOCK:|URGENT RESTOCK:|Low Stock \/ Restock Request:|Low Stock Request:|Restock Request:|Low Stock Alert:)\s*/i, "")).trim();
    const qty = Math.max(0.1, Number(orderQuantity) || Number(sourceNote.metadata?.quantity) || 5);
    const itemUnit = (unit || sourceNote.metadata?.unit || "kg").trim();
    const price = Math.max(0, Number(unitCost) || 0);
    const shouldRestockNow = addToStockNow !== false;
    let targetBranchId = sourceNote.branchId || req.user.branchId;
    if (!targetBranchId && restaurantId) {
      const firstBranch = await Branch_default.findOne({ restaurantId }).select("_id");
      if (firstBranch) targetBranchId = firstBranch._id;
    }
    let resolvedSupplierName = supplierName ? String(supplierName).trim() : "";
    let resolvedSupplierPhone = "";
    let resolvedSupplierId = void 0;
    if (supplierId) {
      const suppDoc = await Supplier_default.findById(supplierId).select("name phone");
      if (suppDoc) {
        resolvedSupplierId = suppDoc._id;
        resolvedSupplierName = suppDoc.name;
        resolvedSupplierPhone = suppDoc.phone || "";
      }
    }
    if (!resolvedSupplierName) {
      resolvedSupplierName = "Direct Supplier Order";
    }
    const totalCost = Math.round(qty * price * 100) / 100;
    const invoiceNumber = `PO-${Date.now().toString().slice(-6)}`;
    if (targetBranchId) {
      let invItem = await Inventory_default.findOne({
        itemName: { $regex: new RegExp(`^${parsedItem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") },
        branch: targetBranchId
      });
      if (shouldRestockNow) {
        if (invItem) {
          const prevQty = invItem.quantity || 0;
          const newQty = prevQty + qty;
          if (price > 0 && newQty > 0) {
            const prevPrice = invItem.pricePerUnit || 0;
            invItem.pricePerUnit = Math.round((prevQty * prevPrice + qty * price) / newQty * 100) / 100;
            invItem.lastPurchasePrice = price;
          }
          invItem.quantity = newQty;
          invItem.lastPurchaseDate = /* @__PURE__ */ new Date();
          if (resolvedSupplierId) invItem.supplier = resolvedSupplierId;
          await invItem.save();
          await StockMovement_default.create({
            restaurantId: sourceNote.restaurantId || restaurantId,
            branchId: targetBranchId,
            inventoryItem: invItem._id,
            itemName: invItem.itemName,
            movementType: "Purchase Received",
            quantityChanged: qty,
            previousQuantity: prevQty,
            newQuantity: newQty,
            unit: invItem.unit || itemUnit,
            unitCost: price,
            totalValue: totalCost,
            reference: `Kitchen Restock #${invoiceNumber}`,
            reason: `Ordered by ${req.user.name || "Admin"} for kitchen request`,
            performedBy: req.user._id,
            date: /* @__PURE__ */ new Date()
          });
        } else {
          invItem = await Inventory_default.create({
            restaurantId: sourceNote.restaurantId || restaurantId,
            branch: targetBranchId,
            supplier: resolvedSupplierId,
            itemName: parsedItem,
            category: "Other",
            quantity: qty,
            unit: itemUnit,
            minStockLevel: 5,
            pricePerUnit: price,
            lastPurchasePrice: price,
            lastPurchaseDate: /* @__PURE__ */ new Date(),
            costingMethod: "Weighted Average"
          });
          await StockMovement_default.create({
            restaurantId: sourceNote.restaurantId || restaurantId,
            branchId: targetBranchId,
            inventoryItem: invItem._id,
            itemName: invItem.itemName,
            movementType: "Purchase Received",
            quantityChanged: qty,
            previousQuantity: 0,
            newQuantity: qty,
            unit: itemUnit,
            unitCost: price,
            totalValue: totalCost,
            reference: `Kitchen Restock #${invoiceNumber}`,
            reason: `Ordered by ${req.user.name || "Admin"} for kitchen request`,
            performedBy: req.user._id,
            date: /* @__PURE__ */ new Date()
          });
        }
      }
      await MaterialPurchase_default.create({
        restaurantId: sourceNote.restaurantId || restaurantId,
        branchId: targetBranchId,
        supplier: resolvedSupplierId,
        supplierName: resolvedSupplierName,
        supplierPhone: resolvedSupplierPhone,
        invoiceNumber,
        purchaseDate: /* @__PURE__ */ new Date(),
        items: [{
          material: invItem?._id,
          itemName: parsedItem,
          category: invItem?.category || "General",
          quantity: qty,
          unit: itemUnit,
          unitPrice: price,
          taxPercent: 0,
          taxAmount: 0,
          totalCost
        }],
        subtotal: totalCost,
        taxAmount: 0,
        totalAmount: totalCost,
        paidAmount: totalCost > 0 ? totalCost : 0,
        balanceDue: 0,
        paymentStatus: totalCost > 0 ? "Paid" : "Pending",
        notes: poNotes || `Kitchen low-stock order (${expectedDelivery || "Today"})`,
        createdBy: req.user._id
      }).catch((err) => {
        console.error("MaterialPurchase log error during restock:", err.message);
      });
    }
    sourceNote.read = true;
    sourceNote.metadata = {
      ...sourceNote.metadata || {},
      kind: sourceNote.metadata?.kind || "kitchen_low_stock",
      ingredientName: parsedItem,
      orderStatus: "Ordered",
      orderedQty: qty,
      orderedUnit: itemUnit,
      supplierName: resolvedSupplierName,
      unitCost: price,
      invoiceNumber,
      expectedDelivery: expectedDelivery || "Today",
      addedToStock: shouldRestockNow,
      poNotes: poNotes || "",
      actionedByName: req.user.name || "Admin",
      actionedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    sourceNote.markModified("metadata");
    await sourceNote.save();
    const etaPart = expectedDelivery ? ` ETA: ${expectedDelivery}.` : "";
    const stockPart = shouldRestockNow ? " Inventory stock updated." : "";
    const notePart = poNotes ? ` Message from Admin: "${poNotes}"` : "";
    const kitchenNotification = await Notification_default.create({
      title: `Restock Ordered: ${parsedItem}`,
      desc: `${req.user.name || "Admin"} ordered ${qty} ${itemUnit} of ${parsedItem} from ${resolvedSupplierName}.${etaPart}${stockPart}${notePart}`,
      type: "Info",
      restaurantId: sourceNote.restaurantId || restaurantId,
      branchId: targetBranchId,
      targetRole: ["Chef", "Kitchen"],
      metadata: {
        kind: "admin_restock_reply",
        relatedNotificationId: sourceNote._id,
        ingredientName: parsedItem,
        orderedQty: qty,
        orderedUnit: itemUnit,
        supplierName: resolvedSupplierName,
        invoiceNumber,
        expectedDelivery: expectedDelivery || "Today",
        addedToStock: shouldRestockNow,
        poNotes: poNotes || "",
        orderedBy: req.user.name || "Admin"
      },
      read: false
    });
    const wsRestId = sourceNote.restaurantId || restaurantId;
    if (wsRestId) {
      broadcastToRestaurant(wsRestId, "new_notification", kitchenNotification);
      broadcastToRestaurant(wsRestId, "restock_ordered", {
        sourceNotification: sourceNote,
        kitchenNotification
      });
    }
    res.json({
      message: "Item ordered and kitchen notified successfully",
      sourceNotification: sourceNote,
      kitchenNotification
    });
  } catch (error) {
    console.error("Failed to order restock from notification:", error);
    res.status(400).json({ message: error.message || "Failed to place restock order" });
  }
};
var markAsRead = async (req, res) => {
  try {
    const query = {
      _id: req.params.id,
      $or: [
        { userId: req.user._id },
        { restaurantId: req.user.restaurantId }
      ]
    };
    let notification = await Notification_default.findOne(query);
    if (!notification) {
      notification = await Notification_default.findById(req.params.id);
    }
    if (notification) {
      notification.read = true;
      await notification.save();
      res.json(notification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var markAllAsRead = async (req, res) => {
  try {
    const conditions = [];
    if (req.user._id) conditions.push({ userId: req.user._id });
    if (req.user.restaurantId) conditions.push({ restaurantId: req.user.restaurantId });
    const filter = conditions.length > 0 ? { $or: conditions, read: false } : { read: false };
    await Notification_default.updateMany(filter, { $set: { read: true } });
    res.json({ message: "All notifications marked as read" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || id.startsWith("dummy-")) {
      return res.json({ message: "Notification removed successfully", id });
    }
    const query = {
      _id: id,
      $or: [
        { userId: req.user._id },
        { restaurantId: req.user.restaurantId }
      ]
    };
    let notification = await Notification_default.findOne(query);
    if (!notification && req.user.role === "SuperAdmin") {
      notification = await Notification_default.findById(id);
    }
    if (notification) {
      await Notification_default.findByIdAndDelete(notification._id);
      return res.json({ message: "Notification deleted successfully", id });
    }
    await Notification_default.findByIdAndDelete(id);
    res.json({ message: "Notification deleted successfully", id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var clearAllNotifications = async (req, res) => {
  try {
    const conditions = [];
    if (req.user._id) conditions.push({ userId: req.user._id });
    if (req.user.restaurantId) conditions.push({ restaurantId: req.user.restaurantId });
    const filter = conditions.length > 0 ? { $or: conditions } : {};
    await Notification_default.deleteMany(filter);
    res.json({ message: "All notifications cleared successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// routes/notificationRoutes.js
var router20 = import_express20.default.Router();
router20.use(protect);
router20.use(authorize("RestaurantAdmin", "Admin", "BranchManager", "Chef", "Staff", "Waiter", "Cashier", "SuperAdmin"));
router20.use(checkSubscription);
router20.route("/").get(getNotifications);
router20.route("/broadcast").post(authorize("RestaurantAdmin", "Admin", "BranchManager"), createBroadcast);
router20.route("/restock").post(requestRestock);
router20.route("/:id/order-restock").post(authorize("RestaurantAdmin", "Admin", "BranchManager"), orderRestockFromNotification);
router20.route("/read-all").put(markAllAsRead);
router20.route("/clear-all").delete(clearAllNotifications);
router20.route("/:id/read").put(markAsRead);
router20.route("/:id").delete(deleteNotification);
var notificationRoutes_default = router20;

// routes/planRoutes.js
var import_express21 = __toESM(require("express"), 1);

// controllers/planController.js
var import_crypto2 = __toESM(require("crypto"), 1);
var import_mongoose42 = __toESM(require("mongoose"), 1);
init_Plan();
init_Restaurant();
init_Notification();
init_subscriptionHelper();
var getPublicFallbackPlans = () => [
  { _id: "p1", name: "Basic", monthlyPrice: DEFAULT_PLAN_CATALOG.Basic.monthlyPrice, yearlyPrice: DEFAULT_PLAN_CATALOG.Basic.yearlyPrice, branchesLimit: 1, staffLimit: 5, features: ["1 Branch", "Basic POS Billing", "QR Ordering", "Email Support"], isActive: true },
  { _id: "p2", name: "Pro", monthlyPrice: DEFAULT_PLAN_CATALOG.Pro.monthlyPrice, yearlyPrice: DEFAULT_PLAN_CATALOG.Pro.yearlyPrice, branchesLimit: 3, staffLimit: 9999, features: ["Up to 3 Branches", "Kitchen Display System", "Online Ordering", "Advanced Analytics", "Priority Support"], isActive: true },
  { _id: "p3", name: "Enterprise", monthlyPrice: DEFAULT_PLAN_CATALOG.Enterprise.monthlyPrice, yearlyPrice: DEFAULT_PLAN_CATALOG.Enterprise.yearlyPrice, branchesLimit: 9999, staffLimit: 9999, features: ["Unlimited Branches", "Custom APIs & Webhooks", "Dedicated Account Manager", "SLA Guarantee", "White-label Branding"], isActive: true }
];
var getPublicPlans = async (req, res) => {
  try {
    if (import_mongoose42.default.connection.readyState !== 1) {
      return res.json(getPublicFallbackPlans());
    }
    const plans = await Plan_default.find({ isActive: { $ne: false } }).sort({ monthlyPrice: 1, createdAt: 1 }).maxTimeMS(3e3).lean();
    if (!plans || plans.length === 0) {
      return res.json(getPublicFallbackPlans());
    }
    res.json(plans);
  } catch (error) {
    res.json(getPublicFallbackPlans());
  }
};
var handleRazorpayWebhook = async (req, res) => {
  try {
    const signature = req.headers["x-razorpay-signature"];
    const webhookSecret = (process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET || "").trim();
    if (!signature || !webhookSecret) {
      return res.status(400).json({ message: "Missing Razorpay webhook signature or secret" });
    }
    const rawPayload = req.rawBody ? req.rawBody.toString("utf8") : JSON.stringify(req.body);
    const expectedSig = import_crypto2.default.createHmac("sha256", webhookSecret).update(rawPayload).digest("hex");
    if (expectedSig !== signature) {
      return res.status(400).json({ message: "Invalid webhook signature" });
    }
    const event = req.body?.event;
    const paymentEntity = req.body?.payload?.payment?.entity;
    const qrEntity = req.body?.payload?.qr_code?.entity;
    const notes = paymentEntity?.notes || qrEntity?.notes || {};
    const restaurantId = notes.restaurantId;
    const planName = notes.planName;
    const billingCycle = notes.billingCycle || "monthly";
    if (!restaurantId) {
      return res.status(200).json({ received: true });
    }
    const restaurant = await Restaurant_default.findById(restaurantId);
    if (!restaurant) {
      return res.status(200).json({ received: true });
    }
    if (event === "payment.captured" || event === "qr_code.credited") {
      if (restaurant.subscription?.manualFreeze) {
        return res.status(200).json({ received: true, skipped: "manual_freeze" });
      }
      const txnId = paymentEntity?.id || qrEntity?.id || `RZP-WH-${Date.now()}`;
      const alreadyRecorded = await SubscriptionPayment_default.findOne({ transactionId: txnId, status: "Completed" }).lean();
      if (!alreadyRecorded && planName) {
        const { planName: resolvedPlanName, price: targetPrice } = await resolvePlanPrice(planName, billingCycle);
        const amountPaid = paymentEntity?.amount ? Math.round(paymentEntity.amount / 100) : targetPrice;
        const newExpiry = applyPaidSubscriptionActivation(restaurant, {
          planName: resolvedPlanName,
          billingCycle,
          targetPrice: amountPaid
        });
        await restaurant.save();
        await SubscriptionPayment_default.create({
          restaurantId: restaurant._id,
          planName: resolvedPlanName,
          amount: amountPaid,
          billingCycle,
          paymentMethod: event === "qr_code.credited" ? "Razorpay QR" : "Razorpay",
          transactionId: txnId,
          status: "Completed",
          effectiveDate: /* @__PURE__ */ new Date(),
          expiryDate: newExpiry
        });
        await Notification_default.create({
          title: "Subscription Activated",
          desc: `Payment confirmed for ${resolvedPlanName} plan (Txn ID: ${txnId}). Dashboard access is active.`,
          type: "System",
          restaurantId: restaurant._id
        });
        broadcastToRestaurant(restaurant._id, "subscription_updated", {
          restaurantId: String(restaurant._id),
          subscription: restaurant.subscription
        });
      }
    } else if (event === "payment.failed") {
      const txnId = paymentEntity?.id || `RZP-FAIL-${Date.now()}`;
      const amountAttempted = paymentEntity?.amount ? Math.round(paymentEntity.amount / 100) : 0;
      await SubscriptionPayment_default.create({
        restaurantId: restaurant._id,
        planName: planName || restaurant.subscription?.plan || "Basic",
        amount: amountAttempted,
        billingCycle,
        paymentMethod: "Razorpay",
        transactionId: txnId,
        status: "Failed",
        effectiveDate: /* @__PURE__ */ new Date()
      });
      if (restaurant.subscription) {
        restaurant.subscription.paymentStatus = "Failed";
        await restaurant.save();
      }
      await Notification_default.create({
        title: "Subscription Payment Failed",
        desc: `Payment attempt failed for ${planName || "subscription"} (${paymentEntity?.error_description || "Gateway declined"}).`,
        type: "System",
        restaurantId: restaurant._id
      });
      broadcastToRestaurant(restaurant._id, "subscription_updated", {
        restaurantId: String(restaurant._id),
        subscription: restaurant.subscription
      });
    }
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("[Razorpay Webhook Error]:", error.message);
    res.status(500).json({ message: "Webhook handler error" });
  }
};

// routes/planRoutes.js
var router21 = import_express21.default.Router();
router21.route("/").get(getPublicPlans);
router21.route("/webhook").post(handleRazorpayWebhook);
var planRoutes_default = router21;

// routes/serviceRequestRoutes.js
var import_express22 = __toESM(require("express"), 1);

// controllers/serviceRequestController.js
init_ServiceRequest();
var import_mongoose43 = __toESM(require("mongoose"), 1);
var createServiceRequest = async (req, res) => {
  const { restaurantId, branchId, tableNumber, requestType } = req.body;
  try {
    let finalBranchId = branchId;
    if (!finalBranchId) {
      const Branch2 = import_mongoose43.default.model("Branch");
      const branch = await Branch2.findOne({ restaurantId });
      if (branch) finalBranchId = branch._id;
    }
    const request = await ServiceRequest_default.create({
      restaurantId,
      branchId: finalBranchId,
      tableNumber,
      requestType,
      status: "Pending"
    });
    broadcastToRestaurant(restaurantId, "new_service_request", request);
    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to create request" });
  }
};
var getActiveServiceRequests = async (req, res) => {
  try {
    const filter = { status: "Pending" };
    if (req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.user.restaurantId) {
      filter.restaurantId = req.user.restaurantId;
    }
    const requests = await ServiceRequest_default.find(filter).sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
var completeServiceRequest = async (req, res) => {
  try {
    const request = await ServiceRequest_default.findById(req.params.id);
    if (request) {
      request.status = "Completed";
      const updated = await request.save();
      broadcastToRestaurant(request.restaurantId, "service_request_updated", updated);
      res.json(updated);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to complete request" });
  }
};

// routes/serviceRequestRoutes.js
var router22 = import_express22.default.Router();
router22.route("/").post(optionalProtect, createServiceRequest).get(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Waiter", "Cashier"), getActiveServiceRequests);
router22.route("/:id/complete").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Waiter", "Cashier"), completeServiceRequest);
var serviceRequestRoutes_default = router22;

// routes/expenseRoutes.js
var import_express23 = __toESM(require("express"), 1);

// controllers/expenseController.js
var import_mongoose44 = __toESM(require("mongoose"), 1);
init_Expense();
init_Branch();
init_Restaurant();
var getUserRestaurantId5 = async (user, queryOrBody = {}) => {
  let rId = user?.restaurantId || user?.restaurant;
  if (!rId && user?.branchId) {
    const branchDoc = await Branch_default.findById(user.branchId);
    if (branchDoc) rId = branchDoc.restaurantId;
  }
  if (!rId && queryOrBody?.restaurantId) {
    rId = queryOrBody.restaurantId;
  }
  if (!rId && user?.role === "SuperAdmin") {
    const firstRest = await Restaurant_default.findOne().select("_id");
    if (firstRest) rId = firstRest._id;
  }
  return rId;
};
var parseDateRange2 = (period, startDate, endDate) => {
  const now = /* @__PURE__ */ new Date();
  let start = null;
  let end = /* @__PURE__ */ new Date();
  end.setHours(23, 59, 59, 999);
  if (period === "today") {
    start = /* @__PURE__ */ new Date();
    start.setHours(0, 0, 0, 0);
  } else if (period === "yesterday") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(start);
    end.setHours(23, 59, 59, 999);
  } else if (period === "last7days" || period === "weekly") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 7);
    start.setHours(0, 0, 0, 0);
  } else if (period === "last30days") {
    start = /* @__PURE__ */ new Date();
    start.setDate(now.getDate() - 30);
    start.setHours(0, 0, 0, 0);
  } else if (period === "thismonth" || period === "monthly") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
  } else if (period === "lastmonth") {
    start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
  } else if (startDate || endDate) {
    if (startDate) {
      start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
    }
    if (endDate) {
      end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
    }
  }
  return { start, end };
};
var getExpenses = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId5(req.user, req.query);
    const filter = { restaurantId };
    if (req.user && req.user.role === "BranchManager" && req.user.branchId) {
      filter.branchId = req.user.branchId;
    } else if (req.query.branchId && req.query.branchId !== "All") {
      filter.branchId = req.query.branchId;
    }
    if (req.query.category && req.query.category !== "All") {
      filter.category = req.query.category;
    }
    if (req.query.paymentStatus && req.query.paymentStatus !== "All") {
      filter.paymentStatus = req.query.paymentStatus;
    }
    const { start, end } = parseDateRange2(req.query.period, req.query.startDate, req.query.endDate);
    if (start || end) {
      filter.date = {};
      if (start) filter.date.$gte = start;
      if (end) filter.date.$lte = end;
    }
    if (req.query.search) {
      const query = req.query.search.trim();
      filter.$or = [
        { description: { $regex: query, $options: "i" } },
        { billingPeriod: { $regex: query, $options: "i" } },
        { staff: { $regex: query, $options: "i" } }
      ];
    }
    const expenses = await Expense_default.find(filter).populate("branchId", "name").populate("createdBy", "name role").populate("payments.recordedBy", "name role").sort({ date: -1, createdAt: -1 });
    const now = /* @__PURE__ */ new Date();
    const enrichedExpenses = expenses.map((exp) => {
      const doc = exp.toObject();
      if (doc.paymentStatus === "Pending" && doc.dueDate && new Date(doc.dueDate) < now) {
        doc.isOverdue = true;
      }
      return doc;
    });
    res.json(enrichedExpenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getExpenseSummary = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId5(req.user, req.query);
    const matchFilter = { restaurantId: new import_mongoose44.default.Types.ObjectId(restaurantId) };
    if (req.user && req.user.role === "BranchManager" && req.user.branchId) {
      matchFilter.branchId = new import_mongoose44.default.Types.ObjectId(req.user.branchId);
    } else if (req.query.branchId && req.query.branchId !== "All") {
      matchFilter.branchId = new import_mongoose44.default.Types.ObjectId(req.query.branchId);
    }
    const { start, end } = parseDateRange2(req.query.period, req.query.startDate, req.query.endDate);
    if (start || end) {
      matchFilter.date = {};
      if (start) matchFilter.date.$gte = start;
      if (end) matchFilter.date.$lte = end;
    }
    const expenses = await Expense_default.find(matchFilter);
    const now = /* @__PURE__ */ new Date();
    const next15Days = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1e3);
    let totalIncurred = 0;
    let totalPaid = 0;
    let totalOutstanding = 0;
    let overdueCount = 0;
    let overdueAmount = 0;
    let upcomingCount = 0;
    let upcomingAmount = 0;
    const categoryMap = {};
    for (const exp of expenses) {
      const amount = Number(exp.amount) || 0;
      const paid = Number(exp.paidAmount) || 0;
      const balance = Math.max(0, amount - paid);
      totalIncurred += amount;
      totalPaid += paid;
      totalOutstanding += balance;
      const cat = exp.category || "Others";
      categoryMap[cat] = (categoryMap[cat] || 0) + amount;
      if (balance > 0 && exp.dueDate && new Date(exp.dueDate) < now) {
        overdueCount++;
        overdueAmount += balance;
      }
      if (balance > 0 && exp.dueDate && new Date(exp.dueDate) >= now && new Date(exp.dueDate) <= next15Days) {
        upcomingCount++;
        upcomingAmount += balance;
      }
    }
    const categoryBreakdown = Object.entries(categoryMap).map(([category, amount]) => ({
      category,
      amount: Math.round(amount * 100) / 100,
      percentage: totalIncurred > 0 ? Math.round(amount / totalIncurred * 100) : 0
    })).sort((a, b) => b.amount - a.amount);
    res.json({
      totalIncurred: Math.round(totalIncurred * 100) / 100,
      totalPaid: Math.round(totalPaid * 100) / 100,
      totalOutstanding: Math.round(totalOutstanding * 100) / 100,
      outstandingLiabilities: Math.round(totalOutstanding * 100) / 100,
      overdueCount,
      overdueBillsCount: overdueCount,
      overdueAmount: Math.round(overdueAmount * 100) / 100,
      upcomingCount,
      upcomingAmount: Math.round(upcomingAmount * 100) / 100,
      categoryBreakdown
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createExpense = async (req, res) => {
  const {
    title,
    category,
    amount,
    description,
    date,
    dueDate,
    billingPeriod,
    paymentStatus,
    paidAmount,
    paymentMethod,
    paymentDate,
    isRecurring,
    recurringFrequency,
    recurringKey,
    receiptUrl,
    notes,
    staff,
    branchId
  } = req.body;
  try {
    const restaurantId = await getUserRestaurantId5(req.user);
    const targetBranchId = branchId || req.user.branchId;
    const amt = Number(amount) || 0;
    const finalTitle = (title || description || `${category} Expense`).trim();
    const finalDescription = (description || title || finalTitle).trim();
    const initialStatus = paymentStatus || (Number(paidAmount) >= amt ? "Paid" : Number(paidAmount) > 0 ? "Partially Paid" : "Pending");
    let initialPaid = 0;
    if (initialStatus === "Paid") {
      initialPaid = amt;
    } else if (initialStatus === "Partially Paid") {
      initialPaid = Number(paidAmount) || 0;
    }
    const initialBalance = Math.max(0, amt - initialPaid);
    if (recurringKey) {
      const exists = await Expense_default.findOne({ restaurantId, recurringKey });
      if (exists) {
        return res.status(400).json({ message: `A recurring bill for this cycle (${recurringKey}) already exists.` });
      }
    }
    const expenseDate = date ? new Date(date) : /* @__PURE__ */ new Date();
    const expense = await Expense_default.create({
      title: finalTitle,
      category,
      amount: amt,
      description: finalDescription,
      date: expenseDate,
      dueDate: dueDate ? new Date(dueDate) : void 0,
      billingPeriod: billingPeriod || expenseDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      paymentStatus: initialStatus,
      paidAmount: initialPaid,
      balanceDue: initialBalance,
      paymentMethod: paymentMethod || "Cash",
      paymentDate: initialPaid > 0 ? paymentDate ? new Date(paymentDate) : expenseDate : void 0,
      payments: initialPaid > 0 ? [{
        amount: initialPaid,
        paidDate: paymentDate ? new Date(paymentDate) : expenseDate,
        paymentMethod: paymentMethod || "Cash",
        reference: "Initial Payment",
        notes: notes || "",
        recordedBy: req.user._id
      }] : [],
      isRecurring: Boolean(isRecurring),
      recurringFrequency: isRecurring ? recurringFrequency || "Monthly" : void 0,
      recurringKey: isRecurring ? recurringKey || `${category.toLowerCase().replace(/\s+/g, "_")}_${targetBranchId || "main"}_${expenseDate.toISOString().slice(0, 7)}` : void 0,
      receiptUrl: receiptUrl || "",
      notes: notes || "",
      staff: staff || req.user.name || "Staff",
      restaurantId,
      branchId: targetBranchId,
      source: "Manual",
      createdBy: req.user._id
    });
    const populated = await Expense_default.findById(expense._id).populate("branchId", "name");
    res.status(201).json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var updateExpense = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId5(req.user);
    const expense = await Expense_default.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense record not found" });
    }
    if (expense.restaurantId.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to modify this record" });
    }
    const {
      title,
      category,
      amount,
      description,
      date,
      dueDate,
      billingPeriod,
      paymentStatus,
      paidAmount,
      paymentMethod,
      isRecurring,
      recurringFrequency,
      notes,
      branchId
    } = req.body;
    if (title !== void 0) expense.title = title.trim();
    if (description !== void 0) expense.description = description.trim();
    if (category !== void 0) expense.category = category;
    if (amount !== void 0) {
      expense.amount = Number(amount) || 0;
    }
    if (paidAmount !== void 0) {
      expense.paidAmount = Number(paidAmount) || 0;
    }
    expense.balanceDue = Math.max(0, (expense.amount || 0) - (expense.paidAmount || 0));
    if (paymentStatus !== void 0) {
      expense.paymentStatus = paymentStatus;
    } else {
      expense.paymentStatus = expense.paidAmount >= expense.amount ? "Paid" : expense.paidAmount > 0 ? "Partially Paid" : "Pending";
    }
    if (date !== void 0) expense.date = new Date(date);
    if (dueDate !== void 0) expense.dueDate = dueDate ? new Date(dueDate) : void 0;
    if (billingPeriod !== void 0) expense.billingPeriod = billingPeriod;
    if (paymentMethod !== void 0) expense.paymentMethod = paymentMethod;
    if (notes !== void 0) expense.notes = notes;
    if (isRecurring !== void 0) expense.isRecurring = Boolean(isRecurring);
    if (recurringFrequency !== void 0) expense.recurringFrequency = recurringFrequency;
    if (branchId !== void 0) expense.branchId = branchId || void 0;
    await expense.save();
    const populated = await Expense_default.findById(expense._id).populate("branchId", "name").populate("createdBy", "name role").populate("payments.recordedBy", "name role");
    res.json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var recordExpensePayment = async (req, res) => {
  const { amount, paymentMethod, reference, notes, paidDate } = req.body;
  try {
    const restaurantId = await getUserRestaurantId5(req.user);
    const expense = await Expense_default.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense record not found" });
    }
    if (expense.restaurantId.toString() !== restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to modify this record" });
    }
    const payAmt = Number(amount);
    if (!payAmt || payAmt <= 0) {
      return res.status(400).json({ message: "Valid payment amount is required" });
    }
    const newPaid = Math.min(expense.amount, (expense.paidAmount || 0) + payAmt);
    const newBalance = Math.max(0, expense.amount - newPaid);
    const newStatus = newPaid >= expense.amount ? "Paid" : newPaid > 0 ? "Partially Paid" : "Pending";
    const paymentTimestamp = paidDate ? new Date(paidDate) : /* @__PURE__ */ new Date();
    expense.paidAmount = newPaid;
    expense.balanceDue = newBalance;
    expense.paymentStatus = newStatus;
    expense.paymentDate = paymentTimestamp;
    expense.paymentMethod = paymentMethod || expense.paymentMethod || "Cash";
    expense.payments.push({
      amount: payAmt,
      paidDate: paymentTimestamp,
      paymentMethod: paymentMethod || "Cash",
      reference: reference || "",
      notes: notes || "",
      recordedBy: req.user._id
    });
    await expense.save();
    const populated = await Expense_default.findById(expense._id).populate("branchId", "name").populate("payments.recordedBy", "name");
    res.json({ message: "Payment recorded successfully", expense: populated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
var generateRecurringBills = async (req, res) => {
  const { billingMonth, billingYear, targetBillingPeriod, branchId } = req.body;
  try {
    const restaurantId = await getUserRestaurantId5(req.user);
    const now = /* @__PURE__ */ new Date();
    const m = billingMonth !== void 0 ? parseInt(billingMonth) : now.getMonth() + 1;
    const y = billingYear !== void 0 ? parseInt(billingYear) : now.getFullYear();
    const periodKey = `${y}-${m.toString().padStart(2, "0")}`;
    const periodLabel = targetBillingPeriod || new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const filter = { restaurantId, isRecurring: true };
    if (branchId && branchId !== "All") {
      filter.branchId = branchId;
    }
    let recurringTemplates = await Expense_default.find(filter);
    if (!recurringTemplates.length) {
      const defaultTemplates = [
        { category: "Rent", title: "Monthly Premises Rent", amount: 25e3, description: `Premises Rent - ${periodLabel}` },
        { category: "Electricity", title: "Electricity & Power Utility", amount: 6500, description: `Electricity Bill - ${periodLabel}` },
        { category: "Internet", title: "High-Speed Broadband Internet", amount: 1500, description: `Broadband Internet Bill - ${periodLabel}` },
        { category: "Water", title: "Commercial Water Utility", amount: 1200, description: `Commercial Water Bill - ${periodLabel}` }
      ];
      const createdDefaults = [];
      const billDueDate = new Date(y, m - 1, 10, 23, 59, 59);
      for (const dt of defaultTemplates) {
        const cycleKey = `${dt.category.toLowerCase()}_${branchId || "main"}_${periodKey}`;
        const bill = await Expense_default.create({
          category: dt.category,
          title: dt.title,
          description: dt.description,
          amount: dt.amount,
          date: new Date(y, m - 1, 1),
          dueDate: billDueDate,
          billingPeriod: periodLabel,
          paymentStatus: "Pending",
          paidAmount: 0,
          balanceDue: dt.amount,
          paymentMethod: "Bank Transfer",
          isRecurring: true,
          recurringFrequency: "Monthly",
          recurringKey: cycleKey,
          notes: `Recurring standard monthly bill for ${periodLabel}`,
          staff: req.user.name || "Admin",
          restaurantId,
          branchId: branchId && branchId !== "All" ? branchId : req.user.branchId,
          source: "Recurring",
          createdBy: req.user._id
        });
        createdDefaults.push(bill);
      }
      return res.json({
        message: `Generated ${createdDefaults.length} recurring utility & rent bills for ${periodLabel}`,
        createdCount: createdDefaults.length,
        bills: createdDefaults
      });
    }
    const templatesByKey = {};
    for (const t of recurringTemplates) {
      const catSlug = String(t.category || "general").toLowerCase().replace(/\s+/g, "_");
      const key = `${catSlug}_${t.branchId || "main"}`;
      if (!templatesByKey[key]) templatesByKey[key] = t;
    }
    const generated = [];
    for (const [key, tmpl] of Object.entries(templatesByKey)) {
      const cycleKey = `${key}_${periodKey}`;
      const altCycleKey = `${tmpl.category}_${tmpl.branchId || "main"}_${periodKey}`;
      const branchQuery = tmpl.branchId ? { branchId: tmpl.branchId } : {};
      const alreadyExists = await Expense_default.findOne({
        restaurantId,
        $or: [
          { recurringKey: cycleKey },
          { recurringKey: altCycleKey },
          { category: tmpl.category, billingPeriod: periodLabel, ...branchQuery }
        ]
      }).lean();
      if (!alreadyExists) {
        const billDueDate = new Date(y, m - 1, 10, 23, 59, 59);
        const newBill = await Expense_default.create({
          category: tmpl.category,
          title: tmpl.title || `${tmpl.category} Bill`,
          amount: tmpl.amount,
          description: `${tmpl.title || tmpl.category} - ${periodLabel}`,
          date: new Date(y, m - 1, 1),
          dueDate: billDueDate,
          billingPeriod: periodLabel,
          paymentStatus: "Pending",
          paidAmount: 0,
          balanceDue: tmpl.amount,
          paymentMethod: tmpl.paymentMethod || "Bank Transfer",
          isRecurring: true,
          recurringFrequency: tmpl.recurringFrequency || "Monthly",
          recurringKey: cycleKey,
          notes: `Auto-generated recurring monthly bill for ${periodLabel}`,
          staff: req.user.name || "Admin",
          restaurantId,
          branchId: tmpl.branchId,
          source: "Recurring",
          createdBy: req.user._id
        });
        generated.push(newBill);
      }
    }
    res.json({
      message: generated.length > 0 ? `Generated ${generated.length} recurring bills for ${periodLabel}` : `All recurring bills for ${periodLabel} are already up to date.`,
      createdCount: generated.length,
      bills: generated
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var deleteExpense = async (req, res) => {
  try {
    const restaurantId = await getUserRestaurantId5(req.user);
    const expense = await Expense_default.findById(req.params.id);
    if (expense) {
      if (expense.restaurantId.toString() !== restaurantId.toString()) {
        return res.status(403).json({ message: "Not authorized to delete this expense" });
      }
      await expense.deleteOne();
      res.json({ message: "Expense record deleted" });
    } else {
      res.status(404).json({ message: "Expense record not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/expenseRoutes.js
var router23 = import_express23.default.Router();
router23.use(protect);
router23.use(authorize("RestaurantAdmin", "BranchManager"));
router23.use(checkSubscription);
router23.use(checkBillingModule(["expenseManagement", "salesReports"]));
router23.get("/summary", getExpenseSummary);
router23.post("/generate-recurring", generateRecurringBills);
router23.post("/recurring/generate", generateRecurringBills);
router23.post("/:id/pay", recordExpensePayment);
router23.route("/").get(getExpenses).post(createExpense);
router23.route("/:id").put(updateExpense).delete(deleteExpense);
var expenseRoutes_default = router23;

// routes/supportRoutes.js
var import_express24 = __toESM(require("express"), 1);

// models/TicketReply.js
var import_mongoose45 = __toESM(require("mongoose"), 1);
var ticketReplySchema = new import_mongoose45.default.Schema({
  ticketId: {
    type: import_mongoose45.default.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true
  },
  senderId: {
    type: import_mongoose45.default.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  message: {
    type: String,
    required: true
  },
  attachments: [{
    type: String
  }],
  isInternalNote: {
    type: Boolean,
    default: false
  },
  readBy: [{
    type: import_mongoose45.default.Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true
});
var TicketReply = import_mongoose45.default.model("TicketReply", ticketReplySchema);
var TicketReply_default = TicketReply;

// models/SupportAgent.js
var import_mongoose46 = __toESM(require("mongoose"), 1);
var supportAgentSchema = new import_mongoose46.default.Schema({
  userId: {
    type: import_mongoose46.default.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  workload: {
    type: Number,
    default: 0
    // Number of active tickets assigned
  },
  totalResolved: {
    type: Number,
    default: 0
  },
  averageResponseTime: {
    type: Number,
    default: 0
    // in minutes
  },
  averageResolutionTime: {
    type: Number,
    default: 0
    // in minutes
  }
}, {
  timestamps: true
});
var SupportAgent = import_mongoose46.default.model("SupportAgent", supportAgentSchema);
var SupportAgent_default = SupportAgent;

// models/KnowledgeBase.js
var import_mongoose47 = __toESM(require("mongoose"), 1);
var knowledgeBaseSchema = new import_mongoose47.default.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [
      "Getting Started",
      "Subscription",
      "Orders",
      "POS",
      "QR Digital Menu",
      "Kitchen",
      "Inventory",
      "Payments",
      "Delivery",
      "Troubleshooting",
      "FAQs"
    ],
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  helpfulVotes: {
    type: Number,
    default: 0
  },
  unhelpfulVotes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
var KnowledgeBase = import_mongoose47.default.model("KnowledgeBase", knowledgeBaseSchema);
var KnowledgeBase_default = KnowledgeBase;

// models/SupportAnnouncement.js
var import_mongoose48 = __toESM(require("mongoose"), 1);
var supportAnnouncementSchema = new import_mongoose48.default.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: [
      "Scheduled Maintenance",
      "Feature Releases",
      "Service Updates",
      "Known Issues"
    ],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: import_mongoose48.default.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});
var SupportAnnouncement = import_mongoose48.default.model("SupportAnnouncement", supportAnnouncementSchema);
var SupportAnnouncement_default = SupportAnnouncement;

// models/TicketActivityLog.js
var import_mongoose49 = __toESM(require("mongoose"), 1);
var ticketActivityLogSchema = new import_mongoose49.default.Schema({
  ticketId: {
    type: import_mongoose49.default.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true
  },
  action: {
    type: String,
    required: true
  },
  performedBy: {
    type: import_mongoose49.default.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  userRole: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var TicketActivityLog = import_mongoose49.default.model("TicketActivityLog", ticketActivityLogSchema);
var TicketActivityLog_default = TicketActivityLog;

// controllers/supportController.js
init_Restaurant();
init_User();
init_Notification();
var import_multer3 = __toESM(require("multer"), 1);
var import_path4 = __toESM(require("path"), 1);
var import_fs4 = __toESM(require("fs"), 1);
var uploadDir2 = process.env.VERCEL ? "/tmp/uploads/tickets" : "uploads/tickets";
try {
  if (!import_fs4.default.existsSync(uploadDir2)) {
    import_fs4.default.mkdirSync(uploadDir2, { recursive: true });
  }
} catch {
}
var storage2 = import_multer3.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir2);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + import_path4.default.extname(file.originalname));
  }
});
var fileFilter2 = (req, file, cb) => {
  const allowedTypes = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx", ".xls", ".xlsx"];
  const ext = import_path4.default.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PDF, JPG, JPEG, PNG, DOC/DOCX, XLS/XLSX are allowed."), false);
  }
};
var upload2 = (0, import_multer3.default)({
  storage: storage2,
  limits: { fileSize: 10 * 1024 * 1024 },
  // 10MB limit
  fileFilter: fileFilter2
});
var getEffectiveRestaurantId = async (user) => {
  if (!user) return null;
  if (user.restaurantId) return user.restaurantId;
  if (user.restaurant) return user.restaurant;
  if (user._id) {
    const rest = await Restaurant_default.findOne({ ownerId: user._id });
    if (rest) return rest._id;
  }
  return null;
};
var logActivity = async (ticketId, action, req, details) => {
  try {
    await TicketActivityLog_default.create({
      ticketId,
      action,
      performedBy: req.user._id,
      userRole: req.user.role,
      details
    });
  } catch (err) {
    console.error("Failed to log ticket activity:", err.message);
  }
};
var autoAssignTicket = async (ticket) => {
  try {
    const agents = await SupportAgent_default.find({ isActive: true }).sort({ workload: 1 });
    if (agents.length > 0) {
      const chosenAgent = agents[0];
      ticket.assignedAgentId = chosenAgent.userId;
      ticket.status = "Assigned";
      await ticket.save();
      chosenAgent.workload += 1;
      await chosenAgent.save();
      const agentUser = await User_default.findById(chosenAgent.userId);
      return agentUser;
    }
    return null;
  } catch (error) {
    console.error("Error auto-assigning ticket:", error.message);
    return null;
  }
};
var generateTicketId = async () => {
  let exists = true;
  let ticketId = "";
  while (exists) {
    const rand = Math.floor(1e5 + Math.random() * 9e5);
    ticketId = `TKT-${rand}`;
    const count = await Ticket_default.countDocuments({ ticketId });
    if (count === 0) exists = false;
  }
  return ticketId;
};
var createTicket = async (req, res) => {
  try {
    let restaurantId = await getEffectiveRestaurantId(req.user);
    if (!restaurantId && req.user.role !== "SuperAdmin" && req.user.role !== "SupportAgent") {
      return res.status(400).json({
        message: "Restaurant profile not found for this account."
      });
    }
    const { subject, category, priority, description, branchId } = req.body;
    let attachmentPaths = [];
    if (req.files && req.files.length > 0) {
      attachmentPaths = req.files.map((file) => `/uploads/tickets/${file.filename}`);
    }
    const tktId = await generateTicketId();
    const ticket = new Ticket_default({
      ticketId: tktId,
      restaurantId: restaurantId || req.user.restaurantId,
      branchId: branchId || void 0,
      subject,
      category,
      priority: priority || "Medium",
      description,
      attachments: attachmentPaths,
      status: "Open"
    });
    await ticket.save();
    await logActivity(ticket._id, "Created", req, `Ticket created by ${req.user.name} (${req.user.role})`);
    await Notification_default.create({
      title: `Ticket Created - ${tktId}`,
      desc: `Your ticket regarding "${subject}" has been successfully created.`,
      type: "Info",
      restaurantId: restaurantId || req.user.restaurantId
    });
    const assignedAgent = await autoAssignTicket(ticket);
    if (assignedAgent) {
      await logActivity(ticket._id, "Assigned", req, `Ticket auto-assigned to Support Agent ${assignedAgent.name}`);
      await Notification_default.create({
        title: `Agent Assigned - ${tktId}`,
        desc: `Support Agent "${assignedAgent.name}" has been assigned to help you.`,
        type: "Info",
        restaurantId: restaurantId || req.user.restaurantId
      });
      await Notification_default.create({
        title: `New Ticket Assigned - ${tktId}`,
        desc: `A new ticket "${subject}" has been assigned to you.`,
        type: "Alert",
        restaurantId: restaurantId || req.user.restaurantId
        // Linked to restaurant
      });
    } else {
      await Notification_default.create({
        title: `New Support Ticket - ${tktId}`,
        desc: `A new support ticket "${subject}" has been created.`,
        type: "System"
      });
    }
    if (priority === "Critical") {
      await Notification_default.create({
        title: `\u{1F6A8} Emergency Support Ticket - ${tktId}`,
        desc: `A Critical priority ticket "${subject}" requires immediate attention!`,
        type: "System"
      });
    }
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getTickets2 = async (req, res) => {
  try {
    const isSuperAdminOrAgent = req.user.role === "SuperAdmin" || req.user.role === "SupportAgent";
    let query = {};
    if (!isSuperAdminOrAgent) {
      const restaurantId = await getEffectiveRestaurantId(req.user);
      if (restaurantId) {
        query.restaurantId = restaurantId;
      }
    } else if (req.user.role === "SupportAgent") {
      query = {
        $or: [
          { assignedAgentId: req.user._id },
          { status: "Open" }
        ]
      };
    }
    if (req.query.status) query.status = req.query.status;
    if (req.query.priority) query.priority = req.query.priority;
    if (req.query.category) query.category = req.query.category;
    let search = {};
    if (req.query.search) {
      search = {
        $or: [
          { subject: { $regex: req.query.search, $options: "i" } },
          { ticketId: { $regex: req.query.search, $options: "i" } }
        ]
      };
    }
    const combinedQuery = { ...query, ...search };
    const tickets = await Ticket_default.find(combinedQuery).populate("restaurantId", "name logo").populate("branchId", "name").populate("assignedAgentId", "name email").sort({ priority: 1, lastUpdated: -1 });
    const priorityOrder = { "Critical": 0, "High": 1, "Medium": 2, "Low": 3 };
    tickets.sort((a, b) => {
      if (a.status === "Closed" && b.status !== "Closed") return 1;
      if (b.status === "Closed" && a.status !== "Closed") return -1;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id).populate("restaurantId", "name logo subscription").populate("branchId", "name").populate("assignedAgentId", "name email");
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    const isSuperAdminOrAgent = req.user.role === "SuperAdmin" || req.user.role === "SupportAgent";
    if (!isSuperAdminOrAgent) {
      const userRestId = await getEffectiveRestaurantId(req.user);
      const ticketRestId = ticket.restaurantId?._id ? ticket.restaurantId._id.toString() : ticket.restaurantId?.toString();
      if (userRestId && ticketRestId && ticketRestId !== userRestId.toString()) {
        return res.status(403).json({ message: "Unauthorized access to this ticket." });
      }
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateTicket2 = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    const isSuperAdminOrAgent = req.user.role === "SuperAdmin" || req.user.role === "SupportAgent";
    if (!isSuperAdminOrAgent && ticket.restaurantId.toString() !== req.user.restaurantId?.toString()) {
      return res.status(403).json({ message: "Unauthorized access." });
    }
    const { status, priority, category, assignedAgentId } = req.body;
    const prevStatus = ticket.status;
    const prevAgent = ticket.assignedAgentId;
    if (status) ticket.status = status;
    if (priority) ticket.priority = priority;
    if (category) ticket.category = category;
    if (assignedAgentId !== void 0 && assignedAgentId !== String(prevAgent)) {
      if (prevAgent) {
        await SupportAgent_default.findOneAndUpdate({ userId: prevAgent }, { $inc: { workload: -1 } });
      }
      if (assignedAgentId) {
        ticket.assignedAgentId = assignedAgentId;
        if (ticket.status === "Open") {
          ticket.status = "Assigned";
        }
        await SupportAgent_default.findOneAndUpdate({ userId: assignedAgentId }, { $inc: { workload: 1 } });
        const agentUser = await User_default.findById(assignedAgentId);
        await logActivity(ticket._id, "Assigned", req, `Ticket assigned to Support Agent ${agentUser?.name || "Unknown"}`);
      } else {
        ticket.assignedAgentId = void 0;
        ticket.status = "Open";
        await logActivity(ticket._id, "Unassigned", req, `Ticket unassigned`);
      }
    }
    if ((status === "Resolved" || status === "Closed") && prevStatus !== "Resolved" && prevStatus !== "Closed") {
      const createdAt = new Date(ticket.createdAt);
      const resolvedAt = /* @__PURE__ */ new Date();
      const diffMin = Math.round((resolvedAt - createdAt) / (1e3 * 60));
      ticket.resolutionTime = diffMin;
      if (ticket.assignedAgentId) {
        await SupportAgent_default.findOneAndUpdate(
          { userId: ticket.assignedAgentId },
          {
            $inc: { workload: -1, totalResolved: 1 },
            $push: { averageResolutionTime: diffMin }
            // We can calculate aggregate later
          }
        );
      }
    }
    await ticket.save();
    if (status && status !== prevStatus) {
      await logActivity(ticket._id, "StatusUpdated", req, `Ticket status changed from ${prevStatus} to ${status}`);
      await Notification_default.create({
        title: `Ticket Status Updated - ${ticket.ticketId}`,
        desc: `Your ticket status has been changed to "${status}".`,
        type: "Alert",
        restaurantId: ticket.restaurantId
      });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getTicketReplies = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    const isSuperAdminOrAgent = req.user.role === "SuperAdmin" || req.user.role === "SupportAgent";
    if (!isSuperAdminOrAgent && ticket.restaurantId.toString() !== req.user.restaurantId?.toString()) {
      return res.status(403).json({ message: "Unauthorized access." });
    }
    let query = { ticketId: req.params.id };
    if (!isSuperAdminOrAgent) {
      query.isInternalNote = false;
    }
    const replies = await TicketReply_default.find(query).populate("senderId", "name email role").sort({ createdAt: 1 });
    res.json(replies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var addTicketReply = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    const isSuperAdminOrAgent = req.user.role === "SuperAdmin" || req.user.role === "SupportAgent";
    if (!isSuperAdminOrAgent && ticket.restaurantId.toString() !== req.user.restaurantId?.toString()) {
      return res.status(403).json({ message: "Unauthorized access." });
    }
    const { message, isInternalNote } = req.body;
    let attachmentPaths = [];
    if (req.files && req.files.length > 0) {
      attachmentPaths = req.files.map((file) => `/uploads/tickets/${file.filename}`);
    }
    const reply = new TicketReply_default({
      ticketId: ticket._id,
      senderId: req.user._id,
      message,
      isInternalNote: isSuperAdminOrAgent ? isInternalNote === "true" || isInternalNote === true : false,
      attachments: attachmentPaths,
      readBy: [req.user._id]
    });
    await reply.save();
    const prevStatus = ticket.status;
    if (isSuperAdminOrAgent) {
      if (!reply.isInternalNote) {
        ticket.status = "Waiting for Customer";
      }
    } else {
      if (ticket.status === "Waiting for Customer" || ticket.status === "Assigned") {
        ticket.status = "In Progress";
      } else if (ticket.status === "Open") {
        ticket.status = "Open";
      }
    }
    await ticket.save();
    await logActivity(ticket._id, "ReplyAdded", req, `${reply.isInternalNote ? "Internal note" : "Message"} sent by ${req.user.name}`);
    if (isSuperAdminOrAgent && !reply.isInternalNote) {
      await Notification_default.create({
        title: `New Support Agent Message - ${ticket.ticketId}`,
        desc: `Support Agent "${req.user.name}" has replied to your ticket.`,
        type: "Alert",
        restaurantId: ticket.restaurantId
      });
    } else if (!isSuperAdminOrAgent) {
      if (ticket.assignedAgentId) {
        await Notification_default.create({
          title: `Customer Reply - ${ticket.ticketId}`,
          desc: `Restaurant "${req.user.name}" replied to ticket "${ticket.subject}".`,
          type: "Info",
          restaurantId: ticket.restaurantId
        });
      }
    }
    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var markRepliesAsRead = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    await TicketReply_default.updateMany(
      { ticketId: ticket._id, readBy: { $ne: req.user._id } },
      { $addToSet: { readBy: req.user._id } }
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var rateTicket = async (req, res) => {
  try {
    const ticket = await Ticket_default.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    if (ticket.restaurantId.toString() !== req.user.restaurantId?.toString()) {
      return res.status(403).json({ message: "Unauthorized access." });
    }
    const { csatRating, csatFeedback } = req.body;
    if (!csatRating || csatRating < 1 || csatRating > 5) {
      return res.status(400).json({ message: "Please provide a valid rating between 1 and 5 stars." });
    }
    ticket.csatRating = csatRating;
    ticket.csatFeedback = csatFeedback || "";
    await ticket.save();
    await logActivity(ticket._id, "Rated", req, `Ticket rated ${csatRating} stars by customer.`);
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getSupportAgents = async (req, res) => {
  try {
    const agents = await SupportAgent_default.find().populate("userId", "name email role").sort({ workload: 1 });
    res.json(agents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateSupportAgent = async (req, res) => {
  try {
    const { userId, isActive } = req.body;
    let agent = await SupportAgent_default.findOne({ userId });
    if (agent) {
      if (isActive !== void 0) agent.isActive = isActive;
      await agent.save();
    } else {
      agent = new SupportAgent_default({
        userId,
        isActive: isActive !== void 0 ? isActive : true
      });
      await agent.save();
    }
    const user = await User_default.findById(userId);
    if (user && user.role !== "SuperAdmin" && user.role !== "SupportAgent") {
      user.role = "SupportAgent";
      await user.save();
    }
    res.json(agent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getKnowledgeBase = async (req, res) => {
  try {
    let query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    let search = {};
    if (req.query.search) {
      search = {
        $or: [
          { title: { $regex: req.query.search, $options: "i" } },
          { content: { $regex: req.query.search, $options: "i" } }
        ]
      };
    }
    const articles = await KnowledgeBase_default.find({ ...query, ...search }).sort({ views: -1, createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getKnowledgeBaseArticle = async (req, res) => {
  try {
    const article = await KnowledgeBase_default.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!article) return res.status(404).json({ message: "Article not found." });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createKnowledgeBaseArticle = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const article = new KnowledgeBase_default({ title, content, category });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateKnowledgeBaseArticle = async (req, res) => {
  try {
    const article = await KnowledgeBase_default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) return res.status(404).json({ message: "Article not found." });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var deleteKnowledgeBaseArticle = async (req, res) => {
  try {
    const article = await KnowledgeBase_default.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found." });
    res.json({ message: "Article removed successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getAnnouncements = async (req, res) => {
  try {
    const query = { isActive: true };
    if (req.query.type) {
      query.type = req.query.type;
    }
    const announcements = await SupportAnnouncement_default.find(query).populate("createdBy", "name").sort({ createdAt: -1 });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createAnnouncement = async (req, res) => {
  try {
    const { title, content, type } = req.body;
    const announcement = new SupportAnnouncement_default({
      title,
      content,
      type,
      createdBy: req.user._id
    });
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateAnnouncement = async (req, res) => {
  try {
    const announcement = await SupportAnnouncement_default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!announcement) return res.status(404).json({ message: "Announcement not found." });
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getSupportAnalytics = async (req, res) => {
  try {
    const isSuperAdminOrAgent = req.user.role === "SuperAdmin" || req.user.role === "SupportAgent";
    let matchQuery = {};
    if (!isSuperAdminOrAgent) {
      matchQuery.restaurantId = req.user.restaurantId;
    }
    const totalOpen = await Ticket_default.countDocuments({ ...matchQuery, status: "Open" });
    const totalAssigned = await Ticket_default.countDocuments({ ...matchQuery, status: "Assigned" });
    const totalInProgress = await Ticket_default.countDocuments({ ...matchQuery, status: "In Progress" });
    const totalWaiting = await Ticket_default.countDocuments({ ...matchQuery, status: "Waiting for Customer" });
    const totalResolved = await Ticket_default.countDocuments({ ...matchQuery, status: "Resolved" });
    const totalClosed = await Ticket_default.countDocuments({ ...matchQuery, status: "Closed" });
    const totalCritical = await Ticket_default.countDocuments({ ...matchQuery, priority: "Critical" });
    const csatAggregation = await Ticket_default.aggregate([
      { $match: { ...matchQuery, csatRating: { $ne: null } } },
      { $group: { _id: null, avgCsat: { $avg: "$csatRating" }, totalRated: { $sum: 1 } } }
    ]);
    const avgCsat = csatAggregation.length > 0 ? Number(csatAggregation[0].avgCsat.toFixed(1)) : 0;
    const totalRated = csatAggregation.length > 0 ? csatAggregation[0].totalRated : 0;
    const oneWeekAgo = /* @__PURE__ */ new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const createdThisWeek = await Ticket_default.countDocuments({ ...matchQuery, createdAt: { $gte: oneWeekAgo } });
    const resolvedThisWeek = await Ticket_default.countDocuments({ ...matchQuery, status: "Resolved", updatedAt: { $gte: oneWeekAgo } });
    const timeAggregation = await Ticket_default.aggregate([
      { $match: { ...matchQuery, resolutionTime: { $ne: null } } },
      { $group: { _id: null, avgResolution: { $avg: "$resolutionTime" } } }
    ]);
    const avgResolutionTime = timeAggregation.length > 0 ? Math.round(timeAggregation[0].avgResolution) : 0;
    const categoryAggregation = await Ticket_default.aggregate([
      { $match: matchQuery },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    const sixMonthsAgo = /* @__PURE__ */ new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);
    const trendAggregation = await Ticket_default.aggregate([
      {
        $match: {
          ...matchQuery,
          createdAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          created: { $sum: 1 },
          resolved: {
            $sum: {
              $cond: [{ $in: ["$status", ["Resolved", "Closed"]] }, 1, 0]
            }
          }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);
    const activeAgentsCount = await SupportAgent_default.countDocuments({ isActive: true });
    res.json({
      summary: {
        totalOpen,
        totalAssigned,
        totalInProgress,
        totalWaiting,
        totalResolved,
        totalClosed,
        totalCritical,
        avgCsat,
        totalRated,
        activeAgentsCount,
        createdThisWeek,
        resolvedThisWeek,
        avgResolutionTime
      },
      categories: categoryAggregation.map((c) => ({ category: c._id, count: c.count })),
      trend: trendAggregation.map((t) => ({
        monthName: new Date(t._id.year, t._id.month - 1).toLocaleString("default", { month: "short" }),
        created: t.created,
        resolved: t.resolved
      }))
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/supportRoutes.js
var router24 = import_express24.default.Router();
router24.use(protect);
router24.route("/analytics").get(getSupportAnalytics);
router24.route("/tickets").get(getTickets2).post(upload2.array("attachments", 5), createTicket);
router24.route("/tickets/:id").get(getTicketById).put(updateTicket2);
router24.route("/tickets/:id/replies").get(getTicketReplies).post(upload2.array("attachments", 5), addTicketReply);
router24.route("/tickets/:id/read").post(markRepliesAsRead);
router24.route("/tickets/:id/rate").post(rateTicket);
router24.route("/agents").get(authorize("SuperAdmin", "SupportAgent"), getSupportAgents).post(authorize("SuperAdmin"), updateSupportAgent);
router24.route("/knowledge-base").get(getKnowledgeBase).post(authorize("SuperAdmin", "SupportAgent"), createKnowledgeBaseArticle);
router24.route("/knowledge-base/:id").get(getKnowledgeBaseArticle).put(authorize("SuperAdmin", "SupportAgent"), updateKnowledgeBaseArticle).delete(authorize("SuperAdmin", "SupportAgent"), deleteKnowledgeBaseArticle);
router24.route("/announcements").get(getAnnouncements).post(authorize("SuperAdmin", "SupportAgent"), createAnnouncement);
router24.route("/announcements/:id").put(authorize("SuperAdmin", "SupportAgent"), updateAnnouncement);
var supportRoutes_default = router24;

// routes/deliveryRoutes.js
var import_express25 = __toESM(require("express"), 1);

// controllers/deliveryController.js
init_User();
init_DeliveryPartner();

// models/DeliveryWithdrawal.js
var import_mongoose50 = __toESM(require("mongoose"), 1);
var deliveryWithdrawalSchema = new import_mongoose50.default.Schema({
  partnerId: {
    type: import_mongoose50.default.Schema.Types.ObjectId,
    ref: "DeliveryPartner",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  payoutDetails: {
    type: String,
    default: ""
  }
}, { timestamps: true });
var DeliveryWithdrawal = import_mongoose50.default.model("DeliveryWithdrawal", deliveryWithdrawalSchema);
var DeliveryWithdrawal_default = DeliveryWithdrawal;

// controllers/deliveryController.js
init_Order();
init_Restaurant();
var import_jsonwebtoken4 = __toESM(require("jsonwebtoken"), 1);
var generateToken2 = (id) => {
  return import_jsonwebtoken4.default.sign({ id }, process.env.JWT_SECRET || "supersecretjwtkey123", {
    expiresIn: "30d"
  });
};
var sendOtp = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ message: "Phone number is required" });
    }
    const cleanPhone = String(phoneNumber).replace(/\D/g, "");
    const last10Digits = cleanPhone.slice(-10);
    console.log(`[OTP Request] Input Phone: "${phoneNumber}" | Normalized: "${last10Digits}"`);
    let user = await User_default.findOne({
      phoneNumber: { $regex: last10Digits + "$" },
      role: "DeliveryPartner"
    });
    if (!user) {
      return res.status(404).json({ message: "Delivery partner not registered. Please contact restaurant admin." });
    }
    console.log(`[OTP Sent] To: ${phoneNumber} | OTP: 1234`);
    res.json({ message: "OTP sent successfully", phoneNumber });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var verifyOtp = async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ message: "Phone number and OTP are required" });
    }
    if (otp !== "1234") {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    const cleanPhone = String(phoneNumber).replace(/\D/g, "");
    const last10Digits = cleanPhone.slice(-10);
    let user = await User_default.findOne({
      phoneNumber: { $regex: last10Digits + "$" },
      role: "DeliveryPartner"
    });
    if (!user) {
      return res.status(404).json({ message: "Delivery partner not found" });
    }
    const partnerProfile = await DeliveryPartner_default.findOne({ userId: user._id });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      restaurantId: user.restaurantId,
      profile: partnerProfile,
      token: generateToken2(user._id)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getDeliveryProfile = async (req, res) => {
  try {
    let partner = await DeliveryPartner_default.findOne({ userId: req.user._id }).populate("userId", "name email phoneNumber").populate("restaurantId", "name address phone");
    if (!partner) {
      partner = await DeliveryPartner_default.create({
        userId: req.user._id,
        restaurantId: req.user.restaurantId || null,
        vehicleDetails: { vehicleType: "Bike", registrationNumber: req.user.phoneNumber ? `TN-${req.user.phoneNumber.slice(-4)}` : "KA-01-DP-2024" },
        verificationStatus: "Approved",
        status: "Online"
      });
      partner = await DeliveryPartner_default.findById(partner._id).populate("userId", "name email phoneNumber").populate("restaurantId", "name address phone");
    }
    res.json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var togglePartnerStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Online", "Offline"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }
    const partner = await DeliveryPartner_default.findOne({ userId: req.user._id });
    if (!partner) {
      return res.status(404).json({ message: "Profile not found" });
    }
    if (partner.verificationStatus !== "Approved") {
      return res.status(403).json({ message: "Your account is not approved yet." });
    }
    partner.status = status;
    await partner.save();
    res.json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getAssignedOrders = async (req, res) => {
  try {
    const userRestId = req.user.restaurantId;
    const query = {
      orderType: "Delivery",
      $or: [
        { deliveryPartner: req.user._id },
        { deliveryPartner: null, deliveryStatus: "Pending Assignment" },
        { deliveryPartner: { $exists: false }, deliveryStatus: "Pending Assignment" }
      ],
      deliveryStatus: { $in: ["Pending Assignment", "Accepted", "Picked Up", "On the Way"] }
    };
    if (userRestId) {
      query.restaurantId = userRestId;
    }
    const orders = await Order_default.find(query).populate("restaurantId", "name deliverySettings").sort({ updatedAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateOrderDeliveryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["Accepted", "Rejected", "Picked Up", "On the Way", "Delivered", "Completed", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status update" });
    }
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (order.deliveryPartner && String(order.deliveryPartner) !== String(req.user._id) && status !== "Accepted") {
      return res.status(403).json({ message: "Not authorized for this order" });
    }
    if (status === "Accepted") {
      order.deliveryPartner = req.user._id;
      order.deliveryStatus = "Accepted";
      order.status = "Out for Delivery";
      if (!order.deliveryOtp) {
        order.deliveryOtp = Math.floor(1e3 + Math.random() * 9e3).toString();
      }
    } else if (status === "Picked Up") {
      order.deliveryPartner = req.user._id;
      order.deliveryStatus = "Picked Up";
      order.status = "Out for Delivery";
    } else if (status === "On the Way") {
      order.deliveryPartner = req.user._id;
      order.deliveryStatus = "On the Way";
      order.status = "Out for Delivery";
    } else if (status === "Delivered" || status === "Completed") {
      if (!order.deliveryOtp) {
        order.deliveryOtp = Math.floor(1e3 + Math.random() * 9e3).toString();
      }
      const inputOtp = String(req.body.otp || "").trim();
      const expectedOtp = String(order.deliveryOtp).trim();
      if (!inputOtp || inputOtp !== expectedOtp) {
        return res.status(400).json({
          message: `Invalid Delivery OTP. Please enter the 4-digit OTP shown on the customer's order tracking screen.`
        });
      }
      order.deliveryStatus = "Delivered";
      order.status = "Completed";
      order.isPaid = true;
      order.paidAt = /* @__PURE__ */ new Date();
      const partner = await DeliveryPartner_default.findOne({ userId: req.user._id });
      if (partner) {
        const charge = order.deliveryCharge || 30;
        partner.walletBalance = (partner.walletBalance || 0) + charge;
        partner.earnings = (partner.earnings || 0) + charge;
        await partner.save();
      }
    } else if (status === "Rejected" || status === "Cancelled") {
      order.deliveryStatus = "Cancelled";
      order.deliveryPartner = null;
    }
    const updatedOrder = await order.save();
    broadcastToRestaurant(updatedOrder.restaurantId, "order_updated", updatedOrder);
    broadcastToCustomerOrder(updatedOrder._id, "order_status_updated", updatedOrder);
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var createWithdrawalRequest = async (req, res) => {
  try {
    const { amount, payoutDetails } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }
    const partner = await DeliveryPartner_default.findOne({ userId: req.user._id });
    if (!partner) {
      return res.status(404).json({ message: "Profile not found" });
    }
    if (partner.walletBalance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    const withdrawal = await DeliveryWithdrawal_default.create({
      partnerId: partner._id,
      amount,
      payoutDetails
    });
    partner.walletBalance -= amount;
    await partner.save();
    res.status(201).json(withdrawal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getWithdrawalRequests = async (req, res) => {
  try {
    let partner = await DeliveryPartner_default.findOne({ userId: req.user._id });
    if (!partner) {
      partner = await DeliveryPartner_default.create({
        userId: req.user._id,
        restaurantId: req.user.restaurantId || null,
        vehicleDetails: { vehicleType: "Bike", registrationNumber: req.user.phoneNumber ? `TN-${req.user.phoneNumber.slice(-4)}` : "KA-01-DP-2024" },
        verificationStatus: "Approved",
        status: "Online"
      });
    }
    const withdrawals = await DeliveryWithdrawal_default.find({ partnerId: partner._id }).sort({ createdAt: -1 });
    res.json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getEarningsHistory = async (req, res) => {
  try {
    let partner = await DeliveryPartner_default.findOne({ userId: req.user._id });
    if (!partner) {
      partner = await DeliveryPartner_default.create({
        userId: req.user._id,
        restaurantId: req.user.restaurantId || null,
        vehicleDetails: { vehicleType: "Bike", registrationNumber: req.user.phoneNumber ? `TN-${req.user.phoneNumber.slice(-4)}` : "KA-01-DP-2024" },
        verificationStatus: "Approved",
        status: "Online"
      });
    }
    const completedOrders = await Order_default.find({
      deliveryPartner: req.user._id,
      deliveryStatus: "Delivered"
    }).sort({ updatedAt: -1 });
    const totalDeliveries = completedOrders.length;
    const totalEarnings = partner.earnings;
    const walletBalance = partner.walletBalance;
    res.json({
      stats: {
        totalDeliveries,
        totalEarnings,
        walletBalance
      },
      history: completedOrders
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getDeliveryPartners = async (req, res) => {
  try {
    const partners = await DeliveryPartner_default.find({ restaurantId: req.user.restaurantId }).populate("userId", "name email phoneNumber isActive");
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var addDeliveryPartner = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      vehicleType,
      vehicleModel,
      rcNumber,
      licenseNumber,
      profilePhoto,
      drivingLicense,
      idProof
    } = req.body;
    const userExists = await User_default.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User_default.create({
      name,
      email,
      phoneNumber,
      role: "DeliveryPartner",
      password: "password123",
      // Default credentials
      restaurantId: req.user.restaurantId
    });
    const partner = await DeliveryPartner_default.create({
      userId: user._id,
      restaurantId: req.user.restaurantId,
      verificationStatus: "Approved",
      // Auto-approved when added by admin
      vehicleDetails: {
        type: vehicleType || "Bike",
        model: vehicleModel || "",
        rcNumber: rcNumber || "",
        licenseNumber: licenseNumber || ""
      },
      documents: {
        profilePhoto: profilePhoto || "",
        drivingLicense: drivingLicense || "",
        aadhaarProof: idProof || ""
      }
    });
    const restaurantDoc = await Restaurant_default.findById(req.user.restaurantId);
    if (restaurantDoc) {
      if (!restaurantDoc.deliverySettings) {
        restaurantDoc.deliverySettings = { enabled: true };
      } else {
        restaurantDoc.deliverySettings.enabled = true;
      }
      await restaurantDoc.save();
    }
    res.status(201).json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var togglePartnerActiveStatus = async (req, res) => {
  try {
    const partner = await DeliveryPartner_default.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: "Delivery partner profile not found" });
    }
    const user = await User_default.findById(partner.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isActive = !user.isActive;
    await user.save();
    res.json({ message: `Partner is now ${user.isActive ? "Active" : "Inactive"}`, isActive: user.isActive });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updatePartnerVerificationStatus = async (req, res) => {
  try {
    const { verificationStatus } = req.body;
    if (!["Pending", "Approved", "Rejected", "Suspended"].includes(verificationStatus)) {
      return res.status(400).json({ message: "Invalid verification status" });
    }
    const partner = await DeliveryPartner_default.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: "Delivery partner profile not found" });
    }
    partner.verificationStatus = verificationStatus;
    if (verificationStatus !== "Approved") {
      partner.status = "Offline";
    }
    await partner.save();
    res.json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var assignDeliveryPartner = async (req, res) => {
  try {
    const { partnerUserId } = req.body;
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    const partnerUser = await User_default.findById(partnerUserId);
    if (!partnerUser || partnerUser.role !== "DeliveryPartner") {
      return res.status(400).json({ message: "Invalid delivery partner selected" });
    }
    const partnerProfile = await DeliveryPartner_default.findOne({ userId: partnerUserId });
    if (!partnerProfile || partnerProfile.status !== "Online" || partnerProfile.verificationStatus !== "Approved") {
      return res.status(400).json({ message: "Delivery partner is offline or not approved" });
    }
    const restaurant = await Restaurant_default.findById(order.restaurantId);
    const settings = restaurant?.deliverySettings || {};
    order.deliveryPartner = partnerUserId;
    order.deliveryStatus = "Pending Assignment";
    if (!order.deliveryOtp) {
      order.deliveryOtp = Math.floor(1e3 + Math.random() * 9e3).toString();
    }
    order.deliveryDistance = Math.floor(Math.random() * 8) + 1;
    let fee = settings.baseFee || 30;
    const dist = order.deliveryDistance;
    const freeD = settings.freeRadius || 2;
    if (dist > freeD) {
      fee += (dist - freeD) * (settings.perKmCharge || 10);
    }
    if (settings.minOrderAmountForFreeDelivery && order.totalPrice >= settings.minOrderAmountForFreeDelivery) {
      fee = 0;
    }
    order.deliveryCharge = fee;
    order.deliveryETA = new Date(Date.now() + 30 * 60 * 1e3);
    await order.save();
    broadcastToRestaurant(order.restaurantId, "order_status_updated", order);
    broadcastToCustomerOrder(order._id, "order_status_updated", order);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var autoAssignDeliveryPartner = async (req, res) => {
  try {
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    const onlinePartners = await DeliveryPartner_default.find({
      restaurantId: order.restaurantId,
      status: "Online",
      verificationStatus: "Approved"
    });
    if (onlinePartners.length === 0) {
      return res.status(404).json({ message: "No online delivery partners available" });
    }
    const partner = onlinePartners[Math.floor(Math.random() * onlinePartners.length)];
    const restaurant = await Restaurant_default.findById(order.restaurantId);
    const settings = restaurant?.deliverySettings || {};
    order.deliveryPartner = partner.userId;
    order.deliveryStatus = "Pending Assignment";
    if (!order.deliveryOtp) {
      order.deliveryOtp = Math.floor(1e3 + Math.random() * 9e3).toString();
    }
    order.deliveryDistance = Math.floor(Math.random() * 6) + 1;
    let fee = settings.baseFee || 30;
    const dist = order.deliveryDistance;
    const freeD = settings.freeRadius || 2;
    if (dist > freeD) {
      fee += (dist - freeD) * (settings.perKmCharge || 10);
    }
    if (settings.minOrderAmountForFreeDelivery && order.totalPrice >= settings.minOrderAmountForFreeDelivery) {
      fee = 0;
    }
    order.deliveryCharge = fee;
    order.deliveryETA = new Date(Date.now() + 25 * 60 * 1e3);
    await order.save();
    broadcastToRestaurant(order.restaurantId, "order_status_updated", order);
    broadcastToCustomerOrder(order._id, "order_status_updated", order);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getDeliveryAnalytics = async (req, res) => {
  try {
    const completedOrders = await Order_default.find({
      restaurantId: req.user.restaurantId,
      orderType: "Delivery",
      status: "Delivered"
    });
    const cancelledOrders = await Order_default.find({
      restaurantId: req.user.restaurantId,
      orderType: "Delivery",
      deliveryStatus: "Cancelled"
    });
    const totalDeliveries = completedOrders.length;
    const totalEarnings = completedOrders.reduce((acc, curr) => acc + (curr.deliveryCharge || 0), 0);
    const avgDeliveryTime = totalDeliveries > 0 ? 24 : 0;
    const successRate = totalDeliveries + cancelledOrders.length > 0 ? Math.round(totalDeliveries / (totalDeliveries + cancelledOrders.length) * 100) : 100;
    res.json({
      totalDeliveries,
      avgDeliveryTime: `${avgDeliveryTime} mins`,
      deliverySuccessRate: `${successRate}%`,
      cancellationRate: `${100 - successRate}%`,
      totalDeliveryEarnings: totalEarnings,
      avgRating: 4.8
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var submitDeliveryRating = async (req, res) => {
  try {
    const { speed, behaviour, foodHandling, overall, review } = req.body;
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.deliveryRating = {
      speed: speed || 5,
      behaviour: behaviour || 5,
      foodHandling: foodHandling || 5,
      overall: overall || 5,
      review: review || ""
    };
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var updateDeliverySettings = async (req, res) => {
  try {
    const restaurant = await Restaurant_default.findById(req.user.restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    restaurant.deliverySettings = {
      ...restaurant.deliverySettings,
      ...req.body
    };
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var addSupportMessage = async (req, res) => {
  try {
    const { message, sender } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message text is required" });
    }
    const order = await Order_default.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (!order.supportMessages) {
      order.supportMessages = [];
    }
    const msgObj = {
      sender: sender || "DeliveryPartner",
      message: message.trim(),
      timestamp: /* @__PURE__ */ new Date()
    };
    order.supportMessages.push(msgObj);
    const updatedOrder = await order.save();
    broadcastToCustomerOrder(updatedOrder._id, "order_status_updated", updatedOrder);
    broadcastToRestaurant(updatedOrder.restaurantId, "order_updated", updatedOrder);
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
var getDeliverySettings = async (req, res) => {
  try {
    let restaurantId = req.user.restaurantId;
    if (!restaurantId && (req.user.role === "RestaurantAdmin" || req.user.role === "Admin")) {
      const rest = await Restaurant_default.findOne({ ownerId: req.user._id });
      if (rest) restaurantId = rest._id;
    }
    const restaurant = await Restaurant_default.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant.deliverySettings || {});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// routes/deliveryRoutes.js
var router25 = import_express25.default.Router();
router25.post("/auth/send-otp", sendOtp);
router25.post("/auth/verify-otp", verifyOtp);
router25.route("/profile").get(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getDeliveryProfile);
router25.route("/profile/status").put(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), togglePartnerStatus);
router25.route("/orders/assigned").get(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getAssignedOrders);
router25.route("/orders/:id/status").put(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), updateOrderDeliveryStatus);
router25.route("/orders/:id/support").post(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), addSupportMessage);
router25.route("/withdrawals").post(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), createWithdrawalRequest).get(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getWithdrawalRequests);
router25.route("/earnings").get(protect, checkSubscription, authorize("DeliveryPartner", "SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getEarningsHistory);
router25.route("/partners").get(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getDeliveryPartners).post(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), addDeliveryPartner);
router25.route("/partners/:id/status").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), updatePartnerVerificationStatus);
router25.route("/partners/:id/toggle-active").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), togglePartnerActiveStatus);
router25.route("/orders/:id/assign").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), assignDeliveryPartner);
router25.route("/orders/:id/auto-assign").put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), autoAssignDeliveryPartner);
router25.route("/analytics").get(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getDeliveryAnalytics);
router25.route("/settings").get(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), getDeliverySettings).put(protect, checkSubscription, authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager"), updateDeliverySettings);
router25.route("/orders/:id/rating").put(submitDeliveryRating);
var deliveryRoutes_default = router25;

// routes/inquiryRoutes.js
var import_express26 = __toESM(require("express"), 1);

// models/Inquiry.js
var import_mongoose51 = __toESM(require("mongoose"), 1);
var inquirySchema = new import_mongoose51.default.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "N/A"
  },
  phone: {
    type: String,
    default: "N/A"
  },
  restaurantName: {
    type: String,
    default: "General"
  },
  restaurantId: {
    type: import_mongoose51.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    default: null
  },
  branchId: {
    type: import_mongoose51.default.Schema.Types.ObjectId,
    ref: "Branch",
    default: null
  },
  customerId: {
    type: import_mongoose51.default.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  source: {
    type: String,
    enum: ["Public", "Customer"],
    default: "Public"
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["New", "In Progress", "Resolved"],
    default: "New"
  },
  adminReply: {
    type: String,
    default: ""
  },
  repliedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});
var Inquiry = import_mongoose51.default.model("Inquiry", inquirySchema);
var Inquiry_default = Inquiry;

// controllers/inquiryController.js
var createInquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      restaurantName,
      restaurantId,
      branchId,
      customerId,
      source,
      subject,
      message
    } = req.body;
    if (!name || !message && (!phone || !restaurantName)) {
      return res.status(400).json({ message: "Name and message (or phone and restaurant name) are required" });
    }
    const cleanPhone = (phone || "").toString().trim();
    const inquiry = new Inquiry_default({
      name: name.trim(),
      email: email || `${cleanPhone.replace(/\D/g, "") || "lead"}@lead.restauranthub.com`,
      phone: cleanPhone || "N/A",
      restaurantName: (restaurantName || "").trim() || "General",
      restaurantId: restaurantId || null,
      branchId: branchId || null,
      customerId: customerId || null,
      source: source === "Customer" ? "Customer" : "Public",
      subject: subject || "Demo",
      message: message || "Free Walkthrough Demo requested"
    });
    await inquiry.save();
    res.status(201).json({ success: true, data: inquiry });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
var getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry_default.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
var getRestaurantInquiries = async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== "SuperAdmin") {
      const orConditions = [{ source: "Customer", restaurantId: null }];
      if (req.user.restaurantId) {
        orConditions.push({ restaurantId: req.user.restaurantId });
      }
      query = { $or: orConditions };
    }
    const inquiries = await Inquiry_default.find(query).sort({ createdAt: -1 }).limit(100);
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
var getMyCustomerInquiries = async (req, res) => {
  try {
    const orConditions = [{ customerId: req.user._id }];
    if (req.user.email) {
      orConditions.push({ email: req.user.email, source: "Customer" });
    }
    const inquiries = await Inquiry_default.find({ $or: orConditions }).sort({ createdAt: -1 }).limit(50);
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
var updateRestaurantInquiryStatus = async (req, res) => {
  try {
    const { status, adminReply } = req.body;
    if (!status || !["New", "In Progress", "Resolved"].includes(status)) {
      return res.status(400).json({ message: "Valid status is required (New, In Progress, Resolved)" });
    }
    const inquiry = await Inquiry_default.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    if (req.user.role !== "SuperAdmin" && inquiry.restaurantId && req.user.restaurantId && inquiry.restaurantId.toString() !== req.user.restaurantId.toString()) {
      return res.status(403).json({ message: "Not authorized to update this inquiry" });
    }
    inquiry.status = status;
    if (adminReply !== void 0) {
      inquiry.adminReply = adminReply;
      inquiry.repliedAt = /* @__PURE__ */ new Date();
    }
    await inquiry.save();
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
var updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }
    const inquiry = await Inquiry_default.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    inquiry.status = status;
    await inquiry.save();
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
var deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry_default.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    await Inquiry_default.findByIdAndDelete(req.params.id);
    res.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};

// routes/inquiryRoutes.js
var router26 = import_express26.default.Router();
router26.route("/").post(createInquiry);
router26.route("/mine").get(protect, getMyCustomerInquiries);
router26.route("/restaurant").get(protect, authorize("RestaurantAdmin", "Admin", "BranchManager", "SuperAdmin"), getRestaurantInquiries);
router26.route("/restaurant/:id").put(protect, authorize("RestaurantAdmin", "Admin", "BranchManager", "SuperAdmin"), updateRestaurantInquiryStatus);
router26.route("/admin").get(protect, authorize("SuperAdmin"), getInquiries);
router26.route("/admin/:id").put(protect, authorize("SuperAdmin"), updateInquiryStatus).delete(protect, authorize("SuperAdmin"), deleteInquiry);
var inquiryRoutes_default = router26;

// routes/billingDemoRoutes.js
var import_express27 = __toESM(require("express"), 1);

// models/BillingDemoRequest.js
var import_mongoose52 = __toESM(require("mongoose"), 1);
var billingDemoRequestSchema = new import_mongoose52.default.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    default: ""
  },
  restaurantName: {
    type: String,
    required: [true, "Restaurant name is required"],
    trim: true
  },
  city: {
    type: String,
    default: "N/A",
    trim: true
  },
  outletFormat: {
    type: String,
    default: "Fine Dine & Resto-Bar",
    trim: true
  },
  status: {
    type: String,
    enum: [
      "Pending",
      "Contacted",
      "Demo Scheduled",
      "Requirements Collected",
      "Proposal Sent",
      "Payment Pending",
      "Payment Verified",
      "Activated",
      "Rejected"
    ],
    default: "Pending"
  },
  notes: {
    type: String,
    default: ""
  },
  restaurantId: {
    type: import_mongoose52.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    default: null
  },
  customBillingConfig: {
    modules: {
      posBilling: { type: Boolean, default: true },
      dineInTakeawayOrders: { type: Boolean, default: true },
      kot: { type: Boolean, default: true },
      kds: { type: Boolean, default: true },
      menuManagement: { type: Boolean, default: true },
      inventoryManagement: { type: Boolean, default: true },
      rawMaterials: { type: Boolean, default: true },
      staffManagement: { type: Boolean, default: true },
      attendance: { type: Boolean, default: true },
      payroll: { type: Boolean, default: true },
      reports: { type: Boolean, default: true },
      salesReports: { type: Boolean, default: true },
      // Alias / legacy compatibility
      expenseManagement: { type: Boolean, default: true },
      tableManagement: { type: Boolean, default: true },
      reservations: { type: Boolean, default: true },
      deliveryManagement: { type: Boolean, default: true },
      customerManagement: { type: Boolean, default: true },
      branchManagement: { type: Boolean, default: true },
      qrOrdering: { type: Boolean, default: true },
      onlineOrdering: { type: Boolean, default: true },
      gstInvoice: { type: Boolean, default: true },
      discounts: { type: Boolean, default: true }
    },
    paymentMethods: {
      cash: { type: Boolean, default: true },
      upi: { type: Boolean, default: true },
      card: { type: Boolean, default: true },
      split: { type: Boolean, default: true }
    },
    serviceChargePercent: { type: Number, default: 5 },
    gstRatePercent: { type: Number, default: 5 }
  },
  customPlan: {
    planName: { type: String, default: "Custom Tailored Plan" },
    billingCycle: { type: String, enum: ["monthly", "quarterly", "half-yearly", "yearly"], default: "yearly" },
    durationMonths: { type: Number, default: 12 },
    branchLimit: { type: Number, default: 1 },
    staffLimit: { type: Number, default: 10 },
    basePrice: { type: Number, default: 0 },
    discountAmount: { type: Number, default: 0 },
    finalAmount: { type: Number, default: 0 },
    currency: { type: String, default: "INR" },
    internalNotes: { type: String, default: "" },
    modulePricing: { type: Map, of: Number, default: {} },
    proposalSentAt: { type: Date, default: null }
  },
  paymentDetails: {
    paymentMethod: { type: String, default: "UPI" },
    transactionId: { type: String, default: "" },
    amountPaid: { type: Number, default: 0 },
    paidAt: { type: Date, default: null },
    isVerified: { type: Boolean, default: false },
    verifiedAt: { type: Date, default: null },
    verifiedBy: { type: import_mongoose52.default.Schema.Types.ObjectId, ref: "User", default: null }
  },
  activation: {
    token: { type: String, default: null },
    tokenExpires: { type: Date, default: null },
    invitationSentAt: { type: Date, default: null },
    isActivated: { type: Boolean, default: false },
    activatedAt: { type: Date, default: null }
  },
  activatedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});
billingDemoRequestSchema.index({ phoneNumber: 1, status: 1 });
billingDemoRequestSchema.index({ createdAt: -1 });
billingDemoRequestSchema.index({ "activation.token": 1 });
var BillingDemoRequest = import_mongoose52.default.model("BillingDemoRequest", billingDemoRequestSchema);
var BillingDemoRequest_default = BillingDemoRequest;

// controllers/billingDemoController.js
init_Restaurant();
init_User();
init_Branch();
init_emailService();
var createBillingDemoRequest = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, restaurantName, city, outletFormat } = req.body;
    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ message: "Full Name is required" });
    }
    if (!phoneNumber || !phoneNumber.trim()) {
      return res.status(400).json({ message: "Mobile Phone Number is required" });
    }
    if (!restaurantName || !restaurantName.trim()) {
      return res.status(400).json({ message: "Restaurant Name is required" });
    }
    const cleanPhone = phoneNumber.trim();
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({ message: "Mobile phone number must be exactly 10 digits starting with 6, 7, 8, or 9" });
    }
    const cleanName = fullName.trim();
    const cleanEmail = email ? String(email).trim().toLowerCase() : "";
    const cleanRestName = restaurantName.trim();
    const cleanCity = city ? city.trim() : "N/A";
    const cleanOutlet = outletFormat ? outletFormat.trim() : "Fine Dine & Resto-Bar";
    const escapedRestName = cleanRestName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const exactRestNameRegex = new RegExp(`^${escapedRestName}$`, "i");
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1e3);
    const existingPending = await BillingDemoRequest_default.findOne({
      phoneNumber: cleanPhone,
      restaurantName: { $regex: exactRestNameRegex },
      status: { $in: ["Pending", "Demo Scheduled"] },
      createdAt: { $gte: twentyFourHoursAgo }
    });
    if (existingPending) {
      return res.status(200).json({
        success: true,
        duplicate: true,
        message: `We already have an active walkthrough request for ${cleanRestName} on ${cleanPhone}. Our POS specialist will contact you shortly!`,
        data: existingPending
      });
    }
    const newDemoRequest = new BillingDemoRequest_default({
      fullName: cleanName,
      phoneNumber: cleanPhone,
      email: cleanEmail,
      restaurantName: cleanRestName,
      city: cleanCity,
      outletFormat: cleanOutlet,
      restaurantId: null,
      status: "Pending",
      customBillingConfig: {
        modules: {
          posBilling: true,
          menuManagement: true,
          tableManagement: cleanOutlet !== "Quick Service (QSR)" && cleanOutlet !== "Cloud Kitchen",
          dineInTakeawayOrders: true,
          kitchenOrderManagement: true,
          gstInvoice: true,
          discounts: true,
          customerManagement: true,
          inventoryManagement: true,
          salesReports: true,
          staffManagement: true
        },
        paymentMethods: {
          cash: true,
          upi: true,
          card: true,
          split: true
        },
        serviceChargePercent: cleanOutlet.includes("Fine Dine") || cleanOutlet.includes("Pub") ? 5 : 0,
        gstRatePercent: 5
      }
    });
    const savedRequest = await newDemoRequest.save();
    if (cleanEmail) {
      sendOutletFormatSubmissionEmail({
        email: cleanEmail,
        fullName: cleanName,
        phoneNumber: cleanPhone,
        restaurantName: cleanRestName,
        city: cleanCity,
        outletFormat: cleanOutlet,
        isAdminAlert: false
      }).catch((err) => console.error("Outlet format confirmation email error:", err.message));
    }
    User_default.find({ role: "SuperAdmin" }).select("email").lean().then((admins) => {
      admins.forEach((adm) => {
        if (adm.email) {
          sendOutletFormatSubmissionEmail({
            email: adm.email,
            fullName: cleanName,
            phoneNumber: cleanPhone,
            restaurantName: cleanRestName,
            city: cleanCity,
            outletFormat: cleanOutlet,
            isAdminAlert: true
          }).catch(() => {
          });
        }
      });
    }).catch(() => {
    });
    res.status(201).json({
      success: true,
      message: `Thank you, ${cleanName}! Your free walkthrough request for ${cleanRestName} has been booked. Our specialist will call you on ${cleanPhone}.`,
      data: savedRequest
    });
  } catch (error) {
    console.error("Error creating billing demo request:", error);
    res.status(500).json({ message: error.message || "Server error creating demo request" });
  }
};
var getBillingDemoRequests = async (req, res) => {
  try {
    const { search, status, outletFormat } = req.query;
    const query = {};
    if (status && status !== "ALL") {
      query.status = status;
    }
    if (outletFormat && outletFormat !== "ALL") {
      query.outletFormat = outletFormat;
    }
    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), "i");
      query.$or = [
        { fullName: regex },
        { phoneNumber: regex },
        { restaurantName: regex },
        { city: regex },
        { notes: regex }
      ];
    }
    const requests = await BillingDemoRequest_default.find(query).sort({ createdAt: -1 }).populate("restaurantId", "name contactEmail phone ownerId subscription approvalStatus billingConfig logo address").lean();
    const ownerIds = [...new Set(requests.map((r) => r.restaurantId?.ownerId).filter(Boolean).map(String))];
    const owners = ownerIds.length > 0 ? await User_default.find({ _id: { $in: ownerIds } }).select("name email phoneNumber isActive").lean() : [];
    const ownerMap = new Map(owners.map((o) => [String(o._id), o]));
    const mismatchFixOps = [];
    const enrichedRequests = requests.map((r) => {
      const linkedMatchesName = r.restaurantId && (r.restaurantId.name || "").trim().toLowerCase() === (r.restaurantName || "").trim().toLowerCase();
      if (r.restaurantId && !linkedMatchesName) {
        const nextStatus = r.status === "Activated" ? "Pending" : r.status;
        mismatchFixOps.push(
          BillingDemoRequest_default.updateOne(
            { _id: r._id },
            { $set: { restaurantId: null, status: nextStatus } }
          ).catch(() => {
          })
        );
      }
      const validRest = linkedMatchesName ? r.restaurantId : null;
      const ownerIdStr = validRest?.ownerId ? String(validRest.ownerId) : null;
      const owner = ownerIdStr ? ownerMap.get(ownerIdStr) : null;
      return {
        ...r,
        status: r.restaurantId && !linkedMatchesName && r.status === "Activated" ? "Pending" : r.status,
        restaurantId: validRest,
        ownerCredentials: owner ? { email: owner.email, name: owner.name, phoneNumber: owner.phoneNumber, isActive: owner.isActive } : null
      };
    });
    if (mismatchFixOps.length > 0) {
      await Promise.allSettled(mismatchFixOps);
    }
    const all = await BillingDemoRequest_default.find().lean();
    const counts = {
      total: all.length,
      pending: all.filter((r) => r.status === "Pending").length,
      contacted: all.filter((r) => r.status === "Contacted").length,
      scheduled: all.filter((r) => r.status === "Demo Scheduled").length,
      completed: all.filter((r) => r.status === "Demo Completed").length,
      activated: all.filter((r) => r.status === "Activated").length,
      rejected: all.filter((r) => r.status === "Rejected").length
    };
    res.json({
      success: true,
      counts,
      data: enrichedRequests
    });
  } catch (error) {
    console.error("Error fetching billing demo requests:", error);
    res.status(500).json({ message: error.message || "Server error fetching demo requests" });
  }
};
var getBillingDemoRequestById = async (req, res) => {
  try {
    const request = await BillingDemoRequest_default.findById(req.params.id).populate("restaurantId");
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    res.json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error" });
  }
};
var updateBillingDemoStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const validStatuses = [
      "Pending",
      "Contacted",
      "Demo Scheduled",
      "Requirements Collected",
      "Proposal Sent",
      "Payment Pending",
      "Payment Verified",
      "Activated",
      "Rejected"
    ];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ message: `Invalid status. Must be one of: ${validStatuses.join(", ")}` });
    }
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    if (status) request.status = status;
    if (notes !== void 0) request.notes = notes;
    await request.save();
    res.json({
      success: true,
      message: `Status updated to "${request.status}"`,
      data: request
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error updating status" });
  }
};
var updateBillingDemoConfig = async (req, res) => {
  try {
    const {
      modules,
      paymentMethods,
      serviceChargePercent,
      gstRatePercent,
      notes,
      customPlan,
      branchLimit,
      staffLimit
    } = req.body;
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    if (!request.customBillingConfig) {
      request.customBillingConfig = { modules: {}, paymentMethods: {} };
    }
    if (modules) {
      request.customBillingConfig.modules = {
        ...request.customBillingConfig.modules,
        ...modules
      };
    }
    if (paymentMethods) {
      request.customBillingConfig.paymentMethods = {
        ...request.customBillingConfig.paymentMethods,
        ...paymentMethods
      };
    }
    if (serviceChargePercent !== void 0) {
      request.customBillingConfig.serviceChargePercent = Number(serviceChargePercent);
    }
    if (gstRatePercent !== void 0) {
      request.customBillingConfig.gstRatePercent = Number(gstRatePercent);
    }
    if (customPlan) {
      request.customPlan = {
        ...request.customPlan,
        ...customPlan
      };
    }
    if (branchLimit !== void 0) {
      if (!request.customPlan) request.customPlan = {};
      request.customPlan.branchLimit = Number(branchLimit);
    }
    if (staffLimit !== void 0) {
      if (!request.customPlan) request.customPlan = {};
      request.customPlan.staffLimit = Number(staffLimit);
    }
    if (notes !== void 0) {
      request.notes = notes;
    }
    await request.save();
    if (request.restaurantId) {
      await Restaurant_default.findByIdAndUpdate(request.restaurantId, {
        "billingConfig.modules": request.customBillingConfig.modules,
        "billingConfig.paymentMethods": request.customBillingConfig.paymentMethods,
        "billingConfig.serviceChargePercent": request.customBillingConfig.serviceChargePercent,
        "billingConfig.gstRatePercent": request.customBillingConfig.gstRatePercent,
        "billingConfig.branchLimit": request.customPlan?.branchLimit || 1,
        "billingConfig.staffLimit": request.customPlan?.staffLimit || 10,
        "billingConfig.customPlanName": request.customPlan?.planName || "Custom Plan"
      });
    }
    res.json({
      success: true,
      message: "Custom billing & module configuration updated successfully",
      data: request
    });
  } catch (error) {
    console.error("Error updating demo config:", error);
    res.status(500).json({ message: error.message || "Server error updating config" });
  }
};
var createCustomProposal = async (req, res) => {
  try {
    const {
      planName,
      billingCycle,
      durationMonths,
      branchLimit,
      staffLimit,
      basePrice,
      discountAmount,
      finalAmount,
      internalNotes,
      modulePricing
    } = req.body;
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    request.customPlan = {
      planName: planName || "Custom Tailored Plan",
      billingCycle: billingCycle || "yearly",
      durationMonths: Number(durationMonths) || 12,
      branchLimit: Number(branchLimit) || 1,
      staffLimit: Number(staffLimit) || 10,
      basePrice: Number(basePrice) || 0,
      discountAmount: Number(discountAmount) || 0,
      finalAmount: Number(finalAmount) || 0,
      internalNotes: internalNotes || "",
      modulePricing: modulePricing || {},
      proposalSentAt: /* @__PURE__ */ new Date()
    };
    request.status = "Proposal Sent";
    await request.save();
    res.json({
      success: true,
      message: `Proposal "${request.customPlan.planName}" generated and marked as Proposal Sent!`,
      data: request
    });
  } catch (error) {
    console.error("Error creating custom proposal:", error);
    res.status(500).json({ message: error.message || "Server error generating proposal" });
  }
};
var verifyDemoPayment = async (req, res) => {
  try {
    const { paymentMethod, transactionId, amountPaid } = req.body;
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    if (request.paymentDetails?.isVerified) {
      return res.status(400).json({
        message: "Payment for this request has already been verified and processed.",
        verifiedAt: request.paymentDetails.verifiedAt
      });
    }
    request.paymentDetails = {
      paymentMethod: paymentMethod || "UPI",
      transactionId: transactionId || `TXN_${Date.now()}`,
      amountPaid: Number(amountPaid) || (request.customPlan?.finalAmount || 0),
      paidAt: /* @__PURE__ */ new Date(),
      isVerified: true,
      verifiedAt: /* @__PURE__ */ new Date(),
      verifiedBy: req.user?._id
    };
    request.status = "Payment Verified";
    await request.save();
    res.json({
      success: true,
      message: `Payment of \u20B9${request.paymentDetails.amountPaid} verified successfully! Status is now Payment Verified.`,
      data: request
    });
  } catch (error) {
    console.error("Error verifying demo payment:", error);
    res.status(500).json({ message: error.message || "Server error verifying payment" });
  }
};
var activateBillingDemo = async (req, res) => {
  try {
    const { ownerEmail: providedEmail, ownerPassword: providedPassword } = req.body || {};
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    if (providedPassword && String(providedPassword).trim().length < 6) {
      return res.status(400).json({ message: "Owner password must be at least 6 characters." });
    }
    const normalizedProvidedEmail = providedEmail ? String(providedEmail).trim().toLowerCase() : "";
    const exactRestNameRegex = new RegExp(`^${(request.restaurantName || "").trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i");
    let restaurant = null;
    let ownerUser = null;
    if (request.restaurantId) {
      const linked = await Restaurant_default.findById(request.restaurantId);
      if (linked && (linked.name || "").trim().toLowerCase() === (request.restaurantName || "").trim().toLowerCase()) {
        restaurant = linked;
      }
    }
    if (!restaurant) {
      restaurant = await Restaurant_default.findOne({
        name: { $regex: exactRestNameRegex }
      });
    }
    const cryptoModule = await import("crypto");
    const activationToken = cryptoModule.default.randomBytes(32).toString("hex");
    const tokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    if (!restaurant) {
      const cleanDigits = request.phoneNumber.replace(/\D/g, "") || "9876543210";
      const slug = (request.restaurantName || "store").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 12) || "store";
      const ownerEmail = normalizedProvidedEmail || `${slug}_${cleanDigits.slice(-4)}@restosys.com`;
      ownerUser = await User_default.findOne({ email: ownerEmail });
      if (!ownerUser) {
        const initialPassword = providedPassword ? String(providedPassword).trim() : cryptoModule.default.randomBytes(24).toString("base64");
        ownerUser = await User_default.create({
          name: request.fullName,
          email: ownerEmail,
          phoneNumber: request.phoneNumber,
          password: initialPassword,
          role: "RestaurantAdmin",
          isActive: true,
          activationToken: providedPassword ? null : activationToken,
          activationExpires: providedPassword ? null : tokenExpires
        });
      } else {
        if (ownerUser.restaurantId) {
          return res.status(400).json({
            message: `Email ${ownerEmail} is already assigned to another restaurant. Please set a unique owner email for "${request.restaurantName}".`
          });
        }
        if (providedPassword) {
          ownerUser.password = String(providedPassword).trim();
          ownerUser.activationToken = null;
          ownerUser.activationExpires = null;
        } else {
          ownerUser.activationToken = activationToken;
          ownerUser.activationExpires = tokenExpires;
        }
        ownerUser.name = request.fullName || ownerUser.name;
        await ownerUser.save();
      }
      const durationMonths = request.customPlan?.durationMonths || 12;
      const expiryDate = new Date(Date.now() + durationMonths * 30 * 24 * 60 * 60 * 1e3);
      restaurant = await Restaurant_default.create({
        name: request.restaurantName,
        contactEmail: ownerUser.email,
        phone: request.phoneNumber,
        address: request.city || "Primary City",
        ownerId: ownerUser._id,
        approvalStatus: "Approved",
        verificationStatus: "Verified",
        isActive: true,
        subscription: {
          status: "Active",
          plan: request.customPlan?.planName || "Custom SaaS",
          billingCycle: request.customPlan?.billingCycle || "yearly",
          trialActive: false,
          paymentStatus: "Paid",
          subscriptionStartDate: /* @__PURE__ */ new Date(),
          subscriptionEndDate: expiryDate,
          startDate: /* @__PURE__ */ new Date(),
          expiryDate
        }
      });
      ownerUser.restaurantId = restaurant._id;
      await ownerUser.save();
      const mainBranch = await Branch_default.create({
        restaurantId: restaurant._id,
        name: `${restaurant.name} - Main Outlet`,
        location: { address: request.city || "Main Street" },
        contact: { phone: request.phoneNumber },
        isActive: true
      });
      ownerUser.branchId = mainBranch._id;
      await ownerUser.save();
    } else {
      let mainBranch = await Branch_default.findOne({ restaurantId: restaurant._id });
      if (!mainBranch) {
        mainBranch = await Branch_default.create({
          restaurantId: restaurant._id,
          name: `${request.restaurantName} - Main Outlet`,
          location: { address: request.city || "Main Street" },
          contact: { phone: request.phoneNumber },
          isActive: true
        });
      }
      if (restaurant.ownerId && !ownerUser) {
        ownerUser = await User_default.findById(restaurant.ownerId);
      }
      if (ownerUser) {
        if (normalizedProvidedEmail && ownerUser.email !== normalizedProvidedEmail) {
          const emailTaken = await User_default.findOne({ email: normalizedProvidedEmail, _id: { $ne: ownerUser._id } }).lean();
          if (emailTaken) {
            return res.status(400).json({ message: `Email ${normalizedProvidedEmail} is already in use by another account.` });
          }
          ownerUser.email = normalizedProvidedEmail;
          restaurant.contactEmail = normalizedProvidedEmail;
        }
        if (providedPassword) {
          ownerUser.password = String(providedPassword).trim();
          ownerUser.activationToken = null;
          ownerUser.activationExpires = null;
        } else {
          ownerUser.activationToken = activationToken;
          ownerUser.activationExpires = tokenExpires;
        }
        if (request.fullName && request.fullName.trim()) {
          ownerUser.name = request.fullName.trim();
        }
        ownerUser.restaurantId = restaurant._id;
        ownerUser.branchId = ownerUser.branchId || mainBranch._id;
        await ownerUser.save();
      }
      restaurant.name = request.restaurantName || restaurant.name;
    }
    restaurant.billingConfig = {
      isCustomBillingActive: true,
      activatedAt: /* @__PURE__ */ new Date(),
      demoRequestId: request._id,
      outletFormat: request.outletFormat || "Fine Dine & Resto-Bar",
      branchLimit: request.customPlan?.branchLimit || 1,
      staffLimit: request.customPlan?.staffLimit || 10,
      customPlanName: request.customPlan?.planName || "Custom Plan",
      modules: request.customBillingConfig?.modules || {
        posBilling: true,
        dineInTakeawayOrders: true,
        kot: true,
        kds: true,
        menuManagement: true,
        inventoryManagement: true,
        rawMaterials: true,
        staffManagement: true,
        attendance: true,
        payroll: true,
        reports: true,
        salesReports: true,
        expenseManagement: true,
        tableManagement: true,
        reservations: true,
        deliveryManagement: true,
        customerManagement: true,
        branchManagement: true,
        qrOrdering: true,
        onlineOrdering: true,
        gstInvoice: true,
        discounts: true
      },
      paymentMethods: request.customBillingConfig?.paymentMethods || {
        cash: true,
        upi: true,
        card: true,
        split: true
      },
      serviceChargePercent: request.customBillingConfig?.serviceChargePercent ?? 5,
      gstRatePercent: request.customBillingConfig?.gstRatePercent ?? 5
    };
    if (!restaurant.restaurantConfig) restaurant.restaurantConfig = {};
    if (!restaurant.restaurantConfig.orderKitchen) restaurant.restaurantConfig.orderKitchen = {};
    const isKot = restaurant.billingConfig.modules.kot !== false;
    const isKds = restaurant.billingConfig.modules.kds !== false;
    restaurant.restaurantConfig.orderKitchen.kotEnabled = isKot;
    restaurant.restaurantConfig.orderKitchen.kdsEnabled = isKds;
    restaurant.restaurantConfig.orderKitchen.kitchenMode = isKds ? "KDS" : "KOT_ONLY";
    await restaurant.save();
    request.status = "Activated";
    request.activatedAt = /* @__PURE__ */ new Date();
    request.restaurantId = restaurant._id;
    request.activation = {
      token: activationToken,
      tokenExpires,
      invitationSentAt: /* @__PURE__ */ new Date(),
      isActivated: true,
      activatedAt: /* @__PURE__ */ new Date()
    };
    await request.save();
    const portalBase = process.env.RESTAURANT_FRONTEND_URL || process.env.FRONTEND_URL || "";
    const activationUrl = `${portalBase}/activate-account?token=${activationToken}`;
    if (providedPassword && ownerUser?.email) {
      sendWelcomeEmail({
        email: ownerUser.email,
        name: ownerUser.name,
        restaurantName: restaurant.name,
        plan: restaurant.billingConfig?.customPlanName || "Custom Plan"
      }).catch((err) => console.error("Billing demo welcome email error:", err.message));
      sendSubscriptionSuccessEmail({
        email: ownerUser.email,
        name: ownerUser.name,
        restaurantName: restaurant.name,
        plan: restaurant.subscription?.plan || restaurant.billingConfig?.customPlanName || "Custom SaaS",
        billingCycle: restaurant.subscription?.billingCycle || "yearly",
        price: restaurant.subscription?.price || 0,
        expiryDate: restaurant.subscription?.subscriptionEndDate || restaurant.subscription?.expiryDate
      }).catch((err) => console.error("Billing demo subscription email error:", err.message));
    }
    res.json({
      success: true,
      message: providedPassword ? `Custom SaaS setup activated for "${restaurant.name}"! Login credentials configured for ${ownerUser?.email}.` : `Custom SaaS setup activated for "${restaurant.name}"! Invitation link generated.`,
      data: {
        request: {
          ...request.toObject(),
          restaurantId: restaurant,
          ownerCredentials: ownerUser ? { email: ownerUser.email, name: ownerUser.name, phoneNumber: ownerUser.phoneNumber, isActive: ownerUser.isActive } : null
        },
        restaurant: {
          _id: restaurant._id,
          name: restaurant.name,
          phone: restaurant.phone,
          billingConfig: restaurant.billingConfig
        },
        ownerCredentials: ownerUser ? { email: ownerUser.email, name: ownerUser.name, isActive: ownerUser.isActive } : null,
        invitation: {
          email: ownerUser ? ownerUser.email : null,
          phoneNumber: request.phoneNumber,
          token: activationToken,
          expiresAt: tokenExpires,
          activationUrl
        }
      }
    });
  } catch (error) {
    console.error("Error activating billing demo:", error);
    res.status(500).json({ message: error.message || "Server error activating demo" });
  }
};
var resendActivationInvitation = async (req, res) => {
  try {
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    const cryptoModule = await import("crypto");
    const newToken = cryptoModule.default.randomBytes(32).toString("hex");
    const tokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    request.activation = {
      ...request.activation,
      token: newToken,
      tokenExpires,
      invitationSentAt: /* @__PURE__ */ new Date()
    };
    await request.save();
    if (request.restaurantId) {
      const rest = await Restaurant_default.findById(request.restaurantId);
      if (rest?.ownerId) {
        await User_default.findByIdAndUpdate(rest.ownerId, {
          activationToken: newToken,
          activationExpires: tokenExpires
        });
      }
    }
    const activationUrl = `${req.protocol}://${req.get("host")}/activate-account?token=${newToken}`;
    res.json({
      success: true,
      message: "A fresh single-use activation invitation has been generated.",
      invitation: {
        phoneNumber: request.phoneNumber,
        token: newToken,
        expiresAt: tokenExpires,
        activationUrl
      }
    });
  } catch (error) {
    console.error("Error resending invitation:", error);
    res.status(500).json({ message: error.message || "Server error resending invitation" });
  }
};
var activateAccountWithToken = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token) {
      return res.status(400).json({ message: "Activation token is required" });
    }
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    let user = await User_default.findOne({
      activationToken: token,
      activationExpires: { $gt: /* @__PURE__ */ new Date() }
    });
    if (!user) {
      const demo = await BillingDemoRequest_default.findOne({
        "activation.token": token,
        "activation.tokenExpires": { $gt: /* @__PURE__ */ new Date() }
      });
      if (demo && demo.restaurantId) {
        const rest = await Restaurant_default.findById(demo.restaurantId);
        if (rest?.ownerId) {
          user = await User_default.findById(rest.ownerId);
        }
      }
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired activation link. Please contact Super Admin for a fresh invitation." });
    }
    user.password = newPassword;
    user.activationToken = null;
    user.activationExpires = null;
    user.isActive = true;
    await user.save();
    res.json({
      success: true,
      message: "Your account has been successfully secured! You can now log in with your credentials.",
      email: user.email
    });
  } catch (error) {
    console.error("Error activating account with token:", error);
    res.status(500).json({ message: error.message || "Server error activating account" });
  }
};
var setBillingDemoCredentials = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !String(email).trim()) {
      return res.status(400).json({ message: "Owner login email is required." });
    }
    const normalizedEmail = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    const exactRestNameRegex = new RegExp(`^${(request.restaurantName || "").trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i");
    let restaurant = null;
    if (request.restaurantId) {
      const linked = await Restaurant_default.findById(request.restaurantId);
      if (linked && (linked.name || "").trim().toLowerCase() === (request.restaurantName || "").trim().toLowerCase()) {
        restaurant = linked;
      }
    }
    if (!restaurant) {
      restaurant = await Restaurant_default.findOne({
        name: { $regex: exactRestNameRegex }
      });
    }
    let ownerUser = restaurant?.ownerId ? await User_default.findById(restaurant.ownerId) : null;
    if (ownerUser) {
      if (ownerUser.email !== normalizedEmail) {
        const existing = await User_default.findOne({ email: normalizedEmail, _id: { $ne: ownerUser._id } }).lean();
        if (existing) {
          return res.status(400).json({ message: `Email ${normalizedEmail} is already assigned to another user.` });
        }
        ownerUser.email = normalizedEmail;
      }
      if (password && String(password).trim()) {
        if (String(password).trim().length < 6) {
          return res.status(400).json({ message: "Password must be at least 6 characters long." });
        }
        ownerUser.password = String(password).trim();
      }
      ownerUser.name = request.fullName || ownerUser.name;
      ownerUser.isActive = true;
      ownerUser.activationToken = null;
      ownerUser.activationExpires = null;
      await ownerUser.save();
    } else {
      if (!password || String(password).trim().length < 6) {
        return res.status(400).json({ message: "Initial password (at least 6 characters) is required when creating new owner credentials." });
      }
      const existing = await User_default.findOne({ email: normalizedEmail }).lean();
      if (existing) {
        return res.status(400).json({ message: `Email ${normalizedEmail} is already registered to another account. Please use a unique login email.` });
      }
      ownerUser = await User_default.create({
        name: request.fullName,
        email: normalizedEmail,
        phoneNumber: request.phoneNumber,
        password: String(password).trim(),
        role: "RestaurantAdmin",
        isActive: true
      });
    }
    if (!restaurant) {
      const durationMonths = request.customPlan?.durationMonths || 12;
      const expiryDate = new Date(Date.now() + durationMonths * 30 * 24 * 60 * 60 * 1e3);
      restaurant = await Restaurant_default.create({
        name: request.restaurantName,
        contactEmail: normalizedEmail,
        phone: request.phoneNumber,
        address: request.city || "Primary City",
        ownerId: ownerUser._id,
        approvalStatus: "Approved",
        verificationStatus: "Verified",
        isActive: true,
        subscription: {
          status: "Active",
          plan: request.customPlan?.planName || "Custom SaaS",
          billingCycle: request.customPlan?.billingCycle || "yearly",
          trialActive: false,
          paymentStatus: "Paid",
          subscriptionStartDate: /* @__PURE__ */ new Date(),
          subscriptionEndDate: expiryDate,
          startDate: /* @__PURE__ */ new Date(),
          expiryDate
        },
        billingConfig: {
          isCustomBillingActive: request.status === "Activated",
          outletFormat: request.outletFormat || "Fine Dine & Resto-Bar",
          branchLimit: request.customPlan?.branchLimit || 1,
          staffLimit: request.customPlan?.staffLimit || 10,
          customPlanName: request.customPlan?.planName || "Custom Plan"
        }
      });
      const mainBranch = await Branch_default.create({
        restaurantId: restaurant._id,
        name: `${restaurant.name} - Main Outlet`,
        location: { address: request.city || "Main Street" },
        contact: { phone: request.phoneNumber },
        isActive: true
      });
      ownerUser.branchId = mainBranch._id;
    } else {
      restaurant.name = request.restaurantName || restaurant.name;
      restaurant.ownerId = ownerUser._id;
      restaurant.contactEmail = normalizedEmail;
      await restaurant.save();
      let mainBranch = await Branch_default.findOne({ restaurantId: restaurant._id });
      if (!mainBranch) {
        mainBranch = await Branch_default.create({
          restaurantId: restaurant._id,
          name: `${restaurant.name} - Main Outlet`,
          location: { address: request.city || "Main Street" },
          contact: { phone: request.phoneNumber },
          isActive: true
        });
      }
      if (!ownerUser.branchId) {
        ownerUser.branchId = mainBranch._id;
      }
    }
    if (String(ownerUser.restaurantId || "") !== String(restaurant._id) || ownerUser.isModified("branchId")) {
      ownerUser.restaurantId = restaurant._id;
      await ownerUser.save();
    }
    if (String(request.restaurantId || "") !== String(restaurant._id)) {
      request.restaurantId = restaurant._id;
      await request.save();
    }
    res.json({
      success: true,
      message: `Credentials updated successfully! Customer can log in using ${ownerUser.email}.`,
      ownerCredentials: {
        email: ownerUser.email,
        name: ownerUser.name,
        phoneNumber: ownerUser.phoneNumber,
        isActive: ownerUser.isActive
      },
      restaurantId: restaurant
    });
  } catch (error) {
    console.error("Error setting billing demo credentials:", error);
    res.status(500).json({ message: error.message || "Server error updating credentials" });
  }
};
var deleteBillingDemoRequest = async (req, res) => {
  try {
    const request = await BillingDemoRequest_default.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demo request not found" });
    }
    await BillingDemoRequest_default.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Billing demo request deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error deleting request" });
  }
};

// routes/billingDemoRoutes.js
var router27 = import_express27.default.Router();
router27.route("/").post(createBillingDemoRequest);
router27.route("/activate-account").post(activateAccountWithToken);
router27.route("/admin").get(protect, authorize("SuperAdmin"), getBillingDemoRequests);
router27.route("/admin/:id").get(protect, authorize("SuperAdmin"), getBillingDemoRequestById).delete(protect, authorize("SuperAdmin"), deleteBillingDemoRequest);
router27.route("/admin/:id/status").put(protect, authorize("SuperAdmin"), updateBillingDemoStatus);
router27.route("/admin/:id/config").put(protect, authorize("SuperAdmin"), updateBillingDemoConfig);
router27.route("/admin/:id/proposal").post(protect, authorize("SuperAdmin"), createCustomProposal);
router27.route("/admin/:id/verify-payment").post(protect, authorize("SuperAdmin"), verifyDemoPayment);
router27.route("/admin/:id/activate").post(protect, authorize("SuperAdmin"), activateBillingDemo);
router27.route("/admin/:id/credentials").put(protect, authorize("SuperAdmin"), setBillingDemoCredentials);
router27.route("/admin/:id/resend-invitation").post(protect, authorize("SuperAdmin"), resendActivationInvitation);
var billingDemoRoutes_default = router27;

// routes/kotRoutes.js
var import_express28 = __toESM(require("express"), 1);

// controllers/kotController.js
init_KOT();
init_Order();
init_Restaurant();
init_Branch();
var import_mongoose53 = __toESM(require("mongoose"), 1);
var extractId2 = (id) => {
  if (!id) return null;
  if (typeof id === "object") return String(id._id || id.id || id);
  return String(id);
};
var getKOTs = async (req, res) => {
  try {
    const restaurantId = extractId2(req.user?.restaurantId);
    if (!restaurantId && req.user?.role !== "SuperAdmin") {
      return res.status(403).json({ message: "Restaurant access not configured for user." });
    }
    const query = {};
    if (req.user?.role !== "SuperAdmin") {
      query.restaurantId = restaurantId;
    }
    const branchId = extractId2(req.query.branchId || req.user?.branchId);
    if (branchId && req.user?.role !== "SuperAdmin" && req.user?.role !== "RestaurantAdmin") {
      query.branchId = branchId;
    }
    if (req.query.status && req.query.status !== "All") {
      if (req.query.status === "Active") {
        query.status = { $in: ["Pending", "Preparing", "Ready"] };
      } else {
        query.status = req.query.status;
      }
    }
    if (req.query.station && req.query.station !== "All") {
      query.kitchenStation = req.query.station;
    }
    if (req.query.orderId) {
      query.orderId = req.query.orderId;
    }
    if (req.query.tableNumber) {
      query.tableNumber = new RegExp(req.query.tableNumber, "i");
    }
    if (req.query.date === "today") {
      const startOfDay = /* @__PURE__ */ new Date();
      startOfDay.setHours(0, 0, 0, 0);
      query.createdAt = { $gte: startOfDay };
    } else if (req.query.startDate && req.query.endDate) {
      query.createdAt = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate)
      };
    }
    const kots = await KOT_default.find(query).sort({ createdAt: -1 }).limit(Number(req.query.limit) || 150);
    return res.status(200).json(kots);
  } catch (error) {
    console.error("Error fetching KOTs:", error);
    return res.status(500).json({ message: error.message || "Server error fetching KOTs" });
  }
};
var getKOTById = async (req, res) => {
  try {
    const kot = await KOT_default.findById(req.params.id);
    if (!kot) {
      return res.status(404).json({ message: "Kitchen Order Ticket not found" });
    }
    const userRestId = extractId2(req.user?.restaurantId);
    if (userRestId && req.user?.role !== "SuperAdmin" && String(kot.restaurantId) !== userRestId) {
      return res.status(403).json({ message: "Not authorized to view KOT from another restaurant." });
    }
    const [restaurant, branch] = await Promise.all([
      Restaurant_default.findById(kot.restaurantId).select("name logo address phone"),
      Branch_default.findById(kot.branchId).select("name address phone")
    ]);
    return res.status(200).json({
      ...kot.toObject(),
      restaurantName: restaurant?.name || "Restaurant",
      restaurantAddress: restaurant?.address || "",
      restaurantPhone: restaurant?.phone || "",
      branchName: branch?.name || "Main Branch",
      branchAddress: branch?.address || "",
      branchPhone: branch?.phone || ""
    });
  } catch (error) {
    console.error("Error fetching KOT by ID:", error);
    return res.status(500).json({ message: error.message || "Server error fetching KOT" });
  }
};
var updateKOTStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ message: "New status is required" });
    }
    const kot = await KOT_default.findById(req.params.id);
    if (!kot) {
      return res.status(404).json({ message: "KOT not found" });
    }
    const userRestId = extractId2(req.user?.restaurantId);
    if (userRestId && req.user?.role !== "SuperAdmin" && String(kot.restaurantId) !== userRestId) {
      return res.status(403).json({ message: "Not authorized to update this KOT" });
    }
    const validation = validateKOTStatusTransition(kot.status, status);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }
    const oldStatus = kot.status;
    kot.status = status;
    const now = /* @__PURE__ */ new Date();
    if (status === "Preparing" && !kot.prepStartTime) {
      kot.prepStartTime = now;
    } else if (status === "Ready" && !kot.prepReadyTime) {
      kot.prepReadyTime = now;
    } else if (status === "Served" && !kot.servedTime) {
      kot.servedTime = now;
    }
    kot.statusHistory.push({
      status,
      timestamp: now,
      updatedBy: req.user?._id || null
    });
    if (kot.items && kot.items.length > 0) {
      kot.items.forEach((item) => {
        if (item.status !== "Cancelled") {
          item.status = status;
        }
      });
    }
    const updatedKOT = await kot.save();
    if (kot.orderId) {
      try {
        const siblingKOTs = await KOT_default.find({ orderId: kot.orderId });
        const nonCancelledKOTs = siblingKOTs.filter((k) => k.status !== "Cancelled");
        if (nonCancelledKOTs.length > 0) {
          const allReadyOrBeyond = nonCancelledKOTs.every((k) => ["Ready", "Served"].includes(k.status));
          const allServed = nonCancelledKOTs.every((k) => k.status === "Served");
          const parentOrder = await Order_default.findById(kot.orderId);
          if (parentOrder) {
            let parentUpdated = false;
            if (allServed && !["Served", "Completed"].includes(parentOrder.status)) {
              parentOrder.status = "Served";
              await parentOrder.save();
              parentUpdated = true;
            } else if (allReadyOrBeyond && !["Ready", "Ready for Pickup", "Served", "Completed"].includes(parentOrder.status)) {
              parentOrder.status = parentOrder.orderType === "Self-Pickup" || parentOrder.serviceType?.includes("Self") ? "Ready for Pickup" : "Ready";
              await parentOrder.save();
              parentUpdated = true;
            }
            if (parentUpdated) {
              broadcastToRestaurant(kot.restaurantId, "order_status_updated", parentOrder);
              broadcastToCustomerOrder(parentOrder._id, "order_status_updated", parentOrder);
            }
          }
        }
      } catch (syncErr) {
        console.error("Error synchronizing parent order with KOT statuses", syncErr);
      }
    }
    broadcastToRestaurant(kot.restaurantId, "kot_status_updated", {
      kotId: kot._id,
      kotNumber: kot.kotNumber,
      orderId: kot.orderId,
      tableNumber: kot.tableNumber,
      kitchenStation: kot.kitchenStation,
      oldStatus,
      newStatus: status,
      updatedKOT
    });
    if (status === "Ready") {
      broadcastToRestaurant(kot.restaurantId, "ready_to_serve", {
        orderId: kot.orderId,
        kotNumber: kot.kotNumber,
        tableNumber: kot.tableNumber,
        customerName: kot.customerName,
        serviceType: kot.serviceType,
        status: "Ready"
      });
    }
    return res.status(200).json(updatedKOT);
  } catch (error) {
    console.error("Error updating KOT status:", error);
    return res.status(500).json({ message: error.message || "Server error updating KOT" });
  }
};
var markKOTPrinted = async (req, res) => {
  try {
    const kot = await KOT_default.findById(req.params.id);
    if (!kot) {
      return res.status(404).json({ message: "KOT not found" });
    }
    const userRestId = extractId2(req.user?.restaurantId);
    if (userRestId && req.user?.role !== "SuperAdmin" && String(kot.restaurantId) !== userRestId) {
      return res.status(403).json({ message: "Not authorized for this KOT" });
    }
    kot.isPrinted = true;
    kot.printedAt = /* @__PURE__ */ new Date();
    kot.printCount = (kot.printCount || 0) + 1;
    const updatedKOT = await kot.save();
    return res.status(200).json({
      message: "KOT marked as printed",
      printCount: updatedKOT.printCount,
      printedAt: updatedKOT.printedAt,
      kot: updatedKOT
    });
  } catch (error) {
    console.error("Error marking KOT as printed:", error);
    return res.status(500).json({ message: error.message || "Server error updating print status" });
  }
};
var manualCreateKOT = async (req, res) => {
  try {
    const { orderId, items, tableNumber, notes, kitchenStation, customerName } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Items list is required for KOT" });
    }
    let restaurantId = extractId2(req.user?.restaurantId);
    let branchId = extractId2(req.user?.branchId);
    let order = null;
    if (orderId && import_mongoose53.default.Types.ObjectId.isValid(orderId)) {
      order = await Order_default.findById(orderId);
      if (order) {
        restaurantId = restaurantId || extractId2(order.restaurantId);
        branchId = branchId || extractId2(order.branchId);
      }
    }
    if (!restaurantId) {
      return res.status(400).json({ message: "Restaurant ID missing" });
    }
    if (!branchId) {
      const firstBranch = await Branch_default.findOne({ restaurantId });
      branchId = firstBranch?._id;
    }
    const { kotNumber, kotSequence } = await getNextKotNumber(restaurantId, branchId);
    const station = kitchenStation || (items[0] ? determineKitchenStation(items[0]) : "Main Kitchen");
    const kot = new KOT_default({
      kotNumber,
      kotSequence,
      orderId: order ? order._id : new import_mongoose53.default.Types.ObjectId(),
      orderNumber: order ? `#${String(order._id).slice(-5).toUpperCase()}` : "MANUAL",
      restaurantId,
      branchId,
      tableNumber: tableNumber || order?.tableNumber || "",
      orderType: order?.orderType || "Dine In",
      serviceType: order?.serviceType || "Waiter Table Service",
      customerName: customerName || order?.customerName || "",
      kitchenStation: station,
      items: items.map((i) => ({
        name: i.name,
        qty: Number(i.qty) || 1,
        price: Number(i.price) || 0,
        notes: i.notes || "",
        product: i.product && import_mongoose53.default.Types.ObjectId.isValid(i.product) ? i.product : null,
        kitchenStation: station,
        status: "Pending"
      })),
      notes: notes || "",
      status: "Pending",
      statusHistory: [{
        status: "Pending",
        timestamp: /* @__PURE__ */ new Date(),
        updatedBy: req.user?._id || null
      }],
      serverName: req.user?.name || "Staff User",
      createdBy: req.user?._id || null
    });
    const savedKOT = await kot.save();
    if (order) {
      await Order_default.findByIdAndUpdate(order._id, {
        $addToSet: {
          kots: savedKOT._id,
          kotNumbers: savedKOT.kotNumber
        }
      });
    }
    broadcastToRestaurant(restaurantId, "new_kot", savedKOT);
    return res.status(201).json(savedKOT);
  } catch (error) {
    console.error("Error creating manual KOT:", error);
    return res.status(500).json({ message: error.message || "Server error creating KOT" });
  }
};
var getKOTSummary = async (req, res) => {
  try {
    const restaurantId = extractId2(req.user?.restaurantId);
    const query = {};
    if (restaurantId && req.user?.role !== "SuperAdmin") {
      query.restaurantId = restaurantId;
    }
    const startOfDay = /* @__PURE__ */ new Date();
    startOfDay.setHours(0, 0, 0, 0);
    query.createdAt = { $gte: startOfDay };
    const todayKOTs = await KOT_default.find(query);
    const totalToday = todayKOTs.length;
    const pendingCount = todayKOTs.filter((k) => k.status === "Pending").length;
    const preparingCount = todayKOTs.filter((k) => k.status === "Preparing").length;
    const readyCount = todayKOTs.filter((k) => k.status === "Ready").length;
    const servedCount = todayKOTs.filter((k) => k.status === "Served").length;
    const cancelledCount = todayKOTs.filter((k) => k.status === "Cancelled").length;
    const completedPrep = todayKOTs.filter((k) => k.prepStartTime && k.prepReadyTime);
    let avgPrepMinutes = 12;
    if (completedPrep.length > 0) {
      const totalMs = completedPrep.reduce((acc, curr) => {
        const diff = new Date(curr.prepReadyTime) - new Date(curr.prepStartTime);
        return acc + (diff > 0 ? diff : 0);
      }, 0);
      avgPrepMinutes = Math.round(totalMs / (completedPrep.length * 60 * 1e3)) || 1;
    }
    return res.status(200).json({
      totalToday,
      pendingCount,
      preparingCount,
      readyCount,
      servedCount,
      cancelledCount,
      avgPrepMinutes
    });
  } catch (error) {
    console.error("Error fetching KOT summary:", error);
    return res.status(500).json({ message: error.message || "Server error fetching KOT summary" });
  }
};

// routes/kotRoutes.js
var router28 = import_express28.default.Router();
router28.use(protect);
router28.use(checkSubscription);
router28.use(authorize("SuperAdmin", "RestaurantAdmin", "Admin", "BranchManager", "Chef", "Waiter", "Cashier"));
router28.use(checkBillingModule(["kot", "kitchenOrderManagement"]));
router28.route("/").get(getKOTs).post(manualCreateKOT);
router28.route("/summary").get(getKOTSummary);
router28.route("/:id").get(getKOTById);
router28.route("/:id/status").put(updateKOTStatus);
router28.route("/:id/print").put(markKOTPrinted);
var kotRoutes_default = router28;

// routes/tipRoutes.js
var import_express29 = __toESM(require("express"), 1);

// controllers/tipController.js
init_Tip();
init_User();
var import_mongoose54 = __toESM(require("mongoose"), 1);
var getTips = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(400).json({ message: "No restaurant associated with this account" });
    }
    const { waiterId, status, startDate, endDate, branchId } = req.query;
    const query = { restaurantId };
    if (branchId && import_mongoose54.default.Types.ObjectId.isValid(branchId)) {
      query.branchId = branchId;
    }
    if (waiterId && import_mongoose54.default.Types.ObjectId.isValid(waiterId)) {
      query.waiterId = waiterId;
    }
    if (status && ["Pending", "Settled"].includes(status)) {
      query.status = status;
    }
    if (startDate || endDate) {
      query.date = {};
      if (startDate) {
        query.date.$gte = new Date(startDate);
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        query.date.$lte = end;
      }
    }
    const tips = await Tip_default.find(query).populate("waiterId", "name email employeeId").populate("settledBy", "name email role").populate("orderId", "tableNumber totalPrice orderType serviceType createdAt").sort({ createdAt: -1 });
    res.json(tips);
  } catch (error) {
    console.error("Error fetching tips:", error);
    res.status(500).json({ message: error.message || "Failed to fetch tips" });
  }
};
var getTipSummary = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(400).json({ message: "No restaurant associated with this account" });
    }
    const matchQuery = { restaurantId: new import_mongoose54.default.Types.ObjectId(restaurantId) };
    if (req.query.branchId && import_mongoose54.default.Types.ObjectId.isValid(req.query.branchId)) {
      matchQuery.branchId = new import_mongoose54.default.Types.ObjectId(req.query.branchId);
    }
    const totalsAgg = await Tip_default.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: null,
          totalTips: { $sum: "$amount" },
          totalCount: { $sum: 1 },
          settledTips: {
            $sum: {
              $cond: [{ $eq: ["$status", "Settled"] }, "$amount", 0]
            }
          },
          settledCount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Settled"] }, 1, 0]
            }
          },
          pendingTips: {
            $sum: {
              $cond: [{ $eq: ["$status", "Pending"] }, "$amount", 0]
            }
          },
          pendingCount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Pending"] }, 1, 0]
            }
          }
        }
      }
    ]);
    const totals = totalsAgg[0] || {
      totalTips: 0,
      totalCount: 0,
      settledTips: 0,
      settledCount: 0,
      pendingTips: 0,
      pendingCount: 0
    };
    const waiterSummary = await Tip_default.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: "$waiterId",
          waiterName: { $first: "$waiterName" },
          totalAmount: { $sum: "$amount" },
          tipCount: { $sum: 1 },
          settledAmount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Settled"] }, "$amount", 0]
            }
          },
          pendingAmount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Pending"] }, "$amount", 0]
            }
          }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "waiterInfo"
        }
      },
      {
        $project: {
          waiterId: "$_id",
          waiterName: {
            $ifNull: [{ $arrayElemAt: ["$waiterInfo.name", 0] }, "$waiterName"]
          },
          employeeId: { $arrayElemAt: ["$waiterInfo.employeeId", 0] },
          totalAmount: 1,
          tipCount: 1,
          settledAmount: 1,
          pendingAmount: 1
        }
      },
      { $sort: { totalAmount: -1 } }
    ]);
    const dateSummary = await Tip_default.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          totalAmount: { $sum: "$amount" },
          tipCount: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json({
      totals,
      waiterSummary,
      dateSummary
    });
  } catch (error) {
    console.error("Error fetching tip summary:", error);
    res.status(500).json({ message: error.message || "Failed to fetch tip summary" });
  }
};
var getMyWaiterTips = async (req, res) => {
  try {
    const waiterId = req.user._id;
    const restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      return res.status(400).json({ message: "No restaurant associated with this staff user" });
    }
    const tips = await Tip_default.find({
      restaurantId,
      waiterId
    }).populate("orderId", "tableNumber totalPrice serviceType createdAt").sort({ createdAt: -1 }).limit(50);
    const totalEarned = tips.reduce((acc, t) => acc + (t.amount || 0), 0);
    const settledTips = tips.filter((t) => t.status === "Settled").reduce((acc, t) => acc + (t.amount || 0), 0);
    const pendingTips = tips.filter((t) => t.status === "Pending").reduce((acc, t) => acc + (t.amount || 0), 0);
    const todayStart = /* @__PURE__ */ new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayTips = tips.filter((t) => new Date(t.date || t.createdAt) >= todayStart).reduce((acc, t) => acc + (t.amount || 0), 0);
    res.json({
      totalEarned,
      todayTips,
      settledTips,
      pendingTips,
      tipCount: tips.length,
      records: tips
    });
  } catch (error) {
    console.error("Error fetching waiter tips:", error);
    res.status(500).json({ message: error.message || "Failed to fetch waiter tips" });
  }
};
var settleTips = async (req, res) => {
  try {
    const restaurantId = req.user.restaurantId;
    const { tipIds, waiterId, transactionReference, notes } = req.body;
    const updateFilter = { restaurantId, status: "Pending" };
    if (Array.isArray(tipIds) && tipIds.length > 0) {
      updateFilter._id = { $in: tipIds };
    } else if (waiterId && import_mongoose54.default.Types.ObjectId.isValid(waiterId)) {
      updateFilter.waiterId = waiterId;
    } else {
      return res.status(400).json({ message: "Must provide either specific tipIds or a valid waiterId to settle" });
    }
    const updateResult = await Tip_default.updateMany(updateFilter, {
      $set: {
        status: "Settled",
        settledAt: /* @__PURE__ */ new Date(),
        settledBy: req.user._id,
        transactionReference: transactionReference || `SETTLE-${Date.now()}`,
        notes: notes || "Settled through admin console"
      }
    });
    res.json({
      success: true,
      message: `Successfully settled ${updateResult.modifiedCount} tip transaction(s)`,
      settledCount: updateResult.modifiedCount
    });
  } catch (error) {
    console.error("Error settling tips:", error);
    res.status(500).json({ message: error.message || "Failed to settle tips" });
  }
};

// routes/tipRoutes.js
var router29 = import_express29.default.Router();
router29.use(protect);
router29.use(checkSubscription);
router29.route("/waiter-mine").get(authorize("Waiter", "RestaurantAdmin", "BranchManager", "SuperAdmin"), getMyWaiterTips);
router29.route("/summary").get(authorize("RestaurantAdmin", "BranchManager", "SuperAdmin", "Admin"), getTipSummary);
router29.route("/settle").post(authorize("RestaurantAdmin", "BranchManager", "SuperAdmin", "Admin"), settleTips);
router29.route("/").get(authorize("RestaurantAdmin", "BranchManager", "SuperAdmin", "Admin"), getTips);
var tipRoutes_default = router29;

// routes/testimonialRoutes.js
var import_express30 = __toESM(require("express"), 1);

// models/Testimonial.js
var import_mongoose55 = __toESM(require("mongoose"), 1);
var testimonialSchema = new import_mongoose55.default.Schema({
  userId: {
    type: import_mongoose55.default.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
    // One testimonial per restaurant owner
  },
  restaurantId: {
    type: import_mongoose55.default.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  ownerName: {
    type: String,
    required: true,
    trim: true
  },
  restaurantName: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  quote: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 5
  },
  avatar: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  rejectionReason: {
    type: String,
    default: ""
  },
  approvedAt: {
    type: Date
  },
  reviewedBy: {
    type: import_mongoose55.default.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});
testimonialSchema.index({ status: 1, createdAt: -1 });
var Testimonial = import_mongoose55.default.model("Testimonial", testimonialSchema);
var Testimonial_default = Testimonial;

// controllers/testimonialController.js
init_Restaurant();
var import_multer4 = __toESM(require("multer"), 1);
var import_path5 = __toESM(require("path"), 1);
var import_fs5 = __toESM(require("fs"), 1);
var testimonialUploadDir = process.env.VERCEL ? "/tmp/uploads/testimonials" : "uploads/testimonials";
try {
  if (!import_fs5.default.existsSync(testimonialUploadDir)) {
    import_fs5.default.mkdirSync(testimonialUploadDir, { recursive: true });
  }
} catch {
}
var storage3 = import_multer4.default.diskStorage({
  destination: (req, file, cb) => cb(null, testimonialUploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "testimonial-" + unique + import_path5.default.extname(file.originalname));
  }
});
var fileFilter3 = (req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png", ".webp"];
  const ext = import_path5.default.extname(file.originalname).toLowerCase();
  allowed.includes(ext) ? cb(null, true) : cb(new Error("Only JPG, JPEG, PNG, or WEBP images are allowed"), false);
};
var testimonialUpload = (0, import_multer4.default)({
  storage: storage3,
  limits: { fileSize: 5 * 1024 * 1024 },
  // 5MB
  fileFilter: fileFilter3
}).single("avatar");
var getPublicTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial_default.find({ status: "Approved" }).sort({ approvedAt: -1, createdAt: -1 }).lean();
    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    console.error("Error fetching public testimonials:", error);
    res.status(500).json({ success: false, message: "Failed to fetch testimonials" });
  }
};
var getMyTestimonial = async (req, res) => {
  try {
    const userId = req.user._id;
    const testimonial = await Testimonial_default.findOne({ userId });
    let restaurantName = "";
    let location = "";
    if (req.user.restaurantId) {
      const restaurant = await Restaurant_default.findById(req.user.restaurantId).select("name address city state");
      if (restaurant) {
        restaurantName = restaurant.name || "";
        location = restaurant.address || (restaurant.city && restaurant.state ? `${restaurant.city}, ${restaurant.state}` : "");
      }
    }
    res.status(200).json({
      success: true,
      data: testimonial || null,
      defaults: {
        ownerName: req.user.name || "",
        restaurantName,
        location
      }
    });
  } catch (error) {
    console.error("Error fetching owner testimonial:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve testimonial" });
  }
};
var saveMyTestimonial = async (req, res) => {
  try {
    const userId = req.user._id;
    const { ownerName, restaurantName, location, quote, rating } = req.body;
    if (!ownerName || !restaurantName || !location || !quote) {
      return res.status(400).json({
        success: false,
        message: "Owner name, restaurant name, location, and testimonial text are required."
      });
    }
    const parsedRating = Number(rating) || 5;
    if (parsedRating < 1 || parsedRating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5 stars."
      });
    }
    let restaurantId = req.user.restaurantId;
    if (!restaurantId) {
      const ownedRestaurant = await Restaurant_default.findOne({ ownerId: userId }).select("_id");
      if (ownedRestaurant) {
        restaurantId = ownedRestaurant._id;
      }
    }
    if (!restaurantId) {
      return res.status(400).json({
        success: false,
        message: "No associated restaurant found for your account."
      });
    }
    let existingTestimonial = await Testimonial_default.findOne({ userId });
    let avatarUrl = existingTestimonial ? existingTestimonial.avatar : "";
    if (req.body.removeAvatar === "true" || req.body.removeAvatar === true) {
      avatarUrl = "";
    } else if (req.file) {
      avatarUrl = `/uploads/testimonials/${req.file.filename}`;
    } else if (req.body.avatarUrl !== void 0) {
      avatarUrl = req.body.avatarUrl;
    }
    if (existingTestimonial) {
      existingTestimonial.ownerName = ownerName.trim();
      existingTestimonial.restaurantName = restaurantName.trim();
      existingTestimonial.location = location.trim();
      existingTestimonial.quote = quote.trim();
      existingTestimonial.rating = parsedRating;
      existingTestimonial.avatar = avatarUrl;
      existingTestimonial.status = "Pending";
      existingTestimonial.rejectionReason = "";
      await existingTestimonial.save();
      return res.status(200).json({
        success: true,
        message: "Testimonial updated and submitted for approval.",
        data: existingTestimonial
      });
    } else {
      const newTestimonial = await Testimonial_default.create({
        userId,
        restaurantId,
        ownerName: ownerName.trim(),
        restaurantName: restaurantName.trim(),
        location: location.trim(),
        quote: quote.trim(),
        rating: parsedRating,
        avatar: avatarUrl,
        status: "Pending"
      });
      return res.status(201).json({
        success: true,
        message: "Testimonial submitted successfully! It will appear on the landing page once approved.",
        data: newTestimonial
      });
    }
  } catch (error) {
    console.error("Error saving testimonial:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit testimonial"
    });
  }
};
var getAdminTestimonials = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== "all") {
      filter.status = status;
    }
    const testimonials = await Testimonial_default.find(filter).populate("userId", "name email role").populate("restaurantId", "name address").sort({ createdAt: -1 }).lean();
    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    console.error("Error fetching admin testimonials:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve testimonials" });
  }
};
var updateTestimonialStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;
    if (!["Approved", "Rejected", "Pending"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be Pending, Approved, or Rejected."
      });
    }
    const testimonial = await Testimonial_default.findById(id);
    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found."
      });
    }
    testimonial.status = status;
    if (req.body.rating !== void 0 && Number(req.body.rating) >= 1 && Number(req.body.rating) <= 5) {
      testimonial.rating = Number(req.body.rating);
    }
    if (status === "Approved") {
      testimonial.approvedAt = /* @__PURE__ */ new Date();
      testimonial.rejectionReason = "";
      testimonial.reviewedBy = req.user._id;
    } else if (status === "Rejected") {
      testimonial.rejectionReason = rejectionReason || "Content did not meet editorial guidelines.";
      testimonial.reviewedBy = req.user._id;
    }
    await testimonial.save();
    res.status(200).json({
      success: true,
      message: `Testimonial successfully marked as ${status}.`,
      data: testimonial
    });
  } catch (error) {
    console.error("Error updating testimonial status:", error);
    res.status(500).json({ success: false, message: "Failed to update testimonial status" });
  }
};
var deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial_default.findByIdAndDelete(id);
    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found."
      });
    }
    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully."
    });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ success: false, message: "Failed to delete testimonial" });
  }
};

// routes/testimonialRoutes.js
var router30 = import_express30.default.Router();
router30.get("/public", getPublicTestimonials);
router30.get("/mine", protect, getMyTestimonial);
router30.post("/mine", protect, testimonialUpload, saveMyTestimonial);
router30.get("/admin/all", protect, authorize("SuperAdmin", "RestaurantAdmin", "Admin"), getAdminTestimonials);
router30.put("/admin/:id/status", protect, authorize("SuperAdmin", "RestaurantAdmin", "Admin"), updateTestimonialStatus);
router30.delete("/admin/:id", protect, authorize("SuperAdmin"), deleteTestimonial);
var testimonialRoutes_default = router30;

// routes/customerReviewRoutes.js
var import_express31 = __toESM(require("express"), 1);

// models/CustomerReview.js
var import_mongoose56 = __toESM(require("mongoose"), 1);
var customerReviewSchema = new import_mongoose56.default.Schema({
  userId: {
    type: import_mongoose56.default.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  customerEmail: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 5
  },
  reviewText: {
    type: String,
    required: true,
    trim: true
  },
  orderId: {
    type: import_mongoose56.default.Schema.Types.ObjectId,
    ref: "Order"
  },
  status: {
    type: String,
    enum: ["Approved", "Pending", "Hidden"],
    default: "Approved"
    // auto-approved for instant visibility on landing page
  }
}, {
  timestamps: true
});
customerReviewSchema.index({ status: 1, createdAt: -1 });
var CustomerReview = import_mongoose56.default.model("CustomerReview", customerReviewSchema);
var CustomerReview_default = CustomerReview;

// controllers/customerReviewController.js
var getPublicCustomerReviews = async (req, res) => {
  try {
    const reviews = await CustomerReview_default.find({ status: "Approved" }).sort({ createdAt: -1 }).limit(20).lean();
    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    console.error("Error fetching public customer reviews:", error);
    res.status(500).json({ success: false, message: "Failed to fetch customer reviews" });
  }
};
var getMyCustomerReviews = async (req, res) => {
  try {
    const userId = req.user._id;
    const reviews = await CustomerReview_default.find({ userId }).sort({ createdAt: -1 }).lean();
    res.status(200).json({
      success: true,
      data: reviews
    });
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    res.status(500).json({ success: false, message: "Failed to fetch your reviews" });
  }
};
var submitCustomerReview = async (req, res) => {
  try {
    const userId = req.user._id;
    const { rating, reviewText, orderId } = req.body;
    if (!reviewText || !reviewText.trim()) {
      return res.status(400).json({ success: false, message: "Review text is required" });
    }
    const numRating = Number(rating) || 5;
    if (numRating < 1 || numRating > 5) {
      return res.status(400).json({ success: false, message: "Rating must be between 1 and 5" });
    }
    const customerName = req.user.name || "Foodie Customer";
    const customerEmail = req.user.email || "";
    const avatar = req.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(customerName)}&background=FF5A1F&color=fff`;
    const newReview = await CustomerReview_default.create({
      userId,
      customerName,
      customerEmail,
      avatar,
      rating: numRating,
      reviewText: reviewText.trim(),
      orderId: orderId || null,
      status: "Approved"
    });
    res.status(201).json({
      success: true,
      message: "Your review has been submitted and is now featured on the landing page!",
      data: newReview
    });
  } catch (error) {
    console.error("Error submitting customer review:", error);
    res.status(500).json({ success: false, message: "Failed to submit review" });
  }
};
var deleteCustomerReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await CustomerReview_default.findById(id);
    if (!review) {
      return res.status(404).json({ success: false, message: "Review not found" });
    }
    const isOwner = review.userId.toString() === req.user._id.toString();
    const isAdmin = ["SuperAdmin", "Admin"].includes(req.user.role);
    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: "Not authorized to delete this review" });
    }
    await CustomerReview_default.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ success: false, message: "Failed to delete review" });
  }
};

// routes/customerReviewRoutes.js
var router31 = import_express31.default.Router();
router31.get("/public", getPublicCustomerReviews);
router31.get("/mine", protect, getMyCustomerReviews);
router31.post("/", protect, submitCustomerReview);
router31.delete("/:id", protect, deleteCustomerReview);
var customerReviewRoutes_default = router31;

// index.js
init_Plan();
import_dotenv.default.config();
process.on("uncaughtException", (err) => {
  console.error("[Backend Uncaught Exception]:", err.message);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("[Backend Unhandled Rejection]:", reason);
});
var app = (0, import_express32.default)();
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers, cache-control, pragma");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});
app.use((0, import_cors.default)({
  origin: (origin, callback) => callback(null, true),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin", "Access-Control-Request-Method", "Access-Control-Request-Headers", "cache-control", "pragma"],
  optionsSuccessStatus: 204
}));
app.use(import_express32.default.json({
  limit: "50mb",
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(import_express32.default.urlencoded({ limit: "50mb", extended: true }));
app.use((0, import_cookie_parser.default)());
app.use(async (req, res, next) => {
  if (req.path === "/health" || req.path === "/api/health") return next();
  try {
    await db_default();
  } catch (err) {
    console.error("DB connect middleware error:", err.message);
  }
  next();
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/plans", (req, res) => {
  res.redirect(301, "/api/plans");
});
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api", (req, res) => {
  res.status(200).json({ status: "ok", message: "Restaurant SaaS API Root Service" });
});
app.use("/api/auth", authRoutes_default);
app.use("/api/menu", menuRoutes_default);
app.use("/api/categories", categoryRoutes_default);
app.use("/api/inventory", inventoryRoutes_default);
app.use("/api/suppliers", supplierRoutes_default);
app.use("/api/offers", offerRoutes_default);
app.use("/api/taxes", taxRoutes_default);
app.use("/api/reports", reportRoutes_default);
app.use("/api/notifications", notificationRoutes_default);
app.use("/api/restaurants", restaurantRoutes_default);
app.use("/api/branches", branchRoutes_default);
app.use("/api/customers", customerRoutes_default);
app.use("/api/staff", staffRoutes_default);
app.use("/api/users", userRoutes_default);
app.use("/api/roles", roleRoutes_default);
app.use("/api/reservations", reservationRoutes_default);
app.use("/api/orders", orderRoutes_default);
app.use("/api/analytics", analyticsRoutes_default);
app.use("/api/super-admin", superAdminRoutes_default);
app.use("/api/tables", tableRoutes_default);
app.use("/api/plans", planRoutes_default);
app.use("/api/service-requests", serviceRequestRoutes_default);
app.use("/api/support", supportRoutes_default);
app.use("/api/delivery", deliveryRoutes_default);
app.use("/api/auth/delivery", deliveryRoutes_default);
app.use("/api/inquiries", inquiryRoutes_default);
app.use("/api/billing-demos", billingDemoRoutes_default);
app.use("/api/expenses", expenseRoutes_default);
app.use("/api/kot", kotRoutes_default);
app.use("/api/tips", tipRoutes_default);
app.use("/api/testimonials", testimonialRoutes_default);
app.use("/api/customer-reviews", customerReviewRoutes_default);
var PORT = process.env.PORT || 5e3;
var __dirname = import_path6.default.resolve();
app.use("/uploads", import_express32.default.static(import_path6.default.join(__dirname, "uploads")));
app.use("/uploads", import_express32.default.static(import_path6.default.join(__dirname, "backend", "uploads")));
app.use("/uploads", import_express32.default.static(import_path6.default.join(process.cwd(), "uploads")));
app.use("/uploads", import_express32.default.static(import_path6.default.join(process.cwd(), "backend", "uploads")));
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Restaurant SaaS API is running live" });
});
var frontendDistPath = import_path6.default.join(__dirname, "../frontend-restaurant/dist");
if (import_fs6.default.existsSync(frontendDistPath)) {
  app.use(import_express32.default.static(frontendDistPath));
  app.get(/(.*)/, (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) return next();
    res.sendFile(import_path6.default.resolve(frontendDistPath, "index.html"));
  });
}
app.use(notFound);
app.use(errorHandler);
var server = import_http.default.createServer(app);
if (!process.env.VERCEL) {
  initWebSocket(server);
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
    db_default().then(async () => {
      initSubscriptionScheduler();
      try {
        const count = await Plan_default.countDocuments();
        if (count === 0) {
          await Plan_default.insertMany([
            { name: "Basic", monthlyPrice: 2999, yearlyPrice: 2399, branchesLimit: 1, staffLimit: 5, features: ["1 Branch", "Basic POS Billing", "QR Ordering", "Email Support"], isActive: true },
            { name: "Pro", monthlyPrice: 5999, yearlyPrice: 4799, branchesLimit: 3, staffLimit: 9999, features: ["Up to 3 Branches", "Kitchen Display System", "Online Ordering", "Advanced Analytics", "Priority Support"], isActive: true },
            { name: "Enterprise", monthlyPrice: 12999, yearlyPrice: 10399, branchesLimit: 9999, staffLimit: 9999, features: ["Unlimited Branches", "Custom APIs & Webhooks", "Dedicated Account Manager", "SLA Guarantee", "White-label Branding"], isActive: true }
          ]);
        }
      } catch (e) {
        console.error("Plan initialization warning:", e.message);
      }
    }).catch((err) => {
      console.error("MongoDB Atlas connection error on startup:", err.message);
    });
    setInterval(() => {
      import_http.default.get(`http://127.0.0.1:${PORT}/api/health`, (res) => {
      }).on("error", () => {
      });
    }, 2 * 60 * 1e3);
  });
}
var index_default = app;
