# Geração de TOKEN JWT

1. Instalar dependências:   
   `npm i`
2. Configurar *index.js*:   
   1. **iss**: (Issuer) Origem do token
   2. **iat**: (issueAt) Timestamp de quando o token foi gerado
   3. **exp**: (Expiration) Timestamp de quando o token expira
   4. **name**: Entidade a quem o token pertence, normalmente o ID do usuário
   5. **email**: Entidade a quem o token pertence.
   
   6. *PS: pode-se criar quaisquer outros campos.*
3. Configurar a variavel token com a sua SECRET:   
   `var token = jwt.sign(payload, "sua Secret")` 
4. Executar o *index.js*:   
   `node index.js`

Validar chave:
5. Copiar o token gerado no CMD e testar a validação no endereço: https://jwt.io/
6. Usar sua secret no campo ***your-256-bit-secret***


7. Utilizar seu token nas aplicações.