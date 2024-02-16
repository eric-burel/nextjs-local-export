import Link from "next/link"

export function generateStaticParams() {
    return [{
        slug: "intro",
    }, {
        slug: "getting-started",
    }]
}

export default function DocPage({ params: { slug } }: any) {
    return <div>
        <p>{slug}</p>
        <p>
            <Link href="/index.html">Back to home</Link>
        </p>
    </div>
}