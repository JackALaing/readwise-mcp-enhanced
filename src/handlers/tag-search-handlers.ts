import { initializeClient } from '../utils/client-init.js';

export async function handleListTags(args: any) {
  const client = initializeClient();
  const response = await client.listTags();
  const tagsText = response.data.map((tag: any) => `- ${tag.name} (${tag.key})`).join('\n');

  let responseText = `Available tags:\n${tagsText}`;
  
  if (response.messages && response.messages.length > 0) {
    responseText += '\n\nMessages:\n' + response.messages.map(msg => `${msg.type.toUpperCase()}: ${msg.content}`).join('\n');
  }

  return {
    content: [
      {
        type: 'text',
        text: responseText,
      },
    ],
  };
} 