import Filter from "../(components)/filter"
import Navber from "../(components)/navber"

export default function ProductLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Navber />
            <div className="flex mt-10 min-h-screen">
                <div className="w-[20%] border-r-2">
                    <Filter />
                </div>
                <div className="w-[80%]">
                    {children}
                </div>

            </div>

        </section>
    )
}