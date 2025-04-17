# Dragon App 🐉

Uma aplicação web moderna para gerenciamento de dragões, permitindo visualizar, criar, editar e excluir dragões de forma intuitiva e responsiva.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e bundler moderno
- **SASS/SCSS** - Pré-processador CSS para estilização avançada
- **JSON Server** - API REST fake para desenvolvimento e testes
- **Concurrently** - Execução de múltiplos comandos simultaneamente
- **React Router DOM** - Roteamento da aplicação
- **Context API** - Gerenciamento de estado global

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/rodrigotgranada/dragon-crud.git

# Entre na pasta do projeto
cd dragon-app

# Instale as dependências
npm install
```

## 🎮 Como Executar

```bash
# Inicia a aplicação (frontend + backend)
npm run start

# O frontend estará disponível em http://localhost:5173
# A API estará disponível em http://localhost:3000
```

## 📁 Estrutura de Pastas

```
src/
├── modules/           # Módulos da aplicação
│   ├── auth/         # Módulo de autenticação
│   │   ├── components/   # Componentes de autenticação
│   │   ├── pages/       # Páginas de login/registro
│   │   ├── provider/    # Contexto de autenticação
│   │   ├── styles/     # Estilos do módulo auth
│   │   └── types/      # Tipos e interfaces
│   │
│   └── dragons/      # Módulo de dragões
│       ├── components/   # Componentes específicos do módulo
│       ├── pages/       # Páginas do módulo
│       ├── provider/    # Contexto e lógica de estado
│       ├── styles/     # Estilos específicos do módulo
│       └── types/      # Tipos e interfaces
│
├── shared/           # Recursos compartilhados
│   ├── components/   # Componentes reutilizáveis
│   ├── hooks/       # Hooks personalizados
│   ├── styles/      # Estilos globais e variáveis
│   └── utils/       # Funções utilitárias
│
├── App.tsx          # Componente principal
└── main.tsx        # Ponto de entrada da aplicação
```

## 🔄 Funcionalidades

- **Sistema de Rotas**: Implementação de rotas públicas e privadas com react-router-dom
- **Registro de Usuário**: Cadastro de usuário para autenticação
- **Login**: Autenticação de usuário para acesso às funcionalidades
- **Listagem de Dragões**: Visualização em lista e cards
- **Detalhes do Dragão**: Página dedicada com informações detalhadas
- **Criação de Dragão**: Formulário para adicionar novos dragões
- **Edição de Dragão**: Atualização de informações existentes
- **Exclusão de Dragão**: Remoção de dragões do sistema
- **Layout Responsivo**: Adaptação para diferentes dispositivos
- **Feedback Visual**: Loading states e mensagens de erro

## 🧪 Desenvolvimento

- **Padrões de Código**: TypeScript
- **Componentização**: Componentes reutilizáveis e modulares
- **Gerenciamento de Estado**: Context API para estado global
- **Roteamento**: 
  - Rotas públicas: Login
  - Rotas privadas: Gerenciamento de dragões (protegidas por autenticação)
  - Redirecionamento automático para login quando não autenticado
- **API**: JSON Server para simular backend
- **Estilização**: SCSS 

