import { Heart, Shield, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-xl shadow-soft">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">DentalCare+</h3>
                <p className="text-sm text-muted-foreground">Cuidado que tranquiliza</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformando a experiência odontológica através da tecnologia, 
              tornando cada consulta mais humana, transparente e acolhedora.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-accent transition-colors">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Aplicativo</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Área educativa</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Para dentistas</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de uso</a></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-border/50">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Email</div>
              <div className="text-sm text-muted-foreground">contato@dentalcare.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Telefone</div>
              <div className="text-sm text-muted-foreground">(11) 99999-9999</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Endereço</div>
              <div className="text-sm text-muted-foreground">São Paulo, SP</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 DentalCare+. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Dados protegidos e seguros</span>
          </div>
        </div>
      </div>
    </footer>
  );
};