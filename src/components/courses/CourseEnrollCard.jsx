import { FileText, CreditCard, CalendarDays } from "lucide-react";
import { CONTACT } from "../../data/siteConfig";
import { batches } from "../../data/batches";
import { useDemoModal } from "../../context/DemoModalContext";
import WhatsAppIcon from "../common/WhatsAppIcon";

function formatFee(fees) {
  const raw = String(fees || "").replace(/[^\d]/g, "");
  if (!raw) return "₹ 25,000";
  return `₹ ${Number(raw).toLocaleString("en-IN")}`;
}

function formatBatchDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getNextBatchLabel(course) {
  if (course.nextBatch) return course.nextBatch;
  const match = batches.find((batch) => batch.courseId === course.id || batch.courseId === course.slug);
  if (match?.startDate) return formatBatchDate(match.startDate);
  return "Coming Soon";
}

function PointingHand({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.2 13.2V5.4a1.4 1.4 0 0 1 2.8 0v5.3"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 10.7V8.6a1.25 1.25 0 0 1 2.5 0v3.1"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 11.5v-.8a1.15 1.15 0 0 1 2.3 0v1.6"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.4 12.2V9.6a1.2 1.2 0 1 0-2.4 0v5.3c0 3.1 2.1 5.6 5.2 6.1 2.2.35 4.3-.4 5.6-1.9l2.5-2.9a1.35 1.35 0 0 0-2.1-1.7l-1.4 1.3"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnrollAction({ href, onClick, variant = "primary", children }) {
  const className = `so-enroll-btn so-enroll-btn--${variant}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default function CourseEnrollCard({ course }) {
  const { openDemo } = useDemoModal();
  const feeLabel = formatFee(course.fees);
  const nextBatch = getNextBatchLabel(course);
  const duration = course.duration || "3 months";
  const whatsappHref =
    course.whatsappGroupUrl ||
    `${CONTACT.whatsappHref}?text=${encodeURIComponent(`Hi SkillOrbit, I want to join the ${course.name} WhatsApp group.`)}`;

  return (
    <div className="so-enroll-card">
      <h2 className="so-enroll-card__title">Enroll Now</h2>

      <div className="so-enroll-card__actions">
        <EnrollAction
          href={course.courseContentUrl}
          onClick={() => openDemo(course.id)}
        >
          <FileText size={18} strokeWidth={2.2} />
          Download Course Content
        </EnrollAction>

        <EnrollAction onClick={() => openDemo(course.id)}>
          <PointingHand />
          Register for Course
        </EnrollAction>

        <EnrollAction href={whatsappHref} variant="ghost">
          <WhatsAppIcon size={18} />
          Join WhatsApp Group
        </EnrollAction>
      </div>

      <div className="so-enroll-card__rule" aria-hidden="true" />

      <EnrollAction href={course.paymentUrl} onClick={() => openDemo(course.id)}>
        <CreditCard size={18} strokeWidth={2.2} />
        Pay Now - {feeLabel}
      </EnrollAction>

      <div className="so-enroll-card__meta">
        <p className="so-enroll-card__batch">
          <CalendarDays size={18} strokeWidth={2.1} />
          <span>
            Next Batch: <strong>{nextBatch}</strong>
          </span>
        </p>
        <div className="so-enroll-card__duration">
          <span>Duration</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
