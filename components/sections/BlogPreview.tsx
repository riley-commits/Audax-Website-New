import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative py-24 bg-[#FAFAF8] overflow-hidden">
      {/* A — subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2E5F8A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Latest Thinking</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">
              News & Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#2E5F8A]/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#2E5F8A] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">{post.readTime}</span>
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-base leading-snug mb-3 group-hover:text-[#2E5F8A] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6B7280]">{post.publishDate}</span>
                  <span className="text-xs font-semibold text-[#2E5F8A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A]"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
