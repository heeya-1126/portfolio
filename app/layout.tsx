import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Operations — Process Portfolio', description: '운영 구조 설계, 영업 프로세스 정착, 매출 기준 데이터 구축을 담은 Sales Operations · Business Operations 포트폴리오.' };
export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="ko"><body>{children}</body></html>;
}
