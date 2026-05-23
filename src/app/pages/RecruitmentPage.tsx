import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, DollarSign, ChevronDown, ArrowRight, Zap, Heart, TrendingUp, Coffee, BookOpen, Users } from 'lucide-react';
import { Recruitment } from '../components/Recruitment';
import { ContactModal } from '../components/ContactModal';
import { useLanguage } from '../contexts/LanguageContext';

// ─── Team photos (placeholder – replace with real staff photos) ───────────────
const TEAM_PHOTOS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
];

// ─── Jobs data ────────────────────────────────────────────────────────────────
const jobs = {
  vi: [
    {
      id: 1,
      title: 'Content Marketing Manager',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Thái Nguyên / Hà Nội',
      salary: '15 – 25 triệu VNĐ',
      deptColor: '#6366F1',
      desc: 'Lãnh đạo chiến lược nội dung đa kênh, xây dựng thương hiệu và tạo ra content chất lượng cao thúc đẩy tăng trưởng.',
      requirements: [
        '2+ năm kinh nghiệm Content Marketing hoặc Digital Marketing',
        'Có portfolio bài viết / nội dung đã xuất bản',
        'Hiểu biết về SEO, social media và content performance analytics',
        'Kỹ năng viết lách xuất sắc, tư duy sáng tạo',
      ],
    },
    {
      id: 2,
      title: 'Performance Ads Specialist',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Thái Nguyên / Remote',
      salary: '12 – 20 triệu VNĐ',
      deptColor: '#F9A223',
      desc: 'Lập kế hoạch, triển khai và tối ưu các chiến dịch quảng cáo trả phí trên Google, Meta, TikTok nhằm đạt KPI hiệu quả.',
      requirements: [
        '1+ năm kinh nghiệm chạy Google Ads, Meta Ads hoặc TikTok Ads',
        'Am hiểu về CPC, CPA, ROAS và tối ưu campaign',
        'Biết sử dụng Google Analytics 4, Meta Business Suite',
        'Kỹ năng phân tích dữ liệu và báo cáo hiệu quả',
      ],
    },
    {
      id: 3,
      title: 'E-commerce Manager (Shopee/Lazada/TikTok Shop)',
      dept: 'E-Commerce',
      type: 'Full-time',
      location: 'Thái Nguyên',
      salary: '15 – 22 triệu VNĐ',
      deptColor: '#10B981',
      desc: 'Quản lý và phát triển gian hàng TMĐT đa sàn, tối ưu hiệu quả kinh doanh và trải nghiệm khách hàng trên tất cả các nền tảng.',
      requirements: [
        '1+ năm kinh nghiệm quản lý gian hàng Shopee, Lazada hoặc TikTok Shop',
        'Hiểu biết về thuật toán, SEO gian hàng và chạy ads sàn TMĐT',
        'Kỹ năng phân tích dữ liệu bán hàng, lập báo cáo',
        'Kinh nghiệm tổ chức flash sale, livestream bán hàng là lợi thế',
      ],
    },
    {
      id: 4,
      title: 'SEO Specialist',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Thái Nguyên / Hà Nội',
      salary: '10 – 18 triệu VNĐ',
      deptColor: '#8B5CF6',
      desc: 'Nghiên cứu từ khóa, tối ưu SEO Onpage/Offpage và xây dựng chiến lược tăng thứ hạng website trên công cụ tìm kiếm.',
      requirements: [
        '1+ năm kinh nghiệm SEO, có kết quả chứng minh (ranking, traffic)',
        'Am hiểu Google Search Console, Ahrefs/SEMrush',
        'Kỹ năng viết content chuẩn SEO và tư duy phân tích',
        'Kinh nghiệm link building và technical SEO là lợi thế',
      ],
    },
    {
      id: 5,
      title: 'Amazon Global Specialist',
      dept: 'E-Commerce',
      type: 'Full-time',
      location: 'Thái Nguyên / Remote',
      salary: '15 – 25 triệu VNĐ',
      deptColor: '#EF4444',
      desc: 'Quản lý tài khoản Amazon Seller/Vendor, tối ưu Listing, A+ Content và vận hành PPC nhằm tối đa hóa doanh thu xuất khẩu.',
      requirements: [
        '1+ năm kinh nghiệm bán hàng trên Amazon (Seller Central hoặc Vendor Central)',
        'Am hiểu Amazon PPC, A+ Content, Brand Store',
        'Kỹ năng nghiên cứu sản phẩm và phân tích cạnh tranh',
        'Tiếng Anh giao tiếp tốt (đọc hiểu văn bản kinh doanh)',
      ],
    },
    {
      id: 6,
      title: 'Graphic Designer / Visual Creative',
      dept: 'Creative',
      type: 'Full-time',
      location: 'Thái Nguyên / Hà Nội',
      salary: '10 – 18 triệu VNĐ',
      deptColor: '#F59E0B',
      desc: 'Thiết kế ấn phẩm truyền thông đa kênh, từ banner ads, social media graphics đến bộ nhận diện thương hiệu cho khách hàng.',
      requirements: [
        '1+ năm kinh nghiệm thiết kế đồ họa, có portfolio',
        'Thành thạo Adobe Illustrator, Photoshop và Figma',
        'Tư duy sáng tạo, nhạy bén với xu hướng thẩm mỹ',
        'Kinh nghiệm thiết kế cho mảng Digital Marketing là lợi thế',
      ],
    },
    {
      id: 7,
      title: 'Digital Marketing Intern',
      dept: 'Marketing',
      type: 'Part-time / Intern',
      location: 'Thái Nguyên',
      salary: '3 – 5 triệu VNĐ',
      deptColor: '#6366F1',
      desc: 'Cơ hội thực tập thực chiến tại môi trường Digital Marketing chuyên nghiệp, học hỏi từ đội ngũ 5+ năm kinh nghiệm.',
      requirements: [
        'Sinh viên năm 3-4 hoặc mới ra trường ngành Marketing, Kinh tế, CNTT',
        'Đam mê Digital Marketing, E-commerce',
        'Kỹ năng giao tiếp tốt và tinh thần học hỏi cao',
        'Có thể làm việc tối thiểu 4 buổi/tuần tại văn phòng',
      ],
    },
  ],
  en: [
    {
      id: 1,
      title: 'Content Marketing Manager',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Thai Nguyen / Hanoi',
      salary: '$650 – $1,100/mo',
      deptColor: '#6366F1',
      desc: 'Lead multi-channel content strategy, build the brand, and create high-quality content that drives growth.',
      requirements: [
        '2+ years of Content Marketing or Digital Marketing experience',
        'Portfolio of published articles/content',
        'Understanding of SEO, social media, and content performance analytics',
        'Excellent writing skills and creative thinking',
      ],
    },
    {
      id: 2,
      title: 'Performance Ads Specialist',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Thai Nguyen / Remote',
      salary: '$520 – $870/mo',
      deptColor: '#F9A223',
      desc: 'Plan, execute, and optimise paid advertising campaigns on Google, Meta, and TikTok to achieve performance KPIs.',
      requirements: [
        '1+ year experience running Google Ads, Meta Ads or TikTok Ads',
        'Understanding of CPC, CPA, ROAS and campaign optimisation',
        'Proficient in Google Analytics 4, Meta Business Suite',
        'Data analysis and reporting skills',
      ],
    },
    {
      id: 3,
      title: 'E-commerce Manager (Shopee/Lazada/TikTok Shop)',
      dept: 'E-Commerce',
      type: 'Full-time',
      location: 'Thai Nguyen',
      salary: '$650 – $960/mo',
      deptColor: '#10B981',
      desc: 'Manage and grow multi-platform e-commerce storefronts, optimising business performance and customer experience.',
      requirements: [
        '1+ year managing Shopee, Lazada, or TikTok Shop storefronts',
        'Understanding of platform algorithms, storefront SEO and platform ads',
        'Data analysis skills for sales reporting',
        'Experience with flash sales and livestream selling is a plus',
      ],
    },
    {
      id: 4,
      title: 'SEO Specialist',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Thai Nguyen / Hanoi',
      salary: '$435 – $780/mo',
      deptColor: '#8B5CF6',
      desc: 'Conduct keyword research, optimise on/off-page SEO, and build strategies to improve website rankings in search engines.',
      requirements: [
        '1+ year SEO experience with proven results (ranking, traffic)',
        'Proficient with Google Search Console, Ahrefs/SEMrush',
        'SEO content writing and analytical thinking',
        'Link building and technical SEO experience is a plus',
      ],
    },
    {
      id: 5,
      title: 'Amazon Global Specialist',
      dept: 'E-Commerce',
      type: 'Full-time',
      location: 'Thai Nguyen / Remote',
      salary: '$650 – $1,100/mo',
      deptColor: '#EF4444',
      desc: 'Manage Amazon Seller/Vendor accounts, optimise Listings, A+ Content, and run PPC to maximise export revenue.',
      requirements: [
        '1+ year experience selling on Amazon (Seller or Vendor Central)',
        'Understanding of Amazon PPC, A+ Content, Brand Store',
        'Product research and competitive analysis skills',
        'Good business English (reading and comprehension)',
      ],
    },
    {
      id: 6,
      title: 'Graphic Designer / Visual Creative',
      dept: 'Creative',
      type: 'Full-time',
      location: 'Thai Nguyen / Hanoi',
      salary: '$435 – $780/mo',
      deptColor: '#F59E0B',
      desc: 'Design multi-channel marketing materials from banner ads and social media graphics to brand identity for clients.',
      requirements: [
        '1+ year graphic design experience with a portfolio',
        'Proficient in Adobe Illustrator, Photoshop, and Figma',
        'Creative thinking and aesthetic trend awareness',
        'Experience in Digital Marketing design is a plus',
      ],
    },
    {
      id: 7,
      title: 'Digital Marketing Intern',
      dept: 'Marketing',
      type: 'Part-time / Intern',
      location: 'Thai Nguyen',
      salary: '$130 – $220/mo',
      deptColor: '#6366F1',
      desc: 'A hands-on internship in a professional Digital Marketing environment, learning from a team with 5+ years of experience.',
      requirements: [
        '3rd/4th year or fresh graduate in Marketing, Business, or IT',
        'Passion for Digital Marketing and E-commerce',
        'Good communication and eagerness to learn',
        'Can work at least 4 sessions/week at the office',
      ],
    },
  ],
};

// ─── Benefits data ────────────────────────────────────────────────────────────
const benefits = {
  vi: [
    { icon: DollarSign, color: '#10B981', title: 'Lương cạnh tranh',    desc: 'Mức lương hấp dẫn, xét tăng định kỳ 6 tháng, thưởng theo KPI và dự án.' },
    { icon: TrendingUp, color: '#6366F1', title: 'Phát triển rõ ràng',  desc: 'Lộ trình thăng tiến rõ ràng, được mentor bởi đội ngũ 5+ năm kinh nghiệm thực chiến.' },
    { icon: BookOpen,   color: '#F9A223', title: 'Đào tạo liên tục',    desc: 'Tham gia khóa học, workshop, conference về Digital Marketing & E-commerce miễn phí.' },
    { icon: Zap,        color: '#EF4444', title: 'Môi trường năng động', desc: 'Làm việc trực tiếp với các thương hiệu thực, tiếp xúc với dự án đa dạng từ ngày đầu.' },
    { icon: Heart,      color: '#EC4899', title: 'Văn hóa cởi mở',      desc: 'Không có biên giới bộ phận, mọi ý tưởng đều được lắng nghe và tôn trọng.' },
    { icon: Coffee,     color: '#F59E0B', title: 'Phúc lợi tốt',        desc: 'Bảo hiểm đầy đủ, team building định kỳ, tặng quà ngày lễ và môi trường làm việc thoải mái.' },
  ],
  en: [
    { icon: DollarSign, color: '#10B981', title: 'Competitive Salary',   desc: 'Attractive salary, bi-annual review, bonuses based on KPI and project performance.' },
    { icon: TrendingUp, color: '#6366F1', title: 'Clear Career Path',    desc: 'Transparent promotion path, mentored by a team with 5+ years of hands-on experience.' },
    { icon: BookOpen,   color: '#F9A223', title: 'Continuous Learning',  desc: 'Free access to Digital Marketing & E-commerce courses, workshops, and conferences.' },
    { icon: Zap,        color: '#EF4444', title: 'Dynamic Environment',  desc: 'Work directly with real brands and get exposure to diverse projects from day one.' },
    { icon: Heart,      color: '#EC4899', title: 'Open Culture',         desc: 'No departmental silos — every idea is heard and valued.' },
    { icon: Coffee,     color: '#F59E0B', title: 'Great Benefits',       desc: 'Full insurance, regular team building, holiday gifts, and a comfortable work environment.' },
  ],
};

// ─── Employee Marquee data ────────────────────────────────────────────────────
const teamMembers = {
  vi: [
    { name: 'Nguyễn Linh', role: 'Content Marketing Manager',  dept: 'Marketing',  color: '#6366F1', initials: 'NL', img: TEAM_PHOTOS[0] },
    { name: 'Trần Hùng',   role: 'Performance Ads Specialist', dept: 'Marketing',  color: '#F9A223', initials: 'TH', img: TEAM_PHOTOS[1] },
    { name: 'Minh Tú',     role: 'E-commerce Manager',         dept: 'E-Commerce', color: '#10B981', initials: 'MT', img: TEAM_PHOTOS[2] },
    { name: 'Phạm Quân',   role: 'SEO Specialist',             dept: 'Marketing',  color: '#8B5CF6', initials: 'PQ', img: TEAM_PHOTOS[3] },
    { name: 'Đặng Thảo',   role: 'Amazon Global Specialist',   dept: 'E-Commerce', color: '#EF4444', initials: 'ĐT', img: TEAM_PHOTOS[4] },
    { name: 'Hoàng Vân',   role: 'Graphic Designer',           dept: 'Creative',   color: '#F59E0B', initials: 'HV', img: TEAM_PHOTOS[5] },
    { name: 'Lê Dũng',     role: 'Digital Marketing Lead',     dept: 'Marketing',  color: '#6366F1', initials: 'LĐ', img: TEAM_PHOTOS[6] },
    { name: 'Bùi Nga',     role: 'Brand Strategist',           dept: 'Creative',   color: '#EC4899', initials: 'BN', img: TEAM_PHOTOS[7] },
    { name: 'Cao Khải',    role: 'Data Analyst',               dept: 'E-Commerce', color: '#10B981', initials: 'CK', img: TEAM_PHOTOS[8] },
  ],
  en: [
    { name: 'Nguyen Linh', role: 'Content Marketing Manager',  dept: 'Marketing',  color: '#6366F1', initials: 'NL', img: TEAM_PHOTOS[0] },
    { name: 'Tran Hung',   role: 'Performance Ads Specialist', dept: 'Marketing',  color: '#F9A223', initials: 'TH', img: TEAM_PHOTOS[1] },
    { name: 'Minh Tu',     role: 'E-commerce Manager',         dept: 'E-Commerce', color: '#10B981', initials: 'MT', img: TEAM_PHOTOS[2] },
    { name: 'Pham Quan',   role: 'SEO Specialist',             dept: 'Marketing',  color: '#8B5CF6', initials: 'PQ', img: TEAM_PHOTOS[3] },
    { name: 'Dang Thao',   role: 'Amazon Global Specialist',   dept: 'E-Commerce', color: '#EF4444', initials: 'DT', img: TEAM_PHOTOS[4] },
    { name: 'Hoang Van',   role: 'Graphic Designer',           dept: 'Creative',   color: '#F59E0B', initials: 'HV', img: TEAM_PHOTOS[5] },
    { name: 'Le Dung',     role: 'Digital Marketing Lead',     dept: 'Marketing',  color: '#6366F1', initials: 'LD', img: TEAM_PHOTOS[6] },
    { name: 'Bui Nga',     role: 'Brand Strategist',           dept: 'Creative',   color: '#EC4899', initials: 'BN', img: TEAM_PHOTOS[7] },
    { name: 'Cao Khai',    role: 'Data Analyst',               dept: 'E-Commerce', color: '#10B981', initials: 'CK', img: TEAM_PHOTOS[8] },
  ],
};

const DEPT_STYLE: Record<string, { bg: string; color: string }> = {
  'Marketing':  { bg: 'rgba(99,102,241,0.10)',  color: '#6366F1' },
  'E-Commerce': { bg: 'rgba(16,185,129,0.10)',  color: '#059669' },
  'Creative':   { bg: 'rgba(245,158,11,0.10)',  color: '#B45309' },
};

// ─── EmployeeMarquee component ────────────────────────────────────────────────
function EmployeeMarquee({ lang }: { lang: 'vi' | 'en' }) {
  const members = teamMembers[lang];
  const doubled = [...members, ...members, ...members, ...members];
  const [paused, setPaused] = useState(false);

  return (
    <section
      style={{
        padding: '64px 0',
        backgroundColor: 'var(--cb-bg-page)',
        overflow: 'hidden',
        borderTop: '1px solid var(--cb-border)',
        borderBottom: '1px solid var(--cb-border)',
      }}
    >
      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: 'var(--cb-border)' }} />
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '100px',
            border: '1px solid var(--cb-border)',
            backgroundColor: 'var(--cb-bg-alt)',
          }}>
            <span style={{
              display: 'inline-block',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#F9A223',
              animation: 'cbPulse 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--cb-text-muted)',
            }}>
              {lang === 'vi' ? 'Đội ngũ CorgiBanana' : 'The CorgiBanana Team'}
            </span>
          </div>
          <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: 'var(--cb-border)' }} />
        </div>
      </div>

      {/* Fade mask + scrolling track */}
      <div
        style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0px, #000 100px, #000 calc(100% - 100px), transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0px, #000 100px, #000 calc(100% - 100px), transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '14px',
            width: 'max-content',
            animation: 'cbMarqueeScroll 38s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {doubled.map((m, i) => {
            const dept = DEPT_STYLE[m.dept] ?? { bg: 'rgba(107,114,128,0.10)', color: '#6B7280' };
            return (
              <div
                key={i}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--cb-bg-card)',
                  border: '1px solid var(--cb-border)',
                  borderRadius: '12px',
                  padding: '16px',
                  flexShrink: 0,
                  width: '140px',
                  cursor: 'default',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Square photo */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: m.color + '22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: m.color,
                    fontFamily: 'Inter, sans-serif',
                    flexShrink: 0,
                  }}
                >
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  ) : (
                    m.initials
                  )}
                </div>

                {/* Info below photo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', width: '100%' }}>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--cb-text-primary)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {m.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: 'var(--cb-text-muted)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '100%',
                    }}
                  >
                    {m.role}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      padding: '2px 8px',
                      borderRadius: '20px',
                      backgroundColor: dept.bg,
                      color: dept.color,
                      marginTop: '3px',
                    }}
                  >
                    {m.dept}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes cbMarqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cbPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}

// ─── JobCard component ────────────────────────────────────────────────────────
function JobCard({ job, lang, onApply }: { job: typeof jobs['vi'][0]; lang: 'vi' | 'en'; onApply: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      style={{ borderRadius: '16px', border: '1px solid var(--cb-border)', backgroundColor: 'var(--cb-bg-card)', overflow: 'hidden' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '28px 32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px' }}>
            <span style={{ padding: '3px 10px', borderRadius: '100px', backgroundColor: job.deptColor + '18', color: job.deptColor, fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em' }}>
              {job.dept}
            </span>
            <span style={{ padding: '3px 10px', borderRadius: '100px', border: '1px solid var(--cb-border)', color: 'var(--cb-text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600 }}>
              {job.type}
            </span>
          </div>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '10px' }}>{job.title}</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--cb-text-muted)' }}>
              <MapPin size={13} /> {job.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--cb-text-muted)' }}>
              <Clock size={13} /> {job.type}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#10B981' }}>
              <DollarSign size={13} /> {job.salary}
            </span>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={20} color="var(--cb-text-muted)" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 32px 32px', borderTop: '1px solid var(--cb-border)' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--cb-text-secondary)', lineHeight: 1.7, marginTop: '20px', marginBottom: '20px' }}>
                {job.desc}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '10px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                {lang === 'vi' ? 'Yêu cầu:' : 'Requirements:'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {job.requirements.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--cb-text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: job.deptColor, flexShrink: 0, marginTop: '7px' }} />
                    {r}
                  </li>
                ))}
              </ul>
              <button
                onClick={onApply}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 24px', borderRadius: '100px', backgroundColor: job.deptColor, color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'opacity 0.2s, transform 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                {lang === 'vi' ? 'Ứng tuyển ngay' : 'Apply Now'}
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── RecruitmentPage ──────────────────────────────────────────────────────────
export function RecruitmentPage() {
  const { lang } = useLanguage();
  const jobList = jobs[lang];
  const benList = benefits[lang];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Recruitment intro (hideCta=true hides button on this page) ── */}
      <div style={{ paddingTop: '64px' }}>
        <Recruitment hideCta />
      </div>

      {/* ── Employee Marquee ── */}
      <EmployeeMarquee lang={lang} />

      {/* ── Open Positions ── */}
      <section id="jobs" style={{ backgroundColor: 'var(--cb-bg-alt)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'VỊ TRÍ ĐANG MỞ' : 'OPEN POSITIONS'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? `${jobList.length} Vị Trí Đang Tuyển Dụng` : `${jobList.length} Open Positions`}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jobList.map((job) => (
              <JobCard key={job.id} job={job} lang={lang} onApply={() => setModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-page)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'PHÚC LỢI & MÔI TRƯỜNG' : 'BENEFITS & CULTURE'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Tại Sao Chọn CorgiBanana?' : 'Why Join CorgiBanana?'}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="ben-grid">
            {benList.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ padding: '30px 28px', borderRadius: '18px', backgroundColor: 'var(--cb-bg-card)', border: '1px solid var(--cb-border)' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: b.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Icon size={22} color={b.color} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '8px' }}>{b.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--cb-text-secondary)', lineHeight: 1.7 }}>{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .ben-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 580px) { .ben-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── CTA / Apply Banner ── */}
      <section style={{ background: 'linear-gradient(135deg, #F9A223 0%, #F59E0B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Users size={40} color="#fff" strokeWidth={1.5} style={{ marginBottom: '20px', opacity: 0.9 }} />
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {lang === 'vi' ? 'Không tìm thấy vị trí phù hợp?' : "Don't see a matching position?"}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '32px' }}>
            {lang === 'vi'
              ? 'Hãy gửi CV của bạn tới chúng tôi. Chúng tôi luôn tìm kiếm những tài năng xuất sắc để bổ sung vào đội ngũ.'
              : "Send us your CV anyway. We're always looking for outstanding talent to add to our team."}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', borderRadius: '100px',
              backgroundColor: '#fff', color: '#F9A223',
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700,
              border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.18)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'; }}
          >
            {lang === 'vi' ? 'Gửi CV của bạn' : 'Send Your CV'}
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* ── Contact / Apply Modal ── */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}