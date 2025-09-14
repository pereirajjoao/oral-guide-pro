import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Play, 
  Eye, 
  Volume2, 
  Download,
  Star,
  Clock,
  Users,
  Award,
  ChevronRight,
  Heart,
  Shield
} from "lucide-react";

const educationalContent = [
  {
    title: "Limpeza Dental Profissional",
    description: "Entenda por que a limpeza é essencial para sua saúde bucal",
    duration: "3 min",
    type: "video",
    rating: 4.9,
    views: "12k",
    thumbnail: "🦷"
  },
  {
    title: "Como é feito um Canal?",
    description: "Animação 3D mostra o procedimento passo a passo",
    duration: "5 min",
    type: "3d",
    rating: 4.8,
    views: "8.5k",
    thumbnail: "🔬"
  },
  {
    title: "Cuidados Pós-Extração",
    description: "Guia completo para uma recuperação tranquila",
    duration: "4 min",
    type: "guide",
    rating: 4.9,
    views: "15k",
    thumbnail: "💊"
  },
  {
    title: "Ortodontia Moderna",
    description: "Conheça as opções de aparelhos disponíveis hoje",
    duration: "6 min",
    type: "video",
    rating: 4.7,
    views: "20k",
    thumbnail: "✨"
  }
];

const categories = [
  { name: "Procedimentos", count: 24, icon: "🔧" },
  { name: "Prevenção", count: 18, icon: "🛡️" },
  { name: "Cuidados", count: 31, icon: "💚" },
  { name: "Infantil", count: 12, icon: "🧸" }
];

export const EducationalSection = () => {
  return (
    <section id="educativo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Área Educativa Personalizada
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Conhecimento que 
            <span className="text-primary"> tranquiliza</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Biblioteca completa com vídeos, animações 3D e explicações claras sobre 
            tratamentos odontológicos. Porque entender é o primeiro passo para se sentir seguro.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <div className="text-2xl font-bold text-primary mb-1">85+</div>
            <div className="text-sm text-muted-foreground">Vídeos educativos</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <div className="text-2xl font-bold text-success mb-1">4.8⭐</div>
            <div className="text-sm text-muted-foreground">Avaliação média</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <div className="text-2xl font-bold text-accent-warm mb-1">50k+</div>
            <div className="text-sm text-muted-foreground">Visualizações</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-soft border border-border/50">
            <div className="text-2xl font-bold text-secondary-accent mb-1">12</div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-6">Categorias</h3>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <Card key={index} className="p-4 hover:shadow-gentle transition-all cursor-pointer border border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <div className="font-medium text-foreground">{category.name}</div>
                        <div className="text-sm text-muted-foreground">{category.count} conteúdos</div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>

            {/* Featured Content */}
            <Card className="p-6 mt-6 bg-gradient-secondary border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-secondary-accent" />
                <span className="font-semibold text-secondary-foreground">Mais Assistido</span>
              </div>
              <h4 className="font-bold text-secondary-foreground mb-2">
                "Vencendo o Medo do Dentista"
              </h4>
              <p className="text-secondary-foreground/80 text-sm mb-4">
                Técnicas de relaxamento e dicas para uma experiência mais tranquila
              </p>
              <Button variant="calm" size="sm" className="w-full">
                <Play className="h-4 w-4" />
                Assistir Agora
              </Button>
            </Card>
          </div>

          {/* Content Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Conteúdo em Destaque</h3>
              <Button variant="outline" size="sm">
                Ver Todos
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationalContent.map((content, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-gentle transition-all border border-border/50 group">
                  {/* Thumbnail */}
                  <div className="relative bg-gradient-primary h-32 flex items-center justify-center">
                    <span className="text-4xl">{content.thumbnail}</span>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="floating" size="icon">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-background/90 text-foreground px-2 py-1 rounded-md text-xs font-medium">
                        {content.type === 'video' && '📹 Vídeo'}
                        {content.type === '3d' && '🎯 3D'}
                        {content.type === 'guide' && '📖 Guia'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">{content.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {content.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {content.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {content.views}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-accent-warm" />
                        {content.rating}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="hero" size="sm" className="flex-1">
                        <Play className="h-4 w-4" />
                        Assistir
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Special Features */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 bg-success-light border border-success/20">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-success" />
                  <h4 className="font-bold text-success">Modo Criança</h4>
                </div>
                <p className="text-success text-sm mb-4">
                  Interface lúdica e educativa especialmente desenvolvida para os pequenos
                </p>
                <Button variant="success" size="sm">
                  Explorar Modo Criança
                </Button>
              </Card>

              <Card className="p-6 bg-primary-light border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 className="h-6 w-6 text-primary" />
                  <h4 className="font-bold text-primary">Narração por Voz</h4>
                </div>
                <p className="text-primary text-sm mb-4">
                  Conteúdo também disponível em áudio para uma experiência mais acessível
                </p>
                <Button variant="default" size="sm">
                  Ativar Narração
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};