import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-lg font-bold mb-2">Hello</h1>
      <hr />
      <p>This is an example page for the API projects for frontend use.</p>
      <p>Check out the following pages:</p>
      <ul className="list-disc pl-8">
        <li><Link href={`/mi-1`}><a className="text-blue-500">mi-1</a></Link></li>
        <li><Link href={`/mi-2`}><a className="text-blue-500">mi-2</a></Link></li>
      </ul>
    </div>
  );
}
