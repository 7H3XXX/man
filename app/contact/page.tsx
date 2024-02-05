import { DEFAULT_OG } from "lib/default-og";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    ...DEFAULT_OG.openGraph,
    title: `Contact | ${DEFAULT_OG.openGraph.title}`,
  },
};

export default function Contact() {
  return (
    <section>
      <div className="mt-24 mb-36">
        <h1 className="font-bold text-4xl text-center tracking-tight mb-8">
          Let's work on your next project or message me to say hi!
        </h1>
        <div className="text-center">
          <Link href={"mailto:ngaba.marcantoine@gmail.com"}>
            <button className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8">
              ngaba.marcantoine@gmail.com
            </button>
          </Link>
        </div>
        {/* <form
          // style={{ opacity: !pending ? 1 : 0.7 }}
          // className="relative max-w-[500px]"
          className="relative flex flex-wrap gap-y-4 justify-between"
          // ref={formRef}
          // action={async (formData) => {
          //   await saveGuestbookEntry(formData);
          //   formRef.current?.reset();
          // }}
        >
          <div className="min-[600px]:w-[48%] w-full">
            <label htmlFor="name">Name</label>
            <input
              aria-label="Your name"
              placeholder="Your name..."
              // disabled={pending}
              name="name"
              type="text"
              required
              id="name"
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div className="min-[600px]:w-[48%] w-full">
            <label htmlFor="email">Email</label>
            <input
              aria-label="Your email"
              placeholder="Your email..."
              // disabled={pending}
              name="email"
              type="email"
              required
              id="email"
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div className="w-full">
            <label htmlFor="message">Message</label>
            <textarea
              aria-label="Your message"
              placeholder="Your message (max 500 words)."
              // disabled={pending}
              name="message"
              required
              id="message"
              maxLength={500}
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 max-h-[300px] min-h-[105px]"
            />
          </div>

          <div>
            <button
              className="flex items-center justify-center px-4 py-2 font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded"
              // disabled={pending}
              type="submit"
            >
              Send
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}
