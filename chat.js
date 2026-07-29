import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

createChat({
  webhookUrl: 'https://miguelpellatiero.app.n8n.cloud/webhook/6a042c2c-acdc-4c90-9df6-ab4e2f6c5764/chat',
  mode: 'window',
  showWelcomeScreen: false,
  initialMessages: [
    'Olá! 👋 Sou o assistente virtual do estúdio.',
    'Posso te ajudar com ensaios, pacotes, datas e orçamentos.'
  ],
  i18n: {
    en: {
      title: 'Estúdio Fotográfico',
      subtitle: 'Atendimento 24/7 — tire suas dúvidas sobre ensaios e pacotes.',
      getStarted: 'Nova conversa',
      inputPlaceholder: 'Digite sua mensagem...',
      footer: '',
      closeButtonTooltip: 'Fechar'
    }
  }
});
