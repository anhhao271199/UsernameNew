import { useEffect, useState } from 'react';
import { X, MapPin, Phone, Mail, Clock, Upload } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [orgType, setOrgType] = useState<'company' | 'organization' | 'individual'>('company');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid var(--cb-border)',
    backgroundColor: 'var(--cb-bg-page)',
    color: 'var(--cb-text-primary)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          margin: '0 20px',
          overflowY: 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          style={{
            backgroundColor: 'var(--cb-bg-card)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label={t.close}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={20} />
          </button>

          {/* Section 1: Get in touch */}
          <div style={{ padding: '48px 40px', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '100px',
              backgroundColor: 'rgba(249,162,35,0.1)',
              marginBottom: '16px',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F9A223',
              }}>
                {lang === 'vi' ? 'LIÊN HỆ' : 'CONTACT US'}
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--cb-text-primary)',
              marginBottom: '12px',
            }}>
              {lang === 'vi' ? 'Liên hệ với chúng tôi' : 'Get in touch'}
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'var(--cb-text-muted)',
              maxWidth: '560px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              {t.subtitle}
            </p>

            {/* Contact info grid */}
            <div className="contact-info-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              {/* Headquarters */}
              <div style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'var(--cb-bg-alt)',
                textAlign: 'left',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--cb-accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MapPin size={20} color="var(--cb-accent)" strokeWidth={1.75} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--cb-text-primary)',
                  }}>
                    {lang === 'vi' ? 'Trụ sở chính' : 'Headquarters'}
                  </div>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'var(--cb-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Số 318 đường Quang Trung, P.Phan Đình Phùng, Thái Nguyên, Việt Nam
                </p>
              </div>

              {/* Phone */}
              <div style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'var(--cb-bg-alt)',
                textAlign: 'left',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--cb-accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={20} color="var(--cb-accent)" strokeWidth={1.75} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--cb-text-primary)',
                  }}>
                    {lang === 'vi' ? 'Điện thoại' : 'Phone'}
                  </div>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'var(--cb-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  +84 901 234 567
                </p>
              </div>

              {/* Email */}
              <div style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'var(--cb-bg-alt)',
                textAlign: 'left',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--cb-accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mail size={20} color="var(--cb-accent)" strokeWidth={1.75} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--cb-text-primary)',
                  }}>
                    Email
                  </div>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'var(--cb-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  hr@corgibanana.com
                </p>
              </div>

              {/* Open hours */}
              <div style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'var(--cb-bg-alt)',
                textAlign: 'left',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--cb-accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Clock size={20} color="var(--cb-accent)" strokeWidth={1.75} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--cb-text-primary)',
                  }}>
                    {lang === 'vi' ? 'Giờ làm việc' : 'Open hours'}
                  </div>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'var(--cb-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {lang === 'vi' ? '8:00 - 17:30 (Thứ 2 - Thứ 6)' : '8:00am - 5:30pm (Mon - Fri)'}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            backgroundColor: 'var(--cb-border)',
            margin: '0 40px',
          }} />

          {/* Section 2: Apply form */}
          <div style={{ padding: '48px 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--cb-text-primary)',
                marginBottom: '8px',
              }}>
                {t.title}
              </h3>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert(lang === 'vi' ? 'Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.' : 'Thank you! We will contact you soon.'); onClose(); }}
              style={{ maxWidth: '700px', margin: '0 auto' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name + Phone */}
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                      color: 'var(--cb-text-secondary)', display: 'block', marginBottom: '8px',
                    }}>
                      {t.name} *
                    </label>
                    <input type="text" required placeholder={lang === 'vi' ? 'Nhập họ và tên' : 'Enter your full name'} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#F9A223')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--cb-border)')}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                      color: 'var(--cb-text-secondary)', display: 'block', marginBottom: '8px',
                    }}>
                      {t.phone} *
                    </label>
                    <input type="tel" required placeholder={lang === 'vi' ? 'Nhập số điện thoại' : 'Enter your phone number'} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#F9A223')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--cb-border)')}
                    />
                  </div>
                </div>

                {/* Email + Title */}
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                      color: 'var(--cb-text-secondary)', display: 'block', marginBottom: '8px',
                    }}>
                      {t.email} *
                    </label>
                    <input type="email" required placeholder={lang === 'vi' ? 'Nhập email' : 'Enter your email'} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#F9A223')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--cb-border)')}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                      color: 'var(--cb-text-secondary)', display: 'block', marginBottom: '8px',
                    }}>
                      {t.company}
                    </label>
                    <select
                      value={orgType}
                      onChange={(e) => setOrgType(e.target.value as 'company' | 'organization' | 'individual')}
                      style={{ ...inputStyle, marginBottom: orgType !== 'individual' ? '10px' : '0', cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = '#F9A223')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--cb-border)')}
                    >
                      <option value="company">{lang === 'vi' ? 'Công ty' : 'Company'}</option>
                      <option value="organization">{lang === 'vi' ? 'Tổ chức khác' : 'Other organization'}</option>
                      <option value="individual">{lang === 'vi' ? 'Cá nhân' : 'Individual'}</option>
                    </select>
                    {orgType !== 'individual' && (
                      <input
                        type="text"
                        placeholder={orgType === 'company'
                          ? (lang === 'vi' ? 'Tên công ty của bạn' : 'Your company name')
                          : (lang === 'vi' ? 'Tên tổ chức của bạn' : 'Your organization name')}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#F9A223')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--cb-border)')}
                      />
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                    color: 'var(--cb-text-secondary)', display: 'block', marginBottom: '8px',
                  }}>
                    {t.message}
                  </label>
                  <textarea
                    rows={4} placeholder={t.messagePlaceholder}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={(e) => (e.target.style.borderColor = '#F9A223')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--cb-border)')}
                  />
                </div>

                {/* File upload */}
                <div>
                  <label style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                    color: 'var(--cb-text-secondary)', display: 'block', marginBottom: '8px',
                  }}>
                    {lang === 'vi' ? 'Tệp đính kèm' : 'Your file'}
                  </label>
                  <div style={{
                    border: '2px dashed var(--cb-border)',
                    borderRadius: '8px',
                    padding: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#F9A223';
                    e.currentTarget.style.backgroundColor = 'rgba(249,162,35,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cb-border)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}>
                    <input type="file" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} />
                    <Upload size={24} color="var(--cb-text-muted)" style={{ margin: '0 auto 8px' }} />
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: 'var(--cb-text-muted)',
                    }}>
                      {lang === 'vi' ? 'Kéo thả hoặc click để tải lên' : 'Drag & drop or click to upload'}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    width: '100%', padding: '14px', borderRadius: '100px',
                    border: 'none', backgroundColor: '#F9A223', color: '#fff',
                    fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s',
                    boxShadow: '0 4px 16px rgba(249,162,35,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E8920F';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(249,162,35,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9A223';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(249,162,35,0.3)';
                  }}
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </div>

          <style>{`
            @media (max-width: 640px) {
              .contact-info-grid,
              .form-row {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </div>
  );
}