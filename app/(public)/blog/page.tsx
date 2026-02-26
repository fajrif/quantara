import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { OurCommitment } from "@/components/our-commitment"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { format } from "date-fns"
import { id } from "date-fns/locale"

// Force dynamic rendering to avoid database calls during build
export const dynamic = 'force-dynamic'

export default async function MediaPage() {
  // Fetch published articles from database
  const articles = await prisma.article.findMany({
    where: { status: "PUBLISHED" },
    include: {
      category: { select: { name: true } },
    },
    orderBy: { published_date: "desc" },
  })

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <PageBanner
        title="Articles & Publications"
        description="Our articles and publications reflect our commitment to thought leadership in the financial industry. Through in-depth analysis, market insights, and expert commentary, we provide valuable perspectives to help clients and partners stay informed in a rapidly evolving financial landscape."
      />

      {/* Articles Grid */}
      <section className="bg-primary pb-20 px-4">
        <AnimatedDiv id="articles-grid" className="container mx-auto">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article: typeof articles[0]) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <article className="group h-full border border-white/20 bg-[rgba(231,236,235,0.08)] overflow-hidden backdrop-blur hover:bg-[rgba(231,236,235,0.10)] transition-all duration-300">
                    {/* Article Image */}
                    {article.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="flex flex-col h-full p-6">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 border border-white/10 bg-white/5 text-xs text-white/60">
                          {article.category.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-regular text-white mb-3 group-hover:text-[hsl(var(--ptr-primary))] leading-tight transition-colors">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                        {article.short_description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-xs text-white/40">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>
                              {article.published_date
                                ? format(new Date(article.published_date), "d MMM yyyy", { locale: id })
                                : ""}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>5 min</span>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/50 font-light text-lg">No articles available at this time</p>
            </div>
          )}
        </AnimatedDiv>
      </section>

      {/* Our Commitment Section */}
      <OurCommitment
        title="Our Commitment"
        desc="We aim to create a trusted platform where businesses, investors, and operators can engage opportunities with confidence, supported by strategic insight, disciplined execution, and curated introductions."
      />

    </div>
  )
}
