# Recuperação de senha 

**RF**

- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário de poder resetar sua senha;
  

**RNF**

- Utilizar Mailtrap par testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção; 
- O envio de emails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email resetar senha, deve expirar em 1h;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do Perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**


**RN**

- O não pode alterar seu email para um email ja utilizado;
- Para atualizar a sua senha o usuário deve informar sua senha antiga;
- Para atualizar sua senha o usuário deve confirmar a nova senha;

# Painel do Prestador 

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar notificações não lidas;

**RF**

- Os agendamentos do prestador no dia deve ser armazenado no cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io

**RF**

- A notificação deve ter um status de lida ou não lida para controle do prestador;

# Agendamento dos Serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis de um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os Agendamentos devem estar disponíveis entre as 8h ás 18h (primeiro as 8h e ultimo as 17h);
- O usuário não pode agendar um horário ja ocupado;
- O usuário não pode agendar um horário que ja passou;
- O usuário não pode agendar serviços consigo mesmo;