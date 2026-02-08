import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app.sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="hidden sm:block">
        <AppSidebar />
      </div>
      <main>{children}</main>
    </SidebarProvider>
  );
}
