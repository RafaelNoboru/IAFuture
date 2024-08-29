import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Sobre(){
    return(
        <main className="min-h-screen flex flex-col bg-[url('/fundo.jpg')] bg-cover bg-center bg-no-repeat">
        <header className="bg-blue-900 p-4 w-full">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatar.jpg" alt="User Avatar" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
            <Link href="/">
                <span className="text-white text-lg font-sans">Página Principal</span>
            </Link>
            </div>
          </div>
        </header>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold text-white mb-8">Sobre nós</h1>
        <section className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">IA FUTURE: Impulsionando o Crescimento Empresarial com Inteligência Artificial</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objetivos do Projeto IA FUTURE</h2>

        <p className="text-lg text-gray-700 mb-4">
          O projeto IA FUTURE da Plusoft é uma iniciativa inovadora que utiliza a Inteligência Artificial (IA) generativa e o Deep Analytics para transformar dados em crescimento estratégico para empresas. Nosso objetivo é permitir que organizações de médio a grande porte, bem como profissionais de marketing, atendimento ao cliente, e líderes de TI, aproveitem o poder dos dados de forma profunda e preditiva.
        </p>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
          <li><strong>Prever o Comportamento do Cliente:</strong> Desenvolver um modelo de previsão que analisa grandes volumes de dados para identificar padrões de comportamento, permitindo que as empresas antecipem as necessidades dos clientes e ofereçam soluções no momento certo.</li>
          <li><strong>Explorar a IA Generativa:</strong> Utilizar IA generativa para criar novos insights a partir de dados existentes, fornecendo às empresas uma vantagem competitiva ao gerar informações estratégicas que impulsionam decisões de negócios.</li>
          <li><strong>Aprimorar a Experiência do Cliente:</strong> Integrar tecnologias avançadas de IA com um foco em experiência humana (HX), garantindo que as interações com os clientes sejam não apenas eficientes, mas também profundamente significativas e personalizadas.</li>
          <li><strong>Impulsionar o Crescimento Sustentável:</strong> Facilitar o crescimento empresarial por meio de análises profundas que informam estratégias de mercado, aumentando a eficácia das campanhas de marketing e melhorando o relacionamento com o cliente.</li>
        </ul>

        <p className="text-lg text-gray-700 mt-4">
          O projeto IA FUTURE é mais do que uma simples ferramenta; é uma abordagem estratégica que combina tecnologia de ponta com uma compreensão profunda das necessidades humanas, posicionando a Plusoft como líder na transformação digital voltada para a experiência do cliente.
        </p>
        </section>
        </div>
        
        </main>
    )
}