import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJi-0ZFab1xZQR9detm4KLyWw";

const testimonials = [
  {
    id: "aderval-soares",
    name: "Aderval Soares",
    role: "05 de maio de 2026 â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Ã“timo atendimento, agilidades, rapidez. Fui instruindo para melhor decisÃ£o no resultado para minha aposentadoria. Realmente valeu a pena. Super recomendo.",
  },
  {
    id: "claudia-lebre",
    name: "Claudia Lebre",
    role: "29 de abr. de 2025 â€¢ AvaliaÃ§Ã£o Google.",
    rating: 5,
    quote:
      "A Dra. Vera fez meu planejamento previdenciÃ¡rio com qualidade e competÃªncia. Ela fez todo o levantamento das minhas informaÃ§Ãµes junto ao INSS e atualizaÃ§Ãµes necessÃ¡rias. Assim, jÃ¡ podemos deixar tudo pronto para entrar com requerimento da aposentadoria daqui hÃ¡ pouco tempo! Muito competente e atenciosa.",
  },
  {
    id: "salvador-stefanelli",
    name: "Salvador Stefanelli",
    role: "28 de abr. de 2025 â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Dra. Vera Cristina Vieira Ã© uma profissional altamente competente! Conhece a fundo o sistema previdenciÃ¡rio e organizaÃ§Ã£o de inventÃ¡rios! RÃ¡pida na comunicaÃ§Ã£o com o cliente, o que Ã© essencial no desenvolvimento das etapas a serem cumpridas. PrÃ¡tica, resoluta e investigativa! Absolutamente recomendo a todos o seu trabalho! Oferece um preÃ§o justo, o que proporciona um custo-benefÃ­cio altamente favorÃ¡vel ao cliente.",
  },
  {
    id: "marcia-madureira",
    name: "Marcia Madureira",
    role: "12 de dez. de 2024 â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "A Dra Vera Ã© extremamente competente, atenciosa e preocupada com os clientes. Resolveu o problema da aposentadoria do meu marido que se arrastava hÃ¡ anos com extrato no INSS incompleto, etc. Meu marido recebeu a carta de concessÃ£o da aposentadoria dele na semana passada! AlÃ©m do conhecimento, uma pessoa de total confianÃ§a.",
  },
  {
    id: "giovana-tozzi",
    name: "Giovana Tozzi",
    role: "7 meses atrÃ¡s â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Atendimento diferenciado da Dra Vera , muito atenciosa . Me explicou do inÃ­cio ao fim sobre tudo que deveria saber , me auxiliou. Profissional impecÃ¡vel, parabÃ©ns. Que Deus abenÃ§oe muito pela capacidade como lida com cada detalhe.",
  },
  {
    id: "maria-regina-carvalho-guedes",
    name: "Maria Regina Carvalho Guedes",
    role: "2 meses atrÃ¡s â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Foi uma imensa satisfaÃ§Ã£o entrar em contato com a Dra Vera! Profissional impecÃ¡vel, tirou minhas dÃºvidas e me orientou perfeitamente em tudo que eu precisava com relaÃ§Ã£o Ã¡ aposentadoria! Muito competente, atenciosa e dedicada!",
  },
  {
    id: "nelson-de-oliveira-junior",
    name: "Nelson de Oliveira Junior",
    role: "11 meses atrÃ¡s â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Contratamos os serviÃ§os da Dra. Vera Vieira, para auxiliar-nos em processo extra judicial. Ela se mostrou muito competente, sempre nos ajudando a dirimir quaisquer dÃºvidas e tambÃ©m nos contatos com todos os herdeiros, bem como junto ao INSS para resolvermos questÃ£o de resÃ­duos deixados pela falecida. Muito conhecedora dos assuntos ligados a esse Ã³rgÃ£o, onde conseguimos resolver a questÃ£o quase de imediato. Recomendo seus serviÃ§os.",
  },
  {
    id: "franklin-stefanelli",
    name: "Franklin Stefanelli",
    role: "11 meses atrÃ¡s â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Vera Ã© uma profissional diferenciada, humana, muito competente, prestativa e sempre disponÃ­vel. Sempre que precisar de qualquer assessoria jurÃ­dica, ela serÃ¡ a minha advogada. Recomendo!",
  },
  {
    id: "lu",
    name: "LU",
    role: "18 de maio de 2026 â€¢ AvaliaÃ§Ã£o Google",
    rating: 5,
    quote:
      "Quero elogiar o excelente trabalho realizado pela Dra. Vera Vieira no meu planejamento previdenciÃ¡rio e tambÃ©m no serviÃ§o de requerimento da minha aposentadoria. Todo o processo foi conduzido com muita competÃªncia, organizaÃ§Ã£o e atenÃ§Ã£o aos detalhes, e minha aposentadoria foi concluÃ­da em pouco mais de um mÃªs, superando minhas expectativas. AlÃ©m da agilidade e eficiÃªncia, sempre recebi orientaÃ§Ãµes claras e seguras em cada etapa, o que me trouxe muita tranquilidade. Mesmo apÃ³s a conclusÃ£o do processo, continuei recebendo suporte e esclarecimentos importantes, inclusive sobre uma possÃ­vel revisÃ£o da aposentadoria no futuro. SÃ³ tenho gratidÃ£o pelo atendimento humano, pela dedicaÃ§Ã£o e pelo profissionalismo demonstrado durante todo o acompanhamento.",
  },
];

export default function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="mt-16"
    >
      <CarouselContent className="-ml-6">
        {testimonials.map((review) => (
          <CarouselItem key={review.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="block h-full bg-white/5 backdrop-blur border border-white/10 p-8 hover:bg-white/10 transition-colors"
              aria-label={`Abrir avaliaÃ§Ãµes do Google de ${review.name}`}
            >
              <div className="flex items-start justify-between gap-4">
                <Quote className="h-8 w-8 text-gold/80 flex-shrink-0" />
                <div className="flex gap-1" aria-label={`${review.rating} estrelas`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < Math.round(review.rating)
                          ? "fill-gold text-gold"
                          : "text-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-5 max-h-40 overflow-y-auto pr-2 text-white/90 leading-relaxed text-sm md:max-h-none md:overflow-visible md:pr-0">"{review.quote}"</p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-serif text-base text-white">{review.name}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">
                  {review.role}
                </div>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 h-10 w-10 bg-primary text-primary-foreground border-white/20 hover:bg-primary-glow lg:-left-14" />
      <CarouselNext className="-right-4 h-10 w-10 bg-primary text-primary-foreground border-white/20 hover:bg-primary-glow lg:-right-14" />
    </Carousel>
  );
}
