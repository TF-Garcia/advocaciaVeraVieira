import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";

export default function BlogSection() {
  return (
    <section id="posts" className="px-4 py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-3">
            Conteúdos informativos
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
            Artigos e orientações jurídicas
          </h2>

          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Informações úteis para ajudar você a entender melhor seus direitos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/posts/${post.slug}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-elegant)]">
        <img
          src={post.image}
          alt={post.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="p-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            {post.date} • {post.readingTime}
          </p>

          <h3 className="text-xl text-primary font-serif mb-3 leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
            Ler artigo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
