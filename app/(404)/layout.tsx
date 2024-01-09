import '../globals.css'
import ProgressBar from '../components/ProgressBar'

interface ErrorProps {
  children: React.ReactNode;
}

export default function GlobalError({ children }: ErrorProps) {
  return (
    <html>
      <body>
        <ProgressBar>
          {children}
        </ProgressBar>
      </body>
    </html>
  );
}