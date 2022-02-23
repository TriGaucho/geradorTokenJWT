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
3. Executar o *index.js*:   
   `node index.js`
4. Copiar o token gerado no CMD e testar a validação no endereço: https://jwt.io/
5. Usar sua secret no campo ***your-256-bit-secret***