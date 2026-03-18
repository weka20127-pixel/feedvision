
import './globals.css';

export const metadata = {
  title: 'FeedVision',
  description: 'رؤية أوضح… علف أفضل',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl'>
      <body>{children}</body>
    </html>
  );
}
