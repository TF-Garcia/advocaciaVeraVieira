import { Link, useParams } from "react-router-dom";
import { posts } from "@/data/posts";

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
        <Link to="/" className="text-primary underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="text-sm text-primary underline">
          ← Voltar
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-2xl mt-8 mb-8"
        />

        <p className="text-sm text-muted-foreground mb-3">
          {post.date} • {post.readingTime}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}