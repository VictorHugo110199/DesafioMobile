# Desafio Técnico - Aplicativo Mobile

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar habilidades em desenvolvimento mobile utilizando tecnologias modernas, boas práticas e uma arquitetura bem estruturada.

---

## 🛠️ Tecnologias Utilizadas

- **[Expo](https://expo.dev/):** Plataforma para desenvolvimento de aplicativos React Native.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem tipada para maior segurança e produtividade.
- **[Context API](https://reactjs.org/docs/context.html):** Gerenciamento global de estado para dados de login.
- **[Async Storage](https://react-native-async-storage.github.io/async-storage/):** Persistência local para armazenamento de informações de login.
- **[Styled Components](https://styled-components.com/):** Estilização de componentes com CSS-in-JS.
- **[React Navigation](https://reactnavigation.org/):** Navegação entre telas.
- **[Axios](https://axios-http.com/):** Biblioteca para realizar requisições HTTP às APIs.
- **[React Hook Form](https://react-hook-form.com/):** Gerenciamento de formulários com foco em desempenho.
- **[Zod](https://zod.dev/):** Validação de schemas para inputs de formulários.
- **Arquitetura MVC (Model-View-Controller):** Organização do código para maior escalabilidade e manutenção.

---

## 💻 Recursos obrigatórios

 **Telas:**
   - SignIn (Login para acessar as outras telas)
   - Home (Listagem das marcas de carros)
   - Model (Listagem dos modelos de carros ao clicar na marca específica)
     
---

## 📱 Funcionalidades

1. **Autenticação de Usuário:**
   - Login com gerenciamento de estado via Context API.
   - Armazenamento seguro das credenciais utilizando Async Storage.

2. **Navegação:**
   - Estrutura de navegação configurada com React Navigation (ex.: stackNavigator).

3. **Integração com API:**
   - Consumo de dados utilizando Axios para chamadas HTTP.

4. **Formulários:**
   - Criação de formulários utilizando React Hook Form.
   - Validação robusta com Zod para garantir a integridade dos dados.

5. **Design Responsivo:**
   - Estilização customizada com Styled Components para uma interface moderna e amigável.

---

## 🚀 Como Executar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone git@github.com:VictorHugo110199/DesafioMobile.git
   cd seu-repositorio
   
2. **Inicie o proeto:**
   ```bash
   yarn ios
   yarn android

##🧪 Testes e Melhorias Futuras
- Testes: O projeto ainda não possui testes automatizados, mas a estrutura é compatível com Jest e React Testing Library.
- Melhorias Futuras:
- Implementar logout automático após um período de inatividade.
- Implementar autoLogin.
- Adicionar suporte a temas (modo claro/escuro).
