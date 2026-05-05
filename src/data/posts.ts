export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "aposentadoria-urbana",
    title: "Aposentadoria urbana: entenda seus direitos",
    excerpt: "Veja quem tem direito e como funciona o pedido de aposentadoria urbana.",
    image: "/placeholder.png",
    date: "05 maio 2026",
    readingTime: "4 min de leitura",
    content: [
      "A aposentadoria urbana é um benefício destinado ao trabalhador que cumpriu os requisitos exigidos pela Previdência Social.",
      "É importante analisar tempo de contribuição, idade mínima e documentação antes de fazer o pedido.",
      "Em caso de dúvida, o ideal é buscar orientação jurídica para evitar erros no processo."
    ],
  },
  {
    slug: "pensao-por-morte",
    title: "Pensão por morte: quem pode receber?",
    excerpt: "Entenda quem tem direito ao benefício e quais documentos são necessários.",
    image: "/placeholder.png",
    date: "05 maio 2026",
    readingTime: "3 min de leitura",
    content: [
      "A pensão por morte é um benefício pago aos dependentes do segurado falecido.",
      "Podem ter direito cônjuge, filhos e outros dependentes, conforme a situação familiar.",
      "A análise correta dos documentos é essencial para aumentar as chances de aprovação."
    ],
  },
    {
    slug: "outro-post-generico",
    title: "Outro post genérico",
    excerpt: "Entenda os principais pontos sobre este tema.",
    image: "/placeholder.png",
    date: "05 maio 2026",
    readingTime: "3 min de leitura",
    content: [
      "A pensão por morte é um benefício pago aos dependentes do segurado falecido.",
      "Podem ter direito cônjuge, filhos e outros dependentes, conforme a situação familiar.",
      "A análise correta dos documentos é essencial para aumentar as chances de aprovação."
    ],
  },
  {
    slug: "mais-um-post-generico",
    title: "Mais um post genérico",
    excerpt: "Entenda os principais pontos sobre este tema.",
    image: "/placeholder.png",
    date: "05 maio 2026",
    readingTime: "3 min de leitura",
    content: [
      "A pensão por morte é um benefício pago aos dependentes do segurado falecido.",
      "Podem ter direito cônjuge, filhos e outros dependentes, conforme a situação familiar.",
      "A análise correta dos documentos é essencial para aumentar as chances de aprovação."
    ],
  },
];
