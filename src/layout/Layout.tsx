interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-[hsl(240,10%,3.9%)] text-white">

            <main className="flex-1 flex items-center justify-center px-4 py-12">
                {children}
            </main>

        </div>
    );
}
