# Configuration EmailJS pour le formulaire de contact

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois gratuits)

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID**

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template de base :

```
Nouveau message de {{name}}

Email: {{email}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. Les variables importantes :
   - `{{name}}` : Nom de l'expéditeur
   - `{{email}}` : Email de l'expéditeur
   - `{{message}}` : Le message

5. Configurez l'email de destination (votre email)
6. Notez votre **Template ID**

### 4. Obtenir votre clé publique
1. Allez dans "Account" → "General"
2. Copiez votre **Public Key**

### 5. Configurer l'application

#### Option A : Variables d'environnement (Recommandé)
1. Créez un fichier `.env` à la racine du projet :
```bash
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

2. Modifiez `src/pages/Contact.jsx` :
```javascript
const result = await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

#### Option B : Directement dans le code
Remplacez dans `src/pages/Contact.jsx` :
```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',        // Remplacez par votre Service ID
  'YOUR_TEMPLATE_ID',       // Remplacez par votre Template ID
  form.current,
  'YOUR_PUBLIC_KEY'         // Remplacez par votre Public Key
)
```

### 6. Tester le formulaire
1. Lancez votre application : `npm run dev`
2. Allez sur la page Contact
3. Remplissez et envoyez le formulaire
4. Vérifiez votre email !

## Attributs de formulaire pour EmailJS

Assurez-vous que vos champs de formulaire ont les bons attributs `name` :
- `name` pour le nom
- `email` pour l'email
- `message` pour le message

Ces noms doivent correspondre aux variables dans votre template EmailJS (`{{name}}`, `{{email}}`, `{{message}}`).

## Dépannage

### Le message ne s'envoie pas
- Vérifiez vos clés API dans la console du navigateur
- Vérifiez que votre service email est bien configuré sur EmailJS
- Assurez-vous que les noms des champs correspondent au template

### Erreur CORS
- EmailJS gère automatiquement les CORS, mais vérifiez que vous utilisez bien `@emailjs/browser` et non `emailjs-com`

### Limite atteinte
- Le plan gratuit permet 100 emails/mois
- Passez à un plan payant si nécessaire

## Support
Pour plus d'informations, consultez la [documentation officielle d'EmailJS](https://www.emailjs.com/docs/).

