import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { NewsPage } from './pages/NewsPage';
import { ClientsPage } from './pages/ClientsPage';
import { RecruitmentPage } from './pages/RecruitmentPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 've-chung-toi', Component: AboutPage },
      { path: 'dich-vu', Component: ServicesPage },
      { path: 'case-study', Component: CaseStudyPage },
      { path: 'tin-tuc', Component: NewsPage },
      { path: 'khach-hang', Component: ClientsPage },
      { path: 'tuyen-dung', Component: RecruitmentPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
