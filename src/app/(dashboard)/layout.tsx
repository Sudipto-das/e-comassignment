import Navber from "../(components)/navber"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="fixed w-full top-0 z-10">
                <Navber />
            </div>
   
        {children}
      </section>
    )
  }