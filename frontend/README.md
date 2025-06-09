# Sistema de Recomendação de Produtos

## Anotações

Para executar o projeto, siga o README do root do monorepo.

**Requisitos:**

- Node.js 18.3
- Yarn para instalação de dependências

## Sobre o Projeto

O projeto envolve a implementação de um sistema de recomendação de produtos em uma aplicação web existente. O objetivo é desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente, permitindo aos usuários selecionar preferências e receber recomendações de produtos correspondentes.

## Resolução

Para resolver a questão, implementei os seguintes ajustes e funcionalidades:

### 1. Serviço de Recomendações (`getRecommendations.js`)

Criado um algoritmo de recomendação que:

- Recebe dados do formulário (preferências, características e tipo de recomendação)
- Calcula pontuação para cada produto baseado nas correspondências
- Filtra produtos sem pontuação
- Ordena por pontuação (maior para menor) e por índice em caso de empate
- Retorna produto único ou múltiplos produtos conforme selecionado

**Principais características:**

- Sistema de pontuação baseado em correspondências de preferências e características
- Suporte a recomendação única ou múltipla
- Ordenação inteligente por relevância

### 2. Componente de Formulário (`Form.js`)

Implementado formulário principal que:

- Integra os campos de preferências, características e tipo de recomendação
- Utiliza hooks customizados para gerenciamento de estado
- Processa e envia dados para o serviço de recomendações
- Comunica resultados para o componente pai

**Funcionalidades implementadas:**

- Gerenciamento centralizado do estado do formulário
- Integração com sistema de recomendações
- Layout responsivo com grid CSS

### 3. Aplicação Principal (`App.js`)

Estruturado componente raiz que:

- Gerencia estado global das recomendações
- Implementa layout responsivo e atrativo
- Integra formulário e lista de recomendações
- Inclui hero section com call-to-action

**Melhorias visuais:**

- Design gradient para hero section
- Layout responsivo para diferentes dispositivos
- Navegação suave com scroll para formulário
- Estilização consistente com tema da marca

## Funcionalidades Principais

- ✅ Sistema de recomendação baseado em preferências e características
- ✅ Interface intuitiva para seleção de critérios
- ✅ Recomendações em tempo real
- ✅ Suporte a recomendação única ou múltipla
- ✅ Design responsivo e moderno
- ✅ Integração com dados de produtos existentes

## Tecnologias Utilizadas

- React.js
- Hooks customizados para gerenciamento de estado
- Tailwind CSS para estilização
- JavaScript ES6+
